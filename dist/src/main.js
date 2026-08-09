"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const rateLimitEntries = new Map();
function rateLimit(maxRequests, windowMs) {
    return (request, response, next) => {
        if (request.method === 'OPTIONS') {
            next();
            return;
        }
        const now = Date.now();
        const key = `${request.ip}:${request.path}`;
        const current = rateLimitEntries.get(key);
        const entry = !current || current.resetAt <= now
            ? { count: 0, resetAt: now + windowMs }
            : current;
        entry.count += 1;
        rateLimitEntries.set(key, entry);
        response.setHeader('RateLimit-Limit', String(maxRequests));
        response.setHeader('RateLimit-Remaining', String(Math.max(0, maxRequests - entry.count)));
        if (entry.count > maxRequests) {
            response
                .status(429)
                .json({ message: 'Muitas tentativas. Aguarde alguns minutos.' });
            return;
        }
        next();
    };
}
function validateEnvironment() {
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
        throw new Error('JWT_ADMIN_SECRET e JWT_GUEST_SECRET devem ser diferentes.');
    }
    if ((process.env.ADMIN_PASSWORD?.length ?? 0) < 8) {
        throw new Error('ADMIN_PASSWORD deve possuir pelo menos 8 caracteres.');
    }
    if (process.env.NODE_ENV === 'production' &&
        !process.env.FRONTEND_URL?.trim()) {
        throw new Error('FRONTEND_URL é obrigatória em produção.');
    }
}
async function bootstrap() {
    validateEnvironment();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    if (process.env.NODE_ENV === 'production') {
        const expressApp = app.getHttpAdapter().getInstance();
        expressApp.set('trust proxy', 1);
    }
    app.enableCors({
        origin: process.env.FRONTEND_URL
            ? process.env.FRONTEND_URL.split(',').map((origin) => origin.trim())
            : ['http://localhost:5173'],
        credentials: true,
    });
    app.use((request, response, next) => {
        response.setHeader('X-Content-Type-Options', 'nosniff');
        response.setHeader('X-Frame-Options', 'DENY');
        response.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
        response.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
        next();
    });
    app.use('/api/admin/auth/login', rateLimit(8, 15 * 60 * 1000));
    app.use('/api/guest/access', rateLimit(12, 15 * 60 * 1000));
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.enableShutdownHooks();
    const port = Number(process.env.PORT ?? 3000);
    await app.listen(port);
    console.log(`API disponível em http://localhost:${port}/api`);
}
void bootstrap();
//# sourceMappingURL=main.js.map