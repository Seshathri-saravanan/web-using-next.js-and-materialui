webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_headerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/headerComponent */ "./components/headerComponent.js");
/* harmony import */ var _components_footerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footerComponent */ "./components/footerComponent.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
var _jsxFileName = "D:\\iiit-k\\Samples\\next\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function HomePage(props) {
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
    style: {},
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
    src: "/images/dhoi.jpg",
    style: {
      marginBottom: 50
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
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiTG9hZGluZyIsInNldExvYWRpbmciLCJhcnIiLCJzZXRJbnRlcnZhbCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsQ0FBRCxDQURqQjtBQUFBLE1BQ2RDLE9BRGM7QUFBQSxNQUNMQyxVQURLOztBQUVyQixNQUFNQyxHQUFHLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBWjtBQUNBQyxhQUFXLENBQUM7QUFBQSxXQUFJRixVQUFVLENBQUMsQ0FBRCxDQUFkO0FBQUEsR0FBRCxFQUFtQixJQUFuQixDQUFYO0FBQ0EsU0FDQTtBQUFLLFNBQUssRUFBRSxFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNkRBQUQ7QUFBYSxrQkFBVyxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLFNBQUssRUFBQyxTQUFaO0FBQXNCLFFBQUksRUFBQyxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FGRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBQyxRQUF4QjtBQUFpQyxXQUFPLEVBQUUsQ0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxNQUFwQjtBQUFxQixNQUFFLEVBQUUsRUFBekI7QUFBNkIsV0FBTyxFQUFDLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsT0FBTyxHQUFHLE1BQUMsaUVBQUQ7QUFBVSxXQUFPLEVBQUMsS0FBbEI7QUFBd0IsVUFBTSxFQUFFLEVBQWhDO0FBQW9DLFNBQUssRUFBRSxHQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLENBREYsRUFNRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLFdBQU8sRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLE9BQU8sR0FBRyxNQUFDLGlFQUFEO0FBQVUsV0FBTyxFQUFDLEtBQWxCO0FBQXdCLFNBQUssRUFBRSxHQUEvQjtBQUFvQyxVQUFNLEVBQUUsR0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQ1I7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNkIsU0FBSyxFQUFFO0FBQUNJLGtCQUFZLEVBQUM7QUFBZCxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FORixFQVdFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxNQUFwQjtBQUFzQixNQUFFLEVBQUUsRUFBMUI7QUFBOEIsV0FBTyxFQUFDLFFBQXRDO0FBQStDLFdBQU8sRUFBRSxDQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLEdBQUcsQ0FBQ0csR0FBSixDQUFRLFVBQUNDLEdBQUQsRUFBUztBQUNkLFdBQVEsTUFBQyxzREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDTE4sT0FBTyxHQUFDLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFELEdBQWMsTUFBQyw0REFBRDtBQUFZLGFBQU8sRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURoQixFQUVKQSxPQUFPLEdBQUMsTUFBQyxpRUFBRDtBQUFVLGFBQU8sRUFBQyxNQUFsQjtBQUF5QixZQUFNLEVBQUUsR0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFELEdBQ1QsTUFBQyw0REFBRDtBQUFZLGFBQU8sRUFBQyxPQUFwQjtBQUEyQixXQUFLLEVBQUMsYUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwY0FITSxDQUFSO0FBYUQsR0FkRixDQURILENBWEYsQ0FERixDQVBGLEVBdUNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZDRixDQURBO0FBMkNEOztHQS9DTUgsUTs7S0FBQUEsUTs7QUE4RVFBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNjZjhmOThiZjdkZjJhNTkzYmY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyQ29tcG9uZW50JztcclxuaW1wb3J0IHtCb3gsQnJlYWRjcnVtYnMsTGluaywgVHlwb2dyYXBoeSxDYXJkLCBDYXJkSGVhZGVyLFxyXG4gICBDYXJkQ29udGVudCwgQ2FyZE1lZGlhLCBHcmlkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvU2tlbGV0b24nO1xyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gICAgY29uc3QgW0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBhcnIgPSBbMSwyLDMsNCw1LDZdO1xyXG4gICAgc2V0SW50ZXJ2YWwoKCk9PnNldExvYWRpbmcoMCksMzAwMCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e319PlxyXG4gICAgICA8SGVhZGVyLz5cclxuICAgICAgPEJyZWFkY3J1bWJzIGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIEhvbWVcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQnJlYWRjcnVtYnM+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXszfT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0ganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICB7TG9hZGluZyA/IDxTa2VsZXRvbiB2YXJpYW50PVwidHh0XCIgaGVpZ2h0PXs1MH0gd2lkdGg9ezI1MH0vPjpcclxuICAgICAgICAgICAgPGgxPk1TIERob25pPC9oMT59XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHtMb2FkaW5nID8gPFNrZWxldG9uIHZhcmlhbnQ9XCJyZWNcIiB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0vPjpcclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2Rob2kuanBnXCIgIHN0eWxlPXt7bWFyZ2luQm90dG9tOjUwfX0gLz59XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gIHhzPXsxMn0ganVzdGlmeT1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICB7YXJyLm1hcCgoZWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxHcmlkIGl0ZW0geHM9ezV9PlxyXG4gICAgICAgICAgICAgICAgICB7TG9hZGluZz88U2tlbGV0b24gLz46PFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPigyMDEzLTIwMjApPC9UeXBvZ3JhcGh5PiB9XHJcbiAgICAgICAgICAgICAgICAgIHsgTG9hZGluZz88U2tlbGV0b24gdmFyaWFudD1cInRleHRcIiBoZWlnaHQ9ezIwMH0vPjpcclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWVudD1cImJvZHkxXCJjb2xvcj1cInRleHRQcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYWhlbmRyYSBTaW5naCBEaG9uaSAoQWJvdXQgdGhpcyBzb3VuZHByb251bmNpYXRpb24gKGhlbHDCt2luZm8pIGJvcm4gNyBKdWx5IDE5ODEpLCBpcyBhIGZvcm1lciBJbmRpYW4gaW50ZXJuYXRpb25hbCBjcmlja2V0ZXIgd2hvIGNhcHRhaW5lZCB0aGUgSW5kaWFuIG5hdGlvbmFsIHRlYW0gaW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0ZWQtb3ZlcnMgZm9ybWF0cyBmcm9tIDIwMDcgdG8gMjAxNiBhbmQgaW4gVGVzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JpY2tldCBmcm9tIDIwMDggdG8gMjAxNC4gVW5kZXIgaGlzIGNhcHRhaW5jeSwgSW5kaWEgd29uIHRoZSAyMDA3IElDQyBXb3JsZCBUd2VudHkyMCwgdGhlIDIwMTAgYW5kIDIwMTYgQXNpYSBDdXBzLCB0aGUgMjAxMSBJQ0MgQ3JpY2tldCBXb3JsZCBDdXAgYW5kIHRoZSAyMDEzIElDQyBDaGFtcGlvbnMgVHJvcGh5XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIvPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgLy8gRmV0Y2ggZGF0YSBmcm9tIGV4dGVybmFsIEFQSVxyXG4gICAgY29uc29sZS5sb2coXCJIaWlcIik7XHJcbiAgICBjb25zdCBiYXNldXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8nO1xyXG4gICAgY29uc3QgcmVzID0gZmV0Y2goYmFzZXVybCtcImRpc2hlc1wiKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ0Vycm9yICcgKyByZXNwb25zZS5zdGF0dXMgKyAnOiAnICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIHZhciBlcnJtZXNzID0gbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgdGhyb3cgZXJybWVzcztcclxuICAgIH0pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge2NvbnNvbGUubG9nKFwiaDEgLS0+XCIrcmVzcG9uc2UuanNvbigpKTt9KVxyXG4gIC50aGVuKGRpc2hlcyA9PiB7Y29uc29sZS5sb2coXCJoMiAtLT5cIitkaXNoZXMpOyByZXR1cm4gZGlzaGVzO30pXHJcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiaDMgLS0+XCIrZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhcIkhlcmVcIik7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBjb25zdCBkYXRhID0gMzsgXHJcbiAgXHJcbiAgICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfVxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9