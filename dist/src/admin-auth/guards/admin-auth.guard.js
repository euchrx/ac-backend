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
exports.AdminAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../prisma/prisma.service");
let AdminAuthGuard = class AdminAuthGuard {
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
            throw new common_1.UnauthorizedException('Token administrativo não informado.');
        }
        let payload;
        try {
            payload = await this.jwtService.verifyAsync(token);
        }
        catch {
            throw new common_1.UnauthorizedException('Token administrativo inválido ou expirado.');
        }
        if (payload.type !== 'admin') {
            throw new common_1.UnauthorizedException('Token incompatível com a área administrativa.');
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
            throw new common_1.UnauthorizedException('Administrador não encontrado ou inativo.');
        }
        request.admin = admin;
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
exports.AdminAuthGuard = AdminAuthGuard;
exports.AdminAuthGuard = AdminAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService])
], AdminAuthGuard);
//# sourceMappingURL=admin-auth.guard.js.map