import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadSales } from '../actions/sale.actions';
import { Sale, SaleStatus } from '../api-interfaces/sale';
import { AddSaleModalComponent } from '../components/add-sale-modal/add-sale-modal.component';
import { SaleState, selectAllSales } from '../reducers/sale.reducer';
import { BalanceService } from '../services/balance.service';
import { SaleService } from '../services/sale.service';

import * as fromSales from '../reducers/sale.reducer';
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private saleService: SaleService,
    private balanceService: BalanceService,
    private modalCtrl: ModalController,
    private readonly store: Store<{ saleState: SaleState }>
  ) {}

  sales$: Observable<Dictionary<Sale>>;
  balanceTotal: number;

  ngOnInit() {
    this.sales$ = this.store.select(state => state.saleState.entities);
    this.store.dispatch(loadSales());
  }

  async ionViewDidEnter() {
    // this.sales = await this.saleService.getList();
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
        // if (response.data && response.data.sale) {
        //   this.sales.push(response.data.sale);
        // }
      });

    modal.present();
  }
}
