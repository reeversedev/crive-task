import { Component, OnInit } from '@angular/core';
import { CriveAuthenticationService } from '../services/crive-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: CriveAuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  fbLogin() {
    this.authService.fbLogin().then(() => {
      console.log('User has been Logged In');
      this.router.navigate(['/dashboard']);
    }).catch(() => {
      console.log('Not Authenticated');
    });
  }

}
