import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-sale-modal',
  templateUrl: './add-sale-modal.component.html',
  styleUrls: ['./add-sale-modal.component.scss'],
})
export class AddSaleModalComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController
  ) { }

  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      'id':     [ null, [ Validators.required ] ],
      'price':  [ null, [ Validators.required ] ],
      'date':   [ null, [ Validators.required ] ]
    });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  get id(): AbstractControl {
    return this.form.controls.id;
  }

  get price(): AbstractControl {
    return this.form.controls.price;
  }

  get date(): AbstractControl {
    return this.form.controls.date;
  }

  submit() {
    if (this.form.valid) {

    }
  }
}
