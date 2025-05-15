import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuarios } from './schemas/usuarios.schema';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuarios.name) private usuariosModel: Model<Usuarios>) {}

  // ✅ Registro
  async register(userData: Partial<Usuarios>) {
    const { correo, contraseña } = userData;

    const existingUser = await this.usuariosModel.findOne({ correo });
    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const newUser = new this.usuariosModel({
      ...userData,
      contraseña: hashedPassword,
      creado_en: new Date(),
      actualizado_en: new Date()
    });

    return await newUser.save();
  }

  // ✅ Login
  async login(correo: string, contraseña: string) {
    console.log("Correo recibido en login:", correo);
    console.log("Contraseña recibida en login:", contraseña);

    const user = await this.usuariosModel.findOne({ correo });

    if (!user) {
      console.log("Usuario no encontrado.");
      throw new HttpException('Correo o contraseña incorrectos', HttpStatus.UNAUTHORIZED);
    }

    console.log("Contraseña almacenada (hash) en DB:", user.contraseña);

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
    console.log("¿Contraseña válida?:", isPasswordValid);

    if (!isPasswordValid) {
      console.log("Contraseña incorrecta.");
      throw new HttpException('Correo o contraseña incorrectos', HttpStatus.UNAUTHORIZED);
    }

    console.log("Login exitoso. Usuario:", user.nombre_usuario);

    // No devolver el campo `contraseña`
    return {
      _id: user._id,
      nombre_usuario: user.nombre_usuario,
      correo: user.correo,
      rol: user.rol
    };
  }

  // ✅ Obtener todos los usuarios
  async findAll() {
    try {
      return await this.usuariosModel.find({}, { contraseña: 0 }); // No devolver la contraseña
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      throw new HttpException('Error al obtener los usuarios', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // ✅ Obtener un usuario por ID
  async findOne(id: string) {
    try {
      const user = await this.usuariosModel.findById(id, { contraseña: 0 });
      if (!user) {
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }
      return user;
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      throw new HttpException('Error al obtener el usuario', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // ✅ Actualizar usuario
  async update(id: string, updateData: Partial<Usuarios>) {
    try {
      const updatedUser = await this.usuariosModel.findByIdAndUpdate(id, updateData, { new: true, select: '-contraseña' });
      if (!updatedUser) {
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }
      return updatedUser;
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      throw new HttpException('Error al actualizar el usuario', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // ✅ Eliminar usuario
  async remove(id: string) {
    try {
      const deletedUser = await this.usuariosModel.findByIdAndDelete(id);
      if (!deletedUser) {
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }
      return {
        message: 'Usuario eliminado',
        usuario: deletedUser.nombre_usuario
      };
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      throw new HttpException('Error al eliminar el usuario', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}


