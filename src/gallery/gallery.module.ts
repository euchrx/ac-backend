import { Module } from '@nestjs/common';

import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';
import { AdminAuthModule } from '../admin-auth/admin-auth.module';
import { GalleryAdminController } from './gallery-admin.controller';
import { GalleryExportController } from './gallery-export.controller';
import { GalleryExportService } from './gallery-export.service';
import { GalleryUploadTestService } from './gallery-upload-test.service';

@Module({
  imports: [AdminAuthModule],
  controllers: [
    GalleryController,
    GalleryAdminController,
    GalleryExportController,
  ],
  providers: [GalleryService, GalleryExportService, GalleryUploadTestService],
})
export class GalleryModule {}
