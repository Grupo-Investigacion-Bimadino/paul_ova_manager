import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Comentarios extends Document {
  @Prop()
  texto: string;

  @Prop()
  senderId: string;

  @Prop({ default: () => new Date() })
  fecha_creacion: Date;

  @Prop()
  estado: string;

  @Prop()
  id_ovas: number;

  @Prop()
  id_usuarios: number;

}

export const ComentariosSchema = SchemaFactory.createForClass(Comentarios);