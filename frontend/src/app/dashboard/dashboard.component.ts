import { Component, OnInit } from '@angular/core';
import { CriveAuthenticationService } from '../services/crive-authentication.service';
import { FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


declare const countryNaam: String;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  address1: any;
  address2: any;
  zip: any;
  pin: any;
  myForm: any;
  countries: any;
  cities: any;
  cityname: any;
  countryname: String;
  constructor(private criveAuthenticationService: CriveAuthenticationService, private router: Router, private http: Http) { }


  public currentUser: any = {};
  ngOnInit() {
    this.http.get('http://www.geonames.org/childrenJSON?geonameId=6255147&callback=listPlaces&style=long&noCacheIE=1521040419460')
      .subscribe(res =>
        this.countries = (<any>res)._body.split('listPlaces(')[1]);
    this.criveAuthenticationService.getCurrentUser()
      .then(profile => this.currentUser = profile);
  }

  logout() {
    this.criveAuthenticationService.logout();
    this.router.navigate(['/welcome']);
  }
  changeValue() {
    if (this.address1 === 'USA') {
      this.pin = false;
      this.zip = true;
    } else {
      this.pin = true;
      this.zip = false;
    }
  }
  countryName(countryValue) {
    const item = this.countries.filter(function (country) {
      if (country.geonameId == countryValue) {
        return country.name;
      }
    })[0];

    this.countryname = item.name;
  }
  countryValue(countryvalue) {
    this.countryName(countryvalue);
    // const item = this.countries.map(function (country) {
    //   if (country.geonameId == countryvalue) {
    //     return country.name;
    //   }
    // });

    this.http.get('http://www.geonames.org/childrenJSON?geonameId='
      + countryvalue + '&callback=listPlaces&style=long&noCacheIE=1521046928591')
      .subscribe(res =>
        this.cities = res['_body'].split('listPlaces(')[1]
      );
  }
  makeCountriesRequest() {
    this.countries = JSON.parse(this.countries.substring(0, this.countries.length - 2));
    this.countries = this.countries.geonames;
    return this.countries;
  }
  makeCitiesRequest() {
    this.cities = JSON.parse(this.cities.substring(0, this.cities.length - 2));
    this.cities = this.cities.geonames;
    return this.cities;
  }
  changeEverything() {
    console.log(this.countries);
  }
  cityInput(cityName) {
    this.cityname = cityName;
  }
  updateCurrentUser() {
    if (this.pin) {
      const data = {
        address1: this.address1,
        address2: this.address2,
        country: this.countryname,
        state: this.cityname,
        code: this.pin,
      };
      this.criveAuthenticationService.updateCurrentUser(data).then(res => console.log('Update', res));
    } else if (this.zip) {
      const data = {
        address1: this.address1,
        address2: this.address2,
        country: this.countryname,
        state: this.cityname,
        code: this.zip,
      };
      this.criveAuthenticationService.updateCurrentUser(data).then(res => console.log('Update', res));
    } else if (!this.zip || !this.pin) {
      const data = {
        address1: this.address1,
        address2: this.address2,
        country: this.countryname,
        state: this.cityname,
      };
      this.criveAuthenticationService.updateCurrentUser(data).then(res => console.log('Update', res));
    }

  }

  onlyNumber(evt) {
    this.zip = Validators.maxLength(5);
    evt = (evt) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
