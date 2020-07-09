import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from "../shared/shared.module";
import { UsersListComponent } from './users-list/users-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [UsersListComponent, UserAddComponent, UserDetailsComponent, UsersComponent],
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
})
export class UsersModule { }
