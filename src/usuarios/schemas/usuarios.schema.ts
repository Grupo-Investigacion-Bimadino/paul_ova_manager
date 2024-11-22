import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Usuarios extends Document {
  @Prop()
  id_contenidos: [];
}

export const UsuariosSchema = SchemaFactory.createForClass(Usuarios);