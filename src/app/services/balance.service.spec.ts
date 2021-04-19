import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BalanceService } from './balance.service';

describe('BalanceService', () => {
  let service: BalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(BalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
