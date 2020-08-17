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
      m: 3,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsIkxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYXJyIiwic2V0SW50ZXJ2YWwiLCJwYWRkaW5nQm90dG9tIiwibWFwIiwiZWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsQ0FBRCxDQUR0QjtBQUFBLE1BQ1RDLE9BRFM7QUFBQSxNQUNBQyxVQURBOztBQUVoQixNQUFNQyxHQUFHLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBWjtBQUNBQyxhQUFXLENBQUM7QUFBQSxXQUFJRixVQUFVLENBQUMsQ0FBRCxDQUFkO0FBQUEsR0FBRCxFQUFtQixJQUFuQixDQUFYO0FBQ0EsU0FDQTtBQUFLLFNBQUssRUFBRTtBQUFDRyxtQkFBYSxFQUFDO0FBQWYsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDZEQUFEO0FBQWEsa0JBQVcsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxTQUFLLEVBQUMsU0FBWjtBQUFzQixRQUFJLEVBQUMsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBRkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUMsUUFBeEI7QUFBaUMsV0FBTyxFQUFFLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLFdBQU8sRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLE9BQU8sR0FBRyxNQUFDLGlFQUFEO0FBQVUsV0FBTyxFQUFDLEtBQWxCO0FBQXdCLFNBQUssRUFBRSxHQUEvQjtBQUFvQyxVQUFNLEVBQUUsR0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixDQURGLEVBTUdFLEdBQUcsQ0FBQ0csR0FBSixDQUFRLFVBQUNDLEdBQUQsRUFBUztBQUNkLFdBQVEsTUFBQyxzREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxDQUFmO0FBQWtCLE9BQUMsRUFBRSxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0xOLE9BQU8sR0FBQyxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBRCxHQUFjLE1BQUMsNERBQUQ7QUFBWSxhQUFPLEVBQUMsV0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEaEIsRUFFSkEsT0FBTyxHQUFDLE1BQUMsaUVBQUQ7QUFBVSxhQUFPLEVBQUMsTUFBbEI7QUFBeUIsWUFBTSxFQUFFLEdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBRCxHQUNULE1BQUMsNERBQUQ7QUFBWSxhQUFPLEVBQUMsT0FBcEI7QUFBMkIsV0FBSyxFQUFDLGFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMGNBSE0sQ0FBUjtBQWFILEdBZEEsQ0FOSCxDQURBLENBUEYsRUFnQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaENGLENBREE7QUFvQ0Q7O0dBeENNRixROztLQUFBQSxRO0FBMENRQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNjM1NTVlNWY3ODBhOTVjOTNhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlckNvbXBvbmVudCc7XHJcbmltcG9ydCB7Qm94LEJyZWFkY3J1bWJzLExpbmssIFR5cG9ncmFwaHksQ2FyZCwgQ2FyZEhlYWRlcixcclxuICAgQ2FyZENvbnRlbnQsIENhcmRNZWRpYSwgR3JpZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uJztcclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgICBjb25zdCBbTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IGFyciA9IFsxLDIsMyw0LDUsNl07XHJcbiAgICBzZXRJbnRlcnZhbCgoKT0+c2V0TG9hZGluZygwKSwzMDAwKTtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTozfX0+XHJcbiAgICAgIDxIZWFkZXIvPlxyXG4gICAgICA8QnJlYWRjcnVtYnMgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgSG9tZVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9CcmVhZGNydW1icz5cclxuICAgICAgPGRpdj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXszfT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIHtMb2FkaW5nID8gPFNrZWxldG9uIHZhcmlhbnQ9XCJyZWNcIiB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0vPjpcclxuICAgICAgICAgIDxoMT5NUyBEaG9uaTwvaDE+fVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIHthcnIubWFwKChlbGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICg8R3JpZCBpdGVtIHhzPXs1fSBtPXszfT5cclxuICAgICAgICAgICAgICB7TG9hZGluZz88U2tlbGV0b24gLz46PFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPigyMDEzLTIwMjApPC9UeXBvZ3JhcGh5PiB9XHJcbiAgICAgICAgICAgICAgeyBMb2FkaW5nPzxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiIGhlaWdodD17MjAwfS8+OlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmllbnQ9XCJib2R5MVwiY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIE1haGVuZHJhIFNpbmdoIERob25pIChBYm91dCB0aGlzIHNvdW5kcHJvbnVuY2lhdGlvbiAoaGVscMK3aW5mbykgYm9ybiA3IEp1bHkgMTk4MSksIGlzIGEgZm9ybWVyIEluZGlhbiBpbnRlcm5hdGlvbmFsIGNyaWNrZXRlciB3aG8gY2FwdGFpbmVkIHRoZSBJbmRpYW4gbmF0aW9uYWwgdGVhbSBpbiBcclxuICAgICAgICAgICAgICAgICAgICBsaW1pdGVkLW92ZXJzIGZvcm1hdHMgZnJvbSAyMDA3IHRvIDIwMTYgYW5kIGluIFRlc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JpY2tldCBmcm9tIDIwMDggdG8gMjAxNC4gVW5kZXIgaGlzIGNhcHRhaW5jeSwgSW5kaWEgd29uIHRoZSAyMDA3IElDQyBXb3JsZCBUd2VudHkyMCwgdGhlIDIwMTAgYW5kIDIwMTYgQXNpYSBDdXBzLCB0aGUgMjAxMSBJQ0MgQ3JpY2tldCBXb3JsZCBDdXAgYW5kIHRoZSAyMDEzIElDQyBDaGFtcGlvbnMgVHJvcGh5XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyLz5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==