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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/bootstrap-daterangepicker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/bootstrap-daterangepicker.js":
/*!******************************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/bootstrap-daterangepicker.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\r\n\r\nvar KTBootstrapDaterangepicker = function () {\r\n    \r\n    // Private functions\r\n    var demos = function () {\r\n        // minimum setup\r\n        $('#kt_daterangepicker_1, #kt_daterangepicker_1_modal').daterangepicker({\r\n            buttonClasses: ' btn',\r\n            applyClass: 'btn-primary',\r\n            cancelClass: 'btn-secondary'\r\n        });\r\n\r\n        // input group and left alignment setup\r\n        $('#kt_daterangepicker_2').daterangepicker({\r\n            buttonClasses: ' btn',\r\n            applyClass: 'btn-primary',\r\n            cancelClass: 'btn-secondary'\r\n        }, function(start, end, label) {\r\n            $('#kt_daterangepicker_2 .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\r\n        });\r\n\r\n         $('#kt_daterangepicker_2_modal').daterangepicker({\r\n            buttonClasses: ' btn',\r\n            applyClass: 'btn-primary',\r\n            cancelClass: 'btn-secondary'\r\n        }, function(start, end, label) {\r\n            $('#kt_daterangepicker_2 .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\r\n        });\r\n\r\n        // left alignment setup\r\n        $('#kt_daterangepicker_3').daterangepicker({\r\n            buttonClasses: ' btn',\r\n            applyClass: 'btn-primary',\r\n            cancelClass: 'btn-secondary'\r\n        }, function(start, end, label) {\r\n            $('#kt_daterangepicker_3 .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\r\n        });\r\n\r\n        $('#kt_daterangepicker_3_modal').daterangepicker({\r\n            buttonClasses: ' btn',\r\n            applyClass: 'btn-primary',\r\n            cancelClass: 'btn-secondary'\r\n        }, function(start, end, label) {\r\n            $('#kt_daterangepicker_3 .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\r\n        });\r\n\r\n\r\n        // date & time\r\n        $('#kt_daterangepicker_4').daterangepicker({\r\n            buttonClasses: ' btn',\r\n            applyClass: 'btn-primary',\r\n            cancelClass: 'btn-secondary',\r\n\r\n            timePicker: true,\r\n            timePickerIncrement: 30,\r\n            locale: {\r\n                format: 'MM/DD/YYYY h:mm A'\r\n            }\r\n        }, function(start, end, label) {\r\n            $('#kt_daterangepicker_4 .form-control').val( start.format('MM/DD/YYYY h:mm A') + ' / ' + end.format('MM/DD/YYYY h:mm A'));\r\n        });\r\n\r\n        // date picker\r\n        $('#kt_daterangepicker_5').daterangepicker({\r\n            buttonClasses: ' btn',\r\n            applyClass: 'btn-primary',\r\n            cancelClass: 'btn-secondary',\r\n\r\n            singleDatePicker: true,\r\n            showDropdowns: true,\r\n            locale: {\r\n                format: 'MM/DD/YYYY'\r\n            }\r\n        }, function(start, end, label) {\r\n            $('#kt_daterangepicker_5 .form-control').val( start.format('MM/DD/YYYY') + ' / ' + end.format('MM/DD/YYYY'));\r\n        });\r\n\r\n        // predefined ranges\r\n        var start = moment().subtract(29, 'days');\r\n        var end = moment();\r\n\r\n        $('#kt_daterangepicker_6').daterangepicker({\r\n            buttonClasses: ' btn',\r\n            applyClass: 'btn-primary',\r\n            cancelClass: 'btn-secondary',\r\n\r\n            startDate: start,\r\n            endDate: end,\r\n            ranges: {\r\n               'Today': [moment(), moment()],\r\n               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],\r\n               'Last 7 Days': [moment().subtract(6, 'days'), moment()],\r\n               'Last 30 Days': [moment().subtract(29, 'days'), moment()],\r\n               'This Month': [moment().startOf('month'), moment().endOf('month')],\r\n               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]\r\n            }\r\n        }, function(start, end, label) {\r\n            $('#kt_daterangepicker_6 .form-control').val( start.format('MM/DD/YYYY') + ' / ' + end.format('MM/DD/YYYY'));\r\n        });\r\n    }\r\n\r\n    var validationDemos = function() {\r\n        // input group and left alignment setup\r\n        $('#kt_daterangepicker_1_validate').daterangepicker({\r\n            buttonClasses: ' btn',\r\n            applyClass: 'btn-primary',\r\n            cancelClass: 'btn-secondary'\r\n        }, function(start, end, label) {\r\n            $('#kt_daterangepicker_1_validate .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\r\n        });\r\n\r\n        // input group and left alignment setup\r\n        $('#kt_daterangepicker_2_validate').daterangepicker({\r\n            buttonClasses: ' btn',\r\n            applyClass: 'btn-primary',\r\n            cancelClass: 'btn-secondary'\r\n        }, function(start, end, label) {\r\n            $('#kt_daterangepicker_3_validate .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\r\n        });\r\n\r\n        // input group and left alignment setup\r\n        $('#kt_daterangepicker_3_validate').daterangepicker({\r\n            buttonClasses: ' btn',\r\n            applyClass: 'btn-primary',\r\n            cancelClass: 'btn-secondary'\r\n        }, function(start, end, label) {\r\n            $('#kt_daterangepicker_3_validate .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\r\n        });        \r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            demos(); \r\n            validationDemos();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTBootstrapDaterangepicker.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/bootstrap-daterangepicker.js?");

/***/ })

/******/ });