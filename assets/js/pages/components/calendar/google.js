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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/calendar/google.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/calendar/google.js":
/*!************************************************************!*\
  !*** ../src/assets/js/pages/components/calendar/google.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar KTCalendarGoogle = function() {\r\n\r\n    return {\r\n        //main function to initiate the module\r\n        init: function() {\r\n            var calendarEl = document.getElementById('kt_calendar');\r\n            var calendar = new FullCalendar.Calendar(calendarEl, {\r\n                plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list', 'googleCalendar' ],\r\n\r\n                isRTL: KTUtil.isRTL(),\r\n                header: {\r\n                    left: 'prev,next today',\r\n                    center: 'title',\r\n                    right: 'dayGridMonth,timeGridWeek,timeGridDay'\r\n                },\r\n\r\n                displayEventTime: false, // don't show the time column in list view\r\n\r\n                height: 800,\r\n                contentHeight: 780,\r\n                aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio\r\n\r\n                views: {\r\n                    dayGridMonth: { buttonText: 'month' },\r\n                    timeGridWeek: { buttonText: 'week' },\r\n                    timeGridDay: { buttonText: 'day' }\r\n                },\r\n\r\n                defaultView: 'dayGridMonth',\r\n\r\n                editable: true,\r\n                eventLimit: true, // allow \"more\" link when too many events\r\n                navLinks: true,\r\n\r\n                // THIS KEY WON'T WORK IN PRODUCTION!!!\r\n                // To make your own Google API key, follow the directions here:\r\n                // http://fullcalendar.io/docs/google_calendar/\r\n                googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',\r\n\r\n                // US Holidays\r\n                events: 'en.usa#holiday@group.v.calendar.google.com',\r\n                \r\n                eventClick: function(event) {\r\n                    // opens events in a popup window\r\n                    window.open(event.url, 'gcalevent', 'width=700,height=600');\r\n                    return false;\r\n                },\r\n\r\n                loading: function(bool) {\r\n                    return;\r\n\r\n                    /*\r\n                    KTApp.block(portlet.getSelf(), {\r\n                        type: 'loader',\r\n                        state: 'success',\r\n                        message: 'Please wait...'  \r\n                    });\r\n                    */\r\n                }, \r\n\r\n                eventRender: function(info) {\r\n                    var element = $(info.el);\r\n\r\n                    if (info.event.extendedProps && info.event.extendedProps.description) {\r\n                        if (element.hasClass('fc-day-grid-event')) {\r\n                            element.data('content', info.event.extendedProps.description);\r\n                            element.data('placement', 'top');\r\n                            KTApp.initPopover(element);\r\n                        } else if (element.hasClass('fc-time-grid-event')) {\r\n                            element.find('.fc-title').append('<div class=\"fc-description\">' + info.event.extendedProps.description + '</div>'); \r\n                        } else if (element.find('.fc-list-item-title').lenght !== 0) {\r\n                            element.find('.fc-list-item-title').append('<div class=\"fc-description\">' + info.event.extendedProps.description + '</div>'); \r\n                        }\r\n                    } \r\n                }\r\n            });\r\n\r\n            calendar.render();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTCalendarGoogle.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/calendar/google.js?");

/***/ })

/******/ });