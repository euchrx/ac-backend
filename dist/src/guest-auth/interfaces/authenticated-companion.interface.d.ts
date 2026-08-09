export interface AuthenticatedCompanion {
    id: string;
    name: string;
    phone: string | null;
    normalizedPhone: string | null;
    guestId: string;
}
