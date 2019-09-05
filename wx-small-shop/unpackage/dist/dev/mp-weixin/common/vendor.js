(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 0:
/*!***********************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, createApp) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));
var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils/utils */ 11));
var _router = _interopRequireDefault(__webpack_require__(/*! ./utils/router */ 12));
var urlPath = _interopRequireWildcard(__webpack_require__(/*! ./utils/urlPath */ 13));

__webpack_require__(/*! ./static/iconfont.css */ 14);
__webpack_require__(/*! ./static/reset.css */ 15);

var _RouteParams = _interopRequireDefault(__webpack_require__(/*! @/mixin/RouteParams */ 16));
var _UserInfo = _interopRequireDefault(__webpack_require__(/*! @/data/UserInfo */ 17));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var uniLoadMore = function uniLoadMore() {return __webpack_require__.e(/*! import() | componets/uni/uni-load-more */ "componets/uni/uni-load-more").then(__webpack_require__.bind(null, /*! @/componets/uni/uni-load-more.vue */ 344));};

_vue.default.component('LoadMore', uniLoadMore);
_vue.default.mixin(_RouteParams.default);
_vue.default.config.productionTip = false;
_vue.default.prototype.$utils = _utils.default;
_vue.default.prototype.$mRouter = _router.default;
_vue.default.prototype.$urlPath = urlPath;
_vue.default.prototype.$userInfo = _UserInfo.default;
_vue.default.prototype.$ids = {
  identity: uni.getStorageSync('identity') || 2,
  storeId: uni.getStorageSync('storeId') || 2 };

_vue.default.prototype.$http = function (url) {var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var loadingTip = arguments.length > 2 ? arguments[2] : undefined;var onRequestSuccess = arguments.length > 3 ? arguments[3] : undefined;var onRequestFail = arguments.length > 4 ? arguments[4] : undefined;var onRequestComplete = arguments.length > 5 ? arguments[5] : undefined;
  if (loadingTip !== null) {
    uni.showLoading({
      title: loadingTip || '正在加载…' });

  }
  if (_UserInfo.default.isLogin()) {
    params.token = _UserInfo.default.getToken();
  }
  uni.request({
    header: {
      'content-type': 'application/x-www-form-urlencoded' },

    url: urlPath.baseUrl + url,
    data: params,
    method: 'POST',
    success: function success(res) {
      if (res && res.statusCode === 200) {
        if (res.data.code === 1) {
          onRequestSuccess(res.data);
        } else {
          onRequestFail(0, res.data.msg);
        }
      } else {
        onRequestFail(500, '请求失败');
      }
    },
    fail: function fail() {
      onRequestFail();
    },
    complete: function complete() {
      if (onRequestComplete) {
        onRequestComplete();
      }
      if (loadingTip !== null) {
        uni.hideLoading();
      }
    } });

};
_vue.default.prototype.$toast = function (msg) {
  if (msg) {
    this.$nextTick(function () {
      uni.showToast({
        icon: "none",
        title: msg,
        duration: 2000 });

    });
  }
};
_vue.default.prototype.$push = function (url) {
  if (url) {
    if (_router.default.auth(url)) {
      auth();
    } else {
      uni.navigateTo({
        url: url });

    }
  } else {
    uni.reLaunch({
      url: '/pages/index/index.vue' });

  }
};

_vue.default.prototype.$replace = function (url) {
  if (url) {
    if (_router.default.auth(url)) {
      auth();
    } else {
      uni.redirectTo({
        url: url });

    }
  } else {
    uni.reLaunch({
      url: '/pages/index/index.vue' });

  }
};

function auth() {
}

_vue.default.prototype.$back = function (delta) {
  if (delta) {
    uni.navigateBack({
      delta: delta });

  } else {
    uni.navigateBack();
  }
};

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [];
var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 104:
/*!****************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fcomment%2FCommentList"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _CommentList = _interopRequireDefault(__webpack_require__(/*! ./pages/comment/CommentList.vue */ 105));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_CommentList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 11:
/*!******************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/utils/utils.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _common;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var weekMap = {
  '1': '一',
  '2': '二',
  '3': '三',
  '4': '四',
  '5': '五',
  '6': '六',
  '0': '日' };var _default =

{
  dateAdd: function dateAdd(startDate) {var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    startDate = new Date(startDate);
    startDate = +startDate + 1000 * 60 * 60 * 24 * num;
    startDate = new Date(startDate);
    return { date: startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate(), week: startDate.getDay() };
  },
  getWeekByWeek: function getWeekByWeek(week) {
    return weekMap[week];
  },
  image: {
    getImagePath: function getImagePath(image) {
      if (!image) {
        return '';
      }
      if (image.indexOf('http://') === 0 || image.indexOf('https://') === 0) {
        return image;
      }
      return 'https://www.liuyiqinzi.com' + image;
    } },

  validator: {
    phoneReg: /^1(3|4|5|7|8)\d{9}$/,
    passwordReg: /^(\w){6,16}$/,
    emailReg: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
    regIdCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    isPhone: function isPhone(phone) {
      return this.phoneReg.test(phone);
    },
    isPassword: function isPassword(s) {
      return this.passwordReg.test(s);
    },
    isEmail: function isEmail(s) {
      return this.emailReg.test(s);
    },
    checkIdCard: function checkIdCard(idcard) {
      if (!this.regIdCard.test(idcard)) {
        return false;
      } else {
        return true;
      }
    } },

  common: (_common = {
    hiddenMobile: function hiddenMobile(mobile) {
      var newMobile = mobile;
      if (mobile.length > 7) {
        newMobile = mobile.substr(0, 3) + '****' + mobile.substr(7);
      }
      return newMobile;
    },
    trasformNum: function trasformNum(num) {
      if (!num || isNaN(num) || Number(num) === 0) {
        return 0;
      }
      var intNum = Number(num);
      if (intNum / 10000 >= 1) {
        return Math.floor(intNum / 10000) + '万+';
      } else {
        return intNum;
      }
    },
    delHtmlTag: function delHtmlTag(str) {
      if (str) {
        return str.replace(/<[^>]+>/g, '');
      }
      return '';
    } }, _defineProperty(_common, "trasformNum", function trasformNum(
  num) {
    if (!num || isNaN(num) || Number(num) === 0) {
      return 0;
    }
    var intNum = Number(num);
    if (intNum / 10000 >= 1) {
      return Math.floor(intNum / 10000) + '万+';
    } else if (intNum / 1000 >= 1) {
      return Math.floor(intNum / 1000) + '000+';
    } else if (intNum / 100 >= 1) {
      return Math.floor(intNum / 100) + '00+';
    } else if (intNum / 10 >= 1) {
      return Math.floor(intNum / 10) + '0+';
    } else {
      return intNum;
    }
  }), _defineProperty(_common, "splitNum", function splitNum(
  num) {
    if (num) {
      var length = num.length;
      switch (length) {
        case 7:
          return num.slice(0, 4) + '  ' + num.slice(4, 7);
        case 8:
          return num.slice(0, 4) + '  ' + num.slice(4, 8);
        case 9:
          return num.slice(0, 5) + '  ' + num.slice(5, 9);
        case 10:
          return num.slice(0, 5) + '  ' + num.slice(5, 10);
        default:
          return num;}

    } else {
      return '';
    }
  }), _common) };exports.default = _default;

/***/ }),

/***/ 110:
/*!********************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/mixin/Reports.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      selectedItem: null };

  },
  computed: {
    pickerValueArray: function pickerValueArray() {
      var reports = getApp().globalData.reports;
      if (reports && reports.constructor === Array) {
        var array = [];
        reports.forEach(function (item) {
          array.push({
            label: item.name,
            value: item.id });

        });
        return array;
      } else {
        return null;
      }
    } },

  methods: {
    doReport: function doReport(type, ids, cause) {var _this = this;
      this.$http(this.$urlPath.doReport, {
        type: type,
        ids: ids,
        cause: cause },
      '', function (data) {
        _this.$toast('举报成功');
      }, function (errorCode, error) {
        _this.$toast(error);
      });
    } } };exports.default = _default;

/***/ }),

/***/ 113:
/*!****************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fscenic%2FScenicDetail"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ScenicDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/scenic/ScenicDetail.vue */ 114));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_ScenicDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 12:
/*!*******************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/utils/router.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function filter(str) {// 特殊字符转义
  str += ''; // 隐式转换
  str = str.replace(/%/g, '%25');
  str = str.replace(/\+/g, '%2B');
  str = str.replace(/ /g, '%20');
  str = str.replace(/\//g, '%2F');
  str = str.replace(/\?/g, '%3F');
  str = str.replace(/&/g, '%26');
  str = str.replace(/\=/g, '%3D');
  str = str.replace(/#/g, '%23');
  return str;
}

function formateObjToParamStr(paramObj) {
  var sdata = [];
  for (var attr in paramObj) {
    sdata.push("".concat(attr, "=").concat(filter(paramObj[attr])));
  }
  return sdata.join('&');
}var _default =
{
  auth: function auth(url) {
    return url.indexOf('auth') !== -1;
  },
  login: function login(backPage) {
    if (backPage) {
      getApp().globalData.backPage = backPage;
    } else {
      getApp().globalData.backPage = null;
    }
    uni.navigateTo({
      url: '/pages/login/Login' });

  },
  splash: function splash(param) {
    return '/pages/index/Splash?' + formateObjToParamStr(param);
  },
  homeCustomService: '/pages/custom/CustomService',
  scenicList: function scenicList(params) {
    if (params) {
      return '/pages/scenic/ScenicList?' + formateObjToParamStr(params);
    }
    return '/pages/scenic/ScenicList';
  },
  scenicDetail: function scenicDetail(params) {
    if (params) {
      return '/pages/scenic/ScenicDetail?' + formateObjToParamStr(params);
    }
    return '/pages/scenic/ScenicDetail';
  },
  ticketDetail: function ticketDetail(params) {
    if (params) {
      return '/pages/scenic/TicketDetail?' + formateObjToParamStr(params);
    } else {
      return '/pages/scenic/TicketDetail';
    }
  },
  scenicInfo: function scenicInfo(params) {
    if (params) {
      console.log(params);
      return '/pages/scenic/ScenicInfo?' + formateObjToParamStr(params);
    }
    return '/pages/scenic/ScenicInfo';
  },
  orderInfo: function orderInfo(params) {
    if (params) {
      return '/pages/order/OrderInfo?' + formateObjToParamStr(params);
    }
    return '/pages/order/OrderInfo';
  },
  askQustion: function askQustion(params) {
    if (params) {
      return '/pages/ask/AskMessage?' + formateObjToParamStr(params);
    } else {
      return '/pages/ask/AskMessage';
    }
  },
  replyMessage: function replyMessage(params) {
    if (params) {
      return '/pages/ask/ReplyMessage?' + formateObjToParamStr(params);
    } else {
      return '/pages/ask/ReplyMessage';
    }
  },
  reseveDetail: function reseveDetail(params) {
    if (params) {
      return '/pages/reseve/ReseveDetail?' + formateObjToParamStr(params);
    } else {
      return '/pages/reseve/ReseveDetail';
    }
  },
  orderInfoPay: function orderInfoPay(params) {
    return '/pages/order/OrderInfoPay?' + formateObjToParamStr(params);
  },
  orderRefund: function orderRefund(params) {
    return '/pages/order/OrderInfoBackMoney?' + formateObjToParamStr(params);
  },
  orderComment: function orderComment(params) {
    return '/pages/comment/OrderComment?' + formateObjToParamStr(params);
  },
  activityDetail: function activityDetail(params) {
    return '/pages/scenic/ActivityTicketDetail?' + formateObjToParamStr(params);
  },
  invitedDetail: function invitedDetail(params) {
    return '/pages/scenic/InvitedTicketDetail?' + formateObjToParamStr(params);
  },
  shareActivityImage: function shareActivityImage(pareams) {
    return '/pages/activity/ShareActivityImage?' + formateObjToParamStr(pareams);
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 121:
/*!****************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fscenic%2FTicketDetail"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _TicketDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/scenic/TicketDetail.vue */ 122));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_TicketDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 129:
/*!****************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Freseve%2FReseveDetail"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ReseveDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/reseve/ReseveDetail.vue */ 130));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_ReseveDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 13:
/*!********************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/utils/urlPath.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.shareActivityUrl = shareActivityUrl;exports.getActivityRuleDetails = exports.getWxQrCode = exports.getShareInfo = exports.assistList = exports.assistLogin = exports.assistJoin = exports.assistInvite = exports.promotionDetailUrl = exports.assistDetail = exports.doReport = exports.reportUrl = exports.categoryIndex = exports.runSeacher = exports.hotSearch = exports.registerProtocol = exports.customService = exports.messageDetails = exports.messageList = exports.orderPay = exports.orderPayUrl = exports.orderAfterSalesLog = exports.orderCancelRefund = exports.orderRefundAfterDetail = exports.orderRefundList = exports.orderRefund = exports.orderRefundDetail = exports.orderDelete = exports.orderCancel = exports.orderDetails = exports.orderList = exports.orderStatusNum = exports.orderCreate = exports.orderReserve = exports.myAskUrl = exports.myAnswerUrl = exports.askAnserGetScenicUrl = exports.askAnswerLikeUrl = exports.askAnswerListUrl = exports.askAnswerUrl = exports.askAddUrl = exports.askListUrl = exports.addCommentUrl = exports.commentListUrl = exports.scenicNotesUrl = exports.goodsDetailUrl = exports.scenicDetailUrl = exports.noticeDetails = exports.indexUrl = exports.deleteLinkManUrl = exports.editLinkManUrl = exports.addLinkManUrl = exports.linkManUrl = exports.userUnFavoroteGoodsUrl = exports.userFavoriteGoodsUrl = exports.userUnFavoroteScenicUrl = exports.userFavoriteScenicUrl = exports.getOpenId = exports.wxLogin = exports.userInfo = exports.userInfoResetInfo = exports.userInfoResetPWUrl = exports.userInfoForgetPWUrl = exports.userInfoModileLoginUrl = exports.userInfoGetSMSCodeUrl = exports.userInfoRegisterUrl = exports.userInfoLoginUrl = exports.imageActionUrl = exports.imageUrl = exports.baseUrl = void 0;
// const baseIP = 'http://192.168.1.100'

// const baseIP = 'https://www.yixinglvxing.com'

var baseIP = 'https://www.liuyiqinzi.com';

var baseUrl = baseIP + '/store_api/v1/';exports.baseUrl = baseUrl;

var imageUrl = baseIP;exports.imageUrl = imageUrl;

var commonModuleUrl = 'common/';

var imageActionUrl = imageUrl + '/store_api/' + commonModuleUrl + 'upload';exports.imageActionUrl = imageActionUrl;

var userInfoUrl = 'user/';

var userInfoLoginUrl = userInfoUrl + 'login';exports.userInfoLoginUrl = userInfoLoginUrl;

var userInfoRegisterUrl = userInfoUrl + 'register';exports.userInfoRegisterUrl = userInfoRegisterUrl;

var userInfoGetSMSCodeUrl = userInfoUrl + 'get_captcha';exports.userInfoGetSMSCodeUrl = userInfoGetSMSCodeUrl;

var userInfoModileLoginUrl = userInfoUrl + 'mobile_login';exports.userInfoModileLoginUrl = userInfoModileLoginUrl;

var userInfoForgetPWUrl = userInfoUrl + 'resetpwd';exports.userInfoForgetPWUrl = userInfoForgetPWUrl;

var userInfoResetPWUrl = userInfoUrl + 'eidtpwd';exports.userInfoResetPWUrl = userInfoResetPWUrl;

var userInfoResetInfo = userInfoUrl + 'profile';exports.userInfoResetInfo = userInfoResetInfo;

var userInfo = userInfoUrl + 'user_info';exports.userInfo = userInfo;

var wxLogin = userInfoUrl + 'miniapp_login';exports.wxLogin = wxLogin;

var getOpenId = userInfoUrl + 'get_openid';exports.getOpenId = getOpenId;

var favoritesUrl = 'favorites/';

var userFavoriteScenicUrl = favoritesUrl + 'favorite_scenic';exports.userFavoriteScenicUrl = userFavoriteScenicUrl;

var userUnFavoroteScenicUrl = favoritesUrl + 'unfavorite_scenic';exports.userUnFavoroteScenicUrl = userUnFavoroteScenicUrl;

var userFavoriteGoodsUrl = favoritesUrl + 'favorite_goods';exports.userFavoriteGoodsUrl = userFavoriteGoodsUrl;

var userUnFavoroteGoodsUrl = favoritesUrl + 'unfavorite_goods';exports.userUnFavoroteGoodsUrl = userUnFavoroteGoodsUrl;

var personInfoUrl = 'personal/';

var linkManUrl = personInfoUrl + 'linkman';exports.linkManUrl = linkManUrl;

var addLinkManUrl = personInfoUrl + 'add_linkman';exports.addLinkManUrl = addLinkManUrl;

var editLinkManUrl = personInfoUrl + 'edit_linkman';exports.editLinkManUrl = editLinkManUrl;

var deleteLinkManUrl = personInfoUrl + 'del_linkman';exports.deleteLinkManUrl = deleteLinkManUrl;

var indexModuleUrl = 'index/';

var indexUrl = indexModuleUrl + 'index';exports.indexUrl = indexUrl;

var noticeDetails = indexModuleUrl + 'notice_details';exports.noticeDetails = noticeDetails;

var scenicDetailModuleUrl = 'details/';

var scenicDetailUrl = scenicDetailModuleUrl + 'scenic_details';exports.scenicDetailUrl = scenicDetailUrl;

var goodsDetailUrl = scenicDetailModuleUrl + 'goods_detail';exports.goodsDetailUrl = goodsDetailUrl;

var scenicNotesUrl = scenicDetailModuleUrl + 'scenic_notes';exports.scenicNotesUrl = scenicNotesUrl;

var commentModuleUrl = 'comment/';

var commentListUrl = commentModuleUrl + 'comment_list';exports.commentListUrl = commentListUrl;

var addCommentUrl = commentModuleUrl + 'add_comment';exports.addCommentUrl = addCommentUrl;

var askModuleUrl = 'ask/';

var askListUrl = askModuleUrl + 'ask_list';exports.askListUrl = askListUrl;

var askAddUrl = askModuleUrl + 'add_ask';exports.askAddUrl = askAddUrl;

var askAnswerUrl = askModuleUrl + 'answer';exports.askAnswerUrl = askAnswerUrl;

var askAnswerListUrl = askModuleUrl + 'answer_list';exports.askAnswerListUrl = askAnswerListUrl;

var askAnswerLikeUrl = askModuleUrl + 'answer_like';exports.askAnswerLikeUrl = askAnswerLikeUrl;

var askAnserGetScenicUrl = askModuleUrl + 'get_scenic';exports.askAnserGetScenicUrl = askAnserGetScenicUrl;

var myAnswerUrl = askModuleUrl + 'my_answer';exports.myAnswerUrl = myAnswerUrl;

var myAskUrl = askModuleUrl + 'my_ask_list';exports.myAskUrl = myAskUrl;

var orderModuleUrl = 'order/';

var orderReserve = orderModuleUrl + 'reserve';exports.orderReserve = orderReserve;

var orderCreate = orderModuleUrl + 'create';exports.orderCreate = orderCreate;

var orderStatusNum = orderModuleUrl + 'order_status_num';exports.orderStatusNum = orderStatusNum;

var orderList = orderModuleUrl + 'order_list';exports.orderList = orderList;

var orderDetails = orderModuleUrl + 'details';exports.orderDetails = orderDetails;

var orderCancel = orderModuleUrl + 'cancel';exports.orderCancel = orderCancel;

var orderDelete = orderModuleUrl + 'del';exports.orderDelete = orderDelete;

var orderRefundDetail = orderModuleUrl + 'refund_details';exports.orderRefundDetail = orderRefundDetail;

var orderRefund = orderModuleUrl + 'refund';exports.orderRefund = orderRefund;

var orderRefundList = orderModuleUrl + 'afer_sales_list';exports.orderRefundList = orderRefundList;

var orderRefundAfterDetail = orderModuleUrl + 'afer_sales_details';exports.orderRefundAfterDetail = orderRefundAfterDetail;

var orderCancelRefund = orderModuleUrl + 'cancel_refund';exports.orderCancelRefund = orderCancelRefund;

var orderAfterSalesLog = orderModuleUrl + 'after_sales_log';exports.orderAfterSalesLog = orderAfterSalesLog;

var payModuleUrl = 'payment/';

var orderPayUrl = payModuleUrl + 'run_pay';exports.orderPayUrl = orderPayUrl;

var orderPay = payModuleUrl + 'do_pay';exports.orderPay = orderPay;

var messageModuleUrl = 'sys/';

var messageList = messageModuleUrl + 'message_list';exports.messageList = messageList;

var messageDetails = messageModuleUrl + 'message_details';exports.messageDetails = messageDetails;

var customService = messageModuleUrl + 'customservice';exports.customService = customService;

var registerProtocol = messageModuleUrl + 'protocol';exports.registerProtocol = registerProtocol;

var searchModuleUrl = 'search/';

var hotSearch = searchModuleUrl + 'hot_search';exports.hotSearch = hotSearch;

var runSeacher = searchModuleUrl + 'run_seacher';exports.runSeacher = runSeacher;

var categoryModuleUrl = 'category/';

var categoryIndex = categoryModuleUrl + 'index';exports.categoryIndex = categoryIndex;

var reportModuleUrl = 'report/';

var reportUrl = reportModuleUrl + 'reports';exports.reportUrl = reportUrl;

var doReport = reportModuleUrl + 'add';exports.doReport = doReport;

var assistModuleUrl = 'marketing/';

var assistDetail = assistModuleUrl + 'assist_detail';exports.assistDetail = assistDetail;

var promotionDetailUrl = assistModuleUrl + 'promotion_detail';exports.promotionDetailUrl = promotionDetailUrl;

var assistInvite = assistModuleUrl + 'assist_invite';exports.assistInvite = assistInvite;

var assistJoin = assistModuleUrl + 'assist_join';exports.assistJoin = assistJoin;

var assistLogin = userInfoUrl + 'assist_login';exports.assistLogin = assistLogin;

var assistList = assistModuleUrl + 'assist';exports.assistList = assistList;

var getShareInfo = assistModuleUrl + 'share';exports.getShareInfo = getShareInfo;

var getWxQrCode = assistModuleUrl + 'wx_qr_code';exports.getWxQrCode = getWxQrCode;

var getActivityRuleDetails = assistModuleUrl + 'assist_details';exports.getActivityRuleDetails = getActivityRuleDetails;

function shareActivityUrl(aid, uid, i, s) {
  return 'http://www.store.liuyiqinzi.com/helpfriend' + '?aid=' + aid + '&uid=' + uid + '&i=' + i + '&s=' + s;
  // return 'http://192.168.0.111:8080/helpfriend' + '?aid=' + aid + '&uid=' + uid + '&i=' + i + '&s=' + s
}

/***/ }),

/***/ 137:
/*!**************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fscenic%2FScenicInfo"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ScenicInfo = _interopRequireDefault(__webpack_require__(/*! ./pages/scenic/ScenicInfo.vue */ 138));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_ScenicInfo.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 14:
/*!***********************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/static/iconfont.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 145:
/*!************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Forder%2FOrderList"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _OrderList = _interopRequireDefault(__webpack_require__(/*! ./pages/order/OrderList.vue */ 146));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_OrderList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 15:
/*!********************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/static/reset.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 153:
/*!*********************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Forder%2FOrderInfoBackMoney"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _OrderInfoBackMoney = _interopRequireDefault(__webpack_require__(/*! ./pages/order/OrderInfoBackMoney.vue */ 154));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_OrderInfoBackMoney.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 16:
/*!************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/mixin/RouteParams.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      $routeParams: null };

  },
  onLoad: function onLoad(params) {
    this.$routeParams = params;
  } };exports.default = _default;

/***/ }),

/***/ 161:
/*!********************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Forder%2FOrderBackProgress"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _OrderBackProgress = _interopRequireDefault(__webpack_require__(/*! ./pages/order/OrderBackProgress.vue */ 162));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_OrderBackProgress.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 169:
/*!************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Forder%2FOrderInfo"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _OrderInfo = _interopRequireDefault(__webpack_require__(/*! ./pages/order/OrderInfo.vue */ 170));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_OrderInfo.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 17:
/*!********************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/data/UserInfo.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var userInfo = uni.getStorageSync('userInfo');
if (!userInfo) {
  userInfo = {
    id: null,
    realname: null,
    email: null,
    mobile: null,
    qq: null,
    gender: null,
    avatar: null,
    username: null,
    phone: null,
    provice: null,
    town: null,
    city: null,
    openid: null };

}
var token = uni.getStorageSync('token');var _default =
{
  state: userInfo,
  saveUserInfo: function saveUserInfo(data) {
    uni.setStorageSync('userInfo', data);
    if (data.token) {
      uni.setStorageSync('token', data.token);
      token = data.token;
    }
    userInfo = data;
    this.state = userInfo;
    this.state.id = userInfo.id;
  },
  isLogin: function isLogin() {
    return this.state.id;
  },
  getToken: function getToken() {
    return token;
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 175:
/*!*****************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fcomment%2FOrderComment"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _OrderComment = _interopRequireDefault(__webpack_require__(/*! ./pages/comment/OrderComment.vue */ 176));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_OrderComment.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 18:
/*!*********************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Findex%2FSplash"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _Splash = _interopRequireDefault(__webpack_require__(/*! ./pages/index/Splash.vue */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_Splash.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 183:
/*!********************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fad%2FAdDetail"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _AdDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/ad/AdDetail.vue */ 184));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_AdDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 191:
/*!****************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fnotice%2FNoticeDetail"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _NoticeDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/notice/NoticeDetail.vue */ 192));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_NoticeDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 199:
/*!***********************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fask%2FAskMessage"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _AskMessage = _interopRequireDefault(__webpack_require__(/*! ./pages/ask/AskMessage.vue */ 200));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_AskMessage.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope) {
        return this.$scope[method](args)
      }
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 207:
/*!**********************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fsearch%2FSearch"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _Search = _interopRequireDefault(__webpack_require__(/*! ./pages/search/Search.vue */ 208));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_Search.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 215:
/*!**************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fmine%2FPersonalInfo"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _PersonalInfo = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/PersonalInfo.vue */ 216));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_PersonalInfo.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 221:
/*!*********************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/componets/uni/city/city-data/city.data.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = [{ "value": 110000, "label": "北京市", "children": [{ "value": 110101, "label": "东城区" }, { "value": 110102, "label": "西城区" }, { "value": 110105, "label": "朝阳区" }, { "value": 110106, "label": "丰台区" }, { "value": 110107, "label": "石景山区" }, { "value": 110108, "label": "海淀区" }, { "value": 110109, "label": "门头沟区" }, { "value": 110111, "label": "房山区" }, { "value": 110112, "label": "通州区" }, { "value": 110113, "label": "顺义区" }, { "value": 110114, "label": "昌平区" }, { "value": 110115, "label": "大兴区" }, { "value": 110116, "label": "怀柔区" }, { "value": 110117, "label": "平谷区" }, { "value": 110118, "label": "密云区" }, { "value": 110119, "label": "延庆区" }] }, { "value": 120000, "label": "天津市", "children": [{ "value": 120101, "label": "和平区" }, { "value": 120102, "label": "河东区" }, { "value": 120103, "label": "河西区" }, { "value": 120104, "label": "南开区" }, { "value": 120105, "label": "河北区" }, { "value": 120106, "label": "红桥区" }, { "value": 120110, "label": "东丽区" }, { "value": 120111, "label": "西青区" }, { "value": 120112, "label": "津南区" }, { "value": 120113, "label": "北辰区" }, { "value": 120114, "label": "武清区" }, { "value": 120115, "label": "宝坻区" }, { "value": 120116, "label": "滨海新区" }, { "value": 120117, "label": "宁河区" }, { "value": 120118, "label": "静海区" }, { "value": 120119, "label": "蓟州区" }] }, { "value": 130000, "label": "河北省", "children": [{ "value": 130100, "label": "石家庄市" }, { "value": 130200, "label": "唐山市" }, { "value": 130300, "label": "秦皇岛市" }, { "value": 130400, "label": "邯郸市" }, { "value": 130500, "label": "邢台市" }, { "value": 130600, "label": "保定市" }, { "value": 130700, "label": "张家口市" }, { "value": 130800, "label": "承德市" }, { "value": 130900, "label": "沧州市" }, { "value": 131000, "label": "廊坊市" }, { "value": 131100, "label": "衡水市" }, { "value": 139000, "label": "省直辖县级行政区划" }] }, { "value": 140000, "label": "山西省", "children": [{ "value": 140100, "label": "太原市" }, { "value": 140200, "label": "大同市" }, { "value": 140300, "label": "阳泉市" }, { "value": 140400, "label": "长治市" }, { "value": 140500, "label": "晋城市" }, { "value": 140600, "label": "朔州市" }, { "value": 140700, "label": "晋中市" }, { "value": 140800, "label": "运城市" }, { "value": 140900, "label": "忻州市" }, { "value": 141000, "label": "临汾市" }, { "value": 141100, "label": "吕梁市" }] }, { "value": 150000, "label": "内蒙古自治区", "children": [{ "value": 150100, "label": "呼和浩特市" }, { "value": 150200, "label": "包头市" }, { "value": 150300, "label": "乌海市" }, { "value": 150400, "label": "赤峰市" }, { "value": 150500, "label": "通辽市" }, { "value": 150600, "label": "鄂尔多斯市" }, { "value": 150700, "label": "呼伦贝尔市" }, { "value": 150800, "label": "巴彦淖尔市" }, { "value": 150900, "label": "乌兰察布市" }, { "value": 152200, "label": "兴安盟" }, { "value": 152500, "label": "锡林郭勒盟" }, { "value": 152900, "label": "阿拉善盟" }] }, { "value": 210000, "label": "辽宁省", "children": [{ "value": 210100, "label": "沈阳市" }, { "value": 210200, "label": "大连市" }, { "value": 210300, "label": "鞍山市" }, { "value": 210400, "label": "抚顺市" }, { "value": 210500, "label": "本溪市" }, { "value": 210600, "label": "丹东市" }, { "value": 210700, "label": "锦州市" }, { "value": 210800, "label": "营口市" }, { "value": 210900, "label": "阜新市" }, { "value": 211000, "label": "辽阳市" }, { "value": 211100, "label": "盘锦市" }, { "value": 211200, "label": "铁岭市" }, { "value": 211300, "label": "朝阳市" }, { "value": 211400, "label": "葫芦岛市" }] }, { "value": 220000, "label": "吉林省", "children": [{ "value": 220100, "label": "长春市" }, { "value": 220200, "label": "吉林市" }, { "value": 220300, "label": "四平市" }, { "value": 220400, "label": "辽源市" }, { "value": 220500, "label": "通化市" }, { "value": 220600, "label": "白山市" }, { "value": 220700, "label": "松原市" }, { "value": 220800, "label": "白城市" }, { "value": 222400, "label": "延边朝鲜族自治州" }] }, { "value": 230000, "label": "黑龙江省", "children": [{ "value": 230100, "label": "哈尔滨市" }, { "value": 230200, "label": "齐齐哈尔市" }, { "value": 230300, "label": "鸡西市" }, { "value": 230400, "label": "鹤岗市" }, { "value": 230500, "label": "双鸭山市" }, { "value": 230600, "label": "大庆市" }, { "value": 230700, "label": "伊春市" }, { "value": 230800, "label": "佳木斯市" }, { "value": 230900, "label": "七台河市" }, { "value": 231000, "label": "牡丹江市" }, { "value": 231100, "label": "黑河市" }, { "value": 231200, "label": "绥化市" }, { "value": 232700, "label": "大兴安岭地区" }] }, { "value": 310000, "label": "上海市", "children": [{ "value": 310101, "label": "黄浦区" }, { "value": 310104, "label": "徐汇区" }, { "value": 310105, "label": "长宁区" }, { "value": 310106, "label": "静安区" }, { "value": 310107, "label": "普陀区" }, { "value": 310109, "label": "虹口区" }, { "value": 310110, "label": "杨浦区" }, { "value": 310112, "label": "闵行区" }, { "value": 310113, "label": "宝山区" }, { "value": 310114, "label": "嘉定区" }, { "value": 310115, "label": "浦东新区" }, { "value": 310116, "label": "金山区" }, { "value": 310117, "label": "松江区" }, { "value": 310118, "label": "青浦区" }, { "value": 310120, "label": "奉贤区" }, { "value": 310151, "label": "崇明区" }] }, { "value": 320000, "label": "江苏省", "children": [{ "value": 320100, "label": "南京市" }, { "value": 320200, "label": "无锡市" }, { "value": 320300, "label": "徐州市" }, { "value": 320400, "label": "常州市" }, { "value": 320500, "label": "苏州市" }, { "value": 320600, "label": "南通市" }, { "value": 320700, "label": "连云港市" }, { "value": 320800, "label": "淮安市" }, { "value": 320900, "label": "盐城市" }, { "value": 321000, "label": "扬州市" }, { "value": 321100, "label": "镇江市" }, { "value": 321200, "label": "泰州市" }, { "value": 321300, "label": "宿迁市" }] }, { "value": 330000, "label": "浙江省", "children": [{ "value": 330100, "label": "杭州市" }, { "value": 330200, "label": "宁波市" }, { "value": 330300, "label": "温州市" }, { "value": 330400, "label": "嘉兴市" }, { "value": 330500, "label": "湖州市" }, { "value": 330600, "label": "绍兴市" }, { "value": 330700, "label": "金华市" }, { "value": 330800, "label": "衢州市" }, { "value": 330900, "label": "舟山市" }, { "value": 331000, "label": "台州市" }, { "value": 331100, "label": "丽水市" }] }, { "value": 340000, "label": "安徽省", "children": [{ "value": 340100, "label": "合肥市" }, { "value": 340200, "label": "芜湖市" }, { "value": 340300, "label": "蚌埠市" }, { "value": 340400, "label": "淮南市" }, { "value": 340500, "label": "马鞍山市" }, { "value": 340600, "label": "淮北市" }, { "value": 340700, "label": "铜陵市" }, { "value": 340800, "label": "安庆市" }, { "value": 341000, "label": "黄山市" }, { "value": 341100, "label": "滁州市" }, { "value": 341200, "label": "阜阳市" }, { "value": 341300, "label": "宿州市" }, { "value": 341500, "label": "六安市" }, { "value": 341600, "label": "亳州市" }, { "value": 341700, "label": "池州市" }, { "value": 341800, "label": "宣城市" }] }, { "value": 350000, "label": "福建省", "children": [{ "value": 350100, "label": "福州市" }, { "value": 350200, "label": "厦门市" }, { "value": 350300, "label": "莆田市" }, { "value": 350400, "label": "三明市" }, { "value": 350500, "label": "泉州市" }, { "value": 350600, "label": "漳州市" }, { "value": 350700, "label": "南平市" }, { "value": 350800, "label": "龙岩市" }, { "value": 350900, "label": "宁德市" }] }, { "value": 360000, "label": "江西省", "children": [{ "value": 360100, "label": "南昌市" }, { "value": 360200, "label": "景德镇市" }, { "value": 360300, "label": "萍乡市" }, { "value": 360400, "label": "九江市" }, { "value": 360500, "label": "新余市" }, { "value": 360600, "label": "鹰潭市" }, { "value": 360700, "label": "赣州市" }, { "value": 360800, "label": "吉安市" }, { "value": 360900, "label": "宜春市" }, { "value": 361000, "label": "抚州市" }, { "value": 361100, "label": "上饶市" }] }, { "value": 370000, "label": "山东省", "children": [{ "value": 370100, "label": "济南市" }, { "value": 370200, "label": "青岛市" }, { "value": 370300, "label": "淄博市" }, { "value": 370400, "label": "枣庄市" }, { "value": 370500, "label": "东营市" }, { "value": 370600, "label": "烟台市" }, { "value": 370700, "label": "潍坊市" }, { "value": 370800, "label": "济宁市" }, { "value": 370900, "label": "泰安市" }, { "value": 371000, "label": "威海市" }, { "value": 371100, "label": "日照市" }, { "value": 371200, "label": "莱芜市" }, { "value": 371300, "label": "临沂市" }, { "value": 371400, "label": "德州市" }, { "value": 371500, "label": "聊城市" }, { "value": 371600, "label": "滨州市" }, { "value": 371700, "label": "菏泽市" }] }, { "value": 410000, "label": "河南省", "children": [{ "value": 410100, "label": "郑州市" }, { "value": 410200, "label": "开封市" }, { "value": 410300, "label": "洛阳市" }, { "value": 410400, "label": "平顶山市" }, { "value": 410500, "label": "安阳市" }, { "value": 410600, "label": "鹤壁市" }, { "value": 410700, "label": "新乡市" }, { "value": 410800, "label": "焦作市" }, { "value": 410900, "label": "濮阳市" }, { "value": 411000, "label": "许昌市" }, { "value": 411100, "label": "漯河市" }, { "value": 411200, "label": "三门峡市" }, { "value": 411300, "label": "南阳市" }, { "value": 411400, "label": "商丘市" }, { "value": 411500, "label": "信阳市" }, { "value": 411600, "label": "周口市" }, { "value": 411700, "label": "驻马店市" }, { "value": 419000, "label": "省直辖县级行政区划" }] }, { "value": 420000, "label": "湖北省", "children": [{ "value": 420100, "label": "武汉市" }, { "value": 420200, "label": "黄石市" }, { "value": 420300, "label": "十堰市" }, { "value": 420500, "label": "宜昌市" }, { "value": 420600, "label": "襄阳市" }, { "value": 420700, "label": "鄂州市" }, { "value": 420800, "label": "荆门市" }, { "value": 420900, "label": "孝感市" }, { "value": 421000, "label": "荆州市" }, { "value": 421100, "label": "黄冈市" }, { "value": 421200, "label": "咸宁市" }, { "value": 421300, "label": "随州市" }, { "value": 422800, "label": "恩施土家族苗族自治州" }, { "value": 429000, "label": "省直辖县级行政区划" }] }, { "value": 430000, "label": "湖南省", "children": [{ "value": 430100, "label": "长沙市" }, { "value": 430200, "label": "株洲市" }, { "value": 430300, "label": "湘潭市" }, { "value": 430400, "label": "衡阳市" }, { "value": 430500, "label": "邵阳市" }, { "value": 430600, "label": "岳阳市" }, { "value": 430700, "label": "常德市" }, { "value": 430800, "label": "张家界市" }, { "value": 430900, "label": "益阳市" }, { "value": 431000, "label": "郴州市" }, { "value": 431100, "label": "永州市" }, { "value": 431200, "label": "怀化市" }, { "value": 431300, "label": "娄底市" }, { "value": 433100, "label": "湘西土家族苗族自治州" }] }, { "value": 440000, "label": "广东省", "children": [{ "value": 440100, "label": "广州市" }, { "value": 440200, "label": "韶关市" }, { "value": 440300, "label": "深圳市" }, { "value": 440400, "label": "珠海市" }, { "value": 440500, "label": "汕头市" }, { "value": 440600, "label": "佛山市" }, { "value": 440700, "label": "江门市" }, { "value": 440800, "label": "湛江市" }, { "value": 440900, "label": "茂名市" }, { "value": 441200, "label": "肇庆市" }, { "value": 441300, "label": "惠州市" }, { "value": 441400, "label": "梅州市" }, { "value": 441500, "label": "汕尾市" }, { "value": 441600, "label": "河源市" }, { "value": 441700, "label": "阳江市" }, { "value": 441800, "label": "清远市" }, { "value": 441900, "label": "东莞市" }, { "value": 442000, "label": "中山市" }, { "value": 445100, "label": "潮州市" }, { "value": 445200, "label": "揭阳市" }, { "value": 445300, "label": "云浮市" }] }, { "value": 450000, "label": "广西壮族自治区", "children": [{ "value": 450100, "label": "南宁市" }, { "value": 450200, "label": "柳州市" }, { "value": 450300, "label": "桂林市" }, { "value": 450400, "label": "梧州市" }, { "value": 450500, "label": "北海市" }, { "value": 450600, "label": "防城港市" }, { "value": 450700, "label": "钦州市" }, { "value": 450800, "label": "贵港市" }, { "value": 450900, "label": "玉林市" }, { "value": 451000, "label": "百色市" }, { "value": 451100, "label": "贺州市" }, { "value": 451200, "label": "河池市" }, { "value": 451300, "label": "来宾市" }, { "value": 451400, "label": "崇左市" }] }, { "value": 460000, "label": "海南省", "children": [{ "value": 460100, "label": "海口市" }, { "value": 460200, "label": "三亚市" }, { "value": 460300, "label": "三沙市" }, { "value": 460400, "label": "儋州市" }, { "value": 469000, "label": "省直辖县级行政区划" }] }, { "value": 500000, "label": "重庆市", "children": [{ "value": 500101, "label": "万州区" }, { "value": 500102, "label": "涪陵区" }, { "value": 500103, "label": "渝中区" }, { "value": 500104, "label": "大渡口区" }, { "value": 500105, "label": "江北区" }, { "value": 500106, "label": "沙坪坝区" }, { "value": 500107, "label": "九龙坡区" }, { "value": 500108, "label": "南岸区" }, { "value": 500109, "label": "北碚区" }, { "value": 500110, "label": "綦江区" }, { "value": 500111, "label": "大足区" }, { "value": 500112, "label": "渝北区" }, { "value": 500113, "label": "巴南区" }, { "value": 500114, "label": "黔江区" }, { "value": 500115, "label": "长寿区" }, { "value": 500116, "label": "江津区" }, { "value": 500117, "label": "合川区" }, { "value": 500118, "label": "永川区" }, { "value": 500119, "label": "南川区" }, { "value": 500120, "label": "璧山区" }, { "value": 500151, "label": "铜梁区" }, { "value": 500152, "label": "潼南区" }, { "value": 500153, "label": "荣昌区" }, { "value": 500154, "label": "开州区" }] }, { "value": 510000, "label": "四川省", "children": [{ "value": 510100, "label": "成都市" }, { "value": 510300, "label": "自贡市" }, { "value": 510400, "label": "攀枝花市" }, { "value": 510500, "label": "泸州市" }, { "value": 510600, "label": "德阳市" }, { "value": 510700, "label": "绵阳市" }, { "value": 510800, "label": "广元市" }, { "value": 510900, "label": "遂宁市" }, { "value": 511000, "label": "内江市" }, { "value": 511100, "label": "乐山市" }, { "value": 511300, "label": "南充市" }, { "value": 511400, "label": "眉山市" }, { "value": 511500, "label": "宜宾市" }, { "value": 511600, "label": "广安市" }, { "value": 511700, "label": "达州市" }, { "value": 511800, "label": "雅安市" }, { "value": 511900, "label": "巴中市" }, { "value": 512000, "label": "资阳市" }, { "value": 513200, "label": "阿坝藏族羌族自治州" }, { "value": 513300, "label": "甘孜藏族自治州" }, { "value": 513400, "label": "凉山彝族自治州" }] }, { "value": 520000, "label": "贵州省", "children": [{ "value": 520100, "label": "贵阳市" }, { "value": 520200, "label": "六盘水市" }, { "value": 520300, "label": "遵义市" }, { "value": 520400, "label": "安顺市" }, { "value": 520500, "label": "毕节市" }, { "value": 520600, "label": "铜仁市" }, { "value": 522300, "label": "黔西南布依族苗族自治州" }, { "value": 522600, "label": "黔东南苗族侗族自治州" }, { "value": 522700, "label": "黔南布依族苗族自治州" }] }, { "value": 530000, "label": "云南省", "children": [{ "value": 530100, "label": "昆明市" }, { "value": 530300, "label": "曲靖市" }, { "value": 530400, "label": "玉溪市" }, { "value": 530500, "label": "保山市" }, { "value": 530600, "label": "昭通市" }, { "value": 530700, "label": "丽江市" }, { "value": 530800, "label": "普洱市" }, { "value": 530900, "label": "临沧市" }, { "value": 532300, "label": "楚雄彝族自治州" }, { "value": 532500, "label": "红河哈尼族彝族自治州" }, { "value": 532600, "label": "文山壮族苗族自治州" }, { "value": 532800, "label": "西双版纳傣族自治州" }, { "value": 532900, "label": "大理白族自治州" }, { "value": 533100, "label": "德宏傣族景颇族自治州" }, { "value": 533300, "label": "怒江傈僳族自治州" }, { "value": 533400, "label": "迪庆藏族自治州" }] }, { "value": 540000, "label": "西藏自治区", "children": [{ "value": 540100, "label": "拉萨市" }, { "value": 540200, "label": "日喀则市" }, { "value": 540300, "label": "昌都市" }, { "value": 540400, "label": "林芝市" }, { "value": 540500, "label": "山南市" }, { "value": 542400, "label": "那曲地区" }, { "value": 542500, "label": "阿里地区" }] }, { "value": 610000, "label": "陕西省", "children": [{ "value": 610100, "label": "西安市" }, { "value": 610200, "label": "铜川市" }, { "value": 610300, "label": "宝鸡市" }, { "value": 610400, "label": "咸阳市" }, { "value": 610500, "label": "渭南市" }, { "value": 610600, "label": "延安市" }, { "value": 610700, "label": "汉中市" }, { "value": 610800, "label": "榆林市" }, { "value": 610900, "label": "安康市" }, { "value": 611000, "label": "商洛市" }] }, { "value": 620000, "label": "甘肃省", "children": [{ "value": 620100, "label": "兰州市" }, { "value": 620200, "label": "嘉峪关市" }, { "value": 620300, "label": "金昌市" }, { "value": 620400, "label": "白银市" }, { "value": 620500, "label": "天水市" }, { "value": 620600, "label": "武威市" }, { "value": 620700, "label": "张掖市" }, { "value": 620800, "label": "平凉市" }, { "value": 620900, "label": "酒泉市" }, { "value": 621000, "label": "庆阳市" }, { "value": 621100, "label": "定西市" }, { "value": 621200, "label": "陇南市" }, { "value": 622900, "label": "临夏回族自治州" }, { "value": 623000, "label": "甘南藏族自治州" }] }, { "value": 630000, "label": "青海省", "children": [{ "value": 630100, "label": "西宁市" }, { "value": 630200, "label": "海东市" }, { "value": 632200, "label": "海北藏族自治州" }, { "value": 632300, "label": "黄南藏族自治州" }, { "value": 632500, "label": "海南藏族自治州" }, { "value": 632600, "label": "果洛藏族自治州" }, { "value": 632700, "label": "玉树藏族自治州" }, { "value": 632800, "label": "海西蒙古族藏族自治州" }] }, { "value": 640000, "label": "宁夏回族自治区", "children": [{ "value": 640100, "label": "银川市" }, { "value": 640200, "label": "石嘴山市" }, { "value": 640300, "label": "吴忠市" }, { "value": 640400, "label": "固原市" }, { "value": 640500, "label": "中卫市" }] }, { "value": 650000, "label": "新疆维吾尔自治区", "children": [{ "value": 650100, "label": "乌鲁木齐市" }, { "value": 650200, "label": "克拉玛依市" }, { "value": 650400, "label": "吐鲁番市" }, { "value": 650500, "label": "哈密市" }, { "value": 652300, "label": "昌吉回族自治州" }, { "value": 652700, "label": "博尔塔拉蒙古自治州" }, { "value": 652800, "label": "巴音郭楞蒙古自治州" }, { "value": 652900, "label": "阿克苏地区" }, { "value": 653000, "label": "克孜勒苏柯尔克孜自治州" }, { "value": 653100, "label": "喀什地区" }, { "value": 653200, "label": "和田地区" }, { "value": 654000, "label": "伊犁哈萨克自治州" }, { "value": 654200, "label": "塔城地区" }, { "value": 654300, "label": "阿勒泰地区" }, { "value": 659000, "label": "自治区直辖县级行政区划" }] }, { "value": 710000, "label": "台湾省", "children": [{ "value": "710100", "label": "台北市" }, { "value": "710200", "label": "高雄市" }, { "value": "710300", "label": "台南市" }, { "value": "710400", "label": "台中市" }, { "value": "710500", "label": "金门县" }, { "value": "710600", "label": "南投县" }, { "value": "710700", "label": "基隆市" }, { "value": "710800", "label": "新竹市" }, { "value": "710900", "label": "嘉义市" }, { "value": "711100", "label": "新北市" }, { "value": "711200", "label": "宜兰县" }, { "value": "711300", "label": "新竹县" }, { "value": "711400", "label": "桃园县" }, { "value": "711500", "label": "苗栗县" }, { "value": "711700", "label": "彰化县" }, { "value": "711900", "label": "嘉义县" }, { "value": "712100", "label": "云林县" }, { "value": "712400", "label": "屏东县" }, { "value": "712500", "label": "台东县" }, { "value": "712600", "label": "花莲县" }, { "value": "712700", "label": "澎湖县" }] }, { "value": 810000, "label": "香港特别行政区", "children": [{ "value": "810100", "label": "香港岛" }, { "value": "810200", "label": "九龙" }, { "value": "810300", "label": "新界" }] }, { "value": 820000, "label": "澳门特别行政区", "children": [{ "value": "820100", "label": "澳门半岛" }, { "value": "820200", "label": "氹仔岛" }, { "value": "820300", "label": "路环岛" }] }];exports.default = _default;

/***/ }),

/***/ 224:
/*!**************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fmine%2FContactsList"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ContactsList = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/ContactsList.vue */ 225));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_ContactsList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 232:
/*!*************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fmine%2FAddContacts"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _AddContacts = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/AddContacts.vue */ 233));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_AddContacts.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 240:
/*!**************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fmine%2FLeaveMessage"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _LeaveMessage = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/LeaveMessage.vue */ 241));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_LeaveMessage.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 248:
/*!*****************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fask%2FLeaveMessageList"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _LeaveMessageList = _interopRequireDefault(__webpack_require__(/*! ./pages/ask/LeaveMessageList.vue */ 249));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_LeaveMessageList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 256:
/*!*************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fask%2FReplyMessage"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ReplyMessage = _interopRequireDefault(__webpack_require__(/*! ./pages/ask/ReplyMessage.vue */ 257));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_ReplyMessage.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 26:
/*!********************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/index/index.vue */ 27));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 264:
/*!*****************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fask%2FLeaveMessageInfo"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _LeaveMessageInfo = _interopRequireDefault(__webpack_require__(/*! ./pages/ask/LeaveMessageInfo.vue */ 265));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_LeaveMessageInfo.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 272:
/*!******************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Factivity%2FActivityList"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ActivityList = _interopRequireDefault(__webpack_require__(/*! ./pages/activity/ActivityList.vue */ 273));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_ActivityList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 280:
/*!************************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fscenic%2FActivityTicketDetail"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ActivityTicketDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/scenic/ActivityTicketDetail.vue */ 281));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_ActivityTicketDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 288:
/*!***********************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fscenic%2FInvitedTicketDetail"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _InvitedTicketDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/scenic/InvitedTicketDetail.vue */ 289));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_InvitedTicketDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 296:
/*!************************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Factivity%2FShareActivityImage"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ShareActivityImage = _interopRequireDefault(__webpack_require__(/*! ./pages/activity/ShareActivityImage.vue */ 297));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_ShareActivityImage.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 304:
/*!**********************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Factivity%2FActivityRuleInfo"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ActivityRuleInfo = _interopRequireDefault(__webpack_require__(/*! ./pages/activity/ActivityRuleInfo.vue */ 305));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_ActivityRuleInfo.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 312:
/*!********************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fcollection%2FMyCollection"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _MyCollection = _interopRequireDefault(__webpack_require__(/*! ./pages/collection/MyCollection.vue */ 313));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_MyCollection.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 32:
/*!***************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/mixin/HandleJumpPage.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  methods: {
    jumpPage: function jumpPage() {var _this = this;
      var params = getApp().globalData.routeParams;
      if (params) {
        setTimeout(function () {
          var jumpPageInfo = params;
          var page = jumpPageInfo.page;
          if (page) {
            var pageUrl = '';
            switch (page) {
              // page=index&identity=XX&storeId=XX
              case 'index':
                pageUrl = null;
                break;
              case 'scenicdetail':
                // page=scenicdetail&identity=XX&storeId=XX&scenicId=XX
                pageUrl = _this.$mRouter.scenicDetail(jumpPageInfo);
                break;
              case 'ticketdetail':
                // page=ticketdetail&identity=XX&storeId=XX&scenicId=XX&&goodsId=XX
                pageUrl = _this.$mRouter.ticketDetail(jumpPageInfo);
                break;
              case 'atdetail':
                // page=atdetail&identity=XX&storeId=XX&s=XX&&g=XX&p=XX
                pageUrl = _this.$mRouter.activityDetail(jumpPageInfo);
                break;
              case 'itdetail':
                // page=itdetail&identity=XX&storeId=XX&s=XX&&g=XX&p=XX&uid=XX
                pageUrl = _this.$mRouter.invitedDetail(jumpPageInfo);
                break;}

            if (pageUrl) {
              uni.navigateTo({
                url: pageUrl,
                complete: function complete() {
                  getApp().globalData.routeParams = null;
                } });

            }
          }
        }, 500);
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 320:
/*!**********************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fcoupon%2FCoupon"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _Coupon = _interopRequireDefault(__webpack_require__(/*! ./pages/coupon/Coupon.vue */ 321));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_Coupon.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 328:
/*!************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fmessage%2FMessage"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _Message = _interopRequireDefault(__webpack_require__(/*! ./pages/message/Message.vue */ 329));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_Message.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 336:
/*!****************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fmessage%2FMessageInfo"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _MessageInfo = _interopRequireDefault(__webpack_require__(/*! ./pages/message/MessageInfo.vue */ 337));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_MessageInfo.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 35:
/*!********************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Flogin%2FLogin"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _Login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/Login.vue */ 36));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_Login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 4:
/*!**************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/pages.json ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 43:
/*!*******************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fmine%2Findex"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/index.vue */ 44));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 49:
/*!*******************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/static/logo.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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UmVhZHlxyWU8AAADKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRkE0MjcxNTdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRkE0MjcxNDdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkE4RkFCN0M3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkE4RkFCN0Q3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BZZ+3AAAB1ElEQVR42mJkAALtmZb/GfAAJkIKwIoYiAA4FV1JO0Ylk0hWxILLHTgV6cyywqoIIIAYiQinb8S4iYs036E7esgEJq6ABAGAACImMBmo5m6yDcLlR5gcNnnaumhADWIhJoOTbRC+9ILPa9+o4TWAAAIlyDVAOphCc1SYqGAICNwZxumIidi8NILz2qhBdCyPaOcicgq1wRnYAAFErRKSgZo+GzSOoWpQD1sHsRCjCDnzkpp90DM+If2jUTbqoFEHjZZDpJYroyFESeNmNFHTykEqg8g9bwACCNRiVAYyLgEx1wA7Zu3V9OMhVBt1opajBlsaCh7NZaMOGnXQgFeupHZjKO1CjUbZqINGHTTqoFEHjTpo1EGjDhqMgw342kejUTaahggpoOdg1WiUjTpoODoIvL7tzSBykB5AgPbtGIdBGIYCaBR16swROEQvzT06cxjm1lRFDC0LcpXC+xJzpIdJhOW8e4z359MVWSde1C32xRYasC0mCmascDZzrQz+7NgABAgQINnRY/iUrb5D9v9l9toqCBAgQIAAAQIESAABAgQIEKCD5ZK9QPaMigoCdIJP7NdjOyoIECBAgGQBGjB8zVDjam153T0OqInJbBAWfdg8AExKZVcA71uIAAAAAElFTkSuQmCC"

/***/ }),

/***/ 50:
/*!*******************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/static/icon_waiting_pay.png ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 51:
/*!*******************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/static/icon_waiting_use.png ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 52:
/*!***********************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/static/icon_waiting_comment.png ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 53:
/*!******************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/static/icon_back_money.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 54:
/*!******************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/static/icon_collection.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 55:
/*!******************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/static/icon_youhuiquan.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 56:
/*!*********************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/static/icon_leave_message.png ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 57:
/*!***************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/static/icon_contact.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 58:
/*!*********************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/static/icon_personal_info.png ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 59:
/*!***********************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/mixin/UpdateData.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  onLoad: function onLoad() {var _this = this;
    uni.$on('orderUpdate', function () {
      _this.isUpdate = true;
    });
    uni.$once('userInfo', function () {
      _this.isLogin = _this.$userInfo.isLogin();
      if (_this.onLogin) {
        _this.onLogin();
      }
    });
  },
  onUnload: function onUnload() {
    uni.$off('orderUpdate', function () {
      console.log('移除了监听器');
    });
  },
  onShow: function onShow() {
    if (this.isUpdate) {
      uni.startPullDownRefresh();
      this.isUpdate = false;
      if (this.onRefresh) {
        this.onRefresh();
      }
    }
  },
  data: function data() {
    return {
      isUpdate: false,
      isLogin: this.$userInfo.isLogin() };

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 62:
/*!*****************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fcustom%2FCustomService"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _CustomService = _interopRequireDefault(__webpack_require__(/*! ./pages/custom/CustomService.vue */ 63));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_CustomService.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 643:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 644);


/***/ }),

/***/ 644:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 645);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 645:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 667:
/*!**************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/mixin/SearchHistory.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  methods: {
    saveHistory: function saveHistory(id, item) {
      if (localStorage) {
        var histories = this.getHistory(id);
        if (!histories.includes(item)) {
          histories.push(item);
          localStorage.setItem(id, histories.join(','));
        }
      }
    },
    getHistory: function getHistory(id) {
      var historyJson = [];
      if (localStorage) {
        historyJson = localStorage.getItem(id);
      }
      if (historyJson && historyJson !== '' && typeof historyJson === 'string') {
        return historyJson.split(',');
      }
      return [];
    },
    clearHistory: function clearHistory(id) {
      if (localStorage) {
        localStorage.setItem(id, '');
      }
    } } };exports.default = _default;

/***/ }),

/***/ 70:
/*!***************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Forder%2FOrderAllList"} ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _OrderAllList = _interopRequireDefault(__webpack_require__(/*! ./pages/order/OrderAllList.vue */ 71));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_OrderAllList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 738:
/*!**********************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/componets/uni/qrcode/qrcode.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var QRCode = {};
(function () {
  /**
               * 获取单个字符的utf8编码
               * unicode BMP平面约65535个字符
               * @param {num} code
               * return {array}
               */
  function unicodeFormat8(code) {
    // 1 byte
    var c0, c1, c2;
    if (code < 128) {
      return [code];
      // 2 bytes
    } else if (code < 2048) {
      c0 = 192 + (code >> 6);
      c1 = 128 + (code & 63);
      return [c0, c1];
      // 3 bytes
    } else {
      c0 = 224 + (code >> 12);
      c1 = 128 + (code >> 6 & 63);
      c2 = 128 + (code & 63);
      return [c0, c1, c2];
    }
  }
  /**
     * 获取字符串的utf8编码字节串
     * @param {string} string
     * @return {array}
     */
  function getUTF8Bytes(string) {
    var utf8codes = [];
    for (var i = 0; i < string.length; i++) {
      var code = string.charCodeAt(i);
      var utf8 = unicodeFormat8(code);
      for (var j = 0; j < utf8.length; j++) {
        utf8codes.push(utf8[j]);
      }
    }
    return utf8codes;
  }
  /**
     * 二维码算法实现
     * @param {string} data              要编码的信息字符串
     * @param {num} errorCorrectLevel 纠错等级
     */
  function QRCodeAlg(data, errorCorrectLevel) {
    this.typeNumber = -1; //版本
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null; //二维矩阵，存放最终结果
    this.moduleCount = 0; //矩阵大小
    this.dataCache = null; //数据缓存
    this.rsBlocks = null; //版本数据信息
    this.totalDataCount = -1; //可使用的数据量
    this.data = data;
    this.utf8bytes = getUTF8Bytes(data);
    this.make();
  }
  QRCodeAlg.prototype = {
    constructor: QRCodeAlg,
    /**
                             * 获取二维码矩阵大小
                             * @return {num} 矩阵大小
                             */
    getModuleCount: function getModuleCount() {
      return this.moduleCount;
    },
    /**
        * 编码
        */
    make: function make() {
      this.getRightType();
      this.dataCache = this.createData();
      this.createQrcode();
    },
    /**
        * 设置二位矩阵功能图形
        * @param  {bool} test 表示是否在寻找最好掩膜阶段
        * @param  {num} maskPattern 掩膜的版本
        */
    makeImpl: function makeImpl(maskPattern) {
      this.moduleCount = this.typeNumber * 4 + 17;
      this.modules = new Array(this.moduleCount);
      for (var row = 0; row < this.moduleCount; row++) {
        this.modules[row] = new Array(this.moduleCount);
      }
      this.setupPositionProbePattern(0, 0);
      this.setupPositionProbePattern(this.moduleCount - 7, 0);
      this.setupPositionProbePattern(0, this.moduleCount - 7);
      this.setupPositionAdjustPattern();
      this.setupTimingPattern();
      this.setupTypeInfo(true, maskPattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(true);
      }
      this.mapData(this.dataCache, maskPattern);
    },
    /**
        * 设置二维码的位置探测图形
        * @param  {num} row 探测图形的中心横坐标
        * @param  {num} col 探测图形的中心纵坐标
        */
    setupPositionProbePattern: function setupPositionProbePattern(row, col) {
      for (var r = -1; r <= 7; r++) {
        if (row + r <= -1 || this.moduleCount <= row + r) continue;
        for (var c = -1; c <= 7; c++) {
          if (col + c <= -1 || this.moduleCount <= col + c) continue;
          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            this.modules[row + r][col + c] = true;
          } else {
            this.modules[row + r][col + c] = false;
          }
        }
      }
    },
    /**
        * 创建二维码
        * @return {[type]} [description]
        */
    createQrcode: function createQrcode() {
      var minLostPoint = 0;
      var pattern = 0;
      var bestModules = null;
      for (var i = 0; i < 8; i++) {
        this.makeImpl(i);
        var lostPoint = QRUtil.getLostPoint(this);
        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
          bestModules = this.modules;
        }
      }
      this.modules = bestModules;
      this.setupTypeInfo(false, pattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(false);
      }
    },
    /**
        * 设置定位图形
        * @return {[type]} [description]
        */
    setupTimingPattern: function setupTimingPattern() {
      for (var r = 8; r < this.moduleCount - 8; r++) {
        if (this.modules[r][6] != null) {
          continue;
        }
        this.modules[r][6] = r % 2 == 0;
        if (this.modules[6][r] != null) {
          continue;
        }
        this.modules[6][r] = r % 2 == 0;
      }
    },
    /**
        * 设置矫正图形
        * @return {[type]} [description]
        */
    setupPositionAdjustPattern: function setupPositionAdjustPattern() {
      var pos = QRUtil.getPatternPosition(this.typeNumber);
      for (var i = 0; i < pos.length; i++) {
        for (var j = 0; j < pos.length; j++) {
          var row = pos[i];
          var col = pos[j];
          if (this.modules[row][col] != null) {
            continue;
          }
          for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                this.modules[row + r][col + c] = true;
              } else {
                this.modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    },
    /**
        * 设置版本信息（7以上版本才有）
        * @param  {bool} test 是否处于判断最佳掩膜阶段
        * @return {[type]}      [description]
        */
    setupTypeNumber: function setupTypeNumber(test) {
      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
      for (var i = 0; i < 18; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    },
    /**
        * 设置格式信息（纠错等级和掩膜版本）
        * @param  {bool} test
        * @param  {num} maskPattern 掩膜版本
        * @return {}
        */
    setupTypeInfo: function setupTypeInfo(test, maskPattern) {
      var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);
      // vertical
      for (var i = 0; i < 15; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 6) {
          this.modules[i][8] = mod;
        } else if (i < 8) {
          this.modules[i + 1][8] = mod;
        } else {
          this.modules[this.moduleCount - 15 + i][8] = mod;
        }
        // horizontal
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 8) {
          this.modules[8][this.moduleCount - i - 1] = mod;
        } else if (i < 9) {
          this.modules[8][15 - i - 1 + 1] = mod;
        } else {
          this.modules[8][15 - i - 1] = mod;
        }
      }
      // fixed module
      this.modules[this.moduleCount - 8][8] = !test;
    },
    /**
        * 数据编码
        * @return {[type]} [description]
        */
    createData: function createData() {
      var buffer = new QRBitBuffer();
      var lengthBits = this.typeNumber > 9 ? 16 : 8;
      buffer.put(4, 4); //添加模式
      buffer.put(this.utf8bytes.length, lengthBits);
      for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
        buffer.put(this.utf8bytes[i], 8);
      }
      if (buffer.length + 4 <= this.totalDataCount * 8) {
        buffer.put(0, 4);
      }
      // padding
      while (buffer.length % 8 != 0) {
        buffer.putBit(false);
      }
      // padding
      while (true) {
        if (buffer.length >= this.totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeAlg.PAD0, 8);
        if (buffer.length >= this.totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeAlg.PAD1, 8);
      }
      return this.createBytes(buffer);
    },
    /**
        * 纠错码编码
        * @param  {buffer} buffer 数据编码
        * @return {[type]}
        */
    createBytes: function createBytes(buffer) {
      var offset = 0;
      var maxDcCount = 0;
      var maxEcCount = 0;
      var length = this.rsBlock.length / 3;
      var rsBlocks = new Array();
      for (var i = 0; i < length; i++) {
        var count = this.rsBlock[i * 3 + 0];
        var totalCount = this.rsBlock[i * 3 + 1];
        var dataCount = this.rsBlock[i * 3 + 2];
        for (var j = 0; j < count; j++) {
          rsBlocks.push([dataCount, totalCount]);
        }
      }
      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);
      for (var r = 0; r < rsBlocks.length; r++) {
        var dcCount = rsBlocks[r][0];
        var ecCount = rsBlocks[r][1] - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);
        for (var i = 0; i < dcdata[r].length; i++) {
          dcdata[r][i] = 0xff & buffer.buffer[i + offset];
        }
        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i++) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
      }
      var data = new Array(this.totalDataCount);
      var index = 0;
      for (var i = 0; i < maxDcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i < dcdata[r].length) {
            data[index++] = dcdata[r][i];
          }
        }
      }
      for (var i = 0; i < maxEcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i < ecdata[r].length) {
            data[index++] = ecdata[r][i];
          }
        }
      }
      return data;

    },
    /**
        * 布置模块，构建最终信息
        * @param  {} data
        * @param  {} maskPattern
        * @return {}
        */
    mapData: function mapData(data, maskPattern) {
      var inc = -1;
      var row = this.moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      for (var col = this.moduleCount - 1; col > 0; col -= 2) {
        if (col == 6) col--;
        while (true) {
          for (var c = 0; c < 2; c++) {
            if (this.modules[row][col - c] == null) {
              var dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
              }
              var mask = QRUtil.getMask(maskPattern, row, col - c);
              if (mask) {
                dark = !dark;
              }
              this.modules[row][col - c] = dark;
              bitIndex--;
              if (bitIndex == -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || this.moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    } };

  /**
          * 填充字段
          */
  QRCodeAlg.PAD0 = 0xEC;
  QRCodeAlg.PAD1 = 0x11;
  //---------------------------------------------------------------------
  // 纠错等级对应的编码
  //---------------------------------------------------------------------
  var QRErrorCorrectLevel = [1, 0, 3, 2];
  //---------------------------------------------------------------------
  // 掩膜版本
  //---------------------------------------------------------------------
  var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7 };

  //---------------------------------------------------------------------
  // 工具类
  //---------------------------------------------------------------------
  var QRUtil = {
    /*
                 每个版本矫正图形的位置
                  */
    PATTERN_POSITION_TABLE: [
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70],
    [6, 26, 50, 74],
    [6, 30, 54, 78],
    [6, 30, 56, 82],
    [6, 30, 58, 86],
    [6, 34, 62, 90],
    [6, 28, 50, 72, 94],
    [6, 26, 50, 74, 98],
    [6, 30, 54, 78, 102],
    [6, 28, 54, 80, 106],
    [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114],
    [6, 34, 62, 90, 118],
    [6, 26, 50, 74, 98, 122],
    [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130],
    [6, 30, 56, 82, 108, 134],
    [6, 34, 60, 86, 112, 138],
    [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146],
    [6, 30, 54, 78, 102, 126, 150],
    [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158],
    [6, 32, 58, 84, 110, 136, 162],
    [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170]],

    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
    /*
                                                             BCH编码格式信息
                                                              */
    getBCHTypeInfo: function getBCHTypeInfo(data) {
      var d = data << 10;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
      }
      return (data << 10 | d) ^ QRUtil.G15_MASK;
    },
    /*
       BCH编码版本信息
        */
    getBCHTypeNumber: function getBCHTypeNumber(data) {
      var d = data << 12;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
      }
      return data << 12 | d;
    },
    /*
       获取BCH位信息
        */
    getBCHDigit: function getBCHDigit(data) {
      var digit = 0;
      while (data != 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    },
    /*
       获取版本对应的矫正图形位置
        */
    getPatternPosition: function getPatternPosition(typeNumber) {
      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    /*
       掩膜算法
        */
    getMask: function getMask(maskPattern, i, j) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return (i + j) % 2 == 0;
        case QRMaskPattern.PATTERN001:
          return i % 2 == 0;
        case QRMaskPattern.PATTERN010:
          return j % 3 == 0;
        case QRMaskPattern.PATTERN011:
          return (i + j) % 3 == 0;
        case QRMaskPattern.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
        case QRMaskPattern.PATTERN101:
          return i * j % 2 + i * j % 3 == 0;
        case QRMaskPattern.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 == 0;
        case QRMaskPattern.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);}

    },
    /*
       获取RS的纠错多项式
        */
    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
      var a = new QRPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i++) {
        a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
      }
      return a;
    },
    /*
       获取评价
        */
    getLostPoint: function getLostPoint(qrCode) {
      var moduleCount = qrCode.getModuleCount(),
      lostPoint = 0,
      darkCount = 0;
      for (var row = 0; row < moduleCount; row++) {
        var sameCount = 0;
        var head = qrCode.modules[row][0];
        for (var col = 0; col < moduleCount; col++) {
          var current = qrCode.modules[row][col];
          //level 3 评价
          if (col < moduleCount - 6) {
            if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
              if (col < moduleCount - 10) {
                if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
                  lostPoint += 40;
                }
              } else if (col > 3) {
                if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
                  lostPoint += 40;
                }
              }
            }
          }
          //level 2 评价
          if (row < moduleCount - 1 && col < moduleCount - 1) {
            var count = 0;
            if (current) count++;
            if (qrCode.modules[row + 1][col]) count++;
            if (qrCode.modules[row][col + 1]) count++;
            if (qrCode.modules[row + 1][col + 1]) count++;
            if (count == 0 || count == 4) {
              lostPoint += 3;
            }
          }
          //level 1 评价
          if (head ^ current) {
            sameCount++;
          } else {
            head = current;
            if (sameCount >= 5) {
              lostPoint += 3 + sameCount - 5;
            }
            sameCount = 1;
          }
          //level 4 评价
          if (current) {
            darkCount++;
          }
        }
      }
      for (var col = 0; col < moduleCount; col++) {
        var sameCount = 0;
        var head = qrCode.modules[0][col];
        for (var row = 0; row < moduleCount; row++) {
          var current = qrCode.modules[row][col];
          //level 3 评价
          if (row < moduleCount - 6) {
            if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
              if (row < moduleCount - 10) {
                if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
                  lostPoint += 40;
                }
              } else if (row > 3) {
                if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
                  lostPoint += 40;
                }
              }
            }
          }
          //level 1 评价
          if (head ^ current) {
            sameCount++;
          } else {
            head = current;
            if (sameCount >= 5) {
              lostPoint += 3 + sameCount - 5;
            }
            sameCount = 1;
          }
        }
      }
      // LEVEL4
      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    } };


  //---------------------------------------------------------------------
  // QRMath使用的数学工具
  //---------------------------------------------------------------------
  var QRMath = {
    /*
                 将n转化为a^m
                  */
    glog: function glog(n) {
      if (n < 1) {
        throw new Error("glog(" + n + ")");
      }
      return QRMath.LOG_TABLE[n];
    },
    /*
       将a^m转化为n
        */
    gexp: function gexp(n) {
      while (n < 0) {
        n += 255;
      }
      while (n >= 256) {
        n -= 255;
      }
      return QRMath.EXP_TABLE[n];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256) };


  for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
  }
  for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
  }
  for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
  }
  //---------------------------------------------------------------------
  // QRPolynomial 多项式
  //---------------------------------------------------------------------
  /**
   * 多项式类
   * @param {Array} num   系数
   * @param {num} shift a^shift
   */
  function QRPolynomial(num, shift) {
    if (num.length == undefined) {
      throw new Error(num.length + "/" + shift);
    }
    var offset = 0;
    while (offset < num.length && num[offset] == 0) {
      offset++;
    }
    this.num = new Array(num.length - offset + shift);
    for (var i = 0; i < num.length - offset; i++) {
      this.num[i] = num[i + offset];
    }
  }
  QRPolynomial.prototype = {
    get: function get(index) {
      return this.num[index];
    },
    getLength: function getLength() {
      return this.num.length;
    },
    /**
        * 多项式乘法
        * @param  {QRPolynomial} e 被乘多项式
        * @return {[type]}   [description]
        */
    multiply: function multiply(e) {
      var num = new Array(this.getLength() + e.getLength() - 1);
      for (var i = 0; i < this.getLength(); i++) {
        for (var j = 0; j < e.getLength(); j++) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
        }
      }
      return new QRPolynomial(num, 0);
    },
    /**
        * 多项式模运算
        * @param  {QRPolynomial} e 模多项式
        * @return {}
        */
    mod: function mod(e) {
      var tl = this.getLength(),
      el = e.getLength();
      if (tl - el < 0) {
        return this;
      }
      var num = new Array(tl);
      for (var i = 0; i < tl; i++) {
        num[i] = this.get(i);
      }
      while (num.length >= el) {
        var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));

        for (var i = 0; i < e.getLength(); i++) {
          num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
        }
        while (num[0] == 0) {
          num.shift();
        }
      }
      return new QRPolynomial(num, 0);
    } };


  //---------------------------------------------------------------------
  // RS_BLOCK_TABLE
  //---------------------------------------------------------------------
  /*
  二维码各个版本信息[块数, 每块中的数据块数, 每块中的信息块数]
   */
  var RS_BLOCK_TABLE = [
  // L
  // M
  // Q
  // H
  // 1
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],

  // 2
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],

  // 3
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],

  // 4
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],

  // 5
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],

  // 6
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],

  // 7
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],

  // 8
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],

  // 9
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],

  // 10
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],

  // 11
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],

  // 12
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],

  // 13
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],

  // 14
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],

  // 15
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],

  // 16
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],

  // 17
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],

  // 18
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],

  // 19
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],

  // 20
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],

  // 21
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],

  // 22
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],

  // 23
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],

  // 24
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],

  // 25
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],

  // 26
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],

  // 27
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],

  // 28
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],

  // 29
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],

  // 30
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],

  // 31
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],

  // 32
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],

  // 33
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],

  // 34
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],

  // 35
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],

  // 36
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],

  // 37
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],

  // 38
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],

  // 39
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],

  // 40
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16]];


  /**
                              * 根据数据获取对应版本
                              * @return {[type]} [description]
                              */
  QRCodeAlg.prototype.getRightType = function () {
    for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
      var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
      if (rsBlock == undefined) {
        throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
      }
      var length = rsBlock.length / 3;
      var totalDataCount = 0;
      for (var i = 0; i < length; i++) {
        var count = rsBlock[i * 3 + 0];
        var dataCount = rsBlock[i * 3 + 2];
        totalDataCount += dataCount * count;
      }
      var lengthBytes = typeNumber > 9 ? 2 : 1;
      if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
        this.typeNumber = typeNumber;
        this.rsBlock = rsBlock;
        this.totalDataCount = totalDataCount;
        break;
      }
    }
  };

  //---------------------------------------------------------------------
  // QRBitBuffer
  //---------------------------------------------------------------------
  function QRBitBuffer() {
    this.buffer = new Array();
    this.length = 0;
  }
  QRBitBuffer.prototype = {
    get: function get(index) {
      var bufIndex = Math.floor(index / 8);
      return this.buffer[bufIndex] >>> 7 - index % 8 & 1;
    },
    put: function put(num, length) {
      for (var i = 0; i < length; i++) {
        this.putBit(num >>> length - i - 1 & 1);
      }
    },
    putBit: function putBit(bit) {
      var bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }
      if (bit) {
        this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
      }
      this.length++;
    } };




  // xzedit
  var qrcodeAlgObjCache = [];
  /**
                               * 二维码构造函数，主要用于绘制
                               * @param  {参数列表} opt 传递参数
                               * @return {}
                               */
  QRCode = function QRCode(opt) {
    //设置默认参数
    this.options = {
      text: '',
      size: 256,
      correctLevel: 3,
      background: '#ffffff',
      foreground: '#000000',
      pdground: '#000000',
      image: '',
      imageSize: 30,
      canvasId: opt.canvasId,
      context: opt.context,
      usingComponents: opt.usingComponents,
      showLoading: opt.showLoading,
      loadingText: opt.loadingText };

    if (typeof opt === 'string') {// 只编码ASCII字符串
      opt = {
        text: opt };

    }
    if (opt) {
      for (var i in opt) {
        this.options[i] = opt[i];
      }
    }
    //使用QRCodeAlg创建二维码结构
    var qrCodeAlg = null;
    for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
      if (qrcodeAlgObjCache[i].text == this.options.text && qrcodeAlgObjCache[i].text.correctLevel == this.options.correctLevel) {
        qrCodeAlg = qrcodeAlgObjCache[i].obj;
        break;
      }
    }
    if (i == l) {
      qrCodeAlg = new QRCodeAlg(this.options.text, this.options.correctLevel);
      qrcodeAlgObjCache.push({
        text: this.options.text,
        correctLevel: this.options.correctLevel,
        obj: qrCodeAlg });

    }
    /**
       * 计算矩阵点的前景色
       * @param {Obj} config
       * @param {Number} config.row 点x坐标
       * @param {Number} config.col 点y坐标
       * @param {Number} config.count 矩阵大小
       * @param {Number} config.options 组件的options
       * @return {String}
       */
    var getForeGround = function getForeGround(config) {
      var options = config.options;
      if (options.pdground && (
      config.row > 1 && config.row < 5 && config.col > 1 && config.col < 5 ||
      config.row > config.count - 6 && config.row < config.count - 2 && config.col > 1 && config.col < 5 ||
      config.row > 1 && config.row < 5 && config.col > config.count - 6 && config.col < config.count - 2))
      {
        return options.pdground;
      }
      return options.foreground;
    };
    // 创建canvas
    var createCanvas = function createCanvas(options) {
      if (options.showLoading) {
        uni.showLoading({
          title: options.loadingText,
          mask: true });

      }
      var ctx = uni.createCanvasContext(options.canvasId, options.context);
      var count = qrCodeAlg.getModuleCount();
      var ratioSize = options.size;
      var ratioImgSize = options.imageSize;
      //计算每个点的长宽
      var tileW = (ratioSize / count).toPrecision(4);
      var tileH = (ratioSize / count).toPrecision(4);
      //绘制
      for (var row = 0; row < count; row++) {
        for (var col = 0; col < count; col++) {
          var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
          var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
          var foreground = getForeGround({
            row: row,
            col: col,
            count: count,
            options: options });

          ctx.setFillStyle(qrCodeAlg.modules[row][col] ? foreground : options.background);
          ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);
        }
      }
      if (options.image) {




        // 画圆角矩形
        var drawRoundedRect = function drawRoundedRect(ctxi, x, y, width, height, r, lineWidth, fill, stroke) {
          ctxi.setLineWidth(lineWidth);
          ctxi.setFillStyle(options.background);
          ctxi.setStrokeStyle(options.background);
          ctxi.beginPath(); // draw top and top right corner 
          ctxi.moveTo(x + r, y);
          ctxi.arcTo(x + width, y, x + width, y + r, r); // draw right side and bottom right corner 
          ctxi.arcTo(x + width, y + height, x + width - r, y + height, r); // draw bottom and bottom left corner 
          ctxi.arcTo(x, y + height, x, y + height - r, r); // draw left and top left corner 
          ctxi.arcTo(x, y, x + r, y, r);
          ctxi.closePath();
          if (fill) {
            ctxi.fill();
          }
          if (stroke) {
            ctxi.stroke();
          }
        };var x = Number(((ratioSize - ratioImgSize) / 2).toFixed(2));var y = Number(((ratioSize - ratioImgSize) / 2).toFixed(2));drawRoundedRect(ctx, x, y, ratioImgSize, ratioImgSize, 2, 6, true, true);ctx.drawImage(options.image, x, y, ratioImgSize, ratioImgSize);
      }
      setTimeout(function () {
        ctx.draw(true, function () {
          // 保存到临时区域
          setTimeout(function () {
            uni.canvasToTempFilePath({
              width: options.width,
              height: options.height,
              destWidth: options.width,
              destHeight: options.height,
              canvasId: options.canvasId,
              quality: Number(1),
              success: function success(res) {
                if (options.cbResult) {
                  // 由于官方还没有统一此接口的输出字段，所以先判定下  支付宝为 res.apFilePath
                  if (!empty(res.tempFilePath)) {
                    options.cbResult(res.tempFilePath);
                  } else if (!empty(res.apFilePath)) {
                    options.cbResult(res.apFilePath);
                  } else {
                    options.cbResult(res.tempFilePath);
                  }
                }
              },
              fail: function fail(res) {
                if (options.cbResult) {
                  options.cbResult(res);
                }
              },
              complete: function complete() {
                uni.hideLoading();
              } },
            options.context);
          }, options.text.length + 100);
        });
      }, options.usingComponents ? 0 : 150);
    };
    createCanvas(this.options);
    // 空判定
    var empty = function empty(v) {
      var tp = typeof v,
      rt = false;
      if (tp == "number" && String(v) == "") {
        rt = true;
      } else if (tp == "undefined") {
        rt = true;
      } else if (tp == "object") {
        if (JSON.stringify(v) == "{}" || JSON.stringify(v) == "[]" || v == null) rt = true;
      } else if (tp == "string") {
        if (v == "" || v == "undefined" || v == "null" || v == "{}" || v == "[]") rt = true;
      } else if (tp == "function") {
        rt = false;
      }
      return rt;
    };
  };
  QRCode.prototype.clear = function (fn) {
    var ctx = uni.createCanvasContext(this.options.canvasId, this.options.context);
    ctx.clearRect(0, 0, this.options.size, this.options.size);
    ctx.draw(false, function () {
      if (fn) {
        fn();
      }
    });
  };
})();var _default =

QRCode;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 76:
/*!*****************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/mixin/List.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      page: {
        num: 1,
        pageSize: 10 },

      list: [],
      loadingType: 'loading' };

  },
  methods: {
    loadSuccess: function loadSuccess(data) {
      if (data === null || data.length === 0) {
        if (this.page.num === 1) {
          this.list = [];
        }
        this.loadingType = 'noMore';
      } else {
        if (this.page.num === 1) {
          this.list = data;
        } else {
          this.list = this.list.concat(data);
        }
        if (data.length < this.page.pageSize) {
          this.loadingType = 'noMore';
        } else {
          this.loadingType = 'more';
        }
      }
    },
    loadFail: function loadFail() {
      if (this.page.num === 1) {
        this.list = [];
      }
      this.loadingType = 'noMore';
      this.$toast('数据加载失败…');
    } },

  onPullDownRefresh: function onPullDownRefresh() {
    this.page.num = 1;
    this.getData();
  },
  onReachBottom: function onReachBottom() {
    if (this.loadingType === 'noMore') {
      return;
    }
    this.page.num = this.page.num + 1;
    this.loadingType = 'loading';
    this.getData();
  } };exports.default = _default;

/***/ }),

/***/ 77:
/*!******************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/mixin/Order.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  data: function data() {
    return {
      serverTime: 0 };

  },

  methods: {
    reBuyTicket: function reBuyTicket(item) {var _this = this;
      return {
        title: '再来一单',
        show: true,
        action: function action() {
          _this.$push(_this.$mRouter.scenicDetail({
            scenicId: item.ord_scenicId }));

        } };

    },
    action1Click: function action1Click(index) {
      this.list[index.index].stateModel.action1.action();
    },
    action2Click: function action2Click(index) {
      this.list[index.index].stateModel.action2.action();
    },
    setOrderState: function setOrderState(data) {var _this2 = this;
      data.forEach(function (it, index) {
        switch (it.status) {
          case 'PAY_STATUS_NO': // 待付款
            it.stateModel = {
              orderType: '1',
              stateTip: '待付款',
              time: {
                title: '剩余支付时间：',
                time: Math.max(0, Number(it.timeout_express) - Number(_this2.serverTime)) },

              action1: {
                title: '取消订单',
                show: true,
                action: function action() {
                  uni.showModal({
                    cancelText: "再想想",
                    confirmText: "取消",
                    title: '提示',
                    content: '是否要取消此订单',
                    success: function success(res) {
                      if (res.confirm) {
                        _this2.$http(_this2.$urlPath.orderCancel, {
                          ord_id: it.ord_id },
                        '正在取消…', function (result) {
                          _this2.$toast('订单取消成功');
                          uni.startPullDownRefresh();
                        }, function (errorCode, error) {
                          _this2.$toast(error);
                        });
                      }
                    } });

                } },

              action2: {
                title: '立即支付',
                show: Number(it.timeout_express) - Number(_this2.serverTime) > 0,
                action: function action() {
                  _this2.$push(_this2.$mRouter.orderInfoPay({
                    no: it.out_trade_no }));

                } } };


            break;
          case 'USE_STATUS_NO': // 未使用
            it.stateModel = {
              orderType: '2',
              stateTip: '已支付',
              time: {
                title: '下单时间：',
                time: it.ord_add_time },

              action1: _this2.reBuyTicket(it),
              action2: {
                title: it.is_refund === 1 ? '申请退款' : '',
                show: it.is_refund === 1,
                action: it.is_refund ? function () {
                  _this2.$push(_this2.$mRouter.orderRefund({
                    id: it.ord_id }));

                } : null } };


            break;
          case 'NO_COMMENT':
          case 'USE_STATUS': // 已使用
            it.stateModel = {
              orderType: '3',
              stateTip: '待评价',
              time: {
                title: '下单时间：',
                time: it.ord_add_time },

              action1: _this2.reBuyTicket(it),
              action2: {
                title: '去评价',
                show: true,
                action: function action() {
                  _this2.$push(_this2.$mRouter.orderComment({
                    orderId: it.ord_id }));

                } } };


            break;
          case 'USE_STATUS_OFF': // 取消
            it.stateModel = {
              orderType: '6',
              stateTip: '已取消',
              time: {
                title: '下单时间：',
                time: it.ord_add_time },

              action1: {
                title: '删除订单',
                show: true,
                action: function action() {
                  uni.showModal({
                    title: '提示',
                    content: '是否要删除此订单?',
                    cancelText: '取消',
                    confirmText: '删除',
                    success: function success(res) {
                      if (res.confirm) {
                        _this2.$http(_this2.$urlPath.orderDelete, {
                          ord_id: it.ord_id },
                        '正在删除…', function (result) {
                          _this2.list.splice(index, 1);
                          _this2.$toast('订单删除成功');
                        }, function (errorCode, error) {
                          _this2.$toast(error);
                        });
                      }
                    } });

                } },

              action2: _this2.reBuyTicket(it) };

            break;
          case 'USE_STATUS_EXPIRE': // 已过期
            it.stateModel = {
              orderType: '7',
              stateTip: '已过期',
              time: {
                title: '下单时间：',
                time: it.ord_add_time },

              action1: {
                title: '删除订单',
                show: true,
                action: function action() {
                  var confirm = window.confirm('是否要删除此订单？');
                  if (confirm) {
                    _this2.$http(_this2.$urlPath.orderDelete, {
                      ord_id: it.ord_id },
                    '正在删除…', function (result) {
                      _this2.reload();
                      _this2.$toast('订单删除成功');
                    }, function (errorCode, error) {
                      _this2.$toast(error);
                    });
                  }
                } },

              action2: _this2.reBuyTicket(it) };

            break;
          case 'ALREADY_COMMENT': // 已经评价
            it.stateModel = {
              orderType: '5',
              stateTip: '已完成',
              time: {
                title: '下单时间：',
                time: it.ord_add_time },

              action1: _this2.reBuyTicket(it),
              action2: {
                title: '',
                show: false,
                action: null } };


            break;
          case 'USE_STATUS_REVOKE': // 退款
            it.stateModel = {
              orderType: '4',
              stateTip: '退款/售后',
              time: {
                title: '下单时间：',
                time: it.ord_add_time },

              action1: _this2.reBuyTicket(it),
              action2: {
                title: '',
                show: false,
                action: null } };


            break;
          case 'USE_STATUS_OVER': // 订单已完结
            it.stateModel = {
              orderType: '9',
              stateTip: '已完成',
              time: {
                title: '下单时间：',
                time: it.ord_add_time },

              action1: _this2.reBuyTicket(it),
              action2: {
                title: '',
                show: false,
                action: null } };


            break;}

      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 80:
/*!***************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Forder%2FOrderInfoPay"} ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _OrderInfoPay = _interopRequireDefault(__webpack_require__(/*! ./pages/order/OrderInfoPay.vue */ 81));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_OrderInfoPay.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 88:
/*!*****************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Forder%2FOrderPayResult"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _OrderPayResult = _interopRequireDefault(__webpack_require__(/*! ./pages/order/OrderPayResult.vue */ 89));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_OrderPayResult.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 96:
/*!**************************************************************************************************!*\
  !*** /Users/lf/Desktop/ydk-project/wx-small-shop/main.js?{"page":"pages%2Fscenic%2FScenicList"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ScenicList = _interopRequireDefault(__webpack_require__(/*! ./pages/scenic/ScenicList.vue */ 97));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_ScenicList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map