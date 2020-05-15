import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import  * as data from  '../../assets/json/products.json';
import { Product } from '../model/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getProductList(query?: string) {
    const httpParams = new HttpParams();
    if (query) {
      httpParams.set('param', query);
    }
    return this.httpClient.get('assets/json/products.json', {params: httpParams});
  }

  fetchProductList(): Observable<any> {
    return this.httpClient.get('/api/getproductlist');
  }

  fetchKartList() {
    return this.httpClient.get('/api/getUserKart');
  }

  removeCart(productId: string) {
    return this.httpClient.post('/api/removeCart', productId);
  }


}
