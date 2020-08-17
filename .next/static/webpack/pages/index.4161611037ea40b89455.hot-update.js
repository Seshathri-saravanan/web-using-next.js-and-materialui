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
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");
var _jsxFileName = "D:\\iiit-k\\Samples\\next\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      padding: 0,
      margin: 0
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    appbar2: {
      height: 100,
      maxWidth: "100%",
      padding: 0,
      margin: 0
    },
    logButton: {
      "float": "right"
    }
  };
});

function HomePage() {
  _s();

  var _this = this;

  var classes = useStyles();

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
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_components_headerComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Breadcrumbs"], {
    "aria-label": "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    color: "inherit",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Home")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    justify: "center",
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 46,
      columnNumber: 9
    }
  }, Loading ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "rec",
    width: 250,
    height: 250,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 22
    }
  }) : __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "MS Dhoni")), arr.map(function (ele) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 5,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, Loading ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 24
      }
    }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "subtitle1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 37
      }
    }, "(2013-2020)"), Loading ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "text",
      height: 200,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 25
      }
    }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      varient: "body1",
      color: "textPrimary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 Mahendra Singh Dhoni (About this soundpronunciation (help\xB7info) born 7 July 1981), is a former Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2016 and in Test cricket from 2008 to 2014. Under his captaincy, India won the 2007 ICC World Twenty20, the 2010 and 2016 Asia Cups, the 2011 ICC Cricket World Cup and the 2013 ICC Champions Trophy"));
  }))), __jsx(_components_footerComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }));
}

_s(HomePage, "PlJs+4t7+14KgSPhGJV14IrdKuQ=", false, function () {
  return [useStyles];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwicGFkZGluZyIsIm1hcmdpbiIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJ0aXRsZSIsImFwcGJhcjIiLCJoZWlnaHQiLCJtYXhXaWR0aCIsImxvZ0J1dHRvbiIsIkhvbWVQYWdlIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiTG9hZGluZyIsInNldExvYWRpbmciLCJhcnIiLCJzZXRJbnRlcnZhbCIsInBhZGRpbmdCb3R0b20iLCJtYXAiLCJlbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyw4RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRE47QUFFSkMsYUFBTyxFQUFDLENBRko7QUFHSkMsWUFBTSxFQUFDO0FBSEgsS0FEaUM7QUFNdkNDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBREgsS0FOMkI7QUFTdkNDLFNBQUssRUFBRTtBQUNMTixjQUFRLEVBQUU7QUFETCxLQVRnQztBQVl2Q08sV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBQyxHQURGO0FBRUxDLGNBQVEsRUFBQyxNQUZKO0FBR0xSLGFBQU8sRUFBQyxDQUhIO0FBSUxDLFlBQU0sRUFBQztBQUpGLEtBWjhCO0FBa0J2Q1EsYUFBUyxFQUFDO0FBQ04sZUFBTTtBQURBO0FBbEI2QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUF1QkEsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUNoQixNQUFNQyxPQUFPLEdBQUdoQixTQUFTLEVBQXpCOztBQURnQixrQkFFY2lCLHNEQUFRLENBQUMsQ0FBRCxDQUZ0QjtBQUFBLE1BRVRDLE9BRlM7QUFBQSxNQUVBQyxVQUZBOztBQUdoQixNQUFNQyxHQUFHLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBWjtBQUNBQyxhQUFXLENBQUM7QUFBQSxXQUFJRixVQUFVLENBQUMsQ0FBRCxDQUFkO0FBQUEsR0FBRCxFQUFtQixJQUFuQixDQUFYO0FBQ0EsU0FDQTtBQUFLLFNBQUssRUFBRTtBQUFDRyxtQkFBYSxFQUFDO0FBQWYsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDZEQUFEO0FBQWEsa0JBQVcsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxTQUFLLEVBQUMsU0FBWjtBQUFzQixRQUFJLEVBQUMsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBRkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUMsUUFBeEI7QUFBaUMsV0FBTyxFQUFFLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLFdBQU8sRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLE9BQU8sR0FBRyxNQUFDLGlFQUFEO0FBQVUsV0FBTyxFQUFDLEtBQWxCO0FBQXdCLFNBQUssRUFBRSxHQUEvQjtBQUFvQyxVQUFNLEVBQUUsR0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixDQURGLEVBTUdFLEdBQUcsQ0FBQ0csR0FBSixDQUFRLFVBQUNDLEdBQUQsRUFBUztBQUNkLFdBQVEsTUFBQyxzREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDTE4sT0FBTyxHQUFDLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFELEdBQWMsTUFBQyw0REFBRDtBQUFZLGFBQU8sRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURoQixFQUVKQSxPQUFPLEdBQUMsTUFBQyxpRUFBRDtBQUFVLGFBQU8sRUFBQyxNQUFsQjtBQUF5QixZQUFNLEVBQUUsR0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFELEdBQ1QsTUFBQyw0REFBRDtBQUFZLGFBQU8sRUFBQyxPQUFwQjtBQUEyQixXQUFLLEVBQUMsYUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwY0FITSxDQUFSO0FBYUgsR0FkQSxDQU5ILENBREEsQ0FQRixFQWdDRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQ0YsQ0FEQTtBQW9DRDs7R0F6Q01ILFE7VUFDV2YsUzs7O0tBRFhlLFE7QUEyQ1FBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQxNjE2MTEwMzdlYTQwYjg5NDU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyQ29tcG9uZW50JztcclxuaW1wb3J0IHtCb3gsQnJlYWRjcnVtYnMsTGluaywgVHlwb2dyYXBoeSxDYXJkLCBDYXJkSGVhZGVyLFxyXG4gICBDYXJkQ29udGVudCwgQ2FyZE1lZGlhLCBHcmlkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvU2tlbGV0b24nO1xyXG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzL21ha2VTdHlsZXMnO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIHBhZGRpbmc6MCxcclxuICAgIG1hcmdpbjowLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBhcHBiYXIyOiB7XHJcbiAgICAgIGhlaWdodDoxMDAsXHJcbiAgICAgIG1heFdpZHRoOlwiMTAwJVwiLFxyXG4gICAgICBwYWRkaW5nOjAsXHJcbiAgICAgIG1hcmdpbjowLFxyXG4gIH0sXHJcbiAgbG9nQnV0dG9uOntcclxuICAgICAgZmxvYXQ6XCJyaWdodFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBhcnIgPSBbMSwyLDMsNCw1LDZdO1xyXG4gICAgc2V0SW50ZXJ2YWwoKCk9PnNldExvYWRpbmcoMCksMzAwMCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206M319PlxyXG4gICAgICA8SGVhZGVyLz5cclxuICAgICAgPEJyZWFkY3J1bWJzIGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIEhvbWVcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQnJlYWRjcnVtYnM+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgc3BhY2luZz17M30+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICB7TG9hZGluZyA/IDxTa2VsZXRvbiB2YXJpYW50PVwicmVjXCIgd2lkdGg9ezI1MH0gaGVpZ2h0PXsyNTB9Lz46XHJcbiAgICAgICAgICA8aDE+TVMgRGhvbmk8L2gxPn1cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICB7YXJyLm1hcCgoZWxlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPEdyaWQgaXRlbSB4cz17NX0+XHJcbiAgICAgICAgICAgICAge0xvYWRpbmc/PFNrZWxldG9uIC8+OjxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj4oMjAxMy0yMDIwKTwvVHlwb2dyYXBoeT4gfVxyXG4gICAgICAgICAgICAgIHsgTG9hZGluZz88U2tlbGV0b24gdmFyaWFudD1cInRleHRcIiBoZWlnaHQ9ezIwMH0vPjpcclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpZW50PVwiYm9keTFcImNvbG9yPVwidGV4dFByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICBNYWhlbmRyYSBTaW5naCBEaG9uaSAoQWJvdXQgdGhpcyBzb3VuZHByb251bmNpYXRpb24gKGhlbHDCt2luZm8pIGJvcm4gNyBKdWx5IDE5ODEpLCBpcyBhIGZvcm1lciBJbmRpYW4gaW50ZXJuYXRpb25hbCBjcmlja2V0ZXIgd2hvIGNhcHRhaW5lZCB0aGUgSW5kaWFuIG5hdGlvbmFsIHRlYW0gaW4gXHJcbiAgICAgICAgICAgICAgICAgICAgbGltaXRlZC1vdmVycyBmb3JtYXRzIGZyb20gMjAwNyB0byAyMDE2IGFuZCBpbiBUZXN0IFxyXG4gICAgICAgICAgICAgICAgICAgIGNyaWNrZXQgZnJvbSAyMDA4IHRvIDIwMTQuIFVuZGVyIGhpcyBjYXB0YWluY3ksIEluZGlhIHdvbiB0aGUgMjAwNyBJQ0MgV29ybGQgVHdlbnR5MjAsIHRoZSAyMDEwIGFuZCAyMDE2IEFzaWEgQ3VwcywgdGhlIDIwMTEgSUNDIENyaWNrZXQgV29ybGQgQ3VwIGFuZCB0aGUgMjAxMyBJQ0MgQ2hhbXBpb25zIFRyb3BoeVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPEZvb3Rlci8+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=