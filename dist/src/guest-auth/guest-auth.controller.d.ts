import { GuestAccessDto } from './dto/guest-access.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { UpdateCompanionsDto } from './dto/update-companions.dto';
import { UpdateGuestProfileDto } from './dto/update-guest-profile.dto';
import { GuestAuthService } from './guest-auth.service';
import type { AuthenticatedCompanion } from './interfaces/authenticated-companion.interface';
import type { AuthenticatedGuest } from './interfaces/authenticated-guest.interface';
export declare class GuestAuthController {
    private readonly guestAuthService;
    constructor(guestAuthService: GuestAuthService);
    access(dto: GuestAccessDto): Promise<{
        accessToken: string;
        role: "companion";
        companion: {
            id: string;
            name: string;
            phone: string | null;
            invitedBy: {
                id: string;
                name: string;
            };
            giftIds: string[];
        };
        guest?: undefined;
    } | {
        accessToken: string;
        role: "guest";
        guest: {
            id: string;
            name: string;
            phone: string;
            normalizedPhone: string;
            attendance: unknown;
            companions: {
                id: string;
                name: string;
                phone: string | null;
            }[];
            giftIds: string[];
            createdAt: Date;
            updatedAt: Date;
        };
        companion?: undefined;
    }>;
    getMe(guest: AuthenticatedGuest): Promise<{
        id: string;
        name: string;
        phone: string;
        normalizedPhone: string;
        attendance: unknown;
        companions: {
            id: string;
            name: string;
            phone: string | null;
        }[];
        giftIds: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    getCompanionMe(companion: AuthenticatedCompanion): Promise<{
        id: string;
        name: string;
        phone: string | null;
        invitedBy: {
            id: string;
            name: string;
        };
        giftIds: string[];
    }>;
    updateProfile(guest: AuthenticatedGuest, dto: UpdateGuestProfileDto): Promise<{
        id: string;
        name: string;
        phone: string;
        normalizedPhone: string;
        attendance: unknown;
        companions: {
            id: string;
            name: string;
            phone: string | null;
        }[];
        giftIds: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateAttendance(guest: AuthenticatedGuest, dto: UpdateAttendanceDto): Promise<{
        id: string;
        name: string;
        phone: string;
        normalizedPhone: string;
        attendance: unknown;
        companions: {
            id: string;
            name: string;
            phone: string | null;
        }[];
        giftIds: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateCompanions(guest: AuthenticatedGuest, dto: UpdateCompanionsDto): Promise<{
        id: string;
        name: string;
        phone: string;
        normalizedPhone: string;
        attendance: unknown;
        companions: {
            id: string;
            name: string;
            phone: string | null;
        }[];
        giftIds: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
}
