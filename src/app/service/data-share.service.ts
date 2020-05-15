import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../model/product.interface';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
cartData: Subject<Product> = new Subject();
  constructor() { }

  addToCart(product: Product) {
    this.cartData.next(product);
  }
}