import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContenidosModule } from './contenidos/contenidos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { OvasModule } from './ovas/ovas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ContenidosModule, UsuariosModule, ComentariosModule, OvasModule,
      MongooseModule.forRoot('mongodb+srv://kmunozmora:ywKS8RXKur9sKb0n@cluster0.yuzpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
