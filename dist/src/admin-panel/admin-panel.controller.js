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
exports.AdminPanelController = void 0;
const common_1 = require("@nestjs/common");
const admin_auth_guard_1 = require("../admin-auth/guards/admin-auth.guard");
const admin_panel_service_1 = require("./admin-panel.service");
const admin_update_companions_dto_1 = require("./dto/admin-update-companions.dto");
const admin_update_guest_dto_1 = require("./dto/admin-update-guest.dto");
const create_gift_dto_1 = require("./dto/create-gift.dto");
const update_gift_dto_1 = require("./dto/update-gift.dto");
let AdminPanelController = class AdminPanelController {
    adminPanelService;
    constructor(adminPanelService) {
        this.adminPanelService = adminPanelService;
    }
    getDashboard() {
        return this.adminPanelService.getDashboard();
    }
    listGuests() {
        return this.adminPanelService.listGuests();
    }
    getGuest(guestId) {
        return this.adminPanelService.getGuest(guestId);
    }
    updateGuest(guestId, dto) {
        return this.adminPanelService.updateGuest(guestId, dto);
    }
    updateCompanions(guestId, dto) {
        return this.adminPanelService.updateCompanions(guestId, dto);
    }
    deleteGuest(guestId) {
        return this.adminPanelService.deleteGuest(guestId);
    }
    listGifts() {
        return this.adminPanelService.listGifts();
    }
    createGift(dto) {
        return this.adminPanelService.createGift(dto);
    }
    updateGift(giftId, dto) {
        return this.adminPanelService.updateGift(giftId, dto);
    }
    deleteGift(giftId) {
        return this.adminPanelService.deleteGift(giftId);
    }
    removeGuestChoice(guestId, giftId) {
        return this.adminPanelService.removeGuestChoice(guestId, giftId);
    }
};
exports.AdminPanelController = AdminPanelController;
__decorate([
    (0, common_1.Get)('dashboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminPanelController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('guests'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminPanelController.prototype, "listGuests", null);
__decorate([
    (0, common_1.Get)('guests/:guestId'),
    __param(0, (0, common_1.Param)('guestId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminPanelController.prototype, "getGuest", null);
__decorate([
    (0, common_1.Patch)('guests/:guestId'),
    __param(0, (0, common_1.Param)('guestId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, admin_update_guest_dto_1.AdminUpdateGuestDto]),
    __metadata("design:returntype", void 0)
], AdminPanelController.prototype, "updateGuest", null);
__decorate([
    (0, common_1.Put)('guests/:guestId/companions'),
    __param(0, (0, common_1.Param)('guestId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, admin_update_companions_dto_1.AdminUpdateCompanionsDto]),
    __metadata("design:returntype", void 0)
], AdminPanelController.prototype, "updateCompanions", null);
__decorate([
    (0, common_1.Delete)('guests/:guestId'),
    __param(0, (0, common_1.Param)('guestId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminPanelController.prototype, "deleteGuest", null);
__decorate([
    (0, common_1.Get)('gifts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminPanelController.prototype, "listGifts", null);
__decorate([
    (0, common_1.Post)('gifts'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gift_dto_1.CreateGiftDto]),
    __metadata("design:returntype", void 0)
], AdminPanelController.prototype, "createGift", null);
__decorate([
    (0, common_1.Patch)('gifts/:giftId'),
    __param(0, (0, common_1.Param)('giftId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gift_dto_1.UpdateGiftDto]),
    __metadata("design:returntype", void 0)
], AdminPanelController.prototype, "updateGift", null);
__decorate([
    (0, common_1.Delete)('gifts/:giftId'),
    __param(0, (0, common_1.Param)('giftId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminPanelController.prototype, "deleteGift", null);
__decorate([
    (0, common_1.Delete)('guests/:guestId/gifts/:giftId'),
    __param(0, (0, common_1.Param)('guestId')),
    __param(1, (0, common_1.Param)('giftId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdminPanelController.prototype, "removeGuestChoice", null);
exports.AdminPanelController = AdminPanelController = __decorate([
    (0, common_1.Controller)('admin'),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    __metadata("design:paramtypes", [admin_panel_service_1.AdminPanelService])
], AdminPanelController);
//# sourceMappingURL=admin-panel.controller.js.map