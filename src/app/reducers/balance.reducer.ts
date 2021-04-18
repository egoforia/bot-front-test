import { Action, createReducer, on } from '@ngrx/store';
import { loadBalanceComplete } from '../actions/balance.actions';
import { Balance } from '../api-interfaces/balance';


export const balanceFeatureKey = 'balance';

export interface BalanceState {
  balance: Balance | null;
}

export const initialState: BalanceState = {
  balance: null
};


const reducer = createReducer(
  initialState,
  on(loadBalanceComplete, (state: BalanceState, { balance }) => { return { ...state, balance }; })
);

export function balanceReducer(state: BalanceState, action: Action) {
  return reducer(state, action);
}
