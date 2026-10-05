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
exports.GalleryAdminController = void 0;
const common_1 = require("@nestjs/common");
const current_admin_decorator_1 = require("../admin-auth/decorators/current-admin.decorator");
const gallery_export_service_1 = require("./gallery-export.service");
const admin_auth_guard_1 = require("../admin-auth/guards/admin-auth.guard");
const gallery_service_1 = require("./gallery.service");
const gallery_upload_test_service_1 = require("./gallery-upload-test.service");
let GalleryAdminController = class GalleryAdminController {
    gallery;
    galleryExport;
    uploadTest;
    constructor(gallery, galleryExport, uploadTest) {
        this.gallery = gallery;
        this.galleryExport = galleryExport;
        this.uploadTest = uploadTest;
    }
    uploadTestStatus() {
        return this.uploadTest.status();
    }
    testLargeUpload(request) {
        return this.uploadTest.receive(request);
    }
    exportTicket(admin) {
        return this.galleryExport.ticket(admin.id);
    }
    access() {
        return { authorized: true };
    }
    remove(id) {
        return this.gallery.removeAsAdmin(id);
    }
};
exports.GalleryAdminController = GalleryAdminController;
__decorate([
    (0, common_1.Get)('upload-test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GalleryAdminController.prototype, "uploadTestStatus", null);
__decorate([
    (0, common_1.Post)('upload-test'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GalleryAdminController.prototype, "testLargeUpload", null);
__decorate([
    (0, common_1.Post)('export-ticket'),
    __param(0, (0, current_admin_decorator_1.CurrentAdmin)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GalleryAdminController.prototype, "exportTicket", null);
__decorate([
    (0, common_1.Get)('access'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GalleryAdminController.prototype, "access", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GalleryAdminController.prototype, "remove", null);
exports.GalleryAdminController = GalleryAdminController = __decorate([
    (0, common_1.Controller)('admin/gallery'),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    __metadata("design:paramtypes", [gallery_service_1.GalleryService,
        gallery_export_service_1.GalleryExportService,
        gallery_upload_test_service_1.GalleryUploadTestService])
], GalleryAdminController);
//# sourceMappingURL=gallery-admin.controller.js.map