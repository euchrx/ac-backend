import {
  BadRequestException,
  NotFoundException,
  PayloadTooLargeException,
} from '@nestjs/common';
import { Readable } from 'node:stream';
import {
  countUploadBytes,
  GalleryUploadTestService,
  UPLOAD_TEST_MAX_BYTES,
} from './gallery-upload-test.service';

describe('Teste de upload temporário', () => {
  it('fica desativado por padrão', () => {
    const previous = process.env.GALLERY_LARGE_UPLOAD_TEST;
    delete process.env.GALLERY_LARGE_UPLOAD_TEST;
    try {
      expect(() => new GalleryUploadTestService().status()).toThrow(
        NotFoundException,
      );
    } finally {
      if (previous === undefined) delete process.env.GALLERY_LARGE_UPLOAD_TEST;
      else process.env.GALLERY_LARGE_UPLOAD_TEST = previous;
    }
  });

  it('conta dados em fluxo sem acumulá-los', async () => {
    await expect(
      countUploadBytes(
        Readable.from([Buffer.alloc(1024), Buffer.alloc(2048)]),
        3072,
      ),
    ).resolves.toBe(3072);
  });

  it('detecta transferência truncada', async () => {
    await expect(
      countUploadBytes(Readable.from([Buffer.alloc(10)]), 11),
    ).rejects.toBeInstanceOf(BadRequestException);
  });

  it('rejeita excesso e suporta contagem de 8 GB sem alocar 8 GB', async () => {
    // Reutiliza um único bloco; valida o contador acima do limite de inteiros de 32 bits.
    const block = Buffer.alloc(1_000_000);
    async function* generate() {
      for (let i = 0; i < 8000; i++) yield block;
    }
    await expect(
      countUploadBytes(generate(), UPLOAD_TEST_MAX_BYTES),
    ).resolves.toBe(UPLOAD_TEST_MAX_BYTES);
    await expect(
      countUploadBytes(Readable.from([block, block]), 1_000_000),
    ).rejects.toBeInstanceOf(PayloadTooLargeException);
  });
});
