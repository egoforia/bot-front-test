import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { MustMatch } from '../validators/must-match.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public MASKS = MASKS;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      'name':       [ null, [ Validators.required ] ],
      'cpf':        [ null, [ Validators.required, NgBrazilValidators.cpf ] ],
      'email':      [ null, [ Validators.required, Validators.email ]],
      'password':   [ null, [ Validators.required, Validators.minLength(8) ] ],
      'cpassword':  [ null, [] ]
    }, {
      validator: MustMatch('password', 'cpassword')
    });
  }

  get name(): AbstractControl {
    return this.form.controls.name;
  }

  get cpf(): AbstractControl {
    return this.form.controls.cpf;
  }

  get email(): AbstractControl {
    return this.form.controls.email;
  }

  get password(): AbstractControl {
    return this.form.controls.password;
  }

  get cpassword(): AbstractControl {
    return this.form.controls.cpassword;
  }

  goToLoginPage() {
    this.router.navigate(['login']);
  }

  submit() {
    if (this.form.valid) {

    }
  }
}
