import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.interface';
import { HttpClient } from '@angular/common/http';
import { CartProductItem } from 'src/app/model/cartProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(private httpClient: HttpClient) { }

  addToCart(cartProductItem:CartProductItem) {
    return this.httpClient.post('/api/addCart', cartProductItem);
  }
  
  getProductDetailsById(productId: number) {
    return this.httpClient.get('assets/json/products.json');
  }

}
