(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/quentinmdl/OneDrive - Ynov/Cours/Ynov Cursus/portfolio-qtn/src/main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[1, "header"], [1, ""], [1, "scroll"], [1, "down"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Blog Personnel MENDEL Quentin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%]{\n\tbackground-image: url(\"https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701593599.jpg\");\n\tmin-height:100vh;\n\talign-items: center;\n\toverflow:hidden; \n background-size: cover; \n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n\tfont-family: 'Raleway', sans-serif;\t\n\tcolor: #fff;\n\tfont-size: 3em;\t\n\ttext-align: center;\n\tpadding-top: 20%;\n}\n.scroll[_ngcontent-%COMP%]{\n\tposition: absolute;\n\ttop: 80%;\n\tleft: 50%;\n\ttransform: translate(-50%,-50%);\n}\n@media (max-width: 768px) {\n\t.scroll[_ngcontent-%COMP%]{\n\t\ttop: 80%;\n\t}\n}\n.down[_ngcontent-%COMP%] {\n\tposition: relative;\n\twidth: 40px;\n\theight: 60px;\n\tborder-radius: 18px;\n\tborder: 4px solid #fff;\n\tbackground: transparent;\n\toverflow: hidden;\n}\n.down[_ngcontent-%COMP%]:before {\n\tcontent: '';\n\tposition: absolute;\n\twidth: 7px;\n\theight: 7px;\n\tborder-radius: 50%;\n\tbackground: #fff;\n\tleft: 50%;\n\ttop: 10px;\n\ttransform: translate(-50%,0);\n\tanimation: scrolling 2s linear infinite;\n}\n@keyframes scrolling{\n\t0%\n\t{\n\t\topacity: 0;\n\t\ttransform: translate(-50%,px);\n\t}\n\t80%\n\t{\n\t\topacity: 1;\n\t\ttransform: translate(-50%,15px);\n\t}\n\t100%\n\t{\n\t\topacity: 0;\n\t\ttransform: translate(-50%,70px);\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHVJQUF1STtDQUN2SSxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGVBQWUsRUFDaUIsa0NBQWtDO0NBQ2hFLHNCQUFzQixFQUFFLHlCQUF5QjtBQUNwRDtBQUNBO0NBQ0Msa0NBQWtDO0NBQ2xDLFdBQVc7Q0FDWCxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsK0JBQStCO0FBQ2hDO0FBQ0E7Q0FDQztFQUNDLFFBQVE7Q0FDVDtBQUNEO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFNBQVM7Q0FDVCxTQUFTO0NBQ1QsNEJBQTRCO0NBQzVCLHVDQUF1QztBQUN4QztBQUdBO0NBQ0M7O0VBRUMsVUFBVTtFQUNWLDZCQUE2QjtDQUM5QjtDQUNBOztFQUVDLFVBQVU7RUFDViwrQkFBK0I7Q0FDaEM7Q0FDQTs7RUFFQyxVQUFVO0VBQ1YsK0JBQStCO0NBQ2hDO0FBQ0QiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93YWxscGFwZXItbWFuaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA5L0hpZ2hfcmVzb2x1dGlvbl93YWxscGFwZXJfYmFja2dyb3VuZF9JRF83NzcwMTU5MzU5OS5qcGdcIik7XG5cdG1pbi1oZWlnaHQ6MTAwdmg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdG92ZXJmbG93OmhpZGRlbjsgXG5cdC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogcG91ciBhbmNpZW5zIENocm9tZSBldCBTYWZhcmkgKi9cbiAgXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiB2ZXJzaW9uIHN0YW5kYXJkaXPDqWUgKi9cbn1cbi5oZWFkZXIgaDF7XG5cdGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHRcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc2l6ZTogM2VtO1x0XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZy10b3A6IDIwJTtcbn1cblxuLnNjcm9sbHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDgwJTtcblx0bGVmdDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5zY3JvbGx7XG5cdFx0dG9wOiA4MCU7XG5cdH1cbn1cblxuLmRvd24ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDYwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDE4cHg7XG5cdGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRvd246YmVmb3JlIHtcblx0Y29udGVudDogJyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDdweDtcblx0aGVpZ2h0OiA3cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0bGVmdDogNTAlO1xuXHR0b3A6IDEwcHg7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsMCk7XG5cdGFuaW1hdGlvbjogc2Nyb2xsaW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuXG5Aa2V5ZnJhbWVzIHNjcm9sbGluZ3tcblx0MCVcblx0e1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSxweCk7XG5cdH1cblx0ODAlXG5cdHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsMTVweCk7XG5cdH1cblx0MTAwJVxuXHR7XG5cdFx0b3BhY2l0eTogMDtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDcwcHgpO1xuXHR9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "b2u2");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _professional_professional_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./professional/professional.component */ "zoEG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");









class AppComponent {
    constructor() {
        this.title = 'portfolio-qtn';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aboutme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-professional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_3__["AboutmeComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], _professional_professional_component__WEBPACK_IMPORTED_MODULE_5__["ProfessionalComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "b2u2");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _professional_professional_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./professional/professional.component */ "zoEG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_8__["AboutmeComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
        _professional_professional_component__WEBPACK_IMPORTED_MODULE_10__["ProfessionalComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_8__["AboutmeComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                    _professional_professional_component__WEBPACK_IMPORTED_MODULE_10__["ProfessionalComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b2u2":
/*!**********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.ts ***!
  \**********************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutmeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutmeComponent.ɵfac = function AboutmeComponent_Factory(t) { return new (t || AboutmeComponent)(); };
AboutmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutmeComponent, selectors: [["app-aboutme"]], decls: 49, vars: 0, consts: [["id", "presentation", 1, "container-fluid"], [1, "row"], [1, "col-12"], ["src", "../../assets/img/Quentin.JPG", "alt", "Responsive image Profile", 1, "profile"], [1, "accroche"], [1, "separation"], [1, "col-md-6", "col-xs-12"], [1, "presentationtitle"], [1, "presentationtext"], [1, "center"], [1, "skillBox"], [1, "skill"], [1, "skill_level", 2, "width", "85%"], [1, "skill_level", 2, "width", "65%"], [1, "skill_level", 2, "width", "30%"], [1, "skill_level", 2, "width", "60%"]], template: function AboutmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00C9tudiant, D\u00E9veloppeur WEB, Passionn\u00E9 par l'informatique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pr\u00E9sentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Je suis \u00E9tudiant en 2\u00E8me Ann\u00E9e de bachelor Informatique chez Ynov Campus, Aix en provence depuis 2019. Sortant tout fra\u00EEchement d'un baccalaur\u00E9at STi2D SIN (Syst\u00E8me d'Information et Num\u00E9rique). J'\u00E9tudie afin d'atteindre mon objectif : qui est de devenir un d\u00E9veloppeur WEB Full-Stack !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "65%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "65%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "PYTHON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div#presentation[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\n\tmin-height: 100vh;\n    background-color: #303030;\n    padding-top: 100px;\n\tpadding-bottom: 100px;\n\ttext-align: center;\n}\n\nimg.profile[_ngcontent-%COMP%]{\n\theight: 200px;\n    border-radius: 50%;   \n}\n\n@media (max-width: 768px) {\n\timg.profile[_ngcontent-%COMP%]{\n\t\theight: 190px;\n\t}\n}\n\n@media (max-width: 568px) {\n\timg.profile[_ngcontent-%COMP%]{\n\t\theight: 150px;\n\t}\n}\n\np.accroche[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tmargin-top: 25px;\n\tfont-family: 'Raleway', sans-serif;\n\tpadding-bottom: 7px;\n\tfont-size: 1.5em;\n}\n\nhr.separation[_ngcontent-%COMP%]{\n\twidth: 10%;\n\tbackground: #fff;\n\tmargin-bottom:25px;\n}\n\np.presentationtext[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tfont-family: 'Raleway', sans-serif;\t\n\tmargin-bottom: 60px;\n\tmargin-top: 30px;\n\tmargin-left: 300px;\n}\n\nh4.presentationtitle[_ngcontent-%COMP%] {\n\tcolor:  #fff;\n\tmargin-top: 80px;\n\tmargin-left: 300px;\n}\n\n@media (max-width: 1140px) {\n\tp.presentationtext[_ngcontent-%COMP%], h4.presentationtitle[_ngcontent-%COMP%]{\n\t\tmargin-left: 80px;\n\t\tmargin-right: 80px;\n\t}\n}\n\n@media (max-width: 940px) {\n\th4.presentationtitle[_ngcontent-%COMP%]{\n\t\tmargin-top: 40px;\n\t}\n\tp.presentationtext[_ngcontent-%COMP%], h4.presentationtitle[_ngcontent-%COMP%]{\n\t\tmargin-left: 80px;\n\t\tmargin-right: 80px;\n\t}\n\th6.presentationtext[_ngcontent-%COMP%], h4.presentationtitle[_ngcontent-%COMP%]{\n\t\tmargin-left: 80px;\n\t\tmargin-right: 80px;\n\t\ttext-align: center;\n\t}\n}\n\n\n\n.center[_ngcontent-%COMP%]{\n\tmargin-right: 300px;\n\tmargin-top: 20px;\n}\n\n@media (max-width: 1140px) {\n\t.center[_ngcontent-%COMP%]{\n\t\tmargin-left: 80px;\n\t\tmargin-right: 80px;\n\t}\n}\n\n.skillBox[_ngcontent-%COMP%] {\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tmargin: 20px 0;\n}\n\n.skillBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\tcolor:#fff;\n\ttext-transform: uppercase;\n\tmargin: 0 0 10px;\n\tpadding: 0;\n\tfont-family: bold;\n\tletter-spacing: 1px;\n}\n\n.skillBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2){\n\tfloat: right;\n\tposition: relative;\n\ttop: -25px;\n}\n\n.skill[_ngcontent-%COMP%] {\n\tbackground: #262626;\n\tpadding: 2px;\n\tbox-sizing: border-box;\n\tborder: 1px solid skyblue;\n\tborder-radius: 2px;\n}\n\n.skill_level[_ngcontent-%COMP%] {\n\tbackground: skyblue;\n\twidth: 100%;\n\theight: 7px;\n}\n\ndiv.competences[_ngcontent-%COMP%] {\n\tdisplay: inline-block;\n}\n\n\n\ndiv#transition[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]\n{\n\tmin-height: 100px;\n\tbackground-color : skyblue;\n\talign-items: center;\n\tcolor: #fff;\n\ttext-align: center;\n\toverflow: hidden;\n}\n\ndiv#transition[_ngcontent-%COMP%]   .textcarousel[_ngcontent-%COMP%]{\n\tfont-size: 1.3em;\n\tfont-weight: bold;\n\tmargin-top: 10px;\n}\n\n.carousel-control-prev[_ngcontent-%COMP%] {\n\tmargin-left: -30px;\n\t\n}\n\n.carousel-control-next[_ngcontent-%COMP%] {\n\tmargin-right: -30px;\t\n}\n\n@media (max-width: 900px) {\n\tdiv#transition[_ngcontent-%COMP%]   .textcarousel[_ngcontent-%COMP%]{\n\t\tfont-size: 1.1em;\n\t}\n}\n\ndiv#transition[_ngcontent-%COMP%]   .textcarousel[_ngcontent-%COMP%]{\n\tfont-size: 1.2em;\n\tfont-weight: bold;\n\tmargin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0bWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7O0FBRWpCO0NBQ0MsaUJBQWlCO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtDQUNyQixxQkFBcUI7Q0FDckIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFDQTtDQUNDO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7O0FBQ0E7Q0FDQztFQUNDLGFBQWE7Q0FDZDtBQUNEOztBQUdBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixrQ0FBa0M7Q0FDbEMsbUJBQW1CO0NBQ25CLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsV0FBVztDQUNYLGtDQUFrQztDQUNsQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0M7RUFDQyxpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0FBQ0E7Q0FDQztFQUNDLGdCQUFnQjtDQUNqQjtDQUNBO0VBQ0MsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7Q0FDbkI7QUFDRDs7QUFJQSxjQUFjOztBQUVkO0NBQ0MsbUJBQW1CO0NBQ25CLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDO0VBQ0MsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjtBQUNEOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWCxjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxVQUFVO0NBQ1YseUJBQXlCO0NBQ3pCLGdCQUFnQjtDQUNoQixVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYOztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsV0FBVztBQUNaOztBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUlBLDJCQUEyQjs7QUFFM0I7O0NBRUMsaUJBQWlCO0NBQ2pCLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGtCQUFrQjs7QUFFbkI7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQztFQUNDLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakIiLCJmaWxlIjoiYWJvdXRtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUFJFU0VOVEFUSU9OICovXG5cbmRpdiNwcmVzZW50YXRpb24gLnJvd3tcblx0bWluLWhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAxMDBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcucHJvZmlsZXtcblx0aGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgXG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0aW1nLnByb2ZpbGV7XG5cdFx0aGVpZ2h0OiAxOTBweDtcblx0fVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XG5cdGltZy5wcm9maWxle1xuXHRcdGhlaWdodDogMTUwcHg7XG5cdH1cbn1cblxuXG5wLmFjY3JvY2hlIHtcblx0Y29sb3I6ICNmZmY7XG5cdG1hcmdpbi10b3A6IDI1cHg7XG5cdGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG5cdHBhZGRpbmctYm90dG9tOiA3cHg7XG5cdGZvbnQtc2l6ZTogMS41ZW07XG59XG5oci5zZXBhcmF0aW9ue1xuXHR3aWR0aDogMTAlO1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRtYXJnaW4tYm90dG9tOjI1cHg7XG59XG5cbnAucHJlc2VudGF0aW9udGV4dCB7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1x0XG5cdG1hcmdpbi1ib3R0b206IDYwcHg7XG5cdG1hcmdpbi10b3A6IDMwcHg7XG5cdG1hcmdpbi1sZWZ0OiAzMDBweDtcbn1cblxuaDQucHJlc2VudGF0aW9udGl0bGUge1xuXHRjb2xvcjogICNmZmY7XG5cdG1hcmdpbi10b3A6IDgwcHg7XG5cdG1hcmdpbi1sZWZ0OiAzMDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcblx0cC5wcmVzZW50YXRpb250ZXh0LGg0LnByZXNlbnRhdGlvbnRpdGxle1xuXHRcdG1hcmdpbi1sZWZ0OiA4MHB4O1xuXHRcdG1hcmdpbi1yaWdodDogODBweDtcblx0fVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG5cdGg0LnByZXNlbnRhdGlvbnRpdGxle1xuXHRcdG1hcmdpbi10b3A6IDQwcHg7XG5cdH1cblx0cC5wcmVzZW50YXRpb250ZXh0LGg0LnByZXNlbnRhdGlvbnRpdGxle1xuXHRcdG1hcmdpbi1sZWZ0OiA4MHB4O1xuXHRcdG1hcmdpbi1yaWdodDogODBweDtcblx0fVxuXHRoNi5wcmVzZW50YXRpb250ZXh0LGg0LnByZXNlbnRhdGlvbnRpdGxle1xuXHRcdG1hcmdpbi1sZWZ0OiA4MHB4O1xuXHRcdG1hcmdpbi1yaWdodDogODBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cbn1cblxuXG5cbi8qIFNLSUxMIENTUyAqL1xuXG4uY2VudGVye1xuXHRtYXJnaW4tcmlnaHQ6IDMwMHB4O1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xuXHQuY2VudGVye1xuXHRcdG1hcmdpbi1sZWZ0OiA4MHB4O1xuXHRcdG1hcmdpbi1yaWdodDogODBweDtcblx0fVxufVxuXG4uc2tpbGxCb3gge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiAyMHB4IDA7XG59XG4uc2tpbGxCb3ggcCB7XG5cdGNvbG9yOiNmZmY7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdG1hcmdpbjogMCAwIDEwcHg7XG5cdHBhZGRpbmc6IDA7XG5cdGZvbnQtZmFtaWx5OiBib2xkO1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNraWxsQm94IHA6bnRoLWNoaWxkKDIpe1xuXHRmbG9hdDogcmlnaHQ7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAtMjVweDtcbn1cbi5za2lsbCB7XG5cdGJhY2tncm91bmQ6ICMyNjI2MjY7XG5cdHBhZGRpbmc6IDJweDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0Ym9yZGVyOiAxcHggc29saWQgc2t5Ymx1ZTtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xufVxuLnNraWxsX2xldmVsIHtcblx0YmFja2dyb3VuZDogc2t5Ymx1ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogN3B4O1xufVxuZGl2LmNvbXBldGVuY2VzIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5cblxuLyogVFJBTlNJVElPTiAvIENBUk9VU0VMICAqL1xuXG5kaXYjdHJhbnNpdGlvbiAucm93XG57XG5cdG1pbi1oZWlnaHQ6IDEwMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yIDogc2t5Ymx1ZTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuZGl2I3RyYW5zaXRpb24gLnRleHRjYXJvdXNlbHtcblx0Zm9udC1zaXplOiAxLjNlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcblx0bWFyZ2luLWxlZnQ6IC0zMHB4O1xuXHRcbn1cbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuXHRtYXJnaW4tcmlnaHQ6IC0zMHB4O1x0XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuXHRkaXYjdHJhbnNpdGlvbiAudGV4dGNhcm91c2Vse1xuXHRcdGZvbnQtc2l6ZTogMS4xZW07XG5cdH1cbn1cblxuZGl2I3RyYW5zaXRpb24gLnRleHRjYXJvdXNlbHtcblx0Zm9udC1zaXplOiAxLjJlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutme',
                templateUrl: './aboutme.component.html',
                styleUrls: ['./aboutme.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 2, vars: 0, template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
        (function ($) {
            $(window).scroll(function () {
                $('nav').toggleClass('scrolled', $($).scrollTop() > 300);
            });
        })(jQuery);
        (function ($) {
            $('.navbar-nav>li>a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        })(jQuery);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 37, vars: 0, consts: [["id", "navbar", 1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo02", "aria-controls", "navbarTogglerDemo02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "line"], ["id", "navbarTogglerDemo02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "#top", 1, "nav-link"], [1, "sr-only"], ["href", "#presentation", "data-offset", "90", 1, "nav-link"], ["href", "#portfolio", "data-offset", "90", 1, "nav-link"], ["href", "#professionnel", "data-offset", "90", 1, "nav-link"], ["href", "#contact", "data-offset", "90", 1, "nav-link"], ["id", "socialnavbar", 1, "navbar-nav", "nav-flex-icons"], ["href", "https://www.facebook.com/quentin.mendel", "target", "_blank", 1, "nav-link"], [1, "fa", "fa-facebook"], ["href", "https://www.linkedin.com/in/quentin-mendel-629912193/", "target", "_blank", 1, "nav-link"], [1, "fa", "fa-linkedin"], ["href", "https://www.instagram.com/quentin_mdl/", "target", "_blank", 1, "nav-link"], [1, "fa", "fa-instagram"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "YNOV Campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ACCUEIL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "QUI-SUIS-JE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "PROFESSIONNEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]], styles: [".navbar[_ngcontent-%COMP%] {\n    font-size: 1.1em;\n    padding-bottom: 15px;  \n    padding-top: 15px;\n\tdisplay: none; \n\tbackground-color: transparent !important;\n}\n.navbar-toggler[_ngcontent-%COMP%]{\n\twidth: 45px;\n\theight: 31.8px;\n\tbackground-color: black !important;\n}\n.navbar-toggler[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{\n\twidth: 100%;\n\tfloat: left;\n\theight: 4px;\n\tbackground-color: #fff;\n\tmargin-bottom: 5px;\n\tborder-radius: 4px;\n}\n.navbar-nav[_ngcontent-%COMP%]{\n\tbackground-color: transparent !important; \t\n}\n.navbar.scrolled[_ngcontent-%COMP%] {\n\tbackground-color: #12161a !important;\n\tdisplay: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDcEIsYUFBYTtDQUNiLHdDQUF3QztBQUN6QztBQUNBO0NBQ0MsV0FBVztDQUNYLGNBQWM7Q0FDZCxrQ0FBa0M7QUFDbkM7QUFDQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsV0FBVztDQUNYLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyx3Q0FBd0M7QUFDekM7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyxjQUFjO0FBQ2YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4OyAgXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG5cdGRpc3BsYXk6IG5vbmU7IFxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLm5hdmJhci10b2dnbGVye1xuXHR3aWR0aDogNDVweDtcblx0aGVpZ2h0OiAzMS44cHg7XG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyLXRvZ2dsZXIgLmxpbmV7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDogbGVmdDtcblx0aGVpZ2h0OiA0cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdG1hcmdpbi1ib3R0b206IDVweDtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xufVxuLm5hdmJhci1uYXZ7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IFx0XG59XG4ubmF2YmFyLnNjcm9sbGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzEyMTYxYSAhaW1wb3J0YW50O1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 19, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", ";", "text-center"], [1, "buttontop"], ["id", "cRetour", "href", "#top", 1, "cInvisible"], [1, "textfooter"], [1, "socialfooter"], ["href", "https://www.facebook.com/quentin.mendel", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "https://www.instagram.com/quentin_mdl/", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["href", "https://www.linkedin.com/in/quentin-mendel-629912193/", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Aix YnovCampus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A9 Quentin Mendel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%]   div.row[_ngcontent-%COMP%] {\n    min-height: 40vh;\n\tbackground-color: #12161a; \n    align-items: center;\n}\n\ndiv.socialfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\ttext-decoration: none;\n\tcolor:#fff;\n}\n\ndiv.socialfooter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n\tfont-size: 1.5em;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n}\n\np.textfooter[_ngcontent-%COMP%] {\n\tcolor:#fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25CLHlCQUF5QjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1giLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIgZGl2LnJvdyB7XG4gICAgbWluLWhlaWdodDogNDB2aDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzEyMTYxYTsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZGl2LnNvY2lhbGZvb3RlciBhIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjojZmZmO1xufVxuXG5kaXYuc29jaWFsZm9vdGVyIGkge1xuXHRmb250LXNpemU6IDEuNWVtO1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbnAudGV4dGZvb3RlciB7XG5cdGNvbG9yOiNmZmY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "b2u2");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _professional_professional_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./professional/professional.component */ "zoEG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");









const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: '',
        component: _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_3__["AboutmeComponent"]
    },
    {
        path: '',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
    },
    {
        path: '',
        component: _professional_professional_component__WEBPACK_IMPORTED_MODULE_5__["ProfessionalComponent"]
    },
    {
        path: '',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 2, vars: 0, template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "projects works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zoEG":
/*!********************************************************!*\
  !*** ./src/app/professional/professional.component.ts ***!
  \********************************************************/
/*! exports provided: ProfessionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalComponent", function() { return ProfessionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfessionalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfessionalComponent.ɵfac = function ProfessionalComponent_Factory(t) { return new (t || ProfessionalComponent)(); };
ProfessionalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfessionalComponent, selectors: [["app-professional"]], decls: 2, vars: 0, template: function ProfessionalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "professional works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9mZXNzaW9uYWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessionalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-professional',
                templateUrl: './professional.component.html',
                styleUrls: ['./professional.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map