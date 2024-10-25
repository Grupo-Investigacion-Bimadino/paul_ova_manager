import { Test, TestingModule } from '@nestjs/testing';
import { OvasService } from './ovas.service';

describe('OvasService', () => {
  let service: OvasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OvasService],
    }).compile();

    service = module.get<OvasService>(OvasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
