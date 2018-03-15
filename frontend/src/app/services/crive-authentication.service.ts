import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

declare const FB: any;

@Injectable()
export class CriveAuthenticationService {
  constructor(private http: AuthHttp) {
    FB.init({
      appId: '194470757984275',
      status: false,
      cookie: false,
      xfbml: false,
      version: 'v2.5'
    });
  }

  fbLogin() {
    return new Promise((resolve, reject) => {
      FB.login(result => {
        if (result.authResponse) {
          return this.http.post('api/auth/facebook', { access_token: result.authResponse.accessToken })
            .toPromise()
            .then(response => {
              const token = response.headers.get('x-auth-token');
              if (token) {
                localStorage.setItem('id_token', token);
              }
              resolve(response.json());
            })
            .catch(() => reject());
        } else {
          reject();
        }
      }, { scope: 'public_profile, email' });
    });
  }
  logout() {
    localStorage.removeItem('id_token');
  }
  isLoggedIn() {
    return new Promise((resolve, reject) => {
      this.getCurrentUser()
        .then(user => resolve(true))
        .catch(() => reject(false));
    });
  }
  getCurrentUser() {
    return new Promise((resolve, reject) => {
      return this.http.get('api/auth/me')
        .toPromise()
        .then(response => {
          resolve(response.json());
        }).catch(() => reject());
    });
  }
  updateCurrentUser(params) {
    return new Promise((resolve, reject) => {
      return this.http.post('api/update', params)
        .toPromise()
        .then(response => {
          resolve(response.json());
        }).catch(() => {
          reject();
        });
    });
  }
}
