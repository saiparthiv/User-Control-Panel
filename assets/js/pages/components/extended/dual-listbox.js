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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/extended/dual-listbox.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/extended/dual-listbox.js":
/*!******************************************************************!*\
  !*** ../src/assets/js/pages/components/extended/dual-listbox.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class definition\r\nvar KTDualListbox = function () {\r\n\r\n\t// Private functions\r\n\tvar initDualListbox = function () {\r\n        // Dual Listbox\r\n        var listBoxes = $('.kt-dual-listbox');\r\n\r\n        listBoxes.each(function(){\r\n            var $this = $(this);\r\n            var id = '#' + $this.attr('id');\r\n            // get titles\r\n            var availableTitle = ($this.attr('data-available-title') != null) ? $this.attr('data-available-title') : 'Available options';\r\n            var selectedTitle = ($this.attr('data-selected-title') != null) ? $this.attr('data-selected-title') : 'Selected options';\r\n\r\n            // get button labels\r\n            var addLabel = ($this.attr('data-add') != null) ? $this.attr('data-add') : 'Add';\r\n            var removeLabel = ($this.attr('data-remove') != null) ? $this.attr('data-remove') : 'Remove';\r\n            var addAllLabel = ($this.attr('data-add-all') != null) ? $this.attr('data-add-all') : 'Add All';\r\n            var removeAllLabel = ($this.attr('data-remove-all') != null) ? $this.attr('data-remove-all') : 'Remove All';\r\n\r\n            // get options\r\n            var options = [];\r\n            $this.children('option').each(function(){\r\n                var value = $(this).val();\r\n                var label = $(this).text();\r\n                var selected = ($(this).is(':selected')) ? true : false;\r\n                options.push({ text: label, value: value, selected: selected });\r\n\t\t\t}); \r\n\t\t\t\r\n\t\t\t// get search option\r\n\t\t\tvar search = ($this.attr('data-search') != null) ? $this.attr('data-search') : \"\";\r\n\r\n            // init dual listbox\r\n            var dualListBox = new DualListbox(id,{\r\n                addEvent: function(value) {\r\n                    console.log(value);\r\n                },\r\n                removeEvent: function(value) {\r\n                    console.log(value);\r\n                },\r\n                availableTitle: availableTitle,\r\n                selectedTitle: selectedTitle,\r\n                addButtonText: addLabel,\r\n                removeButtonText: removeLabel, \r\n                addAllButtonText: addAllLabel,\r\n                removeAllButtonText: removeAllLabel,\r\n                options: options\r\n\t\t\t});\r\n\t\t\t\r\n\t\t\tif (search == \"false\"){\r\n\t\t\t\tdualListBox.search.classList.add('dual-listbox__search--hidden');\r\n\t\t\t}\r\n        }); \r\n\t}\r\n\r\n\treturn {\r\n\t\t// public functions\r\n\t\tinit: function() {\r\n\t\t\tinitDualListbox();\r\n\t\t}\r\n\t};\r\n}();\r\n\r\nKTUtil.ready(function() {\t\r\n\tKTDualListbox.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/extended/dual-listbox.js?");

/***/ })

/******/ });