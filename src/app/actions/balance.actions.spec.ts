import * as fromBalance from './balance.actions';

describe('loadBalance', () => {
  it('should return an action', () => {
    expect(fromBalance.loadBalance().type).toBe('[Balance] Load Balance');
  });
});
