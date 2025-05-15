import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Ovas extends Document {
  @Prop({ type: Number })
  id_elementos: number;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ type: String, required: true })
  id_autor: string;

  @Prop({ default: 'general' })
  categoria: string;

  @Prop({ required: true })
  ruta: string;

  @Prop({ required: true })
  formato: string;

  @Prop({ default: 0 })
  valoracion: number;

  @Prop({ type: [String], default: [] })
  id_contenido: string[];
}

export const OvasSchema = SchemaFactory.createForClass(Ovas);
