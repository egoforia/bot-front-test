import { SaleFactory } from './sale-factory';

describe('SaleFactory', () => {
  it('should create an instance', () => {
    expect(new SaleFactory()).toBeTruthy();
  });
});
