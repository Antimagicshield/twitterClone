webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == typeof value && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\nvar _marked = /*#__PURE__*/_regeneratorRuntime().mark(likePost),\n    _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(unlikePost),\n    _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(addPost),\n    _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(removePost),\n    _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(addComment),\n    _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(watchLikePost),\n    _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnlikePost),\n    _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadPosts),\n    _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddPost),\n    _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemovePost),\n    _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddComment),\n    _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(postSaga);\n\n\n\n\n\n\nfunction likePostAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('/posts');\n}\n\nfunction likePost() {\n  var result;\n  return _regeneratorRuntime().wrap(function likePost$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(likePostAPI);\n\n        case 3:\n          result = _context.sent;\n          _context.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"LIKE_POST_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context.next = 13;\n          break;\n\n        case 8:\n          _context.prev = 8;\n          _context.t0 = _context[\"catch\"](0);\n          console.error('error');\n          _context.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"LIKE_POST_FAILURE\"],\n            data: _context.t0.response.data\n          });\n\n        case 13:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 8]]);\n}\n\nfunction unlikePostAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('/posts');\n}\n\nfunction unlikePost() {\n  var result;\n  return _regeneratorRuntime().wrap(function unlikePost$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(unlikePostAPI);\n\n        case 3:\n          result = _context2.sent;\n          _context2.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"LIKE_POST_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context2.next = 13;\n          break;\n\n        case 8:\n          _context2.prev = 8;\n          _context2.t0 = _context2[\"catch\"](0);\n          console.error('error');\n          _context2.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"LIKE_POST_FAILURE\"],\n            data: _context2.t0.response.data\n          });\n\n        case 13:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, null, [[0, 8]]);\n}\n\nfunction addPostAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post('/post', {\n    content: data\n  });\n}\n\nfunction addPost(action) {\n  var result;\n  return _regeneratorRuntime().wrap(function addPost$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.prev = 0;\n          _context3.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(addPostAPI, action.data);\n\n        case 3:\n          result = _context3.sent;\n          _context3.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"ADD_POST_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context3.next = 8;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"ADD_POST_TO_ME\"],\n            data: result.data.id\n          });\n\n        case 8:\n          _context3.next = 15;\n          break;\n\n        case 10:\n          _context3.prev = 10;\n          _context3.t0 = _context3[\"catch\"](0);\n          console.log('error');\n          _context3.next = 15;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"ADD_POST_FAILURE\"],\n            data: _context3.t0.response.data\n          });\n\n        case 15:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3, null, [[0, 10]]);\n}\n\nfunction removePostAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post('/api/post', data);\n}\n\nfunction removePost(action) {\n  var id;\n  return _regeneratorRuntime().wrap(function removePost$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.prev = 0;\n          _context4.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n\n        case 3:\n          id = shortId.generate();\n          _context4.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"REMOVE_POST_SUCCESS\"],\n            data: action.data\n          });\n\n        case 6:\n          _context4.next = 8;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"REMOVE_POST_OF_ME\"],\n            data: action.data\n          });\n\n        case 8:\n          _context4.next = 14;\n          break;\n\n        case 10:\n          _context4.prev = 10;\n          _context4.t0 = _context4[\"catch\"](0);\n          _context4.next = 14;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"REMOVE_POST_FAILURE\"],\n            data: _context4.t0.response.data\n          });\n\n        case 14:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4, null, [[0, 10]]);\n}\n\nfunction addCommentAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/post/\".concat(data.postId, \"/comment\"), data);\n}\n\nfunction addComment(action) {\n  var result;\n  return _regeneratorRuntime().wrap(function addComment$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.prev = 0;\n          _context5.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(addCommentAPI, action.data);\n\n        case 3:\n          result = _context5.sent;\n          _context5.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"ADD_COMMENT_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context5.next = 13;\n          break;\n\n        case 8:\n          _context5.prev = 8;\n          _context5.t0 = _context5[\"catch\"](0);\n          console.error(_context5.t0);\n          _context5.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"ADD_COMMENT_FAILURE\"],\n            data: _context5.t0.response.data\n          });\n\n        case 13:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5, null, [[0, 8]]);\n}\n\nfunction watchLikePost() {\n  return _regeneratorRuntime().wrap(function watchLikePost$(_context6) {\n    while (1) {\n      switch (_context6.prev = _context6.next) {\n        case 0:\n          _context6.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_POSTS_REQUEST\"], likePost);\n\n        case 2:\n        case \"end\":\n          return _context6.stop();\n      }\n    }\n  }, _marked6);\n}\n\nfunction watchUnlikePost() {\n  return _regeneratorRuntime().wrap(function watchUnlikePost$(_context7) {\n    while (1) {\n      switch (_context7.prev = _context7.next) {\n        case 0:\n          _context7.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_POSTS_REQUEST\"], unlikePost);\n\n        case 2:\n        case \"end\":\n          return _context7.stop();\n      }\n    }\n  }, _marked7);\n}\n\nfunction watchLoadPosts() {\n  return _regeneratorRuntime().wrap(function watchLoadPosts$(_context8) {\n    while (1) {\n      switch (_context8.prev = _context8.next) {\n        case 0:\n          _context8.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"throttle\"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_POSTS_REQUEST\"], loadPosts);\n\n        case 2:\n        case \"end\":\n          return _context8.stop();\n      }\n    }\n  }, _marked8);\n}\n\nfunction watchAddPost() {\n  return _regeneratorRuntime().wrap(function watchAddPost$(_context9) {\n    while (1) {\n      switch (_context9.prev = _context9.next) {\n        case 0:\n          _context9.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"ADD_POST_REQUEST\"], addPost);\n\n        case 2:\n        case \"end\":\n          return _context9.stop();\n      }\n    }\n  }, _marked9);\n}\n\nfunction watchRemovePost() {\n  return _regeneratorRuntime().wrap(function watchRemovePost$(_context10) {\n    while (1) {\n      switch (_context10.prev = _context10.next) {\n        case 0:\n          _context10.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"REMOVE_POST_REQUEST\"], removePost);\n\n        case 2:\n        case \"end\":\n          return _context10.stop();\n      }\n    }\n  }, _marked10);\n}\n\nfunction watchAddComment() {\n  return _regeneratorRuntime().wrap(function watchAddComment$(_context11) {\n    while (1) {\n      switch (_context11.prev = _context11.next) {\n        case 0:\n          _context11.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"ADD_COMMENT_REQUEST\"], addComment);\n\n        case 2:\n        case \"end\":\n          return _context11.stop();\n      }\n    }\n  }, _marked11);\n}\n\nfunction postSaga() {\n  return _regeneratorRuntime().wrap(function postSaga$(_context12) {\n    while (1) {\n      switch (_context12.prev = _context12.next) {\n        case 0:\n          _context12.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchAddComment)]);\n\n        case 2:\n        case \"end\":\n          return _context12.stop();\n      }\n    }\n  }, _marked12);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcz8zYWJhIl0sIm5hbWVzIjpbImxpa2VQb3N0IiwidW5saWtlUG9zdCIsImFkZFBvc3QiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVubGlrZVBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoQWRkUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsInBvc3RTYWdhIiwibGlrZVBvc3RBUEkiLCJheGlvcyIsImdldCIsImNhbGwiLCJyZXN1bHQiLCJwdXQiLCJ0eXBlIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJyZXNwb25zZSIsInVubGlrZVBvc3RBUEkiLCJhZGRQb3N0QVBJIiwicG9zdCIsImNvbnRlbnQiLCJhY3Rpb24iLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJpZCIsImxvZyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwiZGVsYXkiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsInRocm90dGxlIiwibG9hZFBvc3RzIiwiQUREX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OytDQUNBLG9KOztzREErQlVBLFE7dURBb0JBQyxVO3VEQW9CQUMsTzt1REF3QkFDLFU7dURBd0JBQyxVO3VEQWdCQUMsYTt1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QUFBO0FBQUE7O0FBSWUsU0FBVU8sUUFBVjtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFDYixPQUFNMEMsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDakQsYUFBRCxDQURJLEVBRVJpRCwrREFBSSxDQUFDaEQsZUFBRCxDQUZJLEVBR1JnRCwrREFBSSxDQUFDN0MsZUFBRCxDQUhJLEVBSVI2QywrREFBSSxDQUFDL0MsY0FBRCxDQUpJLEVBS1IrQywrREFBSSxDQUFDOUMsWUFBRCxDQUxJLEVBTVI4QywrREFBSSxDQUFDNUMsZUFBRCxDQU5JLENBQUQsQ0FBVDs7UUFEYTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQSIsImZpbGUiOiIuL3NhZ2FzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbGwsXG4gIGZvcmssXG4gIHB1dCxcbiAgdGFrZUxhdGVzdCxcbiAgZGVsYXksXG4gIHRocm90dGxlLFxuICBjYWxsLFxufSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgQUREX1BPU1RfRkFJTFVSRSxcbiAgQUREX1BPU1RfUkVRVUVTVCxcbiAgQUREX1BPU1RfU1VDQ0VTUyxcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoKSB7XG4gIHJldHVybiBheGlvcy5nZXQoJy9wb3N0cycpO1xufVxuXG5mdW5jdGlvbiogbGlrZVBvc3QoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yJyk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSSgpIHtcbiAgcmV0dXJuIGF4aW9zLmdldCgnL3Bvc3RzJyk7XG59XG5cbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yJyk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIHsgY29udGVudDogZGF0YSB9KTtcbn1cblxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcbiAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgIH0pO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RTX1JFUVVFU1QsIGxpa2VQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RTX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXG4gICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxuICBdKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/post.js\n");

/***/ })

})