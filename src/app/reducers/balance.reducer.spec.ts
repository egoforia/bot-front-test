import { balanceReducer, initialState } from './balance.reducer';

describe('Balance Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = balanceReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
