import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Sale, SaleStatus } from '../api-interfaces/sale';
import { AddSaleModalComponent } from '../components/add-sale-modal/add-sale-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) {}

  sales: Sale[] = [
    { id: 1, price: 99.99, date: new Date('2021-04-15'), cashback: 9.99, status: SaleStatus.WAITING },
    { id: 2, price: 99.99, date: new Date('2021-04-15'), cashback: 9.99, status: SaleStatus.DENIED },
    { id: 3, price: 99.99, date: new Date('2021-04-15'), cashback: 9.99, status: SaleStatus.APPROVED },
  ]

  ngOnInit() {

  }

  async presentAddSaleModal() {
    const modal = await this.modalCtrl.create({
      component: AddSaleModalComponent
    });

    modal.present();
  }
}
