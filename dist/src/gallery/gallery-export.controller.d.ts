import type { Response } from 'express';
import { GalleryExportService } from './gallery-export.service';
export declare class GalleryExportController {
    private readonly galleryExport;
    constructor(galleryExport: GalleryExportService);
    download(ticket: unknown, response: Response): Promise<void>;
}
