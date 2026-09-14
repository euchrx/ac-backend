import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { Express, NextFunction, Request, Response } from 'express';

import { AppModule } from './app.module';

type RateLimitEntry = { count: number; resetAt: number };
const rateLimitEntries = new Map<string, RateLimitEntry>();

function rateLimit(maxRequests: number, windowMs: number) {
  return (request: Request, response: Response, next: NextFunction): void => {
    // Requisições de preflight precisam chegar ao middleware de CORS e não
    // representam uma tentativa de autenticação.
    if (request.method === 'OPTIONS') {
      next();
      return;
    }

    const now = Date.now();
    const key = `${request.ip}:${request.path}`;
    const current = rateLimitEntries.get(key);
    const entry =
      !current || current.resetAt <= now
        ? { count: 0, resetAt: now + windowMs }
        : current;

    entry.count += 1;
    rateLimitEntries.set(key, entry);
    response.setHeader('RateLimit-Limit', String(maxRequests));
    response.setHeader(
      'RateLimit-Remaining',
      String(Math.max(0, maxRequests - entry.count)),
    );

    if (entry.count > maxRequests) {
      response
        .status(429)
        .json({ message: 'Muitas tentativas. Aguarde alguns minutos.' });
      return;
    }
    next();
  };
}

function validateEnvironment(): void {
  const required = [
    'DATABASE_URL',
    'JWT_ADMIN_SECRET',
    'JWT_GUEST_SECRET',
    'ADMIN_EMAIL',
    'ADMIN_PASSWORD',
  ];
  const missing = required.filter((key) => !process.env[key]?.trim());
  if (missing.length)
    throw new Error(`Variáveis obrigatórias ausentes: ${missing.join(', ')}`);

  for (const key of ['JWT_ADMIN_SECRET', 'JWT_GUEST_SECRET']) {
    if ((process.env[key]?.length ?? 0) < 32)
      throw new Error(`${key} deve possuir pelo menos 32 caracteres.`);
  }
  if (process.env.JWT_ADMIN_SECRET === process.env.JWT_GUEST_SECRET) {
    throw new Error(
      'JWT_ADMIN_SECRET e JWT_GUEST_SECRET devem ser diferentes.',
    );
  }
  if ((process.env.ADMIN_PASSWORD?.length ?? 0) < 8) {
    throw new Error('ADMIN_PASSWORD deve possuir pelo menos 8 caracteres.');
  }
  if (
    process.env.NODE_ENV === 'production' &&
    !process.env.FRONTEND_URL?.trim()
  ) {
    throw new Error('FRONTEND_URL é obrigatória em produção.');
  }
}

async function bootstrap(): Promise<void> {
  validateEnvironment();
  const app = await NestFactory.create(AppModule);
  if (process.env.NODE_ENV === 'production') {
    const expressApp = app.getHttpAdapter().getInstance() as Express;
    expressApp.set('trust proxy', 1);
  }

  app.enableCors({
    origin: process.env.FRONTEND_URL
      ? process.env.FRONTEND_URL.split(',').map((origin) => origin.trim())
      : ['http://localhost:5173'],
    credentials: true,
  });

  app.use((request: Request, response: Response, next: NextFunction) => {
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('X-Frame-Options', 'DENY');
    response.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.setHeader(
      'Permissions-Policy',
      'camera=(self), microphone=(), geolocation=()',
    );
    next();
  });
  app.use('/api/admin/auth/login', rateLimit(8, 15 * 60 * 1000));
  app.use('/api/guest/access', rateLimit(12, 15 * 60 * 1000));
  app.use(
    '/api/gallery',
    (request: Request, response: Response, next: NextFunction) => {
      if (request.method !== 'POST') return next();
      return rateLimit(20, 60 * 60 * 1000)(request, response, next);
    },
  );

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableShutdownHooks();

  const port = Number(process.env.PORT ?? 3000);

  await app.listen(port);

  console.log(`API disponível em http://localhost:${port}/api`);
}

void bootstrap();
