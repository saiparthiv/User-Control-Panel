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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/validation/form-widgets.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/validation/form-widgets.js":
/*!********************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/validation/form-widgets.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\r\n\r\nvar KTFormWidgets = function () {\r\n    // Private functions\r\n    var validator;\r\n\r\n    var initWidgets = function() {\r\n        // datepicker\r\n        $('#kt_datepicker').datepicker({\r\n            todayHighlight: true,\r\n            templates: {\r\n                leftArrow: '<i class=\"la la-angle-left\"></i>',\r\n                rightArrow: '<i class=\"la la-angle-right\"></i>'\r\n            }\r\n        });\r\n\r\n        // datetimepicker\r\n        $('#kt_datetimepicker').datetimepicker({\r\n            pickerPosition: 'bottom-left',\r\n            todayHighlight: true,\r\n            autoclose: true,\r\n            format: 'yyyy.mm.dd hh:ii'\r\n        });\r\n\r\n        $('#kt_datetimepicker').change(function() {\r\n            validator.element($(this));\r\n        });\r\n\r\n        // timepicker\r\n        $('#kt_timepicker').timepicker({\r\n            minuteStep: 1,\r\n            showSeconds: true,\r\n            showMeridian: true\r\n        });\r\n\r\n        // daterangepicker\r\n        $('#kt_daterangepicker').daterangepicker({\r\n            buttonClasses: ' btn',\r\n            applyClass: 'btn-primary',\r\n            cancelClass: 'btn-secondary'\r\n        }, function(start, end, label) {\r\n            var input = $('#kt_daterangepicker').find('.form-control');\r\n            \r\n            input.val( start.format('YYYY/MM/DD') + ' / ' + end.format('YYYY/MM/DD'));\r\n            validator.element(input); // validate element\r\n        });\r\n\r\n        // bootstrap switch\r\n        $('[data-switch=true]').bootstrapSwitch();\r\n        $('[data-switch=true]').on('switchChange.bootstrapSwitch', function() {\r\n            validator.element($(this)); // validate element\r\n        });\r\n\r\n        // bootstrap select\r\n        $('#kt_bootstrap_select').selectpicker();\r\n        $('#kt_bootstrap_select').on('changed.bs.select', function() {\r\n            validator.element($(this)); // validate element\r\n        });\r\n\r\n        // select2\r\n        $('#kt_select2').select2({\r\n            placeholder: \"Select a state\",\r\n        });\r\n        $('#kt_select2').on('select2:change', function(){\r\n            validator.element($(this)); // validate element\r\n        });\r\n\r\n        // typeahead\r\n        var countries = new Bloodhound({\r\n            datumTokenizer: Bloodhound.tokenizers.whitespace,\r\n            queryTokenizer: Bloodhound.tokenizers.whitespace,\r\n            prefetch: 'https://keenthemes.com/metronic/tools/preview/api/typeahead/countries.json'\r\n        });\r\n\r\n        $('#kt_typeahead').typeahead(null, {\r\n            name: 'countries',\r\n            source: countries\r\n        });\r\n        $('#kt_typeahead').bind('typeahead:select', function(ev, suggestion) {\r\n            validator.element($('#kt_typeahead')); // validate element\r\n        });\r\n    }\r\n    \r\n    var initValidation = function () {\r\n        validator = $( \"#kt_form_1\" ).validate({\r\n            // define validation rules\r\n            rules: {\r\n                date: {\r\n                    required: true,\r\n                    date: true \r\n                },\r\n                daterange: {\r\n                    required: true\r\n                },\r\n                datetime: {\r\n                    required: true\r\n                },\r\n                time: {\r\n                    required: true\r\n                },\r\n\r\n                select: {\r\n                    required: true,\r\n                    minlength: 2,\r\n                    maxlength: 4\r\n                },\r\n                select2: {\r\n                    required: true\r\n                },\r\n                typeahead: {\r\n                    required: true\r\n                },\r\n\r\n                switch: {\r\n                    required: true\r\n                },\r\n\r\n                markdown: {\r\n                    required: true\r\n                }\r\n            },\r\n            \r\n            //display error alert on form submit  \r\n            invalidHandler: function(event, validator) {             \r\n                var alert = $('#kt_form_1_msg');\r\n                alert.removeClass('kt--hide').show();\r\n                KTUtil.scrollTo('m_form_1_msg', -200);\r\n            },\r\n\r\n            submitHandler: function (form) {\r\n                //form[0].submit(); // submit the form\r\n            }\r\n        });       \r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            initWidgets(); \r\n            initValidation();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {    \r\n    KTFormWidgets.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/validation/form-widgets.js?");

/***/ })

/******/ });