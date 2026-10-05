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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryExportService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const node_events_1 = require("node:events");
const node_stream_1 = require("node:stream");
const archiver_1 = __importDefault(require("archiver"));
const prisma_service_1 = require("../prisma/prisma.service");
let GalleryExportService = class GalleryExportService {
    prisma;
    jwt;
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async ticket(adminId) {
        const count = await this.prisma.galleryPhoto.count();
        if (!count)
            throw new common_1.NotFoundException('Ainda não há fotos para baixar.');
        const ticket = await this.jwt.signAsync({ sub: adminId, type: 'gallery-export' }, { expiresIn: '60s' });
        return { ticket, count };
    }
    async download(ticket, response) {
        if (typeof ticket !== 'string' || ticket.length > 2048)
            throw new common_1.UnauthorizedException('Download não autorizado.');
        let payload;
        try {
            payload = await this.jwt.verifyAsync(ticket);
        }
        catch {
            throw new common_1.UnauthorizedException('Autorização expirada. Solicite o download novamente.');
        }
        if (payload.type !== 'gallery-export' || typeof payload.sub !== 'string')
            throw new common_1.UnauthorizedException('Download não autorizado.');
        const admin = await this.prisma.admin.findFirst({
            where: { id: payload.sub, active: true },
            select: { id: true },
        });
        if (!admin)
            throw new common_1.UnauthorizedException('Administrador inativo.');
        const photos = await this.prisma.galleryPhoto.findMany({
            orderBy: [{ createdAt: 'asc' }, { id: 'asc' }],
            select: { id: true, authorName: true, mimeType: true, createdAt: true },
        });
        if (!photos.length)
            throw new common_1.NotFoundException('Ainda não há fotos para baixar.');
        const archive = (0, archiver_1.default)('zip', { store: true, forceZip64: true });
        const abort = new AbortController();
        const stop = () => {
            abort.abort();
            archive.abort();
        };
        response.once('close', stop);
        archive.on('error', (error) => response.destroy(error));
        archive.on('warning', (error) => response.destroy(error));
        response.setHeader('Content-Type', 'application/zip');
        response.setHeader('Content-Disposition', `attachment; filename="ana-clara-fotos-${new Date().toISOString().slice(0, 10)}.zip"`);
        response.setHeader('Cache-Control', 'no-store');
        archive.pipe(response);
        try {
            for (const photo of photos) {
                if (abort.signal.aborted)
                    return;
                const name = photo.authorName
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .replace(/[^a-zA-Z0-9_-]/g, '-')
                    .slice(0, 50) || 'convidado';
                const extension = photo.mimeType === 'image/png'
                    ? 'png'
                    : photo.mimeType === 'image/webp'
                        ? 'webp'
                        : 'jpg';
                const prisma = this.prisma;
                const source = node_stream_1.Readable.from((async function* () {
                    const row = await prisma.galleryPhoto.findUnique({
                        where: { id: photo.id },
                        select: { imageData: true },
                    });
                    if (!row)
                        throw new Error('Uma foto foi removida durante o download. Solicite um novo ZIP.');
                    yield Buffer.from(row.imageData);
                })());
                source.on('error', (error) => response.destroy(error));
                const entry = (0, node_events_1.once)(archive, 'entry', { signal: abort.signal });
                const stopSource = () => source.destroy();
                abort.signal.addEventListener('abort', stopSource, { once: true });
                try {
                    archive.append(source, {
                        name: `${photo.createdAt.toISOString().slice(0, 10)}/${name}-${photo.id}.${extension}`,
                        date: photo.createdAt,
                    });
                    await entry;
                }
                finally {
                    abort.signal.removeEventListener('abort', stopSource);
                    source.destroy();
                }
            }
            await archive.finalize();
        }
        catch (error) {
            if (!response.destroyed)
                response.destroy(error instanceof Error ? error : new Error('Falha ao gerar ZIP.'));
        }
    }
};
exports.GalleryExportService = GalleryExportService;
exports.GalleryExportService = GalleryExportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], GalleryExportService);
//# sourceMappingURL=gallery-export.service.js.map