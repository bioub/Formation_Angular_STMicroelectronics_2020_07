import { Observable } from 'rxjs';
import { User } from './user.model';

export interface UserServiceInterface {
  getAll(): Observable<Partial<User>[]>;
  getById(id): Observable<Partial<User>>;
}
