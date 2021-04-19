import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule, LoadingController } from '@ionic/angular';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { reducers, metaReducers } from '../reducers';
import { AuthService } from '../services/auth.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthEffects } from './auth.effects';

describe('AuthEffects', () => {
  let actions$: Observable<Action>;
  let effects: AuthEffects;

  // let routerSpy: { navigate: jasmine.Spy };

  let authSpyService: { login: jasmine.Spy };

  let loadingSpyCtrl = {
    create: jasmine.createSpy('create')
  };

  let router: Router;


  let store: MockStore;
  const initialState = { auth: { isAuthencticated: false, user: null, errorMessage: null } };

  beforeEach(() => {
    authSpyService  = jasmine.createSpyObj('AuthService', [ 'login' ]);
    // routerSpy       = jasmine.createSpyObj('Router', [ 'navigate' ]);

    TestBed.configureTestingModule({
      imports: [
        // AppRoutingModule,
        HttpClientModule,
        IonicModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        // { provide: Router,            useValue: routerSpy },
        { provide: LoadingController, useValue: loadingSpyCtrl },
        { provide: AuthService,       useValue: authSpyService },
        provideMockStore({ initialState }),
      ]
    });

    effects = TestBed.inject(AuthEffects);

    store = TestBed.inject(MockStore);

    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('login effect', () => {
    it ('should call method AuthService\'s login', () => {
      const email = 'john@doe.com';
      const password = '12341234';
      const stubUser = { email, password };

      actions$ = of({ type: '[Auth] Login', email, password });

      authSpyService.login.and.returnValue(of(stubUser));

      effects.login$.subscribe(action => {
        expect(action).toEqual({
          type: '[Auth] Login Complete',
          user: { ...stubUser, name: 'John Doe' }
        });
      });
      
      expect(loadingSpyCtrl.create).toHaveBeenCalled();
      expect(authSpyService.login).toHaveBeenCalledWith(email, password);
    });
  });
});
