import { Test, TestingModule } from '@nestjs/testing';
import { DoacaoController } from './doacao.controller';

describe('DoacaoController', () => {
  let controller: DoacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoacaoController],
    }).compile();

    controller = module.get<DoacaoController>(DoacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
