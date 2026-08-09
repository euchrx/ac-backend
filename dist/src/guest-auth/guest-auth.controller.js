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
exports.GuestAuthController = void 0;
const common_1 = require("@nestjs/common");
const current_guest_decorator_1 = require("./decorators/current-guest.decorator");
const guest_access_dto_1 = require("./dto/guest-access.dto");
const update_attendance_dto_1 = require("./dto/update-attendance.dto");
const update_companions_dto_1 = require("./dto/update-companions.dto");
const update_guest_profile_dto_1 = require("./dto/update-guest-profile.dto");
const guest_auth_service_1 = require("./guest-auth.service");
const guest_auth_guard_1 = require("./guards/guest-auth.guard");
const companion_auth_guard_1 = require("./guards/companion-auth.guard");
const current_companion_decorator_1 = require("./decorators/current-companion.decorator");
let GuestAuthController = class GuestAuthController {
    guestAuthService;
    constructor(guestAuthService) {
        this.guestAuthService = guestAuthService;
    }
    access(dto) {
        return this.guestAuthService.access(dto);
    }
    getMe(guest) {
        return this.guestAuthService.getMe(guest.id);
    }
    getCompanionMe(companion) {
        return this.guestAuthService.getCompanionMe(companion.id);
    }
    updateProfile(guest, dto) {
        return this.guestAuthService.updateProfile(guest.id, dto);
    }
    updateAttendance(guest, dto) {
        return this.guestAuthService.updateAttendance(guest.id, dto);
    }
    updateCompanions(guest, dto) {
        return this.guestAuthService.updateCompanions(guest.id, dto);
    }
};
exports.GuestAuthController = GuestAuthController;
__decorate([
    (0, common_1.Post)('access'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [guest_access_dto_1.GuestAccessDto]),
    __metadata("design:returntype", void 0)
], GuestAuthController.prototype, "access", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(guest_auth_guard_1.GuestAuthGuard),
    __param(0, (0, current_guest_decorator_1.CurrentGuest)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GuestAuthController.prototype, "getMe", null);
__decorate([
    (0, common_1.Get)('companion/me'),
    (0, common_1.UseGuards)(companion_auth_guard_1.CompanionAuthGuard),
    __param(0, (0, current_companion_decorator_1.CurrentCompanion)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GuestAuthController.prototype, "getCompanionMe", null);
__decorate([
    (0, common_1.Patch)('profile'),
    (0, common_1.UseGuards)(guest_auth_guard_1.GuestAuthGuard),
    __param(0, (0, current_guest_decorator_1.CurrentGuest)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_guest_profile_dto_1.UpdateGuestProfileDto]),
    __metadata("design:returntype", void 0)
], GuestAuthController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('attendance'),
    (0, common_1.UseGuards)(guest_auth_guard_1.GuestAuthGuard),
    __param(0, (0, current_guest_decorator_1.CurrentGuest)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_attendance_dto_1.UpdateAttendanceDto]),
    __metadata("design:returntype", void 0)
], GuestAuthController.prototype, "updateAttendance", null);
__decorate([
    (0, common_1.Put)('companions'),
    (0, common_1.UseGuards)(guest_auth_guard_1.GuestAuthGuard),
    __param(0, (0, current_guest_decorator_1.CurrentGuest)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_companions_dto_1.UpdateCompanionsDto]),
    __metadata("design:returntype", void 0)
], GuestAuthController.prototype, "updateCompanions", null);
exports.GuestAuthController = GuestAuthController = __decorate([
    (0, common_1.Controller)('guest'),
    __metadata("design:paramtypes", [guest_auth_service_1.GuestAuthService])
], GuestAuthController);
//# sourceMappingURL=guest-auth.controller.js.map