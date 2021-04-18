import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Sale } from 'src/app/api-interfaces/sale';
import { DateFactory } from 'src/app/factories/date-factory';
import { SaleFactory } from 'src/app/factories/sale-factory';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-add-sale-modal',
  templateUrl: './add-sale-modal.component.html',
  styleUrls: ['./add-sale-modal.component.scss'],
})
export class AddSaleModalComponent implements OnInit {

  constructor(
    private saleService: SaleService,
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  form: FormGroup;

  dateMask = [ /\d/,  /\d/, '/',  /\d/,  /\d/, '/',  /\d/,  /\d/,  /\d/,  /\d/ ];

  ngOnInit() {
    this.form = this.fb.group({
      'code':   [ null, [ Validators.required ] ],
      'price':  [ null, [ Validators.required ] ],
      'date':   [ null, [ Validators.required, this.dateValidation ] ]
    });
  }

  dateValidation(control: AbstractControl): ValidationErrors | null {
    if (!control.value) { 
      return null; 
    } else if (control.value.length !== 10) {
      return { date: 'Data não é válida' };
    }

    const date = DateFactory.convertToDate(control.value);
    
    if (date instanceof Date && !isNaN(date.getTime())) {
      return null;
    } else {
      return { date: 'Data não é válida' };
    }
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  get code(): AbstractControl {
    return this.form.controls.code;
  }

  get price(): AbstractControl {
    return this.form.controls.price;
  }

  get date(): AbstractControl {
    return this.form.controls.date;
  }

  async submit() {
    if (this.form.valid) {
      const loading = await this.loadingCtrl.create({ message: 'Cadastrando sua venda...' });
      loading.present();
      
      const sale = SaleFactory.buildUserFromForm(this.form);

      // set timeout para simular demora de uma requisição real
      setTimeout(() => { 
        this.saleService.create(sale)
          .then(async (sale: Sale) => {
            const toast = await this.toastCtrl.create({
              message: `Venda #${sale.code} cadastrada com sucesso!`,
              color: 'success',
              duration: 2000,
              position: 'top'
            });
  
            toast.present();
  
            this.modalCtrl.dismiss({ sale });
          })
          .catch(async e => {
            const toast = await this.toastCtrl.create({
              message: `Ops! Algo ocorreu errado. Verifique as informações e tente novamente.`,
              color: 'danger',
              duration: 2000,
              position: 'top'
            });
  
            toast.present();
          })
          .finally(() => {
            loading.dismiss();
          });
      }, 600);
    }
  }
}
