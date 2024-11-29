import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Usuarios extends Document {
  @Prop()
  id_contenidos: [];

  @Prop()
    nombre_usuario: string;

  @Prop({ unique: [true, 'Email already exists'] })
    correo: string;

  @Prop()
    contraseña: string;

  @Prop({default: 'guest'})
    rol: string;

  @Prop()
    estado: string;

  @Prop()
    creado_en: Date;

  @Prop()
    imagen: string;

  @Prop()
    actualizado_en: Date;
    
}



export const UsuariosSchema = SchemaFactory.createForClass(Usuarios);