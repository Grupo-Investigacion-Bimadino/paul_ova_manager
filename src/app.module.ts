import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContenidosModule } from './contenidos/contenidos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { OvasModule } from './ovas/ovas.module';

@Module({
  imports: [ContenidosModule, UsuariosModule, ComentariosModule, OvasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
