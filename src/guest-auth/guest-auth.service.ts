import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '../prisma/prisma.service';
import { GuestAccessDto } from './dto/guest-access.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { UpdateCompanionsDto } from './dto/update-companions.dto';
import { UpdateGuestProfileDto } from './dto/update-guest-profile.dto';
import type { GuestTokenPayload } from './interfaces/guest-token-payload.interface';

@Injectable()
export class GuestAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async access(dto: GuestAccessDto) {
    const name = this.normalizeName(dto.name);
    const phone = dto.phone.trim();
    const normalizedPhone = this.normalizePhone(phone);

    let guest = await this.prisma.guest.findUnique({
      where: {
        normalizedPhone,
      },
      include: {
        companions: {
          orderBy: {
            createdAt: 'asc',
          },
        },
        giftChoices: {
          select: {
            giftId: true,
          },
        },
      },
    });

    if (!guest) {
      const companion = await this.prisma.companion.findUnique({
        where: { normalizedPhone },
        include: {
          guest: { select: { id: true, name: true } },
          giftChoices: { select: { giftId: true } },
        },
      });

      if (companion) {
        const firstName = name.split(' ')[0].toLocaleLowerCase('pt-BR');
        const companionFirstName = companion.name
          .split(' ')[0]
          .toLocaleLowerCase('pt-BR');

        if (firstName !== companionFirstName) {
          throw new NotFoundException(
            'Primeiro nome ou WhatsApp não encontrado.',
          );
        }

        const accessToken = await this.jwtService.signAsync({
          sub: companion.id,
          phone: normalizedPhone,
          type: 'companion',
        } satisfies GuestTokenPayload);

        return {
          accessToken,
          role: 'companion' as const,
          companion: {
            id: companion.id,
            name: companion.name,
            phone: companion.phone,
            invitedBy: companion.guest,
            giftIds: companion.giftChoices.map((choice) => choice.giftId),
          },
        };
      }

      guest = await this.prisma.guest.create({
        data: {
          name,
          phone,
          normalizedPhone,
        },
        include: {
          companions: true,
          giftChoices: {
            select: {
              giftId: true,
            },
          },
        },
      });
    }

    const payload: GuestTokenPayload = {
      sub: guest.id,
      phone: guest.normalizedPhone,
      type: 'guest',
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      accessToken,
      role: 'guest' as const,
      guest: this.serializeGuest(guest),
    };
  }

  async getMe(guestId: string) {
    const guest = await this.prisma.guest.findUnique({
      where: {
        id: guestId,
      },
      include: {
        companions: {
          orderBy: {
            createdAt: 'asc',
          },
        },
        giftChoices: {
          select: {
            giftId: true,
          },
        },
      },
    });

    if (!guest) {
      throw new NotFoundException('Convidado não encontrado.');
    }

    return this.serializeGuest(guest);
  }

  async getCompanionMe(companionId: string) {
    const companion = await this.prisma.companion.findUnique({
      where: { id: companionId },
      include: {
        guest: { select: { id: true, name: true } },
        giftChoices: { select: { giftId: true } },
      },
    });
    if (!companion) throw new NotFoundException('Acompanhante não encontrado.');

    return {
      id: companion.id,
      name: companion.name,
      phone: companion.phone,
      invitedBy: companion.guest,
      giftIds: companion.giftChoices.map((choice) => choice.giftId),
    };
  }

  async updateAttendance(guestId: string, dto: UpdateAttendanceDto) {
    this.assertRsvpDeadlineOpen();
    const guest = await this.prisma.guest.update({
      where: {
        id: guestId,
      },
      data: {
        attendance: dto.attendance,
      },
      include: {
        companions: {
          orderBy: {
            createdAt: 'asc',
          },
        },
        giftChoices: {
          select: {
            giftId: true,
          },
        },
      },
    });

    return this.serializeGuest(guest);
  }

  async updateCompanions(guestId: string, dto: UpdateCompanionsDto) {
    this.assertRsvpDeadlineOpen();
    const companions = dto.companions.map((companion) => ({
      name: this.normalizeName(companion.name).split(' ')[0],
      phone: companion.phone.trim(),
      normalizedPhone: this.normalizePhone(companion.phone),
    }));

    const normalizedPhones = companions.map((item) => item.normalizedPhone);
    if (new Set(normalizedPhones).size !== normalizedPhones.length) {
      throw new ConflictException(
        'Cada acompanhante deve ter um WhatsApp diferente.',
      );
    }

    const conflictingGuest = await this.prisma.guest.findFirst({
      where: { normalizedPhone: { in: normalizedPhones } },
      select: { id: true },
    });
    if (conflictingGuest) {
      throw new ConflictException(
        'Um dos WhatsApps já pertence a um convidado titular.',
      );
    }

    await this.prisma.$transaction(async (transaction) => {
      await transaction.companion.deleteMany({
        where: {
          guestId,
          normalizedPhone: { notIn: normalizedPhones },
        },
      });

      for (const companion of companions) {
        const existing = await transaction.companion.findUnique({
          where: { normalizedPhone: companion.normalizedPhone },
        });

        if (existing && existing.guestId !== guestId) {
          throw new ConflictException(
            'Este WhatsApp já pertence a outro acompanhante.',
          );
        }

        await transaction.companion.upsert({
          where: { normalizedPhone: companion.normalizedPhone },
          update: { name: companion.name, phone: companion.phone },
          create: { guestId, ...companion },
        });
      }
    });

    return this.getMe(guestId);
  }

  async updateProfile(guestId: string, dto: UpdateGuestProfileDto) {
    const data: {
      name?: string;
      phone?: string;
      normalizedPhone?: string;
    } = {};

    if (dto.name !== undefined) {
      data.name = this.normalizeName(dto.name);
    }

    if (dto.phone !== undefined) {
      const phone = dto.phone.trim();
      const normalizedPhone = this.normalizePhone(phone);

      const existingGuest = await this.prisma.guest.findFirst({
        where: {
          normalizedPhone,
          NOT: {
            id: guestId,
          },
        },
        select: {
          id: true,
        },
      });

      if (existingGuest) {
        throw new ConflictException(
          'Este WhatsApp já está vinculado a outro convidado.',
        );
      }

      data.phone = phone;
      data.normalizedPhone = normalizedPhone;
    }

    await this.prisma.guest.update({
      where: {
        id: guestId,
      },
      data,
    });

    return this.getMe(guestId);
  }

  private assertRsvpDeadlineOpen(): void {
    const deadline = new Date('2026-10-08T23:59:59-03:00');

    if (Date.now() > deadline.getTime()) {
      throw new ForbiddenException(
        'O prazo para confirmação de presença e acompanhantes foi encerrado em 8 de outubro de 2026.',
      );
    }
  }

  private normalizePhone(phone: string): string {
    const digits = phone.replace(/\D/g, '');

    let normalized = digits;

    if (normalized.startsWith('55') && normalized.length >= 12) {
      normalized = normalized.slice(2);
    }

    if (normalized.length !== 10 && normalized.length !== 11) {
      throw new ConflictException(
        'Informe um WhatsApp com DDD e número válido.',
      );
    }

    return normalized;
  }

  private normalizeName(name: string): string {
    return name.trim().replace(/\s+/g, ' ');
  }

  private serializeGuest(guest: {
    id: string;
    name: string;
    phone: string;
    normalizedPhone: string;
    attendance: unknown;
    createdAt: Date;
    updatedAt: Date;
    companions: Array<{
      id: string;
      name: string;
      phone: string | null;
      normalizedPhone: string | null;
      createdAt: Date;
      updatedAt: Date;
      guestId: string;
    }>;
    giftChoices: Array<{
      giftId: string;
    }>;
  }) {
    return {
      id: guest.id,
      name: guest.name,
      phone: guest.phone,
      normalizedPhone: guest.normalizedPhone,
      attendance: guest.attendance,
      companions: guest.companions.map((companion) => ({
        id: companion.id,
        name: companion.name,
        phone: companion.phone,
      })),
      giftIds: guest.giftChoices.map((choice) => choice.giftId),
      createdAt: guest.createdAt,
      updatedAt: guest.updatedAt,
    };
  }
}
