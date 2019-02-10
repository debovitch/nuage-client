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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nuage_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuage/home/home.component */ "./src/app/nuage/home/home.component.ts");
/* harmony import */ var _nuage_invite_invite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nuage/invite/invite.component */ "./src/app/nuage/invite/invite.component.ts");





var routes = [
    {
        path: 'nuage/home',
        component: _nuage_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'nuage/share',
        component: _nuage_invite_invite_component__WEBPACK_IMPORTED_MODULE_4__["InviteComponent"]
    },
    {
        path: '',
        redirectTo: '/nuage/home',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-content {\n    width: 100%;\n    height: calc(100vh - 56px);\n    box-sizing: border-box;\n    background-image: url('greyClouds.png');\n    background-size: cover;\n    text-align: center;\n}\n\n.nav-title {\n    margin: auto;\n    text-transform: uppercase;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0Qix1Q0FBaUQ7SUFDakQsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvZ3JleUNsb3Vkcy5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXYtdGl0bGUge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\n    <mat-sidenav #sidenav>\n        <mat-nav-list>\n            <a mat-list-item href=\"#\">\n                <mat-icon mat-list-icon>person</mat-icon>\n                <span mat-line>thierry@duchassin.fr</span>\n            </a>\n        </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-toolbar color=\"primary\">\n        <button mat-icon-button (click)=\"sidenav.toggle()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n        <span class=\"nav-title\">Nuage</span>\n        <button  mat-icon-button (click)=\"toggleFullscreen()\">\n            <mat-icon *ngIf=\"!fullscreen\">fullscreen</mat-icon>\n            <mat-icon *ngIf=\"fullscreen\">fullscreen_exit</mat-icon>\n        </button>\n    </mat-toolbar>\n\n    <div class=\"app-content\">\n        <img src=\"assets/cloudy.png\" alt=\"Weather\" />\n        <router-outlet></router-outlet>\n    </div>\n</mat-sidenav-container>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Nuage';
    }
    AppComponent.prototype.toggleFullscreen = function () {
        if (!this.isFullScreen()) {
            var fsDocElem = document.documentElement;
            if (fsDocElem.requestFullscreen)
                fsDocElem.requestFullscreen();
            else if (fsDocElem.msRequestFullscreen)
                fsDocElem.msRequestFullscreen();
            else if (fsDocElem.mozRequestFullScreen)
                fsDocElem.mozRequestFullScreen();
            else if (fsDocElem.webkitRequestFullscreen)
                fsDocElem.webkitRequestFullscreen();
            this.fullscreen = true;
        }
        else {
            var fsDoc = document;
            if (fsDoc.exitFullscreen)
                fsDoc.exitFullscreen();
            else if (fsDoc.msExitFullscreen)
                fsDoc.msExitFullscreen();
            else if (fsDoc.mozCancelFullScreen)
                fsDoc.mozCancelFullScreen();
            else if (fsDoc.webkitExitFullscreen)
                fsDoc.webkitExitFullscreen();
            this.fullscreen = false;
        }
    };
    AppComponent.prototype.isFullScreen = function () {
        var fsDoc = document;
        return !!(fsDoc.fullscreenElement
            || fsDoc.mozFullScreenElement
            || fsDoc.webkitFullscreenElement
            || fsDoc.msFullscreenElement);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nc-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _nuage_nuage_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuage/nuage.module */ "./src/app/nuage/nuage.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _nuage_nuage_module__WEBPACK_IMPORTED_MODULE_6__["NuageModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/nuage/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/nuage/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-card {\n    height: calc(100vh - 315px);\n    margin: 20px;\n}\n\n.action-btn {\n    text-transform: uppercase;\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    width: calc(100vw - 40px);\n    height: 70px;\n    font-size: 19px;\n}\n\n.action-btn .mat-icon {\n    height: 28px;\n}\n\n.action-btn span {\n    margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnVhZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbnVhZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJkIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMTVweCk7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0MHB4KTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4uYWN0aW9uLWJ0biAubWF0LWljb24ge1xuICAgIGhlaWdodDogMjhweDtcbn1cblxuLmFjdGlvbi1idG4gc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/nuage/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/nuage/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"action-container\">\n    <button class=\"action-btn\" color=\"accent\" mat-flat-button (click)=\"openUserPopup()\">\n        <mat-icon>add</mat-icon>\n        <span>Nouvelle partie</span>\n    </button>\n</div>\n"

/***/ }),

/***/ "./src/app/nuage/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nuage/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_model_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/model/action */ "./src/app/nuage/shared/model/action.ts");
/* harmony import */ var _shared_model_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/model/event */ "./src/app/nuage/shared/model/event.ts");
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/socket.service */ "./src/app/nuage/shared/services/socket.service.ts");
/* harmony import */ var _username_username_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../username/username.component */ "./src/app/nuage/username/username.component.ts");








var HomeComponent = /** @class */ (function () {
    function HomeComponent(socketService, dialog, router) {
        this.socketService = socketService;
        this.dialog = dialog;
        this.router = router;
        this.action = _shared_model_action__WEBPACK_IMPORTED_MODULE_4__["Action"];
        this.messages = [];
        this.AVATAR_URL = 'https://api.adorable.io/avatars/285/';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.openUserPopup = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {};
        this.dialogRef = this.dialog.open(_username_username_component__WEBPACK_IMPORTED_MODULE_7__["UsernameComponent"], dialogConfig);
        this.dialogRef.afterClosed().subscribe(function (paramsDialog) {
            if (!paramsDialog) {
                return;
            }
            _this.initModel(paramsDialog.username);
            _this.initIoConnection();
            _this.sendNotification(paramsDialog, _shared_model_action__WEBPACK_IMPORTED_MODULE_4__["Action"].JOINED);
            _this.router.navigateByUrl('/nuage/share');
        });
    };
    HomeComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.socketService.initSocket();
        this.ioConnection = this.socketService.onMessage()
            .subscribe(function (message) {
            _this.messages.push(message);
        });
        this.socketService.onEvent(_shared_model_event__WEBPACK_IMPORTED_MODULE_5__["Event"].CONNECT)
            .subscribe(function () {
            console.log('connected');
        });
        this.socketService.onEvent(_shared_model_event__WEBPACK_IMPORTED_MODULE_5__["Event"].DISCONNECT)
            .subscribe(function () {
            console.log('disconnected');
        });
    };
    HomeComponent.prototype.initModel = function (username) {
        this.user = {
            id: username,
            avatar: this.AVATAR_URL + username
        };
    };
    HomeComponent.prototype.sendNotification = function (params, action) {
        this.socketService.send({
            from: this.user,
            action: _shared_model_action__WEBPACK_IMPORTED_MODULE_4__["Action"].JOINED
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nc-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/nuage/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/nuage/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nuage/invite/invite.component.css":
/*!***************************************************!*\
  !*** ./src/app/nuage/invite/invite.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-btn {\n    text-transform: uppercase;\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    width: calc(100vw - 40px);\n    height: 70px;\n    font-size: 19px;\n}\n\n.action-btn .mat-icon {\n    height: 28px;\n}\n\n.action-btn span {\n    margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnVhZ2UvaW52aXRlL2ludml0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9udWFnZS9pbnZpdGUvaW52aXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uLWJ0biB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0MHB4KTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4uYWN0aW9uLWJ0biAubWF0LWljb24ge1xuICAgIGhlaWdodDogMjhweDtcbn1cblxuLmFjdGlvbi1idG4gc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/nuage/invite/invite.component.html":
/*!****************************************************!*\
  !*** ./src/app/nuage/invite/invite.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"action-container\">\n    <button class=\"action-btn\" color=\"accent\" mat-flat-button (click)=\"share()\">\n        <mat-icon>share</mat-icon>\n        <span>Partager</span>\n    </button>\n    <!--<button class=\"action-btn\" mat-flat-button (click)=\"copyLink()\">-->\n        <!--<mat-icon>message</mat-icon>-->\n        <!--<span>Par Messenger</span>-->\n    <!--</button>-->\n    <!--<button class=\"action-btn\" mat-flat-button (click)=\"copyLink()\">-->\n        <!--<mat-icon>message</mat-icon>-->\n        <!--<span>Par messagerie</span>-->\n    <!--</button>-->\n</div>"

/***/ }),

/***/ "./src/app/nuage/invite/invite.component.ts":
/*!**************************************************!*\
  !*** ./src/app/nuage/invite/invite.component.ts ***!
  \**************************************************/
/*! exports provided: InviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteComponent", function() { return InviteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InviteComponent = /** @class */ (function () {
    function InviteComponent() {
    }
    InviteComponent.prototype.ngOnInit = function () {
    };
    InviteComponent.prototype.share = function () {
        var shareNavigator = navigator;
        if (shareNavigator.share) {
            shareNavigator.share({
                title: 'Nuage',
                text: 'Je t\'invite à jouer avec moi à Nuage',
                url: 'https://nuage.duchassin.fr',
            });
        }
        else {
            alert("Navigateur incompatible");
        }
    };
    InviteComponent.prototype.copyLink = function () {
    };
    InviteComponent.prototype.shareByMessenger = function () {
    };
    InviteComponent.prototype.shareByMessage = function () {
    };
    InviteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nc-invite',
            template: __webpack_require__(/*! ./invite.component.html */ "./src/app/nuage/invite/invite.component.html"),
            styles: [__webpack_require__(/*! ./invite.component.css */ "./src/app/nuage/invite/invite.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InviteComponent);
    return InviteComponent;
}());



/***/ }),

/***/ "./src/app/nuage/nuage.module.ts":
/*!***************************************!*\
  !*** ./src/app/nuage/nuage.module.ts ***!
  \***************************************/
/*! exports provided: NuageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuageModule", function() { return NuageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/socket.service */ "./src/app/nuage/shared/services/socket.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/nuage/home/home.component.ts");
/* harmony import */ var _username_username_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./username/username.component */ "./src/app/nuage/username/username.component.ts");
/* harmony import */ var _invite_invite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invite/invite.component */ "./src/app/nuage/invite/invite.component.ts");









var NuageModule = /** @class */ (function () {
    function NuageModule() {
    }
    NuageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _username_username_component__WEBPACK_IMPORTED_MODULE_7__["UsernameComponent"],
                _invite_invite_component__WEBPACK_IMPORTED_MODULE_8__["InviteComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            providers: [_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]],
            entryComponents: [_username_username_component__WEBPACK_IMPORTED_MODULE_7__["UsernameComponent"]]
        })
    ], NuageModule);
    return NuageModule;
}());



/***/ }),

/***/ "./src/app/nuage/shared/model/action.ts":
/*!**********************************************!*\
  !*** ./src/app/nuage/shared/model/action.ts ***!
  \**********************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action;
(function (Action) {
    Action[Action["JOINED"] = 0] = "JOINED";
    Action[Action["LEFT"] = 1] = "LEFT";
    Action[Action["RENAME"] = 2] = "RENAME";
})(Action || (Action = {}));


/***/ }),

/***/ "./src/app/nuage/shared/model/event.ts":
/*!*********************************************!*\
  !*** ./src/app/nuage/shared/model/event.ts ***!
  \*********************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event;
(function (Event) {
    Event["CONNECT"] = "connect";
    Event["DISCONNECT"] = "disconnect";
})(Event || (Event = {}));


/***/ }),

/***/ "./src/app/nuage/shared/services/socket.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/nuage/shared/services/socket.service.ts ***!
  \*********************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);




var SERVER_URL = 'http://localhost:8080';
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.initSocket = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(SERVER_URL);
    };
    SocketService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    SocketService.prototype.onMessage = function () {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.onEvent = function (event) {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on(event, function () { return observer.next(); });
        });
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/nuage/username/username.component.css":
/*!*******************************************************!*\
  !*** ./src/app/nuage/username/username.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content {\n    overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnVhZ2UvdXNlcm5hbWUvdXNlcm5hbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL251YWdlL3VzZXJuYW1lL3VzZXJuYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/nuage/username/username.component.html":
/*!********************************************************!*\
  !*** ./src/app/nuage/username/username.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Entrez un pseudo</h2>\n\n<mat-dialog-content>\n    <mat-form-field>\n        <input matInput name=\"username\" placeholder=\"Pseudo\"\n               [(ngModel)]=\"params.username\" (keyup.enter)=\"onSave()\" required>\n        <mat-error>Le pseudo est obligatoire !</mat-error>\n        <mat-hint>Pikachu</mat-hint>\n    </mat-form-field>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/nuage/username/username.component.ts":
/*!******************************************************!*\
  !*** ./src/app/nuage/username/username.component.ts ***!
  \******************************************************/
/*! exports provided: UsernameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameComponent", function() { return UsernameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var UsernameComponent = /** @class */ (function () {
    function UsernameComponent(dialogRef, params) {
        this.dialogRef = dialogRef;
        this.params = params;
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
    }
    UsernameComponent.prototype.onSave = function () {
        this.dialogRef.close({
            username: this.params.username,
        });
    };
    UsernameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nc-username',
            template: __webpack_require__(/*! ./username.component.html */ "./src/app/nuage/username/username.component.html"),
            styles: [__webpack_require__(/*! ./username.component.css */ "./src/app/nuage/username/username.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], UsernameComponent);
    return UsernameComponent;
}());



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ "./src/app/shared/material/material.module.ts");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            exports: [
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/debovitch/workspace/node/nuage/client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map