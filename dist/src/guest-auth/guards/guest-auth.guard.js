"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../prisma/prisma.service");
let GuestAuthGuard = class GuestAuthGuard {
    jwtService;
    prisma;
    constructor(jwtService, prisma) {
        this.jwtService = jwtService;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractBearerToken(request);
        if (!token) {
            throw new common_1.UnauthorizedException('Token do convidado não informado.');
        }
        let payload;
        try {
            payload = await this.jwtService.verifyAsync(token);
        }
        catch {
            throw new common_1.UnauthorizedException('Sessão inválida ou expirada.');
        }
        if (payload.type !== 'guest') {
            throw new common_1.UnauthorizedException('Token incompatível com a área do convidado.');
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
            throw new common_1.UnauthorizedException('Convidado não encontrado.');
        }
        request.guest = guest;
        return true;
    }
    extractBearerToken(request) {
        const authorization = request.headers.authorization;
        if (!authorization) {
            return undefined;
        }
        const [type, token] = authorization.split(' ');
        return type === 'Bearer' && token ? token : undefined;
    }
};
exports.GuestAuthGuard = GuestAuthGuard;
exports.GuestAuthGuard = GuestAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService])
], GuestAuthGuard);
//# sourceMappingURL=guest-auth.guard.js.map