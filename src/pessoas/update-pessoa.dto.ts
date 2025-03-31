import { IsEmail, IsOptional, IsString } from '@nestjs/class-validator';

export class UpdatePessoaDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  telefone?: string;
}
