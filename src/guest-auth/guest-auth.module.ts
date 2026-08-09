import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { GuestAuthController } from './guest-auth.controller';
import { GuestAuthService } from './guest-auth.service';
import { GuestAuthGuard } from './guards/guest-auth.guard';
import { CompanionAuthGuard } from './guards/companion-auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_GUEST_SECRET,
      signOptions: {
        expiresIn: '90d',
      },
    }),
  ],
  controllers: [GuestAuthController],
  providers: [GuestAuthService, GuestAuthGuard, CompanionAuthGuard],
  exports: [GuestAuthGuard, CompanionAuthGuard, JwtModule],
})
export class GuestAuthModule {}
