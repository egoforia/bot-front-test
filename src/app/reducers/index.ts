import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authReducer, AuthState } from './auth.reducer';
import { balanceReducer, BalanceState } from './balance.reducer';
import { saleReducer, SaleState } from './sale.reducer';


export interface State {
  auth: AuthState,
  saleState: SaleState,
  balanceState: BalanceState
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  saleState: saleReducer,
  balanceState: balanceReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
