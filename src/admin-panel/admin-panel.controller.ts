import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { AdminAuthGuard } from '../admin-auth/guards/admin-auth.guard';
import { AdminPanelService } from './admin-panel.service';
import { AdminUpdateCompanionsDto } from './dto/admin-update-companions.dto';
import { AdminUpdateGuestDto } from './dto/admin-update-guest.dto';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';

@Controller('admin')
@UseGuards(AdminAuthGuard)
export class AdminPanelController {
  constructor(private readonly adminPanelService: AdminPanelService) {}

  @Get('dashboard')
  getDashboard() {
    return this.adminPanelService.getDashboard();
  }

  @Get('guests')
  listGuests() {
    return this.adminPanelService.listGuests();
  }

  @Get('guests/:guestId')
  getGuest(@Param('guestId') guestId: string) {
    return this.adminPanelService.getGuest(guestId);
  }

  @Patch('guests/:guestId')
  updateGuest(
    @Param('guestId') guestId: string,
    @Body() dto: AdminUpdateGuestDto,
  ) {
    return this.adminPanelService.updateGuest(guestId, dto);
  }

  @Put('guests/:guestId/companions')
  updateCompanions(
    @Param('guestId') guestId: string,
    @Body() dto: AdminUpdateCompanionsDto,
  ) {
    return this.adminPanelService.updateCompanions(guestId, dto);
  }

  @Delete('guests/:guestId')
  deleteGuest(@Param('guestId') guestId: string) {
    return this.adminPanelService.deleteGuest(guestId);
  }

  @Get('gifts')
  listGifts() {
    return this.adminPanelService.listGifts();
  }

  @Post('gifts')
  createGift(@Body() dto: CreateGiftDto) {
    return this.adminPanelService.createGift(dto);
  }

  @Patch('gifts/:giftId')
  updateGift(@Param('giftId') giftId: string, @Body() dto: UpdateGiftDto) {
    return this.adminPanelService.updateGift(giftId, dto);
  }

  @Delete('gifts/:giftId')
  deleteGift(@Param('giftId') giftId: string) {
    return this.adminPanelService.deleteGift(giftId);
  }

  @Delete('guests/:guestId/gifts/:giftId')
  removeGuestChoice(
    @Param('guestId') guestId: string,
    @Param('giftId') giftId: string,
  ) {
    return this.adminPanelService.removeGuestChoice(guestId, giftId);
  }
}
