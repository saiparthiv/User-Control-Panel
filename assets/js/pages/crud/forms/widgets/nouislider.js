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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/nouislider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/nouislider.js":
/*!***************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/nouislider.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\r\nvar KTnoUiSliderDemos = function() {\r\n\r\n    // Private functions\r\n\r\n     \r\n    var demo1 = function() {\r\n        // init slider\r\n        var slider = document.getElementById('kt_nouislider_1');\r\n\r\n        noUiSlider.create(slider, {\r\n            start: [ 0 ],\r\n            step: 2,\r\n            range: {\r\n                'min': [ 0 ],\r\n                'max': [ 10 ]\r\n            },\r\n            format: wNumb({\r\n                decimals: 0 \r\n            })\r\n        });\r\n\r\n        // init slider input\r\n        var sliderInput = document.getElementById('kt_nouislider_1_input');\r\n\r\n        slider.noUiSlider.on('update', function( values, handle ) {\r\n            sliderInput.value = values[handle];\r\n        });\r\n\r\n        sliderInput.addEventListener('change', function(){\r\n            slider.noUiSlider.set(this.value);\r\n        });\r\n    }\r\n\r\n    var demo2 = function() {\r\n        // init slider\r\n        var slider = document.getElementById('kt_nouislider_2');\r\n\r\n        noUiSlider.create(slider, {\r\n            start: [ 20000 ],\r\n            connect: [true, false],\r\n            step: 1000,\r\n            range: {\r\n                'min': [ 20000 ],\r\n                'max': [ 80000 ]\r\n            },\r\n            format: wNumb({\r\n                decimals: 3,\r\n                thousand: '.',\r\n                postfix: ' (US $)',\r\n            })\r\n        });\r\n\r\n        // init slider input\r\n        var sliderInput = document.getElementById('kt_nouislider_2_input');\r\n\r\n        slider.noUiSlider.on('update', function( values, handle ) {\r\n            sliderInput.value = values[handle];\r\n        });\r\n\r\n        sliderInput.addEventListener('change', function(){\r\n            slider.noUiSlider.set(this.value);\r\n        });\r\n    }\r\n\r\n    var demo3 = function() {\r\n        // init slider\r\n        var slider = document.getElementById('kt_nouislider_3');\r\n\r\n        noUiSlider.create(slider, {\r\n            start: [20, 80],\r\n            connect: true,\r\n            direction: 'rtl',\r\n            tooltips: [true, wNumb({ decimals: 1 })],\r\n            range: {\r\n                'min': [0],\r\n                '10%': [10, 10],\r\n                '50%': [80, 50],\r\n                '80%': 150,\r\n                'max': 200\r\n            }\r\n        });\r\n       \r\n\r\n        // init slider input\r\n        var sliderInput0 = document.getElementById('kt_nouislider_3_input');\r\n        var sliderInput1 = document.getElementById('kt_nouislider_3.1_input');\r\n        var sliderInputs = [sliderInput1, sliderInput0];        \r\n\r\n        slider.noUiSlider.on('update', function( values, handle ) {\r\n            sliderInputs[handle].value = values[handle];\r\n        });\r\n    }\r\n\r\n    var demo4 = function() {\r\n\r\n       var slider = document.getElementById('kt_nouislider_input_select');\r\n\r\n        // Append the option elements\r\n        for ( var i = -20; i <= 40; i++ ){\r\n\r\n            var option = document.createElement(\"option\");\r\n                option.text = i;\r\n                option.value = i;\r\n\r\n            slider.appendChild(option);\r\n        }\r\n\r\n        // init slider\r\n        var html5Slider = document.getElementById('kt_nouislider_4');\r\n\r\n        noUiSlider.create(html5Slider, {\r\n            start: [ 10, 30 ],\r\n            connect: true,\r\n            range: {\r\n                'min': -20,\r\n                'max': 40\r\n            }\r\n        });\r\n\r\n        // init slider input\r\n        var inputNumber = document.getElementById('kt_nouislider_input_number');\r\n\r\n        html5Slider.noUiSlider.on('update', function( values, handle ) {\r\n\r\n            var value = values[handle];\r\n\r\n            if ( handle ) {\r\n                inputNumber.value = value;\r\n            } else {\r\n                slider.value = Math.round(value);\r\n            }\r\n        });\r\n\r\n        slider.addEventListener('change', function(){\r\n            html5Slider.noUiSlider.set([this.value, null]);\r\n        });\r\n\r\n        inputNumber.addEventListener('change', function(){\r\n            html5Slider.noUiSlider.set([null, this.value]);\r\n        });\r\n    }\r\n \r\n    var demo5 = function() {\r\n        // init slider\r\n        var slider = document.getElementById('kt_nouislider_5');\r\n\r\n        noUiSlider.create(slider, {\r\n            start: 20,\r\n            range: {\r\n                min: 0,\r\n                max: 100\r\n            },\r\n            pips: {\r\n                mode: 'values',\r\n                values: [20, 80],\r\n                density: 4\r\n            }\r\n        });\r\n\r\n        var sliderInput = document.getElementById('kt_nouislider_5_input');\r\n\r\n        slider.noUiSlider.on('update', function( values, handle ) {\r\n            sliderInput.value = values[handle];\r\n        });\r\n\r\n        sliderInput.addEventListener('change', function(){\r\n            slider.noUiSlider.set(this.value);\r\n        });\r\n\r\n        slider.noUiSlider.on('change', function ( values, handle ) {\r\n            if ( values[handle] < 20 ) {\r\n                slider.noUiSlider.set(20);\r\n            } else if ( values[handle] > 80 ) {\r\n                slider.noUiSlider.set(80);\r\n            }\r\n        });\r\n    }\r\n\r\n    var demo6 = function() {\r\n        // init slider             \r\n\r\n        var verticalSlider = document.getElementById('kt_nouislider_6');\r\n\r\n        noUiSlider.create(verticalSlider, {\r\n            start: 40,\r\n            orientation: 'vertical',\r\n            range: {\r\n                'min': 0,\r\n                'max': 100\r\n            }\r\n        }); \r\n\r\n        // init slider input\r\n        var sliderInput = document.getElementById('kt_nouislider_6_input');\r\n\r\n        verticalSlider.noUiSlider.on('update', function( values, handle ) {\r\n            sliderInput.value = values[handle];\r\n        });\r\n\r\n        sliderInput.addEventListener('change', function(){\r\n            verticalSlider.noUiSlider.set(this.value);\r\n        });      \r\n    }    \r\n\r\n    // Modal demo\r\n\r\n    var modaldemo1 = function() {\r\n        var slider = document.getElementById('kt_nouislider_modal1');\r\n\r\n        noUiSlider.create(slider, {\r\n            start: [ 0 ],\r\n            step: 2,\r\n            range: {\r\n                'min': [ 0 ],\r\n                'max': [ 10 ]\r\n            },\r\n            format: wNumb({\r\n                decimals: 0 \r\n            })\r\n        });\r\n\r\n        // init slider input\r\n        var sliderInput = document.getElementById('kt_nouislider_modal1_input');\r\n\r\n        slider.noUiSlider.on('update', function( values, handle ) {\r\n            sliderInput.value = values[handle];\r\n        });\r\n\r\n        sliderInput.addEventListener('change', function(){\r\n            slider.noUiSlider.set(this.value);\r\n        });\r\n    }\r\n\r\n    var modaldemo2 = function() {\r\n        var slider = document.getElementById('kt_nouislider_modal2');\r\n\r\n        noUiSlider.create(slider, {\r\n            start: [ 20000 ],\r\n            connect: [true, false],\r\n            step: 1000,\r\n            range: {\r\n                'min': [ 20000 ],\r\n                'max': [ 80000 ]\r\n            },\r\n            format: wNumb({\r\n                decimals: 3,\r\n                thousand: '.',\r\n                postfix: ' (US $)',\r\n            })\r\n        });\r\n\r\n        // init slider input\r\n        var sliderInput = document.getElementById('kt_nouislider_modal2_input');\r\n\r\n        slider.noUiSlider.on('update', function( values, handle ) {\r\n            sliderInput.value = values[handle];\r\n        });\r\n\r\n        sliderInput.addEventListener('change', function(){\r\n            slider.noUiSlider.set(this.value);\r\n        });\r\n    }\r\n\r\n    var modaldemo3 = function() {\r\n        var slider = document.getElementById('kt_nouislider_modal3');\r\n\r\n        noUiSlider.create(slider, {\r\n            start: [20, 80],\r\n            connect: true,\r\n            direction: 'rtl',\r\n            tooltips: [true, wNumb({ decimals: 1 })],\r\n            range: {\r\n                'min': [0],\r\n                '10%': [10, 10],\r\n                '50%': [80, 50],\r\n                '80%': 150,\r\n                'max': 200\r\n            }\r\n        });\r\n       \r\n\r\n        // init slider input\r\n        var sliderInput0 = document.getElementById('kt_nouislider_modal1.1_input');\r\n        var sliderInput1 = document.getElementById('kt_nouislider_modal1.2_input');\r\n        var sliderInputs = [sliderInput1, sliderInput0];        \r\n\r\n        slider.noUiSlider.on('update', function( values, handle ) {\r\n            sliderInputs[handle].value = values[handle];\r\n        });\r\n    }\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            demo1();\r\n            demo2();\r\n            demo3();  \r\n            demo4(); \r\n            demo5();  \r\n            demo6(); \r\n            modaldemo1();\r\n            modaldemo2();\r\n            modaldemo3();                           \r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTnoUiSliderDemos.init();\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/nouislider.js?");

/***/ })

/******/ });