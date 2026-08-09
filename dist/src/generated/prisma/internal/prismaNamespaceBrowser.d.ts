import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Admin: "Admin";
    readonly Guest: "Guest";
    readonly Companion: "Companion";
    readonly CompanionGiftChoice: "CompanionGiftChoice";
    readonly Gift: "Gift";
    readonly GuestGiftChoice: "GuestGiftChoice";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AdminScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly active: "active";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];
export declare const GuestScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly phone: "phone";
    readonly normalizedPhone: "normalizedPhone";
    readonly attendance: "attendance";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum];
export declare const CompanionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly phone: "phone";
    readonly normalizedPhone: "normalizedPhone";
    readonly guestId: "guestId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CompanionScalarFieldEnum = (typeof CompanionScalarFieldEnum)[keyof typeof CompanionScalarFieldEnum];
export declare const CompanionGiftChoiceScalarFieldEnum: {
    readonly id: "id";
    readonly companionId: "companionId";
    readonly giftId: "giftId";
    readonly createdAt: "createdAt";
};
export type CompanionGiftChoiceScalarFieldEnum = (typeof CompanionGiftChoiceScalarFieldEnum)[keyof typeof CompanionGiftChoiceScalarFieldEnum];
export declare const GiftScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly type: "type";
    readonly suggestedAmount: "suggestedAmount";
    readonly externalUrl: "externalUrl";
    readonly active: "active";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GiftScalarFieldEnum = (typeof GiftScalarFieldEnum)[keyof typeof GiftScalarFieldEnum];
export declare const GuestGiftChoiceScalarFieldEnum: {
    readonly id: "id";
    readonly guestId: "guestId";
    readonly giftId: "giftId";
    readonly createdAt: "createdAt";
};
export type GuestGiftChoiceScalarFieldEnum = (typeof GuestGiftChoiceScalarFieldEnum)[keyof typeof GuestGiftChoiceScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
