import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserHttpService } from '../user-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  user: Partial<User> = {
    name: '',
    email: '',
    phone: '',
  };

  constructor(
    private userHttpService: UserHttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addUser() {
    this.userHttpService.create(this.user).subscribe((user) => {
      this.router.navigateByUrl('/users');
    });
  }
}
