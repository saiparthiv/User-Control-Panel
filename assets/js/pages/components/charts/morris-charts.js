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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/charts/morris-charts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/charts/morris-charts.js":
/*!*****************************************************************!*\
  !*** ../src/assets/js/pages/components/charts/morris-charts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// Class definition\r\nvar KTMorrisChartsDemo = function() {\r\n\r\n    // Private functions\r\n    \r\n    var demo1 = function() {\r\n        // LINE CHART\r\n        new Morris.Line({\r\n            // ID of the element in which to draw the chart.\r\n            element: 'kt_morris_1',\r\n            // Chart data records -- each entry in this array corresponds to a point on\r\n            // the chart.\r\n            data: [{\r\n                    y: '2006',\r\n                    a: 100,\r\n                    b: 90\r\n                },\r\n                {\r\n                    y: '2007',\r\n                    a: 75,\r\n                    b: 65\r\n                },\r\n                {\r\n                    y: '2008',\r\n                    a: 50,\r\n                    b: 40\r\n                },\r\n                {\r\n                    y: '2009',\r\n                    a: 75,\r\n                    b: 65\r\n                },\r\n                {\r\n                    y: '2010',\r\n                    a: 50,\r\n                    b: 40\r\n                },\r\n                {\r\n                    y: '2011',\r\n                    a: 75,\r\n                    b: 65\r\n                },\r\n                {\r\n                    y: '2012',\r\n                    a: 100,\r\n                    b: 90\r\n                }\r\n            ],\r\n            // The name of the data record attribute that contains x-values.\r\n            xkey: 'y',\r\n            // A list of names of data record attributes that contain y-values.\r\n            ykeys: ['a', 'b'],\r\n            // Labels for the ykeys -- will be displayed when you hover over the\r\n            // chart.\r\n            labels: ['Values A', 'Values B'],\r\n            lineColors: ['#6e4ff5', '#f6aa33']\r\n        });\r\n    }\r\n\r\n    var demo2 = function() {\r\n        // AREA CHART\r\n        new Morris.Area({\r\n            element: 'kt_morris_2',\r\n            data: [{\r\n                    y: '2006',\r\n                    a: 100,\r\n                    b: 90\r\n                },\r\n                {\r\n                    y: '2007',\r\n                    a: 75,\r\n                    b: 65\r\n                },\r\n                {\r\n                    y: '2008',\r\n                    a: 50,\r\n                    b: 40\r\n                },\r\n                {\r\n                    y: '2009',\r\n                    a: 75,\r\n                    b: 65\r\n                },\r\n                {\r\n                    y: '2010',\r\n                    a: 50,\r\n                    b: 40\r\n                },\r\n                {\r\n                    y: '2011',\r\n                    a: 75,\r\n                    b: 65\r\n                },\r\n                {\r\n                    y: '2012',\r\n                    a: 100,\r\n                    b: 90\r\n                }\r\n            ],\r\n            xkey: 'y',\r\n            ykeys: ['a', 'b'],\r\n            labels: ['Series A', 'Series B'],\r\n            lineColors: ['#de1f78', '#c7d2e7'],\r\n            pointFillColors: ['#fe3995','#e6e9f0']\r\n        });\r\n    }\r\n\r\n    var demo3 = function() {\r\n        // BAR CHART\r\n        new Morris.Bar({\r\n            element: 'kt_morris_3',\r\n            data: [{\r\n                    y: '2006',\r\n                    a: 100,\r\n                    b: 90\r\n                },\r\n                {\r\n                    y: '2007',\r\n                    a: 75,\r\n                    b: 65\r\n                },\r\n                {\r\n                    y: '2008',\r\n                    a: 50,\r\n                    b: 40\r\n                },\r\n                {\r\n                    y: '2009',\r\n                    a: 75,\r\n                    b: 65\r\n                },\r\n                {\r\n                    y: '2010',\r\n                    a: 50,\r\n                    b: 40\r\n                },\r\n                {\r\n                    y: '2011',\r\n                    a: 75,\r\n                    b: 65\r\n                },\r\n                {\r\n                    y: '2012',\r\n                    a: 100,\r\n                    b: 90\r\n                }\r\n            ],\r\n            xkey: 'y',\r\n            ykeys: ['a', 'b'],\r\n            labels: ['Series A', 'Series B'],\r\n            barColors: ['#2abe81', '#24a5ff']\r\n        });\r\n    }\r\n\r\n    var demo4 = function() {\r\n        // PIE CHART\r\n        new Morris.Donut({\r\n            element: 'kt_morris_4',\r\n            data: [{\r\n                    label: \"Download Sales\",\r\n                    value: 12\r\n                },\r\n                {\r\n                    label: \"In-Store Sales\",\r\n                    value: 30\r\n                },\r\n                {\r\n                    label: \"Mail-Order Sales\",\r\n                    value: 20\r\n\r\n                }\r\n            ],\r\n            colors: ['#593ae1', '#6e4ff5', '#9077fb']\r\n        });\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            demo1();\r\n            demo2();\r\n            demo3();\r\n            demo4();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTMorrisChartsDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/charts/morris-charts.js?");

/***/ })

/******/ });