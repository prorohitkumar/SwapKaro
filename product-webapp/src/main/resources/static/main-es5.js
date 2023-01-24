(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+BLU":
    /*!***************************************!*\
      !*** ./src/app/files/categories.json ***!
      \***************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */

    /***/
    function BLU(module) {
      module.exports = JSON.parse("[{\"name\":\"Electronics\"},{\"name\":\"Fashion\"},{\"name\":\"Essentials\"},{\"name\":\"Home\"},{\"name\":\"Appliances\"},{\"name\":\"Books\"},{\"name\":\"Games\"},{\"name\":\"Others\"}]");
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/rohit/work/swapkaro/product-webapp/webapp/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1W4x":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function W4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../congratulation/congratulation.component */
      "xmsb");
      /* harmony import */


      var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/user.service */
      "Ouoq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function RegisterComponent_small_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_small_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email already undertaken ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_small_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter 8 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_small_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter city name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_small_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter State name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_25_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onRegister(ctx_r7.myGroup);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.myGroup.invalid);
        }
      }

      function RegisterComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_26_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.onRegister(ctx_r9.myGroup);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.myGroup.invalid);
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(formBuilder, userService, router, dialog) {
          _classCallCheck(this, RegisterComponent);

          this.formBuilder = formBuilder;
          this.userService = userService;
          this.router = router;
          this.dialog = dialog;
          this.address = {
            houseNumber: "",
            streetName: "",
            state: "",
            city: "",
            pincode: 0
          };
          this.user = {
            email: "",
            address: this.address,
            password: "",
            totalBarterCoin: 0
          };
          this.googleAPI = "";
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            document.getElementById('mail').addEventListener("focusout", function (event) {
              console.log(event.target.value);

              _this.userService.loginEmail(event.target.value).subscribe(function (resp) {
                if (resp == null) {
                  _this.emailError = false;
                } else {
                  _this.emailError = true;
                }
              });
            });
            document.getElementById('mail').addEventListener("focusin", function () {
              _this.emailError = false;
            });
            this.myGroup = this.formBuilder.group({
              emailFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
              passwordFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
              stateFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              cityFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
          }
        }, {
          key: "onRegister",
          value: function onRegister(data) {
            var _this2 = this;

            console.log(data.value);
            this.address.state = data.value.stateFormControl;
            this.address.city = data.value.cityFormControl;
            this.user.email = data.value.emailFormControl;
            this.user.password = data.value.passwordFormControl;
            console.log(this.user);
            this.userService.registerUser(this.user).subscribe(function (response) {
              console.log("registered");
              console.log(response);

              _this2.dialog.open(_congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_2__["CongratulationComponent"], {
                panelClass: "my-custom-dialog-class"
              });

              setTimeout(function () {
                _this2.dialog.closeAll();

                _this2.router.navigate(["/login"]);
              }, 8000);
            });
          }
        }, {
          key: "onLogIn",
          value: function onLogIn() {
            this.router.navigate(["/login"]);
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 42,
        vars: 8,
        consts: [[1, "container"], ["routerLink", "/", 1, "navbar-brand", 2, "position", "absolute", "z-index", "7", "left", "1rem", "top", "0.4rem"], ["src", "../../assets/image/brand-logo.png", "width", "200", "height", "40", "alt", ""], [1, "forms-container"], [1, "signin-signup"], [1, "sign-in-form", 3, "formGroup"], [1, "title"], [1, "input-field"], [1, "fa", "fa-envelope"], ["type", "email", "id", "mail", "placeholder", "Email", "formControlName", "emailFormControl"], ["style", "color: red;", 4, "ngIf"], [1, "fa", "fa-lock"], ["type", "password", "placeholder", "Password", "formControlName", "passwordFormControl"], [1, "fa", "fa-map-marker"], ["type", "text", "placeholder", "City", "formControlName", "cityFormControl"], ["type", "text", "placeholder", "State", "formControlName", "stateFormControl"], [4, "ngIf"], [1, "social-text"], [1, "social-media"], ["mat-stroked-button", "", "href", "http://localhost:8095/api/v5/signin", 2, "padding", "0.4rem 1.4rem"], ["src", "https://img.icons8.com/color/48/000000/google-logo.png"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "content"], ["id", "sign-in", 3, "click"], [2, "color", "red"], ["mat-raised-button", "", 2, "background-color", "lightgrey", "color", "black", "font-size", "2rem", "padding", "0.4rem 1.4rem", "margin-top", "1rem", 3, "disabled", "click"], ["mat-raised-button", "", 2, "background-color", "#022E57", "color", "aliceblue", "font-size", "2rem", "padding", "0.4rem 1.4rem", "margin-top", "1rem", 3, "disabled", "click"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register Here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegisterComponent_small_11_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegisterComponent_small_12_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_small_16_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterComponent_small_20_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegisterComponent_small_24_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_div_25_Template, 3, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegisterComponent_div_26_Template, 3, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Or");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Sign In with Google");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "One of us ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Want to Trade or Exchange ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_40_listener() {
              return ctx.onLogIn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Log In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myGroup.get("emailFormControl").invalid && ctx.myGroup.get("emailFormControl").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myGroup.get("passwordFormControl").invalid && ctx.myGroup.get("passwordFormControl").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myGroup.get("cityFormControl").invalid && ctx.myGroup.get("cityFormControl").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myGroup.get("stateFormControl").invalid && ctx.myGroup.get("stateFormControl").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myGroup.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myGroup.valid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  background-color: #fff;\n  min-height: 100vh;\n  overflow: hidden;\n}\n\n.forms-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.signin-signup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 75%;\n  width: 50%;\n  transition: 1s 0.7s ease-in-out;\n  display: grid;\n  grid-template-columns: 1fr;\n  z-index: 5;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0rem 5rem;\n  transition: all 0.2s 0.7s;\n  overflow: hidden;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\nform.sign-in-form[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: #444;\n  margin-bottom: 10px;\n}\n\n.input-field[_ngcontent-%COMP%] {\n  max-width: 380px;\n  width: 100%;\n  background-color: #f0f0f0;\n  margin: 10px 0;\n  height: 55px;\n  border-radius: 55px;\n  display: grid;\n  grid-template-columns: 15% 85%;\n  padding: 0 0.4rem;\n  position: relative;\n}\n\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 55px;\n  color: #acacac;\n  transition: 0.5s;\n  font-size: 1.1rem;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  outline: none;\n  border: none;\n  line-height: 1;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #333;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n\n#sign-in[_ngcontent-%COMP%]{\n  text-decoration: underline;\n  -webkit-text-decoration-color: bisque;\n          text-decoration-color: bisque;\n  font-size: x-large;\n}\n\n.social-text[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  font-size:1.5rem;\n}\n\n.social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 46px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.45rem;\n  color: #333;\n  border-radius: 50%;\n  border: 1px solid #333;\n  text-decoration: none;\n  font-size: 1.1rem;\n  transition: 0.3s;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 150px;\n  \n  background-color:#022E57;\n  border: none;\n  outline: none;\n  height: 49px;\n  border-radius: 49px;\n  color: #fff;\n  \n  font-weight: 600;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.panels-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 2000px;\n  width: 2000px;\n  top: -10%;\n  right: 48%;\n  transform: translateY(-50%);\n  background-image: linear-gradient(-45deg, #022E57 0%, #04befe 100%);\n  transition: 1.8s ease-in-out;\n  border-radius: 50%;\n  z-index: 6;\n}\n\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  text-align: center;\n  z-index: 6;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n  padding: 3rem 17% 2rem 12%;\n}\n\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #fff;\n  transition: transform 0.9s ease-in-out;\n  transition-delay: 0.6s;\n}\n\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1;\n  font-size: 1.5rem;\n}\n\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  padding: 0.7rem 0;\n}\n\n#logo-container[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  z-index: 6;\n  padding: 0.4rem;\n  margin-bottom: 1rem;\n}\n\n#logo-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  font-size: xx-large;\n  margin-left: 1rem;\n}\n\n.btn.transparent[_ngcontent-%COMP%] {\n  margin: 0;\n  background: #022E57;\n  border: 2px solid #fff;\n  width: 130px;\n  height: 3.4rem;\n  font-weight: 600;\n  font-size: 1.3rem;\n}\n\n\n\n.container.sign-up-mode[_ngcontent-%COMP%]:before {\n  transform: translate(100%, -50%);\n  right: 52%;\n}\n\n.container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(-800px);\n}\n\n.container.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n  left: 25%;\n}\n\n\n\n.container.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\n*/\n\n.container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n\n.container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n@media (max-width: 870px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    min-height: 800px;\n    height: 100vh;\n  }\n  \n  .signin-signup[_ngcontent-%COMP%] {\n    width: 100%;\n    top: 104%;\n    transform: translate(-50%, -100%);\n    transition: 1s 0.8s ease-in-out;\n  }\n\n  .signin-signup[_ngcontent-%COMP%], .signin-signup[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n\n  .panels-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n  }\n\n  .panel[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 2.5rem 8%;\n    grid-column: 1 / 2;\n  }\n\n  \n\n  .left-panel[_ngcontent-%COMP%] {\n    grid-row: 1 / 2;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    width: 200px;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.6s;\n  }\n\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding-right: 15%;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.8s;\n  }\n\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.5rem 0;\n  }\n\n  .btn.transparent[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 35px;\n    font-size: 0.7rem;\n  }\n\n  .container[_ngcontent-%COMP%]:before {\n    width: 1500px;\n    height: 1500px;\n    transform: translateX(-50%);\n    left: 30%;\n    bottom: 68%;\n    right: initial;\n    top: initial;\n    transition: 2s ease-in-out;\n  }\n\n  .container.sign-up-mode[_ngcontent-%COMP%]:before {\n    transform: translate(-50%, 100%);\n    bottom: 32%;\n    right: initial;\n  }\n\n  .container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(-300px);\n  }\n\n  .container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(0px);\n  }\n\n  \n\n  .container.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    top: 5%;\n    transform: translate(-50%, 0);\n  }\n}\n\n@media (max-width: 570px) {\n  form[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .container[_ngcontent-%COMP%]:before {\n    bottom: 72%;\n    left: 50%;\n  }\n\n  .container.sign-up-mode[_ngcontent-%COMP%]:before {\n    bottom: 28%;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBSEE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUhBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxZQUFZOztFQUVaLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsbUVBQW1FO0VBQ25FLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNDQUFzQztFQUN0QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUlBLGNBQWM7O0FBRWQ7RUFDRSxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaOztBQUVBOztFQUVFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUFFOzs7O0VBSUEseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsaUNBQWlDO0lBQ2pDLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOzs7O0VBSUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsNkJBQTZCO0VBQy9COztFQUVBOztJQUVFLDBCQUEwQjtFQUM1Qjs7OztFQUlBO0lBQ0UsT0FBTztJQUNQLDZCQUE2QjtFQUMvQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb3Jtcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnNpZ25pbi1zaWdudXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNzUlO1xuICB3aWR0aDogNTAlO1xuICB0cmFuc2l0aW9uOiAxcyAwLjdzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgei1pbmRleDogNTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwcmVtIDVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIDAuN3M7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuZm9ybS5zaWduLWluLWZvcm0ge1xuICB6LWluZGV4OiAyO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgY29sb3I6ICM0NDQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIG1heC13aWR0aDogMzgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBib3JkZXItcmFkaXVzOiA1NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA4NSU7XG4gIHBhZGRpbmc6IDAgMC40cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnB1dC1maWVsZCBpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTVweDtcbiAgY29sb3I6ICNhY2FjYWM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uaW5wdXQtZmllbGQgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5pbnB1dC1maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbiNzaWduLWlue1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBiaXNxdWU7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cbi5zb2NpYWwtdGV4dCB7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgZm9udC1zaXplOjEuNXJlbTtcbn1cblxuLnNvY2lhbC1tZWRpYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc29jaWFsLWljb24ge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHdpZHRoOiA0NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAuNDVyZW07XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cblxuLmJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbiAgXG4gIGJhY2tncm91bmQtY29sb3I6IzAyMkU1NztcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDQ5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQ5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG5cbi5wYW5lbHMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG59XG5cbi5jb250YWluZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwMDBweDtcbiAgd2lkdGg6IDIwMDBweDtcbiAgdG9wOiAtMTAlO1xuICByaWdodDogNDglO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwMjJFNTcgMCUsICMwNGJlZmUgMTAwJSk7XG4gIHRyYW5zaXRpb246IDEuOHMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogNjtcbn1cblxuLnBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiA2O1xufVxuXG4ubGVmdC1wYW5lbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHBhZGRpbmc6IDNyZW0gMTclIDJyZW0gMTIlO1xufVxuXG4ucGFuZWwgLmNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbi5wYW5lbCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnBhbmVsIHAge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xufVxuI2xvZ28tY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA2O1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4jbG9nby1jb250YWluZXIgc3BhbntcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG4uYnRuLnRyYW5zcGFyZW50IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjMDIyRTU3O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMy40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuXG5cbi8qIEFOSU1BVElPTiAqL1xuXG4uY29udGFpbmVyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcbiAgcmlnaHQ6IDUyJTtcbn1cblxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmltYWdlLFxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwMHB4KTtcbn1cblxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnNpZ25pbi1zaWdudXAge1xuICBsZWZ0OiAyNSU7XG59XG5cbi8qIC8qIC5jb250YWluZXIuc2lnbi11cC1tb2RlIGZvcm0uc2lnbi11cC1mb3JtIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMjtcbn0gKi9cblxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgZm9ybS5zaWduLWluLWZvcm0ge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xufSAqL1xuXG4uY29udGFpbmVyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmltYWdlLFxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbn1cblxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIFxuICAuc2lnbmluLXNpZ251cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAxMDQlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uOiAxcyAwLjhzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLnNpZ25pbi1zaWdudXAsLnNpZ25pbi1zaWdudXAge1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxuXG4gIC5wYW5lbHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xuICB9XG5cbiAgLnBhbmVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMi41cmVtIDglO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgfVxuXG4gIFxuXG4gIC5sZWZ0LXBhbmVsIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gIH1cblxuICAuaW1hZ2Uge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xuICB9XG5cbiAgLnBhbmVsIC5jb250ZW50IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgfVxuXG4gIC5wYW5lbCBoMyB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cblxuICAucGFuZWwgcCB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gIH1cblxuICAuYnRuLnRyYW5zcGFyZW50IHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICB9XG5cbiAgLmNvbnRhaW5lcjpiZWZvcmUge1xuICAgIHdpZHRoOiAxNTAwcHg7XG4gICAgaGVpZ2h0OiAxNTAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGxlZnQ6IDMwJTtcbiAgICBib3R0b206IDY4JTtcbiAgICByaWdodDogaW5pdGlhbDtcbiAgICB0b3A6IGluaXRpYWw7XG4gICAgdHJhbnNpdGlvbjogMnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAuY29udGFpbmVyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xuICAgIGJvdHRvbTogMzIlO1xuICAgIHJpZ2h0OiBpbml0aWFsO1xuICB9XG5cbiAgLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmltYWdlLFxuICAuY29udGFpbmVyLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCAuY29udGVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMDBweCk7XG4gIH1cblxuICAuY29udGFpbmVyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmltYWdlLFxuICAuY29udGFpbmVyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG5cbiAgXG5cbiAgLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnNpZ25pbi1zaWdudXAge1xuICAgIHRvcDogNSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3MHB4KSB7XG4gIGZvcm0ge1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wYW5lbCAuY29udGVudCB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgLmNvbnRhaW5lcjpiZWZvcmUge1xuICAgIGJvdHRvbTogNzIlO1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxuXG4gIC5jb250YWluZXIuc2lnbi11cC1tb2RlOmJlZm9yZSB7XG4gICAgYm90dG9tOiAyOCU7XG4gICAgbGVmdDogNTAlO1xuICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5O8w":
    /*!****************************************************************!*\
      !*** ./src/app/payment/barter-coins/barter-coins.component.ts ***!
      \****************************************************************/

    /*! exports provided: BarterCoinsComponent */

    /***/
    function O8w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarterCoinsComponent", function () {
        return BarterCoinsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/card/card.component */
      "mJ8H");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_service_product_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/product-service.service */
      "O0Bu");
      /* harmony import */


      var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/user.service */
      "Ouoq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_service_email_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/service/email-service.service */
      "avWI");
      /* harmony import */


      var src_app_service_order_history_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/service/order-history.service */
      "UTMJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function BarterCoinsComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "iframe", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Product: \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarterCoinsComponent_div_10_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onPayment("You have purchased the product using coins successfully", "Dissmiss");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Pay ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.productDetail.noOfBarterCoin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Product Id: \xA0PROD", ctx_r0.productDetail.productId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.productDetail.productName);
        }
      }

      function BarterCoinsComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarterCoinsComponent_div_11_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.openDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add Barter Coins ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product: \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Product Id: \xA0 PROD", ctx_r1.productDetail.productId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.productDetail.productName);
        }
      }

      var BarterCoinsComponent = /*#__PURE__*/function () {
        function BarterCoinsComponent(dialog, productService, userService, route, snackBar, emailService, orderService) {
          _classCallCheck(this, BarterCoinsComponent);

          this.dialog = dialog;
          this.productService = productService;
          this.userService = userService;
          this.route = route;
          this.snackBar = snackBar;
          this.emailService = emailService;
          this.orderService = orderService;
          this.order = {
            productId: 0,
            productName: "",
            sellerName: "",
            buyerName: localStorage.getItem('loginId'),
            dateOfTransaction: "",
            image: '',
            paymentMode: '',
            amount: 0,
            productCategory: '',
            orderId: 0
          };
          this.notificationEmails = [];
          this.email = {
            receiversEmail: [],
            subject: "Notification Alert form SwapKaro",
            messageBody: "Check out our new Product!",
            attachment: "http://localhost:4200/header/productdetails"
          };
        }

        _createClass(BarterCoinsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.productService.getProductById(localStorage.getItem("productId")).subscribe(function (response) {
              console.log(response);
              _this3.productDetail = response;
            });
            this.userService.loginEmail(localStorage.getItem("loginId")).subscribe(function (response) {
              console.log(response);
              _this3.user = response;
              _this3.availableBarterCoin = _this3.user.totalBarterCoin;
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialog.closeAll();
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialog.open(src_app_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], {
              height: "420px",
              width: "800px"
            });
            dialogRef.disableClose = true;
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
            localStorage.setItem("totalBarterCoin", this.user.totalBarterCoin);
          }
        }, {
          key: "onPayment",
          value: function onPayment(message, action) {
            var _this4 = this;

            // ---------------------------------------------------------------------------------
            this.notificationEmails.push(this.productDetail.productOwner);
            this.notificationEmails.push(localStorage.getItem("loginId"));
            this.email.receiversEmail = this.notificationEmails; // -----------------------------------
            // debugging the productId

            console.log(this.productDetail.productId); // -----------------------------------
            // -----------------------------------
            // debugging the notification emails

            console.log(this.notificationEmails); // -----------------------------------
            // notify the user of the interested buyer

            this.emailService.notifyOwner(this.email).subscribe(function (res) {
              _this4.email = res;
              alert("Owner has been successfully notified !!!");
              _this4.notificationEmails = [];
            }); // ----------------------------------------------------------------------------------

            this.order.productId = this.productDetail.productId;
            this.order.productName = this.productDetail.productName;
            this.order.sellerName = this.productDetail.productOwner;
            this.order.image = this.productDetail.productImage;
            this.order.paymentMode = this.productDetail.modeOfPayment;
            this.order.amount = this.productDetail.noOfBarterCoin;
            this.order.productCategory = this.productDetail.productCategory;
            this.orderService.saveOrder(this.order).subscribe(function (order) {
              console.log(order);
            });
            this.userService.exchangeUsingBarterCoin(localStorage.getItem("loginId"), this.productDetail.productOwner, this.productDetail.noOfBarterCoin).subscribe(function (data) {
              console.log(data);
            });
            this.productService.updateProductStatusForBarterCoinMode(this.productDetail.productId).subscribe(function (data) {
              return console.log(data);
            });
            this.snackBar.open(message, action);
            this.dialog.closeAll();
            this.route.navigate(["/header/products"]);
          }
        }]);

        return BarterCoinsComponent;
      }();

      BarterCoinsComponent.ɵfac = function BarterCoinsComponent_Factory(t) {
        return new (t || BarterCoinsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_product_service_service__WEBPACK_IMPORTED_MODULE_3__["ProductServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_email_service_service__WEBPACK_IMPORTED_MODULE_7__["EmailServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_order_history_service__WEBPACK_IMPORTED_MODULE_8__["OrderHistoryService"]));
      };

      BarterCoinsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BarterCoinsComponent,
        selectors: [["app-barter-coins"]],
        decls: 12,
        vars: 3,
        consts: [["mat-dialog-title", ""], ["src", "assets\\image\\coins.png", "alt", "", "height", "30px", "width", "30px"], [1, "fa", "close-icon", 2, "float", "right", "cursor", "pointer", 3, "click"], [1, "heading"], ["src", "assets\\image\\availableCoins.jpg", "alt", "", "width", "30px", "height", "30px"], [4, "ngIf"], ["fxLayout", "row", 1, "transfer"], ["fxLayout", "column", 1, "details"], ["fxFlex", "30%", 1, "image"], ["src", "assets\\image\\c.png", "alt", "", "height", "55px", "width", "60px"], ["fxFlex", "30%", 1, "cont"], [2, "width", "100%", "height", "0", "padding-bottom", "20%", "position", "relative", "padding-left", "1%", "padding-top", "0%"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://giphy.com/embed/vdpRNviw5twgvSRwhA"), "width", "100%", "height", "100%", "frameBorder", "0", "allowFullScreen", "", 1, "giphy-embed", 2, "position", "absolute"], ["fxFlex", "30%", 1, "prod"], [1, "button"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Pay", 2, "float", "right", "margin-top", "1.5rem", "height", "45px", "width", "200px", "font-size", "18px", "font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n          'Lucida Sans Unicode', Geneva, Verdana, sans-serif", "letter-spacing", "1px", 3, "click"], ["fxLayout", "row", 1, "add"], [2, "width", "100%", "padding-bottom", "20%", "position", "absolute", "float", "left"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://giphy.com/embed/l3mZaGv4Krokd3GM0"), "width", "95%", "height", "100%", "allowFullScreen", "", 2, "position", "absolute"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Add Coins", 2, "margin-left", "1rem", "margin-top", "5rem", "height", "45px", "width", "200px", "font-size", "16px", "font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n            'Lucida Sans Unicode', Geneva, Verdana, sans-serif", "letter-spacing", "1px", 3, "click"], ["fxFlex", "30%", 1, "prod1"]],
        template: function BarterCoinsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Payment Mode: Barter Coins \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarterCoinsComponent_Template_i_click_4_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uF00D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BarterCoinsComponent_div_10_Template, 22, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BarterCoinsComponent_div_11_Template, 16, 2, "div", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Available Barter Coins: \xA0 ", ctx.availableBarterCoin, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.availableBarterCoin >= ctx.productDetail.noOfBarterCoin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.availableBarterCoin < ctx.productDetail.noOfBarterCoin);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"]],
        styles: [".mat-dialog-title[_ngcontent-%COMP%]{\n    background-color: #022E57;\n    font-weight: medium;\n    color: white;\n    text-align: center;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-size: 30px;\n    letter-spacing: 2px;\n    word-spacing: 2px;\n }\n .heading[_ngcontent-%COMP%]{\n    font-size: 28px;\n   font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n   text-align: center;\n   font-weight: bold;\n   letter-spacing: 2px;\n   word-spacing: 2px;\n }\n .transfer[_ngcontent-%COMP%]{\n   margin-top: 2rem;\n}\n .details[_ngcontent-%COMP%]{\n   font-size: 20px;\n   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n   font-weight: bold;\n}\n .image[_ngcontent-%COMP%]{\n   margin-left: 3rem;\n   margin-bottom: 1rem;\n}\n .cont[_ngcontent-%COMP%]{\n   font-size: 48px;\n   text-align: center;\n   margin-top: 1rem;\n   margin-left: 2rem;\n   \n}\n .prod[_ngcontent-%COMP%]{\n      \n   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n   margin-left: 0rem;\n   font-size: 20px;\n   font-weight: bold;\n   margin-top: 1rem;\n   letter-spacing: 1px;\n   word-spacing: 1px;\n\n\n}\n .prod1[_ngcontent-%COMP%]{\n      \n   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n   margin-left: 18rem;\n   font-size: 20px;\n   font-weight: bold;\n   margin-top: 2rem;\n   letter-spacing: 1px;\n   word-spacing: 1px;\n\n\n}\n .add[_ngcontent-%COMP%]{\n   height: 270px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhcnRlci1jb2lucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZFQUE2RTtJQUM3RSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjtDQUNBO0lBQ0csZUFBZTtHQUNoQixvR0FBb0c7R0FDcEcsa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixtQkFBbUI7R0FDbkIsaUJBQWlCO0NBQ25CO0NBRUE7R0FDRSxnQkFBZ0I7QUFDbkI7Q0FFQTtHQUNHLGVBQWU7R0FDZixxR0FBcUc7R0FDckcsaUJBQWlCO0FBQ3BCO0NBRUE7R0FDRyxpQkFBaUI7R0FDakIsbUJBQW1CO0FBQ3RCO0NBRUE7R0FDRyxlQUFlO0dBQ2Ysa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQixpQkFBaUI7O0FBRXBCO0NBRUE7O0dBRUcsNkVBQTZFO0dBQzdFLGlCQUFpQjtHQUNqQixlQUFlO0dBQ2YsaUJBQWlCO0dBQ2pCLGdCQUFnQjtHQUNoQixtQkFBbUI7R0FDbkIsaUJBQWlCOzs7QUFHcEI7Q0FDQTs7R0FFRyw2RUFBNkU7R0FDN0Usa0JBQWtCO0dBQ2xCLGVBQWU7R0FDZixpQkFBaUI7R0FDakIsZ0JBQWdCO0dBQ2hCLG1CQUFtQjtHQUNuQixpQkFBaUI7OztBQUdwQjtDQUVBO0dBQ0csYUFBYTtBQUNoQiIsImZpbGUiOiJiYXJ0ZXItY29pbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLXRpdGxle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjJFNTc7XG4gICAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHdvcmQtc3BhY2luZzogMnB4O1xuIH1cbiAuaGVhZGluZ3tcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICBmb250LWZhbWlseTonVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgd29yZC1zcGFjaW5nOiAycHg7XG4gfVxuXG4gLnRyYW5zZmVye1xuICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmRldGFpbHN7XG4gICBmb250LXNpemU6IDIwcHg7XG4gICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW1hZ2V7XG4gICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5jb250e1xuICAgZm9udC1zaXplOiA0OHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgXG59XG5cbi5wcm9ke1xuICAgICAgXG4gICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICAgZm9udC1zaXplOiAyMHB4O1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgIHdvcmQtc3BhY2luZzogMXB4O1xuXG5cbn1cbi5wcm9kMXtcbiAgICAgIFxuICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gICBtYXJnaW4tbGVmdDogMThyZW07XG4gICBmb250LXNpemU6IDIwcHg7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIG1hcmdpbi10b3A6IDJyZW07XG4gICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgd29yZC1zcGFjaW5nOiAxcHg7XG5cblxufVxuXG4uYWRke1xuICAgaGVpZ2h0OiAyNzBweDtcbn1cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarterCoinsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-barter-coins",
            templateUrl: "./barter-coins.component.html",
            styleUrls: ["./barter-coins.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }, {
            type: src_app_service_product_service_service__WEBPACK_IMPORTED_MODULE_3__["ProductServiceService"]
          }, {
            type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }, {
            type: src_app_service_email_service_service__WEBPACK_IMPORTED_MODULE_7__["EmailServiceService"]
          }, {
            type: src_app_service_order_history_service__WEBPACK_IMPORTED_MODULE_8__["OrderHistoryService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5hVl":
    /*!**********************************************!*\
      !*** ./src/app/nav-bar/nav-bar.component.ts ***!
      \**********************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function hVl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent() {
          _classCallCheck(this, NavBarComponent);
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
        return new (t || NavBarComponent)();
      };

      NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavBarComponent,
        selectors: [["app-nav-bar"]],
        decls: 23,
        vars: 0,
        consts: [[1, "logo", "py-4"], ["src", "../../assets/icons/SwapKaro (5)2.png", "alt", "Company Logo"], ["mat-list-item", "", "routerLink", "/"], ["mat-list-item", "", "routerLink", "/header/postproduct"], ["mat-list-item", "", "routerLink", "/header/products"], ["mat-list-item", "", "routerLink", "/header/suggestions"], ["mat-list-item", "", "routerLink", "/header/orderhistory"]],
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Post Product ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Products ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "extension");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Suggestions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " list_alt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Orders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: [".logo[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2.6rem 1rem;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-bottom: 50px;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  vertical-align: center;\n  margin-right: 1rem;\n}\n.mat-list-item[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 0.8rem;\n  height: 44px !important;\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0SEFBNEg7QUFDNUg7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFFQSw0SEFBNEgiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyLjZyZW0gMXJlbTtcbn1cblxuLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubWF0LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "6Dod":
    /*!********************************************************!*\
      !*** ./src/app/post-product/post-product.component.ts ***!
      \********************************************************/

    /*! exports provided: PostProductComponent */

    /***/
    function Dod(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostProductComponent", function () {
        return PostProductComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _model_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../model/product */
      "q0+M");
      /* harmony import */


      var _model_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../model/address */
      "uRUw");
      /* harmony import */


      var _files_categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../files/categories.json */
      "+BLU");

      var _files_categories_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../files/categories.json */
      "+BLU", 1);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _model_mode_of_payment_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../model/mode-of-payment.enum */
      "7hm2");
      /* harmony import */


      var _service_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../service/product.service */
      "nhC3");
      /* harmony import */


      var _service_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../service/chat.service */
      "jHPu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function PostProductComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Product Details");
        }
      }

      function PostProductComponent_mat_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r9.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r9.name, " ");
        }
      }

      function PostProductComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Category Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Category name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PostProductComponent_ng_template_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Address");
        }
      }

      function PostProductComponent_ng_template_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Additional Details");
        }
      }

      function PostProductComponent_div_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Amount of Barter-coin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Amount of Barter-coin is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PostProductComponent_div_116_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Items for Exchange");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Items for Exchange");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostProductComponent_div_116_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.addItems();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PostProductComponent_mat_chip_119_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function PostProductComponent_mat_chip_119_Template_mat_chip_removed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var i_r13 = ctx.index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.remove(i_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12, " ");
        }
      }

      var PostProductComponent = /*#__PURE__*/function () {
        function PostProductComponent(service, chatService, route, snackBar) {
          _classCallCheck(this, PostProductComponent);

          this.service = service;
          this.chatService = chatService;
          this.route = route;
          this.snackBar = snackBar;
          this.isOptional = false;
          this.fileUpload = null;
          this.imageUrl = "/assets/image/download.png";
          this.isHidden = false;
          this.isHidden2 = false;
          this.productObj = new _model_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
          this.file = [];
          this.addressObj = new _model_address__WEBPACK_IMPORTED_MODULE_3__["Address"]();
          this.modes = ["Coins", "Bartering", "Both"];
          this.date = new Date().toJSON().split("-");
          this.items = [];
          this.chat = {
            productId: 0,
            productOwner: "",
            buyersChat: []
          };
          this.categories = _files_categories_json__WEBPACK_IMPORTED_MODULE_4__;
        } // visible: boolean = true;
        // selectable: boolean = true;
        // removable: boolean = true;
        // addOnBlur: boolean = false;
        // separatorKeysCodes = [ENTER, COMMA];
        // exchangeItemCtrl=new FormControl();
        // exchangeItems=[];
        // @ViewChild('exchangeItemInput') exchangeItemInput:ElementRef;
        // files: File[] = [];
        // onSelect(event) {
        // 	console.log(event);
        // 	this.files.push(...event.addedFiles);
        // }
        // onRemove(event) {
        // 	console.log(event);
        // 	this.files.splice(this.files.indexOf(event), 1);
        // }


        _createClass(PostProductComponent, [{
          key: "futureDateDisable",
          value: function futureDateDisable() {
            var date = new Date();
            var todayDate = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();

            if (todayDate < 10) {
              todayDate = '0' + todayDate;
            }

            if (month < 10) {
              month = '0' + month;
            }

            this.maxDate = year + '-' + month + '-' + todayDate;
          }
        }, {
          key: "exchangeItems",
          get: function get() {
            return this.productForm.get('exchangeItems');
          }
        }, {
          key: "productCategory",
          get: function get() {
            return this.productForm.get('productCategory');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              categoryDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              yearOfPurchase: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(this.futureDateDisable())]),
              quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              houseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              streetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              modeOfPayment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              noOfBarterCoin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              exchangeItems: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
          }
        }, {
          key: "addItems",
          value: function addItems() {
            this.items.push(this.exchangeItems.value);
            this.exchangeItems.setValue(null);
          }
        }, {
          key: "remove",
          value: function remove(item) {
            if (item >= 0) {
              this.items.splice(item, 1);
            }
          }
        }, {
          key: "handleFileInput",
          value: function handleFileInput(files) {
            this.prepareFilesList(files);
          }
        }, {
          key: "prepareFilesList",
          value: function prepareFilesList(files) {
            var _iterator = _createForOfIteratorHelper(files),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                item.progress = 0;
                this.file.push(item);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.uploadFilesSimulator(0);
          }
        }, {
          key: "uploadFilesSimulator",
          value: function uploadFilesSimulator(index) {
            var _this5 = this;

            setTimeout(function () {
              if (index === _this5.file.length) {
                return;
              } else {
                var progressInterval = setInterval(function () {
                  if (_this5.file[index].progress === 100) {
                    clearInterval(progressInterval);

                    _this5.uploadFilesSimulator(index + 1);
                  } else {
                    _this5.file[index].progress += 5;
                  }
                }, 200);
              }
            }, 1000);
          }
        }, {
          key: "formatBytes",
          value: function formatBytes(bytes, decimals) {
            if (bytes === 0) {
              return '0 Bytes';
            }

            var k = 1024;
            var dm = decimals <= 0 ? 0 : decimals || 2;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
          }
        }, {
          key: "radioButtonChanged",
          value: function radioButtonChanged($event) {
            var radioValue = event.target['value'];

            if (radioValue == "0") {
              this.isHidden = true;
              this.isHidden2 = false;
              this.modeStatus = _model_mode_of_payment_enum__WEBPACK_IMPORTED_MODULE_6__["ModeOfPayment"].COINS;
            } else if (radioValue == "1") {
              this.isHidden2 = true;
              this.isHidden = false;
              this.modeStatus = _model_mode_of_payment_enum__WEBPACK_IMPORTED_MODULE_6__["ModeOfPayment"].BARTERING;
            } else if (radioValue == "2") {
              this.isHidden = true;
              this.isHidden2 = true;
              this.modeStatus = _model_mode_of_payment_enum__WEBPACK_IMPORTED_MODULE_6__["ModeOfPayment"].BOTH;
            } else {
              this.isHidden = false;
              this.isHidden2 = false;
            }
          }
        }, {
          key: "postNewProduct",
          value: function postNewProduct(message, action) {
            var _this6 = this;

            console.log("data", this.productForm.value);
            this.productObj.productName = this.productForm.value.productName;
            this.productObj.productCategory = this.productForm.value.productCategory;
            this.productObj.categoryDescription = this.productForm.value.categoryDescription;
            this.productObj.yearOfPurchase = moment__WEBPACK_IMPORTED_MODULE_5___default()(this.productForm.value.yearOfPurchase).valueOf();
            this.productObj.quantity = this.productForm.value.quantity;
            this.productObj.dateOfPosting = this.date[0] + "-" + this.date[2].substring(0, 2) + "-" + this.date[1];
            this.productObj.productOwner = localStorage.getItem("loginId"); // this.productObj.productOwner="aa@gmail.com";

            this.productObj.productDescription = this.productForm.value.productDescription;
            this.productObj.modeOfPayment = this.modeStatus;
            this.productObj.noOfBarterCoin = this.productForm.value.noOfBarterCoin;
            this.addressObj.houseNumber = this.productForm.value.houseNumber;
            this.addressObj.streetName = this.productForm.value.streetName;
            this.addressObj.state = this.productForm.value.state;
            this.addressObj.city = this.productForm.value.city;
            this.addressObj.pincode = this.productForm.value.pincode;
            this.productObj.address = this.addressObj;
            this.productObj.exchangeItems = this.items;
            console.log("product", this.productObj);
            this.service.postProduct(this.productObj, this.file[0]).subscribe(function (data) {
              console.log(data);
              _this6.chat.productId = data.productId;
              _this6.chat.productOwner = data.productOwner;
              console.log(_this6.chat);

              _this6.chatService.saveChat(_this6.chat).subscribe();
            });
            this.snackBar.open(message, action);
            setTimeout(function () {
              _this6.route.navigate(['/header/suggestions']);
            }, 2000);
          }
        }]);

        return PostProductComponent;
      }();

      PostProductComponent.ɵfac = function PostProductComponent_Factory(t) {
        return new (t || PostProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]));
      };

      PostProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PostProductComponent,
        selectors: [["app-post-product"]],
        decls: 125,
        vars: 12,
        consts: [["fxLayout", "row"], ["fxFlex", "30%"], ["src", "../../assets/image/Sell-Your-Product.png", "id", "image"], ["fxFlex", "70%", 1, "container-1"], ["id", "heading"], [3, "formGroup"], ["linear", "", 3, "labelPosition"], ["stepper", ""], [1, "step-1"], ["matStepLabel", ""], ["fxLayoutGap", "2%"], ["fxFlex", "50%", "appearance", "outline"], ["matInput", "", "placeholder", "", "formControlName", "productName", "name", "productfile", "required", ""], ["formControlName", "productCategory", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["fxFlex", "100%", "appearance", "outline"], ["matInput", "", "formControlName", "productDescription", "name", "productfile", "maxlength", "1000", "required", ""], ["type", "date", "matInput", "", "placeholder", "", "formControlName", "yearOfPurchase", "required", "", 3, "max"], ["type", "number", "matInput", "", "placeholder", "", "formControlName", "quantity", "name", "productfile", "required", ""], ["fxFlex", "100%"], [1, "mat-h2"], ["type", "file", "formControlName", "productImage", "required", "", "fxFlex", "30%", 3, "change"], [1, "nextButton"], ["mat-raised-button", "", "matStepperNext", "", 1, "button"], [1, "step-2"], ["fxFlex", "31%", "appearance", "outline"], ["matInput", "", "placeholder", "", "formControlName", "houseNumber", "name", "productfile", "required", ""], ["fxFlex", "67%", "appearance", "outline"], ["matInput", "", "placeholder", "", "formControlName", "streetName", "name", "productfile", "required", ""], ["appearance", "outline", "fxFlex", "32%"], ["matInput", "", "placeholder", "", "formControlName", "city", "name", "productfile", "required", ""], ["matInput", "", "placeholder", "", "formControlName", "state", "name", "productfile", "required", ""], ["matInput", "", "placeholder", "", "formControlName", "pincode", "name", "productfile", "required", ""], ["fxLayoutGap", "77%"], ["mat-raised-button", "", "matStepperPrevious", "", 1, "button"], [1, "step-3"], ["id", "example-radio-group-label", 1, "mat-h2"], ["aria-labelledby", "example-radio-group-label", "formControlName", "modeOfPayment", 1, "example-radio-group"], ["matTooltip", "You can choose this option to set how many barter coins are required to purchase your item", 3, "value", "change"], ["src", "assets\\image\\c.png", "alt", "", "height", "30px", "width", "30px"], ["matTooltip", "You can choose this option to set with which item you want to exchange your product", 3, "value", "change"], ["src", "assets\\image\\bt1.png", "alt", "", "height", "35px", "width", "55px"], ["matTooltip", "You can choose this option to set both coin and item for your produuct", 3, "value", "change"], [3, "removed", 4, "ngFor", "ngForOf"], ["fxLayoutGap", "72%"], ["mat-raised-button", "", "type", "submit", 1, "button", 3, "disabled", "click"], [3, "value"], ["matInput", "", "placeholder", "", "formControlName", "categoryDescription", "name", "productfile", "required", ""], ["appearance", "outline", "fxFlex", "100%"], ["type", "number", "matInput", "", "placeholder", "", "formControlName", "noOfBarterCoin", "name", "file"], ["matInput", "", "placeholder", "", "formControlName", "exchangeItems"], ["mat-icon-button", "", 3, "click"], [3, "removed"], ["matChipRemove", ""]],
        template: function PostProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Post Your Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-horizontal-stepper", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostProductComponent_ng_template_13_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Product Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Product name is required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Product Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "--");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PostProductComponent_mat_option_27_Template, 2, 2, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Product category is required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PostProductComponent_div_30_Template, 7, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Product Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "textarea", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Product Description is required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Characters should not be more than 1000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Year Of Purchase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Year Of Purchase is required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Quantity is required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Upload your product image: \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostProductComponent_Template_input_change_56_listener($event) {
              return ctx.handleFileInput($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Next ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, PostProductComponent_ng_template_62_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "House Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "House number is required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Street Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Street name is required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "City is required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "State is required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Pincode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Pincode is required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Next ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, PostProductComponent_ng_template_102_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Mode Of Payment :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-radio-group", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-radio-button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostProductComponent_Template_mat_radio_button_change_107_listener($event) {
              return ctx.radioButtonChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Barter Coins ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-radio-button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostProductComponent_Template_mat_radio_button_change_110_listener($event) {
              return ctx.radioButtonChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Bartering ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-radio-button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostProductComponent_Template_mat_radio_button_change_113_listener($event) {
              return ctx.radioButtonChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Both");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, PostProductComponent_div_115_Template, 7, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, PostProductComponent_div_116_Template, 10, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, PostProductComponent_mat_chip_119_Template, 4, 1, "mat-chip", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostProductComponent_Template_button_click_123_listener() {
              return ctx.postNewProduct("Product Posted Successfully", "Dissmiss");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Post Product ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("labelPosition", "bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productCategory.value == "Others");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.maxDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHidden2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.productForm.invalid);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepLabel"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperPrevious"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipList"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipRemove"]],
        styles: ["*[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n#heading[_ngcontent-%COMP%] {\n  background-color: darkcyan;\n  height: 60px;\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-family: \"Lucida Sans\";\n  font-size: xx-large;\n  padding: 10px;\n  color: rgb(247, 255, 247);\n  text-align: center;\n}\n.button[_ngcontent-%COMP%] {\n  height: 40px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 15px;\n  font-weight: 20px;\n  border-radius: 5px;\n  background-color: #022e57;\n  color: white;\n}\n.nextButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\np[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#image[_ngcontent-%COMP%] {\n  \n  height: 550px;\n  width: 400px;\n}\nmat-chip[_ngcontent-%COMP%] {\n  height: 20px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nmatTooltip[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n#image[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFOzs7OzsyQkFLeUI7RUFDekIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJwb3N0LXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbiNoZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XG4gIGhlaWdodDogNjBweDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIjtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHJnYigyNDcsIDI1NSwgMjQ3KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjJlNTc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5leHRCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxucCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2ltYWdlIHtcbiAgLyogbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2UvYmFydGVyLWltYWdlMi5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCU7ICovXG4gIGhlaWdodDogNTUwcHg7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxubWF0LWNoaXAge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbm1hdFRvb2x0aXAge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG4ubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbiNpbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzcHg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostProductComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-post-product',
            templateUrl: './post-product.component.html',
            styleUrls: ['./post-product.component.css']
          }]
        }], function () {
          return [{
            type: _service_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
          }, {
            type: _service_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7hm2":
    /*!***********************************************!*\
      !*** ./src/app/model/mode-of-payment.enum.ts ***!
      \***********************************************/

    /*! exports provided: ModeOfPayment */

    /***/
    function hm2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModeOfPayment", function () {
        return ModeOfPayment;
      });

      var ModeOfPayment;

      (function (ModeOfPayment) {
        ModeOfPayment[ModeOfPayment["COINS"] = 0] = "COINS";
        ModeOfPayment[ModeOfPayment["BARTERING"] = 1] = "BARTERING";
        ModeOfPayment[ModeOfPayment["BOTH"] = 2] = "BOTH";
      })(ModeOfPayment || (ModeOfPayment = {}));
      /***/

    },

    /***/
    "91Mc":
    /*!**************************************************!*\
      !*** ./src/app/chat-room/chat-room.component.ts ***!
      \**************************************************/

    /*! exports provided: ChatRoomComponent */

    /***/
    function Mc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatRoomComponent", function () {
        return ChatRoomComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _service_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/chat.service */
      "jHPu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-avatar */
      "HWWf");

      function ChatRoomComponent_h1_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " NO BUYER IS THERE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChatRoomComponent_mat_drawer_container_7_div_3_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var buyer_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", buyer_r5.messageBody[buyer_r5.messageBody.length - 1].message.substring(0, 10), " ");
        }
      }

      function ChatRoomComponent_mat_drawer_container_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatRoomComponent_mat_drawer_container_7_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var buyer_r5 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.OnBuyerChat(buyer_r5, ctx_r8.chatHistory);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-avatar", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatRoomComponent_mat_drawer_container_7_div_3_div_6_Template, 3, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var buyer_r5 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx_r2.productOwner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.productOwner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", buyer_r5.messageBody != null);
        }
      }

      function ChatRoomComponent_mat_drawer_container_7_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function ChatRoomComponent_mat_drawer_container_7_div_6_div_2_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-avatar", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var details_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", details_r11.messageSendBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", details_r11.message, "");
        }
      }

      function ChatRoomComponent_mat_drawer_container_7_div_6_div_2_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-avatar", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var details_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", details_r11.messageSendBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", details_r11.message, "");
        }
      }

      function ChatRoomComponent_mat_drawer_container_7_div_6_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatRoomComponent_mat_drawer_container_7_div_6_div_2_p_1_Template, 5, 2, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatRoomComponent_mat_drawer_container_7_div_6_div_2_p_2_Template, 5, 2, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var details_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", details_r11.messageSendBy == ctx_r10.productBuyer.buyerEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", details_r11.messageSendBy != ctx_r10.productBuyer.buyerEmail);
        }
      }

      function ChatRoomComponent_mat_drawer_container_7_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatRoomComponent_mat_drawer_container_7_div_6_div_2_Template, 3, 2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.productBuyer.messageBody);
        }
      }

      function ChatRoomComponent_mat_drawer_container_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatRoomComponent_mat_drawer_container_7_div_3_Template, 7, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-drawer-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatRoomComponent_mat_drawer_container_7_div_5_Template, 1, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatRoomComponent_mat_drawer_container_7_div_6_Template, 3, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-actions", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatRoomComponent_mat_drawer_container_7_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.message = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatRoomComponent_mat_drawer_container_7_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.onMessageSend();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.chatHistory.buyersChat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.productBuyer.messageBody == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.productBuyer.messageBody != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.message);
        }
      }

      var ChatRoomComponent = /*#__PURE__*/function () {
        function ChatRoomComponent(dialog, chatService) {
          _classCallCheck(this, ChatRoomComponent);

          this.dialog = dialog;
          this.chatService = chatService;
          this.imagePath = "assets/images/washingMachine.jpg"; // ---------------- json data ----------------
          // chatHistory: Chat = chats;
          // -------------------------------------------

          this.message = "";
          this.loginedUser = "";
          this.productOwner = "";
          this.buyersChat = [];
          this.chatsAvailable = true;
        }

        _createClass(ChatRoomComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.productOwner = localStorage.getItem("productOwner");
            this.loginedUser = localStorage.getItem("loginId");

            if (this.productOwner == this.loginedUser) {
              this.chatService.chatByProductId(localStorage.getItem('productId')).subscribe(function (allChats) {
                console.log(allChats);
                _this7.chatHistory = allChats;
                console.log(_this7.chatHistory);

                if (_this7.chatHistory.buyersChat[0] == null) {
                  console.log("www");
                  _this7.chatsAvailable = false;
                } else {
                  _this7.productBuyer = _this7.chatHistory.buyersChat[0];
                  console.log(_this7.productBuyer);
                }
              });
            } else {
              this.chatService.chatByProductIdAndBuyer(localStorage.getItem('productId'), localStorage.getItem('loginId')).subscribe(function (userChat) {
                console.log(userChat);

                if (userChat.buyerEmail == null) {
                  userChat.buyerEmail = localStorage.getItem("loginId");
                } // userChat.buyerEmail=localStorage.getItem("productOwner");


                _this7.buyersChat.push(userChat);

                _this7.chatHistory = {
                  'productId': parseInt(localStorage.getItem('productId')),
                  "productOwner": localStorage.getItem('productOwner'),
                  "buyersChat": _this7.buyersChat
                };
                console.log(_this7.chatHistory);
                _this7.productBuyer = _this7.chatHistory.buyersChat[0];
                console.log(_this7.productBuyer);
              });
            } // console.log(this.chatHistory);


            this.productOwner = localStorage.getItem('productOwner');
            this.loginedUser = localStorage.getItem('loginId');
          }
        }, {
          key: "OnBuyerChat",
          value: function OnBuyerChat(buyer, chatHistorybuyersChat) {
            console.log(buyer);
            this.productBuyer = buyer;
            console.log(chatHistorybuyersChat);
          }
        }, {
          key: "onMessageSend",
          value: function onMessageSend() {
            console.log(this.message);
            this.productBuyer.buyerEmail;
            this.chatService.editChat(this.productBuyer.buyerEmail, this.loginedUser, this.message, {
              'productId': localStorage.getItem('productId'),
              "productOwner": localStorage.getItem('productOwner')
            }).subscribe();
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialog.closeAll();
          }
        }]);

        return ChatRoomComponent;
      }();

      ChatRoomComponent.ɵfac = function ChatRoomComponent_Factory(t) {
        return new (t || ChatRoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]));
      };

      ChatRoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatRoomComponent,
        selectors: [["app-chat-room"]],
        decls: 8,
        vars: 2,
        consts: [[1, "chat-header"], [1, "chat-app-name"], [1, "fa", "close-icon", 2, "font-size", "24px", 3, "click"], [1, "chat-body"], ["style", "display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  color: aliceblue;", 4, "ngIf"], ["class", "side-container", 4, "ngIf"], [2, "display", "flex", "height", "100%", "justify-content", "center", "align-items", "center", "color", "aliceblue"], [1, "side-container"], ["mode", "side", "opened", "", 1, "buyers-list"], ["class", "user-detail", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["align", "end"], ["type", "text", "placeholder", "Type a message...", 1, "message-input", 3, "ngModel", "ngModelChange"], [1, "btn", 3, "click"], [1, "zmdi", "zmdi-mail-send"], [1, "user-detail", 3, "click"], [1, "img-container"], [3, "name"], [1, "details"], [1, "user-name"], [1, "last-message"], [1, "messages"], ["id", "message-container", 4, "ngFor", "ngForOf"], ["id", "message-container"], ["style", "\n              display: flex;\n              justify-content: flex-start;\n              padding-left: 1rem;\n            ", 4, "ngIf"], ["style", "\n              display: flex;\n              justify-content: flex-end;\n              padding-right: 1rem;\n            ", 4, "ngIf"], [2, "display", "flex", "justify-content", "flex-start", "padding-left", "1rem"], [1, "user-message-box", 2, "background-color", "aliceblue"], [2, "margin", "0rem 0.4rem"], [2, "display", "flex", "justify-content", "flex-end", "padding-right", "1rem"], [1, "user-message-box", 2, "background-color", "papayawhip", "color", "black"]],
        template: function ChatRoomComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chatbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatRoomComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uF00D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatRoomComponent_h1_6_Template, 2, 0, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatRoomComponent_mat_drawer_container_7_Template, 11, 4, "mat-drawer-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.chatsAvailable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chatsAvailable);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ngx_avatar__WEBPACK_IMPORTED_MODULE_6__["AvatarComponent"]],
        styles: [".chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 80vw;\n  height: 3rem;\n  background-color: darkcyan;\n  color: white;\n  justify-content: center;\n  align-items: center;\n}\n\n.chat-app-name[_ngcontent-%COMP%] {\n  font-weight: 400;\n  width: 96%;\n  margin: 3px 10px;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  font-weight: 100;\n  width: 4%;\n  text-align: right;\n  padding-right: 10px;\n}\n\n.chat-body[_ngcontent-%COMP%] {\n  width: 80vw;\n  height: 70vh;\n  background-color: gray;\n}\n\n.ng-star-inserted[_ngcontent-%COMP%]{\n  height: 88%;\n}\n\n#message-container[_ngcontent-%COMP%]{\n  height: auto;\n}\n\n.side-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 95%;\n  border: 1px solid #555;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 3px;\n  justify-content: center;\n}\n\n.buyers-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  \n}\n\n.user-features[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 18%;\n}\n\n.owner-detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  width: 100%;\n  height: 70%;\n}\n\n.user-detail[_ngcontent-%COMP%]:hover {\n  background-color: whitesmoke;\n}\n\n.contact-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 82%;\n}\n\n.user-detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 13%;\n  padding: 5px;\n  border-bottom: 1px solid gray;\n  background-color: beige;\n  color: black;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.user-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n  color: black;\n}\n\n.last-message[_ngcontent-%COMP%] {\n  color: black;\n}\n\n\n\n.messages[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  overflow: auto;\n  \n}\n\n.message-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 10%;\n  padding: 5px;\n  background-color: rgb(70, 68, 68);\n}\n\n.message-input[_ngcontent-%COMP%] {\n  width: 93%;\n  border-radius: 20px;\n  padding: 5px 15px;\n  outline: none;\n  \n}\n\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: darkcyan;\n  color: #fff;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  font-size: 24px;\n  margin: auto;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: block;\n  height: 100%;\n  overflow: hidden;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.messages[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n}\n\n.messages[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  margin-top: 0.2rem;\n \n  \n}\n\n.messages[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  \n  padding: 0.4rem;\n  border-radius: 0.7rem; \n}\n\n.user-message-box[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  display: block;\n  width: auto;\n  margin: 0 -24px;\n  padding: 0 24px;\n  max-height: 86%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.mat-drawer-inner-container[_ngcontent-%COMP%]{\n  overflow: hidden auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGtCQUFrQjs7RUFFbEIsMkJBQTJCO0FBQzdCOztBQUNBOztFQUVFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiY2hhdC1yb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jaGF0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xuICBjb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hhdC1hcHAtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbjogM3B4IDEwcHg7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgd2lkdGg6IDQlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNoYXQtYm9keSB7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDcwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG4ubmctc3Rhci1pbnNlcnRlZHtcbiAgaGVpZ2h0OiA4OCU7XG59XG4jbWVzc2FnZS1jb250YWluZXJ7XG4gIGhlaWdodDogYXV0bztcbn1cbi5zaWRlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbn1cblxuLnNlYXJjaC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnV5ZXJzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAvKiB3aWR0aDogMzAlOyAqL1xufVxuXG4udXNlci1mZWF0dXJlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4JTtcbn1cblxuLm93bmVyLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzAlO1xufVxuXG4udXNlci1kZXRhaWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uY29udGFjdC1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODIlO1xufVxuXG4udXNlci1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMyU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udXNlci1pbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4udXNlci1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sYXN0LW1lc3NhZ2Uge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIG1lc3NhZ2UgYm9keSAqL1xuXG4ubWVzc2FnZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIHNjcm9sbC1iZWhhdmlvcjogYXV0bzsgKi9cbn1cbi5tZXNzYWdlLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA2OCwgNjgpO1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gIHdpZHRoOiA5MyU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICAvKiBoZWlnaHQ6IDkwcHg7ICovXG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogZGFya2N5YW47XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWVzc2FnZXMgZGl2e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1lc3NhZ2VzIGRpdiBwe1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG4gXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cbn1cbi5tZXNzYWdlcyBkaXYgcCBzcGFue1xuICBcbiAgcGFkZGluZzogMC40cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjdyZW07IFxufVxuXG4udXNlci1tZXNzYWdlLWJveHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgLTI0cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWF4LWhlaWdodDogODYlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVye1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatRoomComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-chat-room",
            templateUrl: "./chat-room.component.html",
            styleUrls: ["./chat-room.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: _service_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        local: 'local',
        apiBaseUrl: 'https://swapkaro.stackroute.io',
        localUrl: 'http://localhost:8080'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "F1my":
    /*!**************************************************!*\
      !*** ./src/app/home-page/home-page.component.ts ***!
      \**************************************************/

    /*! exports provided: HomePageComponent */

    /***/
    function F1my(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
        return HomePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var HomePageComponent = /*#__PURE__*/function () {
        function HomePageComponent() {
          _classCallCheck(this, HomePageComponent);
        }

        _createClass(HomePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomePageComponent;
      }();

      HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
        return new (t || HomePageComponent)();
      };

      HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomePageComponent,
        selectors: [["app-home-page"]],
        decls: 333,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-lg"], [1, "col-2"], ["href", "/", 1, "navbar-brand", 2, "color", "#e46948"], ["src", "../../assets/image/brand-logo3.png", "width", "40", "height", "40", "alt", "", 1, "d-inline-block", "align-center"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "color", "#e46948 !important", "border", "1px sol #e46948 !important"], [1, "fas", "fa-bars"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "col-12", "header-buttons"], ["type", "submit", "routerLink", "login", 1, "btn", "my-2", "my-sm-0"], ["type", "submit", "routerLink", "register", 1, "btn", "my-2", "my-sm-0"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../assets/image/carousel 1.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block", "captions"], [2, "font-family", "'Lobster', cursive", "font-size", "100px"], [2, "font-weight", "500"], [1, "carousel-item"], ["src", "../../assets/image/pexels-moose-photos-1036635.jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "../../assets/image/bartering.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "container"], [1, "mt-5", "wow", "fadeIn"], [1, "row"], [1, "col-md-6", "mb-4"], ["src", "../../assets/image/Trade.jpg", "alt", "", 1, "img-fluid", "z-depth-1-half"], [1, "h3", "mb-3"], [1, "my-5"], [2, "display", "flex", "justify-content", "center"], ["fxLayout", "row wrap", 1, "cards-container"], [1, "example-card"], ["mat-card-image", "", "src", "../../assets/image/1589530265_VwApR9_Barter.jpg", "alt", "Photo of feature"], ["mat-card-image", "", "src", "../../assets/image/coin-pic.jpg", "alt", "Photo of feature"], ["mat-card-image", "", "src", "../../assets/image/alexander-shatov-PEJtZfT6C1Q-unsplash.jpg", "alt", "Photo of feature"], [1, "h3", "text-center", "mb-5"], [1, "row", "wow", "fadeIn"], [1, "col-lg-6", "col-md-12", "px-4"], [1, "col-1", "mr-3"], [1, "fas", "fa-balance-scale", "fa-2x", "indigo-text"], [1, "col-10"], [1, "feature-title"], [1, "grey-text"], [2, "height", "30px"], [1, "fab", "fa-bitcoin", "fa-2x", "blue-text"], [1, "fas", "fa-sync", "fa-2x", "cyan-text"], [1, "col-lg-6", "col-md-12"], ["src", "../../assets/image/Product-Specialist.jpg", "alt", "", 1, "img-fluid", "z-depth-1-half"], [1, "my-5", "h3", "text-center"], [1, "row", "features-small", "mb-5", "mt-3", "wow", "fadeIn"], [1, "col-md-4"], [1, "fas", "fa-check-circle", "fa-2x", "indigo-text"], [2, "height", "15px"], [1, "col-md-4", "flex-center"], ["src", "../../assets/image/barter ima.jpg", "alt", "MDB Magazine Template displayed on iPhone", 1, "z-depth-0", "img-fluid", 2, "width", "100%"], [1, "col-md-4", "mt-2"], [1, "mb-5"], [1, "row", "features-small", "mt-5", "wow", "fadeIn"], [1, "col-xl-3", "col-lg-6"], ["aria-hidden", "true", 1, "fas", "fa-edit", "fa-2x", "mb-1", "indigo-text"], [1, "col-10", "mb-2", "pl-3"], [1, "feature-title", "font-bold", "mb-1"], [1, "grey-text", "mt-2"], ["aria-hidden", "true", 1, "fas", "fa-level-up-alt", "fa-2x", "mb-1", "indigo-text"], [1, "col-10", "mb-2"], ["aria-hidden", "true", 1, "far", "fa-comments", "fa-2x", "mb-1", "indigo-text"], ["aria-hidden", "true", 1, "fas", "fa-award", "fa-2x", "mb-1", "indigo-text"], [1, "row", "features-small", "mt-4", "wow", "fadeIn"], ["aria-hidden", "true", 1, "fas", "fa-search", "fa-2x", "mb-1", "indigo-text"], ["aria-hidden", "true", 1, "fas", "fa-box-open", "fa-2x", "mb-1", "indigo-text"], ["aria-hidden", "true", 1, "fas", "fa-map-marker-alt", "fa-2x", "mb-1", "indigo-text"], ["aria-hidden", "true", 1, "fas", "fa-boxes", "fa-2x", "mb-1", "indigo-text"], [1, "text-center", "text-white", 2, "background-color", "#e46948"], [1, "mt-5"], [1, "row", "text-center", "d-flex", "justify-content-center", "pt-5"], [1, "col-md-2"], [1, "text-uppercase", "font-weight-bold"], ["href", "#!", 1, "text-white"], [1, "row", "d-flex", "justify-content-center"], [1, "col-lg-8"], [1, "text-center", "mb-5"], ["href", "", 1, "text-white", "me-4"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-google"], [1, "fab", "fa-instagram"], [1, "fab", "fa-linkedin"], [1, "fab", "fa-github"], [1, "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], ["href", "/", 1, "text-white", 2, "text-decoration", "none"]],
        template: function HomePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " SwapKaro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " LOGIN ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " REGISTER ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " SwapKaro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Got something you don't need anymore, then why not SwapKaro. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Register now and immediately get 2500 BarterBucks in your account. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Have Unused items ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Got lot of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Them");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Don't know what to do with them ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Why not trade them with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "400+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " users for something you might need, which they might have, so why not browse our inventory of more then ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "600+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " products, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Find that something");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " , which you might need and much more. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Our services are free to use you know, so Register now and start trading.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "hr", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Our Features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " SwapKaro introducing the traditional way of trading with the modern touch of technology and is brought to you directly by us so you don't have go anywhere, just sit, relax and trade we got it all covered for you. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-card", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Trade made easy now with BarterBucks, got nothing to trade but have money, convert it to BarterBucks and get amazing offers with discount on products and even earn while doing so. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-card", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " SwapKaro is now introducing user to user chat to help our customers communicate better before trading and any transaction. Get to know your buyers and sellers more. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "hr", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "About SwapKaro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Thanks to SwapKaro now you can sell all your ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "not needed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " items. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h5", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Buy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " We give you detailed information at your disposal about all our products. So that you can decide better with what you want to buy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h5", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Barter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Got something you don't need anymore and looking to buy something that you need but thinking where ? don't worry because we got you covered. Trade made easy with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " barter on SwapKaro.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "hr", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h2", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Not enough?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h6", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Free to use");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Our license is user-friendly. Feel free to use SwapKaro for all your personal trades. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h6", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "400+ Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " An impressive community of active users available for you to trade with. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h6", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "600+ products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Choose from our immpresive collection of verified products with hundreds of options. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h6", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Fully responsive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " It doesn't matter whether you are on desktop, laptop, tablet or mobile phone. You will get the same awesome user experience on each device. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h6", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "User-friendly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Neat and easy to use interface, which will increase the interactivity for you with our service and provide you with a lifetime user experience. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h6", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Plenty of Categories");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Need something specific? Use categories to search what you looking for. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h6", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Faster Loading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " don't have a strong internet connection ? worry not we got you coverd because you don't need highspeed internet to browse our platform. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "h6", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Cross browser compatibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " SwapKaro loves all the browsers so don't worry no matter which browser you are using you will get the same awesome experience. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "hr", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h2", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "...and even more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h5", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Post Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " Post adds for your not needed items with detailed information and decide whether to trade or sell. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h5", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Frequent updates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Get immediate updates on your products and transactions. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "i", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h5", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Active community");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " Our community grows day by day. Use our chatbox to communicate with intrested buyers and decide for your self who you want to trade with. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "i", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h5", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Verified Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " Browse from our collection of verified products and find what you are looking for. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "h5", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "p", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " Why bother going through all the available products when you can search for it with our search feature and get fast results. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "h5", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Product Detail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " Don't know much about the product and seller why not checout the product details section for more details on the product and decide for your self. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "h5", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Recommendations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Don't want to wait, looking for something nearby, don't sweat we have recommendations based on location for you so that you don't have to. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "i", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "h5", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "p", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " Get the details of all your transactions and order history. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "footer", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "section", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "h6", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "a", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "About us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "h6", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "a", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "h6", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "a", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "hr", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "section", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, " SwapKaro is a free platform developed to provide the community with an option to exchange, buy and sell all their not-needed anymore items for something that they might need. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "section", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "a", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "i", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "a", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "i", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "a", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "i", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "a", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "i", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "a", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "i", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "a", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "i", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, " \xA9 2022 Copyright: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "a", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "SwapKaro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]],
        styles: [".carousel-item[_ngcontent-%COMP%] {\n  height: 70vh;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n}\n\n\n\n.example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 10px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n\n.cards-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n.mat-card-image[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 10px 10px #e46948;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto 5px;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  font-size: 20px;\n}\n\n.header-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-family: \"Lobster\", cursive;\n  font-weight: 900;\n  font-size: 30px;\n}\n\nh1[_ngcontent-%COMP%] {\n  height: auto;\n  padding-bottom: 340px;\n  padding-top: 10px;\n}\n\n.captions[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 700;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  -webkit-border-radius: 10;\n  -moz-border-radius: 10;\n  \n  box-shadow: 1px 1px 3px #666666;\n  font-family: \"Ubuntu\", sans-serif;\n  color: #ffffff;\n  font-size: 13px;\n  background: #e46948;\n  padding: 7px 25px;\n  text-decoration: none;\n  border: 2px solid white;\n  margin: auto 13px;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background: #000000;\n  text-decoration: none;\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  margin-top: 65px !important;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 999 !important;\n  padding: 8px;\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQSxvRkFBb0Y7O0FBQ3BGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBLG9GQUFvRjs7QUFFcEY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQSw0R0FBNEc7O0FBQzVHO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFHekIsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBQ0EsNEdBQTRHIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWl0ZW0ge1xuICBoZWlnaHQ6IDcwdmg7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jYXJkcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLm1hdC1jYXJkLWltYWdlIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxubWF0LWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2U0Njk0ODtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0byA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhlYWRlci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXJcIiwgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5oMSB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDM0MHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmNhcHRpb25zIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uYnRuIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDtcbiAgLyogYm9yZGVyLXJhZGl1czogNTBweDsgKi9cbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAjNjY2NjY2O1xuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM2NjY2NjY7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM2NjY2NjY7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiAjZTQ2OTQ4O1xuICBwYWRkaW5nOiA3cHggMjVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luOiBhdXRvIDEzcHg7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIG1hcmdpbi10b3A6IDY1cHggIWltcG9ydGFudDtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk5ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home-page',
            templateUrl: './home-page.component.html',
            styleUrls: ['./home-page.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "O0Bu":
    /*!****************************************************!*\
      !*** ./src/app/service/product-service.service.ts ***!
      \****************************************************/

    /*! exports provided: ProductServiceService */

    /***/
    function O0Bu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductServiceService", function () {
        return ProductServiceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var ProductServiceService = /*#__PURE__*/function () {
        function ProductServiceService(http) {
          _classCallCheck(this, ProductServiceService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/product-service';
        } // baseUrl = "http://localhost:8097";


        _createClass(ProductServiceService, [{
          key: "getAllProducts",
          value: function getAllProducts() {
            return this.http.get(this.baseUrl + "/api/v1/products");
          }
        }, {
          key: "getAllAvailableProducts",
          value: function getAllAvailableProducts() {
            return this.http.get(this.baseUrl + "/api/v1/product/availableproducts");
          }
        }, {
          key: "getProductById",
          value: function getProductById(productId) {
            return this.http.get(this.baseUrl + "/api/v1/product/" + productId);
          }
        }, {
          key: "getProductIdByProductOwner",
          value: function getProductIdByProductOwner(productOwner) {
            return this.http.get(this.baseUrl + "/api/v1/product/owner/" + productOwner);
          }
        }, {
          key: "exchangeItems",
          value: function exchangeItems(sProductId, bProductId) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("buyerProductId", bProductId).set("sellerProductId", sProductId);
            return this.http.put(this.baseUrl + "/api/v1/product/exchangeItem", {}, {
              params: httpParams
            });
          }
        }, {
          key: "updateProductStatusForBarterCoinMode",
          value: function updateProductStatusForBarterCoinMode(email) {
            return this.http.put(this.baseUrl + "/api/v1/product/updateProductStatus/" + email, {});
          }
        }, {
          key: "productBySearch",
          value: function productBySearch(productName) {
            return this.http.get(this.baseUrl + "/api/v1/product/" + productName);
          } // getQR(productId:any):Observable<any>{
          //   return this.http.get("http://localhost:8066/api/v1/qr/" +productId );
          // }

        }, {
          key: "updateReview",
          value: function updateReview(reviewObj, productId) {
            return this.http.put(this.baseUrl + "/api/v1/product/review/" + productId, reviewObj);
          }
        }, {
          key: "searchProduct",
          value: function searchProduct(text) {
            return this.http.get("http://localhost:8097/api/v1/product/search/" + text);
          }
        }]);

        return ProductServiceService;
      }();

      ProductServiceService.ɵfac = function ProductServiceService_Factory(t) {
        return new (t || ProductServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ProductServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductServiceService,
        factory: ProductServiceService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductServiceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Ouoq":
    /*!*****************************************!*\
      !*** ./src/app/service/user.service.ts ***!
      \*****************************************/

    /*! exports provided: UserService */

    /***/
    function Ouoq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var UserService = /*#__PURE__*/function () {
        function UserService(httpClient) {
          _classCallCheck(this, UserService);

          this.httpClient = httpClient;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/user-service'; // baseUrl = "http://localhost:8090";

          this.secondaryBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/authentication-service';
        } // secondaryBaseUrl = 'http://localhost:8095';


        _createClass(UserService, [{
          key: "registerUser",
          value: function registerUser(user) {
            return this.httpClient.post(this.baseUrl + "/api/v4/register", user);
          }
        }, {
          key: "loginUser",
          value: function loginUser(credentials) {
            return this.httpClient.post(this.baseUrl + "/api/v4/login", credentials);
          }
        }, {
          key: "loginEmail",
          value: function loginEmail(email) {
            return this.httpClient.get(this.baseUrl + "/api/v4/user/" + email);
          } // fetching goggle id

        }, {
          key: "getGoogleId",
          value: function getGoogleId() {
            return this.httpClient.get(this.secondaryBaseUrl + "/api/v5/login/user");
          }
        }, {
          key: "exchangeUsingBarterCoin",
          value: function exchangeUsingBarterCoin(buyerEmailId, sellerEmailId, coins) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set("buyer", buyerEmailId).set("seller", sellerEmailId).set("coin", coins);
            return this.httpClient.put(this.baseUrl + "/api/v4/user/coin", {}, {
              params: httpParams
            });
          }
        }, {
          key: "dipositCoin",
          value: function dipositCoin(email, dollar) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set("user", email).set("dollar", dollar);
            return this.httpClient.post(this.baseUrl + "/api/v4/user/coins", {}, {
              params: httpParams
            });
          }
        }, {
          key: "withdrawCoin",
          value: function withdrawCoin(email, coin) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set("user", email).set("coin", coin);
            return this.httpClient.put(this.baseUrl + "/api/v4/user/withdraw", {}, {
              params: httpParams
            });
          }
        }, {
          key: "addAccount",
          value: function addAccount() {
            return this.httpClient.post(this.baseUrl + "/api/v4/user/account", null);
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QkJ+":
    /*!********************************************************************!*\
      !*** ./src/app/product-suggestion/product-suggestion.component.ts ***!
      \********************************************************************/

    /*! exports provided: ProductSuggestionComponent */

    /***/
    function QkJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductSuggestionComponent", function () {
        return ProductSuggestionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _service_product_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/product-service.service */
      "O0Bu");
      /* harmony import */


      var _service_product_suggestion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/product-suggestion.service */
      "tPLo");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/user.service */
      "Ouoq");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function ProductSuggestionComponent_mat_card_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSuggestionComponent_mat_card_8_Template_mat_card_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var product_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onCardClick(product_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "lowercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PROD", product_r1.productId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Owner: ", product_r1.productOwner, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx_r0.position.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, product_r1.modeOfPayment), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx_r0.position.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1.city, ", ", product_r1.state, " ");
        }
      }

      var ProductSuggestionComponent = /*#__PURE__*/function () {
        function ProductSuggestionComponent(productService, productSuggestionService, domSanitizer, router, userService) {
          _classCallCheck(this, ProductSuggestionComponent);

          this.productService = productService;
          this.productSuggestionService = productSuggestionService;
          this.domSanitizer = domSanitizer;
          this.router = router;
          this.userService = userService;
          this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('above');
          this.product = [];
          this.loginUserCity = "Nahan";
          this.searchword = "";
        }

        _createClass(ProductSuggestionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.userService.loginEmail(localStorage.getItem("loginId")).subscribe(function (user) {
              _this8.loginUserCity = user.address.city;
              console.log(_this8.loginUserCity);
            });
            setTimeout(function () {
              _this8.productSuggestionService.getAllProductsByCity(_this8.loginUserCity).subscribe(function (data) {
                console.log(data);
                data.forEach(function (productObj) {
                  _this8.product.push(productObj);
                });
                console.log(_this8.product);

                _this8.product.map(function (x) {
                  console.log(x);
                  x.productOwner = x.productOwner.substring(0, 25);
                  x.dateOfPosting = x.dateOfPosting.slice(0, 10);
                  x.productImage = _this8.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + x.productImage);
                });

                _this8.pagePart = _this8.product.slice(0, 8);
              });
            }, 3000);
          }
        }, {
          key: "OnChange",
          value: function OnChange(event) {
            console.log(event);
            var start = event.pageIndex * event.pageSize;
            var end = start + event.pageSize;

            if (end > this.product.length) {
              end = this.product.length;
            }

            this.pagePart = this.product.slice(start, end);
          }
        }, {
          key: "onCardClick",
          value: function onCardClick(item) {
            console.log(item);
            localStorage.setItem("productId", item.productId);
            localStorage.setItem("productName", item.productName);
            localStorage.setItem("productOwner", item.productOwner); // this.productService.productId=item.productId;

            this.router.navigate(['/header/productdetails']);
          }
        }, {
          key: "searching",
          value: function searching() {
            var _this9 = this;

            this.productService.searchProduct(this.searchword).subscribe(function (data) {
              // data.forEach((productObj)=>{           
              //   this.searchResult.push(productObj);
              // })
              // this.searchResult.map(x=>{
              //   console.log(x)
              //   x.productOwner=x.productOwner.substring(0,25);
              //   x.dateOfPosting=x.dateOfPosting.slice(0,10);
              //   x.productImage=this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/"+"jpg"+";base64,"+x.productImage);
              // })
              // this.pagePart1=this.searchResult.slice(0,8);
              data.forEach(function (productObj) {
                _this9.product.push(productObj);
              });
              console.log(_this9.product);

              _this9.product.map(function (x) {
                console.log(x);
                x.productOwner = x.productOwner.substring(0, 25);
                x.dateOfPosting = x.dateOfPosting.slice(0, 10);
                x.productImage = _this9.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + x.productImage);
              });

              _this9.pagePart = _this9.product.slice(0, 8);
            });
          }
        }]);

        return ProductSuggestionComponent;
      }();

      ProductSuggestionComponent.ɵfac = function ProductSuggestionComponent_Factory(t) {
        return new (t || ProductSuggestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_product_suggestion_service__WEBPACK_IMPORTED_MODULE_3__["ProductSuggestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]));
      };

      ProductSuggestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductSuggestionComponent,
        selectors: [["app-product-suggestion"]],
        decls: 9,
        vars: 4,
        consts: [[1, "mat-h1"], [2, "width", "30%"], [2, "display", "flex", "width", "66%", "align-items", "center", "justify-content", "end"], ["aria-label", "Select page", 3, "length", "pageSize", "page"], ["id", "content"], ["id", "flex-container", "fxLayout", "row wrap", "fxLayoutGap", "0.4%"], ["style", "padding: 1.2rem;", "fxFlex", "20%", "fxFlex.xs", "90%", "fxFlex.sm", "45%", 3, "click", 4, "ngFor", "ngForOf"], ["fxFlex", "20%", "fxFlex.xs", "90%", "fxFlex.sm", "45%", 2, "padding", "1.2rem", 3, "click"], [2, "text-align", "end", "margin", "0%"], ["matTooltip", "ProductId", 2, "font-size", "1rem"], ["mat-card-image", "", "alt", "", 2, "height", "8rem", "margin", "auto", "width", "100%", "padding", "0.5rem", 3, "src"], [2, "margin-top", "0.5rem"], ["mat-raised-button", "", "matTooltip", "Mode of Payment", 2, "margin-bottom", "1rem", "font-size", "1.2rem", 3, "matTooltipPosition"], [1, "far", "fa-credit-card"], ["matTooltip", "Location of Product", 1, "fa", "fa-map-marker-alt", 2, "font-size", "1.2rem", 3, "matTooltipPosition"]],
        template: function ProductSuggestionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-paginator", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ProductSuggestionComponent_Template_mat_paginator_page_5_listener($event) {
              return ctx.OnChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductSuggestionComponent_mat_card_8_Template, 18, 11, "mat-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" All Products from ", ctx.loginUserCity, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.product.length)("pageSize", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagePart);
          }
        },
        directives: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["LowerCasePipe"]],
        styles: ["*[_ngcontent-%COMP%]{\n    padding: 0%;\n    margin: 0;\n    margin-bottom: 0;\n}\n #content[_ngcontent-%COMP%]{\n    padding: 16px;\n    padding-bottom: 0;\n    margin-bottom: 0;\n    \n    \n}\n .mat-h1[_ngcontent-%COMP%]{  \n    display: flex;  \n    margin-left: 4.5%;\n    margin-top: 0.4rem;\n}\n mat-paginator[_ngcontent-%COMP%]{\n    display: inline-flex;\n    justify-content: flex-end;   \n    align-items: center;\n    right: 4%;\n    height: 1.5rem;\n    font-size: 1rem;  \n}\n #flex-container[_ngcontent-%COMP%]{\n    \n    margin: auto;\n    justify-content: space-evenly;\n    align-items: center;   \n}\n #flex-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{\n    border: 2px solid darkgrey;\n    align-items: center; \n\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    \n    margin-bottom: 0.5rem;\n}\n #flex-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover{    \n    border: 2px solid darkgrey;\n    border-radius: 0.4rem;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtc3VnZ2VzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7Q0FDQztJQUNHLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxrQkFBa0I7QUFDdEI7Q0FFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0NBRUE7SUFDSSxvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsY0FBYztJQUNkLGVBQWU7QUFDbkI7Q0FFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtDQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjs7SUFFbkIsdUxBQXVMO0lBQ3ZMLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7Q0FFQTtJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsMEdBQTBHO0FBQzlHO0NBRUE7cUJBQ3FCO0NBQ2pCLGlCQUFpQjtDQUNyQixNQUFNIiwiZmlsZSI6InByb2R1Y3Qtc3VnZ2VzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiAjY29udGVudHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmViZWNjYXB1cnBsZTsgKi9cbiAgICAvKiBoZWlnaHQ6IDcwdmg7ICovXG59ICBcblxuLm1hdC1oMXsgIFxuICAgIGRpc3BsYXk6IGZsZXg7ICBcbiAgICBtYXJnaW4tbGVmdDogNC41JTtcbiAgICBtYXJnaW4tdG9wOiAwLjRyZW07XG59XG5cbm1hdC1wYWdpbmF0b3J7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgICBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHJpZ2h0OiA0JTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07ICBcbn1cblxuI2ZsZXgtY29udGFpbmVye1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cbiAgICBtYXJnaW46IGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICBcbn1cblxuI2ZsZXgtY29udGFpbmVyIG1hdC1jYXJke1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmV5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiAwJTsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbiNmbGV4LWNvbnRhaW5lciBtYXQtY2FyZDpob3ZlcnsgICAgXG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDMwcHggNjBweCAtMTJweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOHB4IDM2cHggLTE4cHggaW5zZXQ7XG59XG5cbi8qICNmbGV4LWNvbnRhaW5lciBkaXYgaW1ne1xuICAgIHdpZHRoOiAxMDAlOyAgICAqL1xuICAgIC8qIGhlaWdodDogMjUlOyAqL1xuLyogfSAqL1xuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductSuggestionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-suggestion',
            templateUrl: './product-suggestion.component.html',
            styleUrls: ['./product-suggestion.component.css']
          }]
        }], function () {
          return [{
            type: _service_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"]
          }, {
            type: _service_product_suggestion_service__WEBPACK_IMPORTED_MODULE_3__["ProductSuggestionService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "SwapKaro";
      });

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.css"]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "U68O":
    /*!************************************************!*\
      !*** ./src/app/withdraw/withdraw.component.ts ***!
      \************************************************/

    /*! exports provided: WithdrawComponent */

    /***/
    function U68O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function () {
        return WithdrawComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/user.service */
      "Ouoq");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var WithdrawComponent = /*#__PURE__*/function () {
        function WithdrawComponent(dialog, user) {
          _classCallCheck(this, WithdrawComponent);

          this.dialog = dialog;
          this.user = user;
          this.holderName = "Swapkaro";
          this.cardNo = 321456;
          this.expiry = "03/26";
          this.cvv = 256;
          this.amount = 0;
        }

        _createClass(WithdrawComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.user.loginEmail(localStorage.getItem('loginId')).subscribe(function (user) {
              _this10.availableBarterCoin = user.totalBarterCoin;
            });
          }
        }, {
          key: "withdrawal",
          value: function withdrawal() {
            this.user.addAccount().subscribe(function (resp) {
              console.log(resp);
            });
            this.user.withdrawCoin(localStorage.getItem("loginId"), this.amount).subscribe(function (withdrawStatus) {
              console.log(withdrawStatus);
            });
            this.dialog.closeAll();
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialog.closeAll();
          }
        }]);

        return WithdrawComponent;
      }();

      WithdrawComponent.ɵfac = function WithdrawComponent_Factory(t) {
        return new (t || WithdrawComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      WithdrawComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WithdrawComponent,
        selectors: [["app-withdraw"]],
        decls: 31,
        vars: 6,
        consts: [[1, "heading"], ["src", "assets\\image\\availableCoins.jpg", "alt", "", "width", "30px", "height", "30px"], ["fxFlex", "100%", "appearance", "outline"], ["matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["fxLayoutGap", "2%"], ["fxFlex", "49%", "appearance", "outline"], [3, "click"]],
        template: function WithdrawComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Account Holder Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WithdrawComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.holderName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Card Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WithdrawComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.cardNo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Expiry Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WithdrawComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.expiry = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "CVV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WithdrawComponent_Template_input_ngModelChange_23_listener($event) {
              return ctx.cvv = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WithdrawComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.amount = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WithdrawComponent_Template_button_click_29_listener() {
              return ctx.withdrawal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Withdraw");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Available Barter Coins: \xA0 ", ctx.availableBarterCoin, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.holderName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardNo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.expiry);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cvv);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amount);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"]],
        styles: ["button[_ngcontent-%COMP%]{\n    background-color: #022E57;\n    color: white;\n    border-radius: 0.3rem;\n    margin-top: 1rem;\n    font-size: 1.4rem;\n    padding: 0.4rem;\n}\n\n\n.close-icon[_ngcontent-%COMP%]{\n    justify-content: flex-end;\n    text-align: right;\n}\n\n\n.close-icon[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n\n\n.heading[_ngcontent-%COMP%]{\n    font-size: 28px;\n   font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n   text-align: center;\n   font-weight: bold;\n   letter-spacing: 2px;\n   word-spacing: 2px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhkcmF3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7OztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBQ0E7SUFDSSxlQUFlO0dBQ2hCLG9HQUFvRztHQUNwRyxrQkFBa0I7R0FDbEIsaUJBQWlCO0dBQ2pCLG1CQUFtQjtHQUNuQixpQkFBaUI7Q0FDbkIiLCJmaWxlIjoid2l0aGRyYXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjJFNTc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIHBhZGRpbmc6IDAuNHJlbTtcbn1cblxuXG4uY2xvc2UtaWNvbntcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNsb3NlLWljb246aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRpbmd7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgZm9udC1mYW1pbHk6J1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgIHdvcmQtc3BhY2luZzogMnB4O1xuIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithdrawComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-withdraw',
            templateUrl: './withdraw.component.html',
            styleUrls: ['./withdraw.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UTMJ":
    /*!**************************************************!*\
      !*** ./src/app/service/order-history.service.ts ***!
      \**************************************************/

    /*! exports provided: OrderHistoryService */

    /***/
    function UTMJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderHistoryService", function () {
        return OrderHistoryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var OrderHistoryService = /*#__PURE__*/function () {
        function OrderHistoryService(http) {
          _classCallCheck(this, OrderHistoryService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/product-trading-service';
        } // baseUrl = "http://localhost:8075";


        _createClass(OrderHistoryService, [{
          key: "saveOrder",
          value: function saveOrder(order) {
            return this.http.post(this.baseUrl + "/api/v1/order", order);
          }
        }, {
          key: "getAllOrderHistories",
          value: function getAllOrderHistories() {
            return this.http.get(this.baseUrl + "/api/v1/orders");
          }
        }, {
          key: "getOrderHistoryByOrderId",
          value: function getOrderHistoryByOrderId(orderId) {
            return this.http.get(this.baseUrl + "/api/v1/order/" + orderId);
          }
        }, {
          key: "getOrderByLoginUser",
          value: function getOrderByLoginUser(email) {
            return this.http.get(this.baseUrl + "/api/v1/order/buyer/" + email);
          }
        }]);

        return OrderHistoryService;
      }();

      OrderHistoryService.ɵfac = function OrderHistoryService_Factory(t) {
        return new (t || OrderHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      OrderHistoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OrderHistoryService,
        factory: OrderHistoryService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderHistoryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "V2co":
    /*!************************************************************!*\
      !*** ./src/app/order-history/invoice/invoice.component.ts ***!
      \************************************************************/

    /*! exports provided: InvoiceComponent */

    /***/
    function V2co(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function () {
        return InvoiceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_service_order_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/order-history.service */
      "UTMJ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      var InvoiceComponent = /*#__PURE__*/function () {
        function InvoiceComponent(dialog, orderhistoryService, data, http) {
          _classCallCheck(this, InvoiceComponent);

          this.dialog = dialog;
          this.orderhistoryService = orderhistoryService;
          this.data = data;
          this.http = http;
          this.invoices = {
            orderId: 0,
            productId: 0,
            productName: '',
            buyerName: '',
            sellerName: '',
            dateOfTransaction: "",
            paymentMode: "",
            productCategory: "",
            amount: 0
          };
        }

        _createClass(InvoiceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.orderhistoryService.getOrderHistoryByOrderId(localStorage.getItem("orderId")).subscribe(function (order) {
              var buyerName = order.buyerName.split('@');
              var seller = order.sellerName.split("@");
              order.buyerName = buyerName[0];
              order.sellerName = seller[0];
              _this11.invoices = order;
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialog.closeAll();
          }
        }]);

        return InvoiceComponent;
      }();

      InvoiceComponent.ɵfac = function InvoiceComponent_Factory(t) {
        return new (t || InvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_order_history_service__WEBPACK_IMPORTED_MODULE_2__["OrderHistoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      InvoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvoiceComponent,
        selectors: [["app-invoice"]],
        decls: 46,
        vars: 9,
        consts: [["mat-dialog-title", ""], [1, "fa", "close-icon", 2, "float", "right", "cursor", "pointer", "margin-top", "0.3rem", "margin-right", "0.5rem", 3, "click"], ["href", "#"], [1, "container"], [2, "font-family", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", "font-weight", "bold", "color", "black"], [2, "font-family", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", "font-weight", "bold"], [1, "button"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Print This Invoice"]],
        template: function InvoiceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Invoice ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uF00D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Id: \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product Id: \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Product:\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Seller: \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Buyer:\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Date of Transaction:\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Payment Mode:\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Amount: \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Product Category:\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.invoices.orderId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.invoices.productId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.invoices.productName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.invoices.sellerName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.invoices.buyerName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.invoices.dateOfTransaction, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.invoices.paymentMode, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.invoices.amount, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.invoices.productCategory, "");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"]],
        styles: [".mat-dialog-title[_ngcontent-%COMP%]{    \n    font-family: 'Lucida Sans';\n    font-style: bold;\n    font-size: x-large;\n    color: white;\n    font-weight: bold;\n    text-align: center;\n    margin-left: 2rem;\n    margin-top: 0.5em;\n    background-color:#022E57;\n    }\n.container[_ngcontent-%COMP%]{\nfont-family: 'Lucida Sans';\nfont-style: bolder;\nfont-size: 18px;\nletter-spacing: 2px;\nword-spacing: 5px;\nline-height: 2.5rem;\npadding-left: 5rem;\npadding-top: 1rem;\n}\n.mat-raised-button[_ngcontent-%COMP%]{\nmargin-left: 20rem;\nmargin-top: 2rem;\nheight: 50px;\nwidth: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCO0FBQ0o7QUFDQSwwQkFBMEI7QUFDMUIsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixZQUFZO0FBQ1oiLCJmaWxlIjoiaW52b2ljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctdGl0bGV7ICAgIFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDIyRTU3O1xuICAgIH1cbi5jb250YWluZXJ7XG5mb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJztcbmZvbnQtc3R5bGU6IGJvbGRlcjtcbmZvbnQtc2l6ZTogMThweDtcbmxldHRlci1zcGFjaW5nOiAycHg7XG53b3JkLXNwYWNpbmc6IDVweDtcbmxpbmUtaGVpZ2h0OiAyLjVyZW07XG5wYWRkaW5nLWxlZnQ6IDVyZW07XG5wYWRkaW5nLXRvcDogMXJlbTtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbntcbm1hcmdpbi1sZWZ0OiAyMHJlbTtcbm1hcmdpbi10b3A6IDJyZW07XG5oZWlnaHQ6IDUwcHg7XG53aWR0aDogMTIwcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-invoice',
            templateUrl: './invoice.component.html',
            styleUrls: ['./invoice.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: src_app_service_order_history_service__WEBPACK_IMPORTED_MODULE_2__["OrderHistoryService"]
          }, {
            type: src_app_service_order_history_service__WEBPACK_IMPORTED_MODULE_2__["OrderHistoryService"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./nav-bar/nav-bar.component */
      "5hVl");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _product_recommendation_product_recommendation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./product-recommendation/product-recommendation.component */
      "cA8E");
      /* harmony import */


      var _post_product_post_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./post-product/post-product.component */
      "6Dod");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./product-details/product-details.component */
      "ylPK");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./chat-room/chat-room.component */
      "91Mc");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _order_history_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./order-history/invoice/invoice.component */
      "V2co");
      /* harmony import */


      var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./order-history/order-history.component */
      "d759");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var ngx_avatar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ngx-avatar */
      "HWWf");
      /* harmony import */


      var _payment_barter_coins_barter_coins_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./payment/barter-coins/barter-coins.component */
      "5O8w");
      /* harmony import */


      var _payment_barter_trading_barter_trading_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./payment/barter-trading/barter-trading.component */
      "wIbg");
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./card/card.component */
      "mJ8H");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./home-page/home-page.component */
      "F1my");
      /* harmony import */


      var _product_suggestion_product_suggestion_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./product-suggestion/product-suggestion.component */
      "QkJ+");
      /* harmony import */


      var _email_email_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./email/email.component */
      "rYVK");
      /* harmony import */


      var _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./congratulation/congratulation.component */
      "xmsb");
      /* harmony import */


      var _product_recommendation_filter_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./product-recommendation/filter.pipe */
      "viEF");
      /* harmony import */


      var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./withdraw/withdraw.component */
      "U68O");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_32__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_35__["NgxPaginationModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_36__["AvatarModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_35__["NgxPaginationModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_41__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__["MatMenuModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _product_recommendation_product_recommendation_component__WEBPACK_IMPORTED_MODULE_10__["ProductRecommendationComponent"], _post_product_post_product_component__WEBPACK_IMPORTED_MODULE_11__["PostProductComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_20__["ProductDetailsComponent"], _product_recommendation_product_recommendation_component__WEBPACK_IMPORTED_MODULE_10__["ProductRecommendationComponent"], _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_30__["ChatRoomComponent"], _order_history_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_33__["InvoiceComponent"], _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_34__["OrderHistoryComponent"], _payment_barter_coins_barter_coins_component__WEBPACK_IMPORTED_MODULE_37__["BarterCoinsComponent"], _payment_barter_trading_barter_trading_component__WEBPACK_IMPORTED_MODULE_38__["BarterTradingComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_40__["HeaderComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_43__["HomePageComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_39__["CardComponent"], _product_recommendation_filter_pipe__WEBPACK_IMPORTED_MODULE_47__["FilterPipe"], _email_email_component__WEBPACK_IMPORTED_MODULE_45__["EmailComponent"], _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_46__["CongratulationComponent"], _product_suggestion_product_suggestion_component__WEBPACK_IMPORTED_MODULE_44__["ProductSuggestionComponent"], _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_48__["WithdrawComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_32__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_35__["NgxPaginationModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_36__["AvatarModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_35__["NgxPaginationModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_41__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__["MatMenuModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _product_recommendation_product_recommendation_component__WEBPACK_IMPORTED_MODULE_10__["ProductRecommendationComponent"], _post_product_post_product_component__WEBPACK_IMPORTED_MODULE_11__["PostProductComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_20__["ProductDetailsComponent"], _product_recommendation_product_recommendation_component__WEBPACK_IMPORTED_MODULE_10__["ProductRecommendationComponent"], _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_30__["ChatRoomComponent"], _order_history_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_33__["InvoiceComponent"], _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_34__["OrderHistoryComponent"], _payment_barter_coins_barter_coins_component__WEBPACK_IMPORTED_MODULE_37__["BarterCoinsComponent"], _payment_barter_trading_barter_trading_component__WEBPACK_IMPORTED_MODULE_38__["BarterTradingComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_40__["HeaderComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_43__["HomePageComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_39__["CardComponent"], _product_recommendation_filter_pipe__WEBPACK_IMPORTED_MODULE_47__["FilterPipe"], _email_email_component__WEBPACK_IMPORTED_MODULE_45__["EmailComponent"], _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_46__["CongratulationComponent"], _product_suggestion_product_suggestion_component__WEBPACK_IMPORTED_MODULE_44__["ProductSuggestionComponent"], _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_48__["WithdrawComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_32__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_35__["NgxPaginationModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_36__["AvatarModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_35__["NgxPaginationModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_41__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__["MatMenuModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "avWI":
    /*!**************************************************!*\
      !*** ./src/app/service/email-service.service.ts ***!
      \**************************************************/

    /*! exports provided: EmailServiceService */

    /***/
    function avWI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailServiceService", function () {
        return EmailServiceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var EmailServiceService = /*#__PURE__*/function () {
        // baseUrl = "http://localhost:8063/api/v1/";
        function EmailServiceService(httpClient) {
          _classCallCheck(this, EmailServiceService);

          this.httpClient = httpClient;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/email-service/';
        } // method to send email


        _createClass(EmailServiceService, [{
          key: "sendEmail",
          value: function sendEmail(email) {
            return this.httpClient.post("".concat(this.baseUrl, "sendEmail"), email);
          } // method to notify owner of interested buyers

        }, {
          key: "notifyOwner",
          value: function notifyOwner(email) {
            return this.httpClient.post("".concat(this.baseUrl, "notifyOwner"), email);
          }
        }]);

        return EmailServiceService;
      }();

      EmailServiceService.ɵfac = function EmailServiceService_Factory(t) {
        return new (t || EmailServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      EmailServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EmailServiceService,
        factory: EmailServiceService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailServiceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cA8E":
    /*!****************************************************************************!*\
      !*** ./src/app/product-recommendation/product-recommendation.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ProductRecommendationComponent */

    /***/
    function cA8E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductRecommendationComponent", function () {
        return ProductRecommendationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _service_product_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/product-service.service */
      "O0Bu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function ProductRecommendationComponent_mat_card_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductRecommendationComponent_mat_card_14_Template_mat_card_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var product_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onCardClick(product_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "lowercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-h2", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PROD", product_r1.productId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Owner: ", product_r1.productOwner, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx_r0.position.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, product_r1.modeOfPayment), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx_r0.position.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1.address.city, ", ", product_r1.address.state, " ");
        }
      }

      var ProductRecommendationComponent = /*#__PURE__*/function () {
        function ProductRecommendationComponent(productService, router, domSanitizer) {
          _classCallCheck(this, ProductRecommendationComponent);

          this.productService = productService;
          this.router = router;
          this.domSanitizer = domSanitizer; // position = new FormControl('after');

          this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('above');
          this.product = [];
          this.searchword = "";
          this.searchResult = [];
        }

        _createClass(ProductRecommendationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            // this.userService.getGoogleId().subscribe((userId: any) => {
            //   console.log(userId);
            //   localStorage.setItem('loginId', userId)
            // })
            this.productService.getAllAvailableProducts().subscribe(function (data) {
              console.log(data);
              data.forEach(function (productObj) {
                _this12.product.push(productObj);
              });
              console.log(_this12.product);

              _this12.product.map(function (x) {
                console.log(x);
                x.productOwner = x.productOwner.substring(0, 25);
                x.dateOfPosting = x.dateOfPosting.slice(0, 10);
                x.productImage = _this12.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + x.productImage);
              });

              _this12.pagePart = _this12.product.slice(0, 8);
            });
          }
        }, {
          key: "OnChange",
          value: function OnChange(event) {
            console.log(event);
            var start = event.pageIndex * event.pageSize;
            var end = start + event.pageSize;

            if (end > this.product.length) {
              end = this.product.length;
            }

            this.pagePart = this.product.slice(start, end);
          }
        }, {
          key: "onCardClick",
          value: function onCardClick(item) {
            console.log(item);
            localStorage.setItem("productId", item.productId);
            localStorage.setItem("productName", item.productName);
            localStorage.setItem("productOwner", item.productOwner); // this.productService.productId=item.productId;

            this.router.navigate(['/header/productdetails']);
          } // product$: Observable<Product[]> =this.search.getSearchResults();

        }, {
          key: "searching",
          value: function searching() {
            var _this13 = this;

            this.productService.searchProduct(this.searchword).subscribe(function (data) {
              // data.forEach((productObj)=>{           
              //   this.searchResult.push(productObj);
              // })
              // this.searchResult.map(x=>{
              //   console.log(x)
              //   x.productOwner=x.productOwner.substring(0,25);
              //   x.dateOfPosting=x.dateOfPosting.slice(0,10);
              //   x.productImage=this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/"+"jpg"+";base64,"+x.productImage);
              // })
              // this.pagePart1=this.searchResult.slice(0,8);
              data.forEach(function (productObj) {
                _this13.product.push(productObj);
              });
              console.log(_this13.product);

              _this13.product.map(function (x) {
                console.log(x);
                x.productOwner = x.productOwner.substring(0, 25);
                x.dateOfPosting = x.dateOfPosting.slice(0, 10);
                x.productImage = _this13.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + x.productImage);
              });

              _this13.pagePart = _this13.product.slice(0, 8);
            });
          }
        }]);

        return ProductRecommendationComponent;
      }();

      ProductRecommendationComponent.ɵfac = function ProductRecommendationComponent_Factory(t) {
        return new (t || ProductRecommendationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]));
      };

      ProductRecommendationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductRecommendationComponent,
        selectors: [["app-product-recommendation"]],
        decls: 15,
        vars: 4,
        consts: [[1, "mat-h1"], [2, "width", "30%"], ["mdbWavesEffect", "", 1, "form-inline", "waves-light"], [1, "md-form", "mat-1"], ["type", "text", "name", "searchword", "placeholder", "Search", 1, "form-control", "mr-sm-2", 2, "width", "300px", "margin-left", "10px", 3, "ngModel", "ngModelChange"], ["matSuffix", "", "mat-button", "", 3, "click"], ["aria-label", "Select page", 3, "length", "pageSize", "page"], ["id", "content"], ["id", "flex-container", "fxLayout", "row wrap", "fxLayoutGap", "0.4%"], ["style", "padding: 1.2rem;", "fxFlex", "20%", "fxFlex.xs", "90%", "fxFlex.sm", "45%", 3, "click", 4, "ngFor", "ngForOf"], ["fxFlex", "20%", "fxFlex.xs", "90%", "fxFlex.sm", "45%", 2, "padding", "1.2rem", 3, "click"], [2, "text-align", "end", "margin", "0%"], ["matTooltip", "ProductId", 2, "font-size", "1rem"], ["mat-card-image", "", "alt", "", 2, "height", "8rem", "margin", "auto", "width", "100%", "padding", "0.5rem", 3, "src"], [2, "margin-top", "0.5rem"], ["mat-raised-button", "", "matTooltip", "Mode of Payment", 2, "margin-bottom", "1rem", "font-size", "1.2rem", 3, "matTooltipPosition"], [1, "far", "fa-credit-card"], ["matTooltip", "Location of Product", 1, "fa", "fa-map-marker-alt", 2, "font-size", "1.2rem", 3, "matTooltipPosition"]],
        template: function ProductRecommendationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " All Products ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductRecommendationComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.searchword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductRecommendationComponent_Template_button_click_7_listener() {
              return ctx.searching();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-paginator", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ProductRecommendationComponent_Template_mat_paginator_page_11_listener($event) {
              return ctx.OnChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductRecommendationComponent_mat_card_14_Template, 18, 11, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.product.length)("pageSize", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagePart);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["LowerCasePipe"]],
        styles: ["*[_ngcontent-%COMP%]{\n    padding: 0%;\n    margin: 0;\n    margin-bottom: 0;\n}\n #content[_ngcontent-%COMP%]{\n    padding: 16px;\n    padding-bottom: 0;\n    margin-bottom: 0;\n    \n    \n}\n .mat-h1[_ngcontent-%COMP%]{  \n    display: flex;  \n    margin-left: 4.5%;\n    margin-top: 0.4rem;\n}\n mat-paginator[_ngcontent-%COMP%]{\n    display: inline-flex;\n    justify-content: flex-end;   \n    align-items: center;\n    right: 4%;\n    height: 1.5rem;\n    font-size: 1rem;  \n}\n #flex-container[_ngcontent-%COMP%]{\n    \n    margin: auto;\n    justify-content: space-evenly;\n    align-items: center;   \n}\n #flex-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{\n    border: 2px solid darkgrey;\n    align-items: center; \n\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    \n    margin-bottom: 0.5rem;\n}\n #flex-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover{    \n    border: 2px solid darkgrey;\n    border-radius: 0.4rem;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtcmVjb21tZW5kYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0NBQ0M7SUFDRyxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsa0JBQWtCO0FBQ3RCO0NBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtDQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGNBQWM7SUFDZCxlQUFlO0FBQ25CO0NBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7Q0FFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7O0lBRW5CLHVMQUF1TDtJQUN2TCx3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCO0NBRUE7SUFDSSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDBHQUEwRztBQUM5RztDQUVBO3FCQUNxQjtDQUNqQixpQkFBaUI7Q0FDckIsTUFBTSIsImZpbGUiOiJwcm9kdWN0LXJlY29tbWVuZGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIHBhZGRpbmc6IDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuICNjb250ZW50e1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWJlY2NhcHVycGxlOyAqL1xuICAgIC8qIGhlaWdodDogNzB2aDsgKi9cbn0gIFxuXG4ubWF0LWgxeyAgXG4gICAgZGlzcGxheTogZmxleDsgIFxuICAgIG1hcmdpbi1sZWZ0OiA0LjUlO1xuICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcbn1cblxubWF0LXBhZ2luYXRvcntcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAgIFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcmlnaHQ6IDQlO1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTsgIFxufVxuXG4jZmxleC1jb250YWluZXJ7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgIFxufVxuXG4jZmxleC1jb250YWluZXIgbWF0LWNhcmR7XG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG5cbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XG4gICAgLyogcGFkZGluZy1ib3R0b206IDAlOyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuI2ZsZXgtY29udGFpbmVyIG1hdC1jYXJkOmhvdmVyeyAgICBcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMzBweCA2MHB4IC0xMnB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE4cHggMzZweCAtMThweCBpbnNldDtcbn1cblxuLyogI2ZsZXgtY29udGFpbmVyIGRpdiBpbWd7XG4gICAgd2lkdGg6IDEwMCU7ICAgICovXG4gICAgLyogaGVpZ2h0OiAyNSU7ICovXG4vKiB9ICovXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRecommendationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-recommendation',
            templateUrl: './product-recommendation.component.html',
            styleUrls: ['./product-recommendation.component.css']
          }]
        }], function () {
          return [{
            type: _service_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "d759":
    /*!**********************************************************!*\
      !*** ./src/app/order-history/order-history.component.ts ***!
      \**********************************************************/

    /*! exports provided: OrderHistoryComponent */

    /***/
    function d759(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function () {
        return OrderHistoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./invoice/invoice.component */
      "V2co");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _service_order_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/order-history.service */
      "UTMJ");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function OrderHistoryComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderHistoryComponent_div_8_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.getAllOrderHistories;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Seller Name \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buyer Name \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Product Name\xA0\xA0\xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date of Transaction \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderHistoryComponent_div_8_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var order_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.openDialog(order_r1.orderId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Invoice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Order Id:ORD ", order_r1.orderId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Payment Type: ", order_r1.paymentMode, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", order_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.sellerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.buyerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.dateOfTransaction);
        }
      }

      var _c0 = function _c0(a1, a2) {
        return {
          itemsPerPage: 3,
          currentPage: a1,
          totalItems: a2
        };
      };

      var OrderHistoryComponent = /*#__PURE__*/function () {
        function OrderHistoryComponent(dialog, orderhistoryService) {
          _classCallCheck(this, OrderHistoryComponent);

          this.dialog = dialog;
          this.orderhistoryService = orderhistoryService;
          this.order = [];
          this.page = 1;
          this.totalLength = 0;
        }

        _createClass(OrderHistoryComponent, [{
          key: "openDialog",
          value: function openDialog(orderId) {
            var dialogRef = this.dialog.open(_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_1__["InvoiceComponent"], {
              height: '600px',
              width: '800px'
            });
            console.log(orderId);
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
            localStorage.setItem("orderId", orderId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.orderhistoryService.getOrderByLoginUser(localStorage.getItem('loginId')).subscribe(function (data) {
              console.log("data", data);
              data.forEach(function (order) {
                console.log(order);

                _this14.order.push(order);
              });
              console.log(_this14.order);

              _this14.order.map(function (order) {
                var buyerName = order.buyerName.split('@');
                var seller = order.sellerName.split("@");
                order.buyerName = buyerName[0];
                order.sellerName = seller[0];
                order.image = 'data:image/jpg;base64,' + order.image;
              });
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialog.closeAll();
          }
        }]);

        return OrderHistoryComponent;
      }();

      OrderHistoryComponent.ɵfac = function OrderHistoryComponent_Factory(t) {
        return new (t || OrderHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_order_history_service__WEBPACK_IMPORTED_MODULE_3__["OrderHistoryService"]));
      };

      OrderHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrderHistoryComponent,
        selectors: [["app-order-history"]],
        decls: 10,
        vars: 7,
        consts: [["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["fxLayout", "row", 1, "title"], ["fxFlex", "30%", 2, "font-family", "Lucida Sans", "font-style", "bold", "font-size", "xx-large", "color", "black", "font-weight", "bold", "text-align", "left", "margin-top", "1rem", "margin-left", "2rem", "margin-bottom", "1rem"], ["fxFlex", "40%", "flexLayoutGap", "20%", 1, "text-left", "my-pagination", 2, "margin-left", "45rem", "margin-top", "1.5rem", "font-size", "16px", 3, "pageChange"], ["href", "#", 3, "click", 4, "ngFor", "ngForOf"], ["href", "#", 3, "click"], ["id", "content"], ["fxLayout", " row", 1, "container"], ["fxFlex", "50%"], ["fxLayout", "row", 1, "orderDetails"], ["fxFlex", "25%", 1, "image"], ["height", "90px", "width", "150px", "alt", "profile picture", 3, "src"], ["fxFlex", "25%", 1, "details", 2, "margin-left", "0"], [2, "font-family", "Georgia, 'Times New Roman', Times, serif", "font-weight", "bold"], ["fxFlex", "25%", 1, "details", 2, "margin", "0"], ["fxFlex", "25%", 1, "button"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Click here to generate invoice", 3, "click"]],
        template: function OrderHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Transaction History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pagination-controls", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function OrderHistoryComponent_Template_pagination_controls_pageChange_7_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrderHistoryComponent_div_8_Template, 31, 7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "paginate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 1, ctx.order, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.page, ctx.totalLength)));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"]],
        pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]],
        styles: ["*[_ngcontent-%COMP%]{\n    padding: 0%;\n    margin: 0;\n    margin-bottom: 0;\n}\n  .container[_ngcontent-%COMP%]{\n        max-width: 2000px;\n        max-height: 50px;\n        background-color: rgb(1, 160, 125);\n        font-size: large;\n        font-style: 'Lucida Sans';\n        color: white;\n        margin-bottom: 0.5rem;\n    }\n  .orderDetails[_ngcontent-%COMP%]{\n        height: 120px;\n        margin-bottom: 0.5rem;\n    }\n  .image[_ngcontent-%COMP%]{\n        padding-left: 5rem;\n        padding-bottom: 3rem;\n        height: 20px;\n        width: 20px;\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n    }\n  .details[_ngcontent-%COMP%]{\n       font-size: medium;\n       letter-spacing: 1px;\n       \n       word-spacing: 5px;\n       padding-top: 1rem;\n       line-height: 2rem;\n       margin-left: 10rem;\n    }\n  .mat-raised-button[_ngcontent-%COMP%]{\n      margin-left: 10rem;\n      margin-top: 1.5rem;\n        height: 50px;\n        width: 120px;\n    }\n  .mat-flat-button[_ngcontent-%COMP%]{\n       float: right;\n       margin-right: 3rem;\n       height: 50px;\n       width: 120px;\n       margin-bottom: 25rem;\n       margin-top: 15px;\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0VBQ0U7UUFDTSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGtDQUFrQztRQUNsQyxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixxQkFBcUI7SUFDekI7RUFDQTtRQUNJLGFBQWE7UUFDYixxQkFBcUI7SUFDekI7RUFDQTtRQUNJLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0VBQ0E7T0FDRyxpQkFBaUI7T0FDakIsbUJBQW1CO09BQ25CLHdCQUF3QjtPQUN4QixpQkFBaUI7T0FDakIsaUJBQWlCO09BQ2pCLGlCQUFpQjtPQUNqQixrQkFBa0I7SUFDckI7RUFDQTtNQUNFLGtCQUFrQjtNQUNsQixrQkFBa0I7UUFDaEIsWUFBWTtRQUNaLFlBQVk7SUFDaEI7RUFDRDtPQUNJLFlBQVk7T0FDWixrQkFBa0I7T0FDbEIsWUFBWTtPQUNaLFlBQVk7T0FDWixvQkFBb0I7T0FDcEIsZ0JBQWdCO0dBQ3BCIiwiZmlsZSI6Im9yZGVyLWhpc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgcGFkZGluZzogMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG4gIC5jb250YWluZXJ7XG4gICAgICAgIG1heC13aWR0aDogMjAwMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgMTYwLCAxMjUpO1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICBmb250LXN0eWxlOiAnTHVjaWRhIFNhbnMnO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICB9XG4gICAgLm9yZGVyRGV0YWlsc3tcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cbiAgICAuaW1hZ2V7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIC5kZXRhaWxze1xuICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgICAgIHdvcmQtc3BhY2luZzogNXB4O1xuICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgIG1hcmdpbi1sZWZ0OiAxMHJlbTtcbiAgICB9XG4gICAgLm1hdC1yYWlzZWQtYnV0dG9ue1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xuICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICB9XG4gICAubWF0LWZsYXQtYnV0dG9ue1xuICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICBtYXJnaW4tYm90dG9tOiAyNXJlbTtcbiAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderHistoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-order-history",
            templateUrl: "./order-history.component.html",
            styleUrls: ["./order-history.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }, {
            type: _service_order_history_service__WEBPACK_IMPORTED_MODULE_3__["OrderHistoryService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../withdraw/withdraw.component */
      "U68O");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/user.service */
      "Ouoq");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _service_product_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/product-service.service */
      "O0Bu");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../nav-bar/nav-bar.component */
      "5hVl");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router, userService, dialog, productService) {
          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.userService = userService;
          this.dialog = dialog;
          this.productService = productService;
          this.loggedInUser = localStorage.getItem("loginId");
          this.search = "";
          this.userCoins = 0;
          this.sideNavOpen = false;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.loggedInUser = localStorage.getItem("loginId").split("@")[0];
            this.userService.loginEmail(localStorage.getItem("loginId")).subscribe(function (user) {
              _this15.userCoins = user.totalBarterCoin;
            });
          }
        }, {
          key: "withdrawl",
          value: function withdrawl() {
            this.dialog.open(_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_1__["WithdrawComponent"], {});
          }
        }, {
          key: "logout",
          value: function logout() {
            this.router.navigate(["/"]);
            this.loggedInUser = "LOGIN";
            localStorage.clear();
          }
        }, {
          key: "sideNavToggler",
          value: function sideNavToggler() {
            this.sideNavOpen = !this.sideNavOpen;
          }
        }, {
          key: "searching",
          value: function searching() {
            this.productService.searchProduct(this.search).subscribe(function (data) {
              return console.log(data);
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_product_service_service__WEBPACK_IMPORTED_MODULE_5__["ProductServiceService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 33,
        vars: 4,
        consts: [["mode", "side", 3, "opened"], [1, "justify-content-between"], [1, "logo"], ["mat-icon-button", "", 1, "menu-toggle", 3, "click"], ["mat-button", "", 1, "user", "mt-2", "d-flex", "align-items-center", 3, "matMenuTriggerFor"], [1, "fas", "fa-coins"], [1, "fas", "fa-user-circle", "fa-2x", "cyan-text", 2, "color", "white", "margin-left", "1rem"], [1, "user-image-icon", "ml-1"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar-row", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() {
              return ctx.sideNavToggler();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SwapKaro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "keyboard_arrow_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-menu", null, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_24_listener() {
              return ctx.withdrawl();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "account_balance_wallet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Withdraw ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_28_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.sideNavOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userCoins, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loggedInUser, " ");
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawer"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawerContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmat-drawer[_ngcontent-%COMP%] {\n  width: 260px;\n  background-color: #0f172a;\n}\nmat-toolbar[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #0f172a;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n  background: transparent;\n  color: white;\n}\n.user[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color:white;\n}\n.user-image-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  font-size: 16px;\n  color: white;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 100px;\n  font-size: 15px;\n  margin: 0 5px;\n  font-family: \"Lobster\", cursive;\n  color: #0f172a;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-family: \"Lobster\", cursive;\n  font-weight: 900;\n  color: white;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LWRyYXdlciB7XG4gIHdpZHRoOiAyNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcbn1cblxubWF0LXRvb2xiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubWVudS10b2dnbGUge1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLnVzZXItaW1hZ2UtaWNvbiB7XG4gIGhlaWdodDogMThweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBjdXJzaXZlO1xuICBjb2xvcjogIzBmMTcyYTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXJcIiwgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-header",
            templateUrl: "./header.component.html",
            styleUrls: ["./header.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _service_product_service_service__WEBPACK_IMPORTED_MODULE_5__["ProductServiceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jHPu":
    /*!*****************************************!*\
      !*** ./src/app/service/chat.service.ts ***!
      \*****************************************/

    /*! exports provided: ChatService */

    /***/
    function jHPu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatService", function () {
        return ChatService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ChatService = /*#__PURE__*/function () {
        function ChatService(http) {
          _classCallCheck(this, ChatService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/chat-service';
        } // baseUrl = "http://localhost:8099";


        _createClass(ChatService, [{
          key: "saveChat",
          value: function saveChat(chat) {
            return this.http.post(this.baseUrl + "/api/v5/chat", chat);
          }
        }, {
          key: "editChat",
          value: function editChat(buyerEmail, email, message, chat) {
            return this.http.post(this.baseUrl + "/api/v5/user/chats?buyerEmail=" + buyerEmail + "&loginedEmail=" + email + "&message=" + message, chat);
          }
        }, {
          key: "chatByProductId",
          value: function chatByProductId(productId) {
            return this.http.get(this.baseUrl + "/api/v5/chats/" + productId);
          }
        }, {
          key: "chatByProductIdAndBuyer",
          value: function chatByProductIdAndBuyer(productId, loginedEmail) {
            return this.http.get(this.baseUrl + "/api/v5/user/chats?productId=" + productId + "&buyerEmail=" + loginedEmail);
          }
        }]);

        return ChatService;
      }();

      ChatService.ɵfac = function ChatService_Factory(t) {
        return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChatService,
        factory: ChatService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mJ8H":
    /*!****************************************!*\
      !*** ./src/app/card/card.component.ts ***!
      \****************************************/

    /*! exports provided: CardComponent */

    /***/
    function mJ8H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return CardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/user.service */
      "Ouoq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var CardComponent = /*#__PURE__*/function () {
        function CardComponent(dialog, userService, route, snackBar) {
          _classCallCheck(this, CardComponent);

          this.dialog = dialog;
          this.userService = userService;
          this.route = route;
          this.snackBar = snackBar;
          this.holderName = "Swapkaro";
          this.cardNo = 321456;
          this.expiry = "03/26";
          this.cvv = 256;
        }

        _createClass(CardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.availableBarterCoin = localStorage.getItem('totalBarterCoin');
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialog.closeAll();
          }
        }, {
          key: "withdraw",
          value: function withdraw(message, action) {
            var _this16 = this;

            this.userService.withdrawCoin(localStorage.getItem('loginId'), this.amount).subscribe(function (data) {
              console.log(data);
            });
            this.snackBar.open(message, action);
            setTimeout(function () {
              _this16.route.navigate(['/header/products']);
            }, 500);
          }
        }, {
          key: "diposit",
          value: function diposit(message, action) {
            this.userService.addAccount().subscribe();
            this.userService.dipositCoin(localStorage.getItem('loginId'), this.amount).subscribe(function (data) {
              console.log(data);
            });
            this.snackBar.open(message, action);
            this.dialog.closeAll();
            this.route.navigate(['/header/products']);
          }
        }]);

        return CardComponent;
      }();

      CardComponent.ɵfac = function CardComponent_Factory(t) {
        return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardComponent,
        selectors: [["app-card"]],
        decls: 36,
        vars: 6,
        consts: [[1, "heading", 2, "background-color", "#022E57", "color", "white"], ["mat-dialog-title", "", "fxFlex", "50%"], ["fxFlex", "50%", 1, "fa", "close-icon", 2, "font-size", "24px", 3, "click"], [1, "heading"], ["src", "assets\\image\\availableCoins.jpg", "alt", "", "width", "30px", "height", "30px"], ["fxFlex", "100%", "appearance", "outline"], ["matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["fxLayoutGap", "2%"], ["fxFlex", "49%", "appearance", "outline"], ["mat-button", "", "mat-dialog-close", "", 3, "click"]],
        template: function CardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Payment Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uF00D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Account Holder Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.holderName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Card Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.cardNo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Expiry Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.expiry = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "CVV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.cvv = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardComponent_Template_input_ngModelChange_33_listener($event) {
              return ctx.amount = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_34_listener() {
              return ctx.diposit("Amount have diposited successfully", "Dissmiss");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Deposit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Available Barter Coins: \xA0 ", ctx.availableBarterCoin, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.holderName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardNo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.expiry);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cvv);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amount);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["button[_ngcontent-%COMP%]{\n    \n    background-color: #022E57;\n    color: white;\n}\n\n.heading[_ngcontent-%COMP%]{\n    display: flex;    \n}\n\n.close-icon[_ngcontent-%COMP%]{\n    justify-content: flex-end;\n    text-align: right;\n}\n\n.close-icon[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n\n.heading[_ngcontent-%COMP%]{\n    font-size: 28px;\n   font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n   text-align: center;\n   font-weight: bold;\n   letter-spacing: 2px;\n   word-spacing: 2px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7R0FDaEIsb0dBQW9HO0dBQ3BHLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsbUJBQW1CO0dBQ25CLGlCQUFpQjtDQUNuQiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMkU1NztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkaW5ne1xuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxufVxuLmNsb3NlLWljb257XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jbG9zZS1pY29uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFkaW5ne1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgIGZvbnQtZmFtaWx5OidUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICB3b3JkLXNwYWNpbmc6IDJweDtcbiB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nhC3":
    /*!********************************************!*\
      !*** ./src/app/service/product.service.ts ***!
      \********************************************/

    /*! exports provided: ProductService */

    /***/
    function nhC3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProductService = /*#__PURE__*/function () {
        function ProductService(httpClient) {
          _classCallCheck(this, ProductService);

          this.httpClient = httpClient;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/product-service';
        } // baseUrl = "http://localhost:8097";


        _createClass(ProductService, [{
          key: "postProduct",
          value: function postProduct(productObj, productImage) {
            var data = new FormData();
            data.append("file", productImage);
            data.append("productfile", JSON.stringify(productObj));
            return this.httpClient.post(this.baseUrl + "/api/v1/product", data);
          }
        }]);

        return ProductService;
      }();

      ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductService,
        factory: ProductService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "q0+M":
    /*!**********************************!*\
      !*** ./src/app/model/product.ts ***!
      \**********************************/

    /*! exports provided: Product */

    /***/
    function q0M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return Product;
      });

      var Product = /*#__PURE__*/_createClass(function Product() {
        _classCallCheck(this, Product);
      });
      /***/

    },

    /***/
    "rYVK":
    /*!******************************************!*\
      !*** ./src/app/email/email.component.ts ***!
      \******************************************/

    /*! exports provided: EmailComponent */

    /***/
    function rYVK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailComponent", function () {
        return EmailComponent;
      });
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_email_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/email-service.service */
      "avWI");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function EmailComponent_mat_chip_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function EmailComponent_mat_chip_9_Template_mat_chip_removed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var email_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.remove(email_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var email_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", email_r2, " ");
        }
      }

      var EmailComponent = /*#__PURE__*/function () {
        function EmailComponent(emailService, dialog) {
          _classCallCheck(this, EmailComponent);

          this.emailService = emailService;
          this.dialog = dialog;
          this.email = {
            receiversEmail: [],
            subject: "Notification Alert form SwapKaro",
            messageBody: "Check out our new Product!",
            attachment: "http://localhost:4200/header/productdetails"
          }; // receiver's email addresses

          this.listOfEmails = []; // ------------------------------------------------------------------------------------------------------------
          // matchip logic below

          this.addOnBlur = true;
          this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        }

        _createClass(EmailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this17 = this;

            // ---------------------------------
            // console.log(this.listOfEmails);
            // ---------------------------------
            this.email.receiversEmail = this.listOfEmails; // ---------------------------------

            console.log(this.email.receiversEmail); // ---------------------------------

            this.emailService.sendEmail(this.email).subscribe(function (res) {
              _this17.email = res;
              alert("email sent successfully!");
              _this17.listOfEmails = [];

              _this17.dialog.closeAll();
            });
          }
        }, {
          key: "add",
          value: function add(event) {
            var value = (event.value || "").trim(); // Add email to the list

            if (value) {
              this.listOfEmails.push(value);
            } // Clear the input value


            if (event.input) {
              event.input.value = "";
            }
          }
        }, {
          key: "remove",
          value: function remove(email) {
            var index = this.listOfEmails.indexOf(email);

            if (index >= 0) {
              this.listOfEmails.splice(index, 1);
            }
          }
        }]);

        return EmailComponent;
      }();

      EmailComponent.ɵfac = function EmailComponent_Factory(t) {
        return new (t || EmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_email_service_service__WEBPACK_IMPORTED_MODULE_2__["EmailServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
      };

      EmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EmailComponent,
        selectors: [["app-email"]],
        decls: 13,
        vars: 4,
        consts: [[1, "container"], ["appearance", "outline", 1, "example-chip-list"], ["matInput", "", "placeholder", "New email...", 2, "margin-bottom", "15px", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], ["aria-label", "Email selection"], ["chipList", ""], [3, "removed", 4, "ngFor", "ngForOf"], [1, "row", "container"], ["type", "button", "matTooltip", "Add the item to the cart", "mat-raised-button", "", "routerLink", "/header/productdetails", 1, "btn", "btn-dark", "btn-color", 2, "margin-bottom", "13px !important", 3, "click"], [3, "removed"]],
        template: function EmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sharing Product with...");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add Receiver's Emails");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function EmailComponent_Template_input_matChipInputTokenEnd_6_listener($event) {
              return ctx.add($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-chip-list", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EmailComponent_mat_chip_9_Template, 4, 1, "mat-chip", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_Template_button_click_11_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Share ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listOfEmails);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-family: \"Lobster\", cursive;\n  font-weight: 700;\n  margin-top: 15px;\n  margin-left: 5px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 700px !important;\n  padding: 20px;\n  margin: 5px;\n  margin-bottom: 0;\n}\n\n.mat-chip-list[_ngcontent-%COMP%] {\n  background-color: red !important;\n}\n\n.mat-chip[_ngcontent-%COMP%] {\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n}\n\n.matInput[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 40px;\n  border-bottom: 1px solid black;\n  margin: 15px;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: right;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 200px;\n  font-weight: bold;\n}\n\n.btn-color[_ngcontent-%COMP%] {\n  background-color: #022e57;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQ0FBNkI7RUFBN0Isa0NBQTZCO0VBQTdCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2QiLCJmaWxlIjoiZW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNzAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5tYXQtY2hpcC1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2hpcCB7XG4gIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xufVxuXG4ubWF0SW5wdXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idG4tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyZTU3O1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "app-email",
            templateUrl: "./email.component.html",
            styleUrls: ["./email.component.css"]
          }]
        }], function () {
          return [{
            type: _service_email_service_service__WEBPACK_IMPORTED_MODULE_2__["EmailServiceService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tPLo":
    /*!*******************************************************!*\
      !*** ./src/app/service/product-suggestion.service.ts ***!
      \*******************************************************/

    /*! exports provided: ProductSuggestionService */

    /***/
    function tPLo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductSuggestionService", function () {
        return ProductSuggestionService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProductSuggestionService = /*#__PURE__*/function () {
        function ProductSuggestionService(http) {
          _classCallCheck(this, ProductSuggestionService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/product-recommendation-service';
        } // baseUrl = "http://localhost:8070";


        _createClass(ProductSuggestionService, [{
          key: "getAllProductsByCity",
          value: function getAllProductsByCity(city) {
            return this.http.get(this.baseUrl + "/api/v3/productCity/" + city);
          }
        }]);

        return ProductSuggestionService;
      }();

      ProductSuggestionService.ɵfac = function ProductSuggestionService_Factory(t) {
        return new (t || ProductSuggestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ProductSuggestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductSuggestionService,
        factory: ProductSuggestionService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductSuggestionService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uRUw":
    /*!**********************************!*\
      !*** ./src/app/model/address.ts ***!
      \**********************************/

    /*! exports provided: Address */

    /***/
    function uRUw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Address", function () {
        return Address;
      });

      var Address = /*#__PURE__*/_createClass(function Address() {
        _classCallCheck(this, Address);
      });
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _product_recommendation_product_recommendation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./product-recommendation/product-recommendation.component */
      "cA8E");
      /* harmony import */


      var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./product-details/product-details.component */
      "ylPK");
      /* harmony import */


      var _post_product_post_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./post-product/post-product.component */
      "6Dod");
      /* harmony import */


      var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./order-history/order-history.component */
      "d759");
      /* harmony import */


      var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home-page/home-page.component */
      "F1my");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _product_suggestion_product_suggestion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./product-suggestion/product-suggestion.component */
      "QkJ+");
      /* harmony import */


      var _email_email_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./email/email.component */
      "rYVK");

      var routes = [{
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
      }, {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: "",
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"]
      }, {
        path: "email",
        component: _email_email_component__WEBPACK_IMPORTED_MODULE_11__["EmailComponent"]
      }, {
        path: "header",
        component: _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        children: [{
          path: "products",
          component: _product_recommendation_product_recommendation_component__WEBPACK_IMPORTED_MODULE_4__["ProductRecommendationComponent"]
        }, {
          path: "suggestions",
          component: _product_suggestion_product_suggestion_component__WEBPACK_IMPORTED_MODULE_10__["ProductSuggestionComponent"]
        }, {
          path: "productdetails",
          component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]
        }, {
          path: "postproduct",
          component: _post_product_post_product_component__WEBPACK_IMPORTED_MODULE_6__["PostProductComponent"]
        }, {
          path: "orderhistory",
          component: _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_7__["OrderHistoryComponent"]
        }]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true
            })],
            //   imports: [RouterModule.forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "viEF":
    /*!*******************************************************!*\
      !*** ./src/app/product-recommendation/filter.pipe.ts ***!
      \*******************************************************/

    /*! exports provided: FilterPipe */

    /***/
    function viEF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
        return FilterPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FilterPipe = /*#__PURE__*/function () {
        function FilterPipe() {
          _classCallCheck(this, FilterPipe);
        }

        _createClass(FilterPipe, [{
          key: "transform",
          value: function transform(product, searchText) {
            if (!product) {
              return [];
            }

            if (!searchText) {
              return product;
            }

            searchText = searchText.toLocaleLowerCase();
            return product.filter(function (it) {
              return it.toLocaleLowerCase().includes(searchText);
            });
          }
        }]);

        return FilterPipe;
      }();

      FilterPipe.ɵfac = function FilterPipe_Factory(t) {
        return new (t || FilterPipe)();
      };

      FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filter",
        type: FilterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filter'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/user.service */
      "Ouoq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_product_suggestion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/product-suggestion.service */
      "tPLo");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function LoginComponent_small_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_small_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter password with minimum 8 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_small_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid credentials ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_17_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onLogin(ctx_r5.formGroup);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.formGroup.invalid);
        }
      }

      function LoginComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_18_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onLogin(ctx_r7.formGroup);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.formGroup.invalid);
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, userService, router, suggestion) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.userService = userService;
          this.router = router;
          this.suggestion = suggestion;
          this.loginError = false;
          this.user = {
            email: "",
            address: {
              houseNumber: "",
              streetName: "",
              state: "",
              city: "",
              pincode: 0
            },
            password: "",
            totalBarterCoin: 1.1
          };
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formGroup = this.formBuilder.group({
              emailFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
              passwordFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
            });
          }
        }, {
          key: "onLogin",
          value: function onLogin(data) {
            var _this18 = this;

            console.log(data.value);
            this.user.email = data.value.emailFormControl;
            this.user.password = data.value.passwordFormControl;
            console.log(this.user);
            this.userService.loginEmail(this.user.email).subscribe(function (resp) {
              if (resp == null) {
                _this18.loginError = true;
              }
            });
            this.userService.loginUser(this.user).subscribe(function (data) {
              console.log(data);

              if (data != null) {
                _this18.loginError = false;
                localStorage.setItem('loginId', _this18.user.email);

                _this18.router.navigate(["/header/suggestions"]);
              } else {
                _this18.loginError = true;
              }
            });
          }
        }, {
          key: "onRegister",
          value: function onRegister() {
            this.router.navigate(["/register"]);
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_product_suggestion_service__WEBPACK_IMPORTED_MODULE_4__["ProductSuggestionService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 34,
        vars: 6,
        consts: [[1, "container"], ["routerLink", "/", 1, "navbar-brand", 2, "position", "absolute", "z-index", "7", "left", "1rem", "top", "0.4rem"], ["src", "../../assets/image/brand-logo.png", "width", "200", "height", "40", "alt", ""], [1, "forms-container"], [1, "signin-signup"], [1, "sign-in-form", 3, "formGroup"], [1, "title"], [1, "input-field"], [1, "fa", "fa-user"], ["type", "text", "id", "mail", "placeholder", "Username", "formControlName", "emailFormControl"], ["style", "color: red;", 4, "ngIf"], [1, "fa", "fa-lock"], ["type", "password", "placeholder", "Password", "formControlName", "passwordFormControl"], [4, "ngIf"], [1, "social-text"], [1, "social-media"], ["mat-stroked-button", "", "href", "http://localhost:8095/api/v5/signin", 2, "padding", "0.4rem 1.4rem"], ["src", "https://img.icons8.com/color/48/000000/google-logo.png"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "content"], ["id", "sign-up", 3, "click"], [2, "color", "red"], ["mat-raised-button", "", 2, "background-color", "lightgray", "margin-top", "1rem", "color", "black", "font-size", "2rem", "padding", "0.4rem 1.4rem", 3, "disabled", "click"], ["mat-raised-button", "", 2, "background-color", "#022E57", "margin-top", "1rem", "color", "aliceblue", "font-size", "2rem", "padding", "0.4rem 1.4rem", 3, "disabled", "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Log in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_small_11_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_small_15_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_small_16_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 3, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 3, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Or");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sign In with Google");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "New here ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Want To Exchange Or Trade Then ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_32_listener() {
              return ctx.onRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get("emailFormControl").invalid && ctx.formGroup.get("emailFormControl").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get("passwordFormControl").invalid && ctx.formGroup.get("passwordFormControl").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.valid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  background-color: #fff;\n  min-height: 100vh;\n  overflow: hidden;\n}\n\n.forms-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.signin-signup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 75%;\n  width: 50%;\n  transition: 1s 0.7s ease-in-out;\n  display: grid;\n  grid-template-columns: 1fr;\n  z-index: 5;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0rem 5rem;\n  transition: all 0.2s 0.7s;\n  overflow: hidden;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\nform.sign-in-form[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: #444;\n  margin-bottom: 10px;\n}\n\n.input-field[_ngcontent-%COMP%] {\n  max-width: 380px;\n  width: 100%;\n  background-color: #f0f0f0;\n  margin: 10px 0;\n  height: 55px;\n  border-radius: 55px;\n  display: grid;\n  grid-template-columns: 15% 85%;\n  padding: 0 0.4rem;\n  position: relative;\n}\n\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 55px;\n  color: #acacac;\n  transition: 0.5s;\n  font-size: 1.1rem;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  outline: none;\n  border: none;\n  line-height: 1;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #333;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n\n.social-text[_ngcontent-%COMP%] {\n  padding: 0.7rem 0;\n  font-size: 1.5rem;\n}\n\n.social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 46px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.45rem;\n  color: #333;\n  border-radius: 50%;\n  border: 1px solid #333;\n  text-decoration: none;\n  font-size: 1.1rem;\n  transition: 0.3s;\n}\n\n#sign-up[_ngcontent-%COMP%]{\n  text-decoration: underline;\n  -webkit-text-decoration-color: bisque;\n          text-decoration-color: bisque;\n  font-size: x-large;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 150px;\n  \n  background-color:#022E57;\n  border: none;\n  outline: none;\n  height: 49px;\n  border-radius: 49px;\n  color: #fff;\n  \n  font-weight: 600;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.panels-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 2000px;\n  width: 2000px;\n  top: -10%;\n  right: 48%;\n  transform: translateY(-50%);\n  background-image: linear-gradient(-45deg, #022E57 0%, #04befe 100%);\n  transition: 1.8s ease-in-out;\n  border-radius: 50%;\n  z-index: 6;\n}\n\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  text-align: center;\n  z-index: 6;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n  padding: 3rem 17% 2rem 12%;\n}\n\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #fff;\n  transition: transform 0.9s ease-in-out;\n  transition-delay: 0.6s;\n}\n\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1;\n  font-size: 1.5rem;\n}\n\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  padding: 0.7rem 0;\n}\n\n.btn.transparent[_ngcontent-%COMP%] {\n  margin: 0;\n  background: #022E57;\n  border: 2px solid #fff;\n  width: 130px;\n  height: 3.4rem;\n  font-weight: 600;\n  font-size: 1rem;\n}\n\n\n\n.container.sign-up-mode[_ngcontent-%COMP%]:before {\n  transform: translate(100%, -50%);\n  right: 52%;\n}\n\n.container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(-800px);\n}\n\n.container.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n  left: 25%;\n}\n\n\n\n.container.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\n*/\n\n.container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n\n.container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n@media (max-width: 870px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    min-height: 800px;\n    height: 100vh;\n  }\n  .signin-signup[_ngcontent-%COMP%] {\n    width: 100%;\n    top: 83%;\n    transform: translate(-50%, -100%);\n    transition: 1s 0.8s ease-in-out;\n  }\n\n  .signin-signup[_ngcontent-%COMP%], .signin-signup[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n\n  .panels-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n  }\n\n  .panel[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 2.5rem 8%;\n    grid-column: 1 / 2;\n    margin-top: 2rem;\n  }\n\n  \n\n  .left-panel[_ngcontent-%COMP%] {\n    grid-row: 1 / 2;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    width: 200px;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.6s;\n  }\n\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding-right: 15%;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.8s;\n  }\n\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.5rem 0;\n  }\n\n  .btn.transparent[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 35px;\n    font-size: 0.7rem;\n  }\n\n  .container[_ngcontent-%COMP%]:before {\n    width: 1500px;\n    height: 1500px;\n    transform: translateX(-50%);\n    left: 30%;\n    bottom: 68%;\n    right: initial;\n    top: initial;\n    transition: 2s ease-in-out;\n  }\n\n  .container.sign-up-mode[_ngcontent-%COMP%]:before {\n    transform: translate(-50%, 100%);\n    bottom: 32%;\n    right: initial;\n  }\n\n  .container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(-300px);\n  }\n\n  .container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(0px);\n  }\n\n  \n\n  .container.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    top: 5%;\n    transform: translate(-50%, 0);\n  }\n}\n\n@media (max-width: 570px) {\n  form[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .container[_ngcontent-%COMP%]:before {\n    bottom: 72%;\n    left: 50%;\n  }\n\n  .container.sign-up-mode[_ngcontent-%COMP%]:before {\n    bottom: 28%;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBSEE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUhBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZOztFQUVaLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsbUVBQW1FO0VBQ25FLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNDQUFzQztFQUN0QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUlBLGNBQWM7O0FBRWQ7RUFDRSxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaOztBQUVBOztFQUVFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUFFOzs7O0VBSUEseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLFFBQVE7SUFDUixpQ0FBaUM7SUFDakMsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOzs7O0VBSUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsNkJBQTZCO0VBQy9COztFQUVBOztJQUVFLDBCQUEwQjtFQUM1Qjs7OztFQUlBO0lBQ0UsT0FBTztJQUNQLDZCQUE2QjtFQUMvQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb3Jtcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnNpZ25pbi1zaWdudXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNzUlO1xuICB3aWR0aDogNTAlO1xuICB0cmFuc2l0aW9uOiAxcyAwLjdzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgei1pbmRleDogNTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwcmVtIDVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIDAuN3M7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuZm9ybS5zaWduLWluLWZvcm0ge1xuICB6LWluZGV4OiAyO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgY29sb3I6ICM0NDQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIG1heC13aWR0aDogMzgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBib3JkZXItcmFkaXVzOiA1NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA4NSU7XG4gIHBhZGRpbmc6IDAgMC40cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnB1dC1maWVsZCBpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTVweDtcbiAgY29sb3I6ICNhY2FjYWM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uaW5wdXQtZmllbGQgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5pbnB1dC1maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNvY2lhbC10ZXh0IHtcbiAgcGFkZGluZzogMC43cmVtIDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uc29jaWFsLW1lZGlhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbiB7XG4gIGhlaWdodDogNDZweDtcbiAgd2lkdGg6IDQ2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgMC40NXJlbTtcbiAgY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbiNzaWduLXVwe1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBiaXNxdWU7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbiAgXG4gIGJhY2tncm91bmQtY29sb3I6IzAyMkU1NztcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDQ5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQ5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG5cbi5wYW5lbHMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG59XG5cbi5jb250YWluZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwMDBweDtcbiAgd2lkdGg6IDIwMDBweDtcbiAgdG9wOiAtMTAlO1xuICByaWdodDogNDglO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwMjJFNTcgMCUsICMwNGJlZmUgMTAwJSk7XG4gIHRyYW5zaXRpb246IDEuOHMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogNjtcbn1cblxuLnBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiA2O1xufVxuXG4ubGVmdC1wYW5lbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHBhZGRpbmc6IDNyZW0gMTclIDJyZW0gMTIlO1xufVxuXG4ucGFuZWwgLmNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbi5wYW5lbCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnBhbmVsIHAge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xufVxuXG4uYnRuLnRyYW5zcGFyZW50IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjMDIyRTU3O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMy40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cblxuXG4vKiBBTklNQVRJT04gKi9cblxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgLTUwJSk7XG4gIHJpZ2h0OiA1MiU7XG59XG5cbi5jb250YWluZXIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5pbWFnZSxcbi5jb250YWluZXIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5jb250ZW50IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MDBweCk7XG59XG5cbi5jb250YWluZXIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcbiAgbGVmdDogMjUlO1xufVxuXG4vKiAvKiAuY29udGFpbmVyLnNpZ24tdXAtbW9kZSBmb3JtLnNpZ24tdXAtZm9ybSB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDI7XG59ICovXG5cbi5jb250YWluZXIuc2lnbi11cC1tb2RlIGZvcm0uc2lnbi1pbi1mb3JtIHtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbn0gKi9cblxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcbi5jb250YWluZXIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCAuY29udGVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG59XG5cbi5jb250YWluZXIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jb250YWluZXIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogODAwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuc2lnbmluLXNpZ251cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA4MyU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICAgIHRyYW5zaXRpb246IDFzIDAuOHMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAuc2lnbmluLXNpZ251cCwuc2lnbmluLXNpZ251cCB7XG4gICAgbGVmdDogNTAlO1xuICB9XG5cbiAgLnBhbmVscy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XG4gIH1cblxuICAucGFuZWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyLjVyZW0gOCU7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cblxuICBcblxuICAubGVmdC1wYW5lbCB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcbiAgfVxuXG4gIC5wYW5lbCAuY29udGVudCB7XG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIH1cblxuICAucGFuZWwgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG5cbiAgLnBhbmVsIHAge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICB9XG5cbiAgLmJ0bi50cmFuc3BhcmVudCB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxuXG4gIC5jb250YWluZXI6YmVmb3JlIHtcbiAgICB3aWR0aDogMTUwMHB4O1xuICAgIGhlaWdodDogMTUwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgYm90dG9tOiA2OCU7XG4gICAgcmlnaHQ6IGluaXRpYWw7XG4gICAgdG9wOiBpbml0aWFsO1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLmNvbnRhaW5lci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcbiAgICBib3R0b206IDMyJTtcbiAgICByaWdodDogaW5pdGlhbDtcbiAgfVxuXG4gIC5jb250YWluZXIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5pbWFnZSxcbiAgLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpO1xuICB9XG5cbiAgLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcbiAgLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuXG4gIFxuXG4gIC5jb250YWluZXIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcbiAgICB0b3A6IDUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzBweCkge1xuICBmb3JtIHtcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucGFuZWwgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuXG4gIC5jb250YWluZXI6YmVmb3JlIHtcbiAgICBib3R0b206IDcyJTtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cblxuICAuY29udGFpbmVyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xuICAgIGJvdHRvbTogMjglO1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _service_product_suggestion_service__WEBPACK_IMPORTED_MODULE_4__["ProductSuggestionService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wIbg":
    /*!********************************************************************!*\
      !*** ./src/app/payment/barter-trading/barter-trading.component.ts ***!
      \********************************************************************/

    /*! exports provided: BarterTradingComponent */

    /***/
    function wIbg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarterTradingComponent", function () {
        return BarterTradingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_service_product_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/product-service.service */
      "O0Bu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_service_order_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/order-history.service */
      "UTMJ");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function BarterTradingComponent_mat_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1);
        }
      }

      var BarterTradingComponent = /*#__PURE__*/function () {
        function BarterTradingComponent(dialog, productService, route, snackBar, orderService) {
          _classCallCheck(this, BarterTradingComponent);

          this.dialog = dialog;
          this.productService = productService;
          this.route = route;
          this.snackBar = snackBar;
          this.orderService = orderService;
          this.order = {
            productId: 0,
            productName: "",
            sellerName: "",
            buyerName: localStorage.getItem('loginId'),
            dateOfTransaction: "",
            image: '',
            paymentMode: '',
            amount: 0,
            productCategory: '',
            orderId: 0
          };
        }

        _createClass(BarterTradingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.productId = localStorage.getItem("productId");
            this.productName = localStorage.getItem("productName");
            this.productService.getProductIdByProductOwner(localStorage.getItem("loginId")).subscribe(function (data) {
              console.log(data);
              _this19.getProduct = data;
            });
            this.productService.getProductById(this.productId).subscribe(function (product) {
              _this19.productOwner = product.productOwner;
              _this19.productImage = product.productImage;
              _this19.modeOfPayment = product.modeOfPayment;
              _this19.noOfBarterCoin = product.noOfBarterCoin;
              _this19.productCategory = product.productCategory;
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialog.closeAll();
          }
        }, {
          key: "onTrade",
          value: function onTrade(message, action) {
            var _this20 = this;

            this.productService.exchangeItems(parseInt(this.productId), parseInt(this.selected)).subscribe(function (data) {
              console.log(data);
            });
            this.order.productId = this.productId;
            this.order.productName = this.productName;
            this.order.sellerName = this.productOwner;
            this.order.image = this.productImage;
            this.order.paymentMode = this.modeOfPayment;
            this.order.amount = this.noOfBarterCoin;
            this.order.productCategory = this.productCategory;
            this.orderService.saveOrder(this.order).subscribe(function (order) {
              console.log(order);
            });
            this.snackBar.open(message, action);
            this.dialog.closeAll();
            setTimeout(function () {
              _this20.route.navigate(['/header/products']);
            }, 2000);
          }
        }]);

        return BarterTradingComponent;
      }();

      BarterTradingComponent.ɵfac = function BarterTradingComponent_Factory(t) {
        return new (t || BarterTradingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_order_history_service__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryService"]));
      };

      BarterTradingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BarterTradingComponent,
        selectors: [["app-barter-trading"]],
        decls: 33,
        vars: 4,
        consts: [["mat-dialog-title", ""], ["src", "assets\\image\\bt1.png", "alt", "", "height", "40px", "width", "60px"], [1, "fa", "close-icon", 2, "float", "right", "cursor", "pointer", 3, "click"], ["fxLayout", "row", 1, "container"], ["fxFlex", "50%"], [2, "padding-top", "72.000%", "position", "relative"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://gifer.com/embed/7lBz"), "width", "100%", "height", "80%", "allowFullScreen", "", 2, "position", "absolute", "top", "0", "left", "0"], ["fxFlex", "50%", 1, "ProductID"], [1, "prod"], [1, "pro"], ["fxFlex", "70%", "appearance", "outline", 2, "margin-left", "10px"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "button"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Trade", 2, "float", "right", "margin-top", "1.5rem", "height", "45px", "width", "200px", "font-size", "18px", "font-family", "'Lucida Sans'\n    , 'Lucida Sans Regular' , 'Lucida Grande' , 'Lucida Sans Unicode' , Geneva, Verdana, sans-serif", "letter-spacing", "1px", 3, "click"], [3, "value"]],
        template: function BarterTradingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Payment Mode: Barter Trading ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarterTradingComponent_Template_i_click_4_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uF00D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "iframe", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Exchange With ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Product Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BarterTradingComponent_Template_mat_select_ngModelChange_22_listener($event) {
              return ctx.selected = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "--");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BarterTradingComponent_mat_option_25_Template, 2, 2, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Product You Want To Trade With ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Product Id is required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarterTradingComponent_Template_button_click_31_listener() {
              return ctx.onTrade("You have exchanged your item successfully", "Dissmiss");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Trade");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Product ID: \xA0PROD", ctx.productId, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Product: \xA0 ", ctx.productName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getProduct);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"]],
        styles: [".mat-dialog-title[_ngcontent-%COMP%]{\n    background-color: #022E57;\n    font-weight: medium;\n    color: white;\n    text-align: center;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-size: 30px;\n    letter-spacing: 2px;\n    word-spacing: 2px;\n }\n   .container[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    width: 100%;\n    height:65%\n   }\n   .mat-raised-button[_ngcontent-%COMP%]{\n    margin-left: 12rem;\n    margin-top: 1.5rem;\n    height: 40px;\n    width: 90px;\n    }\n   .prod[_ngcontent-%COMP%]{\n      \n      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n      margin-left: 1rem;\n      font-size: 20px;\n      font-weight: bold;\n      margin-top: 1rem;\n   \n   }\n   .pro[_ngcontent-%COMP%]{\n      \n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    margin-left: 1rem;\n    font-size: 16px;\n    font-weight: bold;\n    margin-top: 1rem;\n \n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhcnRlci10cmFkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkVBQTZFO0lBQzdFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCO0dBQ0U7SUFDQyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYO0dBQ0Q7R0FDQTtJQUNDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWDtHQUVBOztNQUVFLG9HQUFvRztNQUNwRyxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixnQkFBZ0I7O0dBRW5CO0dBQ0E7O0lBRUMsNkVBQTZFO0lBQzdFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7Q0FFbkIiLCJmaWxlIjoiYmFydGVyLXRyYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLXRpdGxle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjJFNTc7XG4gICAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHdvcmQtc3BhY2luZzogMnB4O1xuIH1cbiAgIC5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjY1JVxuICAgfVxuICAgLm1hdC1yYWlzZWQtYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiAxMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIH1cbiAgICBcbiAgICAucHJvZHtcbiAgICAgIFxuICAgICAgZm9udC1mYW1pbHk6J1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgXG4gICB9XG4gICAucHJve1xuICAgICAgXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gXG4gfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarterTradingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-barter-trading',
            templateUrl: './barter-trading.component.html',
            styleUrls: ['./barter-trading.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: src_app_service_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: src_app_service_order_history_service__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "xmsb":
    /*!************************************************************!*\
      !*** ./src/app/congratulation/congratulation.component.ts ***!
      \************************************************************/

    /*! exports provided: CongratulationComponent */

    /***/
    function xmsb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CongratulationComponent", function () {
        return CongratulationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CongratulationComponent = /*#__PURE__*/function () {
        function CongratulationComponent() {
          _classCallCheck(this, CongratulationComponent);
        }

        _createClass(CongratulationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CongratulationComponent;
      }();

      CongratulationComponent.ɵfac = function CongratulationComponent_Factory(t) {
        return new (t || CongratulationComponent)();
      };

      CongratulationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CongratulationComponent,
        selectors: [["app-congratulation"]],
        decls: 1,
        vars: 0,
        consts: [["src", "/assets/image/Congratulations.gif", "alt", "Congratulations", 2, "width", "100%", "height", "70vh"]],
        template: function CongratulationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
          }
        },
        styles: ["*[_ngcontent-%COMP%]{\n    padding: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmdyYXR1bGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6ImNvbmdyYXR1bGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbip7XG4gICAgcGFkZGluZzogMCU7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CongratulationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-congratulation',
            templateUrl: './congratulation.component.html',
            styleUrls: ['./congratulation.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ylPK":
    /*!**************************************************************!*\
      !*** ./src/app/product-details/product-details.component.ts ***!
      \**************************************************************/

    /*! exports provided: ProductDetailsComponent */

    /***/
    function ylPK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
        return ProductDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../chat-room/chat-room.component */
      "91Mc");
      /* harmony import */


      var _payment_barter_trading_barter_trading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../payment/barter-trading/barter-trading.component */
      "wIbg");
      /* harmony import */


      var _email_email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../email/email.component */
      "rYVK");
      /* harmony import */


      var _model_reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../model/reviews */
      "ylyA");
      /* harmony import */


      var _payment_barter_coins_barter_coins_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../payment/barter-coins/barter-coins.component */
      "5O8w");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _service_product_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../service/product-service.service */
      "O0Bu");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function ProductDetailsComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_12_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.openDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Chat With Buyer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_13_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.openDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Chat With Seller ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_div_91_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_91_div_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.openDialog1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Buy Now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_div_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsComponent_div_91_div_1_Template, 3, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.productDetail.productOwner != ctx_r2.loginUser);
        }
      }

      function ProductDetailsComponent_div_92_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_92_div_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.openDialog2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Buy Now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_div_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsComponent_div_92_div_1_Template, 3, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.productDetail.productOwner != ctx_r3.loginUser);
        }
      }

      function ProductDetailsComponent_div_107_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uF007");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var review_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r15.reviewerEmailId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r15.comment);
        }
      }

      var ProductDetailsComponent = /*#__PURE__*/function () {
        function ProductDetailsComponent(dialog, productService, domSanitizer, http) {
          _classCallCheck(this, ProductDetailsComponent);

          this.dialog = dialog;
          this.productService = productService;
          this.domSanitizer = domSanitizer;
          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl + "/product-service"; // baseUrl="http://localhost:8097"

          this.imagePath = "assets/images/washingMachine.jpg";
          this.reviewObj = new _model_reviews__WEBPACK_IMPORTED_MODULE_4__["Reviews"]();
          this.date = new Date().toJSON().split("-");
          this.reviewList = [];
        }

        _createClass(ProductDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.loginUser = localStorage.getItem("loginId");
            console.log(this.loginUser); // this.productId=this.productService.productId;
            // console.log(this.productId);

            this.productService.getProductById(localStorage.getItem('productId')).subscribe(function (response) {
              console.log(response);
              _this21.productDetail = response;
              _this21.productDetail.dateOfPosting = _this21.productDetail.dateOfPosting.substring(0, 10);
              _this21.productDetail.yearOfPurchase = new Date(_this21.productDetail.yearOfPurchase).toLocaleDateString();
              _this21.productDetail.productImage = _this21.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + _this21.productDetail.productImage);

              _this21.http.get(_this21.baseUrl + '/api/v1/qr/' + _this21.productDetail.productId, {
                responseType: 'text'
              }).subscribe(function (res) {
                _this21.qrHtml = _this21.domSanitizer.bypassSecurityTrustHtml(res);
                console.log("Qr Found", res);
              });
            });
            this.productService.getProductById(localStorage.getItem("productId")).subscribe(function (response) {
              console.log(response);
              _this21.productDetail = response;
              _this21.productDetail.dateOfPosting = _this21.productDetail.dateOfPosting.substring(0, 10);
              _this21.productDetail.yearOfPurchase = new Date(_this21.productDetail.yearOfPurchase).toLocaleDateString();
              _this21.productDetail.productImage = _this21.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + _this21.productDetail.productImage);
              _this21.reviewList = _this21.productDetail.reviews;
              console.log(_this21.reviewList);
            });
          } // -------------------------------------------------
          // open the chartroom dialog box

        }, {
          key: "openDialog",
          value: function openDialog() {
            this.dialog.open(_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_1__["ChatRoomComponent"], {
              panelClass: "my-custom-dialog-class"
            });
          } // -------------------------------------------------
          // -------------------------------------------------
          // open the email dialog box

        }, {
          key: "openShareDialog",
          value: function openShareDialog() {
            this.dialog.open(_email_email_component__WEBPACK_IMPORTED_MODULE_3__["EmailComponent"], {
              panelClass: "my-custom-dialog-class"
            });
          } // -------------------------------------------------

        }, {
          key: "openDialog1",
          value: function openDialog1() {
            var dialogRef = this.dialog.open(_payment_barter_trading_barter_trading_component__WEBPACK_IMPORTED_MODULE_2__["BarterTradingComponent"], {
              height: "420px",
              width: "800px"
            });
            dialogRef.disableClose = true;
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "openDialog2",
          value: function openDialog2() {
            var dialogRef = this.dialog.open(_payment_barter_coins_barter_coins_component__WEBPACK_IMPORTED_MODULE_5__["BarterCoinsComponent"], {
              height: "420px",
              width: "800px"
            });
            dialogRef.disableClose = true;
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialog.closeAll();
          }
        }, {
          key: "submitReview",
          value: function submitReview() {
            this.reviewObj.reviewerEmailId = localStorage.getItem('loginId');
            this.reviewObj.comment = this.comment;
            this.productService.updateReview(this.reviewObj, localStorage.getItem('productId')).subscribe();
          }
        }]);

        return ProductDetailsComponent;
      }();

      ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
        return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_product_service_service__WEBPACK_IMPORTED_MODULE_8__["ProductServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]));
      };

      ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductDetailsComponent,
        selectors: [["app-product-details"]],
        decls: 108,
        vars: 24,
        consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")], [1, "container"], [1, "row"], [1, "col-sm-4"], [1, "card"], [1, "col-sm-12"], ["alt", "", "matTooltip", "Product Image", 1, "img-fluid", 2, "height", "20rem", "width", "100%", 3, "src"], ["alt", "PRODUCT QR", "matTooltip", "Product QRImage", 1, "img-fluid", 2, "height", "100%", "width", "100%", "margin-bottom", "0.5rem", 3, "innerHTML"], ["class", "col-sm-12 chat-seller", 4, "ngIf"], [1, "col-sm-8"], [1, "col-sm-12", 2, "display", "flex", "justify-content", "space-between", "align-items", "baseline"], ["matTooltip", "Product Name", 2, "display", "inline"], ["matTooltip", "Product Id"], [1, "card-header"], [1, "card-body"], ["matTooltip", "Product Description"], ["matTooltip", "Date of Add Posting", 1, "fa", 2, "font-size", "24px"], [1, "col-sm-6"], ["matTooltip", "Product Owner and ratings by other user"], [1, "fa", 2, "font-size", "24px"], ["matTooltip", "Location of the product"], [1, "col-sm-2"], ["matTooltip", "Year of purchase by the owner"], ["matTooltip", "Product Category"], ["matTooltip", "Product Quantity"], ["matTooltip", "Available modes of payment for the product"], ["matTooltip", "Cost of product in B-Bucks"], [1, "page-buttons"], ["type", "button", "matTooltip", "Add the item to the cart", "mat-raised-button", "", 1, "btn", "btn-dark", "btn-color"], ["type", "button", "matTooltip", "Add the item to the cart", "mat-raised-button", "", 1, "btn", "btn-outline-dark", 3, "click"], [4, "ngIf"], [1, "comment-section"], ["appearance", "outline", "fxFlex", "70%"], ["matInput", "", "placeholder", "Write a comment", "name", "comment", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "matTooltip", "post your comment", "mat-raised-button", "", 1, "btn", "btn-color", "round-btn", 3, "click"], [1, "fa", 2, "font-size", "15px"], ["type", "button", "matTooltip", "Clear the field", "mat-raised-button", "", 1, "btn", "btn-outline-dark", "round-btn"], [4, "ngFor", "ngForOf"], [1, "col-sm-12", "chat-seller"], ["type", "button", "matTooltip", "Chat with the seller about the product", "mat-raised-button", "", 1, "btn", "btn-outline-dark", "chat-button", 3, "click"], ["type", "button", "matTooltip", "Proceed to buy the product", "mat-raised-button", "", 1, "btn", "btn-dark", "btn-color", 3, "click"], [1, "user-avatar"], [2, "margin-left", "10px"]],
        template: function ProductDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductDetailsComponent_div_12_Template, 3, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductDetailsComponent_div_13_Template, 3, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\uF073");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Owner Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\uF007");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\uF041");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\uF073");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Overview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Category: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Quantity: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Payment Options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\uF156");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\uF0D6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Add to Cart ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_89_listener() {
              return ctx.openShareDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Share ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, ProductDetailsComponent_div_91_Template, 2, 1, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, ProductDetailsComponent_div_92_Template, 2, 1, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-card", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-card-header", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Comments / FAQ's");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-form-field", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductDetailsComponent_Template_input_ngModelChange_100_listener($event) {
              return ctx.comment = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_101_listener() {
              return ctx.submitReview();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\uF064");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\uF021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, ProductDetailsComponent_div_107_Template, 9, 2, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.productDetail.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.qrHtml, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productDetail.productOwner == ctx.loginUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productDetail.productOwner != ctx.loginUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productDetail.productName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Product Id: PROD", ctx.productDetail.productId, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productDetail.productDescription, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productDetail.dateOfPosting, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.productDetail.productOwner, " (\u2B50\u2B50\u2B50 ", ctx.productDetail.ratings, " ratings) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"](" ", ctx.productDetail.address.houseNumber, " ", ctx.productDetail.address.streetName, " ", ctx.productDetail.address.city, " ", ctx.productDetail.address.state, " ", ctx.productDetail.address.pincode, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productDetail.yearOfPurchase, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.productDetail.productCategory, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productDetail.quantity, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productDetail.modeOfPayment, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productDetail.noOfBarterCoin, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.productDetail == null ? null : ctx.productDetail.modeOfPayment) == "BARTERING");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.productDetail == null ? null : ctx.productDetail.modeOfPayment) == "COINS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviewList);
          }
        },
        directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultFlexDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: 900;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.page-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 200px;\n  margin: 10px;\n  font-weight: bold;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: 5px auto;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #848585d3;\n  color: white;\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.603);\n}\n\nimg[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n\n.comment-section[_ngcontent-%COMP%] {\n  border-bottom: 15px solid black;\n  margin-top: 30px;\n}\n\n.comment-hr[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n\n.chat-seller[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.chat-button[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 3px solid;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 20%;\n  margin: 15px;\n  border: none;\n  border-bottom: 1px solid;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 5px;\n  justify-content: left;\n  align-items: center;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.btn-color[_ngcontent-%COMP%] {\n  background-color: #022e57;\n  color: white;\n}\n\n.btn-outline-dark[_ngcontent-%COMP%]:hover {\n  background-color: #022e57;\n  color: white;\n}\n\n.btn-outline-dark[_ngcontent-%COMP%] {\n  color: #022e57;\n}\n\n.round-btn[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  width: 10px;\n  height: 35px;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n}\n\nmat-card-header[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\nmat-expansion-panel[_ngcontent-%COMP%] {\n  margin: 10px auto;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnBhZ2UtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDg1ODVkMztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMyk7XG59XG5cbmltZyB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5jb21tZW50LXNlY3Rpb24ge1xuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY29tbWVudC1ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY2hhdC1zZWxsZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNoYXQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkO1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogMjAlO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmZvcm0gYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5idG4tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyZTU3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tb3V0bGluZS1kYXJrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMmU1NztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLW91dGxpbmUtZGFyayB7XG4gIGNvbG9yOiAjMDIyZTU3O1xufVxuXG4ucm91bmQtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLnVzZXItYXZhdGFyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-product-details",
            templateUrl: "./product-details.component.html",
            styleUrls: ["./product-details.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
          }, {
            type: _service_product_service_service__WEBPACK_IMPORTED_MODULE_8__["ProductServiceService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ylyA":
    /*!**********************************!*\
      !*** ./src/app/model/reviews.ts ***!
      \**********************************/

    /*! exports provided: Reviews */

    /***/
    function ylyA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Reviews", function () {
        return Reviews;
      });

      var Reviews = /*#__PURE__*/_createClass(function Reviews() {
        _classCallCheck(this, Reviews);
      });
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map