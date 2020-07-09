import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'add', // url : /users/add
        component: UserAddComponent,
      }, {
        path: ':userId', // url : /users/123
        component: UserDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
