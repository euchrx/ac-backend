import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { AdminUpdateCompanionsDto } from './dto/admin-update-companions.dto';
import { AdminUpdateGuestDto } from './dto/admin-update-guest.dto';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';

@Injectable()
export class AdminPanelService {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboard() {
    const [
      totalGuests,
      confirmedGuests,
      maybeGuests,
      notGoingGuests,
      pendingGuests,
      totalCompanions,
      totalChoices,
      activeGifts,
    ] = await Promise.all([
      this.prisma.guest.count(),
      this.prisma.guest.count({
        where: { attendance: 'CONFIRMED' },
      }),
      this.prisma.guest.count({
        where: { attendance: 'MAYBE' },
      }),
      this.prisma.guest.count({
        where: { attendance: 'NOT_GOING' },
      }),
      this.prisma.guest.count({
        where: { attendance: 'PENDING' },
      }),
      this.prisma.companion.count(),
      this.prisma.guestGiftChoice.count(),
      this.prisma.gift.count({
        where: { active: true },
      }),
    ]);

    return {
      guests: {
        total: totalGuests,
        confirmed: confirmedGuests,
        maybe: maybeGuests,
        notGoing: notGoingGuests,
        pending: pendingGuests,
      },
      people: {
        confirmed:
          confirmedGuests +
          (await this.prisma.companion.count({
            where: {
              guest: {
                attendance: 'CONFIRMED',
              },
            },
          })),
        companions: totalCompanions,
      },
      gifts: {
        active: activeGifts,
        totalChoices,
      },
    };
  }

  async listGuests() {
    return this.prisma.guest.findMany({
      orderBy: [{ createdAt: 'desc' }, { name: 'asc' }],
      include: {
        companions: {
          orderBy: {
            createdAt: 'asc',
          },
        },
        giftChoices: {
          orderBy: {
            createdAt: 'asc',
          },
          include: {
            gift: {
              select: {
                id: true,
                title: true,
                type: true,
              },
            },
          },
        },
      },
    });
  }

  async getGuest(guestId: string) {
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
          orderBy: {
            createdAt: 'asc',
          },
          include: {
            gift: true,
          },
        },
      },
    });

    if (!guest) {
      throw new NotFoundException('Convidado não encontrado.');
    }

    return {
      ...guest,
      giftChoices: guest.giftChoices.map((choice) => ({
        ...choice,
        gift: {
          ...choice.gift,
          suggestedAmount:
            choice.gift.suggestedAmount === null
              ? null
              : Number(choice.gift.suggestedAmount),
        },
      })),
    };
  }

  async updateGuest(guestId: string, dto: AdminUpdateGuestDto) {
    await this.ensureGuestExists(guestId);

    const data: {
      name?: string;
      phone?: string;
      normalizedPhone?: string;
      attendance?: AdminUpdateGuestDto['attendance'];
      notes?: string | null;
    } = {};

    if (dto.name !== undefined) {
      data.name = this.normalizeName(dto.name);
    }

    if (dto.phone !== undefined) {
      const normalizedPhone = this.normalizePhone(dto.phone);

      const duplicate = await this.prisma.guest.findFirst({
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

      if (duplicate) {
        throw new ConflictException(
          'Este WhatsApp já pertence a outro convidado.',
        );
      }

      data.phone = dto.phone.trim();
      data.normalizedPhone = normalizedPhone;
    }

    if (dto.attendance !== undefined) {
      data.attendance = dto.attendance;
    }

    if (dto.notes !== undefined) {
      data.notes = dto.notes?.trim() || null;
    }

    await this.prisma.guest.update({
      where: {
        id: guestId,
      },
      data,
    });

    return this.getGuest(guestId);
  }

  async updateCompanions(guestId: string, dto: AdminUpdateCompanionsDto) {
    await this.ensureGuestExists(guestId);

    const names = [
      ...new Set(
        dto.companions.map((name) => this.normalizeName(name)).filter(Boolean),
      ),
    ];

    await this.prisma.$transaction([
      this.prisma.companion.deleteMany({
        where: {
          guestId,
        },
      }),
      ...names.map((name) =>
        this.prisma.companion.create({
          data: {
            guestId,
            name,
          },
        }),
      ),
    ]);

    return this.getGuest(guestId);
  }

  async deleteGuest(guestId: string) {
    await this.ensureGuestExists(guestId);

    await this.prisma.guest.delete({
      where: {
        id: guestId,
      },
    });

    return {
      message: 'Convidado removido com sucesso.',
      guestId,
    };
  }

  async listGifts() {
    const gifts = await this.prisma.gift.findMany({
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
      include: {
        _count: {
          select: {
            guestChoices: true,
          },
        },
        guestChoices: {
          orderBy: {
            createdAt: 'asc',
          },
          include: {
            guest: {
              select: {
                id: true,
                name: true,
                phone: true,
              },
            },
          },
        },
      },
    });

    return gifts.map((gift) => ({
      ...gift,
      suggestedAmount:
        gift.suggestedAmount === null ? null : Number(gift.suggestedAmount),
    }));
  }

  async createGift(dto: CreateGiftDto) {
    const gift = await this.prisma.gift.create({
      data: {
        title: dto.title.trim(),
        description: dto.description?.trim() || null,
        type: dto.type,
        suggestedAmount: dto.suggestedAmount ?? null,
        externalUrl: dto.externalUrl?.trim() || null,
        sortOrder: dto.sortOrder ?? 0,
      },
    });

    return {
      ...gift,
      suggestedAmount:
        gift.suggestedAmount === null ? null : Number(gift.suggestedAmount),
    };
  }

  async updateGift(giftId: string, dto: UpdateGiftDto) {
    await this.ensureGiftExists(giftId);

    const gift = await this.prisma.gift.update({
      where: {
        id: giftId,
      },
      data: {
        ...(dto.title !== undefined ? { title: dto.title.trim() } : {}),
        ...(dto.description !== undefined
          ? {
              description: dto.description?.trim() || null,
            }
          : {}),
        ...(dto.type !== undefined ? { type: dto.type } : {}),
        ...(dto.suggestedAmount !== undefined
          ? {
              suggestedAmount: dto.suggestedAmount,
            }
          : {}),
        ...(dto.externalUrl !== undefined
          ? {
              externalUrl: dto.externalUrl?.trim() || null,
            }
          : {}),
        ...(dto.active !== undefined ? { active: dto.active } : {}),
        ...(dto.sortOrder !== undefined ? { sortOrder: dto.sortOrder } : {}),
      },
    });

    return {
      ...gift,
      suggestedAmount:
        gift.suggestedAmount === null ? null : Number(gift.suggestedAmount),
    };
  }

  async deleteGift(giftId: string) {
    await this.ensureGiftExists(giftId);

    await this.prisma.gift.delete({
      where: {
        id: giftId,
      },
    });

    return {
      message: 'Presente removido com sucesso.',
      giftId,
    };
  }

  async removeGuestChoice(guestId: string, giftId: string) {
    await this.prisma.guestGiftChoice.deleteMany({
      where: {
        guestId,
        giftId,
      },
    });

    return {
      message: 'Escolha removida com sucesso.',
      guestId,
      giftId,
    };
  }

  private async ensureGuestExists(guestId: string): Promise<void> {
    const guest = await this.prisma.guest.findUnique({
      where: {
        id: guestId,
      },
      select: {
        id: true,
      },
    });

    if (!guest) {
      throw new NotFoundException('Convidado não encontrado.');
    }
  }

  private async ensureGiftExists(giftId: string): Promise<void> {
    const gift = await this.prisma.gift.findUnique({
      where: {
        id: giftId,
      },
      select: {
        id: true,
      },
    });

    if (!gift) {
      throw new NotFoundException('Presente não encontrado.');
    }
  }

  private normalizePhone(phone: string): string {
    let digits = phone.replace(/\D/g, '');

    if (digits.startsWith('55') && digits.length >= 12) {
      digits = digits.slice(2);
    }

    if (digits.length !== 10 && digits.length !== 11) {
      throw new ConflictException('Informe um WhatsApp válido com DDD.');
    }

    return digits;
  }

  private normalizeName(name: string): string {
    return name.trim().replace(/\s+/g, ' ');
  }
}
