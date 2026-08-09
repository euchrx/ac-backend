import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GiftsService {
  constructor(private readonly prisma: PrismaService) {}

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
      suggestedAmount:
        gift.suggestedAmount === null ? null : Number(gift.suggestedAmount),
    }));
  }

  async listGuestChoices(guestId: string) {
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
        suggestedAmount:
          choice.gift.suggestedAmount === null
            ? null
            : Number(choice.gift.suggestedAmount),
      },
    }));
  }

  async chooseGift(guestId: string, giftId: string) {
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
      throw new NotFoundException('Presente não encontrado ou indisponível.');
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
        suggestedAmount:
          choice.gift.suggestedAmount === null
            ? null
            : Number(choice.gift.suggestedAmount),
      },
    };
  }

  async removeGiftChoice(guestId: string, giftId: string) {
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

  async chooseCompanionGift(companionId: string, giftId: string) {
    const gift = await this.prisma.gift.findFirst({
      where: { id: giftId, active: true },
      select: { id: true },
    });
    if (!gift)
      throw new NotFoundException('Presente não encontrado ou indisponível.');
    return this.prisma.companionGiftChoice.upsert({
      where: { companionId_giftId: { companionId, giftId } },
      update: {},
      create: { companionId, giftId },
    });
  }

  async removeCompanionGift(companionId: string, giftId: string) {
    await this.prisma.companionGiftChoice.deleteMany({
      where: { companionId, giftId },
    });
    return { message: 'Presente removido das escolhas.', giftId };
  }
}
