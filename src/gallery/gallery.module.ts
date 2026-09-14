import { Module } from '@nestjs/common';

import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';
import { AdminAuthModule } from '../admin-auth/admin-auth.module';
import { GalleryAdminController } from './gallery-admin.controller';

@Module({
  imports: [AdminAuthModule],
  controllers: [GalleryController, GalleryAdminController],
  providers: [GalleryService],
})
export class GalleryModule {}
