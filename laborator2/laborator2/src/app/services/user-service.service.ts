import { Injectable } from '@angular/core';
import {User} from '../components/data/user'
import {Users} from '../components/data/user'
import { HttpClient } from '@angular/common/http';
import { Observable,of, of as observableOf } from 'rxjs'; // since RxJs 6
import {Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  getUsers():Observable<User[]>
  {
    const url = 'http://localhost:3000/users';
    return this.http.get(url) as Observable<User[]>;
  }
  
  getAll() {
    return this.http.get<User[]>(`http://localhost:3000/users`);
}

getById(id: number) {
    return this.http.get(`http://localhost:3000/users/${id}`);
}

register(user: User) {
    return this.http.post(`http://localhost:3000/users/register`, user);
}


delete(id: number) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
}


  constructor(private http: HttpClient) { }


}
