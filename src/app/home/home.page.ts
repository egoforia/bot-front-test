import { Component } from '@angular/core';
import { Sale, SaleStatus } from '../api-interfaces/sale';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  sales: Sale[] = [
    { id: 1, price: 99.99, date: new Date('2021-04-15'), cashback: 9.99, status: SaleStatus.WAITING },
    { id: 2, price: 99.99, date: new Date('2021-04-15'), cashback: 9.99, status: SaleStatus.DENIED },
    { id: 3, price: 99.99, date: new Date('2021-04-15'), cashback: 9.99, status: SaleStatus.APPROVED },
  ]

}
