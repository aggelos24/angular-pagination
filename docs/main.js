(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n\t<div *ngIf=\"errorMessage\" class=\"red-letters mb-10px\"> {{ errorMessage }} </div>\n\t\n\tLimit: <input type=\"number\" (change)=\"changeLimit(limitInput.value)\" #limitInput min=\"1\" required>\n\n\t<div class=\"mt-10px table-container\">\n\t\t<table>\n\t\t\t<tr>\n\t\t\t\t<th>\n\t\t\t\t\t<a *ngIf=\"sort != 'id'\" href=\"javascript:void(0)\" (click)=\"changeSorting('id', 'asc')\"> ID </a>\n\t\t\t\t\t<a *ngIf=\"sort == 'id' && order == 'asc'\" href=\"javascript:void(0)\" (click)=\"changeSorting('id', 'desc')\"> ID ↑ </a>\n\t\t\t\t\t<a *ngIf=\"sort == 'id' && order == 'desc'\" href=\"javascript:void(0)\" (click)=\"changeSorting('id', 'asc')\"> ID ↓ </a>\n\t\t\t\t</th>\n\t\t\t\t<th>\n\t\t\t\t\t<a *ngIf=\"sort != 'username'\" href=\"javascript:void(0)\" (click)=\"changeSorting('username', 'asc')\"> Username </a>\n\t\t\t\t\t<a *ngIf=\"sort == 'username' && order == 'asc'\" href=\"javascript:void(0)\" (click)=\"changeSorting('username', 'desc')\"> Username ↑ </a>\n\t\t\t\t\t<a *ngIf=\"sort == 'username' && order == 'desc'\" href=\"javascript:void(0)\" (click)=\"changeSorting('username', 'asc')\"> Username ↓ </a>\n\t\t\t\t</th>\n\t\t\t\t<th>\n\t\t\t\t\t<a *ngIf=\"sort != 'email'\" href=\"javascript:void(0)\" (click)=\"changeSorting('email', 'asc')\"> Email </a>\n\t\t\t\t\t<a *ngIf=\"sort == 'email' && order == 'asc'\" href=\"javascript:void(0)\" (click)=\"changeSorting('email', 'desc')\"> Email ↑ </a>\n\t\t\t\t\t<a *ngIf=\"sort == 'email' && order == 'desc'\" href=\"javascript:void(0)\" (click)=\"changeSorting('email', 'asc')\"> Email ↓ </a>\n\t\t\t\t</th>\n\t\t\t\t<th>\n\t\t\t\t\t<a *ngIf=\"sort != 'score'\" href=\"javascript:void(0)\" (click)=\"changeSorting('score', 'asc')\"> Score </a>\n\t\t\t\t\t<a *ngIf=\"sort == 'score' && order == 'asc'\" href=\"javascript:void(0)\" (click)=\"changeSorting('score', 'desc')\"> Score ↑ </a>\n\t\t\t\t\t<a *ngIf=\"sort == 'score' && order == 'desc'\" href=\"javascript:void(0)\" (click)=\"changeSorting('score', 'asc')\"> Score ↓ </a>\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let row of tableData\">\n\t\t\t\t<td> {{ row.id }} </td>\n\t\t\t\t<td> {{ row.username }} </td>\n\t\t\t\t<td> {{ row.email }} </td>\n\t\t\t\t<td> {{ row.score }} </td>\n\t\t\t</tr>\n\t\t\t\n\t\t\t<tr *ngIf=\"noData == true\">\n\t\t\t\t<td class=\"red-letters\" colspan=\"4\"> No Data </td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n\n\t<div *ngIf=\"size > limit\" class=\"pagination-container mt-10px\">\n\t\t<button [ngClass]=\"{'no-hover': page == 1}\" class=\"mr-3px\" [disabled]=\"page == 1\" (click)=\"changePage(page - 1)\"> &laquo; </button>\n\t\t<button *ngIf=\"page >= 3\" class=\"mr-3px\" (click)=\"changePage(1)\"> 1 </button>\n\t\t<div *ngIf=\"page >= 4\" class=\"mr-3px mt-7px\"> ... </div>\n\t\t<button [ngClass]=\"{'active no-hover': buttonArray[0] == page}\" class=\"mr-3px\" (click)=\"changePage(buttonArray[0])\"> {{ buttonArray[0] }} </button>\n\t\t<button [ngClass]=\"{'active no-hover': buttonArray[1] == page}\" class=\"mr-3px\" (click)=\"changePage(buttonArray[1])\"> {{ buttonArray[1] }} </button>\n\t\t<button *ngIf=\"end != 2\" [ngClass]=\"{'active no-hover': buttonArray[2] == page}\" class=\"mr-3px\" (click)=\"changePage(buttonArray[2])\"> {{ buttonArray[2] }} </button>\n\t\t<div *ngIf=\"page <= (end - 3)\" class=\"mr-3px mt-7px\"> ... </div>\n\t\t<button *ngIf=\"page <= (end - 2)\" class=\"mr-3px\" (click)=\"changePage(end)\"> {{ end }} </button>\n\t\t<button [ngClass]=\"{'no-hover': page == end}\" [disabled]=\"page == end\" class=\"mr-3px\" (click)=\"changePage(page + 1)\"> &raquo; </button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.tableData = []; //data displayed in table
    }
    AppComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key == 'ArrowRight' && this.page != this.end) {
            this.changePage(this.page + 1); //go to next page
        }
        else if (event.key == 'ArrowLeft' && this.page != 1) {
            this.changePage(this.page - 1); //go to last page
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.page = 1; //initialize variables
        this.limit = 10;
        this.sort = 'id';
        this.order = 'asc';
        this.errorMessage = null;
        this.buttonArray = [1, 2, 3];
        this.getSize(); //call function getSize
    };
    AppComponent.prototype.getSize = function () {
        var _this = this;
        var url = 'http://localhost:3000/size'; //this is the url from where we are going to get data
        this.sizeSub = this.http.get(url).subscribe(function (data) {
            _this.size = data.number; //assign server's response to a variable
            _this.errorMessage = null; //no error occured, so there is no error message
            _this.getData(); //call function getData
        }, function (error) {
            _this.connectionErrorHandler(); //call function connectionErrorHandler
        });
    };
    AppComponent.prototype.getData = function () {
        var _this = this;
        var url;
        this.end = Math.ceil(this.size / this.limit); //calculate last page
        url = 'http://localhost:3000/data' + '?_page=' + this.page + '&_limit=' + this.limit + '&_sort=' + this.sort + '&_order=' + this.order;
        //if the url seems complicated, read the documentation of json-server on github
        this.dataSub = this.http.get(url).subscribe(function (data) {
            _this.tableData = data; //assign server's response to a variable
            _this.noData = false;
            _this.errorMessage = ''; //no error occured, so there is no error message
        }, function (error) {
            _this.connectionErrorHandler(); //call function connectionErrorHandler
        });
    };
    AppComponent.prototype.changePage = function (page) {
        this.page = page; //refresh page
        if (this.page == 1 || this.page == 2) {
            this.buttonArray = [1, 2, 3];
        }
        else if (this.page == this.end || this.page == this.end - 1) {
            this.buttonArray = [this.end - 2, this.end - 1, this.end];
        }
        else {
            this.buttonArray = [this.page - 1, this.page, this.page + 1];
        }
        this.getData(); //call function getData
    };
    AppComponent.prototype.changeLimit = function (limit) {
        this.limit = (Number(limit) > 0) ? Number(limit) : 10; //initialize limit if it is invalid
        this.page = 1; //set page to 1
        this.buttonArray = [1, 2, 3]; //display the correct buttons
        this.getData(); //call function getData
    };
    AppComponent.prototype.changeSorting = function (column, order) {
        this.sort = column; //refresh variables
        this.order = order;
        this.getData(); //call function getData
    };
    AppComponent.prototype.connectionErrorHandler = function () {
        this.tableData = []; //no data to display
        this.noData = true;
        this.errorMessage = "Probably json-server isnt running"; //display error message
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.sizeSub.unsubscribe(); //delete subscriptions to server
        this.dataSub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']) //when key is pressed
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "handleKeyboardEvent", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tech-1\Documents\pagination\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map