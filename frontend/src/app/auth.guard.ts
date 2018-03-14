import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router'

import { CriveAuthenticationService } from './services/crive-authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private criveAuthenticationService: CriveAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin();
  }
  checkLogin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.criveAuthenticationService.isLoggedIn().then(() => {
        resolve(true);
      }).catch(() => {
        this.router.navigate(['/welcome']);
        reject(false);
      });
    });
  }
}
