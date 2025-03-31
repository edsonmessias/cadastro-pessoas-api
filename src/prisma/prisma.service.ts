import { Global, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Global()
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // inicializa o banco de dados sempre quando inicializar a aplicação
  async onModuleInit() {
    await this.$connect();
  }
}
