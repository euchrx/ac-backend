import { PrismaService } from './prisma/prisma.service';
export declare class AppService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getApiInfo(): {
        name: string;
        status: string;
        version: string;
    };
    getHealth(): Promise<{
        status: string;
        database: string;
        timestamp: string;
    }>;
}
