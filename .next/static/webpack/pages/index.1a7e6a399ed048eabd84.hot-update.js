webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_headerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/headerComponent */ "./components/headerComponent.js");
/* harmony import */ var _components_footerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footerComponent */ "./components/footerComponent.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
var _jsxFileName = "D:\\iiit-k\\Samples\\next\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function HomePage() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      Loading = _useState[0],
      setLoading = _useState[1];

  var arr = [1, 2, 3, 4, 5, 6];
  setInterval(function () {
    return setLoading(0);
  }, 3000);
  return __jsx("div", {
    style: {
      padding: '100'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_components_headerComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Breadcrumbs"], {
    "aria-label": "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    color: "inherit",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Home")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    justify: "center",
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, Loading ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "rec",
    width: 250,
    height: 250,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 22
    }
  }) : __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "MS Dhoni")), arr.map(function (ele) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 5,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }, Loading ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 24
      }
    }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "subtitle1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 37
      }
    }, "(2013-2020)"), Loading ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "text",
      height: 200,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      varient: "body1",
      color: "textPrimary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 Mahendra Singh Dhoni (About this soundpronunciation (help\xB7info) born 7 July 1981), is a former Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2016 and in Test cricket from 2008 to 2014. Under his captaincy, India won the 2007 ICC World Twenty20, the 2010 and 2016 Asia Cups, the 2011 ICC Cricket World Cup and the 2013 ICC Champions Trophy"));
  }))), __jsx(_components_footerComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }));
}

_s(HomePage, "E/cDfvZqMg7fkb3UxqvWjZS3Ono=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsIkxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYXJyIiwic2V0SW50ZXJ2YWwiLCJwYWRkaW5nIiwibWFwIiwiZWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsQ0FBRCxDQUR0QjtBQUFBLE1BQ1RDLE9BRFM7QUFBQSxNQUNBQyxVQURBOztBQUVoQixNQUFNQyxHQUFHLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBWjtBQUNBQyxhQUFXLENBQUM7QUFBQSxXQUFJRixVQUFVLENBQUMsQ0FBRCxDQUFkO0FBQUEsR0FBRCxFQUFtQixJQUFuQixDQUFYO0FBQ0EsU0FDQTtBQUFLLFNBQUssRUFBRTtBQUFDRyxhQUFPLEVBQUM7QUFBVCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNkRBQUQ7QUFBYSxrQkFBVyxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLFNBQUssRUFBQyxTQUFaO0FBQXNCLFFBQUksRUFBQyxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FGRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBQyxRQUF4QjtBQUFpQyxXQUFPLEVBQUUsQ0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxNQUFwQjtBQUFxQixNQUFFLEVBQUUsRUFBekI7QUFBNkIsV0FBTyxFQUFDLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osT0FBTyxHQUFHLE1BQUMsaUVBQUQ7QUFBVSxXQUFPLEVBQUMsS0FBbEI7QUFBd0IsU0FBSyxFQUFFLEdBQS9CO0FBQW9DLFVBQU0sRUFBRSxHQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLENBREYsRUFNR0UsR0FBRyxDQUFDRyxHQUFKLENBQVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2QsV0FBUSxNQUFDLHNEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNMTixPQUFPLEdBQUMsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUQsR0FBYyxNQUFDLDREQUFEO0FBQVksYUFBTyxFQUFDLFdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGhCLEVBRUpBLE9BQU8sR0FBQyxNQUFDLGlFQUFEO0FBQVUsYUFBTyxFQUFDLE1BQWxCO0FBQXlCLFlBQU0sRUFBRSxHQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUQsR0FDVCxNQUFDLDREQUFEO0FBQVksYUFBTyxFQUFDLE9BQXBCO0FBQTJCLFdBQUssRUFBQyxhQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBjQUhNLENBQVI7QUFhSCxHQWRBLENBTkgsQ0FEQSxDQVBGLEVBZ0NFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhDRixDQURBO0FBb0NEOztHQXhDTUYsUTs7S0FBQUEsUTtBQTBDUUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWE3ZTZhMzk5ZWQwNDhlYWJkODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXJDb21wb25lbnQnO1xyXG5pbXBvcnQge0JveCxCcmVhZGNydW1icyxMaW5rLCBUeXBvZ3JhcGh5LENhcmQsIENhcmRIZWFkZXIsXHJcbiAgIENhcmRDb250ZW50LCBDYXJkTWVkaWEsIEdyaWR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvbic7XHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgY29uc3QgW0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBhcnIgPSBbMSwyLDMsNCw1LDZdO1xyXG4gICAgc2V0SW50ZXJ2YWwoKCk9PnNldExvYWRpbmcoMCksMzAwMCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6JzEwMCd9fT5cclxuICAgICAgPEhlYWRlci8+XHJcbiAgICAgIDxCcmVhZGNydW1icyBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICBIb21lXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0JyZWFkY3J1bWJzPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0ganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAge0xvYWRpbmcgPyA8U2tlbGV0b24gdmFyaWFudD1cInJlY1wiIHdpZHRoPXsyNTB9IGhlaWdodD17MjUwfS8+OlxyXG4gICAgICAgICAgPGgxPk1TIERob25pPC9oMT59XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAge2Fyci5tYXAoKGVsZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxHcmlkIGl0ZW0geHM9ezV9PlxyXG4gICAgICAgICAgICAgIHtMb2FkaW5nPzxTa2VsZXRvbiAvPjo8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+KDIwMTMtMjAyMCk8L1R5cG9ncmFwaHk+IH1cclxuICAgICAgICAgICAgICB7IExvYWRpbmc/PFNrZWxldG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgaGVpZ2h0PXsyMDB9Lz46XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWVudD1cImJvZHkxXCJjb2xvcj1cInRleHRQcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgTWFoZW5kcmEgU2luZ2ggRGhvbmkgKEFib3V0IHRoaXMgc291bmRwcm9udW5jaWF0aW9uIChoZWxwwrdpbmZvKSBib3JuIDcgSnVseSAxOTgxKSwgaXMgYSBmb3JtZXIgSW5kaWFuIGludGVybmF0aW9uYWwgY3JpY2tldGVyIHdobyBjYXB0YWluZWQgdGhlIEluZGlhbiBuYXRpb25hbCB0ZWFtIGluIFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0ZWQtb3ZlcnMgZm9ybWF0cyBmcm9tIDIwMDcgdG8gMjAxNiBhbmQgaW4gVGVzdCBcclxuICAgICAgICAgICAgICAgICAgICBjcmlja2V0IGZyb20gMjAwOCB0byAyMDE0LiBVbmRlciBoaXMgY2FwdGFpbmN5LCBJbmRpYSB3b24gdGhlIDIwMDcgSUNDIFdvcmxkIFR3ZW50eTIwLCB0aGUgMjAxMCBhbmQgMjAxNiBBc2lhIEN1cHMsIHRoZSAyMDExIElDQyBDcmlja2V0IFdvcmxkIEN1cCBhbmQgdGhlIDIwMTMgSUNDIENoYW1waW9ucyBUcm9waHlcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIvPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9