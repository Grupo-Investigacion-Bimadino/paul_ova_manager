import { Module } from '@nestjs/common';
import { ContenidosService } from './contenidos.service';
import { ContenidosController } from './contenidos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contenidos,ContenidosSchema } from './schemas/contenidos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contenidos.name, schema: ContenidosSchema}])
  ],
  controllers: [ContenidosController],
  providers: [ContenidosService],
})
export class ContenidosModule {}
