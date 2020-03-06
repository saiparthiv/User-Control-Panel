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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/datatables/data-sources/html.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/datatables/data-sources/html.js":
/*!*******************************************************************!*\
  !*** ../src/assets/js/pages/crud/datatables/data-sources/html.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar KTDatatablesDataSourceHtml = function() {\r\n\r\n\tvar initTable1 = function() {\r\n\t\tvar table = $('#kt_table_1');\r\n\r\n\t\t// begin first table\r\n\t\ttable.DataTable({\r\n\t\t\tresponsive: true,\r\n\t\t\tcolumnDefs: [\r\n\t\t\t\t{\r\n\t\t\t\t\ttargets: -1,\r\n\t\t\t\t\ttitle: 'Actions',\r\n\t\t\t\t\torderable: false,\r\n\t\t\t\t\trender: function(data, type, full, meta) {\r\n\t\t\t\t\t\treturn `\r\n                        <span class=\"dropdown\">\r\n                            <a href=\"#\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n                              <i class=\"la la-ellipsis-h\"></i>\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a>\r\n                                <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a>\r\n                                <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-print\"></i> Generate Report</a>\r\n                            </div>\r\n                        </span>\r\n                        <a href=\"#\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" title=\"View\">\r\n                          <i class=\"la la-edit\"></i>\r\n                        </a>`;\r\n\t\t\t\t\t},\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttargets: 8,\r\n\t\t\t\t\trender: function(data, type, full, meta) {\r\n\t\t\t\t\t\tvar status = {\r\n\t\t\t\t\t\t\t1: {'title': 'Pending', 'class': 'kt-badge--brand'},\r\n\t\t\t\t\t\t\t2: {'title': 'Delivered', 'class': ' kt-badge--danger'},\r\n\t\t\t\t\t\t\t3: {'title': 'Canceled', 'class': ' kt-badge--primary'},\r\n\t\t\t\t\t\t\t4: {'title': 'Success', 'class': ' kt-badge--success'},\r\n\t\t\t\t\t\t\t5: {'title': 'Info', 'class': ' kt-badge--info'},\r\n\t\t\t\t\t\t\t6: {'title': 'Danger', 'class': ' kt-badge--danger'},\r\n\t\t\t\t\t\t\t7: {'title': 'Warning', 'class': ' kt-badge--warning'},\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t\tif (typeof status[data] === 'undefined') {\r\n\t\t\t\t\t\t\treturn data;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\treturn '<span class=\"kt-badge ' + status[data].class + ' kt-badge--inline kt-badge--pill\">' + status[data].title + '</span>';\r\n\t\t\t\t\t},\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttargets: 9,\r\n\t\t\t\t\trender: function(data, type, full, meta) {\r\n\t\t\t\t\t\tvar status = {\r\n\t\t\t\t\t\t\t1: {'title': 'Online', 'state': 'danger'},\r\n\t\t\t\t\t\t\t2: {'title': 'Retail', 'state': 'primary'},\r\n\t\t\t\t\t\t\t3: {'title': 'Direct', 'state': 'success'},\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t\tif (typeof status[data] === 'undefined') {\r\n\t\t\t\t\t\t\treturn data;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\treturn '<span class=\"kt-badge kt-badge--' + status[data].state + ' kt-badge--dot\"></span>&nbsp;' +\r\n\t\t\t\t\t\t\t'<span class=\"kt-font-bold kt-font-' + status[data].state + '\">' + status[data].title + '</span>';\r\n\t\t\t\t\t},\r\n\t\t\t\t},\r\n\t\t\t],\r\n\t\t});\r\n\r\n\t};\r\n\r\n\treturn {\r\n\r\n\t\t//main function to initiate the module\r\n\t\tinit: function() {\r\n\t\t\tinitTable1();\r\n\t\t},\r\n\r\n\t};\r\n\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n\tKTDatatablesDataSourceHtml.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/datatables/data-sources/html.js?");

/***/ })

/******/ });