import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';
import type { AuthenticatedCompanion } from '../interfaces/authenticated-companion.interface';

export const CurrentCompanion = createParamDecorator(
  (_data: unknown, context: ExecutionContext): AuthenticatedCompanion => {
    const request = context
      .switchToHttp()
      .getRequest<Request & { companion: AuthenticatedCompanion }>();
    return request.companion;
  },
);
