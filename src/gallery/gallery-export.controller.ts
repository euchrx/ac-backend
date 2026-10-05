import { Body, Controller, Post, Res } from '@nestjs/common';
import type { Response } from 'express';
import { GalleryExportService } from './gallery-export.service';

@Controller('gallery')
export class GalleryExportController {
  constructor(private readonly galleryExport: GalleryExportService) {}

  // Formulário nativo permite salvar ZIPs grandes sem montar um Blob no navegador.
  // A autorização assinada é validada pelo serviço antes de enviar qualquer foto.
  @Post('export')
  download(@Body('ticket') ticket: unknown, @Res() response: Response) {
    return this.galleryExport.download(ticket, response);
  }
}
