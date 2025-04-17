import {
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from '@nestjs/class-validator';

export class UpdateDoacaoDto {
  @IsOptional()
  @IsNumber()
  codigo?: number;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsNumber()
  doadorId?: number;

  //@IsOptional()
  //@IsDate()
  //dataCadastro?: Date;
}
