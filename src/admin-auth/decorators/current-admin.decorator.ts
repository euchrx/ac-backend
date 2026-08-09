import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

import type { AuthenticatedAdmin } from '../interfaces/authenticated-admin.interface';

type AdminRequest = Request & {
  admin?: AuthenticatedAdmin;
};

export const CurrentAdmin = createParamDecorator(
  (_data: unknown, context: ExecutionContext): AuthenticatedAdmin => {
    const request = context.switchToHttp().getRequest<AdminRequest>();

    if (!request.admin) {
      throw new Error(
        'Administrador autenticado não encontrado na requisição.',
      );
    }

    return request.admin;
  },
);
