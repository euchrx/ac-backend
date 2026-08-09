import { AdminAuthService } from './admin-auth.service';
import { AdminLoginDto } from './dto/admin-login.dto';
import type { AuthenticatedAdmin } from './interfaces/authenticated-admin.interface';
export declare class AdminAuthController {
    private readonly adminAuthService;
    constructor(adminAuthService: AdminAuthService);
    login(dto: AdminLoginDto): Promise<{
        accessToken: string;
        admin: {
            id: string;
            name: string;
            email: string;
        };
    }>;
    me(admin: AuthenticatedAdmin): AuthenticatedAdmin;
}
