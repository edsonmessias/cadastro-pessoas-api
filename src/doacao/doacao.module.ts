import { Module } from '@nestjs/common';
import { DoacaoService } from './doacao.service';
import { DoacaoController } from './doacao.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DoacaoService],
  controllers: [DoacaoController],
})
export class DoacaoModule {}
