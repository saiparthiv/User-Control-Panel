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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/login/login-1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/login/login-1.js":
/*!******************************************************!*\
  !*** ../src/assets/js/pages/custom/login/login-1.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class Definition\r\nvar KTLoginV1 = function () {\r\n\tvar login = $('#kt_login');\r\n\r\n\tvar showErrorMsg = function(form, type, msg) {\r\n        var alert = $('<div class=\"alert alert-bold alert-solid-' + type + ' alert-dismissible\" role=\"alert\">\\\r\n\t\t\t<div class=\"alert-text\">'+msg+'</div>\\\r\n\t\t\t<div class=\"alert-close\">\\\r\n                <i class=\"flaticon2-cross kt-icon-sm\" data-dismiss=\"alert\"></i>\\\r\n            </div>\\\r\n\t\t</div>');\r\n\r\n        form.find('.alert').remove();\r\n        alert.prependTo(form);\r\n        KTUtil.animateClass(alert[0], 'fadeIn animated');\r\n    }\r\n\r\n\t// Private Functions\r\n\tvar handleSignInFormSubmit = function () {\r\n\t\t$('#kt_login_signin_submit').click(function (e) {\r\n\t\t\te.preventDefault();\r\n\r\n\t\t\tvar btn = $(this);\r\n\t\t\tvar form = $('#kt_login_form');\r\n\r\n\t\t\tform.validate({\r\n\t\t\t\trules: {\r\n\t\t\t\t\tusername: {\r\n\t\t\t\t\t\trequired: true\r\n\t\t\t\t\t},\r\n\t\t\t\t\tpassword: {\r\n\t\t\t\t\t\trequired: true\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\tif (!form.valid()) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\tKTApp.progress(btn[0]);\r\n\r\n\t\t\tsetTimeout(function () {\r\n\t\t\t\tKTApp.unprogress(btn[0]);\r\n\t\t\t}, 2000);\r\n\r\n\t\t\t// ajax form submit:  http://jquery.malsup.com/form/\r\n\t\t\tform.ajaxSubmit({\r\n\t\t\t\turl: '',\r\n\t\t\t\tsuccess: function (response, status, xhr, $form) {\r\n\t\t\t\t\t// similate 2s delay\r\n\t\t\t\t\tsetTimeout(function () {\r\n\t\t\t\t\t\tKTApp.unprogress(btn[0]);\r\n\t\t\t\t\t\tshowErrorMsg(form, 'danger', 'Incorrect username or password. Please try again.');\r\n\t\t\t\t\t}, 2000);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t});\r\n\t}\r\n\r\n\t// Public Functions\r\n\treturn {\r\n\t\t// public functions\r\n\t\tinit: function () {\r\n\t\t\thandleSignInFormSubmit();\r\n\t\t}\r\n\t};\r\n}();\r\n\r\n// Class Initialization\r\njQuery(document).ready(function () {\r\n\tKTLoginV1.init();\r\n});\r\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/login/login-1.js?");

/***/ })

/******/ });