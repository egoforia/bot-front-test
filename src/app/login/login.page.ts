import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from '../api-interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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

  async submit() {
    if (this.form.valid) {
      const loading = await this.loadingCtrl.create({ message: 'Aguarde um momento' });
      loading.present();
      
      // set timeout para simular demora de uma requisição real
      setTimeout(() => {
        this.authService.login(this.email.value, this.password.value)
          .then(async (user: User) => {
            const toast = await this.toastCtrl.create({
              message: `Bem vindo de volta, ${user.name}!`,
              color: 'success',
              duration: 2000,
              position: 'top'
            });
  
            toast.present();
            this.router.navigate(['home'], { replaceUrl: true });
          })
          .catch(async e => {
            // toast para simular mensagem de erro de autenticação
            const toast = await this.toastCtrl.create({
              message: `Email ou senha incorretos. Por favor, tente novamente.`,
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
