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
exports.GiftsController = void 0;
const common_1 = require("@nestjs/common");
const current_guest_decorator_1 = require("../guest-auth/decorators/current-guest.decorator");
const guest_auth_guard_1 = require("../guest-auth/guards/guest-auth.guard");
const companion_auth_guard_1 = require("../guest-auth/guards/companion-auth.guard");
const current_companion_decorator_1 = require("../guest-auth/decorators/current-companion.decorator");
const gifts_service_1 = require("./gifts.service");
let GiftsController = class GiftsController {
    giftsService;
    constructor(giftsService) {
        this.giftsService = giftsService;
    }
    listActiveGifts() {
        return this.giftsService.listActiveGifts();
    }
    listGuestChoices(guest) {
        return this.giftsService.listGuestChoices(guest.id);
    }
    chooseGift(guest, giftId) {
        return this.giftsService.chooseGift(guest.id, giftId);
    }
    removeGiftChoice(guest, giftId) {
        return this.giftsService.removeGiftChoice(guest.id, giftId);
    }
    chooseCompanionGift(companion, giftId) {
        return this.giftsService.chooseCompanionGift(companion.id, giftId);
    }
    removeCompanionGift(companion, giftId) {
        return this.giftsService.removeCompanionGift(companion.id, giftId);
    }
};
exports.GiftsController = GiftsController;
__decorate([
    (0, common_1.Get)('gifts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GiftsController.prototype, "listActiveGifts", null);
__decorate([
    (0, common_1.Get)('guest/gifts'),
    (0, common_1.UseGuards)(guest_auth_guard_1.GuestAuthGuard),
    __param(0, (0, current_guest_decorator_1.CurrentGuest)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GiftsController.prototype, "listGuestChoices", null);
__decorate([
    (0, common_1.Post)('guest/gifts/:giftId'),
    (0, common_1.UseGuards)(guest_auth_guard_1.GuestAuthGuard),
    __param(0, (0, current_guest_decorator_1.CurrentGuest)()),
    __param(1, (0, common_1.Param)('giftId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GiftsController.prototype, "chooseGift", null);
__decorate([
    (0, common_1.Delete)('guest/gifts/:giftId'),
    (0, common_1.UseGuards)(guest_auth_guard_1.GuestAuthGuard),
    __param(0, (0, current_guest_decorator_1.CurrentGuest)()),
    __param(1, (0, common_1.Param)('giftId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GiftsController.prototype, "removeGiftChoice", null);
__decorate([
    (0, common_1.Post)('companion/gifts/:giftId'),
    (0, common_1.UseGuards)(companion_auth_guard_1.CompanionAuthGuard),
    __param(0, (0, current_companion_decorator_1.CurrentCompanion)()),
    __param(1, (0, common_1.Param)('giftId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GiftsController.prototype, "chooseCompanionGift", null);
__decorate([
    (0, common_1.Delete)('companion/gifts/:giftId'),
    (0, common_1.UseGuards)(companion_auth_guard_1.CompanionAuthGuard),
    __param(0, (0, current_companion_decorator_1.CurrentCompanion)()),
    __param(1, (0, common_1.Param)('giftId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GiftsController.prototype, "removeCompanionGift", null);
exports.GiftsController = GiftsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [gifts_service_1.GiftsService])
], GiftsController);
//# sourceMappingURL=gifts.controller.js.map