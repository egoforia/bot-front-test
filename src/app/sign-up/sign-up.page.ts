import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { User } from '../api-interfaces/user';
import { AuthFactory } from '../factories/auth-factory';
import { AuthService } from '../services/auth.service';
import { MustMatch } from '../validators/must-match.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public MASKS = MASKS;

  constructor(
    private authService: AuthService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
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

  async submit() {
    if (this.form.valid) {
      const loading = await this.loadingCtrl.create({ message: 'Aguarde um momento' });
      loading.present();
      
      const user = AuthFactory.buildUserFromForm(this.form);

      // set timeout para simular demora de uma requisição real
      setTimeout(() => { 
        this.authService.signUp(user)
          .then(async (user: User) => {
            const toast = await this.toastCtrl.create({
              message: `Bem vindo ao Boti, ${user.name}!`,
              color: 'success',
              duration: 2000,
              position: 'top'
            });
  
            toast.present();
  
            this.router.navigate(['home'], { replaceUrl: true });
          })
          .catch(async e => {
            const toast = await this.toastCtrl.create({
              message: `Ops! Algo ocorreu errado. Verifique suas informações e tente novamente.`,
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
