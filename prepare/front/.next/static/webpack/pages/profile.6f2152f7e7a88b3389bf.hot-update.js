webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/munseungjun/Documents/react-NodeBird/prepare/front/components/FollowList.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar FollowList = function FollowList(_ref) {\n  _s();\n\n  var header = _ref.header,\n      data = _ref.data;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n\n  var onClick = function onClick() {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__[\"UNFOLLOW_REQUEST\"]\n    });\n  };\n\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"List\"], {\n    style: {\n      marginBottom: 20\n    },\n    grid: {\n      gutter: 4,\n      xs: 2,\n      md: 3\n    },\n    size: \"small\",\n    header: __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 15\n      }\n    }, header),\n    loadMore: __jsx(\"div\", {\n      style: {\n        textAlign: 'center',\n        margin: '10px 0'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }\n    }, \"\\uB354 \\uBCF4\\uAE30\")),\n    bordered: true,\n    dataSource: data,\n    renderItem: function renderItem(item) {\n      return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"List\"].Item, {\n        style: {\n          marginTop: 20\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 9\n        }\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n        actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"StopOutlined\"], {\n          key: \"stop\",\n          onClick: onClick(item.id),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 23\n          }\n        })],\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Meta, {\n        description: item.nickname,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 13\n        }\n      })));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  });\n};\n\n_s(FollowList, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"]];\n});\n\n_c = FollowList;\nFollowList.propTypes = {\n  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\n\nvar _c;\n\n$RefreshReg$(_c, \"FollowList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzP2ZhMDIiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DbGljayIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwibWFyZ2luQm90dG9tIiwiZ3V0dGVyIiwieHMiLCJtZCIsInRleHRBbGlnbiIsIm1hcmdpbiIsIml0ZW0iLCJtYXJnaW5Ub3AiLCJpZCIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXNCO0VBQUE7O0VBQUEsSUFBbkJDLE1BQW1CLFFBQW5CQSxNQUFtQjtFQUFBLElBQVhDLElBQVcsUUFBWEEsSUFBVztFQUN2QyxJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztFQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07SUFDcEJGLFFBQVEsQ0FBQztNQUNQRyxJQUFJLEVBQUVDLCtEQUFnQkE7SUFEZixDQUFELENBQVI7RUFHRCxDQUpEOztFQU1BLE9BQ0UsTUFBQyx5Q0FBRDtJQUNFLEtBQUssRUFBRTtNQUFFQyxZQUFZLEVBQUU7SUFBaEIsQ0FEVDtJQUVFLElBQUksRUFBRTtNQUFFQyxNQUFNLEVBQUUsQ0FBVjtNQUFhQyxFQUFFLEVBQUUsQ0FBakI7TUFBb0JDLEVBQUUsRUFBRTtJQUF4QixDQUZSO0lBR0UsSUFBSSxFQUFDLE9BSFA7SUFJRSxNQUFNLEVBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUFNVixNQUFOLENBSlY7SUFLRSxRQUFRLEVBQ047TUFBSyxLQUFLLEVBQUU7UUFBRVcsU0FBUyxFQUFFLFFBQWI7UUFBdUJDLE1BQU0sRUFBRTtNQUEvQixDQUFaO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDRSxNQUFDLDJDQUFEO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEseUJBREYsQ0FOSjtJQVVFLFFBQVEsTUFWVjtJQVdFLFVBQVUsRUFBRVgsSUFYZDtJQVlFLFVBQVUsRUFBRSxvQkFBQVksSUFBSTtNQUFBLE9BQ2QsTUFBQyx5Q0FBRCxDQUFNLElBQU47UUFBVyxLQUFLLEVBQUU7VUFBRUMsU0FBUyxFQUFFO1FBQWIsQ0FBbEI7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNFLE1BQUMseUNBQUQ7UUFDRSxPQUFPLEVBQUUsQ0FBQyxNQUFDLDhEQUFEO1VBQWMsR0FBRyxFQUFDLE1BQWxCO1VBQXlCLE9BQU8sRUFBRVYsT0FBTyxDQUFDUyxJQUFJLENBQUNFLEVBQU4sQ0FBekM7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFBQSxFQUFELENBRFg7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUdFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO1FBQVcsV0FBVyxFQUFFRixJQUFJLENBQUNHLFFBQTdCO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFIRixDQURGLENBRGM7SUFBQSxDQVpsQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREY7QUF3QkQsQ0FoQ0Q7O0dBQU1qQixVO1VBQ2FJLHVEOzs7S0FEYkosVTtBQWtDTkEsVUFBVSxDQUFDa0IsU0FBWCxHQUF1QjtFQUNyQmpCLE1BQU0sRUFBRWtCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREo7RUFFckJuQixJQUFJLEVBQUVpQixpREFBUyxDQUFDRyxLQUFWLENBQWdCRDtBQUZELENBQXZCO0FBS2VyQix5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9sbG93TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3BPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIExpc3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xuXG5jb25zdCBGb2xsb3dMaXN0ID0gKHsgaGVhZGVyLCBkYXRhIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdFxuICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxuICAgICAgZ3JpZD17eyBndXR0ZXI6IDQsIHhzOiAyLCBtZDogMyB9fVxuICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgIGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cbiAgICAgIGxvYWRNb3JlPXtcbiAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46ICcxMHB4IDAnIH19PlxuICAgICAgICAgIDxCdXR0b24+642UIOuztOq4sDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgIGJvcmRlcmVkXG4gICAgICBkYXRhU291cmNlPXtkYXRhfVxuICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXG4gICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgYWN0aW9ucz17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiIG9uQ2xpY2s9e29uQ2xpY2soaXRlbS5pZCl9IC8+XX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICApfVxuICAgIC8+XG4gICk7XG59O1xuXG5Gb2xsb3dMaXN0LnByb3BUeXBlcyA9IHtcbiAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ })

})