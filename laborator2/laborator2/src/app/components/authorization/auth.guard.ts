import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'app/services/authentification.service';

import { UserServiceService } from '../../services/user-service.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log(this.authenticationService.isLogged());
        if (this.authenticationService.isLogged()) {
            return true;
        }
        else{
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
}