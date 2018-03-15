webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/anonymous.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnonymousGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crive_authentication_service__ = __webpack_require__("../../../../../src/app/services/crive-authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnonymousGuard = /** @class */ (function () {
    function AnonymousGuard(criveAuthenticationService, router) {
        this.criveAuthenticationService = criveAuthenticationService;
        this.router = router;
    }
    AnonymousGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin();
    };
    AnonymousGuard.prototype.checkLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.criveAuthenticationService.isLoggedIn().then(function () {
                _this.router.navigate(['/dashboard']);
                reject(false);
            }).catch(function () {
                resolve(true);
            });
        });
    };
    AnonymousGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_crive_authentication_service__["a" /* CriveAuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AnonymousGuard);
    return AnonymousGuard;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <script src=\"//connect.facebook.net/en_US/sdk.js\"></script>\n  <title>Document</title>\n</head>\n<body>\n  <router-outlet></router-outlet>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthHttp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_crive_authentication_service__ = __webpack_require__("../../../../../src/app/services/crive-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










function getAuthHttp(http) {
    return new __WEBPACK_IMPORTED_MODULE_9_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_9_angular2_jwt__["AuthConfig"]({
        headerName: 'x-auth-token',
        noTokenScheme: true,
        noJwtError: true,
        globalHeaders: [{ 'Accept': 'application/json' }],
        tokenGetter: (function () { return localStorage.getItem('id_token'); }),
    }), http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_crive_authentication_service__["a" /* CriveAuthenticationService */], { provide: __WEBPACK_IMPORTED_MODULE_9_angular2_jwt__["AuthHttp"], useFactory: getAuthHttp, deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anonymous_guard__ = __webpack_require__("../../../../../src/app/anonymous.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    {
        path: 'welcome',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__anonymous_guard__["a" /* AnonymousGuard */]]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */]]
    },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_3__anonymous_guard__["a" /* AnonymousGuard */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crive_authentication_service__ = __webpack_require__("../../../../../src/app/services/crive-authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(criveAuthenticationService, router) {
        this.criveAuthenticationService = criveAuthenticationService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin();
    };
    AuthGuard.prototype.checkLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.criveAuthenticationService.isLoggedIn().then(function () {
                resolve(true);
            }).catch(function () {
                _this.router.navigate(['/welcome']);
                reject(false);
            });
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_crive_authentication_service__["a" /* CriveAuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-responsive{\n  margin: 0 auto;\n  border: 2px solid black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <img src=\"{{currentUser.photo}}\" alt=\"\">\n{{currentUser.email}}\n{{currentUser.firstName}} -->\n<div class=\"container\">\n  <div class=\"col-md-12\">\n    <img src=\"{{currentUser.photo}}\" alt=\"\" class=\"img-responsive img-circle\" height=\"180\" width=\"180\">\n  </div>\n  <div class=\"col-md-12\">\n    <h3 class=\"text-center\">{{currentUser.firstName}}</h3>\n    <div *ngIf=currentUser.email>\n      <p class=\"text-center\">\n        <strong>Email: </strong>{{currentUser.email}}</p>\n    </div>\n    <div *ngIf=currentUser.address1>\n      <p class=\"text-center\">\n        <strong>Address: </strong>{{currentUser.address1}}, {{currentUser.address2}}</p>\n    </div>\n    <div *ngIf=currentUser.country>\n      <p class=\"text-center\">\n        <strong>Country: </strong>\n        {{currentUser.country}}\n      </p>\n    </div>\n    <div *ngIf=currentUser.state>\n      <p class=\"text-center\">\n        <strong>State: </strong>\n        {{currentUser.state}}\n      </p>\n    </div>\n    <div *ngIf=currentUser.code>\n      <p class=\"text-center\">\n        <strong>Zip/Pin Code: </strong> {{currentUser.code}}\n      </p>\n    </div>\n  </div>\n  <div>\n    <form class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"address1\">Address 1</label>\n        <input type=\"text\" class=\"form-control\" name=\"address1\" [(ngModel)]=\"address1\" (input)=\"changeValue()\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"address2\">Address 2</label>\n        <input type=\"text\" class=\"form-control\" name=\"address2\" [(ngModel)]=\"address2\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"country\">Country</label>\n        <select #country [(ngModel)]=\"countryname\" (focus)=\"makeCountriesRequest()\" (change)=\"countryValue(country.value)\" class=\"form-control\"\n          name=\"country\">\n          <option *ngFor=\"let country of countries\" [value]=\"country.geonameId\" [value]=\"country.name\">{{country.name}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\" *ngIf=\"cities\">\n        <label for=\"city\">City</label>\n        <select (focus)=\"makeCitiesRequest()\" name=\"city\" #city [(ngModel)]=\"cityname\" class=\"form-control\" (input)=\"cityInput(city.value)\">\n          <option *ngFor=\"let city of cities\" [value]=\"city.name\">{{city.name}}</option>\n        </select>\n      </div>\n      <!-- <div class=\"form-group\">\n        <label for=\"zip\">Zip Code</label>\n        <input (keypress)=\"onlyNumber()\" maxlength=\"5\" minlength=\"5\" class=\"form-control\" [(ngModel)]=\"zip\" name=\"zipcode\">\n      </div> -->\n      <div class=\"form-group\">\n        <label for=\"pin\">Pin Code</label>\n        <input (keypress)=\"onlyNumber()\" maxlength=\"6\" minlength=\"6\" class=\"form-control\" [(ngModel)]=\"pin\" name=\"pincode\">\n      </div>\n      <div>\n        <button (click)=\"updateCurrentUser()\" class=\"btn btn-default\">Update</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_crive_authentication_service__ = __webpack_require__("../../../../../src/app/services/crive-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(criveAuthenticationService, router, http) {
        this.criveAuthenticationService = criveAuthenticationService;
        this.router = router;
        this.http = http;
        this.currentUser = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://www.geonames.org/childrenJSON?geonameId=6255147&callback=listPlaces&style=long&noCacheIE=1521040419460')
            .subscribe(function (res) {
            return _this.countries = res._body.split('listPlaces(')[1];
        });
        this.criveAuthenticationService.getCurrentUser()
            .then(function (profile) { return _this.currentUser = profile; });
    };
    DashboardComponent.prototype.logout = function () {
        this.criveAuthenticationService.logout();
        this.router.navigate(['/welcome']);
    };
    DashboardComponent.prototype.changeValue = function () {
        if (this.address1 === 'USA') {
            this.pin = false;
            this.zip = true;
        }
        else {
            this.pin = true;
            this.zip = false;
        }
    };
    DashboardComponent.prototype.countryName = function (countryValue) {
        var item = this.countries.filter(function (country) {
            if (country.geonameId == countryValue) {
                return country.name;
            }
        })[0];
        this.countryname = item.name;
    };
    DashboardComponent.prototype.countryValue = function (countryvalue) {
        var _this = this;
        this.countryName(countryvalue);
        // const item = this.countries.map(function (country) {
        //   if (country.geonameId == countryvalue) {
        //     return country.name;
        //   }
        // });
        this.http.get('http://www.geonames.org/childrenJSON?geonameId='
            + countryvalue + '&callback=listPlaces&style=long&noCacheIE=1521046928591')
            .subscribe(function (res) {
            return _this.cities = res['_body'].split('listPlaces(')[1];
        });
    };
    DashboardComponent.prototype.makeCountriesRequest = function () {
        this.countries = JSON.parse(this.countries.substring(0, this.countries.length - 2));
        this.countries = this.countries.geonames;
        return this.countries;
    };
    DashboardComponent.prototype.makeCitiesRequest = function () {
        this.cities = JSON.parse(this.cities.substring(0, this.cities.length - 2));
        this.cities = this.cities.geonames;
        return this.cities;
    };
    DashboardComponent.prototype.changeEverything = function () {
        console.log(this.countries);
    };
    DashboardComponent.prototype.cityInput = function (cityName) {
        this.cityname = cityName;
    };
    DashboardComponent.prototype.updateCurrentUser = function () {
        if (this.pin) {
            var data = {
                address1: this.address1,
                address2: this.address2,
                country: this.countryname,
                state: this.cityname,
                code: this.pin,
            };
            this.criveAuthenticationService.updateCurrentUser(data).then(function (res) { return console.log('Update', res); });
        }
        else if (this.zip) {
            var data = {
                address1: this.address1,
                address2: this.address2,
                country: this.countryname,
                state: this.cityname,
                code: this.zip,
            };
            this.criveAuthenticationService.updateCurrentUser(data).then(function (res) { return console.log('Update', res); });
        }
        else if (!this.zip || !this.pin) {
            var data = {
                address1: this.address1,
                address2: this.address2,
                country: this.countryname,
                state: this.cityname,
            };
            this.criveAuthenticationService.updateCurrentUser(data).then(function (res) { return console.log('Update', res); });
        }
    };
    DashboardComponent.prototype.onlyNumber = function (evt) {
        this.zip = __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].maxLength(5);
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_crive_authentication_service__["a" /* CriveAuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\n\n</div>\n\n<div class=\"page-header\"></div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-7 col-sm-6\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading text-center\">\n          Crive\n        </div>\n        <div class=\"panel-body\" align=\"center\">\n          <a class=\"btn btn-social btn-facebook\" (click)=\"fbLogin()\">\n            <span class=\"fa fa-facebook\"></span> Login With Facebook\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_crive_authentication_service__ = __webpack_require__("../../../../../src/app/services/crive-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.fbLogin = function () {
        var _this = this;
        this.authService.fbLogin().then(function () {
            console.log('User has been Logged In');
            _this.router.navigate(['/dashboard']);
        }).catch(function () {
            console.log('Not Authenticated');
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_crive_authentication_service__["a" /* CriveAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/crive-authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriveAuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CriveAuthenticationService = /** @class */ (function () {
    function CriveAuthenticationService(http) {
        this.http = http;
        FB.init({
            appId: '194470757984275',
            status: false,
            cookie: false,
            xfbml: false,
            version: 'v2.5'
        });
    }
    CriveAuthenticationService.prototype.fbLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            FB.login(function (result) {
                if (result.authResponse) {
                    return _this.http.post('api/auth/facebook', { access_token: result.authResponse.accessToken })
                        .toPromise()
                        .then(function (response) {
                        var token = response.headers.get('x-auth-token');
                        if (token) {
                            localStorage.setItem('id_token', token);
                        }
                        resolve(response.json());
                    })
                        .catch(function () { return reject(); });
                }
                else {
                    reject();
                }
            }, { scope: 'public_profile, email' });
        });
    };
    CriveAuthenticationService.prototype.logout = function () {
        localStorage.removeItem('id_token');
    };
    CriveAuthenticationService.prototype.isLoggedIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getCurrentUser()
                .then(function (user) { return resolve(true); })
                .catch(function () { return reject(false); });
        });
    };
    CriveAuthenticationService.prototype.getCurrentUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.get('api/auth/me')
                .toPromise()
                .then(function (response) {
                resolve(response.json());
            }).catch(function () { return reject(); });
        });
    };
    CriveAuthenticationService.prototype.updateCurrentUser = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.post('api/update', params)
                .toPromise()
                .then(function (response) {
                resolve(response.json());
            }).catch(function () {
                reject();
            });
        });
    };
    CriveAuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]])
    ], CriveAuthenticationService);
    return CriveAuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map