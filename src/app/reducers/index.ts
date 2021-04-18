import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authReducer, AuthState } from './auth.reducer';


export interface State {
  auth: AuthState
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer
};

// export const selectAuth = (state: State) => state.auth;

// export const selectAuthUser = createSelector(
//   selectAuth,
//   (state: State)
// );


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
