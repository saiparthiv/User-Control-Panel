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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/maps/jqvmap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/maps/jqvmap.js":
/*!********************************************************!*\
  !*** ../src/assets/js/pages/components/maps/jqvmap.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class definition\r\nvar KTjQVMapDemo = function() {\r\n\r\n    var sample_data = {\r\n        \"af\": \"16.63\",\r\n        \"al\": \"11.58\",\r\n        \"dz\": \"158.97\",\r\n        \"ao\": \"85.81\",\r\n        \"ag\": \"1.1\",\r\n        \"ar\": \"351.02\",\r\n        \"am\": \"8.83\",\r\n        \"au\": \"1219.72\",\r\n        \"at\": \"366.26\",\r\n        \"az\": \"52.17\",\r\n        \"bs\": \"7.54\",\r\n        \"bh\": \"21.73\",\r\n        \"bd\": \"105.4\",\r\n        \"bb\": \"3.96\",\r\n        \"by\": \"52.89\",\r\n        \"be\": \"461.33\",\r\n        \"bz\": \"1.43\",\r\n        \"bj\": \"6.49\",\r\n        \"bt\": \"1.4\",\r\n        \"bo\": \"19.18\",\r\n        \"ba\": \"16.2\",\r\n        \"bw\": \"12.5\",\r\n        \"br\": \"2023.53\",\r\n        \"bn\": \"11.96\",\r\n        \"bg\": \"44.84\",\r\n        \"bf\": \"8.67\",\r\n        \"bi\": \"1.47\",\r\n        \"kh\": \"11.36\",\r\n        \"cm\": \"21.88\",\r\n        \"ca\": \"1563.66\",\r\n        \"cv\": \"1.57\",\r\n        \"cf\": \"2.11\",\r\n        \"td\": \"7.59\",\r\n        \"cl\": \"199.18\",\r\n        \"cn\": \"5745.13\",\r\n        \"co\": \"283.11\",\r\n        \"km\": \"0.56\",\r\n        \"cd\": \"12.6\",\r\n        \"cg\": \"11.88\",\r\n        \"cr\": \"35.02\",\r\n        \"ci\": \"22.38\",\r\n        \"hr\": \"59.92\",\r\n        \"cy\": \"22.75\",\r\n        \"cz\": \"195.23\",\r\n        \"dk\": \"304.56\",\r\n        \"dj\": \"1.14\",\r\n        \"dm\": \"0.38\",\r\n        \"do\": \"50.87\",\r\n        \"ec\": \"61.49\",\r\n        \"eg\": \"216.83\",\r\n        \"sv\": \"21.8\",\r\n        \"gq\": \"14.55\",\r\n        \"er\": \"2.25\",\r\n        \"ee\": \"19.22\",\r\n        \"et\": \"30.94\",\r\n        \"fj\": \"3.15\",\r\n        \"fi\": \"231.98\",\r\n        \"fr\": \"2555.44\",\r\n        \"ga\": \"12.56\",\r\n        \"gm\": \"1.04\",\r\n        \"ge\": \"11.23\",\r\n        \"de\": \"3305.9\",\r\n        \"gh\": \"18.06\",\r\n        \"gr\": \"305.01\",\r\n        \"gd\": \"0.65\",\r\n        \"gt\": \"40.77\",\r\n        \"gn\": \"4.34\",\r\n        \"gw\": \"0.83\",\r\n        \"gy\": \"2.2\",\r\n        \"ht\": \"6.5\",\r\n        \"hn\": \"15.34\",\r\n        \"hk\": \"226.49\",\r\n        \"hu\": \"132.28\",\r\n        \"is\": \"12.77\",\r\n        \"in\": \"1430.02\",\r\n        \"id\": \"695.06\",\r\n        \"ir\": \"337.9\",\r\n        \"iq\": \"84.14\",\r\n        \"ie\": \"204.14\",\r\n        \"il\": \"201.25\",\r\n        \"it\": \"2036.69\",\r\n        \"jm\": \"13.74\",\r\n        \"jp\": \"5390.9\",\r\n        \"jo\": \"27.13\",\r\n        \"kz\": \"129.76\",\r\n        \"ke\": \"32.42\",\r\n        \"ki\": \"0.15\",\r\n        \"kr\": \"986.26\",\r\n        \"undefined\": \"5.73\",\r\n        \"kw\": \"117.32\",\r\n        \"kg\": \"4.44\",\r\n        \"la\": \"6.34\",\r\n        \"lv\": \"23.39\",\r\n        \"lb\": \"39.15\",\r\n        \"ls\": \"1.8\",\r\n        \"lr\": \"0.98\",\r\n        \"ly\": \"77.91\",\r\n        \"lt\": \"35.73\",\r\n        \"lu\": \"52.43\",\r\n        \"mk\": \"9.58\",\r\n        \"mg\": \"8.33\",\r\n        \"mw\": \"5.04\",\r\n        \"my\": \"218.95\",\r\n        \"mv\": \"1.43\",\r\n        \"ml\": \"9.08\",\r\n        \"mt\": \"7.8\",\r\n        \"mr\": \"3.49\",\r\n        \"mu\": \"9.43\",\r\n        \"mx\": \"1004.04\",\r\n        \"md\": \"5.36\",\r\n        \"mn\": \"5.81\",\r\n        \"me\": \"3.88\",\r\n        \"ma\": \"91.7\",\r\n        \"mz\": \"10.21\",\r\n        \"mm\": \"35.65\",\r\n        \"na\": \"11.45\",\r\n        \"np\": \"15.11\",\r\n        \"nl\": \"770.31\",\r\n        \"nz\": \"138\",\r\n        \"ni\": \"6.38\",\r\n        \"ne\": \"5.6\",\r\n        \"ng\": \"206.66\",\r\n        \"no\": \"413.51\",\r\n        \"om\": \"53.78\",\r\n        \"pk\": \"174.79\",\r\n        \"pa\": \"27.2\",\r\n        \"pg\": \"8.81\",\r\n        \"py\": \"17.17\",\r\n        \"pe\": \"153.55\",\r\n        \"ph\": \"189.06\",\r\n        \"pl\": \"438.88\",\r\n        \"pt\": \"223.7\",\r\n        \"qa\": \"126.52\",\r\n        \"ro\": \"158.39\",\r\n        \"ru\": \"1476.91\",\r\n        \"rw\": \"5.69\",\r\n        \"ws\": \"0.55\",\r\n        \"st\": \"0.19\",\r\n        \"sa\": \"434.44\",\r\n        \"sn\": \"12.66\",\r\n        \"rs\": \"38.92\",\r\n        \"sc\": \"0.92\",\r\n        \"sl\": \"1.9\",\r\n        \"sg\": \"217.38\",\r\n        \"sk\": \"86.26\",\r\n        \"si\": \"46.44\",\r\n        \"sb\": \"0.67\",\r\n        \"za\": \"354.41\",\r\n        \"es\": \"1374.78\",\r\n        \"lk\": \"48.24\",\r\n        \"kn\": \"0.56\",\r\n        \"lc\": \"1\",\r\n        \"vc\": \"0.58\",\r\n        \"sd\": \"65.93\",\r\n        \"sr\": \"3.3\",\r\n        \"sz\": \"3.17\",\r\n        \"se\": \"444.59\",\r\n        \"ch\": \"522.44\",\r\n        \"sy\": \"59.63\",\r\n        \"tw\": \"426.98\",\r\n        \"tj\": \"5.58\",\r\n        \"tz\": \"22.43\",\r\n        \"th\": \"312.61\",\r\n        \"tl\": \"0.62\",\r\n        \"tg\": \"3.07\",\r\n        \"to\": \"0.3\",\r\n        \"tt\": \"21.2\",\r\n        \"tn\": \"43.86\",\r\n        \"tr\": \"729.05\",\r\n        \"tm\": 0,\r\n        \"ug\": \"17.12\",\r\n        \"ua\": \"136.56\",\r\n        \"ae\": \"239.65\",\r\n        \"gb\": \"2258.57\",\r\n        \"us\": \"14624.18\",\r\n        \"uy\": \"40.71\",\r\n        \"uz\": \"37.72\",\r\n        \"vu\": \"0.72\",\r\n        \"ve\": \"285.21\",\r\n        \"vn\": \"101.99\",\r\n        \"ye\": \"30.02\",\r\n        \"zm\": \"15.69\",\r\n        \"zw\": \"5.57\"\r\n    };\r\n\r\n    // Private functions\r\n\r\n    var setupMap = function(name) {\r\n        var data = {\r\n            map: 'world_en',\r\n            backgroundColor: null,\r\n            color: '#ffffff',\r\n            hoverOpacity: 0.7,\r\n            selectedColor: '#666666',\r\n            enableZoom: true,\r\n            showTooltip: true,\r\n            values: sample_data,\r\n            scaleColors: ['#C8EEFF', '#006491'],\r\n            normalizeFunction: 'polynomial',\r\n            onRegionOver: function(event, code) {\r\n                //sample to interact with map\r\n                if (code == 'ca') {\r\n                    event.preventDefault();\r\n                }\r\n            },\r\n            onRegionClick: function(element, code, region) {\r\n                //sample to interact with map\r\n                var message = 'You clicked \"' + region + '\" which has the code: ' + code.toUpperCase();\r\n                alert(message);\r\n            }\r\n        };\r\n\r\n        data.map = name + '_en';\r\n\r\n        var map = jQuery('#kt_jqvmap_' + name);\r\n\r\n        map.width(map.parent().width());\r\n        map.vectorMap(data);\r\n    }\r\n\r\n    var setupMaps = function() {\r\n        setupMap(\"world\");\r\n        setupMap(\"usa\");\r\n        setupMap(\"europe\");\r\n        setupMap(\"russia\");\r\n        setupMap(\"germany\");\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            // default charts\r\n            setupMaps();\r\n\r\n            KTUtil.addResizeHandler(function() {\r\n                setupMaps();\r\n            });\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTjQVMapDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/maps/jqvmap.js?");

/***/ })

/******/ });