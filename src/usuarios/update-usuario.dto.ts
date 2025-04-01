import { IsEmail, IsOptional, IsString } from '@nestjs/class-validator';

export class UpdateUsuarioDto {
  @IsOptional()
  @IsString()
  tipoUsuario?: string;

  @IsOptional()
  @IsString()
  nomeRazaoSocial?: string;

  @IsOptional()
  @IsString()
  cpfCnpj?: string;

  @IsOptional()
  @IsString()
  logradouro?: string;

  @IsOptional()
  @IsString()
  numeroLogradouro?: number;

  @IsOptional()
  @IsString()
  complemento?: string;

  @IsOptional()
  @IsString()
  bairro?: string;

  @IsOptional()
  @IsString()
  localidade?: string;

  @IsOptional()
  @IsString()
  uf?: string;

  @IsOptional()
  @IsString()
  cep?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  celular?: string;

  @IsOptional()
  @IsString()
  senha?: string;
}
