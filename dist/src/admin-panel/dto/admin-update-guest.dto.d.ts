import { AttendanceStatus } from '../../generated/prisma/enums';
export declare class AdminUpdateGuestDto {
    name?: string;
    phone?: string;
    attendance?: AttendanceStatus;
    notes?: string | null;
}
