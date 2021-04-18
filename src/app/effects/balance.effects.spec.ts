import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BalanceEffects } from './balance.effects';

describe('BalanceEffects', () => {
  let actions$: Observable<any>;
  let effects: BalanceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BalanceEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(BalanceEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
