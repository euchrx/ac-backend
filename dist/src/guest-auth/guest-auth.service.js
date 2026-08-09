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
exports.GuestAuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
let GuestAuthService = class GuestAuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async access(dto) {
        const name = this.normalizeName(dto.name);
        const phone = dto.phone.trim();
        const normalizedPhone = this.normalizePhone(phone);
        let guest = await this.prisma.guest.findUnique({
            where: {
                normalizedPhone,
            },
            include: {
                companions: {
                    orderBy: {
                        createdAt: 'asc',
                    },
                },
                giftChoices: {
                    select: {
                        giftId: true,
                    },
                },
            },
        });
        if (!guest) {
            const companion = await this.prisma.companion.findUnique({
                where: { normalizedPhone },
                include: {
                    guest: { select: { id: true, name: true } },
                    giftChoices: { select: { giftId: true } },
                },
            });
            if (companion) {
                const firstName = name.split(' ')[0].toLocaleLowerCase('pt-BR');
                const companionFirstName = companion.name
                    .split(' ')[0]
                    .toLocaleLowerCase('pt-BR');
                if (firstName !== companionFirstName) {
                    throw new common_1.NotFoundException('Primeiro nome ou WhatsApp não encontrado.');
                }
                const accessToken = await this.jwtService.signAsync({
                    sub: companion.id,
                    phone: normalizedPhone,
                    type: 'companion',
                });
                return {
                    accessToken,
                    role: 'companion',
                    companion: {
                        id: companion.id,
                        name: companion.name,
                        phone: companion.phone,
                        invitedBy: companion.guest,
                        giftIds: companion.giftChoices.map((choice) => choice.giftId),
                    },
                };
            }
            guest = await this.prisma.guest.create({
                data: {
                    name,
                    phone,
                    normalizedPhone,
                },
                include: {
                    companions: true,
                    giftChoices: {
                        select: {
                            giftId: true,
                        },
                    },
                },
            });
        }
        const payload = {
            sub: guest.id,
            phone: guest.normalizedPhone,
            type: 'guest',
        };
        const accessToken = await this.jwtService.signAsync(payload);
        return {
            accessToken,
            role: 'guest',
            guest: this.serializeGuest(guest),
        };
    }
    async getMe(guestId) {
        const guest = await this.prisma.guest.findUnique({
            where: {
                id: guestId,
            },
            include: {
                companions: {
                    orderBy: {
                        createdAt: 'asc',
                    },
                },
                giftChoices: {
                    select: {
                        giftId: true,
                    },
                },
            },
        });
        if (!guest) {
            throw new common_1.NotFoundException('Convidado não encontrado.');
        }
        return this.serializeGuest(guest);
    }
    async getCompanionMe(companionId) {
        const companion = await this.prisma.companion.findUnique({
            where: { id: companionId },
            include: {
                guest: { select: { id: true, name: true } },
                giftChoices: { select: { giftId: true } },
            },
        });
        if (!companion)
            throw new common_1.NotFoundException('Acompanhante não encontrado.');
        return {
            id: companion.id,
            name: companion.name,
            phone: companion.phone,
            invitedBy: companion.guest,
            giftIds: companion.giftChoices.map((choice) => choice.giftId),
        };
    }
    async updateAttendance(guestId, dto) {
        this.assertRsvpDeadlineOpen();
        const guest = await this.prisma.guest.update({
            where: {
                id: guestId,
            },
            data: {
                attendance: dto.attendance,
            },
            include: {
                companions: {
                    orderBy: {
                        createdAt: 'asc',
                    },
                },
                giftChoices: {
                    select: {
                        giftId: true,
                    },
                },
            },
        });
        return this.serializeGuest(guest);
    }
    async updateCompanions(guestId, dto) {
        this.assertRsvpDeadlineOpen();
        const companions = dto.companions.map((companion) => ({
            name: this.normalizeName(companion.name).split(' ')[0],
            phone: companion.phone.trim(),
            normalizedPhone: this.normalizePhone(companion.phone),
        }));
        const normalizedPhones = companions.map((item) => item.normalizedPhone);
        if (new Set(normalizedPhones).size !== normalizedPhones.length) {
            throw new common_1.ConflictException('Cada acompanhante deve ter um WhatsApp diferente.');
        }
        const conflictingGuest = await this.prisma.guest.findFirst({
            where: { normalizedPhone: { in: normalizedPhones } },
            select: { id: true },
        });
        if (conflictingGuest) {
            throw new common_1.ConflictException('Um dos WhatsApps já pertence a um convidado titular.');
        }
        await this.prisma.$transaction(async (transaction) => {
            await transaction.companion.deleteMany({
                where: {
                    guestId,
                    normalizedPhone: { notIn: normalizedPhones },
                },
            });
            for (const companion of companions) {
                const existing = await transaction.companion.findUnique({
                    where: { normalizedPhone: companion.normalizedPhone },
                });
                if (existing && existing.guestId !== guestId) {
                    throw new common_1.ConflictException('Este WhatsApp já pertence a outro acompanhante.');
                }
                await transaction.companion.upsert({
                    where: { normalizedPhone: companion.normalizedPhone },
                    update: { name: companion.name, phone: companion.phone },
                    create: { guestId, ...companion },
                });
            }
        });
        return this.getMe(guestId);
    }
    async updateProfile(guestId, dto) {
        const data = {};
        if (dto.name !== undefined) {
            data.name = this.normalizeName(dto.name);
        }
        if (dto.phone !== undefined) {
            const phone = dto.phone.trim();
            const normalizedPhone = this.normalizePhone(phone);
            const existingGuest = await this.prisma.guest.findFirst({
                where: {
                    normalizedPhone,
                    NOT: {
                        id: guestId,
                    },
                },
                select: {
                    id: true,
                },
            });
            if (existingGuest) {
                throw new common_1.ConflictException('Este WhatsApp já está vinculado a outro convidado.');
            }
            data.phone = phone;
            data.normalizedPhone = normalizedPhone;
        }
        await this.prisma.guest.update({
            where: {
                id: guestId,
            },
            data,
        });
        return this.getMe(guestId);
    }
    assertRsvpDeadlineOpen() {
        const deadline = new Date('2026-10-08T23:59:59-03:00');
        if (Date.now() > deadline.getTime()) {
            throw new common_1.ForbiddenException('O prazo para confirmação de presença e acompanhantes foi encerrado em 8 de outubro de 2026.');
        }
    }
    normalizePhone(phone) {
        const digits = phone.replace(/\D/g, '');
        let normalized = digits;
        if (normalized.startsWith('55') && normalized.length >= 12) {
            normalized = normalized.slice(2);
        }
        if (normalized.length !== 10 && normalized.length !== 11) {
            throw new common_1.ConflictException('Informe um WhatsApp com DDD e número válido.');
        }
        return normalized;
    }
    normalizeName(name) {
        return name.trim().replace(/\s+/g, ' ');
    }
    serializeGuest(guest) {
        return {
            id: guest.id,
            name: guest.name,
            phone: guest.phone,
            normalizedPhone: guest.normalizedPhone,
            attendance: guest.attendance,
            companions: guest.companions.map((companion) => ({
                id: companion.id,
                name: companion.name,
                phone: companion.phone,
            })),
            giftIds: guest.giftChoices.map((choice) => choice.giftId),
            createdAt: guest.createdAt,
            updatedAt: guest.updatedAt,
        };
    }
};
exports.GuestAuthService = GuestAuthService;
exports.GuestAuthService = GuestAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], GuestAuthService);
//# sourceMappingURL=guest-auth.service.js.map