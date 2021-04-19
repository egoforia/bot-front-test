import { AuthFactory } from './auth-factory';

describe('AuthFactory', () => {
  it('should create an instance', () => {
    expect(new AuthFactory()).toBeTruthy();
  });
});
