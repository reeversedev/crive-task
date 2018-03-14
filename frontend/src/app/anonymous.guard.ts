import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterState,
  Route,
  RouterStateSnapshot
} from '@angular/router';
import { CriveAuthenticationService } from './services/crive-authentication.service'
import { reject } from 'q';

@Injectable()
export class AnonymousGuard implements CanActivate {
  constructor(private criveAuthenticationService: CriveAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin();
  }

  checkLogin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.criveAuthenticationService.isLoggedIn().then(() => {
        this.router.navigate(['/dashboard']);
        reject(false);
      }).catch(() => {
        resolve(true);
      });
    });
  }

}
