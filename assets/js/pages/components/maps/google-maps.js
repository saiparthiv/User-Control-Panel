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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/maps/google-maps.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/maps/google-maps.js":
/*!*************************************************************!*\
  !*** ../src/assets/js/pages/components/maps/google-maps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class definition\r\nvar KTGoogleMapsDemo = function() {\r\n\r\n    // Private functions\r\n\r\n    var demo1 = function() {\r\n        var map = new GMaps({\r\n            div: '#kt_gmap_1',\r\n            lat: -12.043333,\r\n            lng: -77.028333\r\n        });\r\n    }\r\n\r\n    var demo2 = function() {\r\n        var map = new GMaps({\r\n            div: '#kt_gmap_2',\r\n            zoom: 16,\r\n            lat: -12.043333,\r\n            lng: -77.028333,\r\n            click: function(e) {\r\n                alert('click');\r\n            },\r\n            dragend: function(e) {\r\n                alert('dragend');\r\n            }\r\n        });\r\n    }\r\n\r\n    var demo3 = function() {\r\n        var map = new GMaps({\r\n            div: '#kt_gmap_3',\r\n            lat: -51.38739,\r\n            lng: -6.187181,\r\n        });\r\n        map.addMarker({\r\n            lat: -51.38739,\r\n            lng: -6.187181,\r\n            title: 'Lima',\r\n            details: {\r\n                database_id: 42,\r\n                author: 'HPNeo'\r\n            },\r\n            click: function(e) {\r\n                if (console.log) console.log(e);\r\n                alert('You clicked in this marker');\r\n            }\r\n        });\r\n        map.addMarker({\r\n            lat: -12.042,\r\n            lng: -77.028333,\r\n            title: 'Marker with InfoWindow',\r\n            infoWindow: {\r\n                content: '<span style=\"color:#000\">HTML Content!</span>'\r\n            }\r\n        });\r\n        map.setZoom(5);\r\n    }\r\n\r\n    var demo4 = function() {\r\n        var map = new GMaps({\r\n            div: '#kt_gmap_4',\r\n            lat: -12.043333,\r\n            lng: -77.028333\r\n        });\r\n\r\n        GMaps.geolocate({\r\n            success: function(position) {\r\n                map.setCenter(position.coords.latitude, position.coords.longitude);\r\n            },\r\n            error: function(error) {\r\n                alert('Geolocation failed: ' + error.message);\r\n            },\r\n            not_supported: function() {\r\n                alert(\"Your browser does not support geolocation\");\r\n            },\r\n            always: function() {\r\n                //alert(\"Geolocation Done!\");\r\n            }\r\n        });\r\n    }\r\n\r\n    var demo5 = function() {\r\n        var map = new GMaps({\r\n            div: '#kt_gmap_5',\r\n            lat: -12.043333,\r\n            lng: -77.028333,\r\n            click: function(e) {\r\n                console.log(e);\r\n            }\r\n        });\r\n\r\n        var path = [\r\n            [-12.044012922866312, -77.02470665341184],\r\n            [-12.05449279282314, -77.03024273281858],\r\n            [-12.055122327623378, -77.03039293652341],\r\n            [-12.075917129727586, -77.02764635449216],\r\n            [-12.07635776902266, -77.02792530422971],\r\n            [-12.076819390363665, -77.02893381481931],\r\n            [-12.088527520066453, -77.0241058385925],\r\n            [-12.090814532191756, -77.02271108990476]\r\n        ];\r\n\r\n        map.drawPolyline({\r\n            path: path,\r\n            strokeColor: '#131540',\r\n            strokeOpacity: 0.6,\r\n            strokeWeight: 6\r\n        });\r\n    }\r\n\r\n    var demo6 = function() {\r\n        var map = new GMaps({\r\n            div: '#kt_gmap_6',\r\n            lat: -12.043333,\r\n            lng: -77.028333\r\n        });\r\n\r\n        var path = [\r\n            [-12.040397656836609, -77.03373871559225],\r\n            [-12.040248585302038, -77.03993927003302],\r\n            [-12.050047116528843, -77.02448169303511],\r\n            [-12.044804866577001, -77.02154422636042]\r\n        ];\r\n\r\n        var polygon = map.drawPolygon({\r\n            paths: path,\r\n            strokeColor: '#BBD8E9',\r\n            strokeOpacity: 1,\r\n            strokeWeight: 3,\r\n            fillColor: '#BBD8E9',\r\n            fillOpacity: 0.6\r\n        });\r\n    }\r\n\r\n    var demo7 = function() {\r\n        var map = new GMaps({\r\n            div: '#kt_gmap_7',\r\n            lat: -12.043333,\r\n            lng: -77.028333\r\n        });\r\n        $('#kt_gmap_7_btn').click(function(e) {\r\n            e.preventDefault();\r\n            KTUtil.scrollTo('kt_gmap_7_btn', 400);\r\n            map.travelRoute({\r\n                origin: [-12.044012922866312, -77.02470665341184],\r\n                destination: [-12.090814532191756, -77.02271108990476],\r\n                travelMode: 'driving',\r\n                step: function(e) {\r\n                    $('#kt_gmap_7_routes').append('<li>' + e.instructions + '</li>');\r\n                    $('#kt_gmap_7_routes li:eq(' + e.step_number + ')').delay(800 * e.step_number).fadeIn(500, function() {\r\n                        map.setCenter(e.end_location.lat(), e.end_location.lng());\r\n                        map.drawPolyline({\r\n                            path: e.path,\r\n                            strokeColor: '#131540',\r\n                            strokeOpacity: 0.6,\r\n                            strokeWeight: 6\r\n                        });\r\n                    });\r\n                }\r\n            });\r\n        });\r\n    }\r\n\r\n    var demo8 = function() {\r\n        var map = new GMaps({\r\n            div: '#kt_gmap_8',\r\n            lat: -12.043333,\r\n            lng: -77.028333\r\n        });\r\n\r\n        var handleAction = function() {\r\n            var text = $.trim($('#kt_gmap_8_address').val());\r\n            GMaps.geocode({\r\n                address: text,\r\n                callback: function(results, status) {\r\n                    if (status == 'OK') {\r\n                        var latlng = results[0].geometry.location;\r\n                        map.setCenter(latlng.lat(), latlng.lng());\r\n                        map.addMarker({\r\n                            lat: latlng.lat(),\r\n                            lng: latlng.lng()\r\n                        });\r\n                        KTUtil.scrollTo('kt_gmap_8');\r\n                    }\r\n                }\r\n            });\r\n        }\r\n\r\n        $('#kt_gmap_8_btn').click(function(e) {\r\n            e.preventDefault();\r\n            handleAction();\r\n        });\r\n\r\n        $(\"#kt_gmap_8_address\").keypress(function(e) {\r\n            var keycode = (e.keyCode ? e.keyCode : e.which);\r\n            if (keycode == '13') {\r\n                e.preventDefault();\r\n                handleAction();\r\n            }\r\n        });\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            // default charts\r\n            demo1();\r\n            demo2();\r\n            demo3();\r\n            demo4();\r\n            demo5();\r\n            demo6();\r\n            demo7();\r\n            demo8();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTGoogleMapsDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/maps/google-maps.js?");

/***/ })

/******/ });