import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
  }]

  constructor() { }

  getAll(): Observable<any[]> {
    return of(this.users);
  }

  getById(id): Observable<any> {
    return of(this.users.find((u) => u.id === Number(id)));
  }
}
