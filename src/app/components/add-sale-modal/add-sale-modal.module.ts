import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AddSaleModalComponent } from './add-sale-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonMask } from 'src/app/directive/ion-mask';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [AddSaleModalComponent, IonMask],
  exports: [AddSaleModalComponent],
})
export class AddSaleModalModule { }
