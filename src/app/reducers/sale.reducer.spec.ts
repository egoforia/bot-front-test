import { saleReducer, initialState } from './sale.reducer';

describe('Sale Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = saleReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
