import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { createSale } from 'src/app/actions/sale.actions';
import { DateFactory } from 'src/app/factories/date-factory';
import { SaleFactory } from 'src/app/factories/sale-factory';
import { SaleState } from 'src/app/reducers/sale.reducer';

@Component({
  selector: 'app-add-sale-modal',
  templateUrl: './add-sale-modal.component.html',
  styleUrls: ['./add-sale-modal.component.scss'],
})
export class AddSaleModalComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private store: Store<{ saleState: SaleState }>
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
      const sale = SaleFactory.buildUserFromForm(this.form);

      this.store.dispatch(createSale({ sale }));
    }
  }
}
