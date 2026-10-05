import type { Request } from 'express';
export declare const UPLOAD_TEST_MAX_BYTES = 8000000000;
export declare function countUploadBytes(source: AsyncIterable<Uint8Array>, expected: number): Promise<number>;
export declare class GalleryUploadTestService {
    private active;
    status(): {
        enabled: boolean;
        maxBytes: number;
        storesData: boolean;
        active: boolean;
    };
    receive(request: Request): Promise<{
        receivedBytes: number;
        seconds: number;
        megabytesPerSecond: number;
        stored: boolean;
    }>;
}
