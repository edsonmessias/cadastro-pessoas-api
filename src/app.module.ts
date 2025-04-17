import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { DoacaoModule } from './doacao/doacao.module';
import { TransacaoModule } from './transacao/transacao.module';

@Module({
  imports: [UsuariosModule, DoacaoModule, TransacaoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
