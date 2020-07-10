import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
// import { UserHttpService } from "../user-http.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  // private userService: UserService;
  // constructor(userService: UserService) {
  //   this.userService = userService;
  // }
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
    });
  }
}
