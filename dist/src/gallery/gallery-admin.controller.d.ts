import type { AuthenticatedAdmin } from '../admin-auth/interfaces/authenticated-admin.interface';
import { GalleryExportService } from './gallery-export.service';
import { GalleryService } from './gallery.service';
import type { Request } from 'express';
import { GalleryUploadTestService } from './gallery-upload-test.service';
export declare class GalleryAdminController {
    private readonly gallery;
    private readonly galleryExport;
    private readonly uploadTest;
    constructor(gallery: GalleryService, galleryExport: GalleryExportService, uploadTest: GalleryUploadTestService);
    uploadTestStatus(): {
        enabled: boolean;
        maxBytes: number;
        storesData: boolean;
        active: boolean;
    };
    testLargeUpload(request: Request): Promise<{
        receivedBytes: number;
        seconds: number;
        megabytesPerSecond: number;
        stored: boolean;
    }>;
    exportTicket(admin: AuthenticatedAdmin): Promise<{
        ticket: string;
        count: number;
    }>;
    access(): {
        authorized: boolean;
    };
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
