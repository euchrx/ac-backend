import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { AdminAuthGuard } from '../admin-auth/guards/admin-auth.guard';
import { GalleryService } from './gallery.service';

@Controller('admin/gallery')
@UseGuards(AdminAuthGuard)
export class GalleryAdminController {
  constructor(private readonly gallery: GalleryService) {}

  @Get('access')
  access() {
    return { authorized: true };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gallery.removeAsAdmin(id);
  }
}
