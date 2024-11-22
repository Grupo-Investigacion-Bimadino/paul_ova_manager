import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuarios } from './schemas/usuarios.schema';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuarios.name) private usuariosModel: Model<Usuarios>) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    const createdUsuarios = new this.usuariosModel(createUsuarioDto);
    const result = await createdUsuarios.save();
    return result;
  }

  findAll() {
    return this.usuariosModel.find();
  }

  findOne(id: string) {
    return this.usuariosModel.findById(id)
  }

  async update(id: string, updateUsuariosDto: UpdateUsuarioDto) {
    try {
      const updateUsuarios = await this.usuariosModel.findByIdAndUpdate(id, updateUsuariosDto, {new:true});
      return updateUsuarios;
    }
    catch (e) {
      console.error(e)
    }
  }

 async remove(id: string) {
  try {
    const DeleteUsuarios = await this.usuariosModel.findByIdAndDelete(id);
    return DeleteUsuarios
  }
  catch(e){
    console.error(e)
  } 
}
}