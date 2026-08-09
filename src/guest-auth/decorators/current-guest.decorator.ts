import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

import type { AuthenticatedGuest } from '../interfaces/authenticated-guest.interface';

type GuestRequest = Request & {
  guest?: AuthenticatedGuest;
};

export const CurrentGuest = createParamDecorator(
  (_data: unknown, context: ExecutionContext): AuthenticatedGuest => {
    const request = context.switchToHttp().getRequest<GuestRequest>();

    if (!request.guest) {
      throw new Error('Convidado autenticado não encontrado na requisição.');
    }

    return request.guest;
  },
);
