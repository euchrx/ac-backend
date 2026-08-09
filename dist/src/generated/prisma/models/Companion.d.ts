import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CompanionModel = runtime.Types.Result.DefaultSelection<Prisma.$CompanionPayload>;
export type AggregateCompanion = {
    _count: CompanionCountAggregateOutputType | null;
    _min: CompanionMinAggregateOutputType | null;
    _max: CompanionMaxAggregateOutputType | null;
};
export type CompanionMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    phone: string | null;
    normalizedPhone: string | null;
    guestId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CompanionMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    phone: string | null;
    normalizedPhone: string | null;
    guestId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CompanionCountAggregateOutputType = {
    id: number;
    name: number;
    phone: number;
    normalizedPhone: number;
    guestId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CompanionMinAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    normalizedPhone?: true;
    guestId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CompanionMaxAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    normalizedPhone?: true;
    guestId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CompanionCountAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    normalizedPhone?: true;
    guestId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CompanionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanionWhereInput;
    orderBy?: Prisma.CompanionOrderByWithRelationInput | Prisma.CompanionOrderByWithRelationInput[];
    cursor?: Prisma.CompanionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CompanionCountAggregateInputType;
    _min?: CompanionMinAggregateInputType;
    _max?: CompanionMaxAggregateInputType;
};
export type GetCompanionAggregateType<T extends CompanionAggregateArgs> = {
    [P in keyof T & keyof AggregateCompanion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCompanion[P]> : Prisma.GetScalarType<T[P], AggregateCompanion[P]>;
};
export type CompanionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanionWhereInput;
    orderBy?: Prisma.CompanionOrderByWithAggregationInput | Prisma.CompanionOrderByWithAggregationInput[];
    by: Prisma.CompanionScalarFieldEnum[] | Prisma.CompanionScalarFieldEnum;
    having?: Prisma.CompanionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanionCountAggregateInputType | true;
    _min?: CompanionMinAggregateInputType;
    _max?: CompanionMaxAggregateInputType;
};
export type CompanionGroupByOutputType = {
    id: string;
    name: string;
    phone: string | null;
    normalizedPhone: string | null;
    guestId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CompanionCountAggregateOutputType | null;
    _min: CompanionMinAggregateOutputType | null;
    _max: CompanionMaxAggregateOutputType | null;
};
export type GetCompanionGroupByPayload<T extends CompanionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CompanionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CompanionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CompanionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CompanionGroupByOutputType[P]>;
}>>;
export type CompanionWhereInput = {
    AND?: Prisma.CompanionWhereInput | Prisma.CompanionWhereInput[];
    OR?: Prisma.CompanionWhereInput[];
    NOT?: Prisma.CompanionWhereInput | Prisma.CompanionWhereInput[];
    id?: Prisma.StringFilter<"Companion"> | string;
    name?: Prisma.StringFilter<"Companion"> | string;
    phone?: Prisma.StringNullableFilter<"Companion"> | string | null;
    normalizedPhone?: Prisma.StringNullableFilter<"Companion"> | string | null;
    guestId?: Prisma.StringFilter<"Companion"> | string;
    createdAt?: Prisma.DateTimeFilter<"Companion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Companion"> | Date | string;
    guest?: Prisma.XOR<Prisma.GuestScalarRelationFilter, Prisma.GuestWhereInput>;
    giftChoices?: Prisma.CompanionGiftChoiceListRelationFilter;
};
export type CompanionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    normalizedPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    guest?: Prisma.GuestOrderByWithRelationInput;
    giftChoices?: Prisma.CompanionGiftChoiceOrderByRelationAggregateInput;
};
export type CompanionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    normalizedPhone?: string;
    AND?: Prisma.CompanionWhereInput | Prisma.CompanionWhereInput[];
    OR?: Prisma.CompanionWhereInput[];
    NOT?: Prisma.CompanionWhereInput | Prisma.CompanionWhereInput[];
    name?: Prisma.StringFilter<"Companion"> | string;
    phone?: Prisma.StringNullableFilter<"Companion"> | string | null;
    guestId?: Prisma.StringFilter<"Companion"> | string;
    createdAt?: Prisma.DateTimeFilter<"Companion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Companion"> | Date | string;
    guest?: Prisma.XOR<Prisma.GuestScalarRelationFilter, Prisma.GuestWhereInput>;
    giftChoices?: Prisma.CompanionGiftChoiceListRelationFilter;
}, "id" | "normalizedPhone">;
export type CompanionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    normalizedPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CompanionCountOrderByAggregateInput;
    _max?: Prisma.CompanionMaxOrderByAggregateInput;
    _min?: Prisma.CompanionMinOrderByAggregateInput;
};
export type CompanionScalarWhereWithAggregatesInput = {
    AND?: Prisma.CompanionScalarWhereWithAggregatesInput | Prisma.CompanionScalarWhereWithAggregatesInput[];
    OR?: Prisma.CompanionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CompanionScalarWhereWithAggregatesInput | Prisma.CompanionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Companion"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Companion"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Companion"> | string | null;
    normalizedPhone?: Prisma.StringNullableWithAggregatesFilter<"Companion"> | string | null;
    guestId?: Prisma.StringWithAggregatesFilter<"Companion"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Companion"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Companion"> | Date | string;
};
export type CompanionCreateInput = {
    id?: string;
    name: string;
    phone?: string | null;
    normalizedPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    guest: Prisma.GuestCreateNestedOneWithoutCompanionsInput;
    giftChoices?: Prisma.CompanionGiftChoiceCreateNestedManyWithoutCompanionInput;
};
export type CompanionUncheckedCreateInput = {
    id?: string;
    name: string;
    phone?: string | null;
    normalizedPhone?: string | null;
    guestId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    giftChoices?: Prisma.CompanionGiftChoiceUncheckedCreateNestedManyWithoutCompanionInput;
};
export type CompanionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    normalizedPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guest?: Prisma.GuestUpdateOneRequiredWithoutCompanionsNestedInput;
    giftChoices?: Prisma.CompanionGiftChoiceUpdateManyWithoutCompanionNestedInput;
};
export type CompanionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    normalizedPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    giftChoices?: Prisma.CompanionGiftChoiceUncheckedUpdateManyWithoutCompanionNestedInput;
};
export type CompanionCreateManyInput = {
    id?: string;
    name: string;
    phone?: string | null;
    normalizedPhone?: string | null;
    guestId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CompanionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    normalizedPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    normalizedPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanionListRelationFilter = {
    every?: Prisma.CompanionWhereInput;
    some?: Prisma.CompanionWhereInput;
    none?: Prisma.CompanionWhereInput;
};
export type CompanionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CompanionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    normalizedPhone?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CompanionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    normalizedPhone?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CompanionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    normalizedPhone?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CompanionScalarRelationFilter = {
    is?: Prisma.CompanionWhereInput;
    isNot?: Prisma.CompanionWhereInput;
};
export type CompanionCreateNestedManyWithoutGuestInput = {
    create?: Prisma.XOR<Prisma.CompanionCreateWithoutGuestInput, Prisma.CompanionUncheckedCreateWithoutGuestInput> | Prisma.CompanionCreateWithoutGuestInput[] | Prisma.CompanionUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.CompanionCreateOrConnectWithoutGuestInput | Prisma.CompanionCreateOrConnectWithoutGuestInput[];
    createMany?: Prisma.CompanionCreateManyGuestInputEnvelope;
    connect?: Prisma.CompanionWhereUniqueInput | Prisma.CompanionWhereUniqueInput[];
};
export type CompanionUncheckedCreateNestedManyWithoutGuestInput = {
    create?: Prisma.XOR<Prisma.CompanionCreateWithoutGuestInput, Prisma.CompanionUncheckedCreateWithoutGuestInput> | Prisma.CompanionCreateWithoutGuestInput[] | Prisma.CompanionUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.CompanionCreateOrConnectWithoutGuestInput | Prisma.CompanionCreateOrConnectWithoutGuestInput[];
    createMany?: Prisma.CompanionCreateManyGuestInputEnvelope;
    connect?: Prisma.CompanionWhereUniqueInput | Prisma.CompanionWhereUniqueInput[];
};
export type CompanionUpdateManyWithoutGuestNestedInput = {
    create?: Prisma.XOR<Prisma.CompanionCreateWithoutGuestInput, Prisma.CompanionUncheckedCreateWithoutGuestInput> | Prisma.CompanionCreateWithoutGuestInput[] | Prisma.CompanionUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.CompanionCreateOrConnectWithoutGuestInput | Prisma.CompanionCreateOrConnectWithoutGuestInput[];
    upsert?: Prisma.CompanionUpsertWithWhereUniqueWithoutGuestInput | Prisma.CompanionUpsertWithWhereUniqueWithoutGuestInput[];
    createMany?: Prisma.CompanionCreateManyGuestInputEnvelope;
    set?: Prisma.CompanionWhereUniqueInput | Prisma.CompanionWhereUniqueInput[];
    disconnect?: Prisma.CompanionWhereUniqueInput | Prisma.CompanionWhereUniqueInput[];
    delete?: Prisma.CompanionWhereUniqueInput | Prisma.CompanionWhereUniqueInput[];
    connect?: Prisma.CompanionWhereUniqueInput | Prisma.CompanionWhereUniqueInput[];
    update?: Prisma.CompanionUpdateWithWhereUniqueWithoutGuestInput | Prisma.CompanionUpdateWithWhereUniqueWithoutGuestInput[];
    updateMany?: Prisma.CompanionUpdateManyWithWhereWithoutGuestInput | Prisma.CompanionUpdateManyWithWhereWithoutGuestInput[];
    deleteMany?: Prisma.CompanionScalarWhereInput | Prisma.CompanionScalarWhereInput[];
};
export type CompanionUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: Prisma.XOR<Prisma.CompanionCreateWithoutGuestInput, Prisma.CompanionUncheckedCreateWithoutGuestInput> | Prisma.CompanionCreateWithoutGuestInput[] | Prisma.CompanionUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.CompanionCreateOrConnectWithoutGuestInput | Prisma.CompanionCreateOrConnectWithoutGuestInput[];
    upsert?: Prisma.CompanionUpsertWithWhereUniqueWithoutGuestInput | Prisma.CompanionUpsertWithWhereUniqueWithoutGuestInput[];
    createMany?: Prisma.CompanionCreateManyGuestInputEnvelope;
    set?: Prisma.CompanionWhereUniqueInput | Prisma.CompanionWhereUniqueInput[];
    disconnect?: Prisma.CompanionWhereUniqueInput | Prisma.CompanionWhereUniqueInput[];
    delete?: Prisma.CompanionWhereUniqueInput | Prisma.CompanionWhereUniqueInput[];
    connect?: Prisma.CompanionWhereUniqueInput | Prisma.CompanionWhereUniqueInput[];
    update?: Prisma.CompanionUpdateWithWhereUniqueWithoutGuestInput | Prisma.CompanionUpdateWithWhereUniqueWithoutGuestInput[];
    updateMany?: Prisma.CompanionUpdateManyWithWhereWithoutGuestInput | Prisma.CompanionUpdateManyWithWhereWithoutGuestInput[];
    deleteMany?: Prisma.CompanionScalarWhereInput | Prisma.CompanionScalarWhereInput[];
};
export type CompanionCreateNestedOneWithoutGiftChoicesInput = {
    create?: Prisma.XOR<Prisma.CompanionCreateWithoutGiftChoicesInput, Prisma.CompanionUncheckedCreateWithoutGiftChoicesInput>;
    connectOrCreate?: Prisma.CompanionCreateOrConnectWithoutGiftChoicesInput;
    connect?: Prisma.CompanionWhereUniqueInput;
};
export type CompanionUpdateOneRequiredWithoutGiftChoicesNestedInput = {
    create?: Prisma.XOR<Prisma.CompanionCreateWithoutGiftChoicesInput, Prisma.CompanionUncheckedCreateWithoutGiftChoicesInput>;
    connectOrCreate?: Prisma.CompanionCreateOrConnectWithoutGiftChoicesInput;
    upsert?: Prisma.CompanionUpsertWithoutGiftChoicesInput;
    connect?: Prisma.CompanionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CompanionUpdateToOneWithWhereWithoutGiftChoicesInput, Prisma.CompanionUpdateWithoutGiftChoicesInput>, Prisma.CompanionUncheckedUpdateWithoutGiftChoicesInput>;
};
export type CompanionCreateWithoutGuestInput = {
    id?: string;
    name: string;
    phone?: string | null;
    normalizedPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    giftChoices?: Prisma.CompanionGiftChoiceCreateNestedManyWithoutCompanionInput;
};
export type CompanionUncheckedCreateWithoutGuestInput = {
    id?: string;
    name: string;
    phone?: string | null;
    normalizedPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    giftChoices?: Prisma.CompanionGiftChoiceUncheckedCreateNestedManyWithoutCompanionInput;
};
export type CompanionCreateOrConnectWithoutGuestInput = {
    where: Prisma.CompanionWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanionCreateWithoutGuestInput, Prisma.CompanionUncheckedCreateWithoutGuestInput>;
};
export type CompanionCreateManyGuestInputEnvelope = {
    data: Prisma.CompanionCreateManyGuestInput | Prisma.CompanionCreateManyGuestInput[];
    skipDuplicates?: boolean;
};
export type CompanionUpsertWithWhereUniqueWithoutGuestInput = {
    where: Prisma.CompanionWhereUniqueInput;
    update: Prisma.XOR<Prisma.CompanionUpdateWithoutGuestInput, Prisma.CompanionUncheckedUpdateWithoutGuestInput>;
    create: Prisma.XOR<Prisma.CompanionCreateWithoutGuestInput, Prisma.CompanionUncheckedCreateWithoutGuestInput>;
};
export type CompanionUpdateWithWhereUniqueWithoutGuestInput = {
    where: Prisma.CompanionWhereUniqueInput;
    data: Prisma.XOR<Prisma.CompanionUpdateWithoutGuestInput, Prisma.CompanionUncheckedUpdateWithoutGuestInput>;
};
export type CompanionUpdateManyWithWhereWithoutGuestInput = {
    where: Prisma.CompanionScalarWhereInput;
    data: Prisma.XOR<Prisma.CompanionUpdateManyMutationInput, Prisma.CompanionUncheckedUpdateManyWithoutGuestInput>;
};
export type CompanionScalarWhereInput = {
    AND?: Prisma.CompanionScalarWhereInput | Prisma.CompanionScalarWhereInput[];
    OR?: Prisma.CompanionScalarWhereInput[];
    NOT?: Prisma.CompanionScalarWhereInput | Prisma.CompanionScalarWhereInput[];
    id?: Prisma.StringFilter<"Companion"> | string;
    name?: Prisma.StringFilter<"Companion"> | string;
    phone?: Prisma.StringNullableFilter<"Companion"> | string | null;
    normalizedPhone?: Prisma.StringNullableFilter<"Companion"> | string | null;
    guestId?: Prisma.StringFilter<"Companion"> | string;
    createdAt?: Prisma.DateTimeFilter<"Companion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Companion"> | Date | string;
};
export type CompanionCreateWithoutGiftChoicesInput = {
    id?: string;
    name: string;
    phone?: string | null;
    normalizedPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    guest: Prisma.GuestCreateNestedOneWithoutCompanionsInput;
};
export type CompanionUncheckedCreateWithoutGiftChoicesInput = {
    id?: string;
    name: string;
    phone?: string | null;
    normalizedPhone?: string | null;
    guestId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CompanionCreateOrConnectWithoutGiftChoicesInput = {
    where: Prisma.CompanionWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanionCreateWithoutGiftChoicesInput, Prisma.CompanionUncheckedCreateWithoutGiftChoicesInput>;
};
export type CompanionUpsertWithoutGiftChoicesInput = {
    update: Prisma.XOR<Prisma.CompanionUpdateWithoutGiftChoicesInput, Prisma.CompanionUncheckedUpdateWithoutGiftChoicesInput>;
    create: Prisma.XOR<Prisma.CompanionCreateWithoutGiftChoicesInput, Prisma.CompanionUncheckedCreateWithoutGiftChoicesInput>;
    where?: Prisma.CompanionWhereInput;
};
export type CompanionUpdateToOneWithWhereWithoutGiftChoicesInput = {
    where?: Prisma.CompanionWhereInput;
    data: Prisma.XOR<Prisma.CompanionUpdateWithoutGiftChoicesInput, Prisma.CompanionUncheckedUpdateWithoutGiftChoicesInput>;
};
export type CompanionUpdateWithoutGiftChoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    normalizedPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guest?: Prisma.GuestUpdateOneRequiredWithoutCompanionsNestedInput;
};
export type CompanionUncheckedUpdateWithoutGiftChoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    normalizedPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanionCreateManyGuestInput = {
    id?: string;
    name: string;
    phone?: string | null;
    normalizedPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CompanionUpdateWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    normalizedPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    giftChoices?: Prisma.CompanionGiftChoiceUpdateManyWithoutCompanionNestedInput;
};
export type CompanionUncheckedUpdateWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    normalizedPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    giftChoices?: Prisma.CompanionGiftChoiceUncheckedUpdateManyWithoutCompanionNestedInput;
};
export type CompanionUncheckedUpdateManyWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    normalizedPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanionCountOutputType = {
    giftChoices: number;
};
export type CompanionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    giftChoices?: boolean | CompanionCountOutputTypeCountGiftChoicesArgs;
};
export type CompanionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionCountOutputTypeSelect<ExtArgs> | null;
};
export type CompanionCountOutputTypeCountGiftChoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanionGiftChoiceWhereInput;
};
export type CompanionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    normalizedPhone?: boolean;
    guestId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    giftChoices?: boolean | Prisma.Companion$giftChoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.CompanionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["companion"]>;
export type CompanionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    normalizedPhone?: boolean;
    guestId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["companion"]>;
export type CompanionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    normalizedPhone?: boolean;
    guestId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["companion"]>;
export type CompanionSelectScalar = {
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    normalizedPhone?: boolean;
    guestId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CompanionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "phone" | "normalizedPhone" | "guestId" | "createdAt" | "updatedAt", ExtArgs["result"]["companion"]>;
export type CompanionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    giftChoices?: boolean | Prisma.Companion$giftChoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.CompanionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CompanionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
};
export type CompanionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
};
export type $CompanionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Companion";
    objects: {
        guest: Prisma.$GuestPayload<ExtArgs>;
        giftChoices: Prisma.$CompanionGiftChoicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        phone: string | null;
        normalizedPhone: string | null;
        guestId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["companion"]>;
    composites: {};
};
export type CompanionGetPayload<S extends boolean | null | undefined | CompanionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CompanionPayload, S>;
export type CompanionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CompanionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CompanionCountAggregateInputType | true;
};
export interface CompanionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Companion'];
        meta: {
            name: 'Companion';
        };
    };
    findUnique<T extends CompanionFindUniqueArgs>(args: Prisma.SelectSubset<T, CompanionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CompanionClient<runtime.Types.Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CompanionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CompanionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompanionClient<runtime.Types.Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CompanionFindFirstArgs>(args?: Prisma.SelectSubset<T, CompanionFindFirstArgs<ExtArgs>>): Prisma.Prisma__CompanionClient<runtime.Types.Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CompanionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CompanionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompanionClient<runtime.Types.Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CompanionFindManyArgs>(args?: Prisma.SelectSubset<T, CompanionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CompanionCreateArgs>(args: Prisma.SelectSubset<T, CompanionCreateArgs<ExtArgs>>): Prisma.Prisma__CompanionClient<runtime.Types.Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CompanionCreateManyArgs>(args?: Prisma.SelectSubset<T, CompanionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CompanionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CompanionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CompanionDeleteArgs>(args: Prisma.SelectSubset<T, CompanionDeleteArgs<ExtArgs>>): Prisma.Prisma__CompanionClient<runtime.Types.Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CompanionUpdateArgs>(args: Prisma.SelectSubset<T, CompanionUpdateArgs<ExtArgs>>): Prisma.Prisma__CompanionClient<runtime.Types.Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CompanionDeleteManyArgs>(args?: Prisma.SelectSubset<T, CompanionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CompanionUpdateManyArgs>(args: Prisma.SelectSubset<T, CompanionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CompanionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CompanionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CompanionUpsertArgs>(args: Prisma.SelectSubset<T, CompanionUpsertArgs<ExtArgs>>): Prisma.Prisma__CompanionClient<runtime.Types.Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CompanionCountArgs>(args?: Prisma.Subset<T, CompanionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CompanionCountAggregateOutputType> : number>;
    aggregate<T extends CompanionAggregateArgs>(args: Prisma.Subset<T, CompanionAggregateArgs>): Prisma.PrismaPromise<GetCompanionAggregateType<T>>;
    groupBy<T extends CompanionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CompanionGroupByArgs['orderBy'];
    } : {
        orderBy?: CompanionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CompanionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CompanionFieldRefs;
}
export interface Prisma__CompanionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    guest<T extends Prisma.GuestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GuestDefaultArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    giftChoices<T extends Prisma.Companion$giftChoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Companion$giftChoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CompanionFieldRefs {
    readonly id: Prisma.FieldRef<"Companion", 'String'>;
    readonly name: Prisma.FieldRef<"Companion", 'String'>;
    readonly phone: Prisma.FieldRef<"Companion", 'String'>;
    readonly normalizedPhone: Prisma.FieldRef<"Companion", 'String'>;
    readonly guestId: Prisma.FieldRef<"Companion", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Companion", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Companion", 'DateTime'>;
}
export type CompanionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionSelect<ExtArgs> | null;
    omit?: Prisma.CompanionOmit<ExtArgs> | null;
    include?: Prisma.CompanionInclude<ExtArgs> | null;
    where: Prisma.CompanionWhereUniqueInput;
};
export type CompanionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionSelect<ExtArgs> | null;
    omit?: Prisma.CompanionOmit<ExtArgs> | null;
    include?: Prisma.CompanionInclude<ExtArgs> | null;
    where: Prisma.CompanionWhereUniqueInput;
};
export type CompanionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CompanionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CompanionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CompanionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionSelect<ExtArgs> | null;
    omit?: Prisma.CompanionOmit<ExtArgs> | null;
    include?: Prisma.CompanionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompanionCreateInput, Prisma.CompanionUncheckedCreateInput>;
};
export type CompanionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CompanionCreateManyInput | Prisma.CompanionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CompanionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CompanionOmit<ExtArgs> | null;
    data: Prisma.CompanionCreateManyInput | Prisma.CompanionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CompanionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CompanionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionSelect<ExtArgs> | null;
    omit?: Prisma.CompanionOmit<ExtArgs> | null;
    include?: Prisma.CompanionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompanionUpdateInput, Prisma.CompanionUncheckedUpdateInput>;
    where: Prisma.CompanionWhereUniqueInput;
};
export type CompanionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CompanionUpdateManyMutationInput, Prisma.CompanionUncheckedUpdateManyInput>;
    where?: Prisma.CompanionWhereInput;
    limit?: number;
};
export type CompanionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CompanionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompanionUpdateManyMutationInput, Prisma.CompanionUncheckedUpdateManyInput>;
    where?: Prisma.CompanionWhereInput;
    limit?: number;
    include?: Prisma.CompanionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CompanionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionSelect<ExtArgs> | null;
    omit?: Prisma.CompanionOmit<ExtArgs> | null;
    include?: Prisma.CompanionInclude<ExtArgs> | null;
    where: Prisma.CompanionWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanionCreateInput, Prisma.CompanionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CompanionUpdateInput, Prisma.CompanionUncheckedUpdateInput>;
};
export type CompanionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionSelect<ExtArgs> | null;
    omit?: Prisma.CompanionOmit<ExtArgs> | null;
    include?: Prisma.CompanionInclude<ExtArgs> | null;
    where: Prisma.CompanionWhereUniqueInput;
};
export type CompanionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanionWhereInput;
    limit?: number;
};
export type Companion$giftChoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.CompanionGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.CompanionGiftChoiceInclude<ExtArgs> | null;
    where?: Prisma.CompanionGiftChoiceWhereInput;
    orderBy?: Prisma.CompanionGiftChoiceOrderByWithRelationInput | Prisma.CompanionGiftChoiceOrderByWithRelationInput[];
    cursor?: Prisma.CompanionGiftChoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompanionGiftChoiceScalarFieldEnum | Prisma.CompanionGiftChoiceScalarFieldEnum[];
};
export type CompanionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionSelect<ExtArgs> | null;
    omit?: Prisma.CompanionOmit<ExtArgs> | null;
    include?: Prisma.CompanionInclude<ExtArgs> | null;
};
