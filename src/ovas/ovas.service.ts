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
    return this.ovasModel.find();
  }

  findOne(id: string) {
    return this.ovasModel.findById(id)
  }

  async update(id: string, updateOvasDto: UpdateOvaDto) {
    try {
      const updateOvas = await this.ovasModel.findByIdAndUpdate(id, updateOvasDto, {new:true});
      return updateOvas;
    }
    catch (e) {
      console.error(e)
    }
  }

 async remove(id: string) {
  try {
    const DeleteOvas = await this.ovasModel.findByIdAndDelete(id);
    return DeleteOvas
  }
  catch(e){
    console.error(e)
  } 
}
}