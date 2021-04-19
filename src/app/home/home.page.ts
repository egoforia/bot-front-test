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
import { Balance } from '../api-interfaces/balance';
import { loadBalance } from '../actions/balance.actions';
import { BalanceState } from '../reducers/balance.reducer';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private readonly store: Store<{ saleState: SaleState, balanceState: BalanceState }>
  ) {}

  saleState$: Observable<SaleState>;
  balanceState$: Observable<BalanceState>;

  ngOnInit() {
    this.saleState$ = this.store.select(state => state.saleState);
    this.balanceState$ = this.store.select(state => state.balanceState);
    this.store.dispatch(loadSales());
    this.store.dispatch(loadBalance());
  }

  async ionViewDidEnter() {
    // this.sales = await this.saleService.getList();
    // this.balanceTotal = await this.balanceService.getUserBalance(1);
  }

  getSales() {

  }

  async presentAddSaleModal() {
    const modal = await this.modalCtrl.create({
      component: AddSaleModalComponent,
      cssClass: 'h-auto'
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
