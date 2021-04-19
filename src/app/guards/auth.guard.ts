import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthState } from '../reducers/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<{ auth: AuthState }>,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.store.select(state => state.auth)
      .pipe(
        map((auth: AuthState) => {
          if (auth.isAuthenticated) {
            return true;
          } else {
            throw new Error('NOT AUTHENTICATED');
          }
        }),
        catchError(e => {
          this.router.navigate(['/login']);
          return of(false);
        })
      );
  }
  
}
