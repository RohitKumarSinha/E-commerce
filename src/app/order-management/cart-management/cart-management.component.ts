import { Component, OnInit } from '@angular/core';
import { CartProductItem } from 'src/app/model/cartProduct.model';

@Component({
  selector: 'app-cart-management',
  templateUrl: './cart-management.component.html',
  styleUrls: ['./cart-management.component.css']
})
export class CartManagementComponent implements OnInit {
  cart: CartProductItem[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('shoppingCart'));
    this.getTotal();
  }

  onRemoveProductsFromCart(productId: number){
    this.cart = this.cart.filter(a => a.productId != productId);
    localStorage.setItem('Cart', JSON.stringify(this.cart));
    // this.dataService.updateCartItemCount(this.cart.length);
    // this.dataService.updateShoppingCart(this.cart);
    this.getTotal();
  }

  onUpdateQuantity(type, productId){
    if(type == 1){
      this.cart.forEach((element, index) => {
        if(element.productId == productId){
          this.cart[index].quantity = element.quantity + 1;
        }
      });
    } else {
      this.cart.forEach((element, index) => {
        if(element.productId == productId){
          this.cart[index].quantity = element.quantity - 1;
        }
      });
    }
    this.getTotal();
  }

  getTotal(){
    this.total = 0;
    this.cart.forEach((element) => {
      this.total = this.total + (parseInt(element.discountedPrice)*element.quantity);
    })
  }

}
