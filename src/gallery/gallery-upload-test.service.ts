import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  PayloadTooLargeException,
} from '@nestjs/common';
import type { Request } from 'express';

export const UPLOAD_TEST_MAX_BYTES = 8_000_000_000;

export async function countUploadBytes(
  source: AsyncIterable<Uint8Array>,
  expected: number,
) {
  let received = 0;
  for await (const chunk of source) {
    received += chunk.byteLength;
    if (received > UPLOAD_TEST_MAX_BYTES || received > expected) {
      throw new PayloadTooLargeException(
        'O teste excedeu o tamanho declarado.',
      );
    }
  }
  if (received !== expected)
    throw new BadRequestException('Transferência incompleta.');
  return received;
}

@Injectable()
export class GalleryUploadTestService {
  private active = false;

  status() {
    if (process.env.GALLERY_LARGE_UPLOAD_TEST !== 'true') {
      throw new NotFoundException('Teste de upload desativado.');
    }
    return {
      enabled: true,
      maxBytes: UPLOAD_TEST_MAX_BYTES,
      storesData: false,
      active: this.active,
    };
  }

  async receive(request: Request) {
    this.status();
    if (this.active)
      throw new ConflictException('Já existe um teste em andamento.');
    if (request.headers['content-type'] !== 'application/octet-stream') {
      throw new BadRequestException('Envie application/octet-stream.');
    }
    const expected = Number(request.headers['content-length']);
    if (!Number.isSafeInteger(expected) || expected <= 0) {
      throw new BadRequestException('Informe Content-Length válido.');
    }
    if (expected > UPLOAD_TEST_MAX_BYTES)
      throw new PayloadTooLargeException('Limite do teste: 8 GB.');

    this.active = true;
    const start = performance.now();
    const timer = setTimeout(
      () => request.destroy(new Error('Tempo máximo de teste excedido.')),
      300_000,
    );
    try {
      // Nenhum Buffer.concat, arquivo temporário ou escrita no banco.
      const receivedBytes = await countUploadBytes(request, expected);
      const seconds = (performance.now() - start) / 1000;
      return {
        receivedBytes,
        seconds: Number(seconds.toFixed(2)),
        megabytesPerSecond: Number(
          (receivedBytes / 1_000_000 / Math.max(seconds, 0.001)).toFixed(2),
        ),
        stored: false,
      };
    } finally {
      clearTimeout(timer);
      this.active = false;
    }
  }
}
