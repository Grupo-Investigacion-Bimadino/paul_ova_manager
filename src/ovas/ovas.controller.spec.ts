import { Test, TestingModule } from '@nestjs/testing';
import { OvasController } from './ovas.controller';
import { OvasService } from './ovas.service';

describe('OvasController', () => {
  let controller: OvasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OvasController],
      providers: [OvasService],
    }).compile();

    controller = module.get<OvasController>(OvasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
