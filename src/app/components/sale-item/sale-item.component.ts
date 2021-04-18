import { Component, Input, OnInit } from '@angular/core';
import { Sale, SaleStatus } from 'src/app/api-interfaces/sale';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.scss'],
})
export class SaleItemComponent implements OnInit {

  constructor() { }

  @Input() sale: Sale;

  ngOnInit() {}

  get status(): string {
    return SaleStatus[ this.sale.status ];
  }

  get cashbackPercentage(): number {
    return (this.sale.cashback * 100 / this.sale.price);
  }
}
