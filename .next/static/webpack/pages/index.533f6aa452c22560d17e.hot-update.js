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
      paddingBottom: 3
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
      columnNumber: 9
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
      columnNumber: 11
    }
  }, Loading ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "txt",
    height: 50,
    width: 250,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 24
    }
  }) : __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "MS Dhoni")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, Loading ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "rec",
    width: 250,
    height: 250,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 24
    }
  }) : __jsx("img", {
    src: "/images/dhoni.jpg",
    style: {
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    justify: "center",
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, arr.map(function (ele) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 5,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }
    }, Loading ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 28
      }
    }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "subtitle1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 41
      }
    }, "(2013-2020)"), Loading ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "text",
      height: 200,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      varient: "body1",
      color: "textPrimary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 19
      }
    }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 Mahendra Singh Dhoni (About this soundpronunciation (help\xB7info) born 7 July 1981), is a former Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2016 and in Test cricket from 2008 to 2014. Under his captaincy, India won the 2007 ICC World Twenty20, the 2010 and 2016 Asia Cups, the 2011 ICC Cricket World Cup and the 2013 ICC Champions Trophy"));
  })))), __jsx(_components_footerComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsIkxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYXJyIiwic2V0SW50ZXJ2YWwiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luIiwibWFwIiwiZWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsQ0FBRCxDQUR0QjtBQUFBLE1BQ1RDLE9BRFM7QUFBQSxNQUNBQyxVQURBOztBQUVoQixNQUFNQyxHQUFHLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBWjtBQUNBQyxhQUFXLENBQUM7QUFBQSxXQUFJRixVQUFVLENBQUMsQ0FBRCxDQUFkO0FBQUEsR0FBRCxFQUFtQixJQUFuQixDQUFYO0FBQ0EsU0FDQTtBQUFLLFNBQUssRUFBRTtBQUFDRyxtQkFBYSxFQUFDO0FBQWYsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDZEQUFEO0FBQWEsa0JBQVcsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxTQUFLLEVBQUMsU0FBWjtBQUFzQixRQUFJLEVBQUMsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBRkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUMsUUFBeEI7QUFBaUMsV0FBTyxFQUFFLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLFdBQU8sRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLE9BQU8sR0FBRyxNQUFDLGlFQUFEO0FBQVUsV0FBTyxFQUFDLEtBQWxCO0FBQXdCLFVBQU0sRUFBRSxFQUFoQztBQUFvQyxTQUFLLEVBQUUsR0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixDQURGLEVBTUUsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixRQUFJLE1BQXBCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUE2QixXQUFPLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxPQUFPLEdBQUcsTUFBQyxpRUFBRDtBQUFVLFdBQU8sRUFBQyxLQUFsQjtBQUF3QixTQUFLLEVBQUUsR0FBL0I7QUFBb0MsVUFBTSxFQUFFLEdBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUNSO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQThCLFNBQUssRUFBRTtBQUFDSyxZQUFNLEVBQUM7QUFBUixLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FORixFQVdFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxNQUFwQjtBQUFzQixNQUFFLEVBQUUsRUFBMUI7QUFBOEIsV0FBTyxFQUFDLFFBQXRDO0FBQStDLFdBQU8sRUFBRSxDQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILEdBQUcsQ0FBQ0ksR0FBSixDQUFRLFVBQUNDLEdBQUQsRUFBUztBQUNkLFdBQVEsTUFBQyxzREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDTFAsT0FBTyxHQUFDLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFELEdBQWMsTUFBQyw0REFBRDtBQUFZLGFBQU8sRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURoQixFQUVKQSxPQUFPLEdBQUMsTUFBQyxpRUFBRDtBQUFVLGFBQU8sRUFBQyxNQUFsQjtBQUF5QixZQUFNLEVBQUUsR0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFELEdBQ1QsTUFBQyw0REFBRDtBQUFZLGFBQU8sRUFBQyxPQUFwQjtBQUEyQixXQUFLLEVBQUMsYUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwY0FITSxDQUFSO0FBYUQsR0FkRixDQURILENBWEYsQ0FERixDQVBGLEVBdUNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZDRixDQURBO0FBMkNEOztHQS9DTUYsUTs7S0FBQUEsUTtBQWlEUUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTMzZjZhYTQ1MmMyMjU2MGQxN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXJDb21wb25lbnQnO1xyXG5pbXBvcnQge0JveCxCcmVhZGNydW1icyxMaW5rLCBUeXBvZ3JhcGh5LENhcmQsIENhcmRIZWFkZXIsXHJcbiAgIENhcmRDb250ZW50LCBDYXJkTWVkaWEsIEdyaWR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvbic7XHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgY29uc3QgW0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBhcnIgPSBbMSwyLDMsNCw1LDZdO1xyXG4gICAgc2V0SW50ZXJ2YWwoKCk9PnNldExvYWRpbmcoMCksMzAwMCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206M319PlxyXG4gICAgICA8SGVhZGVyLz5cclxuICAgICAgPEJyZWFkY3J1bWJzIGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIEhvbWVcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQnJlYWRjcnVtYnM+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXszfT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0ganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICB7TG9hZGluZyA/IDxTa2VsZXRvbiB2YXJpYW50PVwidHh0XCIgaGVpZ2h0PXs1MH0gd2lkdGg9ezI1MH0vPjpcclxuICAgICAgICAgICAgPGgxPk1TIERob25pPC9oMT59XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHtMb2FkaW5nID8gPFNrZWxldG9uIHZhcmlhbnQ9XCJyZWNcIiB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0vPjpcclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2Rob25pLmpwZ1wiICBzdHlsZT17e21hcmdpbjoxMH19IC8+fVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtICB4cz17MTJ9IGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAge2Fyci5tYXAoKGVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8R3JpZCBpdGVtIHhzPXs1fT5cclxuICAgICAgICAgICAgICAgICAge0xvYWRpbmc/PFNrZWxldG9uIC8+OjxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj4oMjAxMy0yMDIwKTwvVHlwb2dyYXBoeT4gfVxyXG4gICAgICAgICAgICAgICAgICB7IExvYWRpbmc/PFNrZWxldG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgaGVpZ2h0PXsyMDB9Lz46XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmllbnQ9XCJib2R5MVwiY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWFoZW5kcmEgU2luZ2ggRGhvbmkgKEFib3V0IHRoaXMgc291bmRwcm9udW5jaWF0aW9uIChoZWxwwrdpbmZvKSBib3JuIDcgSnVseSAxOTgxKSwgaXMgYSBmb3JtZXIgSW5kaWFuIGludGVybmF0aW9uYWwgY3JpY2tldGVyIHdobyBjYXB0YWluZWQgdGhlIEluZGlhbiBuYXRpb25hbCB0ZWFtIGluIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdGVkLW92ZXJzIGZvcm1hdHMgZnJvbSAyMDA3IHRvIDIwMTYgYW5kIGluIFRlc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyaWNrZXQgZnJvbSAyMDA4IHRvIDIwMTQuIFVuZGVyIGhpcyBjYXB0YWluY3ksIEluZGlhIHdvbiB0aGUgMjAwNyBJQ0MgV29ybGQgVHdlbnR5MjAsIHRoZSAyMDEwIGFuZCAyMDE2IEFzaWEgQ3VwcywgdGhlIDIwMTEgSUNDIENyaWNrZXQgV29ybGQgQ3VwIGFuZCB0aGUgMjAxMyBJQ0MgQ2hhbXBpb25zIFRyb3BoeVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyLz5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==