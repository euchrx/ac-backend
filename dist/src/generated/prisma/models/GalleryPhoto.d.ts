import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GalleryPhotoModel = runtime.Types.Result.DefaultSelection<Prisma.$GalleryPhotoPayload>;
export type AggregateGalleryPhoto = {
    _count: GalleryPhotoCountAggregateOutputType | null;
    _min: GalleryPhotoMinAggregateOutputType | null;
    _max: GalleryPhotoMaxAggregateOutputType | null;
};
export type GalleryPhotoMinAggregateOutputType = {
    ownerHash: string | null;
    id: string | null;
    authorName: string | null;
    caption: string | null;
    mimeType: string | null;
    imageData: runtime.Bytes | null;
    originalName: string | null;
    createdAt: Date | null;
};
export type GalleryPhotoMaxAggregateOutputType = {
    ownerHash: string | null;
    id: string | null;
    authorName: string | null;
    caption: string | null;
    mimeType: string | null;
    imageData: runtime.Bytes | null;
    originalName: string | null;
    createdAt: Date | null;
};
export type GalleryPhotoCountAggregateOutputType = {
    ownerHash: number;
    id: number;
    authorName: number;
    caption: number;
    mimeType: number;
    imageData: number;
    originalName: number;
    createdAt: number;
    _all: number;
};
export type GalleryPhotoMinAggregateInputType = {
    ownerHash?: true;
    id?: true;
    authorName?: true;
    caption?: true;
    mimeType?: true;
    imageData?: true;
    originalName?: true;
    createdAt?: true;
};
export type GalleryPhotoMaxAggregateInputType = {
    ownerHash?: true;
    id?: true;
    authorName?: true;
    caption?: true;
    mimeType?: true;
    imageData?: true;
    originalName?: true;
    createdAt?: true;
};
export type GalleryPhotoCountAggregateInputType = {
    ownerHash?: true;
    id?: true;
    authorName?: true;
    caption?: true;
    mimeType?: true;
    imageData?: true;
    originalName?: true;
    createdAt?: true;
    _all?: true;
};
export type GalleryPhotoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GalleryPhotoWhereInput;
    orderBy?: Prisma.GalleryPhotoOrderByWithRelationInput | Prisma.GalleryPhotoOrderByWithRelationInput[];
    cursor?: Prisma.GalleryPhotoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GalleryPhotoCountAggregateInputType;
    _min?: GalleryPhotoMinAggregateInputType;
    _max?: GalleryPhotoMaxAggregateInputType;
};
export type GetGalleryPhotoAggregateType<T extends GalleryPhotoAggregateArgs> = {
    [P in keyof T & keyof AggregateGalleryPhoto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGalleryPhoto[P]> : Prisma.GetScalarType<T[P], AggregateGalleryPhoto[P]>;
};
export type GalleryPhotoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GalleryPhotoWhereInput;
    orderBy?: Prisma.GalleryPhotoOrderByWithAggregationInput | Prisma.GalleryPhotoOrderByWithAggregationInput[];
    by: Prisma.GalleryPhotoScalarFieldEnum[] | Prisma.GalleryPhotoScalarFieldEnum;
    having?: Prisma.GalleryPhotoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GalleryPhotoCountAggregateInputType | true;
    _min?: GalleryPhotoMinAggregateInputType;
    _max?: GalleryPhotoMaxAggregateInputType;
};
export type GalleryPhotoGroupByOutputType = {
    ownerHash: string | null;
    id: string;
    authorName: string;
    caption: string | null;
    mimeType: string;
    imageData: runtime.Bytes;
    originalName: string | null;
    createdAt: Date;
    _count: GalleryPhotoCountAggregateOutputType | null;
    _min: GalleryPhotoMinAggregateOutputType | null;
    _max: GalleryPhotoMaxAggregateOutputType | null;
};
export type GetGalleryPhotoGroupByPayload<T extends GalleryPhotoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GalleryPhotoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GalleryPhotoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GalleryPhotoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GalleryPhotoGroupByOutputType[P]>;
}>>;
export type GalleryPhotoWhereInput = {
    AND?: Prisma.GalleryPhotoWhereInput | Prisma.GalleryPhotoWhereInput[];
    OR?: Prisma.GalleryPhotoWhereInput[];
    NOT?: Prisma.GalleryPhotoWhereInput | Prisma.GalleryPhotoWhereInput[];
    ownerHash?: Prisma.StringNullableFilter<"GalleryPhoto"> | string | null;
    id?: Prisma.StringFilter<"GalleryPhoto"> | string;
    authorName?: Prisma.StringFilter<"GalleryPhoto"> | string;
    caption?: Prisma.StringNullableFilter<"GalleryPhoto"> | string | null;
    mimeType?: Prisma.StringFilter<"GalleryPhoto"> | string;
    imageData?: Prisma.BytesFilter<"GalleryPhoto"> | runtime.Bytes;
    originalName?: Prisma.StringNullableFilter<"GalleryPhoto"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"GalleryPhoto"> | Date | string;
};
export type GalleryPhotoOrderByWithRelationInput = {
    ownerHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    id?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    caption?: Prisma.SortOrderInput | Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    imageData?: Prisma.SortOrder;
    originalName?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GalleryPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GalleryPhotoWhereInput | Prisma.GalleryPhotoWhereInput[];
    OR?: Prisma.GalleryPhotoWhereInput[];
    NOT?: Prisma.GalleryPhotoWhereInput | Prisma.GalleryPhotoWhereInput[];
    ownerHash?: Prisma.StringNullableFilter<"GalleryPhoto"> | string | null;
    authorName?: Prisma.StringFilter<"GalleryPhoto"> | string;
    caption?: Prisma.StringNullableFilter<"GalleryPhoto"> | string | null;
    mimeType?: Prisma.StringFilter<"GalleryPhoto"> | string;
    imageData?: Prisma.BytesFilter<"GalleryPhoto"> | runtime.Bytes;
    originalName?: Prisma.StringNullableFilter<"GalleryPhoto"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"GalleryPhoto"> | Date | string;
}, "id">;
export type GalleryPhotoOrderByWithAggregationInput = {
    ownerHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    id?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    caption?: Prisma.SortOrderInput | Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    imageData?: Prisma.SortOrder;
    originalName?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.GalleryPhotoCountOrderByAggregateInput;
    _max?: Prisma.GalleryPhotoMaxOrderByAggregateInput;
    _min?: Prisma.GalleryPhotoMinOrderByAggregateInput;
};
export type GalleryPhotoScalarWhereWithAggregatesInput = {
    AND?: Prisma.GalleryPhotoScalarWhereWithAggregatesInput | Prisma.GalleryPhotoScalarWhereWithAggregatesInput[];
    OR?: Prisma.GalleryPhotoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GalleryPhotoScalarWhereWithAggregatesInput | Prisma.GalleryPhotoScalarWhereWithAggregatesInput[];
    ownerHash?: Prisma.StringNullableWithAggregatesFilter<"GalleryPhoto"> | string | null;
    id?: Prisma.StringWithAggregatesFilter<"GalleryPhoto"> | string;
    authorName?: Prisma.StringWithAggregatesFilter<"GalleryPhoto"> | string;
    caption?: Prisma.StringNullableWithAggregatesFilter<"GalleryPhoto"> | string | null;
    mimeType?: Prisma.StringWithAggregatesFilter<"GalleryPhoto"> | string;
    imageData?: Prisma.BytesWithAggregatesFilter<"GalleryPhoto"> | runtime.Bytes;
    originalName?: Prisma.StringNullableWithAggregatesFilter<"GalleryPhoto"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GalleryPhoto"> | Date | string;
};
export type GalleryPhotoCreateInput = {
    ownerHash?: string | null;
    id?: string;
    authorName: string;
    caption?: string | null;
    mimeType: string;
    imageData: runtime.Bytes;
    originalName?: string | null;
    createdAt?: Date | string;
};
export type GalleryPhotoUncheckedCreateInput = {
    ownerHash?: string | null;
    id?: string;
    authorName: string;
    caption?: string | null;
    mimeType: string;
    imageData: runtime.Bytes;
    originalName?: string | null;
    createdAt?: Date | string;
};
export type GalleryPhotoUpdateInput = {
    ownerHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    imageData?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    originalName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GalleryPhotoUncheckedUpdateInput = {
    ownerHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    imageData?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    originalName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GalleryPhotoCreateManyInput = {
    ownerHash?: string | null;
    id?: string;
    authorName: string;
    caption?: string | null;
    mimeType: string;
    imageData: runtime.Bytes;
    originalName?: string | null;
    createdAt?: Date | string;
};
export type GalleryPhotoUpdateManyMutationInput = {
    ownerHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    imageData?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    originalName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GalleryPhotoUncheckedUpdateManyInput = {
    ownerHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    imageData?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    originalName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GalleryPhotoCountOrderByAggregateInput = {
    ownerHash?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    caption?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    imageData?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GalleryPhotoMaxOrderByAggregateInput = {
    ownerHash?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    caption?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    imageData?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GalleryPhotoMinOrderByAggregateInput = {
    ownerHash?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    caption?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    imageData?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BytesFieldUpdateOperationsInput = {
    set?: runtime.Bytes;
};
export type GalleryPhotoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ownerHash?: boolean;
    id?: boolean;
    authorName?: boolean;
    caption?: boolean;
    mimeType?: boolean;
    imageData?: boolean;
    originalName?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["galleryPhoto"]>;
export type GalleryPhotoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ownerHash?: boolean;
    id?: boolean;
    authorName?: boolean;
    caption?: boolean;
    mimeType?: boolean;
    imageData?: boolean;
    originalName?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["galleryPhoto"]>;
export type GalleryPhotoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ownerHash?: boolean;
    id?: boolean;
    authorName?: boolean;
    caption?: boolean;
    mimeType?: boolean;
    imageData?: boolean;
    originalName?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["galleryPhoto"]>;
export type GalleryPhotoSelectScalar = {
    ownerHash?: boolean;
    id?: boolean;
    authorName?: boolean;
    caption?: boolean;
    mimeType?: boolean;
    imageData?: boolean;
    originalName?: boolean;
    createdAt?: boolean;
};
export type GalleryPhotoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ownerHash" | "id" | "authorName" | "caption" | "mimeType" | "imageData" | "originalName" | "createdAt", ExtArgs["result"]["galleryPhoto"]>;
export type $GalleryPhotoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GalleryPhoto";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ownerHash: string | null;
        id: string;
        authorName: string;
        caption: string | null;
        mimeType: string;
        imageData: runtime.Bytes;
        originalName: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["galleryPhoto"]>;
    composites: {};
};
export type GalleryPhotoGetPayload<S extends boolean | null | undefined | GalleryPhotoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GalleryPhotoPayload, S>;
export type GalleryPhotoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GalleryPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GalleryPhotoCountAggregateInputType | true;
};
export interface GalleryPhotoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GalleryPhoto'];
        meta: {
            name: 'GalleryPhoto';
        };
    };
    findUnique<T extends GalleryPhotoFindUniqueArgs>(args: Prisma.SelectSubset<T, GalleryPhotoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GalleryPhotoClient<runtime.Types.Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GalleryPhotoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GalleryPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GalleryPhotoClient<runtime.Types.Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GalleryPhotoFindFirstArgs>(args?: Prisma.SelectSubset<T, GalleryPhotoFindFirstArgs<ExtArgs>>): Prisma.Prisma__GalleryPhotoClient<runtime.Types.Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GalleryPhotoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GalleryPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GalleryPhotoClient<runtime.Types.Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GalleryPhotoFindManyArgs>(args?: Prisma.SelectSubset<T, GalleryPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GalleryPhotoCreateArgs>(args: Prisma.SelectSubset<T, GalleryPhotoCreateArgs<ExtArgs>>): Prisma.Prisma__GalleryPhotoClient<runtime.Types.Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GalleryPhotoCreateManyArgs>(args?: Prisma.SelectSubset<T, GalleryPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GalleryPhotoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GalleryPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GalleryPhotoDeleteArgs>(args: Prisma.SelectSubset<T, GalleryPhotoDeleteArgs<ExtArgs>>): Prisma.Prisma__GalleryPhotoClient<runtime.Types.Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GalleryPhotoUpdateArgs>(args: Prisma.SelectSubset<T, GalleryPhotoUpdateArgs<ExtArgs>>): Prisma.Prisma__GalleryPhotoClient<runtime.Types.Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GalleryPhotoDeleteManyArgs>(args?: Prisma.SelectSubset<T, GalleryPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GalleryPhotoUpdateManyArgs>(args: Prisma.SelectSubset<T, GalleryPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GalleryPhotoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GalleryPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GalleryPhotoUpsertArgs>(args: Prisma.SelectSubset<T, GalleryPhotoUpsertArgs<ExtArgs>>): Prisma.Prisma__GalleryPhotoClient<runtime.Types.Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GalleryPhotoCountArgs>(args?: Prisma.Subset<T, GalleryPhotoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GalleryPhotoCountAggregateOutputType> : number>;
    aggregate<T extends GalleryPhotoAggregateArgs>(args: Prisma.Subset<T, GalleryPhotoAggregateArgs>): Prisma.PrismaPromise<GetGalleryPhotoAggregateType<T>>;
    groupBy<T extends GalleryPhotoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GalleryPhotoGroupByArgs['orderBy'];
    } : {
        orderBy?: GalleryPhotoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GalleryPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GalleryPhotoFieldRefs;
}
export interface Prisma__GalleryPhotoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GalleryPhotoFieldRefs {
    readonly ownerHash: Prisma.FieldRef<"GalleryPhoto", 'String'>;
    readonly id: Prisma.FieldRef<"GalleryPhoto", 'String'>;
    readonly authorName: Prisma.FieldRef<"GalleryPhoto", 'String'>;
    readonly caption: Prisma.FieldRef<"GalleryPhoto", 'String'>;
    readonly mimeType: Prisma.FieldRef<"GalleryPhoto", 'String'>;
    readonly imageData: Prisma.FieldRef<"GalleryPhoto", 'Bytes'>;
    readonly originalName: Prisma.FieldRef<"GalleryPhoto", 'String'>;
    readonly createdAt: Prisma.FieldRef<"GalleryPhoto", 'DateTime'>;
}
export type GalleryPhotoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GalleryPhotoSelect<ExtArgs> | null;
    omit?: Prisma.GalleryPhotoOmit<ExtArgs> | null;
    where: Prisma.GalleryPhotoWhereUniqueInput;
};
export type GalleryPhotoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GalleryPhotoSelect<ExtArgs> | null;
    omit?: Prisma.GalleryPhotoOmit<ExtArgs> | null;
    where: Prisma.GalleryPhotoWhereUniqueInput;
};
export type GalleryPhotoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GalleryPhotoSelect<ExtArgs> | null;
    omit?: Prisma.GalleryPhotoOmit<ExtArgs> | null;
    where?: Prisma.GalleryPhotoWhereInput;
    orderBy?: Prisma.GalleryPhotoOrderByWithRelationInput | Prisma.GalleryPhotoOrderByWithRelationInput[];
    cursor?: Prisma.GalleryPhotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GalleryPhotoScalarFieldEnum | Prisma.GalleryPhotoScalarFieldEnum[];
};
export type GalleryPhotoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GalleryPhotoSelect<ExtArgs> | null;
    omit?: Prisma.GalleryPhotoOmit<ExtArgs> | null;
    where?: Prisma.GalleryPhotoWhereInput;
    orderBy?: Prisma.GalleryPhotoOrderByWithRelationInput | Prisma.GalleryPhotoOrderByWithRelationInput[];
    cursor?: Prisma.GalleryPhotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GalleryPhotoScalarFieldEnum | Prisma.GalleryPhotoScalarFieldEnum[];
};
export type GalleryPhotoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GalleryPhotoSelect<ExtArgs> | null;
    omit?: Prisma.GalleryPhotoOmit<ExtArgs> | null;
    where?: Prisma.GalleryPhotoWhereInput;
    orderBy?: Prisma.GalleryPhotoOrderByWithRelationInput | Prisma.GalleryPhotoOrderByWithRelationInput[];
    cursor?: Prisma.GalleryPhotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GalleryPhotoScalarFieldEnum | Prisma.GalleryPhotoScalarFieldEnum[];
};
export type GalleryPhotoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GalleryPhotoSelect<ExtArgs> | null;
    omit?: Prisma.GalleryPhotoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GalleryPhotoCreateInput, Prisma.GalleryPhotoUncheckedCreateInput>;
};
export type GalleryPhotoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GalleryPhotoCreateManyInput | Prisma.GalleryPhotoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GalleryPhotoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GalleryPhotoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GalleryPhotoOmit<ExtArgs> | null;
    data: Prisma.GalleryPhotoCreateManyInput | Prisma.GalleryPhotoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GalleryPhotoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GalleryPhotoSelect<ExtArgs> | null;
    omit?: Prisma.GalleryPhotoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GalleryPhotoUpdateInput, Prisma.GalleryPhotoUncheckedUpdateInput>;
    where: Prisma.GalleryPhotoWhereUniqueInput;
};
export type GalleryPhotoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GalleryPhotoUpdateManyMutationInput, Prisma.GalleryPhotoUncheckedUpdateManyInput>;
    where?: Prisma.GalleryPhotoWhereInput;
    limit?: number;
};
export type GalleryPhotoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GalleryPhotoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GalleryPhotoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GalleryPhotoUpdateManyMutationInput, Prisma.GalleryPhotoUncheckedUpdateManyInput>;
    where?: Prisma.GalleryPhotoWhereInput;
    limit?: number;
};
export type GalleryPhotoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GalleryPhotoSelect<ExtArgs> | null;
    omit?: Prisma.GalleryPhotoOmit<ExtArgs> | null;
    where: Prisma.GalleryPhotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.GalleryPhotoCreateInput, Prisma.GalleryPhotoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GalleryPhotoUpdateInput, Prisma.GalleryPhotoUncheckedUpdateInput>;
};
export type GalleryPhotoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GalleryPhotoSelect<ExtArgs> | null;
    omit?: Prisma.GalleryPhotoOmit<ExtArgs> | null;
    where: Prisma.GalleryPhotoWhereUniqueInput;
};
export type GalleryPhotoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GalleryPhotoWhereInput;
    limit?: number;
};
export type GalleryPhotoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GalleryPhotoSelect<ExtArgs> | null;
    omit?: Prisma.GalleryPhotoOmit<ExtArgs> | null;
};
