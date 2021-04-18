import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { loginComplete, loginFailed } from '../actions/auth.actions';
import { User } from '../api-interfaces/user';
import { AuthState } from '../reducers/auth.reducer';
import { AuthService } from '../services/auth.service';



@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<{ auth: AuthState }>,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  loading: Promise<HTMLIonLoadingElement>;

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Auth] Login'),
      exhaustMap((action: any) => {
        this.loading = this.loadingCtrl.create({
          message: 'Aguarde um momento'
        });

        this.loading.then((loading) => loading.present());

        return this.authService.login(action.email, action.password).pipe(
          map(user => loginComplete({ user: { ...user, name: 'John Doe' } })),
          catchError(error => of(loginFailed({ error })))
        )  
      })
    )
  );

  loginComplete$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Auth] Login Complete'),
      concatLatestFrom(action => this.store.select(state => state.auth)),
      tap(async ([action, authState]) => {
        this.loading.then(loading => loading.dismiss());
        
        if (authState.isAuthenticated) {
          const toast = await this.toastCtrl.create({
            message: `Bem vindo de volta, ${authState.user.name}!`,
            color: 'success',
            duration: 2000,
            position: 'top'
          });
          
          toast.present();
          this.router.navigate(['home'], { replaceUrl: true });
        }
      })
    ),
    { dispatch: false }
  );

}
