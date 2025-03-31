import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pessoa } from '@prisma/client';
import { UpdatePessoaDto } from './update-pessoa.dto';

@Injectable()
export class PessoasService {
  constructor(private prisma: PrismaService) {}

  // cria o cadastro de uma pessoa
  async create(data: {
    nome: string;
    email: string;
    telefone: string;
  }): Promise<Pessoa> {
    return this.prisma.pessoa.create({
      data,
    });
  }

  // lista todas as pessoas cadastradas
  async listarPessoas() {
    return this.prisma.pessoa.findMany({
      orderBy: { createdAt: 'desc' }, // Ordena pelo mais recente
    });
  }

  // lista apenas uma pessoa cadastrada pelo id
  async listarPessoaPorId(id: number) {
    const pessoa = await this.prisma.pessoa.findUnique({ where: { id } });

    if (!pessoa) {
      throw new NotFoundException(`Pessoa com ID ${id} não encontrada.`);
    }

    return pessoa;
  }

  // atualiza uma pessoa
  async atualizarPessoa(
    id: number,
    dados: UpdatePessoaDto,
  ): Promise<{ dados: UpdatePessoaDto }> {
    const pessoa = await this.prisma.pessoa.findUnique({ where: { id } });

    if (!pessoa) {
      throw new NotFoundException(`Pessoa com ID ${id} não encontrada.`);
    }

    await this.prisma.pessoa.update({
      where: { id },
      data: { ...dados, updatedAt: new Date() }, // Atualiza a data de modificação
    });

    return { dados };
  }

  // deleta uma pessoa
  async deletePessoa(id: number): Promise<{ message: string }> {
    // Verifica se a pessoa existe antes de deletar
    const pessoa = await this.prisma.pessoa.findUnique({ where: { id } });

    if (!pessoa) {
      throw new NotFoundException(`Pessoa com ID ${id} não encontrada.`);
    }

    await this.prisma.pessoa.delete({ where: { id } });

    return { message: `Pessoa com ID ${id} deletada com sucesso.` };
  }
}
