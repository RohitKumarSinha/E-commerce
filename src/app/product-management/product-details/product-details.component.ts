import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.interface';
import { ProductItem } from 'src/app/model/product.model';
import { ProductManagementService } from '../services/product-management-service.service';
import { CartProductItem } from 'src/app/model/cartProduct.model';
import { ProductToCartProduct } from 'src/app/common/product-to-cartProduct.component';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductItem;
  cartProduct: CartProductItem;
  productId: number;
  color: string;
  size: string;
  quantity: number;
  value: string;

  constructor(private route: ActivatedRoute,
    private productService: ProductManagementService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
    });

    this.getProductDetailsById(this.productId);
  }

  buyNow(){

  }

  addProductToCart(){
    if(!this.color){
      this.color = 'White';
    }
    if(!this.size){
      this.size='S';
    }
    if(!this.quantity){
      this.quantity = 1;
    }
    let now = new Date();
    now.setDate(now.getDate() + 5);

    this.cartProduct = new CartProductItem(this.product.productId, this.product.productName,
      this.product.imageUrl[0], this.product.description, this.product.price, this.product.discount,
      this.product.discountedPrice, this.color, this.size, this.quantity, this.product.currenrcySymbol,now.toDateString());

      let cart: CartProductItem[] = JSON.parse(localStorage.getItem('shoppingCart'));
      if(cart == null){
        cart = [];
        cart.push(this.cartProduct);
      } else{
        let currentProduct = cart.filter(a => a.productId == this.cartProduct.productId);
        if(currentProduct.length > 0){
          cart.filter(a => {
            a.quantity = a.quantity + this.quantity;
          });
        } else{
          cart.push(this.cartProduct);
        }
      }
      localStorage.setItem('shoppingCart', JSON.stringify(cart));

    this.productService.addToCart(this.cartProduct)

    console.log(this.router.url)
    this.router.navigate(['/shopping-cart']);
  }

  getProductDetailsById(id:number){
    this.productService.getProductDetailsById(id)
    .subscribe((response:any) => {
      for(var index of response.Products){
        if(index.productId == this.productId){
          this.product = new ProductItem(index as Product);
        }
      }
    })
  }

}
