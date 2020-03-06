/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/chat/chat.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/chat/chat.js":
/*!**************************************************!*\
  !*** ../src/assets/js/pages/custom/chat/chat.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class definition\r\nvar KTAppChat = function () {\r\n\tvar chatAsideEl;\r\n\tvar chatContentEl;\r\n\r\n\t// Private functions\r\n\tvar initAside = function () {\r\n\t\t// Mobile offcanvas for mobile mode\r\n\t\tvar offcanvas = new KTOffcanvas(chatAsideEl, {\r\n            overlay: true,  \r\n            baseClass: 'kt-app__aside',\r\n            closeBy: 'kt_chat_aside_close',\r\n            toggleBy: 'kt_chat_aside_mobile_toggle'\r\n        }); \r\n\r\n\t\t// User listing \r\n\t\tvar userListEl = KTUtil.find(chatAsideEl, '.kt-scroll');\r\n\t\tif (!userListEl) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t// Initialize perfect scrollbar(see:  https://github.com/utatti/perfect-scrollbar) \r\n\t\tKTUtil.scrollInit(userListEl, {\r\n\t\t\tmobileNativeScroll: true,  // enable native scroll for mobile\r\n\t\t\tdesktopNativeScroll: false, // disable native scroll and use custom scroll for desktop \r\n\t\t\tresetHeightOnDestroy: true,  // reset css height on scroll feature destroyed\r\n\t\t\thandleWindowResize: true, // recalculate hight on window resize\r\n\t\t\trememberPosition: true, // remember scroll position in cookie\r\n\t\t\theight: function() {  // calculate height\r\n\t\t\t\tvar height;\r\n\t\t\t\tvar portletBodyEl = KTUtil.find(chatAsideEl, '.kt-portlet > .kt-portlet__body');\r\n\t\t\t\tvar widgetEl = KTUtil.find(chatAsideEl, '.kt-widget.kt-widget--users');\r\n\t\t\t\tvar searchbarEl = KTUtil.find(chatAsideEl, '.kt-searchbar');\r\n\r\n\t\t\t\tif (KTUtil.isInResponsiveRange('desktop')) {\r\n\t\t\t\t\theight = KTLayout.getContentHeight();\r\n\t\t\t\t} else {\r\n\t\t\t\t\theight = KTUtil.getViewPort().height;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (chatAsideEl) {\r\n\t\t\t\t\theight = height - parseInt(KTUtil.css(chatAsideEl, 'margin-top')) - parseInt(KTUtil.css(chatAsideEl, 'margin-bottom'));\r\n\t\t\t\t\theight = height - parseInt(KTUtil.css(chatAsideEl, 'padding-top')) - parseInt(KTUtil.css(chatAsideEl, 'padding-bottom'));\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (widgetEl) {\r\n\t\t\t\t\theight = height - parseInt(KTUtil.css(widgetEl, 'margin-top')) - parseInt(KTUtil.css(widgetEl, 'margin-bottom'));\r\n\t\t\t\t\theight = height - parseInt(KTUtil.css(widgetEl, 'padding-top')) - parseInt(KTUtil.css(widgetEl, 'padding-bottom'));\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (portletBodyEl) {\r\n\t\t\t\t\theight = height - parseInt(KTUtil.css(portletBodyEl, 'margin-top')) - parseInt(KTUtil.css(portletBodyEl, 'margin-bottom'));\r\n\t\t\t\t\theight = height - parseInt(KTUtil.css(portletBodyEl, 'padding-top')) - parseInt(KTUtil.css(portletBodyEl, 'padding-bottom'));\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (searchbarEl) {\r\n\t\t\t\t\theight = height - parseInt(KTUtil.css(searchbarEl, 'height'));\r\n\t\t\t\t\theight = height - parseInt(KTUtil.css(searchbarEl, 'margin-top')) - parseInt(KTUtil.css(searchbarEl, 'margin-bottom'));\r\n\t\t\t\t}\r\n\r\n\t\t\t\t// remove additional space\r\n\t\t\t\theight = height - 5;\r\n\t\t\t\t\r\n\t\t\t\treturn height;\r\n\t\t\t} \r\n\t\t});\r\n\t}\r\n\r\n\treturn {\r\n\t\t// public functions\r\n\t\tinit: function() {\r\n\t\t\t// elements\r\n\t\t\tchatAsideEl = KTUtil.getByID('kt_chat_aside');\r\n\r\n\t\t\t// init aside and user list\r\n\t\t\tinitAside();\r\n\r\n\t\t\t// init inline chat example\r\n\t\t\tKTChat.setup(KTUtil.getByID('kt_chat_content'));\r\n\r\n\t\t\t// trigger click to show popup modal chat on page load\r\n\t\t\tif (KTUtil.getByID('kt_app_chat_launch_btn')) {\r\n\t\t\t\tsetTimeout(function() {\r\n\t\t\t\t\tKTUtil.getByID('kt_app_chat_launch_btn').click();\r\n\t\t\t\t}, 1000);\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n}();\r\n\r\nKTUtil.ready(function() {\t\r\n\tKTAppChat.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/chat/chat.js?");

/***/ })

/******/ });