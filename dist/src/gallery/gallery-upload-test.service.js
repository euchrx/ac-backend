"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryUploadTestService = exports.UPLOAD_TEST_MAX_BYTES = void 0;
exports.countUploadBytes = countUploadBytes;
const common_1 = require("@nestjs/common");
exports.UPLOAD_TEST_MAX_BYTES = 8_000_000_000;
async function countUploadBytes(source, expected) {
    let received = 0;
    for await (const chunk of source) {
        received += chunk.byteLength;
        if (received > exports.UPLOAD_TEST_MAX_BYTES || received > expected) {
            throw new common_1.PayloadTooLargeException('O teste excedeu o tamanho declarado.');
        }
    }
    if (received !== expected)
        throw new common_1.BadRequestException('Transferência incompleta.');
    return received;
}
let GalleryUploadTestService = class GalleryUploadTestService {
    active = false;
    status() {
        if (process.env.GALLERY_LARGE_UPLOAD_TEST !== 'true') {
            throw new common_1.NotFoundException('Teste de upload desativado.');
        }
        return {
            enabled: true,
            maxBytes: exports.UPLOAD_TEST_MAX_BYTES,
            storesData: false,
            active: this.active,
        };
    }
    async receive(request) {
        this.status();
        if (this.active)
            throw new common_1.ConflictException('Já existe um teste em andamento.');
        if (request.headers['content-type'] !== 'application/octet-stream') {
            throw new common_1.BadRequestException('Envie application/octet-stream.');
        }
        const expected = Number(request.headers['content-length']);
        if (!Number.isSafeInteger(expected) || expected <= 0) {
            throw new common_1.BadRequestException('Informe Content-Length válido.');
        }
        if (expected > exports.UPLOAD_TEST_MAX_BYTES)
            throw new common_1.PayloadTooLargeException('Limite do teste: 8 GB.');
        this.active = true;
        const start = performance.now();
        const timer = setTimeout(() => request.destroy(new Error('Tempo máximo de teste excedido.')), 300_000);
        try {
            const receivedBytes = await countUploadBytes(request, expected);
            const seconds = (performance.now() - start) / 1000;
            return {
                receivedBytes,
                seconds: Number(seconds.toFixed(2)),
                megabytesPerSecond: Number((receivedBytes / 1_000_000 / Math.max(seconds, 0.001)).toFixed(2)),
                stored: false,
            };
        }
        finally {
            clearTimeout(timer);
            this.active = false;
        }
    }
};
exports.GalleryUploadTestService = GalleryUploadTestService;
exports.GalleryUploadTestService = GalleryUploadTestService = __decorate([
    (0, common_1.Injectable)()
], GalleryUploadTestService);
//# sourceMappingURL=gallery-upload-test.service.js.map