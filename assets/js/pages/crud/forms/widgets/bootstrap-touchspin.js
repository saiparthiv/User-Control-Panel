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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/bootstrap-touchspin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/bootstrap-touchspin.js":
/*!************************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/bootstrap-touchspin.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// Class definition\r\nvar KTKBootstrapTouchspin = function() {\r\n\r\n    // Private functions\r\n    var demos = function() {\r\n        // minimum setup\r\n        $('#kt_touchspin_1, #kt_touchspin_2_1').TouchSpin({\r\n            buttondown_class: 'btn btn-secondary',\r\n            buttonup_class: 'btn btn-secondary',\r\n\r\n            min: 0,\r\n            max: 100,\r\n            step: 0.1,\r\n            decimals: 2,\r\n            boostat: 5,\r\n            maxboostedstep: 10,\r\n        });\r\n\r\n        // with prefix\r\n        $('#kt_touchspin_2, #kt_touchspin_2_2').TouchSpin({\r\n            buttondown_class: 'btn btn-secondary',\r\n            buttonup_class: 'btn btn-secondary',\r\n\r\n            min: -1000000000,\r\n            max: 1000000000,\r\n            stepinterval: 50,\r\n            maxboostedstep: 10000000,\r\n            prefix: '$'\r\n        });\r\n\r\n        // vertical button alignment:\r\n        $('#kt_touchspin_3, #kt_touchspin_2_3').TouchSpin({\r\n            buttondown_class: 'btn btn-secondary',\r\n            buttonup_class: 'btn btn-secondary',\r\n\r\n            min: -1000000000,\r\n            max: 1000000000,\r\n            stepinterval: 50,\r\n            maxboostedstep: 10000000,\r\n            postfix: '$'\r\n        });\r\n\r\n        // vertical buttons with custom icons:\r\n        $('#kt_touchspin_4, #kt_touchspin_2_4').TouchSpin({\r\n            buttondown_class: 'btn btn-secondary',\r\n            buttonup_class: 'btn btn-secondary',\r\n            verticalbuttons: true,\r\n            verticalup: '<i class=\"la la-plus\"></i>',\r\n            verticaldown: '<i class=\"la la-minus\"></i>'\r\n        });\r\n\r\n        // vertical buttons with custom icons:\r\n        $('#kt_touchspin_5, #kt_touchspin_2_5').TouchSpin({\r\n            buttondown_class: 'btn btn-secondary',\r\n            buttonup_class: 'btn btn-secondary',\r\n            verticalbuttons: true,\r\n            verticalup: '<i class=\"la la-angle-up\"></i>',\r\n            verticaldown: '<i class=\"la la-angle-down\"></i>'\r\n        });\r\n    }\r\n\r\n    var validationStateDemos = function() {\r\n        // validation state demos\r\n        $('#kt_touchspin_1_validate').TouchSpin({\r\n            buttondown_class: 'btn btn-secondary',\r\n            buttonup_class: 'btn btn-secondary',\r\n\r\n            min: -1000000000,\r\n            max: 1000000000,\r\n            stepinterval: 50,\r\n            maxboostedstep: 10000000,\r\n            prefix: '$'\r\n        });\r\n\r\n        // vertical buttons with custom icons:\r\n        $('#kt_touchspin_2_validate').TouchSpin({\r\n            buttondown_class: 'btn btn-secondary',\r\n            buttonup_class: 'btn btn-secondary',\r\n\r\n            min: 0,\r\n            max: 100,\r\n            step: 0.1,\r\n            decimals: 2,\r\n            boostat: 5,\r\n            maxboostedstep: 10,\r\n        });\r\n\r\n        $('#kt_touchspin_3_validate').TouchSpin({\r\n            buttondown_class: 'btn btn-secondary',\r\n            buttonup_class: 'btn btn-secondary',\r\n            verticalbuttons: true,\r\n            verticalupclass: 'la la-plus',\r\n            verticaldownclass: 'la la-minus'\r\n        });\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            demos();\r\n            validationStateDemos();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTKBootstrapTouchspin.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/bootstrap-touchspin.js?");

/***/ })

/******/ });