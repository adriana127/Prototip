import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../components/data/user';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentUser: Observable<User>
  private currentUserSubject!: BehaviorSubject<any>;
  check:boolean=false;



  getCurrentUser():Observable<User>{
    return this.currentUser;
  }

  login(user:User){

    return  this.http.post<any>(`/login`, { username: user.username, password: user.password })
    .pipe(map(user => {
        if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
        }
        return user;
    }));
  } 

  isLogged():boolean {
    return this.currentUserSubject.value!=null;
  }

  constructor(private router: Router,private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
    
   }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}