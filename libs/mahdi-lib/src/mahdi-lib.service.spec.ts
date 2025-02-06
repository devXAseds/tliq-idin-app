import { Test, TestingModule } from '@nestjs/testing';
import { MahdiLibService } from './mahdi-lib.service';

describe('MahdiLibService', () => {
  let service: MahdiLibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MahdiLibService],
    }).compile();

    service = module.get<MahdiLibService>(MahdiLibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
