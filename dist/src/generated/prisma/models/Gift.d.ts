import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GiftModel = runtime.Types.Result.DefaultSelection<Prisma.$GiftPayload>;
export type AggregateGift = {
    _count: GiftCountAggregateOutputType | null;
    _avg: GiftAvgAggregateOutputType | null;
    _sum: GiftSumAggregateOutputType | null;
    _min: GiftMinAggregateOutputType | null;
    _max: GiftMaxAggregateOutputType | null;
};
export type GiftAvgAggregateOutputType = {
    suggestedAmount: runtime.Decimal | null;
    sortOrder: number | null;
};
export type GiftSumAggregateOutputType = {
    suggestedAmount: runtime.Decimal | null;
    sortOrder: number | null;
};
export type GiftMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    type: $Enums.GiftType | null;
    suggestedAmount: runtime.Decimal | null;
    externalUrl: string | null;
    active: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GiftMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    type: $Enums.GiftType | null;
    suggestedAmount: runtime.Decimal | null;
    externalUrl: string | null;
    active: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GiftCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    type: number;
    suggestedAmount: number;
    externalUrl: number;
    active: number;
    sortOrder: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GiftAvgAggregateInputType = {
    suggestedAmount?: true;
    sortOrder?: true;
};
export type GiftSumAggregateInputType = {
    suggestedAmount?: true;
    sortOrder?: true;
};
export type GiftMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    type?: true;
    suggestedAmount?: true;
    externalUrl?: true;
    active?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GiftMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    type?: true;
    suggestedAmount?: true;
    externalUrl?: true;
    active?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GiftCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    type?: true;
    suggestedAmount?: true;
    externalUrl?: true;
    active?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GiftAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GiftWhereInput;
    orderBy?: Prisma.GiftOrderByWithRelationInput | Prisma.GiftOrderByWithRelationInput[];
    cursor?: Prisma.GiftWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GiftCountAggregateInputType;
    _avg?: GiftAvgAggregateInputType;
    _sum?: GiftSumAggregateInputType;
    _min?: GiftMinAggregateInputType;
    _max?: GiftMaxAggregateInputType;
};
export type GetGiftAggregateType<T extends GiftAggregateArgs> = {
    [P in keyof T & keyof AggregateGift]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGift[P]> : Prisma.GetScalarType<T[P], AggregateGift[P]>;
};
export type GiftGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GiftWhereInput;
    orderBy?: Prisma.GiftOrderByWithAggregationInput | Prisma.GiftOrderByWithAggregationInput[];
    by: Prisma.GiftScalarFieldEnum[] | Prisma.GiftScalarFieldEnum;
    having?: Prisma.GiftScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GiftCountAggregateInputType | true;
    _avg?: GiftAvgAggregateInputType;
    _sum?: GiftSumAggregateInputType;
    _min?: GiftMinAggregateInputType;
    _max?: GiftMaxAggregateInputType;
};
export type GiftGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    type: $Enums.GiftType;
    suggestedAmount: runtime.Decimal | null;
    externalUrl: string | null;
    active: boolean;
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    _count: GiftCountAggregateOutputType | null;
    _avg: GiftAvgAggregateOutputType | null;
    _sum: GiftSumAggregateOutputType | null;
    _min: GiftMinAggregateOutputType | null;
    _max: GiftMaxAggregateOutputType | null;
};
export type GetGiftGroupByPayload<T extends GiftGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GiftGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GiftGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GiftGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GiftGroupByOutputType[P]>;
}>>;
export type GiftWhereInput = {
    AND?: Prisma.GiftWhereInput | Prisma.GiftWhereInput[];
    OR?: Prisma.GiftWhereInput[];
    NOT?: Prisma.GiftWhereInput | Prisma.GiftWhereInput[];
    id?: Prisma.StringFilter<"Gift"> | string;
    title?: Prisma.StringFilter<"Gift"> | string;
    description?: Prisma.StringNullableFilter<"Gift"> | string | null;
    type?: Prisma.EnumGiftTypeFilter<"Gift"> | $Enums.GiftType;
    suggestedAmount?: Prisma.DecimalNullableFilter<"Gift"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: Prisma.StringNullableFilter<"Gift"> | string | null;
    active?: Prisma.BoolFilter<"Gift"> | boolean;
    sortOrder?: Prisma.IntFilter<"Gift"> | number;
    createdAt?: Prisma.DateTimeFilter<"Gift"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Gift"> | Date | string;
    guestChoices?: Prisma.GuestGiftChoiceListRelationFilter;
    companionChoices?: Prisma.CompanionGiftChoiceListRelationFilter;
};
export type GiftOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    suggestedAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    externalUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    guestChoices?: Prisma.GuestGiftChoiceOrderByRelationAggregateInput;
    companionChoices?: Prisma.CompanionGiftChoiceOrderByRelationAggregateInput;
};
export type GiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GiftWhereInput | Prisma.GiftWhereInput[];
    OR?: Prisma.GiftWhereInput[];
    NOT?: Prisma.GiftWhereInput | Prisma.GiftWhereInput[];
    title?: Prisma.StringFilter<"Gift"> | string;
    description?: Prisma.StringNullableFilter<"Gift"> | string | null;
    type?: Prisma.EnumGiftTypeFilter<"Gift"> | $Enums.GiftType;
    suggestedAmount?: Prisma.DecimalNullableFilter<"Gift"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: Prisma.StringNullableFilter<"Gift"> | string | null;
    active?: Prisma.BoolFilter<"Gift"> | boolean;
    sortOrder?: Prisma.IntFilter<"Gift"> | number;
    createdAt?: Prisma.DateTimeFilter<"Gift"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Gift"> | Date | string;
    guestChoices?: Prisma.GuestGiftChoiceListRelationFilter;
    companionChoices?: Prisma.CompanionGiftChoiceListRelationFilter;
}, "id">;
export type GiftOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    suggestedAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    externalUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GiftCountOrderByAggregateInput;
    _avg?: Prisma.GiftAvgOrderByAggregateInput;
    _max?: Prisma.GiftMaxOrderByAggregateInput;
    _min?: Prisma.GiftMinOrderByAggregateInput;
    _sum?: Prisma.GiftSumOrderByAggregateInput;
};
export type GiftScalarWhereWithAggregatesInput = {
    AND?: Prisma.GiftScalarWhereWithAggregatesInput | Prisma.GiftScalarWhereWithAggregatesInput[];
    OR?: Prisma.GiftScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GiftScalarWhereWithAggregatesInput | Prisma.GiftScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Gift"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Gift"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Gift"> | string | null;
    type?: Prisma.EnumGiftTypeWithAggregatesFilter<"Gift"> | $Enums.GiftType;
    suggestedAmount?: Prisma.DecimalNullableWithAggregatesFilter<"Gift"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: Prisma.StringNullableWithAggregatesFilter<"Gift"> | string | null;
    active?: Prisma.BoolWithAggregatesFilter<"Gift"> | boolean;
    sortOrder?: Prisma.IntWithAggregatesFilter<"Gift"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Gift"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Gift"> | Date | string;
};
export type GiftCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    type?: $Enums.GiftType;
    suggestedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: string | null;
    active?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    guestChoices?: Prisma.GuestGiftChoiceCreateNestedManyWithoutGiftInput;
    companionChoices?: Prisma.CompanionGiftChoiceCreateNestedManyWithoutGiftInput;
};
export type GiftUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    type?: $Enums.GiftType;
    suggestedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: string | null;
    active?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    guestChoices?: Prisma.GuestGiftChoiceUncheckedCreateNestedManyWithoutGiftInput;
    companionChoices?: Prisma.CompanionGiftChoiceUncheckedCreateNestedManyWithoutGiftInput;
};
export type GiftUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumGiftTypeFieldUpdateOperationsInput | $Enums.GiftType;
    suggestedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guestChoices?: Prisma.GuestGiftChoiceUpdateManyWithoutGiftNestedInput;
    companionChoices?: Prisma.CompanionGiftChoiceUpdateManyWithoutGiftNestedInput;
};
export type GiftUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumGiftTypeFieldUpdateOperationsInput | $Enums.GiftType;
    suggestedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guestChoices?: Prisma.GuestGiftChoiceUncheckedUpdateManyWithoutGiftNestedInput;
    companionChoices?: Prisma.CompanionGiftChoiceUncheckedUpdateManyWithoutGiftNestedInput;
};
export type GiftCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    type?: $Enums.GiftType;
    suggestedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: string | null;
    active?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GiftUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumGiftTypeFieldUpdateOperationsInput | $Enums.GiftType;
    suggestedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GiftUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumGiftTypeFieldUpdateOperationsInput | $Enums.GiftType;
    suggestedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GiftScalarRelationFilter = {
    is?: Prisma.GiftWhereInput;
    isNot?: Prisma.GiftWhereInput;
};
export type GiftCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    suggestedAmount?: Prisma.SortOrder;
    externalUrl?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GiftAvgOrderByAggregateInput = {
    suggestedAmount?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type GiftMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    suggestedAmount?: Prisma.SortOrder;
    externalUrl?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GiftMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    suggestedAmount?: Prisma.SortOrder;
    externalUrl?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GiftSumOrderByAggregateInput = {
    suggestedAmount?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type GiftCreateNestedOneWithoutCompanionChoicesInput = {
    create?: Prisma.XOR<Prisma.GiftCreateWithoutCompanionChoicesInput, Prisma.GiftUncheckedCreateWithoutCompanionChoicesInput>;
    connectOrCreate?: Prisma.GiftCreateOrConnectWithoutCompanionChoicesInput;
    connect?: Prisma.GiftWhereUniqueInput;
};
export type GiftUpdateOneRequiredWithoutCompanionChoicesNestedInput = {
    create?: Prisma.XOR<Prisma.GiftCreateWithoutCompanionChoicesInput, Prisma.GiftUncheckedCreateWithoutCompanionChoicesInput>;
    connectOrCreate?: Prisma.GiftCreateOrConnectWithoutCompanionChoicesInput;
    upsert?: Prisma.GiftUpsertWithoutCompanionChoicesInput;
    connect?: Prisma.GiftWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GiftUpdateToOneWithWhereWithoutCompanionChoicesInput, Prisma.GiftUpdateWithoutCompanionChoicesInput>, Prisma.GiftUncheckedUpdateWithoutCompanionChoicesInput>;
};
export type EnumGiftTypeFieldUpdateOperationsInput = {
    set?: $Enums.GiftType;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type GiftCreateNestedOneWithoutGuestChoicesInput = {
    create?: Prisma.XOR<Prisma.GiftCreateWithoutGuestChoicesInput, Prisma.GiftUncheckedCreateWithoutGuestChoicesInput>;
    connectOrCreate?: Prisma.GiftCreateOrConnectWithoutGuestChoicesInput;
    connect?: Prisma.GiftWhereUniqueInput;
};
export type GiftUpdateOneRequiredWithoutGuestChoicesNestedInput = {
    create?: Prisma.XOR<Prisma.GiftCreateWithoutGuestChoicesInput, Prisma.GiftUncheckedCreateWithoutGuestChoicesInput>;
    connectOrCreate?: Prisma.GiftCreateOrConnectWithoutGuestChoicesInput;
    upsert?: Prisma.GiftUpsertWithoutGuestChoicesInput;
    connect?: Prisma.GiftWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GiftUpdateToOneWithWhereWithoutGuestChoicesInput, Prisma.GiftUpdateWithoutGuestChoicesInput>, Prisma.GiftUncheckedUpdateWithoutGuestChoicesInput>;
};
export type GiftCreateWithoutCompanionChoicesInput = {
    id?: string;
    title: string;
    description?: string | null;
    type?: $Enums.GiftType;
    suggestedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: string | null;
    active?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    guestChoices?: Prisma.GuestGiftChoiceCreateNestedManyWithoutGiftInput;
};
export type GiftUncheckedCreateWithoutCompanionChoicesInput = {
    id?: string;
    title: string;
    description?: string | null;
    type?: $Enums.GiftType;
    suggestedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: string | null;
    active?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    guestChoices?: Prisma.GuestGiftChoiceUncheckedCreateNestedManyWithoutGiftInput;
};
export type GiftCreateOrConnectWithoutCompanionChoicesInput = {
    where: Prisma.GiftWhereUniqueInput;
    create: Prisma.XOR<Prisma.GiftCreateWithoutCompanionChoicesInput, Prisma.GiftUncheckedCreateWithoutCompanionChoicesInput>;
};
export type GiftUpsertWithoutCompanionChoicesInput = {
    update: Prisma.XOR<Prisma.GiftUpdateWithoutCompanionChoicesInput, Prisma.GiftUncheckedUpdateWithoutCompanionChoicesInput>;
    create: Prisma.XOR<Prisma.GiftCreateWithoutCompanionChoicesInput, Prisma.GiftUncheckedCreateWithoutCompanionChoicesInput>;
    where?: Prisma.GiftWhereInput;
};
export type GiftUpdateToOneWithWhereWithoutCompanionChoicesInput = {
    where?: Prisma.GiftWhereInput;
    data: Prisma.XOR<Prisma.GiftUpdateWithoutCompanionChoicesInput, Prisma.GiftUncheckedUpdateWithoutCompanionChoicesInput>;
};
export type GiftUpdateWithoutCompanionChoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumGiftTypeFieldUpdateOperationsInput | $Enums.GiftType;
    suggestedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guestChoices?: Prisma.GuestGiftChoiceUpdateManyWithoutGiftNestedInput;
};
export type GiftUncheckedUpdateWithoutCompanionChoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumGiftTypeFieldUpdateOperationsInput | $Enums.GiftType;
    suggestedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guestChoices?: Prisma.GuestGiftChoiceUncheckedUpdateManyWithoutGiftNestedInput;
};
export type GiftCreateWithoutGuestChoicesInput = {
    id?: string;
    title: string;
    description?: string | null;
    type?: $Enums.GiftType;
    suggestedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: string | null;
    active?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    companionChoices?: Prisma.CompanionGiftChoiceCreateNestedManyWithoutGiftInput;
};
export type GiftUncheckedCreateWithoutGuestChoicesInput = {
    id?: string;
    title: string;
    description?: string | null;
    type?: $Enums.GiftType;
    suggestedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: string | null;
    active?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    companionChoices?: Prisma.CompanionGiftChoiceUncheckedCreateNestedManyWithoutGiftInput;
};
export type GiftCreateOrConnectWithoutGuestChoicesInput = {
    where: Prisma.GiftWhereUniqueInput;
    create: Prisma.XOR<Prisma.GiftCreateWithoutGuestChoicesInput, Prisma.GiftUncheckedCreateWithoutGuestChoicesInput>;
};
export type GiftUpsertWithoutGuestChoicesInput = {
    update: Prisma.XOR<Prisma.GiftUpdateWithoutGuestChoicesInput, Prisma.GiftUncheckedUpdateWithoutGuestChoicesInput>;
    create: Prisma.XOR<Prisma.GiftCreateWithoutGuestChoicesInput, Prisma.GiftUncheckedCreateWithoutGuestChoicesInput>;
    where?: Prisma.GiftWhereInput;
};
export type GiftUpdateToOneWithWhereWithoutGuestChoicesInput = {
    where?: Prisma.GiftWhereInput;
    data: Prisma.XOR<Prisma.GiftUpdateWithoutGuestChoicesInput, Prisma.GiftUncheckedUpdateWithoutGuestChoicesInput>;
};
export type GiftUpdateWithoutGuestChoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumGiftTypeFieldUpdateOperationsInput | $Enums.GiftType;
    suggestedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    companionChoices?: Prisma.CompanionGiftChoiceUpdateManyWithoutGiftNestedInput;
};
export type GiftUncheckedUpdateWithoutGuestChoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumGiftTypeFieldUpdateOperationsInput | $Enums.GiftType;
    suggestedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    externalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    companionChoices?: Prisma.CompanionGiftChoiceUncheckedUpdateManyWithoutGiftNestedInput;
};
export type GiftCountOutputType = {
    guestChoices: number;
    companionChoices: number;
};
export type GiftCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    guestChoices?: boolean | GiftCountOutputTypeCountGuestChoicesArgs;
    companionChoices?: boolean | GiftCountOutputTypeCountCompanionChoicesArgs;
};
export type GiftCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftCountOutputTypeSelect<ExtArgs> | null;
};
export type GiftCountOutputTypeCountGuestChoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestGiftChoiceWhereInput;
};
export type GiftCountOutputTypeCountCompanionChoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanionGiftChoiceWhereInput;
};
export type GiftSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    type?: boolean;
    suggestedAmount?: boolean;
    externalUrl?: boolean;
    active?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    guestChoices?: boolean | Prisma.Gift$guestChoicesArgs<ExtArgs>;
    companionChoices?: boolean | Prisma.Gift$companionChoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.GiftCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gift"]>;
export type GiftSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    type?: boolean;
    suggestedAmount?: boolean;
    externalUrl?: boolean;
    active?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["gift"]>;
export type GiftSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    type?: boolean;
    suggestedAmount?: boolean;
    externalUrl?: boolean;
    active?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["gift"]>;
export type GiftSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    type?: boolean;
    suggestedAmount?: boolean;
    externalUrl?: boolean;
    active?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GiftOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "type" | "suggestedAmount" | "externalUrl" | "active" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["gift"]>;
export type GiftInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    guestChoices?: boolean | Prisma.Gift$guestChoicesArgs<ExtArgs>;
    companionChoices?: boolean | Prisma.Gift$companionChoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.GiftCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GiftIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type GiftIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $GiftPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Gift";
    objects: {
        guestChoices: Prisma.$GuestGiftChoicePayload<ExtArgs>[];
        companionChoices: Prisma.$CompanionGiftChoicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        type: $Enums.GiftType;
        suggestedAmount: runtime.Decimal | null;
        externalUrl: string | null;
        active: boolean;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["gift"]>;
    composites: {};
};
export type GiftGetPayload<S extends boolean | null | undefined | GiftDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GiftPayload, S>;
export type GiftCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GiftCountAggregateInputType | true;
};
export interface GiftDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Gift'];
        meta: {
            name: 'Gift';
        };
    };
    findUnique<T extends GiftFindUniqueArgs>(args: Prisma.SelectSubset<T, GiftFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GiftClient<runtime.Types.Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GiftFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GiftClient<runtime.Types.Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GiftFindFirstArgs>(args?: Prisma.SelectSubset<T, GiftFindFirstArgs<ExtArgs>>): Prisma.Prisma__GiftClient<runtime.Types.Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GiftFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GiftFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GiftClient<runtime.Types.Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GiftFindManyArgs>(args?: Prisma.SelectSubset<T, GiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GiftCreateArgs>(args: Prisma.SelectSubset<T, GiftCreateArgs<ExtArgs>>): Prisma.Prisma__GiftClient<runtime.Types.Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GiftCreateManyArgs>(args?: Prisma.SelectSubset<T, GiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GiftCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GiftDeleteArgs>(args: Prisma.SelectSubset<T, GiftDeleteArgs<ExtArgs>>): Prisma.Prisma__GiftClient<runtime.Types.Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GiftUpdateArgs>(args: Prisma.SelectSubset<T, GiftUpdateArgs<ExtArgs>>): Prisma.Prisma__GiftClient<runtime.Types.Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GiftDeleteManyArgs>(args?: Prisma.SelectSubset<T, GiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GiftUpdateManyArgs>(args: Prisma.SelectSubset<T, GiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GiftUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GiftUpsertArgs>(args: Prisma.SelectSubset<T, GiftUpsertArgs<ExtArgs>>): Prisma.Prisma__GiftClient<runtime.Types.Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GiftCountArgs>(args?: Prisma.Subset<T, GiftCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GiftCountAggregateOutputType> : number>;
    aggregate<T extends GiftAggregateArgs>(args: Prisma.Subset<T, GiftAggregateArgs>): Prisma.PrismaPromise<GetGiftAggregateType<T>>;
    groupBy<T extends GiftGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GiftGroupByArgs['orderBy'];
    } : {
        orderBy?: GiftGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GiftFieldRefs;
}
export interface Prisma__GiftClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    guestChoices<T extends Prisma.Gift$guestChoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Gift$guestChoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    companionChoices<T extends Prisma.Gift$companionChoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Gift$companionChoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GiftFieldRefs {
    readonly id: Prisma.FieldRef<"Gift", 'String'>;
    readonly title: Prisma.FieldRef<"Gift", 'String'>;
    readonly description: Prisma.FieldRef<"Gift", 'String'>;
    readonly type: Prisma.FieldRef<"Gift", 'GiftType'>;
    readonly suggestedAmount: Prisma.FieldRef<"Gift", 'Decimal'>;
    readonly externalUrl: Prisma.FieldRef<"Gift", 'String'>;
    readonly active: Prisma.FieldRef<"Gift", 'Boolean'>;
    readonly sortOrder: Prisma.FieldRef<"Gift", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Gift", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Gift", 'DateTime'>;
}
export type GiftFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftSelect<ExtArgs> | null;
    omit?: Prisma.GiftOmit<ExtArgs> | null;
    include?: Prisma.GiftInclude<ExtArgs> | null;
    where: Prisma.GiftWhereUniqueInput;
};
export type GiftFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftSelect<ExtArgs> | null;
    omit?: Prisma.GiftOmit<ExtArgs> | null;
    include?: Prisma.GiftInclude<ExtArgs> | null;
    where: Prisma.GiftWhereUniqueInput;
};
export type GiftFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftSelect<ExtArgs> | null;
    omit?: Prisma.GiftOmit<ExtArgs> | null;
    include?: Prisma.GiftInclude<ExtArgs> | null;
    where?: Prisma.GiftWhereInput;
    orderBy?: Prisma.GiftOrderByWithRelationInput | Prisma.GiftOrderByWithRelationInput[];
    cursor?: Prisma.GiftWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GiftScalarFieldEnum | Prisma.GiftScalarFieldEnum[];
};
export type GiftFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftSelect<ExtArgs> | null;
    omit?: Prisma.GiftOmit<ExtArgs> | null;
    include?: Prisma.GiftInclude<ExtArgs> | null;
    where?: Prisma.GiftWhereInput;
    orderBy?: Prisma.GiftOrderByWithRelationInput | Prisma.GiftOrderByWithRelationInput[];
    cursor?: Prisma.GiftWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GiftScalarFieldEnum | Prisma.GiftScalarFieldEnum[];
};
export type GiftFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftSelect<ExtArgs> | null;
    omit?: Prisma.GiftOmit<ExtArgs> | null;
    include?: Prisma.GiftInclude<ExtArgs> | null;
    where?: Prisma.GiftWhereInput;
    orderBy?: Prisma.GiftOrderByWithRelationInput | Prisma.GiftOrderByWithRelationInput[];
    cursor?: Prisma.GiftWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GiftScalarFieldEnum | Prisma.GiftScalarFieldEnum[];
};
export type GiftCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftSelect<ExtArgs> | null;
    omit?: Prisma.GiftOmit<ExtArgs> | null;
    include?: Prisma.GiftInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GiftCreateInput, Prisma.GiftUncheckedCreateInput>;
};
export type GiftCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GiftCreateManyInput | Prisma.GiftCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GiftCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GiftOmit<ExtArgs> | null;
    data: Prisma.GiftCreateManyInput | Prisma.GiftCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GiftUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftSelect<ExtArgs> | null;
    omit?: Prisma.GiftOmit<ExtArgs> | null;
    include?: Prisma.GiftInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GiftUpdateInput, Prisma.GiftUncheckedUpdateInput>;
    where: Prisma.GiftWhereUniqueInput;
};
export type GiftUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GiftUpdateManyMutationInput, Prisma.GiftUncheckedUpdateManyInput>;
    where?: Prisma.GiftWhereInput;
    limit?: number;
};
export type GiftUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GiftOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GiftUpdateManyMutationInput, Prisma.GiftUncheckedUpdateManyInput>;
    where?: Prisma.GiftWhereInput;
    limit?: number;
};
export type GiftUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftSelect<ExtArgs> | null;
    omit?: Prisma.GiftOmit<ExtArgs> | null;
    include?: Prisma.GiftInclude<ExtArgs> | null;
    where: Prisma.GiftWhereUniqueInput;
    create: Prisma.XOR<Prisma.GiftCreateInput, Prisma.GiftUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GiftUpdateInput, Prisma.GiftUncheckedUpdateInput>;
};
export type GiftDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftSelect<ExtArgs> | null;
    omit?: Prisma.GiftOmit<ExtArgs> | null;
    include?: Prisma.GiftInclude<ExtArgs> | null;
    where: Prisma.GiftWhereUniqueInput;
};
export type GiftDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GiftWhereInput;
    limit?: number;
};
export type Gift$guestChoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Gift$companionChoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GiftDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftSelect<ExtArgs> | null;
    omit?: Prisma.GiftOmit<ExtArgs> | null;
    include?: Prisma.GiftInclude<ExtArgs> | null;
};
