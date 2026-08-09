import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { CurrentGuest } from './decorators/current-guest.decorator';
import { GuestAccessDto } from './dto/guest-access.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { UpdateCompanionsDto } from './dto/update-companions.dto';
import { UpdateGuestProfileDto } from './dto/update-guest-profile.dto';
import { GuestAuthService } from './guest-auth.service';
import { GuestAuthGuard } from './guards/guest-auth.guard';
import { CompanionAuthGuard } from './guards/companion-auth.guard';
import { CurrentCompanion } from './decorators/current-companion.decorator';
import type { AuthenticatedCompanion } from './interfaces/authenticated-companion.interface';
import type { AuthenticatedGuest } from './interfaces/authenticated-guest.interface';

@Controller('guest')
export class GuestAuthController {
  constructor(private readonly guestAuthService: GuestAuthService) {}

  @Post('access')
  access(@Body() dto: GuestAccessDto) {
    return this.guestAuthService.access(dto);
  }

  @Get('me')
  @UseGuards(GuestAuthGuard)
  getMe(@CurrentGuest() guest: AuthenticatedGuest) {
    return this.guestAuthService.getMe(guest.id);
  }

  @Get('companion/me')
  @UseGuards(CompanionAuthGuard)
  getCompanionMe(@CurrentCompanion() companion: AuthenticatedCompanion) {
    return this.guestAuthService.getCompanionMe(companion.id);
  }

  @Patch('profile')
  @UseGuards(GuestAuthGuard)
  updateProfile(
    @CurrentGuest() guest: AuthenticatedGuest,
    @Body() dto: UpdateGuestProfileDto,
  ) {
    return this.guestAuthService.updateProfile(guest.id, dto);
  }

  @Patch('attendance')
  @UseGuards(GuestAuthGuard)
  updateAttendance(
    @CurrentGuest() guest: AuthenticatedGuest,
    @Body() dto: UpdateAttendanceDto,
  ) {
    return this.guestAuthService.updateAttendance(guest.id, dto);
  }

  @Put('companions')
  @UseGuards(GuestAuthGuard)
  updateCompanions(
    @CurrentGuest() guest: AuthenticatedGuest,
    @Body() dto: UpdateCompanionsDto,
  ) {
    return this.guestAuthService.updateCompanions(guest.id, dto);
  }
}
