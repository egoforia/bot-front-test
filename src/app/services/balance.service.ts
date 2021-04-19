import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Balance } from '../api-interfaces/balance';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(
    private http: HttpClient
  ) { }

  getUserBalance(userId: number): Observable<Balance> {
    const endpoint = `balances/${userId}`;

    return this.http.get<Balance>(environment.apiUrl + endpoint);
  }
}
