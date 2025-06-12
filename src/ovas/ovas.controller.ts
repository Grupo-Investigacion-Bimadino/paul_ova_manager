import { Express } from 'express';
import { 
  Controller, 
  Post, 
  Get, 
  Body, 
  UploadedFile, 
  UseInterceptors, 
  Param, 
  Patch 
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

import { OvasService } from './ovas.service';

@Controller('ovas')
export class OvasController {
  constructor(private readonly ovasService: OvasService) {}

  // ✅ Subir REDA
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const name = file.originalname.split('.')[0];
        const ext = extname(file.originalname);
        cb(null, `${name}-${Date.now()}${ext}`);
      }
    })
  }))
  async uploadReda(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any
  ) {
    return this.ovasService.create({
      nombre: body.title,
      descripcion: body.description,
      id_autor: body.author,
      categoria: body.categoria || 'general',
      ruta: file.filename,
      formato: file.mimetype,
      valoracion: 0,
      id_contenido: []
    });
  }

  // ✅ Obtener todos los REDAs (para los estudiantes)
  @Get()
  async findAll() {
    const ovas = await this.ovasService.findAll();
    ovas.forEach(ova => {
      ova.ruta = `http://localhost:3002/uploads/${ova.ruta}`;
    });
    return ovas;
  }

  // ✅ Obtener REDAs por autor (por ejemplo, por docente específico)
  @Get('author/:authorId')
  async findByAuthor(@Param('authorId') authorId: string) {
    return this.ovasService.findByAuthor(authorId);
  }

  // ✅ Actualizar REDA
  @Patch(':id')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const name = file.originalname.split('.')[0];
        const ext = extname(file.originalname);
        cb(null, `${name}-${Date.now()}${ext}`);
      }
    })
  }))
  async updateReda(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any
  ) {
    // Si el archivo no se ha subido, mantenemos el archivo existente
    const updatedData = {
      nombre: body.title,
      descripcion: body.description,
      id_autor: body.author,
      categoria: body.categoria || 'general',
      ruta: file ? file.filename : body.ruta,  // Mantener la ruta anterior si no se sube un nuevo archivo
      formato: file ? file.mimetype : body.formato, // Mantener el formato anterior si no se sube un nuevo archivo
      valoracion: body.valoracion || 0
    };

    return this.ovasService.update(id, updatedData);
  }
}
