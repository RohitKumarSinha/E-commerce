import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product-details/:productId', loadChildren: './product-management/product-management.module#ProductManagementModule' },
  {path: 'shopping-cart', loadChildren: './order-management/order-management.module#OrderManagementModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
