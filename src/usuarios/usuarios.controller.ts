import {
  Controller,
  Post,
  Body,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UpdateUsuarioDto } from './update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('/cadastrar')
  async create(
    @Body()
    createUsuarioDto: {
      tipoUsuario: string;
      nomeRazaoSocial: string;
      cpfCnpj: string;
      logradouro: string;
      numeroLogradouro: number;
      complemento: string;
      bairro: string;
      localidade: string;
      uf: string;
      cep: string;
      email: string;
      celular: string;
      senha: string;
    },
  ) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get('/listar')
  async listarUsuarios() {
    return this.usuariosService.listarUsuarios();
  }

  @Get('listar/:id')
  async listarUsuarioPorId(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.listarUsuarioPorId(id);
  }

  @Put('atualizar/:id')
  async atualizarUsuario(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: UpdateUsuarioDto,
  ) {
    return this.usuariosService.atualizarUsuario(id, dados);
  }

  @Delete('deletar/:id')
  async deleteUsuario(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.deletarUsuario(id);
  }
}
