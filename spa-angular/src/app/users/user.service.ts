import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UserServiceInterface} from './user-service.interface';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserServiceInterface {

  private users = [{
    id: 123,
    name: 'Steve Jobs',
    email: 'sjobs@apple.com',
    phone: '1111 111 111'
  }, {
    id: 234,
    name: 'Bill Gates',
    email: 'bgates@microsoft.com',
    phone: '2222 222 222'
  }, {
    id: 456,
    name: 'Mark Zuckerberg',
    email: 'mzuck@facebook.com',
    phone: '3333 333 333'
  }]

  constructor() { }

  getAll(): Observable<Partial<User>[]> {
    return of(this.users);
    // new Observable((observer) => {
      // observer.next(value);
      // observer.complete(value);
    //});
  }

  getById(id): Observable<Partial<User>> {
    const obs$ = of(this.users.find((u) => u.id === Number(id)));

    // {id:234}|
    // delay(3000)
    // ---{id:234}|

    if (234 === Number(id)) {
      return obs$.pipe(
        delay(3000)
      );
    }

    return obs$;
  }
}
