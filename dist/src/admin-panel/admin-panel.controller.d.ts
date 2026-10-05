import { AdminPanelService } from './admin-panel.service';
import { AdminUpdateCompanionsDto } from './dto/admin-update-companions.dto';
import { AdminUpdateGuestDto } from './dto/admin-update-guest.dto';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';
export declare class AdminPanelController {
    private readonly adminPanelService;
    constructor(adminPanelService: AdminPanelService);
    getDashboard(): Promise<{
        guests: {
            total: number;
            confirmed: number;
            maybe: number;
            notGoing: number;
            pending: number;
        };
        people: {
            confirmed: number;
            companions: number;
        };
        gifts: {
            active: number;
            totalChoices: number;
        };
    }>;
    listGuests(): Promise<({
        companions: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            normalizedPhone: string | null;
            guestId: string;
        }[];
        giftChoices: ({
            gift: {
                id: string;
                title: string;
                type: import("../generated/prisma/enums").GiftType;
            };
        } & {
            id: string;
            createdAt: Date;
            guestId: string;
            giftId: string;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        attendance: import("../generated/prisma/enums").AttendanceStatus;
        notes: string | null;
        normalizedPhone: string;
    })[]>;
    getGuest(guestId: string): Promise<{
        giftChoices: {
            gift: {
                suggestedAmount: number | null;
                id: string;
                active: boolean;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string | null;
                type: import("../generated/prisma/enums").GiftType;
                externalUrl: string | null;
                sortOrder: number;
            };
            id: string;
            createdAt: Date;
            guestId: string;
            giftId: string;
        }[];
        companions: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            normalizedPhone: string | null;
            guestId: string;
        }[];
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        attendance: import("../generated/prisma/enums").AttendanceStatus;
        notes: string | null;
        normalizedPhone: string;
    }>;
    updateGuest(guestId: string, dto: AdminUpdateGuestDto): Promise<{
        giftChoices: {
            gift: {
                suggestedAmount: number | null;
                id: string;
                active: boolean;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string | null;
                type: import("../generated/prisma/enums").GiftType;
                externalUrl: string | null;
                sortOrder: number;
            };
            id: string;
            createdAt: Date;
            guestId: string;
            giftId: string;
        }[];
        companions: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            normalizedPhone: string | null;
            guestId: string;
        }[];
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        attendance: import("../generated/prisma/enums").AttendanceStatus;
        notes: string | null;
        normalizedPhone: string;
    }>;
    updateCompanions(guestId: string, dto: AdminUpdateCompanionsDto): Promise<{
        giftChoices: {
            gift: {
                suggestedAmount: number | null;
                id: string;
                active: boolean;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string | null;
                type: import("../generated/prisma/enums").GiftType;
                externalUrl: string | null;
                sortOrder: number;
            };
            id: string;
            createdAt: Date;
            guestId: string;
            giftId: string;
        }[];
        companions: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            normalizedPhone: string | null;
            guestId: string;
        }[];
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        attendance: import("../generated/prisma/enums").AttendanceStatus;
        notes: string | null;
        normalizedPhone: string;
    }>;
    deleteGuest(guestId: string): Promise<{
        message: string;
        guestId: string;
    }>;
    listGifts(): Promise<{
        suggestedAmount: number | null;
        guestChoices: ({
            guest: {
                id: string;
                name: string;
                phone: string;
            };
        } & {
            id: string;
            createdAt: Date;
            guestId: string;
            giftId: string;
        })[];
        _count: {
            guestChoices: number;
        };
        id: string;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        type: import("../generated/prisma/enums").GiftType;
        externalUrl: string | null;
        sortOrder: number;
    }[]>;
    createGift(dto: CreateGiftDto): Promise<{
        suggestedAmount: number | null;
        id: string;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        type: import("../generated/prisma/enums").GiftType;
        externalUrl: string | null;
        sortOrder: number;
    }>;
    updateGift(giftId: string, dto: UpdateGiftDto): Promise<{
        suggestedAmount: number | null;
        id: string;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        type: import("../generated/prisma/enums").GiftType;
        externalUrl: string | null;
        sortOrder: number;
    }>;
    deleteGift(giftId: string): Promise<{
        message: string;
        giftId: string;
    }>;
    removeGuestChoice(guestId: string, giftId: string): Promise<{
        message: string;
        guestId: string;
        giftId: string;
    }>;
}
