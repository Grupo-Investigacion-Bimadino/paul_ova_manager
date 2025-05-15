import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Ovas extends Document {
  @Prop() id_elementos: number;
  @Prop() nombre: string;
  @Prop() descripcion: string;
  @Prop() id_autor: string;
  @Prop() categoria: string;
  @Prop() ruta: string;
  @Prop() formato: string;
  @Prop({ default: () => new Date() }) fecha_subida: Date;
  @Prop() valoracion: number;
  @Prop() id_contenido: [];
}

export const OvasSchema = SchemaFactory.createForClass(Ovas);