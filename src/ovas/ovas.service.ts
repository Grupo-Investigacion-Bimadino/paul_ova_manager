import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ovas } from './schemas/ovas.schema';

@Injectable()
export class OvasService {
  constructor(@InjectModel(Ovas.name) private ovasModel: Model<Ovas>) {}

  /**
   * ✅ Crear un nuevo REDA
   */
  async create(data: Partial<Ovas>) {
    try {
      const created = new this.ovasModel(data);
      return await created.save();
    } catch (error) {
      console.error('Error al crear el REDA:', error);
      throw error;
    }
  }

  /**
   * ✅ Obtener todos los REDAs
   */
  async findAll() {
    try {
      return await this.ovasModel.find().exec();
    } catch (error) {
      console.error('Error al obtener los REDAs:', error);
      throw error;
    }
  }

  /**
   * ✅ Obtener REDAs por autor
   */
  async findByAuthor(authorId: string) {
    try {
      return await this.ovasModel.find({ id_autor: authorId }).exec();
    } catch (error) {
      console.error('Error al obtener los REDAs por autor:', error);
      throw error;
    }
  }

  /**
   * ✅ Actualizar un REDA
   * Permite modificar los detalles de un REDA
   */
  async update(id: string, updateData: Partial<Ovas>) {
    try {
      const updatedReda = await this.ovasModel.findByIdAndUpdate(id, updateData, { new: true });
      return updatedReda;
    } catch (error) {
      console.error('Error al actualizar el REDA:', error);
      throw error;
    }
  }
}

