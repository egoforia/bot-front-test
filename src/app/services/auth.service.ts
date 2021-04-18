import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../api-interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(user: User): Promise<User> {
    const endpoint = 'users';

    return this.http.post(environment.apiUrl + endpoint, user)
      .toPromise()
      .then((user: any) => {
        if (user) { return user; }
        else { throw new Error('Sign up failed'); }
      });
  }

  login(email: string, password: string): Promise<User> {
    const endpoint = 'login';

    return this.http.post(environment.apiUrl + endpoint, { email, password })
      .toPromise()
      .then((user: User) => {
        // hack for fake api
        user.name = 'John Doe';
        return user;
      });
  }
}
