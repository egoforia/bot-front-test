import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BalanceService } from './balance.service';

describe('BalanceService', () => {
  let service: BalanceService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', [ 'get' ]);
    service = new BalanceService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUserBalance', () => {
    it('should return an Observable<User>', () => {
      const stubValue = { id: 1, user_id: 1, total: 999.99 };

      httpClientSpy.get.and.returnValue(of(stubValue));

      service.getUserBalance(1).subscribe(
        balance => expect(balance).toEqual(stubValue, 'expected balance'),
        fail
      )

      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
  })
});
