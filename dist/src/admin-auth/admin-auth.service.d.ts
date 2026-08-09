import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { AdminLoginDto } from './dto/admin-login.dto';
export declare class AdminAuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(dto: AdminLoginDto): Promise<{
        accessToken: string;
        admin: {
            id: string;
            name: string;
            email: string;
        };
    }>;
}
