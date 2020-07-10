import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserServiceInterface} from './user-service.interface';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService implements UserServiceInterface {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Partial<User>[]> {
    return this.httpClient.get<Partial<User>[]>('http://jsonplaceholder.typicode.com/users');
  }

  getById(id): Observable<Partial<User>> {
    return this.httpClient.get<Partial<User>>('http://jsonplaceholder.typicode.com/users/' + id);
  }

  create(user) {
    return this.httpClient.post<Partial<User>>('http://jsonplaceholder.typicode.com/users', user);
  }
}
