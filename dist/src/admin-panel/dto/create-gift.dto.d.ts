import { GiftType } from '../../generated/prisma/enums';
export declare class CreateGiftDto {
    title: string;
    description?: string | null;
    type: GiftType;
    suggestedAmount?: number | null;
    externalUrl?: string | null;
    sortOrder?: number;
}
