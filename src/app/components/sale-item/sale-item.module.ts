import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleItemComponent } from './sale-item.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [SaleItemComponent],
  exports: [SaleItemComponent]
})
export class SaleItemModule { }
