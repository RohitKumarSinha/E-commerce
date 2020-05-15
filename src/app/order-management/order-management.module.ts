import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartManagementComponent } from './cart-management/cart-management.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PaymentServiceComponent } from './payment-service/payment-service.component';
import { PostOrderActivityComponent } from './post-order-activity/post-order-activity.component';
import { OrderManagementRoutingModule } from './order-management-routing.module';



@NgModule({
  declarations: [CartManagementComponent, OrderHistoryComponent, PaymentServiceComponent, PostOrderActivityComponent],
  imports: [
    CommonModule,
    OrderManagementRoutingModule
  ]
})
export class OrderManagementModule { }
