import { Module } from '@nestjs/common';
import { OvasService } from './ovas.service';
import { OvasController } from './ovas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ovas,OvasSchema } from './schemas/ovas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ovas.name, schema: OvasSchema}])
  ],
  controllers: [OvasController],
  providers: [OvasService],
})
export class OvasModule {}
