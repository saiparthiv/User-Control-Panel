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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/bootstrap-maxlength.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/bootstrap-maxlength.js":
/*!************************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/bootstrap-maxlength.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\r\n\r\nvar KTBootstrapMaxlength = function () {\r\n    \r\n    // Private functions\r\n    var demos = function () {\r\n        // minimum setup\r\n        $('#kt_maxlength_1').maxlength({\r\n            warningClass: \"kt-badge kt-badge--warning kt-badge--rounded kt-badge--inline\",\r\n            limitReachedClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\"\r\n        });\r\n\r\n        // threshold value\r\n        $('#kt_maxlength_2').maxlength({\r\n            threshold: 5,\r\n            warningClass: \"kt-badge kt-badge--danger kt-badge--rounded kt-badge--inline\",\r\n            limitReachedClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\"\r\n        });\r\n\r\n        // always show\r\n        $('#kt_maxlength_3').maxlength({\r\n            alwaysShow: true,\r\n            threshold: 5,\r\n            warningClass: \"kt-badge kt-badge--primary kt-badge--rounded kt-badge--inline\",\r\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\"\r\n        });\r\n\r\n        // custom text\r\n        $('#kt_maxlength_4').maxlength({\r\n            threshold: 3,\r\n            warningClass: \"kt-badge kt-badge--danger kt-badge--rounded kt-badge--inline\",\r\n            limitReachedClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\",\r\n            separator: ' of ',\r\n            preText: 'You have ',\r\n            postText: ' chars remaining.',\r\n            validate: true\r\n        });\r\n\r\n        // textarea example\r\n        $('#kt_maxlength_5').maxlength({\r\n            threshold: 5,\r\n            warningClass: \"kt-badge kt-badge--primary kt-badge--rounded kt-badge--inline\",\r\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\"\r\n        });\r\n\r\n        // position examples\r\n        $('#kt_maxlength_6_1').maxlength({\r\n            alwaysShow: true,\r\n            threshold: 5,\r\n            placement: 'top-left',\r\n            warningClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\",\r\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\"\r\n        });\r\n\r\n        $('#kt_maxlength_6_2').maxlength({\r\n            alwaysShow: true,\r\n            threshold: 5,\r\n            placement: 'top-right',\r\n            warningClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\",\r\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\"\r\n        });\r\n\r\n        $('#kt_maxlength_6_3').maxlength({\r\n            alwaysShow: true,\r\n            threshold: 5,\r\n            placement: 'bottom-left',\r\n            warningClass: \"kt-badge kt-badge--warning kt-badge--rounded kt-badge--inline\",\r\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\"\r\n        });\r\n\r\n        $('#kt_maxlength_6_4').maxlength({\r\n            alwaysShow: true,\r\n            threshold: 5,\r\n            placement: 'bottom-right',\r\n            warningClass: \"kt-badge kt-badge--danger kt-badge--rounded kt-badge--inline\",\r\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\"\r\n        });\r\n\r\n        // Modal Examples\r\n\r\n        // minimum setup\r\n        $('#kt_maxlength_1_modal').maxlength({\r\n            warningClass: \"kt-badge kt-badge--warning kt-badge--rounded kt-badge--inline\",\r\n            limitReachedClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\",\r\n            appendToParent: true\r\n        });\r\n\r\n        // threshold value\r\n        $('#kt_maxlength_2_modal').maxlength({\r\n            threshold: 5,\r\n            warningClass: \"kt-badge kt-badge--danger kt-badge--rounded kt-badge--inline\",\r\n            limitReachedClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\",\r\n            appendToParent: true\r\n        });\r\n\r\n        // always show\r\n        // textarea example\r\n        $('#kt_maxlength_5_modal').maxlength({\r\n            threshold: 5,\r\n            warningClass: \"kt-badge kt-badge--primary kt-badge--rounded kt-badge--inline\",\r\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\",\r\n            appendToParent: true\r\n        });\r\n\r\n        // custom text\r\n        $('#kt_maxlength_4_modal').maxlength({\r\n            threshold: 3,\r\n            warningClass: \"kt-badge kt-badge--danger kt-badge--rounded kt-badge--inline\",\r\n            limitReachedClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\",\r\n            appendToParent: true,\r\n            separator: ' of ',\r\n            preText: 'You have ',\r\n            postText: ' chars remaining.',\r\n            validate: true\r\n        });\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            demos();  \r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTBootstrapMaxlength.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/bootstrap-maxlength.js?");

/***/ })

/******/ });