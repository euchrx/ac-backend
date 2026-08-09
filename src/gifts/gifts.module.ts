import { Module } from '@nestjs/common';

import { GuestAuthModule } from '../guest-auth/guest-auth.module';
import { GiftsController } from './gifts.controller';
import { GiftsService } from './gifts.service';

@Module({
  imports: [GuestAuthModule],
  controllers: [GiftsController],
  providers: [GiftsService],
  exports: [GiftsService],
})
export class GiftsModule {}
