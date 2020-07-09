import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from "./users-list/users-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserAddComponent } from "./user-add/user-add.component";


const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'users/add',
    component: UserAddComponent,
  },
  {
    path: 'users/:userId',
    component: UserDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
