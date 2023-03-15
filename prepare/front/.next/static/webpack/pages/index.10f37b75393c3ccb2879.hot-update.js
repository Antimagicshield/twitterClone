webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.js\");\n/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ \"./components/PostForm.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/munseungjun/Documents/react-NodeBird/prepare/front/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      mainPosts = _useSelector2.mainPosts,\n      hasMorePosts = _useSelector2.hasMorePosts,\n      loadPostsLoading = _useSelector2.loadPostsLoading,\n      retweetError = _useSelector2.retweetError;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__[\"LOAD_MY_INFO_REQUEST\"]\n    });\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LOAD_POSTS_REQUEST\"]\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    function onScroll() {\n      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {\n        if (hasMorePosts && !loadPostsLoading) {\n          var lastId = mainPosts[mainPosts.length - 1].id;\n          dispatch({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LOAD_POSTS_REQUEST\"],\n            lastId: lastId\n          });\n        }\n      }\n    }\n\n    window.addEventListener('scroll', onScroll);\n    return function () {\n      window.removeEventListener('scroll', onScroll);\n    };\n  }, [hasMorePosts, loadPostsLoading, mainPosts]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (retweetError) {\n      alert(retweetError);\n    }\n  }, [retweetError]);\n  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 14\n    }\n  }), mainPosts.map(function (post) {\n    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: post.id,\n      post: post,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }\n    });\n  }));\n};\n\n_s(Home, \"RoExE+/yfgw5cJidFLvUgAEZJE8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"]];\n});\n\n_c = Home;\nHome.title = 'Home';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInBvc3QiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwicmV0d2VldEVycm9yIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIm9uU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGFzdElkIiwibGVuZ3RoIiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFsZXJ0IiwibWFwIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07RUFBQTs7RUFDakIsbUJBQWVDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztJQUFBLE9BQUlBLEtBQUssQ0FBQ0MsSUFBVjtFQUFBLENBQU4sQ0FBMUI7RUFBQSxJQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztFQUNBLG9CQUNFSCwrREFBVyxDQUFDLFVBQUFDLEtBQUs7SUFBQSxPQUFJQSxLQUFLLENBQUNHLElBQVY7RUFBQSxDQUFOLENBRGI7RUFBQSxJQUFRQyxTQUFSLGlCQUFRQSxTQUFSO0VBQUEsSUFBbUJDLFlBQW5CLGlCQUFtQkEsWUFBbkI7RUFBQSxJQUFpQ0MsZ0JBQWpDLGlCQUFpQ0EsZ0JBQWpDO0VBQUEsSUFBbURDLFlBQW5ELGlCQUFtREEsWUFBbkQ7O0VBRUEsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtFQUVBQyx1REFBUyxDQUFDLFlBQU07SUFDZEYsUUFBUSxDQUFDO01BQ1BHLElBQUksRUFBRUMsbUVBQW9CQTtJQURuQixDQUFELENBQVI7SUFJQUosUUFBUSxDQUFDO01BQ1BHLElBQUksRUFBRUUsaUVBQWtCQTtJQURqQixDQUFELENBQVI7RUFHRCxDQVJRLEVBUU4sRUFSTSxDQUFUO0VBVUFILHVEQUFTLENBQUMsWUFBTTtJQUNkLFNBQVNJLFFBQVQsR0FBb0I7TUFDbEIsSUFDRUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQTFDLEdBQ0FGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBekIsR0FBd0MsR0FGMUMsRUFHRTtRQUNBLElBQUlmLFlBQVksSUFBSSxDQUFDQyxnQkFBckIsRUFBdUM7VUFDckMsSUFBTWUsTUFBTSxHQUFHakIsU0FBUyxDQUFDQSxTQUFTLENBQUNrQixNQUFWLEdBQW1CLENBQXBCLENBQVQsQ0FBZ0NDLEVBQS9DO1VBQ0FmLFFBQVEsQ0FBQztZQUNQRyxJQUFJLEVBQUVFLGlFQURDO1lBRVBRLE1BQU0sRUFBTkE7VUFGTyxDQUFELENBQVI7UUFJRDtNQUNGO0lBQ0Y7O0lBQ0ROLE1BQU0sQ0FBQ1MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NWLFFBQWxDO0lBQ0EsT0FBTyxZQUFNO01BQ1hDLE1BQU0sQ0FBQ1UsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNYLFFBQXJDO0lBQ0QsQ0FGRDtFQUdELENBbkJRLEVBbUJOLENBQUNULFlBQUQsRUFBZUMsZ0JBQWYsRUFBaUNGLFNBQWpDLENBbkJNLENBQVQ7RUFxQkFNLHVEQUFTLENBQUMsWUFBTTtJQUNkLElBQUlILFlBQUosRUFBa0I7TUFDaEJtQixLQUFLLENBQUNuQixZQUFELENBQUw7SUFDRDtFQUNGLENBSlEsRUFJTixDQUFDQSxZQUFELENBSk0sQ0FBVDtFQU1BLE9BQ0UsTUFBQyw2REFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0dMLEVBQUUsSUFBSSxNQUFDLDREQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFEVCxFQUVHRSxTQUFTLENBQUN1QixHQUFWLENBQWMsVUFBQXhCLElBQUk7SUFBQSxPQUNqQixNQUFDLDREQUFEO01BQVUsR0FBRyxFQUFFQSxJQUFJLENBQUNvQixFQUFwQjtNQUF3QixJQUFJLEVBQUVwQixJQUE5QjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBRGlCO0VBQUEsQ0FBbEIsQ0FGSCxDQURGO0FBUUQsQ0FuREQ7O0dBQU1MLEk7VUFDV0MsdUQsRUFFYkEsdUQsRUFDZVUsdUQ7OztLQUpiWCxJO0FBcUROQSxJQUFJLENBQUM4QixLQUFMLEdBQWEsTUFBYjtBQUVlOUIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZywgcmV0d2VldEVycm9yIH0gPVxuICAgIHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgICB9KTtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDBcbiAgICAgICkge1xuICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XG4gICAgICAgICAgY29uc3QgbGFzdElkID0gbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXS5pZDtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gICAgICAgICAgICBsYXN0SWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nLCBtYWluUG9zdHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXR3ZWV0RXJyb3IpIHtcbiAgICAgIGFsZXJ0KHJldHdlZXRFcnJvcik7XG4gICAgfVxuICB9LCBbcmV0d2VldEVycm9yXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwTGF5b3V0PlxuICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cbiAgICAgIHttYWluUG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgKSl9XG4gICAgPC9BcHBMYXlvdXQ+XG4gICk7XG59O1xuXG5Ib21lLnRpdGxlID0gJ0hvbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})