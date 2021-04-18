import { Action, createAction, props } from '@ngrx/store';
import { User } from '../api-interfaces/user';

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




