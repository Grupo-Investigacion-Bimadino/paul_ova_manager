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
  }));

  // ✅ Habilitar Body Parser para JSON
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // ✅ Sirve archivos estáticos desde la carpeta uploads
  app.useStaticAssets(join(__dirname, '..', 'uploads'));

  await app.listen(process.env.PORT ?? 3002);
}

bootstrap();
