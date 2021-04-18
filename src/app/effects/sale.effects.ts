import { Injectable } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { addSaleCashback } from '../actions/balance.actions';
import { createSaleComplete, createSaleFailed, loadSalesComplete } from '../actions/sale.actions';
import { SaleState } from '../reducers/sale.reducer';
import { SaleService } from '../services/sale.service';



@Injectable()
export class SaleEffects {

  constructor(
    private actions$: Actions,
    private saleService: SaleService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private store: Store<{ saleState: SaleState }>
  ) {}

  loading: Promise<HTMLIonLoadingElement>;

  loadSales$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Sale] Load Sales'),
      mergeMap(() => this.saleService.getAll()
        .pipe(
          map(sales => loadSalesComplete({ sales })),
          catchError(() => EMPTY))
        )
      )
  });

  createSale$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Sale] Create Sale'),
      exhaustMap((action: any) => {
        this.loading = this.loadingCtrl.create({
          message: 'Cadastrando sua venda...'
        });

        this.loading.then((loading) => loading.present());

        const cashback = action.sale.price * 0.05;

        return this.saleService.create({ ...action.sale, cashback, status: 'WAITING' }).pipe(
          map(sale => createSaleComplete({ sale })),
          catchError(error => of(createSaleFailed({ error })))
        );
      })
    )}
  );

  createSaleComplete$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Sale] Create Sale Complete'),
      map(async (action: any) => {
        
        this.loading.then(loading => loading.dismiss());
        
        const toast = await this.toastCtrl.create({
          message: `Venda #${action.sale.code} cadastrada com sucesso!`,
          color: 'success',
          duration: 2000,
          position: 'top'
        });
  
        toast.present();

        this.modalCtrl.dismiss();

        this.store.dispatch(addSaleCashback({ cashback: action.sale.cashback }));
      })
    ),
    { dispatch: false }
  );
}
