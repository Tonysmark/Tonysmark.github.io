(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-footer id=\"footer\">\n    <div nz-row nzType=\"flex\" nzJustify=\"center\">\n        <div nz-col nzSpan=\"6\">\n            <div class=\"title\">社区</div>\n            <ul>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n            </ul>\n        </div>\n        <div nz-col nzSpan=\"6\">\n            <div class=\"title\">友情链接</div>\n            <ul>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n            </ul>\n        </div>\n        <div nz-col nzSpan=\"6\">\n            <div class=\"title\">反馈</div>\n            <ul>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n            </ul>\n        </div>\n        <div nz-col nzSpan=\"6\">\n            <div class=\"title\">Fork</div>\n            <ul>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n                <li>Lorem ipsum dolor sit amet consectetur.</li>\n            </ul>\n        </div>\n    </div>\n    <nz-divider></nz-divider>\n</nz-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/logo/logo.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/logo/logo.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"logo\">\n    <!-- TODO： 可以定制化 -->\n    <img src=\"../../../../assets/logo.png\" alt=\"\" />\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user/user.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user/user.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"user\">\n    <button nz-button nzType=\"link\" nz-dropdown [nzDropdownMenu]=\"Alert\" nzPlacement=\"bottomCenter\">\n        <nz-badge nzDot>\n            <i nz-icon nzType=\"bell\" nzTheme=\"outline\"></i>\n        </nz-badge>\n    </button>\n    <nz-dropdown-menu #Alert=\"nzDropdownMenu\">\n        <ul nz-menu>\n            <li nz-menu-item>1st menu item</li>\n            <li nz-menu-item>2nd menu item</li>\n            <li nz-menu-item>3rd menu item</li>\n        </ul>\n    </nz-dropdown-menu>\n    <nz-avatar nzIcon=\"user\" nzSrc=\"//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\"></nz-avatar>\n    <span class=\"ml-5\">{{ username }}</span>\n    <a class=\"ml-5 Info\" nz-dropdown nzTrigger=\"click\" [nzDropdownMenu]=\"Info\">\n        <i nz-icon nzType=\"down\"></i>\n    </a>\n    <nz-dropdown-menu #Info=\"nzDropdownMenu\">\n        <ul nz-menu nzSelectable>\n            <li nz-menu-item>1st menu item</li>\n            <li nz-menu-item>2nd menu item</li>\n            <li nz-menu-item>3rd menu item</li>\n        </ul>\n    </nz-dropdown-menu>\n</div>\n");

/***/ }),

/***/ "./src/app/shared/components/components.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-core.module */ "./src/app/shared/shared-core.module.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/shared/components/logo/logo.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/shared/components/user/user.component.ts");







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_core_module__WEBPACK_IMPORTED_MODULE_3__["SharedCoreModule"]],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#footer {\n  padding: 50px;\n  background-color: #81ecec;\n}\n#footer .title {\n  font-weight: bold;\n  font-size: 17px;\n  margin-bottom: 24px;\n}\n#footer ul {\n  padding-left: 0;\n}\n#footer ul > li {\n  line-height: 2;\n  font-size: 15px;\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0Q6XFxQcm9qZWN0XFxpemItcmVmYWN0LWZyb250L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FDQ0o7QURBSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7QUNFUjtBREFJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MWVjZWM7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIHVsID4gbGkge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG59XHJcbiIsIiNmb290ZXIge1xuICBwYWRkaW5nOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFlY2VjO1xufVxuI2Zvb3RlciAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuI2Zvb3RlciB1bCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbiNmb290ZXIgdWwgPiBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/components/logo/logo.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/logo/logo.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#logo {\n  margin-left: 20px;\n}\n#logo img {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9nby9EOlxcUHJvamVjdFxcaXpiLXJlZmFjdC1mcm9udC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxsb2dvXFxsb2dvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSxVQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxufVxyXG4iLCIjbG9nbyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuI2xvZ28gaW1nIHtcbiAgd2lkdGg6IDYwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/logo/logo.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/logo/logo.component.ts ***!
  \**********************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoComponent = class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
};
LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/logo/logo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logo.component.scss */ "./src/app/shared/components/logo/logo.component.scss")).default]
    })
], LogoComponent);



/***/ }),

/***/ "./src/app/shared/components/user/user.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/user/user.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#user {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n#user .Info {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci9EOlxcUHJvamVjdFxcaXpiLXJlZmFjdC1mcm9udC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFx1c2VyXFx1c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN1c2VyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLkluZm8ge1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgfVxyXG59XHJcbiIsIiN1c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiN1c2VyIC5JbmZvIHtcbiAgY29sb3I6IGdyYXk7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/user/user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/user/user.component.ts ***!
  \**********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
    constructor() {
        this.username = 'Emma Watson';
    }
    ngOnInit() { }
};
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/shared/components/user/user.component.scss")).default]
    })
], UserComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.module */ "./src/app/shared/components/components.module.ts");




/**
 * 为其他页面提供基础 component pipes
 */
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]],
        exports: [_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]],
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map