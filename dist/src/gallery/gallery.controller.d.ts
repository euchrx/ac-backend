import type { Response } from 'express';
import { GalleryService } from './gallery.service';
type UploadedPhoto = {
    buffer: Buffer;
    mimetype: string;
    originalname: string;
    size: number;
};
export declare class GalleryController {
    private readonly galleryService;
    constructor(galleryService: GalleryService);
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
    image(id: string, response: Response): Promise<void>;
}
export {};
