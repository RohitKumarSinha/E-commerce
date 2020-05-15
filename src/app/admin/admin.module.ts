import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignManagementComponent } from './campaign-management/campaign-management.component';
import { OfferManagementComponent } from './offer-management/offer-management.component';
import { AuditComponent } from './audit/audit.component';



@NgModule({
  declarations: [CampaignManagementComponent, OfferManagementComponent, AuditComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
