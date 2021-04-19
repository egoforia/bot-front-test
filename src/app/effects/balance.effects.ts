import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { loadBalanceComplete } from '../actions/balance.actions';
import { BalanceService } from '../services/balance.service';



@Injectable()
export class BalanceEffects {

  constructor(
    private actions$: Actions,
    private balanceService: BalanceService
  ) {}

  loadBalance$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Balance] Load Balance'),
      exhaustMap(() => this.balanceService.getUserBalance(1)
        .pipe(
          map(balance => loadBalanceComplete({ balance })),
          catchError(() => EMPTY))
        )
      )
  });

}
