import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Módulos
import { ContenidosModule } from './contenidos/contenidos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { OvasModule } from './ovas/ovas.module';

// Controladores
import { AuthController } from './usuarios/auth.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { OvasController } from './ovas/ovas.controller';

// Servicios
import { UsuariosService } from './usuarios/usuarios.service';
import { OvasService } from './ovas/ovas.service';

// Esquemas
import { Usuarios, UsuariosSchema } from './usuarios/schemas/usuarios.schema';
import { Ovas, OvasSchema } from './ovas/schemas/ovas.schema';

@Module({
  imports: [
    ContenidosModule,
    UsuariosModule,
    ComentariosModule,
    OvasModule,
    MongooseModule.forRoot('mongodb+srv://kmunozmora:ywKS8RXKur9sKb0n@cluster0.yuzpj.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([
      { name: Usuarios.name, schema: UsuariosSchema },
      { name: Ovas.name, schema: OvasSchema }
    ]),
  ],
  controllers: [
    AppController,
    AuthController,
    UsuariosController,
    OvasController,
  ],
  providers: [
    AppService,
    UsuariosService,
    OvasService,
  ],
})
export class AppModule {}
