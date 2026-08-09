import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CompanionGiftChoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$CompanionGiftChoicePayload>;
export type AggregateCompanionGiftChoice = {
    _count: CompanionGiftChoiceCountAggregateOutputType | null;
    _min: CompanionGiftChoiceMinAggregateOutputType | null;
    _max: CompanionGiftChoiceMaxAggregateOutputType | null;
};
export type CompanionGiftChoiceMinAggregateOutputType = {
    id: string | null;
    companionId: string | null;
    giftId: string | null;
    createdAt: Date | null;
};
export type CompanionGiftChoiceMaxAggregateOutputType = {
    id: string | null;
    companionId: string | null;
    giftId: string | null;
    createdAt: Date | null;
};
export type CompanionGiftChoiceCountAggregateOutputType = {
    id: number;
    companionId: number;
    giftId: number;
    createdAt: number;
    _all: number;
};
export type CompanionGiftChoiceMinAggregateInputType = {
    id?: true;
    companionId?: true;
    giftId?: true;
    createdAt?: true;
};
export type CompanionGiftChoiceMaxAggregateInputType = {
    id?: true;
    companionId?: true;
    giftId?: true;
    createdAt?: true;
};
export type CompanionGiftChoiceCountAggregateInputType = {
    id?: true;
    companionId?: true;
    giftId?: true;
    createdAt?: true;
    _all?: true;
};
export type CompanionGiftChoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanionGiftChoiceWhereInput;
    orderBy?: Prisma.CompanionGiftChoiceOrderByWithRelationInput | Prisma.CompanionGiftChoiceOrderByWithRelationInput[];
    cursor?: Prisma.CompanionGiftChoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CompanionGiftChoiceCountAggregateInputType;
    _min?: CompanionGiftChoiceMinAggregateInputType;
    _max?: CompanionGiftChoiceMaxAggregateInputType;
};
export type GetCompanionGiftChoiceAggregateType<T extends CompanionGiftChoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateCompanionGiftChoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCompanionGiftChoice[P]> : Prisma.GetScalarType<T[P], AggregateCompanionGiftChoice[P]>;
};
export type CompanionGiftChoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanionGiftChoiceWhereInput;
    orderBy?: Prisma.CompanionGiftChoiceOrderByWithAggregationInput | Prisma.CompanionGiftChoiceOrderByWithAggregationInput[];
    by: Prisma.CompanionGiftChoiceScalarFieldEnum[] | Prisma.CompanionGiftChoiceScalarFieldEnum;
    having?: Prisma.CompanionGiftChoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanionGiftChoiceCountAggregateInputType | true;
    _min?: CompanionGiftChoiceMinAggregateInputType;
    _max?: CompanionGiftChoiceMaxAggregateInputType;
};
export type CompanionGiftChoiceGroupByOutputType = {
    id: string;
    companionId: string;
    giftId: string;
    createdAt: Date;
    _count: CompanionGiftChoiceCountAggregateOutputType | null;
    _min: CompanionGiftChoiceMinAggregateOutputType | null;
    _max: CompanionGiftChoiceMaxAggregateOutputType | null;
};
export type GetCompanionGiftChoiceGroupByPayload<T extends CompanionGiftChoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CompanionGiftChoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CompanionGiftChoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CompanionGiftChoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CompanionGiftChoiceGroupByOutputType[P]>;
}>>;
export type CompanionGiftChoiceWhereInput = {
    AND?: Prisma.CompanionGiftChoiceWhereInput | Prisma.CompanionGiftChoiceWhereInput[];
    OR?: Prisma.CompanionGiftChoiceWhereInput[];
    NOT?: Prisma.CompanionGiftChoiceWhereInput | Prisma.CompanionGiftChoiceWhereInput[];
    id?: Prisma.StringFilter<"CompanionGiftChoice"> | string;
    companionId?: Prisma.StringFilter<"CompanionGiftChoice"> | string;
    giftId?: Prisma.StringFilter<"CompanionGiftChoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"CompanionGiftChoice"> | Date | string;
    companion?: Prisma.XOR<Prisma.CompanionScalarRelationFilter, Prisma.CompanionWhereInput>;
    gift?: Prisma.XOR<Prisma.GiftScalarRelationFilter, Prisma.GiftWhereInput>;
};
export type CompanionGiftChoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    companionId?: Prisma.SortOrder;
    giftId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    companion?: Prisma.CompanionOrderByWithRelationInput;
    gift?: Prisma.GiftOrderByWithRelationInput;
};
export type CompanionGiftChoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    companionId_giftId?: Prisma.CompanionGiftChoiceCompanionIdGiftIdCompoundUniqueInput;
    AND?: Prisma.CompanionGiftChoiceWhereInput | Prisma.CompanionGiftChoiceWhereInput[];
    OR?: Prisma.CompanionGiftChoiceWhereInput[];
    NOT?: Prisma.CompanionGiftChoiceWhereInput | Prisma.CompanionGiftChoiceWhereInput[];
    companionId?: Prisma.StringFilter<"CompanionGiftChoice"> | string;
    giftId?: Prisma.StringFilter<"CompanionGiftChoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"CompanionGiftChoice"> | Date | string;
    companion?: Prisma.XOR<Prisma.CompanionScalarRelationFilter, Prisma.CompanionWhereInput>;
    gift?: Prisma.XOR<Prisma.GiftScalarRelationFilter, Prisma.GiftWhereInput>;
}, "id" | "companionId_giftId">;
export type CompanionGiftChoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    companionId?: Prisma.SortOrder;
    giftId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CompanionGiftChoiceCountOrderByAggregateInput;
    _max?: Prisma.CompanionGiftChoiceMaxOrderByAggregateInput;
    _min?: Prisma.CompanionGiftChoiceMinOrderByAggregateInput;
};
export type CompanionGiftChoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.CompanionGiftChoiceScalarWhereWithAggregatesInput | Prisma.CompanionGiftChoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.CompanionGiftChoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CompanionGiftChoiceScalarWhereWithAggregatesInput | Prisma.CompanionGiftChoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CompanionGiftChoice"> | string;
    companionId?: Prisma.StringWithAggregatesFilter<"CompanionGiftChoice"> | string;
    giftId?: Prisma.StringWithAggregatesFilter<"CompanionGiftChoice"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CompanionGiftChoice"> | Date | string;
};
export type CompanionGiftChoiceCreateInput = {
    id?: string;
    createdAt?: Date | string;
    companion: Prisma.CompanionCreateNestedOneWithoutGiftChoicesInput;
    gift: Prisma.GiftCreateNestedOneWithoutCompanionChoicesInput;
};
export type CompanionGiftChoiceUncheckedCreateInput = {
    id?: string;
    companionId: string;
    giftId: string;
    createdAt?: Date | string;
};
export type CompanionGiftChoiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    companion?: Prisma.CompanionUpdateOneRequiredWithoutGiftChoicesNestedInput;
    gift?: Prisma.GiftUpdateOneRequiredWithoutCompanionChoicesNestedInput;
};
export type CompanionGiftChoiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companionId?: Prisma.StringFieldUpdateOperationsInput | string;
    giftId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanionGiftChoiceCreateManyInput = {
    id?: string;
    companionId: string;
    giftId: string;
    createdAt?: Date | string;
};
export type CompanionGiftChoiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanionGiftChoiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companionId?: Prisma.StringFieldUpdateOperationsInput | string;
    giftId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanionGiftChoiceListRelationFilter = {
    every?: Prisma.CompanionGiftChoiceWhereInput;
    some?: Prisma.CompanionGiftChoiceWhereInput;
    none?: Prisma.CompanionGiftChoiceWhereInput;
};
export type CompanionGiftChoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CompanionGiftChoiceCompanionIdGiftIdCompoundUniqueInput = {
    companionId: string;
    giftId: string;
};
export type CompanionGiftChoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companionId?: Prisma.SortOrder;
    giftId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CompanionGiftChoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companionId?: Prisma.SortOrder;
    giftId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CompanionGiftChoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companionId?: Prisma.SortOrder;
    giftId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CompanionGiftChoiceCreateNestedManyWithoutCompanionInput = {
    create?: Prisma.XOR<Prisma.CompanionGiftChoiceCreateWithoutCompanionInput, Prisma.CompanionGiftChoiceUncheckedCreateWithoutCompanionInput> | Prisma.CompanionGiftChoiceCreateWithoutCompanionInput[] | Prisma.CompanionGiftChoiceUncheckedCreateWithoutCompanionInput[];
    connectOrCreate?: Prisma.CompanionGiftChoiceCreateOrConnectWithoutCompanionInput | Prisma.CompanionGiftChoiceCreateOrConnectWithoutCompanionInput[];
    createMany?: Prisma.CompanionGiftChoiceCreateManyCompanionInputEnvelope;
    connect?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
};
export type CompanionGiftChoiceUncheckedCreateNestedManyWithoutCompanionInput = {
    create?: Prisma.XOR<Prisma.CompanionGiftChoiceCreateWithoutCompanionInput, Prisma.CompanionGiftChoiceUncheckedCreateWithoutCompanionInput> | Prisma.CompanionGiftChoiceCreateWithoutCompanionInput[] | Prisma.CompanionGiftChoiceUncheckedCreateWithoutCompanionInput[];
    connectOrCreate?: Prisma.CompanionGiftChoiceCreateOrConnectWithoutCompanionInput | Prisma.CompanionGiftChoiceCreateOrConnectWithoutCompanionInput[];
    createMany?: Prisma.CompanionGiftChoiceCreateManyCompanionInputEnvelope;
    connect?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
};
export type CompanionGiftChoiceUpdateManyWithoutCompanionNestedInput = {
    create?: Prisma.XOR<Prisma.CompanionGiftChoiceCreateWithoutCompanionInput, Prisma.CompanionGiftChoiceUncheckedCreateWithoutCompanionInput> | Prisma.CompanionGiftChoiceCreateWithoutCompanionInput[] | Prisma.CompanionGiftChoiceUncheckedCreateWithoutCompanionInput[];
    connectOrCreate?: Prisma.CompanionGiftChoiceCreateOrConnectWithoutCompanionInput | Prisma.CompanionGiftChoiceCreateOrConnectWithoutCompanionInput[];
    upsert?: Prisma.CompanionGiftChoiceUpsertWithWhereUniqueWithoutCompanionInput | Prisma.CompanionGiftChoiceUpsertWithWhereUniqueWithoutCompanionInput[];
    createMany?: Prisma.CompanionGiftChoiceCreateManyCompanionInputEnvelope;
    set?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    disconnect?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    delete?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    connect?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    update?: Prisma.CompanionGiftChoiceUpdateWithWhereUniqueWithoutCompanionInput | Prisma.CompanionGiftChoiceUpdateWithWhereUniqueWithoutCompanionInput[];
    updateMany?: Prisma.CompanionGiftChoiceUpdateManyWithWhereWithoutCompanionInput | Prisma.CompanionGiftChoiceUpdateManyWithWhereWithoutCompanionInput[];
    deleteMany?: Prisma.CompanionGiftChoiceScalarWhereInput | Prisma.CompanionGiftChoiceScalarWhereInput[];
};
export type CompanionGiftChoiceUncheckedUpdateManyWithoutCompanionNestedInput = {
    create?: Prisma.XOR<Prisma.CompanionGiftChoiceCreateWithoutCompanionInput, Prisma.CompanionGiftChoiceUncheckedCreateWithoutCompanionInput> | Prisma.CompanionGiftChoiceCreateWithoutCompanionInput[] | Prisma.CompanionGiftChoiceUncheckedCreateWithoutCompanionInput[];
    connectOrCreate?: Prisma.CompanionGiftChoiceCreateOrConnectWithoutCompanionInput | Prisma.CompanionGiftChoiceCreateOrConnectWithoutCompanionInput[];
    upsert?: Prisma.CompanionGiftChoiceUpsertWithWhereUniqueWithoutCompanionInput | Prisma.CompanionGiftChoiceUpsertWithWhereUniqueWithoutCompanionInput[];
    createMany?: Prisma.CompanionGiftChoiceCreateManyCompanionInputEnvelope;
    set?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    disconnect?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    delete?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    connect?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    update?: Prisma.CompanionGiftChoiceUpdateWithWhereUniqueWithoutCompanionInput | Prisma.CompanionGiftChoiceUpdateWithWhereUniqueWithoutCompanionInput[];
    updateMany?: Prisma.CompanionGiftChoiceUpdateManyWithWhereWithoutCompanionInput | Prisma.CompanionGiftChoiceUpdateManyWithWhereWithoutCompanionInput[];
    deleteMany?: Prisma.CompanionGiftChoiceScalarWhereInput | Prisma.CompanionGiftChoiceScalarWhereInput[];
};
export type CompanionGiftChoiceCreateNestedManyWithoutGiftInput = {
    create?: Prisma.XOR<Prisma.CompanionGiftChoiceCreateWithoutGiftInput, Prisma.CompanionGiftChoiceUncheckedCreateWithoutGiftInput> | Prisma.CompanionGiftChoiceCreateWithoutGiftInput[] | Prisma.CompanionGiftChoiceUncheckedCreateWithoutGiftInput[];
    connectOrCreate?: Prisma.CompanionGiftChoiceCreateOrConnectWithoutGiftInput | Prisma.CompanionGiftChoiceCreateOrConnectWithoutGiftInput[];
    createMany?: Prisma.CompanionGiftChoiceCreateManyGiftInputEnvelope;
    connect?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
};
export type CompanionGiftChoiceUncheckedCreateNestedManyWithoutGiftInput = {
    create?: Prisma.XOR<Prisma.CompanionGiftChoiceCreateWithoutGiftInput, Prisma.CompanionGiftChoiceUncheckedCreateWithoutGiftInput> | Prisma.CompanionGiftChoiceCreateWithoutGiftInput[] | Prisma.CompanionGiftChoiceUncheckedCreateWithoutGiftInput[];
    connectOrCreate?: Prisma.CompanionGiftChoiceCreateOrConnectWithoutGiftInput | Prisma.CompanionGiftChoiceCreateOrConnectWithoutGiftInput[];
    createMany?: Prisma.CompanionGiftChoiceCreateManyGiftInputEnvelope;
    connect?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
};
export type CompanionGiftChoiceUpdateManyWithoutGiftNestedInput = {
    create?: Prisma.XOR<Prisma.CompanionGiftChoiceCreateWithoutGiftInput, Prisma.CompanionGiftChoiceUncheckedCreateWithoutGiftInput> | Prisma.CompanionGiftChoiceCreateWithoutGiftInput[] | Prisma.CompanionGiftChoiceUncheckedCreateWithoutGiftInput[];
    connectOrCreate?: Prisma.CompanionGiftChoiceCreateOrConnectWithoutGiftInput | Prisma.CompanionGiftChoiceCreateOrConnectWithoutGiftInput[];
    upsert?: Prisma.CompanionGiftChoiceUpsertWithWhereUniqueWithoutGiftInput | Prisma.CompanionGiftChoiceUpsertWithWhereUniqueWithoutGiftInput[];
    createMany?: Prisma.CompanionGiftChoiceCreateManyGiftInputEnvelope;
    set?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    disconnect?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    delete?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    connect?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    update?: Prisma.CompanionGiftChoiceUpdateWithWhereUniqueWithoutGiftInput | Prisma.CompanionGiftChoiceUpdateWithWhereUniqueWithoutGiftInput[];
    updateMany?: Prisma.CompanionGiftChoiceUpdateManyWithWhereWithoutGiftInput | Prisma.CompanionGiftChoiceUpdateManyWithWhereWithoutGiftInput[];
    deleteMany?: Prisma.CompanionGiftChoiceScalarWhereInput | Prisma.CompanionGiftChoiceScalarWhereInput[];
};
export type CompanionGiftChoiceUncheckedUpdateManyWithoutGiftNestedInput = {
    create?: Prisma.XOR<Prisma.CompanionGiftChoiceCreateWithoutGiftInput, Prisma.CompanionGiftChoiceUncheckedCreateWithoutGiftInput> | Prisma.CompanionGiftChoiceCreateWithoutGiftInput[] | Prisma.CompanionGiftChoiceUncheckedCreateWithoutGiftInput[];
    connectOrCreate?: Prisma.CompanionGiftChoiceCreateOrConnectWithoutGiftInput | Prisma.CompanionGiftChoiceCreateOrConnectWithoutGiftInput[];
    upsert?: Prisma.CompanionGiftChoiceUpsertWithWhereUniqueWithoutGiftInput | Prisma.CompanionGiftChoiceUpsertWithWhereUniqueWithoutGiftInput[];
    createMany?: Prisma.CompanionGiftChoiceCreateManyGiftInputEnvelope;
    set?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    disconnect?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    delete?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    connect?: Prisma.CompanionGiftChoiceWhereUniqueInput | Prisma.CompanionGiftChoiceWhereUniqueInput[];
    update?: Prisma.CompanionGiftChoiceUpdateWithWhereUniqueWithoutGiftInput | Prisma.CompanionGiftChoiceUpdateWithWhereUniqueWithoutGiftInput[];
    updateMany?: Prisma.CompanionGiftChoiceUpdateManyWithWhereWithoutGiftInput | Prisma.CompanionGiftChoiceUpdateManyWithWhereWithoutGiftInput[];
    deleteMany?: Prisma.CompanionGiftChoiceScalarWhereInput | Prisma.CompanionGiftChoiceScalarWhereInput[];
};
export type CompanionGiftChoiceCreateWithoutCompanionInput = {
    id?: string;
    createdAt?: Date | string;
    gift: Prisma.GiftCreateNestedOneWithoutCompanionChoicesInput;
};
export type CompanionGiftChoiceUncheckedCreateWithoutCompanionInput = {
    id?: string;
    giftId: string;
    createdAt?: Date | string;
};
export type CompanionGiftChoiceCreateOrConnectWithoutCompanionInput = {
    where: Prisma.CompanionGiftChoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanionGiftChoiceCreateWithoutCompanionInput, Prisma.CompanionGiftChoiceUncheckedCreateWithoutCompanionInput>;
};
export type CompanionGiftChoiceCreateManyCompanionInputEnvelope = {
    data: Prisma.CompanionGiftChoiceCreateManyCompanionInput | Prisma.CompanionGiftChoiceCreateManyCompanionInput[];
    skipDuplicates?: boolean;
};
export type CompanionGiftChoiceUpsertWithWhereUniqueWithoutCompanionInput = {
    where: Prisma.CompanionGiftChoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.CompanionGiftChoiceUpdateWithoutCompanionInput, Prisma.CompanionGiftChoiceUncheckedUpdateWithoutCompanionInput>;
    create: Prisma.XOR<Prisma.CompanionGiftChoiceCreateWithoutCompanionInput, Prisma.CompanionGiftChoiceUncheckedCreateWithoutCompanionInput>;
};
export type CompanionGiftChoiceUpdateWithWhereUniqueWithoutCompanionInput = {
    where: Prisma.CompanionGiftChoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.CompanionGiftChoiceUpdateWithoutCompanionInput, Prisma.CompanionGiftChoiceUncheckedUpdateWithoutCompanionInput>;
};
export type CompanionGiftChoiceUpdateManyWithWhereWithoutCompanionInput = {
    where: Prisma.CompanionGiftChoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.CompanionGiftChoiceUpdateManyMutationInput, Prisma.CompanionGiftChoiceUncheckedUpdateManyWithoutCompanionInput>;
};
export type CompanionGiftChoiceScalarWhereInput = {
    AND?: Prisma.CompanionGiftChoiceScalarWhereInput | Prisma.CompanionGiftChoiceScalarWhereInput[];
    OR?: Prisma.CompanionGiftChoiceScalarWhereInput[];
    NOT?: Prisma.CompanionGiftChoiceScalarWhereInput | Prisma.CompanionGiftChoiceScalarWhereInput[];
    id?: Prisma.StringFilter<"CompanionGiftChoice"> | string;
    companionId?: Prisma.StringFilter<"CompanionGiftChoice"> | string;
    giftId?: Prisma.StringFilter<"CompanionGiftChoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"CompanionGiftChoice"> | Date | string;
};
export type CompanionGiftChoiceCreateWithoutGiftInput = {
    id?: string;
    createdAt?: Date | string;
    companion: Prisma.CompanionCreateNestedOneWithoutGiftChoicesInput;
};
export type CompanionGiftChoiceUncheckedCreateWithoutGiftInput = {
    id?: string;
    companionId: string;
    createdAt?: Date | string;
};
export type CompanionGiftChoiceCreateOrConnectWithoutGiftInput = {
    where: Prisma.CompanionGiftChoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanionGiftChoiceCreateWithoutGiftInput, Prisma.CompanionGiftChoiceUncheckedCreateWithoutGiftInput>;
};
export type CompanionGiftChoiceCreateManyGiftInputEnvelope = {
    data: Prisma.CompanionGiftChoiceCreateManyGiftInput | Prisma.CompanionGiftChoiceCreateManyGiftInput[];
    skipDuplicates?: boolean;
};
export type CompanionGiftChoiceUpsertWithWhereUniqueWithoutGiftInput = {
    where: Prisma.CompanionGiftChoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.CompanionGiftChoiceUpdateWithoutGiftInput, Prisma.CompanionGiftChoiceUncheckedUpdateWithoutGiftInput>;
    create: Prisma.XOR<Prisma.CompanionGiftChoiceCreateWithoutGiftInput, Prisma.CompanionGiftChoiceUncheckedCreateWithoutGiftInput>;
};
export type CompanionGiftChoiceUpdateWithWhereUniqueWithoutGiftInput = {
    where: Prisma.CompanionGiftChoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.CompanionGiftChoiceUpdateWithoutGiftInput, Prisma.CompanionGiftChoiceUncheckedUpdateWithoutGiftInput>;
};
export type CompanionGiftChoiceUpdateManyWithWhereWithoutGiftInput = {
    where: Prisma.CompanionGiftChoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.CompanionGiftChoiceUpdateManyMutationInput, Prisma.CompanionGiftChoiceUncheckedUpdateManyWithoutGiftInput>;
};
export type CompanionGiftChoiceCreateManyCompanionInput = {
    id?: string;
    giftId: string;
    createdAt?: Date | string;
};
export type CompanionGiftChoiceUpdateWithoutCompanionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gift?: Prisma.GiftUpdateOneRequiredWithoutCompanionChoicesNestedInput;
};
export type CompanionGiftChoiceUncheckedUpdateWithoutCompanionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    giftId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanionGiftChoiceUncheckedUpdateManyWithoutCompanionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    giftId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanionGiftChoiceCreateManyGiftInput = {
    id?: string;
    companionId: string;
    createdAt?: Date | string;
};
export type CompanionGiftChoiceUpdateWithoutGiftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    companion?: Prisma.CompanionUpdateOneRequiredWithoutGiftChoicesNestedInput;
};
export type CompanionGiftChoiceUncheckedUpdateWithoutGiftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanionGiftChoiceUncheckedUpdateManyWithoutGiftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanionGiftChoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companionId?: boolean;
    giftId?: boolean;
    createdAt?: boolean;
    companion?: boolean | Prisma.CompanionDefaultArgs<ExtArgs>;
    gift?: boolean | Prisma.GiftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["companionGiftChoice"]>;
export type CompanionGiftChoiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companionId?: boolean;
    giftId?: boolean;
    createdAt?: boolean;
    companion?: boolean | Prisma.CompanionDefaultArgs<ExtArgs>;
    gift?: boolean | Prisma.GiftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["companionGiftChoice"]>;
export type CompanionGiftChoiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companionId?: boolean;
    giftId?: boolean;
    createdAt?: boolean;
    companion?: boolean | Prisma.CompanionDefaultArgs<ExtArgs>;
    gift?: boolean | Prisma.GiftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["companionGiftChoice"]>;
export type CompanionGiftChoiceSelectScalar = {
    id?: boolean;
    companionId?: boolean;
    giftId?: boolean;
    createdAt?: boolean;
};
export type CompanionGiftChoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "companionId" | "giftId" | "createdAt", ExtArgs["result"]["companionGiftChoice"]>;
export type CompanionGiftChoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    companion?: boolean | Prisma.CompanionDefaultArgs<ExtArgs>;
    gift?: boolean | Prisma.GiftDefaultArgs<ExtArgs>;
};
export type CompanionGiftChoiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    companion?: boolean | Prisma.CompanionDefaultArgs<ExtArgs>;
    gift?: boolean | Prisma.GiftDefaultArgs<ExtArgs>;
};
export type CompanionGiftChoiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    companion?: boolean | Prisma.CompanionDefaultArgs<ExtArgs>;
    gift?: boolean | Prisma.GiftDefaultArgs<ExtArgs>;
};
export type $CompanionGiftChoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CompanionGiftChoice";
    objects: {
        companion: Prisma.$CompanionPayload<ExtArgs>;
        gift: Prisma.$GiftPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        companionId: string;
        giftId: string;
        createdAt: Date;
    }, ExtArgs["result"]["companionGiftChoice"]>;
    composites: {};
};
export type CompanionGiftChoiceGetPayload<S extends boolean | null | undefined | CompanionGiftChoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload, S>;
export type CompanionGiftChoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CompanionGiftChoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CompanionGiftChoiceCountAggregateInputType | true;
};
export interface CompanionGiftChoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CompanionGiftChoice'];
        meta: {
            name: 'CompanionGiftChoice';
        };
    };
    findUnique<T extends CompanionGiftChoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, CompanionGiftChoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CompanionGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CompanionGiftChoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CompanionGiftChoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompanionGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CompanionGiftChoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, CompanionGiftChoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__CompanionGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CompanionGiftChoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CompanionGiftChoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompanionGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CompanionGiftChoiceFindManyArgs>(args?: Prisma.SelectSubset<T, CompanionGiftChoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CompanionGiftChoiceCreateArgs>(args: Prisma.SelectSubset<T, CompanionGiftChoiceCreateArgs<ExtArgs>>): Prisma.Prisma__CompanionGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CompanionGiftChoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, CompanionGiftChoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CompanionGiftChoiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CompanionGiftChoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CompanionGiftChoiceDeleteArgs>(args: Prisma.SelectSubset<T, CompanionGiftChoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__CompanionGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CompanionGiftChoiceUpdateArgs>(args: Prisma.SelectSubset<T, CompanionGiftChoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__CompanionGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CompanionGiftChoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, CompanionGiftChoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CompanionGiftChoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, CompanionGiftChoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CompanionGiftChoiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CompanionGiftChoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CompanionGiftChoiceUpsertArgs>(args: Prisma.SelectSubset<T, CompanionGiftChoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__CompanionGiftChoiceClient<runtime.Types.Result.GetResult<Prisma.$CompanionGiftChoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CompanionGiftChoiceCountArgs>(args?: Prisma.Subset<T, CompanionGiftChoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CompanionGiftChoiceCountAggregateOutputType> : number>;
    aggregate<T extends CompanionGiftChoiceAggregateArgs>(args: Prisma.Subset<T, CompanionGiftChoiceAggregateArgs>): Prisma.PrismaPromise<GetCompanionGiftChoiceAggregateType<T>>;
    groupBy<T extends CompanionGiftChoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CompanionGiftChoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: CompanionGiftChoiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CompanionGiftChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanionGiftChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CompanionGiftChoiceFieldRefs;
}
export interface Prisma__CompanionGiftChoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    companion<T extends Prisma.CompanionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanionDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanionClient<runtime.Types.Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    gift<T extends Prisma.GiftDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GiftDefaultArgs<ExtArgs>>): Prisma.Prisma__GiftClient<runtime.Types.Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CompanionGiftChoiceFieldRefs {
    readonly id: Prisma.FieldRef<"CompanionGiftChoice", 'String'>;
    readonly companionId: Prisma.FieldRef<"CompanionGiftChoice", 'String'>;
    readonly giftId: Prisma.FieldRef<"CompanionGiftChoice", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CompanionGiftChoice", 'DateTime'>;
}
export type CompanionGiftChoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.CompanionGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.CompanionGiftChoiceInclude<ExtArgs> | null;
    where: Prisma.CompanionGiftChoiceWhereUniqueInput;
};
export type CompanionGiftChoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.CompanionGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.CompanionGiftChoiceInclude<ExtArgs> | null;
    where: Prisma.CompanionGiftChoiceWhereUniqueInput;
};
export type CompanionGiftChoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CompanionGiftChoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CompanionGiftChoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CompanionGiftChoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.CompanionGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.CompanionGiftChoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompanionGiftChoiceCreateInput, Prisma.CompanionGiftChoiceUncheckedCreateInput>;
};
export type CompanionGiftChoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CompanionGiftChoiceCreateManyInput | Prisma.CompanionGiftChoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CompanionGiftChoiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionGiftChoiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CompanionGiftChoiceOmit<ExtArgs> | null;
    data: Prisma.CompanionGiftChoiceCreateManyInput | Prisma.CompanionGiftChoiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CompanionGiftChoiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CompanionGiftChoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.CompanionGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.CompanionGiftChoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompanionGiftChoiceUpdateInput, Prisma.CompanionGiftChoiceUncheckedUpdateInput>;
    where: Prisma.CompanionGiftChoiceWhereUniqueInput;
};
export type CompanionGiftChoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CompanionGiftChoiceUpdateManyMutationInput, Prisma.CompanionGiftChoiceUncheckedUpdateManyInput>;
    where?: Prisma.CompanionGiftChoiceWhereInput;
    limit?: number;
};
export type CompanionGiftChoiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionGiftChoiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CompanionGiftChoiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompanionGiftChoiceUpdateManyMutationInput, Prisma.CompanionGiftChoiceUncheckedUpdateManyInput>;
    where?: Prisma.CompanionGiftChoiceWhereInput;
    limit?: number;
    include?: Prisma.CompanionGiftChoiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CompanionGiftChoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.CompanionGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.CompanionGiftChoiceInclude<ExtArgs> | null;
    where: Prisma.CompanionGiftChoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanionGiftChoiceCreateInput, Prisma.CompanionGiftChoiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CompanionGiftChoiceUpdateInput, Prisma.CompanionGiftChoiceUncheckedUpdateInput>;
};
export type CompanionGiftChoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.CompanionGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.CompanionGiftChoiceInclude<ExtArgs> | null;
    where: Prisma.CompanionGiftChoiceWhereUniqueInput;
};
export type CompanionGiftChoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanionGiftChoiceWhereInput;
    limit?: number;
};
export type CompanionGiftChoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanionGiftChoiceSelect<ExtArgs> | null;
    omit?: Prisma.CompanionGiftChoiceOmit<ExtArgs> | null;
    include?: Prisma.CompanionGiftChoiceInclude<ExtArgs> | null;
};
