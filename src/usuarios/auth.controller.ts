import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('register')
  async register(@Body() userData: any) {
    try {
      return await this.usuariosService.register(userData);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  async login(@Body() body: any) {
    console.log("Body recibido en login:", body);

    const { correo, contraseña } = body;

    if (!correo || !contraseña) {
      console.log("Correo o contraseña no proporcionados.");
      throw new HttpException('Correo y contraseña son requeridos', HttpStatus.BAD_REQUEST);
    }

    return this.usuariosService.login(correo, contraseña);
  }
}