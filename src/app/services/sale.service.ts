import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sale } from '../api-interfaces/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Sale[]> {
    const endpoint = 'sales';

    return this.http.get<Sale[]>(environment.apiUrl + endpoint);
  }

  create(sale: Sale): Observable<Sale> {
    const endpoint = 'sales';

    return this.http.post<Sale>(environment.apiUrl + endpoint, sale)
  }
}
