import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Product } from '../model/product.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  text: string;
  results: Product[];
  constructor(private router: Router, private dataService: DataService) { 
    }

  ngOnInit() {
  }

  search(event) {
    this.dataService.getProductList(event.query).subscribe((data: any) => {
        this.results = data.Products;
    });
}

  openWishlistPage(){
    this.router.navigate(['/wishlist']);
  }

  openCartPage(){
    this.router.navigate(['/shopping-cart']);
  }
}
