import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

type UploadedPhoto = {
  buffer: Buffer;
  mimetype: string;
  originalname: string;
  size: number;
};

const supportedSignatures: Record<string, (buffer: Buffer) => boolean> = {
  'image/jpeg': (buffer) => buffer[0] === 0xff && buffer[1] === 0xd8,
  'image/png': (buffer) =>
    buffer
      .subarray(0, 8)
      .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])),
  'image/webp': (buffer) =>
    buffer.subarray(0, 4).toString() === 'RIFF' &&
    buffer.subarray(8, 12).toString() === 'WEBP',
};

@Injectable()
export class GalleryService {
  constructor(private readonly prisma: PrismaService) {}

  async list() {
    return this.prisma.galleryPhoto.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
      select: {
        id: true,
        authorName: true,
        caption: true,
        createdAt: true,
      },
    });
  }

  async create(
    file: UploadedPhoto | undefined,
    authorName?: string,
    caption?: string,
  ) {
    if (!file)
      throw new BadRequestException('Selecione uma foto para publicar.');

    const signatureMatches = supportedSignatures[file.mimetype];
    if (!signatureMatches || !signatureMatches(file.buffer)) {
      throw new BadRequestException(
        'Envie uma imagem JPG, PNG ou WebP válida.',
      );
    }

    const cleanName = authorName?.trim();
    if (!cleanName || cleanName.length > 60) {
      throw new BadRequestException('Informe seu nome com até 60 caracteres.');
    }

    const cleanCaption = caption?.trim() || null;
    if (cleanCaption && cleanCaption.length > 180) {
      throw new BadRequestException('A legenda deve ter até 180 caracteres.');
    }

    return this.prisma.galleryPhoto.create({
      data: {
        authorName: cleanName,
        caption: cleanCaption,
        mimeType: file.mimetype,
        imageData: Uint8Array.from(file.buffer),
        originalName: file.originalname.slice(0, 180),
      },
      select: { id: true, authorName: true, caption: true, createdAt: true },
    });
  }

  async image(id: string) {
    const photo = await this.prisma.galleryPhoto.findUnique({
      where: { id },
      select: { imageData: true, mimeType: true },
    });
    if (!photo) throw new NotFoundException('Foto não encontrada.');
    return photo;
  }
}
