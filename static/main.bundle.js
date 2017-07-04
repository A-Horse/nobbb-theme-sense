webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a routerLink=\"/\" routerLinkActive=\"active\">Home</a>\n  <a routerLink=\"/categorys\" routerLinkActive=\"active\">Categorys</a>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<div>{{article.title}}</div>\n<div [innerHTML]=\"article.content\"></div>\n"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div>{{category.name}}</div>\n<ul>\n  <li *ngFor=\"let article of category.articles\">\n    <a routerLink=\"{{article.articleFileNameWithoutSuffix}}\">{{article.title}}</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<div>Categorys</div>\n<ul>\n  <li *ngFor=\"let category of categorys\">\n    <a routerLink=\"/category/{{category.relativeOutputPath}}\">{{category.name}}</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<div>\n  hi\n</div>\n"

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticlePage = (function () {
    function ArticlePage(http, route, location) {
        this.http = http;
        this.route = route;
        this.location = location;
        this.article = {};
    }
    ArticlePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.http.get("http://127.0.0.1:8077/" + params['categoryName'] + "/" + params['articleName'] + ".json").toPromise()
                .then(function (response) { return response.json(); });
        })
            .subscribe(function (res) { return _this.article = res; });
    };
    return ArticlePage;
}());
ArticlePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* Component */])({
        selector: 'article',
        template: __webpack_require__(160),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* Location */]) === "function" && _c || Object])
], ArticlePage);

var _a, _b, _c;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryPage = (function () {
    function CategoryPage(http, route, location) {
        this.http = http;
        this.route = route;
        this.location = location;
        this.category = {};
    }
    CategoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.http
                .get(params['categoryName'] + "/index.json")
                .toPromise()
                .then(function (response) { return response.json(); });
        })
            .subscribe(function (res) { return (_this.category = res); });
    };
    return CategoryPage;
}());
CategoryPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* Component */])({
        selector: 'category',
        template: __webpack_require__(161),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* Location */]) === "function" && _c || Object])
], CategoryPage);

var _a, _b, _c;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorysPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategorysPage = (function () {
    function CategorysPage(http) {
        this.http = http;
        this.categorys = [];
    }
    CategorysPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/categorys.json')
            .toPromise()
            .then(function (response) {
            _this.categorys = response.json();
        });
    };
    return CategorysPage;
}());
CategorysPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'categorys',
        template: __webpack_require__(162),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CategorysPage);

var _a;
//# sourceMappingURL=categorys.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* import { Hero } from './hero';
 * import { HeroService } from './hero.service';*/
var HomePage = (function () {
    function HomePage() {
    }
    HomePage.prototype.ngOnInit = function () {
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'home',
        template: __webpack_require__(163),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [])
], HomePage);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 90;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(100);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(159),
        styles: [__webpack_require__(154)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categorys_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__article_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_modules__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__category_component__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_6__categorys_component__["a" /* CategorysPage */],
            __WEBPACK_IMPORTED_MODULE_8__article_component__["a" /* ArticlePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_modules__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categorys_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__article_component__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomePage */] },
    { path: 'categorys', component: __WEBPACK_IMPORTED_MODULE_3__categorys_component__["a" /* CategorysPage */] },
    { path: 'category/:categoryName', component: __WEBPACK_IMPORTED_MODULE_4__category_component__["a" /* CategoryPage */] },
    { path: 'category/:categoryName/:articleName', component: __WEBPACK_IMPORTED_MODULE_5__article_component__["a" /* ArticlePage */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.modules.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.bundle.js.map