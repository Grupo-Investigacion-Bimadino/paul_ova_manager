import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ovas } from './schemas/ovas.schema';

@Injectable()
export class OvasService {
  constructor(@InjectModel(Ovas.name) private ovasModel: Model<Ovas>) {}

  async create(data: Partial<Ovas>) {
    const created = new this.ovasModel(data);
    return created.save();
  }

  async findAll() {
    return this.ovasModel.find();
  }
}