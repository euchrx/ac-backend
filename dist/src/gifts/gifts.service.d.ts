import { PrismaService } from '../prisma/prisma.service';
export declare class GiftsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listActiveGifts(): Promise<{
        suggestedAmount: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        type: import("../generated/prisma/enums").GiftType;
        externalUrl: string | null;
        sortOrder: number;
    }[]>;
    listGuestChoices(guestId: string): Promise<{
        id: string;
        createdAt: Date;
        gift: {
            suggestedAmount: number | null;
            id: string;
            active: boolean;
            title: string;
            description: string | null;
            type: import("../generated/prisma/enums").GiftType;
            externalUrl: string | null;
            sortOrder: number;
        };
    }[]>;
    chooseGift(guestId: string, giftId: string): Promise<{
        id: string;
        createdAt: Date;
        gift: {
            suggestedAmount: number | null;
            id: string;
            active: boolean;
            title: string;
            description: string | null;
            type: import("../generated/prisma/enums").GiftType;
            externalUrl: string | null;
            sortOrder: number;
        };
    }>;
    removeGiftChoice(guestId: string, giftId: string): Promise<{
        message: string;
        giftId: string;
    }>;
    chooseCompanionGift(companionId: string, giftId: string): Promise<{
        id: string;
        createdAt: Date;
        giftId: string;
        companionId: string;
    }>;
    removeCompanionGift(companionId: string, giftId: string): Promise<{
        message: string;
        giftId: string;
    }>;
}
