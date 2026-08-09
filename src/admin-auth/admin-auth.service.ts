import {
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { PrismaService } from '../prisma/prisma.service';
import { AdminLoginDto } from './dto/admin-login.dto';
import type { AdminTokenPayload } from './interfaces/admin-token-payload.interface';

@Injectable()
export class AdminAuthService implements OnModuleInit {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async onModuleInit(): Promise<void> {
    const email = process.env.ADMIN_EMAIL!.trim().toLowerCase();
    const passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD!, 12);

    await this.prisma.admin.upsert({
      where: { email },
      update: {
        name: process.env.ADMIN_NAME?.trim() || 'Família Ana Clara',
        passwordHash,
        active: true,
      },
      create: {
        name: process.env.ADMIN_NAME?.trim() || 'Família Ana Clara',
        email,
        passwordHash,
        active: true,
      },
    });
  }

  async login(dto: AdminLoginDto) {
    const email = dto.email.trim().toLowerCase();

    const admin = await this.prisma.admin.findUnique({
      where: { email },
    });

    if (!admin || !admin.active) {
      throw new UnauthorizedException('E-mail ou senha inválidos.');
    }

    const passwordMatches = await bcrypt.compare(
      dto.password,
      admin.passwordHash,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException('E-mail ou senha inválidos.');
    }

    const payload: AdminTokenPayload = {
      sub: admin.id,
      email: admin.email,
      type: 'admin',
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      accessToken,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
      },
    };
  }
}
