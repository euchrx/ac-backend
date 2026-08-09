import type { AttendanceStatus } from '../../generated/prisma/enums';
export interface AuthenticatedGuest {
    id: string;
    name: string;
    phone: string;
    normalizedPhone: string;
    attendance: AttendanceStatus;
}
