import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Sale, SaleStatus } from '../api-interfaces/sale';
import { AddSaleModalComponent } from '../components/add-sale-modal/add-sale-modal.component';
import { BalanceService } from '../services/balance.service';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private saleService: SaleService,
    private balanceService: BalanceService,
    private modalCtrl: ModalController
  ) {}

  sales: Sale[];
  balanceTotal: number;

  ngOnInit() {

  }

  async ionViewDidEnter() {
    this.sales = await this.saleService.getList();
    this.balanceTotal = await this.balanceService.getUserBalance(1);
  }

  getSales() {

  }

  async presentAddSaleModal() {
    const modal = await this.modalCtrl.create({
      component: AddSaleModalComponent
    });

    modal.onWillDismiss()
      .then(response => {
        if (response.data && response.data.sale) {
          this.sales.push(response.data.sale);
        }
      });

    modal.present();
  }
}
