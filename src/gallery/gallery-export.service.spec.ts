import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassThrough } from 'node:stream';
import { finished } from 'node:stream/promises';
import type { Response } from 'express';
import { PrismaService } from '../prisma/prisma.service';
import { GalleryExportService } from './gallery-export.service';

describe('GalleryExportService', () => {
  const photo = {
    id: 'photo-1',
    authorName: '../../Ana Clara',
    mimeType: 'image/jpeg',
    createdAt: new Date('2026-09-14T19:00:00Z'),
  };
  const prisma = {
    admin: { findFirst: jest.fn() },
    galleryPhoto: {
      count: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
    },
  };
  const jwt = { signAsync: jest.fn(), verifyAsync: jest.fn() };
  const service = new GalleryExportService(
    prisma as unknown as PrismaService,
    jwt as unknown as JwtService,
  );

  beforeEach(() => {
    jest.resetAllMocks();
    jwt.verifyAsync.mockResolvedValue({
      sub: 'admin-1',
      type: 'gallery-export',
    });
    prisma.admin.findFirst.mockResolvedValue({ id: 'admin-1' });
  });

  it('rejects an admin-session token used as a download ticket', async () => {
    jwt.verifyAsync.mockResolvedValue({ sub: 'admin-1', type: 'admin' });
    await expect(
      service.download('token', {} as Response),
    ).rejects.toBeInstanceOf(UnauthorizedException);
    expect(prisma.galleryPhoto.findMany).not.toHaveBeenCalled();
  });

  it('rejects expired tickets and inactive administrators', async () => {
    jwt.verifyAsync.mockRejectedValueOnce(new Error('expired'));
    await expect(
      service.download('token', {} as Response),
    ).rejects.toBeInstanceOf(UnauthorizedException);
    prisma.admin.findFirst.mockResolvedValue(null);
    await expect(
      service.download('token', {} as Response),
    ).rejects.toBeInstanceOf(UnauthorizedException);
    expect(prisma.galleryPhoto.findMany).not.toHaveBeenCalled();
  });

  it('does not issue a download ticket for an empty gallery', async () => {
    prisma.galleryPhoto.count.mockResolvedValue(0);
    await expect(service.ticket('admin-1')).rejects.toBeInstanceOf(
      NotFoundException,
    );
    expect(jwt.signAsync).not.toHaveBeenCalled();
  });

  it('streams all 51 photos as ZIP64 with original bytes and safe unique filenames', async () => {
    prisma.galleryPhoto.findMany.mockResolvedValue(
      Array.from({ length: 51 }, (_, index) => ({
        ...photo,
        id: `photo-${index}`,
      })),
    );
    const original = Buffer.from([0xff, 0xd8, 0x10, 0x20, 0xff, 0xd9]);
    prisma.galleryPhoto.findUnique.mockResolvedValue({ imageData: original });
    const output = Object.assign(new PassThrough(), { setHeader: jest.fn() });
    const chunks: Buffer[] = [];
    output.on('data', (chunk: Buffer) => chunks.push(chunk));
    const done = finished(output);
    await service.download('ticket', output as unknown as Response);
    await done;
    const zip = Buffer.concat(chunks);
    const end = zip.indexOf(Buffer.from([0x50, 0x4b, 0x06, 0x06]));
    expect(end).toBeGreaterThan(0);
    expect(zip.readBigUInt64LE(end + 32)).toBe(51n);
    expect(zip.includes(original)).toBe(true);
    expect(zip.toString('latin1')).toContain('photo-50.jpg');
    expect(zip.toString('latin1')).not.toContain('../');
    expect(prisma.galleryPhoto.findUnique).toHaveBeenCalledTimes(51);
    expect(output.setHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/zip',
    );
  });
});
