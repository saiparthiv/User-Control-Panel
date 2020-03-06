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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/extended/toastr.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/extended/toastr.js":
/*!************************************************************!*\
  !*** ../src/assets/js/pages/components/extended/toastr.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class definition\r\nvar KTToastrDemo = function() {\r\n\r\n    // Private functions\r\n\r\n    // basic demo\r\n    var demo = function() {\r\n        var i = -1;\r\n        var toastCount = 0;\r\n        var $toastlast;\r\n\r\n        var getMessage = function () {\r\n            var msgs = [\r\n                'New order has been placed!',\r\n                'Are you the six fingered man?',\r\n                'Inconceivable!',\r\n                'I do not think that means what you think it means.',\r\n                'Have fun storming the castle!'\r\n            ];\r\n            i++;\r\n            if (i === msgs.length) {\r\n                i = 0;\r\n            }\r\n\r\n            return msgs[i];\r\n        };\r\n\r\n        var getMessageWithClearButton = function (msg) {\r\n            msg = msg ? msg : 'Clear itself?';\r\n            msg += '<br /><br /><button type=\"button\" class=\"btn btn-outline-light btn-sm--air--wide clear\">Yes</button>';\r\n            return msg;\r\n        };\r\n\r\n        $('#showtoast').click(function () {\r\n            var shortCutFunction = $(\"#toastTypeGroup input:radio:checked\").val();\r\n            var msg = $('#message').val();\r\n            var title = $('#title').val() || '';\r\n            var $showDuration = $('#showDuration');\r\n            var $hideDuration = $('#hideDuration');\r\n            var $timeOut = $('#timeOut');\r\n            var $extendedTimeOut = $('#extendedTimeOut');\r\n            var $showEasing = $('#showEasing');\r\n            var $hideEasing = $('#hideEasing');\r\n            var $showMethod = $('#showMethod');\r\n            var $hideMethod = $('#hideMethod');\r\n            var toastIndex = toastCount++;\r\n            var addClear = $('#addClear').prop('checked');\r\n\r\n            toastr.options = {\r\n                closeButton: $('#closeButton').prop('checked'),\r\n                debug: $('#debugInfo').prop('checked'),\r\n                newestOnTop: $('#newestOnTop').prop('checked'),\r\n                progressBar: $('#progressBar').prop('checked'),\r\n                positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',\r\n                preventDuplicates: $('#preventDuplicates').prop('checked'),\r\n                onclick: null\r\n            };\r\n\r\n            if ($('#addBehaviorOnToastClick').prop('checked')) {\r\n                toastr.options.onclick = function () {\r\n                    alert('You can perform some custom action after a toast goes away');\r\n                };\r\n            }\r\n\r\n            if ($showDuration.val().length) {\r\n                toastr.options.showDuration = $showDuration.val();\r\n            }\r\n\r\n            if ($hideDuration.val().length) {\r\n                toastr.options.hideDuration = $hideDuration.val();\r\n            }\r\n\r\n            if ($timeOut.val().length) {\r\n                toastr.options.timeOut = addClear ? 0 : $timeOut.val();\r\n            }\r\n\r\n            if ($extendedTimeOut.val().length) {\r\n                toastr.options.extendedTimeOut = addClear ? 0 : $extendedTimeOut.val();\r\n            }\r\n\r\n            if ($showEasing.val().length) {\r\n                toastr.options.showEasing = $showEasing.val();\r\n            }\r\n\r\n            if ($hideEasing.val().length) {\r\n                toastr.options.hideEasing = $hideEasing.val();\r\n            }\r\n\r\n            if ($showMethod.val().length) {\r\n                toastr.options.showMethod = $showMethod.val();\r\n            }\r\n\r\n            if ($hideMethod.val().length) {\r\n                toastr.options.hideMethod = $hideMethod.val();\r\n            }\r\n\r\n            if (addClear) {\r\n                msg = getMessageWithClearButton(msg);\r\n                toastr.options.tapToDismiss = false;\r\n            }\r\n            if (!msg) {\r\n                msg = getMessage();\r\n            }\r\n\r\n            $('#toastrOptions').text(\r\n                    'toastr.options = '\r\n                    + JSON.stringify(toastr.options, null, 2)\r\n                    + ';'\r\n                    + '\\n\\ntoastr.'\r\n                    + shortCutFunction\r\n                    + '(\"'\r\n                    + msg\r\n                    + (title ? '\", \"' + title : '')\r\n                    + '\");'\r\n            );\r\n\r\n            var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists\r\n            $toastlast = $toast;\r\n\r\n            if(typeof $toast === 'undefined'){\r\n                return;\r\n            }\r\n\r\n            if ($toast.find('#okBtn').length) {\r\n                $toast.delegate('#okBtn', 'click', function () {\r\n                    alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');\r\n                    $toast.remove();\r\n                });\r\n            }\r\n            if ($toast.find('#surpriseBtn').length) {\r\n                $toast.delegate('#surpriseBtn', 'click', function () {\r\n                    alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');\r\n                });\r\n            }\r\n            if ($toast.find('.clear').length) {\r\n                $toast.delegate('.clear', 'click', function () {\r\n                    toastr.clear($toast, { force: true });\r\n                });\r\n            }\r\n        });\r\n\r\n        function getLastToast(){\r\n            return $toastlast;\r\n        }\r\n        $('#clearlasttoast').click(function () {\r\n            toastr.clear(getLastToast());\r\n        });\r\n        $('#cleartoasts').click(function () {\r\n            toastr.clear();\r\n        });\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            demo();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTToastrDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/extended/toastr.js?");

/***/ })

/******/ });