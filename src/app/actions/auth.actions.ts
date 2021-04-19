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

export const signUp = createAction(
  '[Auth] SignUp',
  props<{ user: User }>()
);

export const signUpComplete = createAction(
  '[Auth] SignUp Complete',
  props<{ user: User }>()
)

export const signUpFailed = createAction(
  '[Auth] SignUp Failed',
  props<{ error: any }>()
)


