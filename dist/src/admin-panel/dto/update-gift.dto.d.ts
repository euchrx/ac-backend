import { GiftType } from '../../generated/prisma/enums';
export declare class UpdateGiftDto {
    title?: string;
    description?: string | null;
    type?: GiftType;
    suggestedAmount?: number | null;
    externalUrl?: string | null;
    active?: boolean;
    sortOrder?: number;
}
