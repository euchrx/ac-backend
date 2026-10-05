import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CurrentAdmin } from '../admin-auth/decorators/current-admin.decorator';
import type { AuthenticatedAdmin } from '../admin-auth/interfaces/authenticated-admin.interface';
import { GalleryExportService } from './gallery-export.service';
import { AdminAuthGuard } from '../admin-auth/guards/admin-auth.guard';
import { GalleryService } from './gallery.service';
import type { Request } from 'express';
import { GalleryUploadTestService } from './gallery-upload-test.service';

@Controller('admin/gallery')
@UseGuards(AdminAuthGuard)
export class GalleryAdminController {
  constructor(
    private readonly gallery: GalleryService,
    private readonly galleryExport: GalleryExportService,
    private readonly uploadTest: GalleryUploadTestService,
  ) {}

  @Get('upload-test')
  uploadTestStatus() {
    return this.uploadTest.status();
  }

  @Post('upload-test')
  testLargeUpload(@Req() request: Request) {
    return this.uploadTest.receive(request);
  }

  @Post('export-ticket')
  exportTicket(@CurrentAdmin() admin: AuthenticatedAdmin) {
    return this.galleryExport.ticket(admin.id);
  }

  @Get('access')
  access() {
    return { authorized: true };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gallery.removeAsAdmin(id);
  }
}
