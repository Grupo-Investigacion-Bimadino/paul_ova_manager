import { PartialType } from '@nestjs/mapped-types';
import { CreateOvaDto } from './create-ova.dto';

export class UpdateOvaDto extends PartialType(CreateOvaDto) {}
