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
    return this.comentariosModel.find();
  }

  findOne(id: string) {
    return this.comentariosModel.findById(id)
  }

  async update(id: string, updateComentariosDto: UpdateComentarioDto) {
    try {
      const UpdateComentario = await this.comentariosModel.findByIdAndUpdate(id, updateComentariosDto, {new:true});
      return UpdateComentario;
    }
    catch (e) {
      console.error(e)
    }
  }

 async remove(id: string) {
  try {
    const DeleteComentarios = await this.comentariosModel.findByIdAndDelete(id);
    return DeleteComentarios
  }
  catch(e){
    console.error(e)
  }
}
}