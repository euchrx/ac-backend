"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryModule = void 0;
const common_1 = require("@nestjs/common");
const gallery_controller_1 = require("./gallery.controller");
const gallery_service_1 = require("./gallery.service");
const admin_auth_module_1 = require("../admin-auth/admin-auth.module");
const gallery_admin_controller_1 = require("./gallery-admin.controller");
const gallery_export_controller_1 = require("./gallery-export.controller");
const gallery_export_service_1 = require("./gallery-export.service");
const gallery_upload_test_service_1 = require("./gallery-upload-test.service");
let GalleryModule = class GalleryModule {
};
exports.GalleryModule = GalleryModule;
exports.GalleryModule = GalleryModule = __decorate([
    (0, common_1.Module)({
        imports: [admin_auth_module_1.AdminAuthModule],
        controllers: [
            gallery_controller_1.GalleryController,
            gallery_admin_controller_1.GalleryAdminController,
            gallery_export_controller_1.GalleryExportController,
        ],
        providers: [gallery_service_1.GalleryService, gallery_export_service_1.GalleryExportService, gallery_upload_test_service_1.GalleryUploadTestService],
    })
], GalleryModule);
//# sourceMappingURL=gallery.module.js.map