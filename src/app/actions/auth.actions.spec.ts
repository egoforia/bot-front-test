import * as fromAuth from './auth.actions';

describe('Login', () => {
  it('should return an action', () => {
    const email = 'john@doe.com';
    const password = '12341234';
    expect(fromAuth.login({ email, password }).type).toBe('[Auth] Login');
  });
});
