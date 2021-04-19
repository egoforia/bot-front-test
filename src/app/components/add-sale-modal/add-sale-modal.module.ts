import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSaleModalComponent } from './add-sale-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonMask } from 'src/app/directive/ion-mask';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [AddSaleModalComponent],
  exports: [AddSaleModalComponent],
})
export class AddSaleModalModule { }
