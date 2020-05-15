import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { UpdateExistingUserComponent } from './update-existing-user/update-existing-user.component';
import { RoleManagementComponent } from './role-management/role-management.component';



@NgModule({
  declarations: [AddNewUserComponent, UpdateExistingUserComponent, RoleManagementComponent],
  imports: [
    CommonModule
  ]
})
export class UserManagementModule { }
