import { Injectable } from '@nestjs/common';
import { CreateOvaDto } from './dto/create-ova.dto';
import { UpdateOvaDto } from './dto/update-ova.dto';

@Injectable()
export class OvasService {
  create(createOvaDto: CreateOvaDto) {
    return 'This action adds a new ova';
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
