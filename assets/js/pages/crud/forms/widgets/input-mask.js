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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/input-mask.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/input-mask.js":
/*!***************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/input-mask.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\r\n\r\nvar KTInputmask = function () {\r\n    \r\n    // Private functions\r\n    var demos = function () {\r\n        // date format\r\n        $(\"#kt_inputmask_1\").inputmask(\"99/99/9999\", {\r\n            \"placeholder\": \"mm/dd/yyyy\",\r\n            autoUnmask: true\r\n        });\r\n\r\n        // custom placeholder        \r\n        $(\"#kt_inputmask_2\").inputmask(\"99/99/9999\", {\r\n            \"placeholder\": \"mm/dd/yyyy\",\r\n        });\r\n        \r\n        // phone number format\r\n        $(\"#kt_inputmask_3\").inputmask(\"mask\", {\r\n            \"mask\": \"(999) 999-9999\"\r\n        }); \r\n\r\n        // empty placeholder\r\n        $(\"#kt_inputmask_4\").inputmask({\r\n            \"mask\": \"99-9999999\",\r\n            placeholder: \"\" // remove underscores from the input mask\r\n        });\r\n\r\n        // repeating mask\r\n        $(\"#kt_inputmask_5\").inputmask({\r\n            \"mask\": \"9\",\r\n            \"repeat\": 10,\r\n            \"greedy\": false\r\n        }); // ~ mask \"9\" or mask \"99\" or ... mask \"9999999999\"\r\n        \r\n        // decimal format\r\n        $(\"#kt_inputmask_6\").inputmask('decimal', {\r\n            rightAlignNumerics: false\r\n        }); \r\n        \r\n        // currency format\r\n        $(\"#kt_inputmask_7\").inputmask('€ 999.999.999,99', {\r\n            numericInput: true\r\n        }); //123456  =>  € ___.__1.234,56\r\n\r\n        //ip address\r\n        $(\"#kt_inputmask_8\").inputmask({\r\n            \"mask\": \"999.999.999.999\"\r\n        });  \r\n\r\n        //email address\r\n        $(\"#kt_inputmask_9\").inputmask({\r\n            mask: \"*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]\",\r\n            greedy: false,\r\n            onBeforePaste: function (pastedValue, opts) {\r\n                pastedValue = pastedValue.toLowerCase();\r\n                return pastedValue.replace(\"mailto:\", \"\");\r\n            },\r\n            definitions: {\r\n                '*': {\r\n                    validator: \"[0-9A-Za-z!#$%&'*+/=?^_`{|}~\\-]\",\r\n                    cardinality: 1,\r\n                    casing: \"lower\"\r\n                }\r\n            }\r\n        });        \r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            demos(); \r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTInputmask.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/input-mask.js?");

/***/ })

/******/ });