import type { AuthenticatedCompanion } from '../guest-auth/interfaces/authenticated-companion.interface';
import type { AuthenticatedGuest } from '../guest-auth/interfaces/authenticated-guest.interface';
import { GiftsService } from './gifts.service';
export declare class GiftsController {
    private readonly giftsService;
    constructor(giftsService: GiftsService);
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
    listGuestChoices(guest: AuthenticatedGuest): Promise<{
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
    chooseGift(guest: AuthenticatedGuest, giftId: string): Promise<{
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
    removeGiftChoice(guest: AuthenticatedGuest, giftId: string): Promise<{
        message: string;
        giftId: string;
    }>;
    chooseCompanionGift(companion: AuthenticatedCompanion, giftId: string): Promise<{
        id: string;
        createdAt: Date;
        companionId: string;
        giftId: string;
    }>;
    removeCompanionGift(companion: AuthenticatedCompanion, giftId: string): Promise<{
        message: string;
        giftId: string;
    }>;
}
