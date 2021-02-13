function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-page-common-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/common-page.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/common-page.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonPageCommonPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n    <div class=\"logo\">\n        <img src=\"../../favicon.ico\" alt=\"\" />\n        <a href=\"\">众包平台</a>\n    </div>\n    <div class=\"navigation\">\n        <ul>\n            <li class=\"tab\">\n              <a routerLink=\"/dev\">开发者</a></li>\n            <li class=\"tab\">\n              <a routerLink=\"/admin\">后台管理</a></li>\n            <li class=\"tab\">\n              <a routerLink=\"/c\">基本用户</a></li>\n        </ul>\n    </div>\n    <div class=\"operation\">\n        <span class=\"signup\">\n            <!-- TODO: 带的data不一样 -->\n            <button nz-button nzType=\"link\" routerLink=\"/joinin\">\n                登 录\n            </button>\n        </span>\n        <span class=\"signin\">\n            <button nz-button nzShape=\"round\" nzType=\"primary\" routerLink=\"/joinin\">\n                注 册\n            </button>\n        </span>\n    </div>\n</header>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/components/forget/forget.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/components/forget/forget.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonPageComponentsForgetForgetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"title\">\n    <h1>忘记密码</h1>\n</div>\n<form nz-form [formGroup]=\"retrveForm\" class=\"login-form\">\n    <nz-form-item>\n        <nz-form-control nzErrorTip=\"Please input your username!\">\n            <nz-input-group nzPrefixIcon=\"mail\">\n                <input type=\"text\" nzSize=\"large\" nz-input formControlName=\"email\" placeholder=\"邮箱\" />\n            </nz-input-group>\n        </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n        <nz-form-control nzErrorTip=\"请输入验证码\" nzExtra=\"我们会向您的邮箱发送一封含有验证码的邮件\">\n            <div nz-row [nzGutter]=\"8\">\n                <div nz-col nzSpan=\"12\">\n                    <input nz-input placeholder=\"验证码\" formControlName=\"verificationCode\" />\n                </div>\n                <div nz-col nzSpan=\"12\">\n                    <button nz-button>发送验证码</button>\n                </div>\n            </div>\n        </nz-form-control>\n    </nz-form-item>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/components/signin/signin.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/components/signin/signin.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonPageComponentsSigninSigninComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"title\">\n    <h1>登录账户</h1>\n</div>\n<form nz-form [formGroup]=\"signinForm\" class=\"login-form\">\n    <nz-form-item>\n        <nz-form-control nzErrorTip=\"Please input your username!\">\n            <nz-input-group nzPrefixIcon=\"mail\">\n                <input type=\"text\" nzSize=\"large\" nz-input formControlName=\"email\" placeholder=\"邮箱\" />\n            </nz-input-group>\n        </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n        <nz-form-control nzErrorTip=\"Please input your Password!\">\n            <nz-input-group nzPrefixIcon=\"lock\">\n                <input type=\"password\" nzSize=\"large\" nz-input formControlName=\"password\" placeholder=\"密码\" />\n            </nz-input-group>\n        </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n        <nz-form-control>\n            <label nz-checkbox formControlName=\"remember\"> <span>记住我</span></label>\n            <br />\n            没有账号？<a (click)=\"changeTo()\">立即注册账号</a>\n        </nz-form-control>\n    </nz-form-item>\n    <button nz-button nzBlock=\"true\" nzType=\"primary\" (click)=\"signin()\">登 录</button>\n    <nz-divider nzText=\"OR\"></nz-divider>\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" nzJustify=\"space-around\">\n        <div nz-col>\n            <embed class=\"width-20\" src=\"../../../../assets/svgs/qq.svg\" type=\"\" />\n        </div>\n        <div nz-col>\n            <embed class=\"width-20\" src=\"../../../../assets/svgs/wechat.svg\" type=\"\" />\n        </div>\n    </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/components/signup/signup.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/components/signup/signup.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonPageComponentsSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"title\">\n    <h1>创建账户</h1>\n</div>\n<form nz-form [formGroup]=\"signupForm\" class=\"login-form\">\n    <nz-form-item>\n        <nz-form-control nzErrorTip=\"Please input your username!\">\n            <nz-input-group nzPrefixIcon=\"user\">\n                <input type=\"text\" nzSize=\"large\" nz-input formControlName=\"username\" placeholder=\"用户名\" />\n            </nz-input-group>\n        </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n        <nz-form-control nzErrorTip=\"Please input your username!\">\n            <nz-input-group nzPrefixIcon=\"mail\">\n                <input type=\"text\" nzSize=\"large\" nz-input formControlName=\"email\" placeholder=\"邮箱\" />\n            </nz-input-group>\n        </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n        <nz-form-control nzErrorTip=\"Please input your Password!\">\n            <nz-input-group nzPrefixIcon=\"lock\">\n                <input type=\"password\" nzSize=\"large\" nz-input formControlName=\"password\" placeholder=\"密码\" />\n            </nz-input-group>\n        </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n        <nz-form-control nzErrorTip=\"Please input your Password!\">\n            <nz-input-group nzPrefixIcon=\"lock\">\n                <input type=\"password\" nzSize=\"large\" nz-input formControlName=\"passwordRepeat\" placeholder=\"再次输入密码\" />\n            </nz-input-group>\n        </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n        <nz-form-control>\n            我是\n            <nz-radio-group formControlName=\"accountType\">\n                <label nz-radio nzValue=\"customer\">消费者</label>\n                <label nz-radio nzValue=\"developer\">开发者</label>\n            </nz-radio-group>\n        </nz-form-control>\n    </nz-form-item>\n    <button nz-button nzBlock=\"true\" nzType=\"primary\" (click)=\"signup()\">注册</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/home/home.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/home/home.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonPageHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"hoe-container container\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" nzGutter=\"48\" class=\"main-content\">\n        <div nz-col nzSpan=\"12\">\n            <div class=\"title\">\n                <h1>百万专业开发资源，就在开源众包</h1>\n                <h1>垂直技术社区10年沉淀 350万+活跃开发者 海量行为数据智能匹配</h1>\n            </div>\n            <div class=\"subtitle\">\n                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur soluta fugit reiciendis ut, quis odio sint nam iure\n                consectetur nemo labore eveniet laboriosam harum accusantium vitae possimus necessitatibus repellendus impedit?\n            </div>\n            <div class=\"subscribe mt-20\">\n                <button nz-button nzType=\"primary\" nzSize=\"large\" nzShape=\"round\">立刻发布需求</button>\n                <button nz-button nzSize=\"large\" nzShape=\"round\">查看成功案例</button>\n            </div>\n        </div>\n\n        <div nz-col nzSpan=\"12\">\n            <div class=\"side-image\">\n                <embed src=\"../../../assets/svgs/undraw_creative_team_r90h.svg\" type=\"\" />\n            </div>\n        </div>\n    </div>\n    <div class=\"text-center mb-20\">\n        <h2>支持的技术栈</h2>\n    </div>\n    <div nz-row class=\"stack-content\" nzType=\"flex\" nzJustify=\"space-between\" nzAlign=\"middle\">\n        <div class=\"mb-20 stack-icon animation1 text-center\" nz-col nzSpan=\"4\"><embed class=\"stack-logo\" src=\"../../../assets/stack-icon/JavaScript.svg\" /></div>\n        <div class=\"mb-20 stack-icon animation2 text-center\" nz-col nzSpan=\"4\"><embed class=\"stack-logo\" src=\"../../../assets/stack-icon/typescript.svg\" /></div>\n        <div class=\"mb-20 stack-icon animation3 text-center\" nz-col nzSpan=\"4\"><embed class=\"stack-logo\" src=\"../../../assets/stack-icon/Angular.svg\" /></div>\n        <div class=\"mb-20 stack-icon animation4 text-center\" nz-col nzSpan=\"4\"><embed class=\"stack-logo\" src=\"../../../assets/stack-icon/Vue.svg\" /></div>\n        <div class=\"mb-20 stack-icon animation5 text-center\" nz-col nzSpan=\"4\"><embed class=\"stack-logo\" src=\"../../../assets/stack-icon/Android.svg\" /></div>\n        <div class=\"mb-20 stack-icon animation6 text-center\" nz-col nzSpan=\"4\"><embed class=\"stack-logo\" src=\"../../../assets/stack-icon/file_type_flutter.svg\" /></div>\n        <div class=\"mb-20 stack-icon animation1 text-center\" nz-col nzSpan=\"4\"><embed class=\"stack-logo\" src=\"../../../assets/stack-icon/ionic.svg\" /></div>\n        <div class=\"mb-20 stack-icon animation2 text-center\" nz-col nzSpan=\"4\"><embed class=\"stack-logo\" src=\"../../../assets/stack-icon/mongodb.svg\" /></div>\n        <div class=\"mb-20 stack-icon animation3 text-center\" nz-col nzSpan=\"4\"><embed class=\"stack-logo\" src=\"../../../assets/stack-icon/my-SQL.svg\" /></div>\n        <div class=\"mb-20 stack-icon animation4 text-center\" nz-col nzSpan=\"4\"><embed class=\"stack-logo\" src=\"../../../assets/stack-icon/nestjs.svg\" /></div>\n        <div class=\"mb-20 stack-icon animation5 text-center\" nz-col nzSpan=\"4\"><embed class=\"stack-logo\" src=\"../../../assets/stack-icon/Nodejs.svg\" /></div>\n        <div class=\"mb-20 stack-icon animation6 text-center\" nz-col nzSpan=\"4\"><embed class=\"stack-logo\" src=\"../../../assets/stack-icon/python.svg\" /></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/joinin/joinin.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/joinin/joinin.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonPageJoininJoininComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"v-header\">\n    <div class=\"full-video-wrap\">\n        <video src=\"../../../assets/footages/Footage-1.m4v\" autoPlay=\"true\" loop=\"true\"></video>\n    </div>\n    <app-logo class=\"logo\" routerLink=\"/home\"></app-logo>\n    <!-- <a class=\"title\" routerLink=\"/home\">众包平台</a> -->\n    <div class=\"components-wrapper\">\n        <div nz-row>\n            <!-- TODO: nzOffset 动态改变 0 7 14 -->\n            <div nz-col [nzOffset]=\"indexer[pageIndex].offset\" nzSpan=\"10\" class=\"components-content\">\n                <div class=\"indecator indecator-left\" *ngIf=\"indexer[pageIndex].offset != 0\">\n                    <a (click)=\"changeIndex('back')\" nzType=\"default\" nzShape=\"circle\">\n                        <i nz-icon nzType=\"left\" nzTheme=\"outline\"></i>\n                        {{ indexer[pageIndex - 1].name }}\n                    </a>\n                </div>\n\n                <div class=\"indecator indecator-right\" *ngIf=\"indexer[pageIndex].offset != 14\">\n                    <a (click)=\"changeIndex('push')\" nzType=\"default\" nzShape=\"circle\">\n                        {{ indexer[pageIndex + 1].name }}\n                        <i nz-icon nzType=\"right\" nzTheme=\"outline\"></i>\n                    </a>\n                </div>\n                <div class=\"forms-wrapper\">\n                    <div [ngSwitch]=\"indexer[pageIndex].offset\">\n                        <div *ngSwitchCase=\"0\">\n                            <app-signin (changeEvt)=\"changeIndex()\"></app-signin>\n                        </div>\n                        <div *ngSwitchCase=\"7\">\n                            <app-signup></app-signup>\n                        </div>\n                        <div *ngSwitchCase=\"14\">\n                            <app-forget></app-forget>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/common-page/common-page-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/common-page/common-page-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CommonPageRoutingModule */

  /***/
  function srcAppCommonPageCommonPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonPageRoutingModule", function () {
      return CommonPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _common_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./common-page.component */
    "./src/app/common-page/common-page.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/common-page/home/home.component.ts");
    /* harmony import */


    var _joinin_joinin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./joinin/joinin.component */
    "./src/app/common-page/joinin/joinin.component.ts");

    var routes = [{
      path: '',
      component: _common_page_component__WEBPACK_IMPORTED_MODULE_3__["CommonPageComponent"],
      children: [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
      }]
    }, {
      path: 'joinin',
      component: _joinin_joinin_component__WEBPACK_IMPORTED_MODULE_5__["JoininComponent"]
    }];

    var CommonPageRoutingModule = function CommonPageRoutingModule() {
      _classCallCheck(this, CommonPageRoutingModule);
    };

    CommonPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CommonPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/common-page/common-page.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/common-page/common-page.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonPageCommonPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header {\n  padding: 10px 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nheader .logo img {\n  width: 50px;\n}\nheader .logo a {\n  padding-left: 22px;\n  font-size: 20px;\n  color: #f5c66a;\n}\nheader .navigation ul {\n  margin: 0;\n  list-style: none;\n}\nheader .navigation ul li {\n  padding: 0 20px;\n  font-size: 17px;\n  display: inline-block;\n}\nheader .operation span {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLXBhZ2UvRDpcXFByb2plY3RcXGl6Yi1yZWZhY3QtZnJvbnQvc3JjXFxhcHBcXGNvbW1vbi1wYWdlXFxjb21tb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uLXBhZ2UvY29tbW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0o7QURDUTtFQUNJLFdBQUE7QUNDWjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NaO0FER1E7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUNEWjtBREVZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0FoQjtBREtRO0VBQ0ksaUJBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1wYWdlL2NvbW1vbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjVjNjZhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm9wZXJhdGlvbiB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJoZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmhlYWRlciAubG9nbyBpbWcge1xuICB3aWR0aDogNTBweDtcbn1cbmhlYWRlciAubG9nbyBhIHtcbiAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZjVjNjZhO1xufVxuaGVhZGVyIC5uYXZpZ2F0aW9uIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuaGVhZGVyIC5uYXZpZ2F0aW9uIHVsIGxpIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmhlYWRlciAub3BlcmF0aW9uIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/common-page/common-page.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/common-page/common-page.component.ts ***!
    \******************************************************/

  /*! exports provided: CommonPageComponent */

  /***/
  function srcAppCommonPageCommonPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonPageComponent", function () {
      return CommonPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CommonPageComponent =
    /*#__PURE__*/
    function () {
      function CommonPageComponent() {
        _classCallCheck(this, CommonPageComponent);
      }

      _createClass(CommonPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CommonPageComponent;
    }();

    CommonPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-common-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./common-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/common-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./common-page.component.scss */
      "./src/app/common-page/common-page.component.scss")).default]
    })], CommonPageComponent);
    /***/
  },

  /***/
  "./src/app/common-page/common-page.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/common-page/common-page.module.ts ***!
    \***************************************************/

  /*! exports provided: CommonPageModule */

  /***/
  function srcAppCommonPageCommonPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonPageModule", function () {
      return CommonPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_shared_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared-core.module */
    "./src/app/shared/shared-core.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _common_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common-page-routing.module */
    "./src/app/common-page/common-page-routing.module.ts");
    /* harmony import */


    var _common_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./common-page.component */
    "./src/app/common-page/common-page.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/common-page/home/home.component.ts");
    /* harmony import */


    var _joinin_joinin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./joinin/joinin.component */
    "./src/app/common-page/joinin/joinin.component.ts");
    /* harmony import */


    var _components_forget_forget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/forget/forget.component */
    "./src/app/common-page/components/forget/forget.component.ts");
    /* harmony import */


    var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/signin/signin.component */
    "./src/app/common-page/components/signin/signin.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/common-page/components/signup/signup.component.ts");

    var CommonPageModule = function CommonPageModule() {
      _classCallCheck(this, CommonPageModule);
    };

    CommonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_common_page_component__WEBPACK_IMPORTED_MODULE_6__["CommonPageComponent"], _joinin_joinin_component__WEBPACK_IMPORTED_MODULE_8__["JoininComponent"], _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"], _components_forget_forget_component__WEBPACK_IMPORTED_MODULE_9__["ForgetComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _common_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommonPageRoutingModule"], _shared_shared_core_module__WEBPACK_IMPORTED_MODULE_3__["SharedCoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
    })], CommonPageModule);
    /***/
  },

  /***/
  "./src/app/common-page/components/forget/forget.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/common-page/components/forget/forget.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonPageComponentsForgetForgetComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  margin-bottom: 20px;\n}\n.title h1 {\n  font-size: 40px;\n  position: relative;\n}\n.title h1:after {\n  content: \"Forget\";\n  font-weight: 100;\n  position: absolute;\n  top: -68px;\n  left: 76px;\n  font-size: 100px;\n  color: rgba(0, 0, 0, 0.2);\n  text-shadow: 3px 0 10px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLXBhZ2UvY29tcG9uZW50cy9mb3JnZXQvRDpcXFByb2plY3RcXGl6Yi1yZWZhY3QtZnJvbnQvc3JjXFxhcHBcXGNvbW1vbi1wYWdlXFxjb21wb25lbnRzXFxmb3JnZXRcXGZvcmdldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uLXBhZ2UvY29tcG9uZW50cy9mb3JnZXQvZm9yZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tcGFnZS9jb21wb25lbnRzL2ZvcmdldC9mb3JnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnRm9yZ2V0JztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC02OHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA3NnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udGl0bGUgaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50aXRsZSBoMTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiRm9yZ2V0XCI7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNjhweDtcbiAgbGVmdDogNzZweDtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdGV4dC1zaGFkb3c6IDNweCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/common-page/components/forget/forget.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/common-page/components/forget/forget.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ForgetComponent */

  /***/
  function srcAppCommonPageComponentsForgetForgetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetComponent", function () {
      return ForgetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ForgetComponent =
    /*#__PURE__*/
    function () {
      function ForgetComponent(fb) {
        _classCallCheck(this, ForgetComponent);

        this.fb = fb;
        this.retrveForm = this.fb.group({
          email: [],
          verificationCode: []
        });
      }

      _createClass(ForgetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgetComponent;
    }();

    ForgetComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    ForgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forget',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forget.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/components/forget/forget.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forget.component.scss */
      "./src/app/common-page/components/forget/forget.component.scss")).default]
    })], ForgetComponent);
    /***/
  },

  /***/
  "./src/app/common-page/components/signin/signin.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/common-page/components/signin/signin.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonPageComponentsSigninSigninComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  margin-bottom: 20px;\n}\n.title h1 {\n  font-size: 40px;\n  position: relative;\n}\n.title h1:after {\n  content: \"Login\";\n  font-weight: 100;\n  position: absolute;\n  top: -68px;\n  left: 76px;\n  font-size: 100px;\n  color: rgba(0, 0, 0, 0.2);\n  text-shadow: 3px 0 10px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLXBhZ2UvY29tcG9uZW50cy9zaWduaW4vRDpcXFByb2plY3RcXGl6Yi1yZWZhY3QtZnJvbnQvc3JjXFxhcHBcXGNvbW1vbi1wYWdlXFxjb21wb25lbnRzXFxzaWduaW5cXHNpZ25pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uLXBhZ2UvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tcGFnZS9jb21wb25lbnRzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnTG9naW4nO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTY4cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDc2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50aXRsZSBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRpdGxlIGgxOmFmdGVyIHtcbiAgY29udGVudDogXCJMb2dpblwiO1xuICBmb250LXdlaWdodDogMTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTY4cHg7XG4gIGxlZnQ6IDc2cHg7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRleHQtc2hhZG93OiAzcHggMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/common-page/components/signin/signin.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/common-page/components/signin/signin.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppCommonPageComponentsSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SigninComponent =
    /*#__PURE__*/
    function () {
      function SigninComponent(fb) {
        _classCallCheck(this, SigninComponent);

        this.fb = fb;
        this.changeEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.signinForm = this.fb.group({
          email: [],
          password: [],
          remember: []
        });
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeTo",
        value: function changeTo() {
          // 事件向上传递到 authorize
          this.changeEvt.emit('signup');
        }
      }, {
        key: "signin",
        value: function signin() {// if (this.signinForm.valid) {
          //     this.authService.signin(this.signinForm.value).subscribe(
          //         succ => {
          //             console.log('succ :', succ);
          //         },
          //         err => {}
          //     );
          // }
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SigninComponent.prototype, "changeEvt", void 0);
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/components/signin/signin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signin.component.scss */
      "./src/app/common-page/components/signin/signin.component.scss")).default]
    })], SigninComponent);
    /***/
  },

  /***/
  "./src/app/common-page/components/signup/signup.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/common-page/components/signup/signup.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonPageComponentsSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  margin-bottom: 20px;\n}\n.title h1 {\n  font-size: 40px;\n  position: relative;\n}\n.title h1:after {\n  content: \"Registe\";\n  font-weight: 100;\n  position: absolute;\n  top: -68px;\n  left: 76px;\n  font-size: 100px;\n  color: rgba(0, 0, 0, 0.2);\n  text-shadow: 3px 0 10px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLXBhZ2UvY29tcG9uZW50cy9zaWdudXAvRDpcXFByb2plY3RcXGl6Yi1yZWZhY3QtZnJvbnQvc3JjXFxhcHBcXGNvbW1vbi1wYWdlXFxjb21wb25lbnRzXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uLXBhZ2UvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tcGFnZS9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnUmVnaXN0ZSc7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtNjhweDtcclxuICAgICAgICAgICAgbGVmdDogNzZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGl0bGUgaDE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlJlZ2lzdGVcIjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02OHB4O1xuICBsZWZ0OiA3NnB4O1xuICBmb250LXNpemU6IDEwMHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0ZXh0LXNoYWRvdzogM3B4IDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/common-page/components/signup/signup.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/common-page/components/signup/signup.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppCommonPageComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(fb) {
        _classCallCheck(this, SignupComponent);

        this.fb = fb;
        this.signupForm = this.fb.group({
          username: [],
          email: [],
          password: [],
          passwordRepeat: [],
          accountType: ['customer']
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signup",
        value: function signup() {// delete this.signupForm.value.passwordRepeat;
          // this.authService.signup(this.signupForm.value).subscribe(
          //     succ => {
          //         console.log('succ :', succ);
          //     },
          //     err => {}
          // );
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/components/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/common-page/components/signup/signup.component.scss")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/common-page/home/home.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/common-page/home/home.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonPageHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".home-container .red-circle {\n  position: relative;\n  left: 100px;\n  -webkit-animation: upside-down 5s 1s ease-in infinite alternate;\n          animation: upside-down 5s 1s ease-in infinite alternate;\n}\n\n.main-content {\n  height: 600px;\n}\n\n.main-content .subscribe > button {\n  margin-right: 30px;\n}\n\n.main-content .side-image {\n  text-align: center;\n}\n\n.main-content .side-image embed {\n  width: 80%;\n}\n\n.main-content .title {\n  margin-bottom: 20px;\n}\n\n.main-content .title h1 {\n  font-size: 40px;\n  margin: 0;\n}\n\n.stack-content .stack-logo {\n  box-sizing: border-box;\n  height: 100px;\n  width: 100px;\n  padding: 20px;\n  background-color: rgba(0, 0, 0, 0.02);\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLXBhZ2UvaG9tZS9EOlxcUHJvamVjdFxcaXpiLXJlZmFjdC1mcm9udC9zcmNcXGFwcFxcY29tbW9uLXBhZ2VcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi1wYWdlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLCtEQUFBO1VBQUEsdURBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7QUNBSjs7QURDSTtFQUNJLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBREFRO0VBQ0ksVUFBQTtBQ0VaOztBREVJO0VBQ0ksbUJBQUE7QUNBUjs7QURDUTtFQUNJLGVBQUE7RUFDQSxTQUFBO0FDQ1o7O0FESUk7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1wYWdlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRhaW5lcntcclxuICAucmVkLWNpcmNsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEwMHB4OztcclxuICAgIGFuaW1hdGlvbjogdXBzaWRlLWRvd24gNXMgMXMgZWFzZS1pbiBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgfVxyXG59XHJcbi5tYWluLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIC5zdWJzY3JpYmUgPiBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC5zaWRlLWltYWdlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZW1iZWQge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnN0YWNrLWNvbnRlbnQge1xyXG4gICAgLnN0YWNrLWxvZ28ge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLmhvbWUtY29udGFpbmVyIC5yZWQtY2lyY2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMDBweDtcbiAgYW5pbWF0aW9uOiB1cHNpZGUtZG93biA1cyAxcyBlYXNlLWluIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIGhlaWdodDogNjAwcHg7XG59XG4ubWFpbi1jb250ZW50IC5zdWJzY3JpYmUgPiBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4ubWFpbi1jb250ZW50IC5zaWRlLWltYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4tY29udGVudCAuc2lkZS1pbWFnZSBlbWJlZCB7XG4gIHdpZHRoOiA4MCU7XG59XG4ubWFpbi1jb250ZW50IC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbi1jb250ZW50IC50aXRsZSBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3RhY2stY29udGVudCAuc3RhY2stbG9nbyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/common-page/home/home.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/common-page/home/home.component.ts ***!
    \****************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppCommonPageHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/common-page/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/common-page/joinin/joinin.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/common-page/joinin/joinin.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonPageJoininJoininComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".v-header {\n  overflow-x: hidden;\n  height: 100vh;\n  position: relative;\n}\n.v-header .title {\n  position: absolute;\n  top: 36px;\n  left: 70px;\n  z-index: 3;\n  font-size: 25px;\n  font-weight: bold;\n  color: #384e69;\n}\n.v-header .logo {\n  z-index: 99;\n  position: absolute;\n  width: 200px;\n  top: 20px;\n}\n.full-video-wrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n}\n.full-video-wrap video {\n  min-width: 100%;\n  min-height: 100%;\n}\n.components-wrapper {\n  z-index: 2;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.components-content {\n  height: 100vh;\n  background-color: #fff;\n  -webkit-transition: 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n.components-content .forms-wrapper {\n  width: 300px;\n  -webkit-transition: 300ms ease-in-out;\n  transition: 300ms ease-in-out;\n}\n.components-content .indecator {\n  position: absolute;\n  top: 50%;\n}\n.components-content .indecator-left {\n  left: 0;\n}\n.components-content .indecator-right {\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLXBhZ2Uvam9pbmluL0Q6XFxQcm9qZWN0XFxpemItcmVmYWN0LWZyb250L3NyY1xcYXBwXFxjb21tb24tcGFnZVxcam9pbmluXFxqb2luaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi1wYWdlL2pvaW5pbi9qb2luaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDUjtBRENJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNDUjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRENJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ1I7QURHQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNBSjtBREdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0VBQUE7RUFBQSx3REFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRENJO0VBQ0ksWUFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7QUNDUjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDQ1I7QURDSTtFQUNJLE9BQUE7QUNDUjtBRENJO0VBQ0ksUUFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLXBhZ2Uvam9pbmluL2pvaW5pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52LWhlYWRlciB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gVE9ETzog5oCO5LmI5Y675L2/55SoIGNhbGN1bGF0ZSDliqjmgIHorqHnrpfpl7Tot51cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzZweDtcclxuICAgICAgICBsZWZ0OiA3MHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjMzg0ZTY5O1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZnVsbC12aWRlby13cmFwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdmlkZW8ge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29tcG9uZW50cy13cmFwcGVyIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5jb21wb25lbnRzLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuZm9ybXMtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgLmluZGVjYXRvciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgfVxyXG4gICAgLmluZGVjYXRvci1sZWZ0IHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLmluZGVjYXRvci1yaWdodCB7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLnYtaGVhZGVyIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udi1oZWFkZXIgLnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2cHg7XG4gIGxlZnQ6IDcwcHg7XG4gIHotaW5kZXg6IDM7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzg0ZTY5O1xufVxuLnYtaGVhZGVyIC5sb2dvIHtcbiAgei1pbmRleDogOTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICB0b3A6IDIwcHg7XG59XG5cbi5mdWxsLXZpZGVvLXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZnVsbC12aWRlby13cmFwIHZpZGVvIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uY29tcG9uZW50cy13cmFwcGVyIHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5jb21wb25lbnRzLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb21wb25lbnRzLWNvbnRlbnQgLmZvcm1zLXdyYXBwZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuLmNvbXBvbmVudHMtY29udGVudCAuaW5kZWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbn1cbi5jb21wb25lbnRzLWNvbnRlbnQgLmluZGVjYXRvci1sZWZ0IHtcbiAgbGVmdDogMDtcbn1cbi5jb21wb25lbnRzLWNvbnRlbnQgLmluZGVjYXRvci1yaWdodCB7XG4gIHJpZ2h0OiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/common-page/joinin/joinin.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/common-page/joinin/joinin.component.ts ***!
    \********************************************************/

  /*! exports provided: JoininComponent */

  /***/
  function srcAppCommonPageJoininJoininComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoininComponent", function () {
      return JoininComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var JoininComponent =
    /*#__PURE__*/
    function () {
      function JoininComponent() {
        _classCallCheck(this, JoininComponent);

        this.indexer = [{
          name: '登录',
          offset: 0
        }, {
          name: '注册',
          offset: 7
        }, {
          name: '找回',
          offset: 14
        }];
        this.pageIndex = 0;
      }

      _createClass(JoininComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeIndex",
        value: function changeIndex(type) {
          if (type === 'push') {
            this.pageIndex++;
          }

          if (type === 'back') {
            this.pageIndex--;
          }
        }
      }]);

      return JoininComponent;
    }();

    JoininComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-joinin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./joinin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/joinin/joinin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./joinin.component.scss */
      "./src/app/common-page/joinin/joinin.component.scss")).default]
    })], JoininComponent);
    /***/
  }
}]);
//# sourceMappingURL=common-page-common-page-module-es5.js.map