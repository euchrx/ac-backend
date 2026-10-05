import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { once } from 'node:events';
import { Readable } from 'node:stream';
import archiver from 'archiver';
import type { Response } from 'express';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GalleryExportService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async ticket(adminId: string) {
    const count = await this.prisma.galleryPhoto.count();
    if (!count) throw new NotFoundException('Ainda não há fotos para baixar.');
    // A autorização de download não pode ser usada como sessão administrativa.
    const ticket = await this.jwt.signAsync(
      { sub: adminId, type: 'gallery-export' },
      { expiresIn: '60s' },
    );
    return { ticket, count };
  }

  async download(ticket: unknown, response: Response) {
    if (typeof ticket !== 'string' || ticket.length > 2048)
      throw new UnauthorizedException('Download não autorizado.');
    let payload: { sub: string; type: string };
    try {
      payload = await this.jwt.verifyAsync<{ sub: string; type: string }>(
        ticket,
      );
    } catch {
      throw new UnauthorizedException(
        'Autorização expirada. Solicite o download novamente.',
      );
    }
    if (payload.type !== 'gallery-export' || typeof payload.sub !== 'string')
      throw new UnauthorizedException('Download não autorizado.');
    const admin = await this.prisma.admin.findFirst({
      where: { id: payload.sub, active: true },
      select: { id: true },
    });
    if (!admin) throw new UnauthorizedException('Administrador inativo.');

    // Fixamos a lista do início do download; novas publicações entram no próximo ZIP.
    const photos = await this.prisma.galleryPhoto.findMany({
      orderBy: [{ createdAt: 'asc' }, { id: 'asc' }],
      select: { id: true, authorName: true, mimeType: true, createdAt: true },
    });
    if (!photos.length)
      throw new NotFoundException('Ainda não há fotos para baixar.');
    const archive = archiver('zip', { store: true, forceZip64: true });
    const abort = new AbortController();
    const stop = () => {
      abort.abort();
      archive.abort();
    };
    response.once('close', stop);
    archive.on('error', (error: Error) => response.destroy(error));
    archive.on('warning', (error: Error) => response.destroy(error));
    response.setHeader('Content-Type', 'application/zip');
    response.setHeader(
      'Content-Disposition',
      `attachment; filename="ana-clara-fotos-${new Date().toISOString().slice(0, 10)}.zip"`,
    );
    response.setHeader('Cache-Control', 'no-store');
    archive.pipe(response);
    try {
      for (const photo of photos) {
        if (abort.signal.aborted) return;
        const name =
          photo.authorName
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-zA-Z0-9_-]/g, '-')
            .slice(0, 50) || 'convidado';
        const extension =
          photo.mimeType === 'image/png'
            ? 'png'
            : photo.mimeType === 'image/webp'
              ? 'webp'
              : 'jpg';
        const prisma = this.prisma;
        // Fonte preguiçosa: lê apenas a foto que está sendo enviada, respeitando a velocidade do download.
        const source = Readable.from(
          (async function* () {
            const row = await prisma.galleryPhoto.findUnique({
              where: { id: photo.id },
              select: { imageData: true },
            });
            if (!row)
              throw new Error(
                'Uma foto foi removida durante o download. Solicite um novo ZIP.',
              );
            yield Buffer.from(row.imageData);
          })(),
        );
        source.on('error', (error: Error) => response.destroy(error));
        const entry = once(archive, 'entry', { signal: abort.signal });
        const stopSource = () => source.destroy();
        abort.signal.addEventListener('abort', stopSource, { once: true });
        try {
          archive.append(source, {
            name: `${photo.createdAt.toISOString().slice(0, 10)}/${name}-${photo.id}.${extension}`,
            date: photo.createdAt,
          });
          await entry;
        } finally {
          abort.signal.removeEventListener('abort', stopSource);
          source.destroy();
        }
      }
      await archive.finalize();
    } catch (error) {
      if (!response.destroyed)
        response.destroy(
          error instanceof Error ? error : new Error('Falha ao gerar ZIP.'),
        );
    }
  }
}
