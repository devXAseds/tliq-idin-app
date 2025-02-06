import { Module } from '@nestjs/common';
import { MahdiLibService } from './mahdi-lib.service';

@Module({
  providers: [MahdiLibService],
  exports: [MahdiLibService],
})
export class MahdiLibModule {}
