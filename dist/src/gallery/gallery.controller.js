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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const gallery_service_1 = require("./gallery.service");
let GalleryController = class GalleryController {
    galleryService;
    constructor(galleryService) {
        this.galleryService = galleryService;
    }
    list() {
        return this.galleryService.list();
    }
    mine(token) {
        return this.galleryService.list(token || '');
    }
    remove(id, token) {
        return this.galleryService.remove(id, token);
    }
    create(file, authorName, caption, token) {
        return this.galleryService.create(file, authorName, caption, token);
    }
    async image(id, response) {
        const photo = await this.galleryService.image(id);
        response.setHeader('Content-Type', photo.mimeType);
        response.setHeader('Cache-Control', 'no-store');
        response.send(Buffer.from(photo.imageData));
    }
};
exports.GalleryController = GalleryController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Header)('Cache-Control', 'no-store'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GalleryController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('mine'),
    (0, common_1.Header)('Cache-Control', 'no-store'),
    __param(0, (0, common_1.Headers)('x-gallery-owner')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GalleryController.prototype, "mine", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('x-gallery-owner')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], GalleryController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo', { limits: { fileSize: 8 * 1024 * 1024 } })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('authorName')),
    __param(2, (0, common_1.Body)('caption')),
    __param(3, (0, common_1.Headers)('x-gallery-owner')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], GalleryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id/image'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "image", null);
exports.GalleryController = GalleryController = __decorate([
    (0, common_1.Controller)('gallery'),
    __metadata("design:paramtypes", [gallery_service_1.GalleryService])
], GalleryController);
//# sourceMappingURL=gallery.controller.js.map