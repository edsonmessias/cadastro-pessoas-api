import { Injectable, NotFoundException } from '@nestjs/common';
import { Doacao, Usuario } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateDoacaoDto } from './update-doacao.dto';

@Injectable()
export class DoacaoService {
  constructor(private prisma: PrismaService) {}

  // cria o cadastro de uma doação
  async create(data: {
    codigo: number;
    descricao: string;
    status: string;
    doadorId: number;
    dataCadastro: Date;
  }): Promise<Doacao> {
    return this.prisma.doacao.create({
      data,
    });
  }

  // lista todas as doações cadastradas
  async listarDoacoes() {
    const doacao = await this.prisma.doacao.findMany({
      orderBy: {
        codigo: 'desc',
      },
      include: {
        doadorNome: {
          select: {
            nomeRazaoSocial: true,
            cpfCnpj: true,
            email: true,
            celular: true,
          },
        },
      },
    });

    if (!doacao) {
      throw new NotFoundException(`Nenhuma doação encontrada.`);
    }

    return doacao;
  }

  // lista apenas uma doação cadastrada pelo id
  async listarDoacaoPorId(id: number) {
    const doacao = await this.prisma.doacao.findUnique({
      where: { id },
      include: {
        doadorNome: {
          select: {
            nomeRazaoSocial: true,
            cpfCnpj: true,
            email: true,
            celular: true,
          },
        },
      },
    });

    if (!doacao) {
      throw new NotFoundException(`Doação com ID ${id} não encontrada.`);
    }

    return doacao;
  }

  // atualiza os dados de uma doação
  async atualizarDoacao(
    id: number,
    dados: UpdateDoacaoDto,
  ): Promise<{ dados: UpdateDoacaoDto }> {
    const doacao = await this.prisma.doacao.findUnique({
      where: { id },
    });

    if (!doacao) {
      throw new NotFoundException(`Doação com ID ${id} não encontrada.`);
    }

    await this.prisma.doacao.update({
      where: { id },
      data: { ...dados },
    });

    return { dados };
  }

  // deleta uma doação pelo id
  async deletarDoacao(id: number): Promise<{ message: string }> {
    const doacao = await this.prisma.doacao.findUnique({ where: { id } });

    if (!doacao) {
      throw new NotFoundException(`Doação com ID ${id} não encontrada.`);
    }

    await this.prisma.doacao.delete({ where: { id } });

    return { message: `Doação com ID ${id} deletada com sucesso.` };
  }
}
