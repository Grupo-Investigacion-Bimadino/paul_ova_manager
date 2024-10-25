import { Module } from '@nestjs/common';
import { OvasService } from './ovas.service';
import { OvasController } from './ovas.controller';

@Module({
  controllers: [OvasController],
  providers: [OvasService],
})
export class OvasModule {}
