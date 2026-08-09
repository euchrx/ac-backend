import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GuestGiftChoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$GuestGiftChoicePayload>;
export type AggregateGuestGiftChoice = {
    _count: GuestGiftChoiceCountAggregateOutputType | null;
    _min: GuestGiftChoiceMinAggregateOutputType | null;
    _max: GuestGiftChoiceMaxAggregateOutputType | null;
};
export type GuestGiftChoiceMinAggregateOutputType = {
    id: string | null;
    guestId: string | null;
    giftId: string | null;
    createdAt: Date | null;
};
export type GuestGiftChoiceMaxAggregateOutputType = {
    id: string | null;
    guestId: string | null;
    giftId: string | null;
    createdAt: Date | null;
};
export type GuestGiftChoiceCountAggregateOutputType = {
    id: number;
    guestId: number;
    giftId: number;
    createdAt: number;
    _all: number;
};
export type GuestGiftChoiceMinAggregateInputType = {
    id?: true;
    guestId?: true;
    giftId?: true;
    createdAt?: true;
};
export type GuestGiftChoiceMaxAggregateInputType = {
    id?: true;
    guestId?: true;
    giftId?: true;
    createdAt?: true;
};
export type GuestGiftChoiceCountAggregateInputType = {
    id?: true;
    guestId?: true;
    giftId?: true;
    createdAt?: true;
    _all?: true;
};
export type GuestGiftChoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestGiftChoiceWhereInput;
    orderBy?: Prisma.GuestGiftChoiceOrderByWithRelationInput | Prisma.GuestGiftChoiceOrderByWithRelationInput[];
    cursor?: Prisma.GuestGiftChoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GuestGiftChoiceCountAggregateInputType;
    _min?: GuestGiftChoiceMinAggregateInputType;
    _max?: GuestGiftChoiceMaxAggregateInputType;
};
export type GetGuestGiftChoiceAggregateType<T extends GuestGiftChoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateGuestGiftChoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGuestGiftChoice[P]> : Prisma.GetScalarType<T[P], AggregateGuestGiftChoice[P]>;
};
export type GuestGiftChoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestGiftChoiceWhereInput;
    orderBy?: Prisma.GuestGiftChoiceOrderByWithAggregationInput | Prisma.GuestGiftChoiceOrderByWithAggregationInput[];
    by: Prisma.GuestGiftChoiceScalarFieldEnum[] | Prisma.GuestGiftChoiceScalarFieldEnum;
    having?: Prisma.GuestGiftChoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GuestGiftChoiceCountAggregateInputType | true;
    _min?: GuestGiftChoiceMinAggregateInputType;
    _max?: GuestGiftChoiceMaxAggregateInputType;
};
export type GuestGiftChoiceGroupByOutputType = {
    id: string;
    guestId: string;
    giftId: string;
    createdAt: Date;
    _count: GuestGiftChoiceCountAggregateOutputType | null;
    _min: GuestGiftChoiceMinAggregateOutputType | null;
    _max: GuestGiftChoiceMaxAggregateOutputType | null;
};
export type GetGuestGiftChoiceGroupByPayload<T extends GuestGiftChoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GuestGiftChoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GuestGiftChoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GuestGiftChoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GuestGiftChoiceGroupByOutputType[P]>;
}>>;
export type GuestGiftChoiceWhereInput = {
    AND?: Prisma.GuestGiftChoiceWhereInput | Prisma.GuestGiftChoiceWhereInput[];
    OR?: Prisma.GuestGiftChoiceWhereInput[];
    NOT?: Prisma.GuestGiftChoiceWhereInput | Prisma.GuestGiftChoiceWhereInput[];
    id?: Prisma.StringFilter<"GuestGiftChoice"> | string;
    guestId?: Prisma.StringFilter<"GuestGiftChoice"> | string;
    giftId?: Prisma.StringFilter<"GuestGiftChoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"GuestGiftChoice"> | Date | string;
    guest?: Prisma.XOR<Prisma.GuestScalarRelationFilter, Prisma.GuestWhereInput>;
    gift?: Prisma.XOR<Prisma.GiftScalarRelationFilter, Prisma.GiftWhereInput>;
};
export type GuestGiftChoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    giftId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    guest?: Prisma.GuestOrderByWithRelationInput;
    gift?: Prisma.GiftOrderByWithRelationInput;
};
export type GuestGiftChoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    guestId_giftId?: Prisma.GuestGiftChoiceGuestIdGiftIdCompoundUniqueInput;
    AND?: Prisma.GuestGiftChoiceWhereInput | Prisma.GuestGiftChoiceWhereInput[];
    OR?: Prisma.GuestGiftChoiceWhereInput[];
    NOT?: Prisma.GuestGiftChoiceWhereInput | Prisma.GuestGiftChoiceWhereInput[];
    guestId?: Prisma.StringFilter<"GuestGiftChoice"> | string;
    giftId?: Prisma.StringFilter<"GuestGiftChoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"GuestGiftChoice"> | Date | string;
    guest?: Prisma.XOR<Prisma.GuestScalarRelationFilter, Prisma.GuestWhereInput>;
    gift?: Prisma.XOR<Prisma.GiftScalarRelationFilter, Prisma.GiftWhereInput>;
}, "id" | "guestId_giftId">;
export type GuestGiftChoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    giftId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.GuestGiftChoiceCountOrderByAggregateInput;
    _max?: Prisma.GuestGiftChoiceMaxOrderByAggregateInput;
    _min?: Prisma.GuestGiftChoiceMinOrderByAggregateInput;
};
export type GuestGiftChoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.GuestGiftChoiceScalarWhereWithAggregatesInput | Prisma.GuestGiftChoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.GuestGiftChoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GuestGiftChoiceScalarWhereWithAggregatesInput | Prisma.GuestGiftChoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GuestGiftChoice"> | string;
    guestId?: Prisma.StringWithAggregatesFilter<"GuestGiftChoice"> | string;
    giftId?: Prisma.StringWithAggregatesFilter<"GuestGiftChoice"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GuestGiftChoice"> | Date | string;
};
export type GuestGiftChoiceCreateInput = {
    id?: string;
    createdAt?: Date | string;
    guest: Prisma.GuestCreateNestedOneWithoutGiftChoicesInput;
    gift: Prisma.GiftCreateNestedOneWithoutGuestChoicesInput;
};
export type GuestGiftChoiceUncheckedCreateInput = {
    id?: string;
    guestId: string;
    giftId: string;
    createdAt?: Date | string;
};
export type GuestGiftChoiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guest?: Prisma.GuestUpdateOneRequiredWithoutGiftChoicesNestedInput;
    gift?: Prisma.GiftUpdateOneRequiredWithoutGuestChoicesNestedInput;
};
export type GuestGiftChoiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    giftId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestGiftChoiceCreateManyInput = {
    id?: string;
    guestId: string;
    giftId: string;
    createdAt?: Date | string;
};
export type GuestGiftChoiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestGiftChoiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    giftId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestGiftChoiceListRelationFilter = {
    every?: Prisma.GuestGiftChoiceWhereInput;
    some?: Prisma.GuestGiftChoiceWhereInput;
    none?: Prisma.GuestGiftChoiceWhereInput;
};
export type GuestGiftChoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GuestGiftChoiceGuestIdGiftIdCompoundUniqueInput = {
    guestId: string;
    giftId: string;
};
export type GuestGiftChoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    giftId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GuestGiftChoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    giftId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GuestGiftChoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    giftId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GuestGiftChoiceCreateNestedManyWithoutGuestInput = {
    create?: Prisma.XOR<Prisma.GuestGiftChoiceCreateWithoutGuestInput, Prisma.GuestGiftChoiceUncheckedCreateWithoutGuestInput> | Prisma.GuestGiftChoiceCreateWithoutGuestInput[] | Prisma.GuestGiftChoiceUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.GuestGiftChoiceCreateOrConnectWithoutGuestInput | Prisma.GuestGiftChoiceCreateOrConnectWithoutGuestInput[];
    createMany?: Prisma.GuestGiftChoiceCreateManyGuestInputEnvelope;
    connect?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
};
export type GuestGiftChoiceUncheckedCreateNestedManyWithoutGuestInput = {
    create?: Prisma.XOR<Prisma.GuestGiftChoiceCreateWithoutGuestInput, Prisma.GuestGiftChoiceUncheckedCreateWithoutGuestInput> | Prisma.GuestGiftChoiceCreateWithoutGuestInput[] | Prisma.GuestGiftChoiceUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.GuestGiftChoiceCreateOrConnectWithoutGuestInput | Prisma.GuestGiftChoiceCreateOrConnectWithoutGuestInput[];
    createMany?: Prisma.GuestGiftChoiceCreateManyGuestInputEnvelope;
    connect?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
};
export type GuestGiftChoiceUpdateManyWithoutGuestNestedInput = {
    create?: Prisma.XOR<Prisma.GuestGiftChoiceCreateWithoutGuestInput, Prisma.GuestGiftChoiceUncheckedCreateWithoutGuestInput> | Prisma.GuestGiftChoiceCreateWithoutGuestInput[] | Prisma.GuestGiftChoiceUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.GuestGiftChoiceCreateOrConnectWithoutGuestInput | Prisma.GuestGiftChoiceCreateOrConnectWithoutGuestInput[];
    upsert?: Prisma.GuestGiftChoiceUpsertWithWhereUniqueWithoutGuestInput | Prisma.GuestGiftChoiceUpsertWithWhereUniqueWithoutGuestInput[];
    createMany?: Prisma.GuestGiftChoiceCreateManyGuestInputEnvelope;
    set?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    disconnect?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    delete?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    connect?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    update?: Prisma.GuestGiftChoiceUpdateWithWhereUniqueWithoutGuestInput | Prisma.GuestGiftChoiceUpdateWithWhereUniqueWithoutGuestInput[];
    updateMany?: Prisma.GuestGiftChoiceUpdateManyWithWhereWithoutGuestInput | Prisma.GuestGiftChoiceUpdateManyWithWhereWithoutGuestInput[];
    deleteMany?: Prisma.GuestGiftChoiceScalarWhereInput | Prisma.GuestGiftChoiceScalarWhereInput[];
};
export type GuestGiftChoiceUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: Prisma.XOR<Prisma.GuestGiftChoiceCreateWithoutGuestInput, Prisma.GuestGiftChoiceUncheckedCreateWithoutGuestInput> | Prisma.GuestGiftChoiceCreateWithoutGuestInput[] | Prisma.GuestGiftChoiceUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.GuestGiftChoiceCreateOrConnectWithoutGuestInput | Prisma.GuestGiftChoiceCreateOrConnectWithoutGuestInput[];
    upsert?: Prisma.GuestGiftChoiceUpsertWithWhereUniqueWithoutGuestInput | Prisma.GuestGiftChoiceUpsertWithWhereUniqueWithoutGuestInput[];
    createMany?: Prisma.GuestGiftChoiceCreateManyGuestInputEnvelope;
    set?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    disconnect?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    delete?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    connect?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    update?: Prisma.GuestGiftChoiceUpdateWithWhereUniqueWithoutGuestInput | Prisma.GuestGiftChoiceUpdateWithWhereUniqueWithoutGuestInput[];
    updateMany?: Prisma.GuestGiftChoiceUpdateManyWithWhereWithoutGuestInput | Prisma.GuestGiftChoiceUpdateManyWithWhereWithoutGuestInput[];
    deleteMany?: Prisma.GuestGiftChoiceScalarWhereInput | Prisma.GuestGiftChoiceScalarWhereInput[];
};
export type GuestGiftChoiceCreateNestedManyWithoutGiftInput = {
    create?: Prisma.XOR<Prisma.GuestGiftChoiceCreateWithoutGiftInput, Prisma.GuestGiftChoiceUncheckedCreateWithoutGiftInput> | Prisma.GuestGiftChoiceCreateWithoutGiftInput[] | Prisma.GuestGiftChoiceUncheckedCreateWithoutGiftInput[];
    connectOrCreate?: Prisma.GuestGiftChoiceCreateOrConnectWithoutGiftInput | Prisma.GuestGiftChoiceCreateOrConnectWithoutGiftInput[];
    createMany?: Prisma.GuestGiftChoiceCreateManyGiftInputEnvelope;
    connect?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
};
export type GuestGiftChoiceUncheckedCreateNestedManyWithoutGiftInput = {
    create?: Prisma.XOR<Prisma.GuestGiftChoiceCreateWithoutGiftInput, Prisma.GuestGiftChoiceUncheckedCreateWithoutGiftInput> | Prisma.GuestGiftChoiceCreateWithoutGiftInput[] | Prisma.GuestGiftChoiceUncheckedCreateWithoutGiftInput[];
    connectOrCreate?: Prisma.GuestGiftChoiceCreateOrConnectWithoutGiftInput | Prisma.GuestGiftChoiceCreateOrConnectWithoutGiftInput[];
    createMany?: Prisma.GuestGiftChoiceCreateManyGiftInputEnvelope;
    connect?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
};
export type GuestGiftChoiceUpdateManyWithoutGiftNestedInput = {
    create?: Prisma.XOR<Prisma.GuestGiftChoiceCreateWithoutGiftInput, Prisma.GuestGiftChoiceUncheckedCreateWithoutGiftInput> | Prisma.GuestGiftChoiceCreateWithoutGiftInput[] | Prisma.GuestGiftChoiceUncheckedCreateWithoutGiftInput[];
    connectOrCreate?: Prisma.GuestGiftChoiceCreateOrConnectWithoutGiftInput | Prisma.GuestGiftChoiceCreateOrConnectWithoutGiftInput[];
    upsert?: Prisma.GuestGiftChoiceUpsertWithWhereUniqueWithoutGiftInput | Prisma.GuestGiftChoiceUpsertWithWhereUniqueWithoutGiftInput[];
    createMany?: Prisma.GuestGiftChoiceCreateManyGiftInputEnvelope;
    set?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    disconnect?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    delete?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    connect?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    update?: Prisma.GuestGiftChoiceUpdateWithWhereUniqueWithoutGiftInput | Prisma.GuestGiftChoiceUpdateWithWhereUniqueWithoutGiftInput[];
    updateMany?: Prisma.GuestGiftChoiceUpdateManyWithWhereWithoutGiftInput | Prisma.GuestGiftChoiceUpdateManyWithWhereWithoutGiftInput[];
    deleteMany?: Prisma.GuestGiftChoiceScalarWhereInput | Prisma.GuestGiftChoiceScalarWhereInput[];
};
export type GuestGiftChoiceUncheckedUpdateManyWithoutGiftNestedInput = {
    create?: Prisma.XOR<Prisma.GuestGiftChoiceCreateWithoutGiftInput, Prisma.GuestGiftChoiceUncheckedCreateWithoutGiftInput> | Prisma.GuestGiftChoiceCreateWithoutGiftInput[] | Prisma.GuestGiftChoiceUncheckedCreateWithoutGiftInput[];
    connectOrCreate?: Prisma.GuestGiftChoiceCreateOrConnectWithoutGiftInput | Prisma.GuestGiftChoiceCreateOrConnectWithoutGiftInput[];
    upsert?: Prisma.GuestGiftChoiceUpsertWithWhereUniqueWithoutGiftInput | Prisma.GuestGiftChoiceUpsertWithWhereUniqueWithoutGiftInput[];
    createMany?: Prisma.GuestGiftChoiceCreateManyGiftInputEnvelope;
    set?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    disconnect?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    delete?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    connect?: Prisma.GuestGiftChoiceWhereUniqueInput | Prisma.GuestGiftChoiceWhereUniqueInput[];
    update?: Prisma.GuestGiftChoiceUpdateWithWhereUniqueWithoutGiftInput | Prisma.GuestGiftChoiceUpdateWithWhereUniqueWithoutGiftInput[];
    updateMany?: Prisma.GuestGiftChoiceUpdateManyWithWhereWithoutGiftInput | Prisma.GuestGiftChoiceUpdateManyWithWhereWithoutGiftInput[];
    deleteMany?: Prisma.GuestGiftChoiceScalarWhereInput | Prisma.GuestGiftChoiceScalarWhereInput[];
};
export type GuestGiftChoiceCreateWithoutGuestInput = {
    id?: string;
    createdAt?: Date | string;
    gift: Prisma.GiftCreateNestedOneWithoutGuestChoicesInput;
};
export type GuestGiftChoiceUncheckedCreateWithoutGuestInput = {
    id?: string;
    giftId: string;
    createdAt?: Date | string;
};
export type GuestGiftChoiceCreateOrConnectWithoutGuestInput = {
    where: Prisma.GuestGiftChoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestGiftChoiceCreateWithoutGuestInput, Prisma.GuestGiftChoiceUncheckedCreateWithoutGuestInput>;
};
export type GuestGiftChoiceCreateManyGuestInputEnvelope = {
    data: Prisma.GuestGiftChoiceCreateManyGuestInput | Prisma.GuestGiftChoiceCreateManyGuestInput[];
    skipDuplicates?: boolean;
};
export type GuestGiftChoiceUpsertWithWhereUniqueWithoutGuestInput = {
    where: Prisma.GuestGiftChoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.GuestGiftChoiceUpdateWithoutGuestInput, Prisma.GuestGiftChoiceUncheckedUpdateWithoutGuestInput>;
    create: Prisma.XOR<Prisma.GuestGiftChoiceCreateWithoutGuestInput, Prisma.GuestGiftChoiceUncheckedCreateWithoutGuestInput>;
};
export type GuestGiftChoiceUpdateWithWhereUniqueWithoutGuestInput = {
    where: Prisma.GuestGiftChoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.GuestGiftChoiceUpdateWithoutGuestInput, Prisma.GuestGiftChoiceUncheckedUpdateWithoutGuestInput>;
};
export type GuestGiftChoiceUpdateManyWithWhereWithoutGuestInput = {
    where: Prisma.GuestGiftChoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.GuestGiftChoiceUpdateManyMutationInput, Prisma.GuestGiftChoiceUncheckedUpdateManyWithoutGuestInput>;
};
export type GuestGiftChoiceScalarWhereInput = {
    AND?: Prisma.GuestGiftChoiceScalarWhereInput | Prisma.GuestGiftChoiceScalarWhereInput[];
    OR?: Prisma.GuestGiftChoiceScalarWhereInput[];
    NOT?: Prisma.GuestGiftChoiceScalarWhereInput | Prisma.GuestGiftChoiceScalarWhereInput[];
    id?: Prisma.StringFilter<"GuestGiftChoice"> | string;
    guestId?: Prisma.StringFilter<"GuestGiftChoice"> | string;
    giftId?: Prisma.StringFilter<"GuestGiftChoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"GuestGiftChoice"> | Date | string;
};
export type GuestGiftChoiceCreateWithoutGiftInput = {
    id?: string;
    createdAt?: Date | string;
    guest: Prisma.GuestCreateNestedOneWithoutGiftChoicesInput;
};
export type GuestGiftChoiceUncheckedCreateWithoutGiftInput = {
    id?: string;
    guestId: string;
    createdAt?: Date | string;
};
export type GuestGiftChoiceCreateOrConnectWithoutGiftInput = {
    where: Prisma.GuestGiftChoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestGiftChoiceCreateWithoutGiftInput, Prisma.GuestGiftChoiceUncheckedCreateWithoutGiftInput>;
};
export type GuestGiftChoiceCreateManyGiftInputEnvelope = {
    data: Prisma.GuestGiftChoiceCreateManyGiftInput | Prisma.GuestGiftChoiceCreateManyGiftInput[];
    skipDuplicates?: boolean;
};
export type GuestGiftChoiceUpsertWithWhereUniqueWithoutGiftInput = {
    where: Prisma.GuestGiftChoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.GuestGiftChoiceUpdateWithoutGiftInput, Prisma.GuestGiftChoiceUncheckedUpdateWithoutGiftInput>;
    create: Prisma.XOR<Prisma.GuestGiftChoiceCreateWithoutGiftInput, Prisma.GuestGiftChoiceUncheckedCreateWithoutGiftInput>;
};
export type GuestGiftChoiceUpdateWithWhereUniqueWithoutGiftInput = {
    where: Prisma.GuestGiftChoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.GuestGiftChoiceUpdateWithoutGiftInput, Prisma.GuestGiftChoiceUncheckedUpdateWithoutGiftInput>;
};
export type GuestGiftChoiceUpdateManyWithWhereWithoutGiftInput = {
    where: Prisma.GuestGiftChoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.GuestGiftChoiceUpdateManyMutationInput, Prisma.GuestGiftChoiceUncheckedUpdateManyWithoutGiftInput>;
};
export type GuestGiftChoiceCreateManyGuestInput = {
    id?: string;
    giftId: string;
    createdAt?: Date | string;
};
export type GuestGiftChoiceUpdateWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gift?: Prisma.GiftUpdateOneRequiredWithoutGuestChoicesNestedInput;
};
export type GuestGiftChoiceUncheckedUpdateWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    giftId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestGiftChoiceUncheckedUpdateManyWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    giftId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestGiftChoiceCreateManyGiftInput = {
    id?: string;
    guestId: string;
    createdAt?: Date | string;
};
export type GuestGiftChoiceUpdateWithoutGiftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guest?: Prisma.GuestUpdateOneRequiredWithoutGiftChoicesNestedInput;
};
export type GuestGiftChoiceUncheckedUpdateWithoutGiftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestGiftChoiceUncheckedUpdateManyWithoutGiftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestGiftChoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guestId?: boolean;
    giftId?: boolean;
    createdAt?: boolean;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    gift?: boolean | Prisma.GiftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["guestGiftChoice"]>;
export type GuestGiftChoiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guestId?: boolean;
    giftId?: boolean;
    createdAt?: boolean;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    gift?: boolean | Prisma.GiftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["guestGiftChoice"]>;
export type GuestGiftChoiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guestId?: boolean;
    giftId?: boolean;
    createdAt?: boolean;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    gift?: boolean | Prisma.GiftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["guestGiftChoice"]>;
export type GuestGiftChoiceSelectScalar = {
    id?: boolean;
    guestId?: boolean;
    giftId?: boolean;
    createdAt?: boolean;
};
export type GuestGiftChoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guestId" | "giftId" | "createdAt", ExtArgs["result"]["guestGiftChoice"]>;
export type GuestGiftChoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    gift?: boolean | Prisma.GiftDefaultArgs<ExtArgs>;
};
export type GuestGiftChoiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    gift?: boolean | Prisma.GiftDefaultArgs<ExtArgs>;
};
export type GuestGiftChoiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    gift?: boolean | Prisma.GiftDefaultArgs<ExtArgs>;
};
export type $GuestGiftChoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GuestGiftChoice";
    objects: {
        guest: Prisma.$GuestPayload<ExtArgs>;
        gift: Prisma.$GiftPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guestId: string;
        giftId: string;
        createdAt: Date;
    }, ExtArgs["result"]["guestGiftChoice"]>;
    composites: {};
};
export type GuestGiftChoiceGetPayload<S extends boolean | null | undefined | GuestGiftChoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload, S>;
export type GuestGiftChoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GuestGiftChoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GuestGiftChoiceCountAggregateInputType | true;
};
export interface GuestGiftChoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GuestGiftChoice'];
        meta: {
            name: 'GuestGiftChoice';
        };
    };
    findUnique<T extends GuestGiftChoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, GuestGiftChoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GuestGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GuestGiftChoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GuestGiftChoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GuestGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GuestGiftChoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, GuestGiftChoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__GuestGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GuestGiftChoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GuestGiftChoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GuestGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GuestGiftChoiceFindManyArgs>(args?: Prisma.SelectSubset<T, GuestGiftChoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GuestGiftChoiceCreateArgs>(args: Prisma.SelectSubset<T, GuestGiftChoiceCreateArgs<ExtArgs>>): Prisma.Prisma__GuestGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GuestGiftChoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, GuestGiftChoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GuestGiftChoiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GuestGiftChoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GuestGiftChoiceDeleteArgs>(args: Prisma.SelectSubset<T, GuestGiftChoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__GuestGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GuestGiftChoiceUpdateArgs>(args: Prisma.SelectSubset<T, GuestGiftChoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__GuestGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GuestGiftChoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, GuestGiftChoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GuestGiftChoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, GuestGiftChoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GuestGiftChoiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GuestGiftChoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GuestGiftChoiceUpsertArgs>(args: Prisma.SelectSubset<T, GuestGiftChoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__GuestGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$GuestGiftChoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GuestGiftChoiceCountArgs>(args?: Prisma.Subset<T, GuestGiftChoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GuestGiftChoiceCountAggregateOutputType> : number>;
    aggregate<T extends GuestGiftChoiceAggregateArgs>(args: Prisma.Subset<T, GuestGiftChoiceAggregateArgs>): Prisma.PrismaPromise<GetGuestGiftChoiceAggregateType<T>>;
    groupBy<T extends GuestGiftChoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GuestGiftChoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: GuestGiftChoiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GuestGiftChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGiftChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GuestGiftChoiceFieldRefs;
}
export interface Prisma__GuestGiftChoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    guest<T extends Prisma.GuestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GuestDefaultArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    gift<T extends Prisma.GiftDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GiftDefaultArgs<ExtArgs>>): Prisma.Prisma__GiftClient<runtime.Types.Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GuestGiftChoiceFieldRefs {
    readonly id: Prisma.FieldRef<"GuestGiftChoice", 'String'>;
    readonly guestId: Prisma.FieldRef<"GuestGiftChoice", 'String'>;
    readonly giftId: Prisma.FieldRef<"GuestGiftChoice", 'String'>;
    readonly createdAt: Prisma.FieldRef<"GuestGiftChoice", 'DateTime'>;
}
export type GuestGiftChoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.GuestGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.GuestGiftChoiceInclude<ExtArgs> | null;
    where: Prisma.GuestGiftChoiceWhereUniqueInput;
};
export type GuestGiftChoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.GuestGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.GuestGiftChoiceInclude<ExtArgs> | null;
    where: Prisma.GuestGiftChoiceWhereUniqueInput;
};
export type GuestGiftChoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GuestGiftChoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GuestGiftChoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GuestGiftChoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.GuestGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.GuestGiftChoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestGiftChoiceCreateInput, Prisma.GuestGiftChoiceUncheckedCreateInput>;
};
export type GuestGiftChoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GuestGiftChoiceCreateManyInput | Prisma.GuestGiftChoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GuestGiftChoiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGiftChoiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GuestGiftChoiceOmit<ExtArgs> | null;
    data: Prisma.GuestGiftChoiceCreateManyInput | Prisma.GuestGiftChoiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GuestGiftChoiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GuestGiftChoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.GuestGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.GuestGiftChoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestGiftChoiceUpdateInput, Prisma.GuestGiftChoiceUncheckedUpdateInput>;
    where: Prisma.GuestGiftChoiceWhereUniqueInput;
};
export type GuestGiftChoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GuestGiftChoiceUpdateManyMutationInput, Prisma.GuestGiftChoiceUncheckedUpdateManyInput>;
    where?: Prisma.GuestGiftChoiceWhereInput;
    limit?: number;
};
export type GuestGiftChoiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGiftChoiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GuestGiftChoiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestGiftChoiceUpdateManyMutationInput, Prisma.GuestGiftChoiceUncheckedUpdateManyInput>;
    where?: Prisma.GuestGiftChoiceWhereInput;
    limit?: number;
    include?: Prisma.GuestGiftChoiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GuestGiftChoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.GuestGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.GuestGiftChoiceInclude<ExtArgs> | null;
    where: Prisma.GuestGiftChoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestGiftChoiceCreateInput, Prisma.GuestGiftChoiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GuestGiftChoiceUpdateInput, Prisma.GuestGiftChoiceUncheckedUpdateInput>;
};
export type GuestGiftChoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.GuestGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.GuestGiftChoiceInclude<ExtArgs> | null;
    where: Prisma.GuestGiftChoiceWhereUniqueInput;
};
export type GuestGiftChoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestGiftChoiceWhereInput;
    limit?: number;
};
export type GuestGiftChoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.GuestGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.GuestGiftChoiceInclude<ExtArgs> | null;
};
