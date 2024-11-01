import { Module } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comentarios,ComentariosSchema } from './schemas/comentarios.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comentarios.name, schema: ComentariosSchema}])
  ],
  controllers: [ComentariosController],
  providers: [ComentariosService],
})
export class ComentariosModule {}
