import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import  * as data from  '../../assets/json/products.json';
import { ProductItem } from '../model/product.model';
import { Product } from '../model/product.interface';
//import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CartProductItem } from '../model/cartProduct.model';
import { WishListItem } from '../model/wishList.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: ProductItem[] = [];
  productItem: ProductItem;
  product: Product;
  size: number;
  color: string;
  quantity: number;
  cartProduct: CartProductItem;
  wishListItem: WishListItem;
  cars: any[] = [
    {
      url: '/sale1.jpg'
    },
    {
      url: '/sale1.jpg'
    }
  ];
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private dataService: DataService,
    private httpClient: HttpClient,
  //  private toastr: ToastrService,
    private router: Router,
    config: NgbCarouselConfig) { 
      config.interval = 10000;
      config.wrap = false;
      config.keyboard = false;
      config.pauseOnHover = false;
    this.getProductList();
  }
  
  showSuccess(message, title){
//    this.toastr.success(message, title)
  }

  showError(message, title){
//      this.toastr.error(message, title)
  }

  showInfo(message, title){
//      this.toastr.info(message, title)
  }

  getProductList(){
    this.dataService.getProductList().subscribe((response:any)=>{
      for(var index of response.Products){
        this.productList.push(index as Product)
      }
    })
  }
  ngOnInit() {
    console.log(this.productList.length,'--this.productList--',this.productList)    
  }
  
  counter(i: number) {
    return new Array(i);
  }

  quickView(productSelected:Product){
    alert(productSelected.productId)
    this.router.navigate(['/product-details', productSelected.productId]);
  }
  
  addToWishList(productSelected:Product){
    this.wishListItem = new WishListItem(productSelected.productId, productSelected.productName, 
      productSelected.imageUrl[0], productSelected.description, productSelected.discountedPrice, 
      productSelected.rating);

      let cart: WishListItem[] = JSON.parse(localStorage.getItem('wishlist'));
      if(cart == null){
        cart = [];
        cart.push(this.wishListItem);
      } else{
        let currentProduct = cart.filter(a => a.productId == this.wishListItem.productId);
        if(currentProduct.length == 0){
          cart.push(this.wishListItem);
        }
      }
      localStorage.setItem('wishlist', JSON.stringify(cart));  
  }

  addToCart(productSelected:Product){
    let now = new Date();
    now.setDate(now.getDate() + 5);

    this.cartProduct = new CartProductItem(productSelected.productId, productSelected.productName, 
      productSelected.imageUrl[0], productSelected.description, productSelected.price, productSelected.discount, 
      productSelected.discountedPrice, productSelected.color[0], productSelected.size[0], 1, 
      productSelected.currenrcySymbol,now.toDateString());

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

//    this.productService.addToCart(this.cartProduct);
    this.router.navigate(['/shopping-cart']);
  }

}
