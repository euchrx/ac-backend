import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GuestModel = runtime.Types.Result.DefaultSelection<Prisma.$GuestPayload>;
export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null;
    _min: GuestMinAggregateOutputType | null;
    _max: GuestMaxAggregateOutputType | null;
};
export type GuestMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    phone: string | null;
    normalizedPhone: string | null;
    attendance: $Enums.AttendanceStatus | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GuestMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    phone: string | null;
    normalizedPhone: string | null;
    attendance: $Enums.AttendanceStatus | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GuestCountAggregateOutputType = {
    id: number;
    name: number;
    phone: number;
    normalizedPhone: number;
    attendance: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GuestMinAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    normalizedPhone?: true;
    attendance?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GuestMaxAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    normalizedPhone?: true;
    attendance?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GuestCountAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    normalizedPhone?: true;
    attendance?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GuestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestWhereInput;
    orderBy?: Prisma.GuestOrderByWithRelationInput | Prisma.GuestOrderByWithRelationInput[];
    cursor?: Prisma.GuestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GuestCountAggregateInputType;
    _min?: GuestMinAggregateInputType;
    _max?: GuestMaxAggregateInputType;
};
export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
    [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGuest[P]> : Prisma.GetScalarType<T[P], AggregateGuest[P]>;
};
export type GuestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestWhereInput;
    orderBy?: Prisma.GuestOrderByWithAggregationInput | Prisma.GuestOrderByWithAggregationInput[];
    by: Prisma.GuestScalarFieldEnum[] | Prisma.GuestScalarFieldEnum;
    having?: Prisma.GuestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GuestCountAggregateInputType | true;
    _min?: GuestMinAggregateInputType;
    _max?: GuestMaxAggregateInputType;
};
export type GuestGroupByOutputType = {
    id: string;
    name: string;
    phone: string;
    normalizedPhone: string;
    attendance: $Enums.AttendanceStatus;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: GuestCountAggregateOutputType | null;
    _min: GuestMinAggregateOutputType | null;
    _max: GuestMaxAggregateOutputType | null;
};
export type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GuestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GuestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GuestGroupByOutputType[P]>;
}>>;
export type GuestWhereInput = {
    AND?: Prisma.GuestWhereInput | Prisma.GuestWhereInput[];
    OR?: Prisma.GuestWhereInput[];
    NOT?: Prisma.GuestWhereInput | Prisma.GuestWhereInput[];
    id?: Prisma.StringFilter<"Guest"> | string;
    name?: Prisma.StringFilter<"Guest"> | string;
    phone?: Prisma.StringFilter<"Guest"> | string;
    normalizedPhone?: Prisma.StringFilter<"Guest"> | string;
    attendance?: Prisma.EnumAttendanceStatusFilter<"Guest"> | $Enums.AttendanceStatus;
    notes?: Prisma.StringNullableFilter<"Guest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Guest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Guest"> | Date | string;
    companions?: Prisma.CompanionListRelationFilter;
    giftChoices?: Prisma.GuestGiftChoiceListRelationFilter;
};
export type GuestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    normalizedPhone?: Prisma.SortOrder;
    attendance?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    companions?: Prisma.CompanionOrderByRelationAggregateInput;
    giftChoices?: Prisma.GuestGiftChoiceOrderByRelationAggregateInput;
};
export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    normalizedPhone?: string;
    AND?: Prisma.GuestWhereInput | Prisma.GuestWhereInput[];
    OR?: Prisma.GuestWhereInput[];
    NOT?: Prisma.GuestWhereInput | Prisma.GuestWhereInput[];
    name?: Prisma.StringFilter<"Guest"> | string;
    phone?: Prisma.StringFilter<"Guest"> | string;
    attendance?: Prisma.EnumAttendanceStatusFilter<"Guest"> | $Enums.AttendanceStatus;
    notes?: Prisma.StringNullableFilter<"Guest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Guest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Guest"> | Date | string;
    companions?: Prisma.CompanionListRelationFilter;
    giftChoices?: Prisma.GuestGiftChoiceListRelationFilter;
}, "id" | "normalizedPhone">;
export type GuestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    normalizedPhone?: Prisma.SortOrder;
    attendance?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GuestCountOrderByAggregateInput;
    _max?: Prisma.GuestMaxOrderByAggregateInput;
    _min?: Prisma.GuestMinOrderByAggregateInput;
};
export type GuestScalarWhereWithAggregatesInput = {
    AND?: Prisma.GuestScalarWhereWithAggregatesInput | Prisma.GuestScalarWhereWithAggregatesInput[];
    OR?: Prisma.GuestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GuestScalarWhereWithAggregatesInput | Prisma.GuestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Guest"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Guest"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"Guest"> | string;
    normalizedPhone?: Prisma.StringWithAggregatesFilter<"Guest"> | string;
    attendance?: Prisma.EnumAttendanceStatusWithAggregatesFilter<"Guest"> | $Enums.AttendanceStatus;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Guest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Guest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Guest"> | Date | string;
};
export type GuestCreateInput = {
    id?: string;
    name: string;
    phone: string;
    normalizedPhone: string;
    attendance?: $Enums.AttendanceStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    companions?: Prisma.CompanionCreateNestedManyWithoutGuestInput;
    giftChoices?: Prisma.GuestGiftChoiceCreateNestedManyWithoutGuestInput;
};
export type GuestUncheckedCreateInput = {
    id?: string;
    name: string;
    phone: string;
    normalizedPhone: string;
    attendance?: $Enums.AttendanceStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    companions?: Prisma.CompanionUncheckedCreateNestedManyWithoutGuestInput;
    giftChoices?: Prisma.GuestGiftChoiceUncheckedCreateNestedManyWithoutGuestInput;
};
export type GuestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    attendance?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    companions?: Prisma.CompanionUpdateManyWithoutGuestNestedInput;
    giftChoices?: Prisma.GuestGiftChoiceUpdateManyWithoutGuestNestedInput;
};
export type GuestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    attendance?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    companions?: Prisma.CompanionUncheckedUpdateManyWithoutGuestNestedInput;
    giftChoices?: Prisma.GuestGiftChoiceUncheckedUpdateManyWithoutGuestNestedInput;
};
export type GuestCreateManyInput = {
    id?: string;
    name: string;
    phone: string;
    normalizedPhone: string;
    attendance?: $Enums.AttendanceStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GuestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    attendance?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    attendance?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    normalizedPhone?: Prisma.SortOrder;
    attendance?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GuestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    normalizedPhone?: Prisma.SortOrder;
    attendance?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GuestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    normalizedPhone?: Prisma.SortOrder;
    attendance?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GuestScalarRelationFilter = {
    is?: Prisma.GuestWhereInput;
    isNot?: Prisma.GuestWhereInput;
};
export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type GuestCreateNestedOneWithoutCompanionsInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutCompanionsInput, Prisma.GuestUncheckedCreateWithoutCompanionsInput>;
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutCompanionsInput;
    connect?: Prisma.GuestWhereUniqueInput;
};
export type GuestUpdateOneRequiredWithoutCompanionsNestedInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutCompanionsInput, Prisma.GuestUncheckedCreateWithoutCompanionsInput>;
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutCompanionsInput;
    upsert?: Prisma.GuestUpsertWithoutCompanionsInput;
    connect?: Prisma.GuestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GuestUpdateToOneWithWhereWithoutCompanionsInput, Prisma.GuestUpdateWithoutCompanionsInput>, Prisma.GuestUncheckedUpdateWithoutCompanionsInput>;
};
export type GuestCreateNestedOneWithoutGiftChoicesInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutGiftChoicesInput, Prisma.GuestUncheckedCreateWithoutGiftChoicesInput>;
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutGiftChoicesInput;
    connect?: Prisma.GuestWhereUniqueInput;
};
export type GuestUpdateOneRequiredWithoutGiftChoicesNestedInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutGiftChoicesInput, Prisma.GuestUncheckedCreateWithoutGiftChoicesInput>;
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutGiftChoicesInput;
    upsert?: Prisma.GuestUpsertWithoutGiftChoicesInput;
    connect?: Prisma.GuestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GuestUpdateToOneWithWhereWithoutGiftChoicesInput, Prisma.GuestUpdateWithoutGiftChoicesInput>, Prisma.GuestUncheckedUpdateWithoutGiftChoicesInput>;
};
export type GuestCreateWithoutCompanionsInput = {
    id?: string;
    name: string;
    phone: string;
    normalizedPhone: string;
    attendance?: $Enums.AttendanceStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    giftChoices?: Prisma.GuestGiftChoiceCreateNestedManyWithoutGuestInput;
};
export type GuestUncheckedCreateWithoutCompanionsInput = {
    id?: string;
    name: string;
    phone: string;
    normalizedPhone: string;
    attendance?: $Enums.AttendanceStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    giftChoices?: Prisma.GuestGiftChoiceUncheckedCreateNestedManyWithoutGuestInput;
};
export type GuestCreateOrConnectWithoutCompanionsInput = {
    where: Prisma.GuestWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestCreateWithoutCompanionsInput, Prisma.GuestUncheckedCreateWithoutCompanionsInput>;
};
export type GuestUpsertWithoutCompanionsInput = {
    update: Prisma.XOR<Prisma.GuestUpdateWithoutCompanionsInput, Prisma.GuestUncheckedUpdateWithoutCompanionsInput>;
    create: Prisma.XOR<Prisma.GuestCreateWithoutCompanionsInput, Prisma.GuestUncheckedCreateWithoutCompanionsInput>;
    where?: Prisma.GuestWhereInput;
};
export type GuestUpdateToOneWithWhereWithoutCompanionsInput = {
    where?: Prisma.GuestWhereInput;
    data: Prisma.XOR<Prisma.GuestUpdateWithoutCompanionsInput, Prisma.GuestUncheckedUpdateWithoutCompanionsInput>;
};
export type GuestUpdateWithoutCompanionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    attendance?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    giftChoices?: Prisma.GuestGiftChoiceUpdateManyWithoutGuestNestedInput;
};
export type GuestUncheckedUpdateWithoutCompanionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    attendance?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    giftChoices?: Prisma.GuestGiftChoiceUncheckedUpdateManyWithoutGuestNestedInput;
};
export type GuestCreateWithoutGiftChoicesInput = {
    id?: string;
    name: string;
    phone: string;
    normalizedPhone: string;
    attendance?: $Enums.AttendanceStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    companions?: Prisma.CompanionCreateNestedManyWithoutGuestInput;
};
export type GuestUncheckedCreateWithoutGiftChoicesInput = {
    id?: string;
    name: string;
    phone: string;
    normalizedPhone: string;
    attendance?: $Enums.AttendanceStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    companions?: Prisma.CompanionUncheckedCreateNestedManyWithoutGuestInput;
};
export type GuestCreateOrConnectWithoutGiftChoicesInput = {
    where: Prisma.GuestWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestCreateWithoutGiftChoicesInput, Prisma.GuestUncheckedCreateWithoutGiftChoicesInput>;
};
export type GuestUpsertWithoutGiftChoicesInput = {
    update: Prisma.XOR<Prisma.GuestUpdateWithoutGiftChoicesInput, Prisma.GuestUncheckedUpdateWithoutGiftChoicesInput>;
    create: Prisma.XOR<Prisma.GuestCreateWithoutGiftChoicesInput, Prisma.GuestUncheckedCreateWithoutGiftChoicesInput>;
    where?: Prisma.GuestWhereInput;
};
export type GuestUpdateToOneWithWhereWithoutGiftChoicesInput = {
    where?: Prisma.GuestWhereInput;
    data: Prisma.XOR<Prisma.GuestUpdateWithoutGiftChoicesInput, Prisma.GuestUncheckedUpdateWithoutGiftChoicesInput>;
};
export type GuestUpdateWithoutGiftChoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    attendance?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    companions?: Prisma.CompanionUpdateManyWithoutGuestNestedInput;
};
export type GuestUncheckedUpdateWithoutGiftChoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    attendance?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    companions?: Prisma.CompanionUncheckedUpdateManyWithoutGuestNestedInput;
};
export type GuestCountOutputType = {
    companions: number;
    giftChoices: number;
};
export type GuestCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    companions?: boolean | GuestCountOutputTypeCountCompanionsArgs;
    giftChoices?: boolean | GuestCountOutputTypeCountGiftChoicesArgs;
};
export type GuestCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestCountOutputTypeSelect<ExtArgs> | null;
};
export type GuestCountOutputTypeCountCompanionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanionWhereInput;
};
export type GuestCountOutputTypeCountGiftChoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestGiftChoiceWhereInput;
};
export type GuestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    normalizedPhone?: boolean;
    attendance?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    companions?: boolean | Prisma.Guest$companionsArgs<ExtArgs>;
    giftChoices?: boolean | Prisma.Guest$giftChoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.GuestCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["guest"]>;
export type GuestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    normalizedPhone?: boolean;
    attendance?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["guest"]>;
export type GuestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    normalizedPhone?: boolean;
    attendance?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["guest"]>;
export type GuestSelectScalar = {
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    normalizedPhone?: boolean;
    attendance?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GuestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "phone" | "normalizedPhone" | "attendance" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["guest"]>;
export type GuestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    companions?: boolean | Prisma.Guest$companionsArgs<ExtArgs>;
    giftChoices?: boolean | Prisma.Guest$giftChoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.GuestCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GuestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type GuestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $GuestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Guest";
    objects: {
        companions: Prisma.$CompanionPayload<ExtArgs>[];
        giftChoices: Prisma.$GuestGiftChoicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        phone: string;
        normalizedPhone: string;
        attendance: $Enums.AttendanceStatus;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["guest"]>;
    composites: {};
};
export type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GuestPayload, S>;
export type GuestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GuestCountAggregateInputType | true;
};
export interface GuestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Guest'];
        meta: {
            name: 'Guest';
        };
    };
    findUnique<T extends GuestFindUniqueArgs>(args: Prisma.SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GuestFindFirstArgs>(args?: Prisma.SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GuestFindManyArgs>(args?: Prisma.SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GuestCreateArgs>(args: Prisma.SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GuestCreateManyArgs>(args?: Prisma.SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GuestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GuestDeleteArgs>(args: Prisma.SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GuestUpdateArgs>(args: Prisma.SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GuestDeleteManyArgs>(args?: Prisma.SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GuestUpdateManyArgs>(args: Prisma.SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GuestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GuestUpsertArgs>(args: Prisma.SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GuestCountArgs>(args?: Prisma.Subset<T, GuestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GuestCountAggregateOutputType> : number>;
    aggregate<T extends GuestAggregateArgs>(args: Prisma.Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>;
    groupBy<T extends GuestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GuestGroupByArgs['orderBy'];
    } : {
        orderBy?: GuestGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GuestFieldRefs;
}
export interface Prisma__GuestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    companions<T extends Prisma.Guest$companionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Guest$companionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    giftChoices<T extends Prisma.Guest$giftChoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Guest$giftChoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GuestFieldRefs {
    readonly id: Prisma.FieldRef<"Guest", 'String'>;
    readonly name: Prisma.FieldRef<"Guest", 'String'>;
    readonly phone: Prisma.FieldRef<"Guest", 'String'>;
    readonly normalizedPhone: Prisma.FieldRef<"Guest", 'String'>;
    readonly attendance: Prisma.FieldRef<"Guest", 'AttendanceStatus'>;
    readonly notes: Prisma.FieldRef<"Guest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Guest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Guest", 'DateTime'>;
}
export type GuestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where: Prisma.GuestWhereUniqueInput;
};
export type GuestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where: Prisma.GuestWhereUniqueInput;
};
export type GuestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where?: Prisma.GuestWhereInput;
    orderBy?: Prisma.GuestOrderByWithRelationInput | Prisma.GuestOrderByWithRelationInput[];
    cursor?: Prisma.GuestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuestScalarFieldEnum | Prisma.GuestScalarFieldEnum[];
};
export type GuestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where?: Prisma.GuestWhereInput;
    orderBy?: Prisma.GuestOrderByWithRelationInput | Prisma.GuestOrderByWithRelationInput[];
    cursor?: Prisma.GuestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuestScalarFieldEnum | Prisma.GuestScalarFieldEnum[];
};
export type GuestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where?: Prisma.GuestWhereInput;
    orderBy?: Prisma.GuestOrderByWithRelationInput | Prisma.GuestOrderByWithRelationInput[];
    cursor?: Prisma.GuestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuestScalarFieldEnum | Prisma.GuestScalarFieldEnum[];
};
export type GuestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestCreateInput, Prisma.GuestUncheckedCreateInput>;
};
export type GuestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GuestCreateManyInput | Prisma.GuestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GuestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    data: Prisma.GuestCreateManyInput | Prisma.GuestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GuestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestUpdateInput, Prisma.GuestUncheckedUpdateInput>;
    where: Prisma.GuestWhereUniqueInput;
};
export type GuestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GuestUpdateManyMutationInput, Prisma.GuestUncheckedUpdateManyInput>;
    where?: Prisma.GuestWhereInput;
    limit?: number;
};
export type GuestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestUpdateManyMutationInput, Prisma.GuestUncheckedUpdateManyInput>;
    where?: Prisma.GuestWhereInput;
    limit?: number;
};
export type GuestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where: Prisma.GuestWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestCreateInput, Prisma.GuestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GuestUpdateInput, Prisma.GuestUncheckedUpdateInput>;
};
export type GuestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where: Prisma.GuestWhereUniqueInput;
};
export type GuestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestWhereInput;
    limit?: number;
};
export type Guest$companionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionSelect<ExtArgs> | null;
    omit?: Prisma.CompanionOmit<ExtArgs> | null;
    include?: Prisma.CompanionInclude<ExtArgs> | null;
    where?: Prisma.CompanionWhereInput;
    orderBy?: Prisma.CompanionOrderByWithRelationInput | Prisma.CompanionOrderByWithRelationInput[];
    cursor?: Prisma.CompanionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompanionScalarFieldEnum | Prisma.CompanionScalarFieldEnum[];
};
export type Guest$giftChoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.GuestGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.GuestGiftChoiceInclude<ExtArgs> | null;
    where?: Prisma.GuestGiftChoiceWhereInput;
    orderBy?: Prisma.GuestGiftChoiceOrderByWithRelationInput | Prisma.GuestGiftChoiceOrderByWithRelationInput[];
    cursor?: Prisma.GuestGiftChoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuestGiftChoiceScalarFieldEnum | Prisma.GuestGiftChoiceScalarFieldEnum[];
};
export type GuestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
};
