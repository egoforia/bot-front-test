import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reducers, metaReducers } from '../reducers';
import { SaleService } from '../services/sale.service';

import { SaleEffects } from './sale.effects';

describe('SaleEffects', () => {
  let actions$: Observable<any>;
  let effects: SaleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        IonicModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ],
      providers: [
        SaleEffects,
        SaleService,
        Store,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SaleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
