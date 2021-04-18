import { Action, createAction, props } from '@ngrx/store';
import { User } from '../api-interfaces/user';

export enum AuthActionTypes {
  Login           = '[Login Page] Login',
  LoginComplete   = '[Login Page] Login Complete',
  LoginSuccess    = '[Auth API] Login Success',
  LoginFailure    = '[Auth API] Login Failure',
  CheckLogin      = '[Auth] Check Login',
  Logout          = '[Auth] Confirm Logout',
  LogoutCancelled = '[Auth] Logout Cancelled',
  LogoutConfirmed = '[Auth] Logout Confirmed'
}

export const login = createAction(
  '[Auth] Login',
  props<{ email: string, password: string }>()
);

export const loginComplete = createAction(
  '[Auth] Login Complete',
  props<{ user: User }>()
)

export const loginFailed = createAction(
  '[Auth] Login Failed',
  props<{ error: any }>()
)




