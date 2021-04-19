import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../api-interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(user: User): Observable<User> {
    const endpoint = 'users';

    return this.http.post<User>(environment.apiUrl + endpoint, user);
      // .toPromise()
      // .then((user: any) => {
      //   if (user) { return user; }
      //   else { throw new Error('Sign up failed'); }
      // });
  }

  login(email: string, password: string): Observable<User> {
    const endpoint = 'login';

    return this.http.post<User>(environment.apiUrl + endpoint, { email, password });
  }
}
