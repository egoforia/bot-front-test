import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sale } from '../api-interfaces/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(
    private http: HttpClient
  ) { }

  getList(): Promise<Sale[]> {
    const endpoint = 'sales';

    return this.http.get(environment.apiUrl + endpoint)
      .toPromise()
      .then((sales: Sale[]) => sales);
  }

  create(sale: Sale): Promise<Sale> {
    const endpoint = 'sales';

    return this.http.post(environment.apiUrl + endpoint, sale)
      .toPromise()
      .then((sale: Sale) => sale);
  }
}
