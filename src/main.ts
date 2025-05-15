import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // ✅ Habilitar CORS
  app.use(cors({
    origin: 'http://localhost:3000', // Asegúrate que esta URL coincide con tu frontend
    credentials: true,
  }));

  // ✅ Habilitar Body Parser para JSON y URL Encoded
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // ✅ Sirve archivos estáticos desde la carpeta "uploads"
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',  // Esto permitirá acceder a los archivos usando /uploads/nombre_del_archivo.ext
  });

  // ✅ Iniciar servidor en el puerto definido en las variables de entorno o en el puerto 3002
  const PORT = process.env.PORT ?? 3002;
  await app.listen(PORT);
  console.log(`🚀 Servidor backend escuchando en http://localhost:${PORT}`);
}

bootstrap();
