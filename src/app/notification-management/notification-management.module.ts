import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsNotificationComponent } from './sms-notification/sms-notification.component';
import { EmailNotificationComponent } from './email-notification/email-notification.component';



@NgModule({
  declarations: [SmsNotificationComponent, EmailNotificationComponent],
  imports: [
    CommonModule
  ]
})
export class NotificationManagementModule { }
