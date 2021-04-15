import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SaleItemModule } from '../components/sale-item/sale-item.module';
import { AddSaleModalModule } from '../components/add-sale-modal/add-sale-modal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SaleItemModule,
    AddSaleModalModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
