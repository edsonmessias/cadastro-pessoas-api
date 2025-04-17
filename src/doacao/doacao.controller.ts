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
import { DoacaoService } from './doacao.service';
import { UpdateDoacaoDto } from './update-doacao.dto';

@Controller('doacao')
export class DoacaoController {
  constructor(private readonly doacaoService: DoacaoService) {}

  @Post('/cadastrar')
  async create(
    @Body()
    createDoacaoDto: {
      codigo: number;
      descricao: string;
      status: string;
      doadorId: number;
      dataCadastro: Date;
    },
  ) {
    return this.doacaoService.create(createDoacaoDto);
  }

  @Get('/listar')
  async listarDoacoes() {
    return this.doacaoService.listarDoacoes();
  }

  @Get('listar/:id')
  async listarDoacaoPorId(@Param('id', ParseIntPipe) id: number) {
    return this.doacaoService.listarDoacaoPorId(id);
  }

  @Put('atualizar/:id')
  async atualizarDoacao(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: UpdateDoacaoDto,
  ) {
    return this.doacaoService.atualizarDoacao(id, dados);
  }

  @Delete('deletar/:id')
  async deleteDoacao(@Param('id', ParseIntPipe) id: number) {
    return this.doacaoService.deletarDoacao(id);
  }
}
