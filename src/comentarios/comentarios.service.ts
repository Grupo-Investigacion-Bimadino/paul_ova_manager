import { Injectable } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comentarios } from './schemas/comentarios.schema';

@Injectable()
export class ComentariosService {
  constructor(@InjectModel(Comentarios.name) private comentariosModel: Model<Comentarios>) {}
  async create(createComentarioDto: CreateComentarioDto) {
    const createdComentarios = new this.comentariosModel(createComentarioDto);
    const result = await createdComentarios.save();
    return result;
  }

  findAll() {
    return `This action returns all comentarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comentario`;
  }

  update(id: number, updateComentarioDto: UpdateComentarioDto) {
    return `This action updates a #${id} comentario`;
  }

  remove(id: number) {
    return `This action removes a #${id} comentario`;
  }
}
