import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';

import { PrismaService } from '../../prisma/prisma.service';
import type { AdminTokenPayload } from '../interfaces/admin-token-payload.interface';
import type { AuthenticatedAdmin } from '../interfaces/authenticated-admin.interface';

type AdminRequest = Request & {
  admin?: AuthenticatedAdmin;
};

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AdminRequest>();
    const token = this.extractBearerToken(request);

    if (!token) {
      throw new UnauthorizedException('Token administrativo não informado.');
    }

    let payload: AdminTokenPayload;

    try {
      payload = await this.jwtService.verifyAsync<AdminTokenPayload>(token);
    } catch {
      throw new UnauthorizedException(
        'Token administrativo inválido ou expirado.',
      );
    }

    if (payload.type !== 'admin') {
      throw new UnauthorizedException(
        'Token incompatível com a área administrativa.',
      );
    }

    const admin = await this.prisma.admin.findFirst({
      where: {
        id: payload.sub,
        active: true,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!admin) {
      throw new UnauthorizedException(
        'Administrador não encontrado ou inativo.',
      );
    }

    request.admin = admin;

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
