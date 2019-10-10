import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { LoggedUserService } from '../security/logged-user.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private userLoggedService: LoggedUserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userLoggedService.isLoggedUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
   }
}
