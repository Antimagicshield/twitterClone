webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/NicknameEditForm.js":
/*!****************************************!*\
  !*** ./components/NicknameEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/munseungjun/Documents/react-NodeBird/prepare/front/components/NicknameEditForm.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar NicknameEditForm = function NicknameEditForm() {\n  _s();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me;\n\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((me === null || me === void 0 ? void 0 : me.nickname) || ''),\n      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 2),\n      nickname = _useInput2[0],\n      onChangeNickname = _useInput2[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    dispatch({\n      type: CHANGE_NICKNAME_REQUEST,\n      data: nickname\n    });\n  }, [nickname]);\n  var style = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      marginBottom: '20px',\n      border: '1px solid #d9d9d9',\n      padding: '20px'\n    };\n  }, []);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"].Search, {\n    value: nickname,\n    onChange: onChangeNickname,\n    addonBefore: \"\\uB2C9\\uB124\\uC784\",\n    enterButton: \"\\uC218\\uC815\",\n    onSearch: onsubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(NicknameEditForm, \"WWSXYapHomVONQ+JoEUC/m/b47E=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"]];\n});\n\n_c = NicknameEditForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NicknameEditForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"NicknameEditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzPzE3YTkiXSwibmFtZXMiOlsiTmlja25hbWVFZGl0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VJbnB1dCIsIm5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiZGF0YSIsInN0eWxlIiwidXNlTWVtbyIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsInBhZGRpbmciLCJvbnN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0VBQUE7O0VBQzdCLG1CQUFlQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7SUFBQSxPQUFJQSxLQUFLLENBQUNDLElBQVY7RUFBQSxDQUFOLENBQTFCO0VBQUEsSUFBUUMsRUFBUixnQkFBUUEsRUFBUjs7RUFDQSxnQkFBcUNDLCtEQUFRLENBQUMsQ0FBQUQsRUFBRSxTQUFGLElBQUFBLEVBQUUsV0FBRixZQUFBQSxFQUFFLENBQUVFLFFBQUosS0FBZ0IsRUFBakIsQ0FBN0M7RUFBQTtFQUFBLElBQU9BLFFBQVA7RUFBQSxJQUFpQkMsZ0JBQWpCOztFQUNBLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7RUFFQSxJQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUNqQ0gsUUFBUSxDQUFDO01BQ1BJLElBQUksRUFBRUMsdUJBREM7TUFFUEMsSUFBSSxFQUFFUjtJQUZDLENBQUQsQ0FBUjtFQUlELENBTDJCLEVBS3pCLENBQUNBLFFBQUQsQ0FMeUIsQ0FBNUI7RUFPQSxJQUFNUyxLQUFLLEdBQUdDLHFEQUFPLENBQ25CO0lBQUEsT0FBTztNQUNMQyxZQUFZLEVBQUUsTUFEVDtNQUVMQyxNQUFNLEVBQUUsbUJBRkg7TUFHTEMsT0FBTyxFQUFFO0lBSEosQ0FBUDtFQUFBLENBRG1CLEVBTW5CLEVBTm1CLENBQXJCO0VBU0EsT0FDRSxNQUFDLHlDQUFEO0lBQU0sS0FBSyxFQUFFSixLQUFiO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLDBDQUFELENBQU8sTUFBUDtJQUNFLEtBQUssRUFBRVQsUUFEVDtJQUVFLFFBQVEsRUFBRUMsZ0JBRlo7SUFHRSxXQUFXLEVBQUMsb0JBSGQ7SUFJRSxXQUFXLEVBQUMsY0FKZDtJQUtFLFFBQVEsRUFBRWEsUUFMWjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FERjtBQVdELENBaENEOztHQUFNcEIsZ0I7VUFDV0MsdUQsRUFDc0JJLHVELEVBQ3BCSSx1RDs7O0tBSGJULGdCO0FBa0NTQSwrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XG5cbmNvbnN0IE5pY2tuYW1lRWRpdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQobWU/Lm5pY2tuYW1lIHx8ICcnKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxuICAgICAgZGF0YTogbmlja25hbWUsXG4gICAgfSk7XG4gIH0sIFtuaWNrbmFtZV0pO1xuXG4gIGNvbnN0IHN0eWxlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2Q5ZDlkOScsXG4gICAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgfSksXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIHN0eWxlPXtzdHlsZX0+XG4gICAgICA8SW5wdXQuU2VhcmNoXG4gICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XG4gICAgICAgIGFkZG9uQmVmb3JlPVwi64uJ64Sk7J6EXCJcbiAgICAgICAgZW50ZXJCdXR0b249XCLsiJjsoJVcIlxuICAgICAgICBvblNlYXJjaD17b25zdWJtaXR9XG4gICAgICAvPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5pY2tuYW1lRWRpdEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NicknameEditForm.js\n");

/***/ })

})