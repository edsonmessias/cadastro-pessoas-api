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
import { PessoasService } from './pessoas.service';
import { UpdatePessoaDto } from './update-pessoa.dto';

@Controller('pessoas')
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService) {}

  @Post('/add')
  async create(
    @Body() createPessoaDto: { nome: string; email: string; telefone: string },
  ) {
    return this.pessoasService.create(createPessoaDto);
  }

  @Get('/list')
  async listarPessoas() {
    return this.pessoasService.listarPessoas();
  }

  @Get('list/:id')
  async listarPessoaPorId(@Param('id', ParseIntPipe) id: number) {
    return this.pessoasService.listarPessoaPorId(id);
  }

  @Put('update/:id')
  async atualizarPessoa(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: UpdatePessoaDto,
  ) {
    return this.pessoasService.atualizarPessoa(id, dados);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.pessoasService.deletePessoa(id);
  }
}
