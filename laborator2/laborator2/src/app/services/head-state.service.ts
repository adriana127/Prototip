import { Injectable } from '@angular/core';
import {UserServiceService} from '../services/user-service.service'
import { Observable,of, of as observableOf } from 'rxjs'; // since RxJs 6
import {User} from '../components/data/user'
import { AuthenticationService } from './authentification.service';
@Injectable({
  providedIn: 'root'
})
export class HeadStateService {

  constructor(public userService: AuthenticationService) { }
  isVisible():boolean{
    
    return this.userService.isLogged();
  }
}
