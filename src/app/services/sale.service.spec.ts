import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Sale, SaleStatus } from '../api-interfaces/sale';

import { SaleService } from './sale.service';

describe('SaleService', () => {
  let service: SaleService;
  let httpClientSpy: { post: jasmine.Spy, get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', [ 'post', 'get' ])
    service = new SaleService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('should return an Observable<Sale[]>', () => {
      const expectedSales: Sale[] = [
        { id: 1, code: 'BOTI0001', price: 99.99, date: new Date(), cashback: 9.99, status: 'WAITING' },
        { id: 2, code: 'BOTI0002', price: 99.99, date: new Date(), cashback: 9.99, status: 'DENIED' },
        { id: 3, code: 'BOTI0003', price: 99.99, date: new Date(), cashback: 9.99, status: 'APPROVED' },
      ];

      httpClientSpy.get.and.returnValue(of(expectedSales));

      service.getAll().subscribe(
        sales => expect(sales).toEqual(expectedSales, 'expected sales'),
        fail
      )

      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
  });

  describe('create', () => {
    it('should return an Observable<Sale>', () => {
      const sale: Sale = { code: 'BOTI0004', price: 99.99, date: new Date() };

      httpClientSpy.post.and.returnValue(of(sale));

      service.create(sale).subscribe(
        sale => expect(sale).toEqual(sale, 'expected salee'),
        fail
      )

      expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
    });
  });
});
