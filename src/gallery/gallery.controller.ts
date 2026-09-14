import {
  Body,
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

  @Post()
  @UseInterceptors(
    FileInterceptor('photo', { limits: { fileSize: 8 * 1024 * 1024 } }),
  )
  create(
    @UploadedFile() file: UploadedPhoto | undefined,
    @Body('authorName') authorName?: string,
    @Body('caption') caption?: string,
  ) {
    return this.galleryService.create(file, authorName, caption);
  }

  @Get(':id/image')
  async image(@Param('id') id: string, @Res() response: Response) {
    const photo = await this.galleryService.image(id);
    response.setHeader('Content-Type', photo.mimeType);
    response.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    response.send(Buffer.from(photo.imageData));
  }
}
