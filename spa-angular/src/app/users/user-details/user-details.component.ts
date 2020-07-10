import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user;

  private subcription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    // ----------(new Date)----------(new Date)----------(new Date)------....

    // un tiret === 100ms
    // ---------2---------------4---------------5---3----------1----...
    this.subcription = this.activatedRoute.paramMap.subscribe((paramMap) => {
      const userId = paramMap.get('userId');
      // {id}|
      this.userService.getById(userId).subscribe((user) => {
        this.user = user;
      });
    });
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
