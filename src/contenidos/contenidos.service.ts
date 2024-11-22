import { Injectable } from '@nestjs/common';
import { CreateContenidoDto } from './dto/create-contenido.dto';
import { UpdateContenidoDto } from './dto/update-contenido.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contenidos } from './schemas/contenidos.schema';

@Injectable()
export class ContenidosService {
  constructor(@InjectModel(Contenidos.name) private contenidosModel: Model<Contenidos>) {}
  async create(createContenidoDto: CreateContenidoDto) {
    const createdContenidos = new this.contenidosModel(createContenidoDto);
    const result = await createdContenidos.save();
    return result;
  }

  findAll() {
    return `This action returns all contenidos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contenido`;
  }

  update(id: number, updateContenidoDto: UpdateContenidoDto) {
    return `This action updates a #${id} contenido`;
  }

  remove(id: number) {
    return `This action removes a #${id} contenido`;
  }
}
