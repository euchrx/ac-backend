import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';

import { PrismaService } from '../../prisma/prisma.service';
import type { AuthenticatedGuest } from '../interfaces/authenticated-guest.interface';
import type { GuestTokenPayload } from '../interfaces/guest-token-payload.interface';

type GuestRequest = Request & {
  guest?: AuthenticatedGuest;
};

@Injectable()
export class GuestAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<GuestRequest>();
    const token = this.extractBearerToken(request);

    if (!token) {
      throw new UnauthorizedException('Token do convidado não informado.');
    }

    let payload: GuestTokenPayload;

    try {
      payload = await this.jwtService.verifyAsync<GuestTokenPayload>(token);
    } catch {
      throw new UnauthorizedException('Sessão inválida ou expirada.');
    }

    if (payload.type !== 'guest') {
      throw new UnauthorizedException(
        'Token incompatível com a área do convidado.',
      );
    }

    const guest = await this.prisma.guest.findUnique({
      where: {
        id: payload.sub,
      },
      select: {
        id: true,
        name: true,
        phone: true,
        normalizedPhone: true,
        attendance: true,
      },
    });

    if (!guest) {
      throw new UnauthorizedException('Convidado não encontrado.');
    }

    request.guest = guest;

    return true;
  }

  private extractBearerToken(request: Request): string | undefined {
    const authorization = request.headers.authorization;

    if (!authorization) {
      return undefined;
    }

    const [type, token] = authorization.split(' ');

    return type === 'Bearer' && token ? token : undefined;
  }
}
