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
exports.GalleryExportController = void 0;
const common_1 = require("@nestjs/common");
const gallery_export_service_1 = require("./gallery-export.service");
let GalleryExportController = class GalleryExportController {
    galleryExport;
    constructor(galleryExport) {
        this.galleryExport = galleryExport;
    }
    download(ticket, response) {
        return this.galleryExport.download(ticket, response);
    }
};
exports.GalleryExportController = GalleryExportController;
__decorate([
    (0, common_1.Post)('export'),
    __param(0, (0, common_1.Body)('ticket')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GalleryExportController.prototype, "download", null);
exports.GalleryExportController = GalleryExportController = __decorate([
    (0, common_1.Controller)('gallery'),
    __metadata("design:paramtypes", [gallery_export_service_1.GalleryExportService])
], GalleryExportController);
//# sourceMappingURL=gallery-export.controller.js.map