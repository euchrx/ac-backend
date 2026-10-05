import { JwtService } from '@nestjs/jwt';
import type { Response } from 'express';
import { PrismaService } from '../prisma/prisma.service';
export declare class GalleryExportService {
    private readonly prisma;
    private readonly jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    ticket(adminId: string): Promise<{
        ticket: string;
        count: number;
    }>;
    download(ticket: unknown, response: Response): Promise<void>;
}
