import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Contenidos extends Document {
  @Prop()
  id_ovas: [];

  @Prop()
  id_usuarios: [];

}

export const ContenidosSchema = SchemaFactory.createForClass(Contenidos);