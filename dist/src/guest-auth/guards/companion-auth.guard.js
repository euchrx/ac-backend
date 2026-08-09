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
exports.CompanionAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../prisma/prisma.service");
let CompanionAuthGuard = class CompanionAuthGuard {
    jwtService;
    prisma;
    constructor(jwtService, prisma) {
        this.jwtService = jwtService;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const request = context
            .switchToHttp()
            .getRequest();
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        if (type !== 'Bearer' || !token)
            throw new common_1.UnauthorizedException('Token não informado.');
        let payload;
        try {
            payload = await this.jwtService.verifyAsync(token);
        }
        catch {
            throw new common_1.UnauthorizedException('Sessão inválida ou expirada.');
        }
        if (payload.type !== 'companion')
            throw new common_1.UnauthorizedException('Acesso restrito a acompanhantes.');
        const companion = await this.prisma.companion.findUnique({
            where: { id: payload.sub },
        });
        if (!companion)
            throw new common_1.UnauthorizedException('Acompanhante não encontrado.');
        request.companion = companion;
        return true;
    }
};
exports.CompanionAuthGuard = CompanionAuthGuard;
exports.CompanionAuthGuard = CompanionAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService])
], CompanionAuthGuard);
//# sourceMappingURL=companion-auth.guard.js.map