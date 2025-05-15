import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContenidosModule } from './contenidos/contenidos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { OvasModule } from './ovas/ovas.module';
import { AuthController } from './usuarios/auth.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { Usuarios, UsuariosSchema } from './usuarios/schemas/usuarios.schema';

@Module({
  imports: [
    ContenidosModule,
    UsuariosModule,
    ComentariosModule,
    OvasModule,
    MongooseModule.forRoot('mongodb+srv://kmunozmora:ywKS8RXKur9sKb0n@cluster0.yuzpj.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Usuarios.name, schema: UsuariosSchema }])
  ],
  controllers: [AppController, AuthController, UsuariosController],
  providers: [AppService, UsuariosService],
})
export class AppModule {}
