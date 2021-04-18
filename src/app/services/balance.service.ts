import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(
    private http: HttpClient
  ) { }

  getUserBalance(userId: number): Promise<number> {
    const endpoint = `balances/${userId}`;

    return this.http.get(environment.apiUrl + endpoint)
      .toPromise()
      .then((balance: any) => balance.total);
  }
}
