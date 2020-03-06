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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/calendar/background-events.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/calendar/background-events.js":
/*!***********************************************************************!*\
  !*** ../src/assets/js/pages/components/calendar/background-events.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar KTCalendarBackgroundEvents = function() {\r\n\r\n    return {\r\n        //main function to initiate the module\r\n        init: function() {\r\n            var todayDate = moment().startOf('day');\r\n            var YM = todayDate.format('YYYY-MM');\r\n            var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');\r\n            var TODAY = todayDate.format('YYYY-MM-DD');\r\n            var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');\r\n\r\n            var calendarEl = document.getElementById('kt_calendar');\r\n            var calendar = new FullCalendar.Calendar(calendarEl, {\r\n                plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],\r\n\r\n                isRTL: KTUtil.isRTL(),\r\n                header: {\r\n                    left: 'prev,next today',\r\n                    center: 'title',\r\n                    right: 'dayGridMonth,timeGridWeek,timeGridDay'\r\n                },\r\n\r\n                height: 800,\r\n                contentHeight: 780,\r\n                aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio\r\n\r\n                nowIndicator: true,\r\n                now: TODAY + 'T09:25:00', // just for demo\r\n\r\n                views: {\r\n                    dayGridMonth: { buttonText: 'month' },\r\n                    timeGridWeek: { buttonText: 'week' },\r\n                    timeGridDay: { buttonText: 'day' }\r\n                },\r\n\r\n                defaultView: 'dayGridMonth',\r\n                defaultDate: TODAY,\r\n\r\n                editable: true,\r\n                eventLimit: true, // allow \"more\" link when too many events\r\n                navLinks: true,\r\n                businessHours: true, // display business hours\r\n                events: [\r\n                    {\r\n                        title: 'All Day Event',\r\n                        start: YM + '-01',\r\n                        description: 'Toto lorem ipsum dolor sit incid idunt ut',\r\n                        className: \"fc-event-danger fc-event-solid-warning\",\r\n                        color: KTApp.getStateColor('info'),\r\n                        rendering: 'background' \r\n                    },\r\n                    {\r\n                        title: 'Reporting',\r\n                        start: YM + '-14T13:30:00',\r\n                        description: 'Lorem ipsum dolor incid idunt ut labore',\r\n                        end: YM + '-14',\r\n                        className: \"fc-event-success\"\r\n                    },\r\n                    {\r\n                        title: 'Company Trip',\r\n                        start: YM + '-02',\r\n                        description: 'Lorem ipsum dolor sit tempor incid',\r\n                        end: YM + '-03',\r\n                        className: \"fc-event-primary\"\r\n                    },\r\n                    {\r\n                        title: 'ICT Expo 2017 - Product Release',\r\n                        start: YM + '-03',\r\n                        description: 'Lorem ipsum dolor sit tempor inci',\r\n                        end: YM + '-05',\r\n                        className: \"fc-event-light fc-event-solid-primary\"\r\n                    },\r\n                    {\r\n                        title: 'Dinner',\r\n                        start: YM + '-12',\r\n                        description: 'Lorem ipsum dolor sit amet, conse ctetur',\r\n                        end: YM + '-10',\r\n                        color: KTApp.getStateColor('info'),\r\n                        rendering: 'background' \r\n                    },\r\n                    {\r\n                        id: 999,\r\n                        title: 'Repeating Event',\r\n                        start: YM + '-09T16:00:00',\r\n                        description: 'Lorem ipsum dolor sit ncididunt ut labore',\r\n                        className: \"fc-event-danger\"\r\n                    },\r\n                    {\r\n                        id: 1000,\r\n                        title: 'Repeating Event',\r\n                        description: 'Lorem ipsum dolor sit amet, labore',\r\n                        start: YM + '-16T16:00:00',\r\n                        color: KTApp.getStateColor('warning'),\r\n                        rendering: 'background' \r\n                    },\r\n                    {\r\n                        title: 'Conference',\r\n                        start: YESTERDAY,\r\n                        end: TOMORROW,\r\n                        description: 'Lorem ipsum dolor eius mod tempor labore',\r\n                        className: \"fc-event-brand\"\r\n                    },\r\n                    {\r\n                        title: 'Meeting',\r\n                        start: TODAY + 'T10:30:00',\r\n                        end: TODAY + 'T12:30:00',\r\n                        description: 'Lorem ipsum dolor eiu idunt ut labore',\r\n                        color: KTApp.getStateColor('danger'),\r\n                        rendering: 'background' \r\n                    },\r\n                    {\r\n                        title: 'Lunch',\r\n                        start: TODAY + 'T12:00:00',\r\n                        className: \"fc-event-info\",\r\n                        description: 'Lorem ipsum dolor sit amet, ut labore'\r\n                    },\r\n                    {\r\n                        title: 'Meeting',\r\n                        start: TODAY + 'T14:30:00',\r\n                        className: \"fc-event-warning\",\r\n                        description: 'Lorem ipsum conse ctetur adipi scing'\r\n                    },\r\n                    {\r\n                        title: 'Happy Hour',\r\n                        start: TODAY + 'T17:30:00',\r\n                        className: \"fc-event-info\",\r\n                        description: 'Lorem ipsum dolor sit amet, conse ctetur',\r\n                        color: KTApp.getStateColor('danger'),\r\n                        rendering: 'background' \r\n                    },\r\n                    {\r\n                        title: 'Dinner',\r\n                        start: TOMORROW + 'T05:00:00',\r\n                        className: \"fc-event-solid-danger fc-event-light\",\r\n                        description: 'Lorem ipsum dolor sit ctetur adipi scing'\r\n                    },\r\n                    {\r\n                        title: 'Birthday Party',\r\n                        start: TOMORROW + 'T07:00:00',\r\n                        className: \"fc-event-primary\",\r\n                        description: 'Lorem ipsum dolor sit amet, scing',\r\n                        color: KTApp.getStateColor('danger'),\r\n                        rendering: 'background' \r\n                    },\r\n                    {\r\n                        title: 'Click for Google',\r\n                        url: 'http://google.com/',\r\n                        start: YM + '-28',\r\n                        className: \"fc-event-solid-info fc-event-light\",\r\n                        description: 'Lorem ipsum dolor sit amet, labore',\r\n                        color: KTApp.getStateColor('success'),\r\n                        rendering: 'background' \r\n                    }\r\n                ],\r\n\r\n                eventRender: function(info) {\r\n                    var element = $(info.el);\r\n\r\n                    if (info.event.extendedProps && info.event.extendedProps.description) {\r\n                        if (element.hasClass('fc-day-grid-event')) {\r\n                            element.data('content', info.event.extendedProps.description);\r\n                            element.data('placement', 'top');\r\n                            KTApp.initPopover(element);\r\n                        } else if (element.hasClass('fc-time-grid-event')) {\r\n                            element.find('.fc-title').append('<div class=\"fc-description\">' + info.event.extendedProps.description + '</div>'); \r\n                        } else if (element.find('.fc-list-item-title').lenght !== 0) {\r\n                            element.find('.fc-list-item-title').append('<div class=\"fc-description\">' + info.event.extendedProps.description + '</div>'); \r\n                        }\r\n                    } \r\n                }\r\n            });\r\n\r\n            calendar.render();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTCalendarBackgroundEvents.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/calendar/background-events.js?");

/***/ })

/******/ });