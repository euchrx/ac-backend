export declare const AttendanceStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly MAYBE: "MAYBE";
    readonly NOT_GOING: "NOT_GOING";
};
export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus];
export declare const GiftType: {
    readonly MONEY: "MONEY";
    readonly PHYSICAL: "PHYSICAL";
};
export type GiftType = (typeof GiftType)[keyof typeof GiftType];
