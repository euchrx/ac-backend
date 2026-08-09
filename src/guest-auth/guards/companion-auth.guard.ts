import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
import { PrismaService } from '../../prisma/prisma.service';
import type { AuthenticatedCompanion } from '../interfaces/authenticated-companion.interface';
import type { GuestTokenPayload } from '../interfaces/guest-token-payload.interface';

@Injectable()
export class CompanionAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<Request & { companion?: AuthenticatedCompanion }>();
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (type !== 'Bearer' || !token)
      throw new UnauthorizedException('Token não informado.');

    let payload: GuestTokenPayload;
    try {
      payload = await this.jwtService.verifyAsync<GuestTokenPayload>(token);
    } catch {
      throw new UnauthorizedException('Sessão inválida ou expirada.');
    }
    if (payload.type !== 'companion')
      throw new UnauthorizedException('Acesso restrito a acompanhantes.');

    const companion = await this.prisma.companion.findUnique({
      where: { id: payload.sub },
    });
    if (!companion)
      throw new UnauthorizedException('Acompanhante não encontrado.');
    request.companion = companion;
    return true;
  }
}
