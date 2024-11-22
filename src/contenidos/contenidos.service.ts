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
    return this.contenidosModel.find();
  }

  findOne(id: string) {
    return this.contenidosModel.findById(id)
  }

  async update(id: string, updateContenidoDto: UpdateContenidoDto) {
    try {
      const updateContenidos = await this.contenidosModel.findByIdAndUpdate(id, updateContenidoDto, {new:true});
      return updateContenidos;
    }
    catch (e) {
      console.error(e)
    }
  }

 async remove(id: string) {
  try {
    const DeleteContenidos = await this.contenidosModel.findByIdAndDelete(id);
    return DeleteContenidos
  }
  catch(e){
    console.error(e)
  }

 
}
}