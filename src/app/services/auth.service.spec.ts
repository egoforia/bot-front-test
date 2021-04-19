import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AuthService } from './auth.service';


describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', [ 'post' ])
    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should return an Observable<User>', () => {
      const email = 'john@doe.com';
      const password = '12341234';
      const stubUser = { email, password };

      httpClientSpy.post.and.returnValue(of(stubUser));

      service.login(email, password).subscribe(
        user => expect(user).toEqual(stubUser, 'expected user'),
        fail
      )

      expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
    });
  })
});
