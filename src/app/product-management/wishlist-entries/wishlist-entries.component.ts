import { Component, OnInit } from '@angular/core';
import { WishListItem } from 'src/app/model/wishList.model';

@Component({
  selector: 'app-wishlist-entries',
  templateUrl: './wishlist-entries.component.html',
  styleUrls: ['./wishlist-entries.component.css']
})
export class WishlistEntriesComponent implements OnInit {

  cart: WishListItem[] = [];
  constructor() { 
    this.getWishListProductItems();
  }

  ngOnInit() {
//    this.dataService.cart.subscribe(a => this.cart = a);
  }

  getWishListProductItems(){
    this.cart = JSON.parse(localStorage.getItem('wishlist'));
    alert('--this.cart.length--'+this.cart)
  }

  onRemoveProductsFromCart(productId: number){
    this.cart = this.cart.filter(a => a.productId != productId);
    localStorage.setItem('wishlist', JSON.stringify(this.cart));
    // this.dataService.updateCartItemCount(this.cart.length);
    // this.dataService.updateShoppingCart(this.cart);
  }

}
