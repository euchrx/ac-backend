import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { CurrentGuest } from '../guest-auth/decorators/current-guest.decorator';
import { GuestAuthGuard } from '../guest-auth/guards/guest-auth.guard';
import { CompanionAuthGuard } from '../guest-auth/guards/companion-auth.guard';
import { CurrentCompanion } from '../guest-auth/decorators/current-companion.decorator';
import type { AuthenticatedCompanion } from '../guest-auth/interfaces/authenticated-companion.interface';
import type { AuthenticatedGuest } from '../guest-auth/interfaces/authenticated-guest.interface';
import { GiftsService } from './gifts.service';

@Controller()
export class GiftsController {
  constructor(private readonly giftsService: GiftsService) {}

  @Get('gifts')
  listActiveGifts() {
    return this.giftsService.listActiveGifts();
  }

  @Get('guest/gifts')
  @UseGuards(GuestAuthGuard)
  listGuestChoices(@CurrentGuest() guest: AuthenticatedGuest) {
    return this.giftsService.listGuestChoices(guest.id);
  }

  @Post('guest/gifts/:giftId')
  @UseGuards(GuestAuthGuard)
  chooseGift(
    @CurrentGuest() guest: AuthenticatedGuest,
    @Param('giftId') giftId: string,
  ) {
    return this.giftsService.chooseGift(guest.id, giftId);
  }

  @Delete('guest/gifts/:giftId')
  @UseGuards(GuestAuthGuard)
  removeGiftChoice(
    @CurrentGuest() guest: AuthenticatedGuest,
    @Param('giftId') giftId: string,
  ) {
    return this.giftsService.removeGiftChoice(guest.id, giftId);
  }

  @Post('companion/gifts/:giftId')
  @UseGuards(CompanionAuthGuard)
  chooseCompanionGift(
    @CurrentCompanion() companion: AuthenticatedCompanion,
    @Param('giftId') giftId: string,
  ) {
    return this.giftsService.chooseCompanionGift(companion.id, giftId);
  }

  @Delete('companion/gifts/:giftId')
  @UseGuards(CompanionAuthGuard)
  removeCompanionGift(
    @CurrentCompanion() companion: AuthenticatedCompanion,
    @Param('giftId') giftId: string,
  ) {
    return this.giftsService.removeCompanionGift(companion.id, giftId);
  }
}
