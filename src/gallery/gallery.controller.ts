import {
  Body,
  Delete,
  Headers,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';

import { GalleryService } from './gallery.service';

type UploadedPhoto = {
  buffer: Buffer;
  mimetype: string;
  originalname: string;
  size: number;
};

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get()
  @Header('Cache-Control', 'no-store')
  list() {
    return this.galleryService.list();
  }

  @Get('mine')
  @Header('Cache-Control', 'no-store')
  mine(@Headers('x-gallery-owner') token?: string) {
    return this.galleryService.list(token || '');
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Headers('x-gallery-owner') token?: string) {
    return this.galleryService.remove(id, token);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('photo', { limits: { fileSize: 8 * 1024 * 1024 } }),
  )
  create(
    @UploadedFile() file: UploadedPhoto | undefined,
    @Body('authorName') authorName?: string,
    @Body('caption') caption?: string,
    @Headers('x-gallery-owner') token?: string,
  ) {
    return this.galleryService.create(file, authorName, caption, token);
  }

  @Get(':id/image')
  async image(@Param('id') id: string, @Res() response: Response) {
    const photo = await this.galleryService.image(id);
    response.setHeader('Content-Type', photo.mimeType);
    response.setHeader('Cache-Control', 'no-store');
    response.send(Buffer.from(photo.imageData));
  }
}
