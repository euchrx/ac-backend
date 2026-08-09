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
exports.GiftsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GiftsService = class GiftsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listActiveGifts() {
        const gifts = await this.prisma.gift.findMany({
            where: {
                active: true,
            },
            orderBy: [
                {
                    sortOrder: 'asc',
                },
                {
                    createdAt: 'asc',
                },
            ],
            select: {
                id: true,
                title: true,
                description: true,
                type: true,
                suggestedAmount: true,
                externalUrl: true,
                sortOrder: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return gifts.map((gift) => ({
            ...gift,
            suggestedAmount: gift.suggestedAmount === null ? null : Number(gift.suggestedAmount),
        }));
    }
    async listGuestChoices(guestId) {
        const choices = await this.prisma.guestGiftChoice.findMany({
            where: {
                guestId,
            },
            orderBy: {
                createdAt: 'asc',
            },
            include: {
                gift: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        type: true,
                        suggestedAmount: true,
                        externalUrl: true,
                        active: true,
                        sortOrder: true,
                    },
                },
            },
        });
        return choices.map((choice) => ({
            id: choice.id,
            createdAt: choice.createdAt,
            gift: {
                ...choice.gift,
                suggestedAmount: choice.gift.suggestedAmount === null
                    ? null
                    : Number(choice.gift.suggestedAmount),
            },
        }));
    }
    async chooseGift(guestId, giftId) {
        const gift = await this.prisma.gift.findFirst({
            where: {
                id: giftId,
                active: true,
            },
            select: {
                id: true,
            },
        });
        if (!gift) {
            throw new common_1.NotFoundException('Presente não encontrado ou indisponível.');
        }
        const choice = await this.prisma.guestGiftChoice.upsert({
            where: {
                guestId_giftId: {
                    guestId,
                    giftId,
                },
            },
            update: {},
            create: {
                guestId,
                giftId,
            },
            include: {
                gift: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        type: true,
                        suggestedAmount: true,
                        externalUrl: true,
                        active: true,
                        sortOrder: true,
                    },
                },
            },
        });
        return {
            id: choice.id,
            createdAt: choice.createdAt,
            gift: {
                ...choice.gift,
                suggestedAmount: choice.gift.suggestedAmount === null
                    ? null
                    : Number(choice.gift.suggestedAmount),
            },
        };
    }
    async removeGiftChoice(guestId, giftId) {
        await this.prisma.guestGiftChoice.deleteMany({
            where: {
                guestId,
                giftId,
            },
        });
        return {
            message: 'Presente removido das escolhas.',
            giftId,
        };
    }
    async chooseCompanionGift(companionId, giftId) {
        const gift = await this.prisma.gift.findFirst({
            where: { id: giftId, active: true },
            select: { id: true },
        });
        if (!gift)
            throw new common_1.NotFoundException('Presente não encontrado ou indisponível.');
        return this.prisma.companionGiftChoice.upsert({
            where: { companionId_giftId: { companionId, giftId } },
            update: {},
            create: { companionId, giftId },
        });
    }
    async removeCompanionGift(companionId, giftId) {
        await this.prisma.companionGiftChoice.deleteMany({
            where: { companionId, giftId },
        });
        return { message: 'Presente removido das escolhas.', giftId };
    }
};
exports.GiftsService = GiftsService;
exports.GiftsService = GiftsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GiftsService);
//# sourceMappingURL=gifts.service.js.map