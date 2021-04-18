import { createAction, props } from '@ngrx/store';
import { Balance } from '../api-interfaces/balance';

export const loadBalance = createAction(
  '[Balance] Load Balance'
);

export const loadBalanceComplete = createAction(
  '[Balance] Load Balance Complete',
  props<{ balance: Balance }>()
);
