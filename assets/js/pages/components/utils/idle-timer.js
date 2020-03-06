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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/utils/idle-timer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/utils/idle-timer.js":
/*!*************************************************************!*\
  !*** ../src/assets/js/pages/components/utils/idle-timer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar KTIdleTimerDemo = function() {\r\n\r\n    var demo1 = function() {\r\n        //Define default\r\n        var\r\n            docTimeout = 5000;\r\n\r\n        /*\r\n        Handle raised idle/active events\r\n        */\r\n        $(document).on(\"idle.idleTimer\", function(event, elem, obj) {\r\n            $(\"#docStatus\")\r\n                .val(function(i, v) {\r\n                    return v + \"Idle @ \" + moment().format() + \" \\n\";\r\n                })\r\n                .removeClass(\"alert-success\")\r\n                .addClass(\"alert-warning\")\r\n                .scrollTop($('#docStatus')[0].scrollHeight);\r\n        });\r\n        $(document).on(\"active.idleTimer\", function(event, elem, obj, e) {\r\n            $('#docStatus')\r\n                .val(function(i, v) {\r\n                    return v + \"Active [\" + e.type + \"] [\" + e.target.nodeName + \"] @ \" + moment().format() + \" \\n\";\r\n                })\r\n                .addClass(\"alert-success\")\r\n                .removeClass(\"alert-warning\")\r\n                .scrollTop($('#docStatus')[0].scrollHeight);\r\n        });\r\n\r\n        /*\r\n        Handle button events\r\n        */\r\n        $(\"#btPause\").click(function() {\r\n            $(document).idleTimer(\"pause\");\r\n            $('#docStatus')\r\n                .val(function(i, v) {\r\n                    return v + \"Paused @ \" + moment().format() + \" \\n\";\r\n                })\r\n                .scrollTop($('#docStatus')[0].scrollHeight);\r\n            $(this).blur();\r\n            return false;\r\n        });\r\n        $(\"#btResume\").click(function() {\r\n            $(document).idleTimer(\"resume\");\r\n            $('#docStatus')\r\n                .val(function(i, v) {\r\n                    return v + \"Resumed @ \" + moment().format() + \" \\n\";\r\n                })\r\n                .scrollTop($('#docStatus')[0].scrollHeight);\r\n            $(this).blur();\r\n            return false;\r\n        });\r\n        $(\"#btElapsed\").click(function() {\r\n            $('#docStatus')\r\n                .val(function(i, v) {\r\n                    return v + \"Elapsed (since becoming active): \" + $(document).idleTimer(\"getElapsedTime\") + \" \\n\";\r\n                })\r\n                .scrollTop($('#docStatus')[0].scrollHeight);\r\n            $(this).blur();\r\n            return false;\r\n        });\r\n        $(\"#btDestroy\").click(function() {\r\n            $(document).idleTimer(\"destroy\");\r\n            $('#docStatus')\r\n                .val(function(i, v) {\r\n                    return v + \"Destroyed: @ \" + moment().format() + \" \\n\";\r\n                })\r\n                .removeClass(\"alert-success\")\r\n                .removeClass(\"alert-warning\")\r\n                .scrollTop($('#docStatus')[0].scrollHeight);\r\n            $(this).blur();\r\n            return false;\r\n        });\r\n        $(\"#btInit\").click(function() {\r\n            // for demo purposes show init with just object\r\n            $(document).idleTimer({\r\n                timeout: docTimeout\r\n            });\r\n            $('#docStatus')\r\n                .val(function(i, v) {\r\n                    return v + \"Init: @ \" + moment().format() + \" \\n\";\r\n                })\r\n                .scrollTop($('#docStatus')[0].scrollHeight);\r\n\r\n            //Apply classes for default state\r\n            if ($(document).idleTimer(\"isIdle\")) {\r\n                $('#docStatus')\r\n                    .removeClass(\"alert-success\")\r\n                    .addClass(\"alert-warning\");\r\n            } else {\r\n                $('#docStatus')\r\n                    .addClass(\"alert-success\")\r\n                    .removeClass(\"alert-warning\");\r\n            }\r\n            $(this).blur();\r\n            return false;\r\n        });\r\n\r\n        //Clear old statuses\r\n        $('#docStatus').val('');\r\n\r\n        //Start timeout, passing no options\r\n        //Same as $.idleTimer(docTimeout, docOptions);\r\n        $(document).idleTimer(docTimeout);\r\n\r\n        //For demo purposes, style based on initial state\r\n        if ($(document).idleTimer(\"isIdle\")) {\r\n            $(\"#docStatus\")\r\n                .val(function(i, v) {\r\n                    return v + \"Initial Idle State @ \" + moment().format() + \" \\n\";\r\n                })\r\n                .removeClass(\"alert-success\")\r\n                .addClass(\"alert-warning\")\r\n                .scrollTop($('#docStatus')[0].scrollHeight);\r\n        } else {\r\n            $('#docStatus')\r\n                .val(function(i, v) {\r\n                    return v + \"Initial Active State @ \" + moment().format() + \" \\n\";\r\n                })\r\n                .addClass(\"alert-success\")\r\n                .removeClass(\"alert-warning\")\r\n                .scrollTop($('#docStatus')[0].scrollHeight);\r\n        }\r\n\r\n\r\n        //For demo purposes, display the actual timeout on the page\r\n        $('#docTimeout').text(docTimeout / 1000);\r\n\r\n    }\r\n\r\n    var demo2 = function() {\r\n        //Define textarea settings\r\n        var\r\n            taTimeout = 3000;\r\n\r\n        /*\r\n        Handle raised idle/active events\r\n        */\r\n        $('#elStatus').on(\"idle.idleTimer\", function(event, elem, obj) {\r\n            //If you dont stop propagation it will bubble up to document event handler\r\n            event.stopPropagation();\r\n\r\n            $('#elStatus')\r\n                .val(function(i, v) {\r\n                    return v + \"Idle @ \" + moment().format() + \" \\n\";\r\n                })\r\n                .removeClass(\"alert-success\")\r\n                .addClass(\"alert-warning\")\r\n                .scrollTop($('#elStatus')[0].scrollHeight);\r\n\r\n        });\r\n        $('#elStatus').on(\"active.idleTimer\", function(event) {\r\n            //If you dont stop propagation it will bubble up to document event handler\r\n            event.stopPropagation();\r\n\r\n            $('#elStatus')\r\n                .val(function(i, v) {\r\n                    return v + \"Active @ \" + moment().format() + \" \\n\";\r\n                })\r\n                .addClass(\"alert-success\")\r\n                .removeClass(\"alert-warning\")\r\n                .scrollTop($('#elStatus')[0].scrollHeight);\r\n        });\r\n\r\n        /*\r\n        Handle button events\r\n        */\r\n        $(\"#btReset\").click(function() {\r\n            $('#elStatus')\r\n                .idleTimer(\"reset\")\r\n                .val(function(i, v) {\r\n                    return v + \"Reset @ \" + moment().format() + \" \\n\";\r\n                })\r\n                .scrollTop($('#elStatus')[0].scrollHeight);\r\n\r\n            //Apply classes for default state\r\n            if ($(\"#elStatus\").idleTimer(\"isIdle\")) {\r\n                $('#elStatus')\r\n                    .removeClass(\"alert-success\")\r\n                    .addClass(\"alert-warning\");\r\n            } else {\r\n                $('#elStatus')\r\n                    .addClass(\"alert-success\")\r\n                    .removeClass(\"alert-warning\");\r\n            }\r\n            $(this).blur();\r\n            return false;\r\n        });\r\n        $(\"#btRemaining\").click(function() {\r\n            $('#elStatus')\r\n                .val(function(i, v) {\r\n                    return v + \"Remaining: \" + $(\"#elStatus\").idleTimer(\"getRemainingTime\") + \" \\n\";\r\n                })\r\n                .scrollTop($('#elStatus')[0].scrollHeight);\r\n            $(this).blur();\r\n            return false;\r\n        });\r\n        $(\"#btLastActive\").click(function() {\r\n            $('#elStatus')\r\n                .val(function(i, v) {\r\n                    return v + \"LastActive: \" + $(\"#elStatus\").idleTimer(\"getLastActiveTime\") + \" \\n\";\r\n                })\r\n                .scrollTop($('#elStatus')[0].scrollHeight);\r\n            $(this).blur();\r\n            return false;\r\n        });\r\n        $(\"#btState\").click(function() {\r\n            $('#elStatus')\r\n                .val(function(i, v) {\r\n                    return v + \"State: \" + ($(\"#elStatus\").idleTimer(\"isIdle\") ? \"idle\" : \"active\") + \" \\n\";\r\n                })\r\n                .scrollTop($('#elStatus')[0].scrollHeight);\r\n            $(this).blur();\r\n            return false;\r\n        });\r\n\r\n        //Clear value if there was one cached & start time\r\n        $('#elStatus').val('').idleTimer(taTimeout);\r\n\r\n        //For demo purposes, show initial state\r\n        if ($(\"#elStatus\").idleTimer(\"isIdle\")) {\r\n            $(\"#elStatus\")\r\n                .val(function(i, v) {\r\n                    return v + \"Initial Idle @ \" + moment().format() + \" \\n\";\r\n                })\r\n                .removeClass(\"alert-success\")\r\n                .addClass(\"alert-warning\")\r\n                .scrollTop($('#elStatus')[0].scrollHeight);\r\n        } else {\r\n            $('#elStatus')\r\n                .val(function(i, v) {\r\n                    return v + \"Initial Active @ \" + moment().format() + \" \\n\";\r\n                })\r\n                .addClass(\"alert-success\")\r\n                .removeClass(\"alert-warning\")\r\n                .scrollTop($('#elStatus')[0].scrollHeight);\r\n        }\r\n\r\n        // Display the actual timeout on the page\r\n        $('#elTimeout').text(taTimeout / 1000);\r\n\r\n    }\r\n\r\n    return {\r\n        //main function to initiate the module\r\n        init: function() {\r\n            demo1();\r\n            demo2();\r\n        }\r\n    };\r\n\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTIdleTimerDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/utils/idle-timer.js?");

/***/ })

/******/ });