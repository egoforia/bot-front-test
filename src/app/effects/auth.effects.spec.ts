import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { reducers, metaReducers } from '../reducers';

import { AuthEffects } from './auth.effects';

describe('AuthEffects', () => {
  let actions$: Observable<any>;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpClientModule,
        IonicModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ],
      providers: [
        AuthEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
