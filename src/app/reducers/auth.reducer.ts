import { Action, createReducer, on, State } from '@ngrx/store';
import { login, loginComplete, signUp, signUpComplete } from '../actions/auth.actions';
import { User } from '../api-interfaces/user';


export const authFeatureKey = 'auth';

export interface AuthState {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

const reducer = createReducer(
  initialState,
  on(login,           (state: AuthState)           => { return { ...state }; }),
  on(loginComplete,   (state: AuthState, { user }) => { return { ...state, isAuthenticated: true, user }; }),
  on(signUp,          (state: AuthState)           => { return { ...state }; }),
  on(signUpComplete,  (state: AuthState, { user }) => { return { ...state, isAuthenticated: true, user }; }),
);

export function authReducer(state: AuthState, action: Action) {
  return reducer(state, action);
}