import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OvasService } from './ovas.service';
import { CreateOvaDto } from './dto/create-ova.dto';
import { UpdateOvaDto } from './dto/update-ova.dto';

@Controller('ovas')
export class OvasController {
  constructor(private readonly ovasService: OvasService) {}

  @Post()
  create(@Body() createOvaDto: CreateOvaDto) {
    return this.ovasService.create(createOvaDto);
  }

  @Get()
  findAll() {
    return this.ovasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ovasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOvaDto: UpdateOvaDto) {
    return this.ovasService.update(id, updateOvaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ovasService.remove(id);
  }
}
