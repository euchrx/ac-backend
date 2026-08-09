import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { GuestAccessDto } from './dto/guest-access.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { UpdateCompanionsDto } from './dto/update-companions.dto';
import { UpdateGuestProfileDto } from './dto/update-guest-profile.dto';
export declare class GuestAuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
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
    getMe(guestId: string): Promise<{
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
    getCompanionMe(companionId: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        invitedBy: {
            id: string;
            name: string;
        };
        giftIds: string[];
    }>;
    updateAttendance(guestId: string, dto: UpdateAttendanceDto): Promise<{
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
    updateCompanions(guestId: string, dto: UpdateCompanionsDto): Promise<{
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
    updateProfile(guestId: string, dto: UpdateGuestProfileDto): Promise<{
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
    private assertRsvpDeadlineOpen;
    private normalizePhone;
    private normalizeName;
    private serializeGuest;
}
