import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Usuario } from '@prisma/client';
import { UpdateUsuarioDto } from './update-usuario.dto';
import { format } from 'path';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  // cria o cadastro de um usuário
  async create(data: {
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
    createdAt: Date;
  }): Promise<Usuario> {
    return this.prisma.usuario.create({
      data,
    });
  }

  // lista todas os usuários cadastrados
  async listarUsuarios() {
    return this.prisma.usuario.findMany({
      orderBy: { createdAt: 'desc' }, // Ordena pelo mais recente
    });
  }

  // lista apenas um usuário cadastrado pelo id
  async listarUsuarioPorId(id: number) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    return usuario;
  }

  // atualiza um usuario
  async atualizarUsuario(
    id: number,
    dados: UpdateUsuarioDto,
  ): Promise<{ dados: UpdateUsuarioDto }> {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    await this.prisma.usuario.update({
      where: { id },
      data: { ...dados, updatedAt: new Date() }, // Atualiza a data de modificação
    });

    return { dados };
  }

  // deleta um usuario
  async deletarUsuario(id: number): Promise<{ message: string }> {
    // Verifica se o usuário existe antes de deletar
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    await this.prisma.usuario.delete({ where: { id } });

    return { message: `Usuario com ID ${id} deletado com sucesso.` };
  }
}
