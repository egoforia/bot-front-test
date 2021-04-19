import { Action, createReducer, on } from '@ngrx/store';
import { addSaleCashback, loadBalance, loadBalanceComplete } from '../actions/balance.actions';
import { Balance } from '../api-interfaces/balance';


export const balanceFeatureKey = 'balance';

export interface BalanceState {
  balance: Balance | null;
  isLoading: boolean;
}

export const initialState: BalanceState = {
  balance: null,
  isLoading: false
};


const reducer = createReducer(
  initialState,
  on(
    loadBalance, 
    (state: BalanceState) => { return { ...state, isLoading: true }; }
  ),
  on(
    loadBalanceComplete, 
    (state: BalanceState, { balance }) => { return { ...state, isLoading: false, balance }; }
  ),
  on(addSaleCashback, (state: BalanceState, { cashback }) => { return { ...state, balance: { ...state.balance, total: state.balance.total + cashback } }; }) 
);

export function balanceReducer(state: BalanceState, action: Action) {
  return reducer(state, action);
}
