import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Usuarios extends Document {

  @Prop({ required: true })
  nombre_usuario: string;

  @Prop({ unique: true, required: true })
  correo: string;

  @Prop({ required: true })
  contraseña: string;

  @Prop({ enum: ['DOCENTE', 'ESTUDIANTE', 'ADMINISTRADOR', 'INVITADO'], default: 'INVITADO' })
  rol: string;

  @Prop({ default: 'activo' })
  estado: string;

  @Prop()
  imagen?: string;

  @Prop({ default: Date.now })
  creado_en: Date;

  @Prop({ default: Date.now })
  actualizado_en: Date;
}

export const UsuariosSchema = SchemaFactory.createForClass(Usuarios);