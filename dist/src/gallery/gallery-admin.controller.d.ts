import { GalleryService } from './gallery.service';
export declare class GalleryAdminController {
    private readonly gallery;
    constructor(gallery: GalleryService);
    access(): {
        authorized: boolean;
    };
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
