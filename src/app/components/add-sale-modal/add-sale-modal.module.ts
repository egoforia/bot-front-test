import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSaleModalComponent } from './add-sale-modal.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [AddSaleModalComponent],
  exports: [AddSaleModalComponent],
})
export class AddSaleModalModule { }
