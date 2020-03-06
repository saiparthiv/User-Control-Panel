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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/editors/quill.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/editors/quill.js":
/*!**********************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/editors/quill.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\r\nvar KTQuilDemos = function() {\r\n\r\n    // Private functions\r\n    var demo1 = function() {\r\n        var quill = new Quill('#kt_quil_1', {\r\n            modules: {\r\n                toolbar: [\r\n                    [{\r\n                        header: [1, 2, false]\r\n                    }],\r\n                    ['bold', 'italic', 'underline'],\r\n                    ['image', 'code-block']\r\n                ]\r\n            },\r\n            placeholder: 'Type your text here...',\r\n            theme: 'snow' // or 'bubble'\r\n        });\r\n    }\r\n\r\n    var demo2 = function() {\r\n        var Delta = Quill.import('delta');\r\n        var quill = new Quill('#kt_quil_2', {\r\n            modules: {\r\n                toolbar: true\r\n            },\r\n            placeholder: 'Type your text here...',\r\n            theme: 'snow'\r\n        });\r\n\r\n        // Store accumulated changes\r\n        var change = new Delta();\r\n        quill.on('text-change', function(delta) {\r\n            change = change.compose(delta);\r\n        });\r\n\r\n        // Save periodically\r\n        setInterval(function() {\r\n            if (change.length() > 0) {\r\n                console.log('Saving changes', change);\r\n                /*\r\n                Send partial changes\r\n                $.post('/your-endpoint', {\r\n                  partial: JSON.stringify(change)\r\n                });\r\n\r\n                Send entire document\r\n                $.post('/your-endpoint', {\r\n                  doc: JSON.stringify(quill.getContents())\r\n                });\r\n                */\r\n                change = new Delta();\r\n            }\r\n        }, 5 * 1000);\r\n\r\n        // Check for unsaved data\r\n        window.onbeforeunload = function() {\r\n            if (change.length() > 0) {\r\n                return 'There are unsaved changes. Are you sure you want to leave?';\r\n            }\r\n        }\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            demo1();\r\n            demo2();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTQuilDemos.init();\r\n});\r\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/editors/quill.js?");

/***/ })

/******/ });