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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/charts/google-charts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/charts/google-charts.js":
/*!*****************************************************************!*\
  !*** ../src/assets/js/pages/components/charts/google-charts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// Class definition\r\nvar KTGoogleChartsDemo = function() {\r\n\r\n    // Private functions\r\n\r\n    var main = function() {\r\n        // GOOGLE CHARTS INIT\r\n        google.load('visualization', '1', {\r\n            packages: ['corechart', 'bar', 'line']\r\n        });\r\n\r\n        google.setOnLoadCallback(function() {\r\n            KTGoogleChartsDemo.runDemos();\r\n        });\r\n    }\r\n\r\n    var demoColumnCharts = function() {\r\n        // COLUMN CHART\r\n        var data = new google.visualization.DataTable();\r\n        data.addColumn('timeofday', 'Time of Day');\r\n        data.addColumn('number', 'Motivation Level');\r\n        data.addColumn('number', 'Energy Level');\r\n\r\n        data.addRows([\r\n            [{\r\n                v: [8, 0, 0],\r\n                f: '8 am'\r\n            }, 1, .25],\r\n            [{\r\n                v: [9, 0, 0],\r\n                f: '9 am'\r\n            }, 2, .5],\r\n            [{\r\n                v: [10, 0, 0],\r\n                f: '10 am'\r\n            }, 3, 1],\r\n            [{\r\n                v: [11, 0, 0],\r\n                f: '11 am'\r\n            }, 4, 2.25],\r\n            [{\r\n                v: [12, 0, 0],\r\n                f: '12 pm'\r\n            }, 5, 2.25],\r\n            [{\r\n                v: [13, 0, 0],\r\n                f: '1 pm'\r\n            }, 6, 3],\r\n            [{\r\n                v: [14, 0, 0],\r\n                f: '2 pm'\r\n            }, 7, 4],\r\n            [{\r\n                v: [15, 0, 0],\r\n                f: '3 pm'\r\n            }, 8, 5.25],\r\n            [{\r\n                v: [16, 0, 0],\r\n                f: '4 pm'\r\n            }, 9, 7.5],\r\n            [{\r\n                v: [17, 0, 0],\r\n                f: '5 pm'\r\n            }, 10, 10],\r\n        ]);\r\n\r\n        var options = {\r\n            title: 'Motivation and Energy Level Throughout the Day',\r\n            focusTarget: 'category',\r\n            hAxis: {\r\n                title: 'Time of Day',\r\n                format: 'h:mm a',\r\n                viewWindow: {\r\n                    min: [7, 30, 0],\r\n                    max: [17, 30, 0]\r\n                },\r\n            },\r\n            vAxis: {\r\n                title: 'Rating (scale of 1-10)'\r\n            },\r\n            colors: ['#6e4ff5', '#fe3995']\r\n        };\r\n\r\n        var chart = new google.visualization.ColumnChart(document.getElementById('kt_gchart_1'));\r\n        chart.draw(data, options);\r\n\r\n        var chart = new google.visualization.ColumnChart(document.getElementById('kt_gchart_2'));\r\n        chart.draw(data, options);\r\n    }\r\n\r\n    var demoPieCharts = function() {\r\n        var data = google.visualization.arrayToDataTable([\r\n            ['Task', 'Hours per Day'],\r\n            ['Work', 11],\r\n            ['Eat', 2],\r\n            ['Commute', 2],\r\n            ['Watch TV', 2],\r\n            ['Sleep', 7]\r\n        ]);\r\n\r\n        var options = {\r\n            title: 'My Daily Activities',\r\n            colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']\r\n        };\r\n\r\n        var chart = new google.visualization.PieChart(document.getElementById('kt_gchart_3'));\r\n        chart.draw(data, options);\r\n\r\n        var options = {\r\n            pieHole: 0.4,\r\n            colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']\r\n        };\r\n\r\n        var chart = new google.visualization.PieChart(document.getElementById('kt_gchart_4'));\r\n        chart.draw(data, options);\r\n    }    \r\n\r\n    var demoLineCharts = function() {\r\n        // LINE CHART\r\n        var data = new google.visualization.DataTable();\r\n        data.addColumn('number', 'Day');\r\n        data.addColumn('number', 'Guardians of the Galaxy');\r\n        data.addColumn('number', 'The Avengers');\r\n        data.addColumn('number', 'Transformers: Age of Extinction');\r\n\r\n        data.addRows([\r\n            [1, 37.8, 80.8, 41.8],\r\n            [2, 30.9, 69.5, 32.4],\r\n            [3, 25.4, 57, 25.7],\r\n            [4, 11.7, 18.8, 10.5],\r\n            [5, 11.9, 17.6, 10.4],\r\n            [6, 8.8, 13.6, 7.7],\r\n            [7, 7.6, 12.3, 9.6],\r\n            [8, 12.3, 29.2, 10.6],\r\n            [9, 16.9, 42.9, 14.8],\r\n            [10, 12.8, 30.9, 11.6],\r\n            [11, 5.3, 7.9, 4.7],\r\n            [12, 6.6, 8.4, 5.2],\r\n            [13, 4.8, 6.3, 3.6],\r\n            [14, 4.2, 6.2, 3.4]\r\n        ]);\r\n\r\n        var options = {\r\n            chart: {\r\n                title: 'Box Office Earnings in First Two Weeks of Opening',\r\n                subtitle: 'in millions of dollars (USD)'\r\n            },\r\n            colors: ['#6e4ff5', '#f6aa33', '#fe3995']\r\n        };\r\n\r\n        var chart = new google.charts.Line(document.getElementById('kt_gchart_5'));\r\n        chart.draw(data, options);\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            main();\r\n        },\r\n\r\n        runDemos: function() {\r\n            demoColumnCharts();\r\n            demoLineCharts();\r\n            demoPieCharts();\r\n        }\r\n    };\r\n}();\r\n\r\nKTGoogleChartsDemo.init();\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/charts/google-charts.js?");

/***/ })

/******/ });