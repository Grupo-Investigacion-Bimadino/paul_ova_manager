import { Injectable } from '@nestjs/common';
import { CreateOvaDto } from './dto/create-ova.dto';
import { UpdateOvaDto } from './dto/update-ova.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ovas } from './schemas/ovas.schema';

@Injectable()
export class OvasService {
  constructor(@InjectModel(Ovas.name) private ovasModel: Model<Ovas>) {}
  async create(createOvaDto: CreateOvaDto) {
    const createdOvas = new this.ovasModel(createOvaDto);
    const result = await createdOvas.save();
    return result;
  }
  
  findAll() {
    return `This action returns all ovas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ova`;
  }

  update(id: number, updateOvaDto: UpdateOvaDto) {
    return `This action updates a #${id} ova`;
  }

  remove(id: number) {
    return `This action removes a #${id} ova`;
  }
}
