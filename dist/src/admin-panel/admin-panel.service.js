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
exports.AdminPanelService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdminPanelService = class AdminPanelService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDashboard() {
        const [totalGuests, confirmedGuests, maybeGuests, notGoingGuests, pendingGuests, totalCompanions, totalChoices, activeGifts,] = await Promise.all([
            this.prisma.guest.count(),
            this.prisma.guest.count({
                where: { attendance: 'CONFIRMED' },
            }),
            this.prisma.guest.count({
                where: { attendance: 'MAYBE' },
            }),
            this.prisma.guest.count({
                where: { attendance: 'NOT_GOING' },
            }),
            this.prisma.guest.count({
                where: { attendance: 'PENDING' },
            }),
            this.prisma.companion.count(),
            this.prisma.guestGiftChoice.count(),
            this.prisma.gift.count({
                where: { active: true },
            }),
        ]);
        return {
            guests: {
                total: totalGuests,
                confirmed: confirmedGuests,
                maybe: maybeGuests,
                notGoing: notGoingGuests,
                pending: pendingGuests,
            },
            people: {
                confirmed: confirmedGuests +
                    (await this.prisma.companion.count({
                        where: {
                            guest: {
                                attendance: 'CONFIRMED',
                            },
                        },
                    })),
                companions: totalCompanions,
            },
            gifts: {
                active: activeGifts,
                totalChoices,
            },
        };
    }
    async listGuests() {
        return this.prisma.guest.findMany({
            orderBy: [{ createdAt: 'desc' }, { name: 'asc' }],
            include: {
                companions: {
                    orderBy: {
                        createdAt: 'asc',
                    },
                },
                giftChoices: {
                    orderBy: {
                        createdAt: 'asc',
                    },
                    include: {
                        gift: {
                            select: {
                                id: true,
                                title: true,
                                type: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async getGuest(guestId) {
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
                    orderBy: {
                        createdAt: 'asc',
                    },
                    include: {
                        gift: true,
                    },
                },
            },
        });
        if (!guest) {
            throw new common_1.NotFoundException('Convidado não encontrado.');
        }
        return {
            ...guest,
            giftChoices: guest.giftChoices.map((choice) => ({
                ...choice,
                gift: {
                    ...choice.gift,
                    suggestedAmount: choice.gift.suggestedAmount === null
                        ? null
                        : Number(choice.gift.suggestedAmount),
                },
            })),
        };
    }
    async updateGuest(guestId, dto) {
        await this.ensureGuestExists(guestId);
        const data = {};
        if (dto.name !== undefined) {
            data.name = this.normalizeName(dto.name);
        }
        if (dto.phone !== undefined) {
            const normalizedPhone = this.normalizePhone(dto.phone);
            const duplicate = await this.prisma.guest.findFirst({
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
            if (duplicate) {
                throw new common_1.ConflictException('Este WhatsApp já pertence a outro convidado.');
            }
            data.phone = dto.phone.trim();
            data.normalizedPhone = normalizedPhone;
        }
        if (dto.attendance !== undefined) {
            data.attendance = dto.attendance;
        }
        if (dto.notes !== undefined) {
            data.notes = dto.notes?.trim() || null;
        }
        await this.prisma.guest.update({
            where: {
                id: guestId,
            },
            data,
        });
        return this.getGuest(guestId);
    }
    async updateCompanions(guestId, dto) {
        await this.ensureGuestExists(guestId);
        const names = [
            ...new Set(dto.companions.map((name) => this.normalizeName(name)).filter(Boolean)),
        ];
        await this.prisma.$transaction([
            this.prisma.companion.deleteMany({
                where: {
                    guestId,
                },
            }),
            ...names.map((name) => this.prisma.companion.create({
                data: {
                    guestId,
                    name,
                },
            })),
        ]);
        return this.getGuest(guestId);
    }
    async deleteGuest(guestId) {
        await this.ensureGuestExists(guestId);
        await this.prisma.guest.delete({
            where: {
                id: guestId,
            },
        });
        return {
            message: 'Convidado removido com sucesso.',
            guestId,
        };
    }
    async listGifts() {
        const gifts = await this.prisma.gift.findMany({
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
            include: {
                _count: {
                    select: {
                        guestChoices: true,
                    },
                },
                guestChoices: {
                    orderBy: {
                        createdAt: 'asc',
                    },
                    include: {
                        guest: {
                            select: {
                                id: true,
                                name: true,
                                phone: true,
                            },
                        },
                    },
                },
            },
        });
        return gifts.map((gift) => ({
            ...gift,
            suggestedAmount: gift.suggestedAmount === null ? null : Number(gift.suggestedAmount),
        }));
    }
    async createGift(dto) {
        const gift = await this.prisma.gift.create({
            data: {
                title: dto.title.trim(),
                description: dto.description?.trim() || null,
                type: dto.type,
                suggestedAmount: dto.suggestedAmount ?? null,
                externalUrl: dto.externalUrl?.trim() || null,
                sortOrder: dto.sortOrder ?? 0,
            },
        });
        return {
            ...gift,
            suggestedAmount: gift.suggestedAmount === null ? null : Number(gift.suggestedAmount),
        };
    }
    async updateGift(giftId, dto) {
        await this.ensureGiftExists(giftId);
        const gift = await this.prisma.gift.update({
            where: {
                id: giftId,
            },
            data: {
                ...(dto.title !== undefined ? { title: dto.title.trim() } : {}),
                ...(dto.description !== undefined
                    ? {
                        description: dto.description?.trim() || null,
                    }
                    : {}),
                ...(dto.type !== undefined ? { type: dto.type } : {}),
                ...(dto.suggestedAmount !== undefined
                    ? {
                        suggestedAmount: dto.suggestedAmount,
                    }
                    : {}),
                ...(dto.externalUrl !== undefined
                    ? {
                        externalUrl: dto.externalUrl?.trim() || null,
                    }
                    : {}),
                ...(dto.active !== undefined ? { active: dto.active } : {}),
                ...(dto.sortOrder !== undefined ? { sortOrder: dto.sortOrder } : {}),
            },
        });
        return {
            ...gift,
            suggestedAmount: gift.suggestedAmount === null ? null : Number(gift.suggestedAmount),
        };
    }
    async deleteGift(giftId) {
        await this.ensureGiftExists(giftId);
        await this.prisma.gift.delete({
            where: {
                id: giftId,
            },
        });
        return {
            message: 'Presente removido com sucesso.',
            giftId,
        };
    }
    async removeGuestChoice(guestId, giftId) {
        await this.prisma.guestGiftChoice.deleteMany({
            where: {
                guestId,
                giftId,
            },
        });
        return {
            message: 'Escolha removida com sucesso.',
            guestId,
            giftId,
        };
    }
    async ensureGuestExists(guestId) {
        const guest = await this.prisma.guest.findUnique({
            where: {
                id: guestId,
            },
            select: {
                id: true,
            },
        });
        if (!guest) {
            throw new common_1.NotFoundException('Convidado não encontrado.');
        }
    }
    async ensureGiftExists(giftId) {
        const gift = await this.prisma.gift.findUnique({
            where: {
                id: giftId,
            },
            select: {
                id: true,
            },
        });
        if (!gift) {
            throw new common_1.NotFoundException('Presente não encontrado.');
        }
    }
    normalizePhone(phone) {
        let digits = phone.replace(/\D/g, '');
        if (digits.startsWith('55') && digits.length >= 12) {
            digits = digits.slice(2);
        }
        if (digits.length !== 10 && digits.length !== 11) {
            throw new common_1.ConflictException('Informe um WhatsApp válido com DDD.');
        }
        return digits;
    }
    normalizeName(name) {
        return name.trim().replace(/\s+/g, ' ');
    }
};
exports.AdminPanelService = AdminPanelService;
exports.AdminPanelService = AdminPanelService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminPanelService);
//# sourceMappingURL=admin-panel.service.js.map