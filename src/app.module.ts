import { Module } from '@nestjs/common';

import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GiftsModule } from './gifts/gifts.module';
import { GuestAuthModule } from './guest-auth/guest-auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    AdminAuthModule,
    GuestAuthModule,
    GiftsModule,
    AdminPanelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
