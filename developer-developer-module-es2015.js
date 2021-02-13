(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["developer-developer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/developer/developer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/developer/developer.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>developer works!</p>\n");

/***/ }),

/***/ "./src/app/developer/developer-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/developer/developer-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DeveloperRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperRoutingModule", function() { return DeveloperRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _developer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./developer.component */ "./src/app/developer/developer.component.ts");




const routes = [{ path: '', component: _developer_component__WEBPACK_IMPORTED_MODULE_3__["DeveloperComponent"] }];
let DeveloperRoutingModule = class DeveloperRoutingModule {
};
DeveloperRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeveloperRoutingModule);



/***/ }),

/***/ "./src/app/developer/developer.component.scss":
/*!****************************************************!*\
  !*** ./src/app/developer/developer.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmVsb3Blci9kZXZlbG9wZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/developer/developer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/developer/developer.component.ts ***!
  \**************************************************/
/*! exports provided: DeveloperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperComponent", function() { return DeveloperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeveloperComponent = class DeveloperComponent {
    constructor() { }
    ngOnInit() {
    }
};
DeveloperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-developer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./developer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/developer/developer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./developer.component.scss */ "./src/app/developer/developer.component.scss")).default]
    })
], DeveloperComponent);



/***/ }),

/***/ "./src/app/developer/developer.module.ts":
/*!***********************************************!*\
  !*** ./src/app/developer/developer.module.ts ***!
  \***********************************************/
/*! exports provided: DeveloperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperModule", function() { return DeveloperModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _developer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./developer-routing.module */ "./src/app/developer/developer-routing.module.ts");
/* harmony import */ var _developer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./developer.component */ "./src/app/developer/developer.component.ts");
/* harmony import */ var _shared_shared_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared-core.module */ "./src/app/shared/shared-core.module.ts");






let DeveloperModule = class DeveloperModule {
};
DeveloperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_developer_component__WEBPACK_IMPORTED_MODULE_4__["DeveloperComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _developer_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeveloperRoutingModule"], _shared_shared_core_module__WEBPACK_IMPORTED_MODULE_5__["SharedCoreModule"]],
    })
], DeveloperModule);



/***/ })

}]);
//# sourceMappingURL=developer-developer-module-es2015.js.map