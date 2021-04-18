import * as fromBalance from './balance.actions';

describe('loadBalances', () => {
  it('should return an action', () => {
    expect(fromBalance.loadBalances().type).toBe('[Balance] Load Balances');
  });
});
