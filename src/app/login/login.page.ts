import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      'email':    [ null, [ Validators.required, Validators.email ] ],
      'password': [ null, [ Validators.required, Validators.minLength(8) ] ]
    });
  }

  get email(): AbstractControl {
    return this.form.controls.email;
  }

  get password(): AbstractControl {
    return this.form.controls.password;
  }

  goToSignUpPage() {
    this.router.navigate(['sign-up']);
  }

  submit() {
    if (this.form.valid) {
      this.router.navigate(['home'], { replaceUrl: true });
    }
  }

}
