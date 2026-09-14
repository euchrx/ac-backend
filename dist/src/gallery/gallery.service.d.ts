import { PrismaService } from '../prisma/prisma.service';
type UploadedPhoto = {
    buffer: Buffer;
    mimetype: string;
    originalname: string;
    size: number;
};
export declare class GalleryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(): Promise<{
        id: string;
        createdAt: Date;
        authorName: string;
        caption: string | null;
    }[]>;
    create(file: UploadedPhoto | undefined, authorName?: string, caption?: string): Promise<{
        id: string;
        createdAt: Date;
        authorName: string;
        caption: string | null;
    }>;
    image(id: string): Promise<{
        mimeType: string;
        imageData: Uint8Array<ArrayBuffer>;
    }>;
}
export {};
