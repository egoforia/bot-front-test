import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSaleModalComponent } from './add-sale-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [AddSaleModalComponent],
  exports: [AddSaleModalComponent],
})
export class AddSaleModalModule { }
