import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SaleEffects } from './sale.effects';

describe('SaleEffects', () => {
  let actions$: Observable<any>;
  let effects: SaleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SaleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SaleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
