"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const node_crypto_1 = require("node:crypto");
const supportedSignatures = {
    'image/jpeg': (buffer) => buffer[0] === 0xff && buffer[1] === 0xd8,
    'image/png': (buffer) => buffer
        .subarray(0, 8)
        .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])),
    'image/webp': (buffer) => buffer.subarray(0, 4).toString() === 'RIFF' &&
        buffer.subarray(8, 12).toString() === 'WEBP',
};
let GalleryService = class GalleryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    ownerHash(token) {
        if (!token || !/^[a-f0-9]{64}$/.test(token)) {
            throw new common_1.BadRequestException('Identificação da galeria inválida.');
        }
        return (0, node_crypto_1.createHash)('sha256').update(token).digest('hex');
    }
    async remove(id, token) {
        const result = await this.prisma.galleryPhoto.deleteMany({
            where: { id, ownerHash: this.ownerHash(token) },
        });
        if (!result.count)
            throw new common_1.NotFoundException('Publicação não encontrada ou não pertence a você.');
        return { deleted: true };
    }
    async removeAsAdmin(id) {
        const result = await this.prisma.galleryPhoto.deleteMany({ where: { id } });
        if (!result.count)
            throw new common_1.NotFoundException('Foto não encontrada.');
        return { deleted: true };
    }
    async list(token) {
        return this.prisma.galleryPhoto.findMany({
            where: token === undefined ? undefined : { ownerHash: this.ownerHash(token) },
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                authorName: true,
                caption: true,
                createdAt: true,
            },
        });
    }
    async create(file, authorName, caption, token) {
        if (!file)
            throw new common_1.BadRequestException('Selecione uma foto para publicar.');
        const signatureMatches = supportedSignatures[file.mimetype];
        if (!signatureMatches || !signatureMatches(file.buffer)) {
            throw new common_1.BadRequestException('Envie uma imagem JPG, PNG ou WebP válida.');
        }
        const cleanName = authorName?.trim();
        if (!cleanName || cleanName.length > 60) {
            throw new common_1.BadRequestException('Informe seu nome com até 60 caracteres.');
        }
        const cleanCaption = caption?.trim() || null;
        if (cleanCaption && cleanCaption.length > 180) {
            throw new common_1.BadRequestException('A legenda deve ter até 180 caracteres.');
        }
        return this.prisma.galleryPhoto.create({
            data: {
                ownerHash: this.ownerHash(token),
                authorName: cleanName,
                caption: cleanCaption,
                mimeType: file.mimetype,
                imageData: Uint8Array.from(file.buffer),
                originalName: file.originalname.slice(0, 180),
            },
            select: { id: true, authorName: true, caption: true, createdAt: true },
        });
    }
    async image(id) {
        const photo = await this.prisma.galleryPhoto.findUnique({
            where: { id },
            select: { imageData: true, mimeType: true },
        });
        if (!photo)
            throw new common_1.NotFoundException('Foto não encontrada.');
        return photo;
    }
};
exports.GalleryService = GalleryService;
exports.GalleryService = GalleryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GalleryService);
//# sourceMappingURL=gallery.service.js.map