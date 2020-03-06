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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/extended/bootstrap-notify.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/extended/bootstrap-notify.js":
/*!**********************************************************************!*\
  !*** ../src/assets/js/pages/components/extended/bootstrap-notify.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class definition\r\n\r\nvar KTBootstrapNotifyDemo = function () {\r\n    \r\n    // Private functions\r\n\r\n    // basic demo\r\n    var demo = function () {\r\n        // init bootstrap switch\r\n        $('[data-switch=true]').bootstrapSwitch();\r\n\r\n        // handle the demo\r\n        $('#kt_notify_btn').click(function() {\r\n            var content = {};\r\n\r\n            content.message = 'New order has been placed';\r\n            if ($('#kt_notify_title').prop('checked')) {\r\n                content.title = 'Notification Title';\r\n            }\r\n            if ($('#kt_notify_icon').val() != '') {\r\n                content.icon = 'icon ' + $('#kt_notify_icon').val();\r\n            }\r\n            if ($('#kt_notify_url').prop('checked')) {\r\n                content.url = 'www.keenthemes.com';\r\n                content.target = '_blank';\r\n            }\r\n\r\n            var notify = $.notify(content, { \r\n                type: $('#kt_notify_state').val(),\r\n                allow_dismiss: $('#kt_notify_dismiss').prop('checked'),\r\n                newest_on_top: $('#kt_notify_top').prop('checked'),\r\n                mouse_over:  $('#kt_notify_pause').prop('checked'),\r\n                showProgressbar:  $('#kt_notify_progress').prop('checked'),\r\n                spacing: $('#kt_notify_spacing').val(),                    \r\n                timer: $('#kt_notify_timer').val(),\r\n                placement: {\r\n                    from: $('#kt_notify_placement_from').val(), \r\n                    align: $('#kt_notify_placement_align').val()\r\n                },\r\n                offset: {\r\n                    x: $('#kt_notify_offset_x').val(), \r\n                    y: $('#kt_notify_offset_y').val()\r\n                },\r\n                delay: $('#kt_notify_delay').val(),\r\n                z_index: $('#kt_notify_zindex').val(),\r\n                animate: {\r\n                    enter: 'animated ' + $('#kt_notify_animate_enter').val(),\r\n                    exit: 'animated ' + $('#kt_notify_animate_exit').val()\r\n                }\r\n            });\r\n\r\n            if ($('#kt_notify_progress').prop('checked')) {\r\n                setTimeout(function() {\r\n                    notify.update('message', '<strong>Saving</strong> Page Data.');\r\n                    notify.update('type', 'primary');\r\n                    notify.update('progress', 20);\r\n                }, 1000);\r\n\r\n                setTimeout(function() {\r\n                    notify.update('message', '<strong>Saving</strong> User Data.');\r\n                    notify.update('type', 'warning');\r\n                    notify.update('progress', 40);\r\n                }, 2000);\r\n\r\n                setTimeout(function() {\r\n                    notify.update('message', '<strong>Saving</strong> Profile Data.');\r\n                    notify.update('type', 'danger');\r\n                    notify.update('progress', 65);\r\n                }, 3000);\r\n\r\n                setTimeout(function() {\r\n                    notify.update('message', '<strong>Checking</strong> for errors.');\r\n                    notify.update('type', 'success');\r\n                    notify.update('progress', 100);\r\n                }, 4000);\r\n            }\r\n        });\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            demo();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {    \r\n    KTBootstrapNotifyDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/extended/bootstrap-notify.js?");

/***/ })

/******/ });