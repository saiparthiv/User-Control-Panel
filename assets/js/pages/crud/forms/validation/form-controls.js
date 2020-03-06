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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/validation/form-controls.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/validation/form-controls.js":
/*!*********************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/validation/form-controls.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\r\n\r\nvar KTFormControls = function () {\r\n    // Private functions\r\n\r\n    var demo1 = function () {\r\n        $( \"#kt_form_1\" ).validate({\r\n            // define validation rules\r\n            rules: {\r\n                email: {\r\n                    required: true,\r\n                    email: true,\r\n                    minlength: 10\r\n                },\r\n                url: {\r\n                    required: true\r\n                },\r\n                digits: {\r\n                    required: true,\r\n                    digits: true\r\n                },\r\n                creditcard: {\r\n                    required: true,\r\n                    creditcard: true\r\n                },\r\n                phone: {\r\n                    required: true,\r\n                    phoneUS: true\r\n                },\r\n                option: {\r\n                    required: true\r\n                },\r\n                options: {\r\n                    required: true,\r\n                    minlength: 2,\r\n                    maxlength: 4\r\n                },\r\n                memo: {\r\n                    required: true,\r\n                    minlength: 10,\r\n                    maxlength: 100\r\n                },\r\n\r\n                checkbox: {\r\n                    required: true\r\n                },\r\n                checkboxes: {\r\n                    required: true,\r\n                    minlength: 1,\r\n                    maxlength: 2\r\n                },\r\n                radio: {\r\n                    required: true\r\n                }\r\n            },\r\n\r\n            errorPlacement: function(error, element) {\r\n                var group = element.closest('.input-group');\r\n                if (group.length) {\r\n                    group.after(error.addClass('invalid-feedback'));\r\n                } else {\r\n                    element.after(error.addClass('invalid-feedback'));\r\n                }\r\n            },\r\n\r\n            //display error alert on form submit\r\n            invalidHandler: function(event, validator) {\r\n                var alert = $('#kt_form_1_msg');\r\n                alert.removeClass('kt--hide').show();\r\n                KTUtil.scrollTop();\r\n            },\r\n\r\n            submitHandler: function (form) {\r\n                //form[0].submit(); // submit the form\r\n            }\r\n        });\r\n    }\r\n\r\n    var demo2 = function () {\r\n        $( \"#kt_form_2\" ).validate({\r\n            // define validation rules\r\n            rules: {\r\n                //= Client Information(step 3)\r\n                // Billing Information\r\n                billing_card_name: {\r\n                    required: true\r\n                },\r\n                billing_card_number: {\r\n                    required: true,\r\n                    creditcard: true\r\n                },\r\n                billing_card_exp_month: {\r\n                    required: true\r\n                },\r\n                billing_card_exp_year: {\r\n                    required: true\r\n                },\r\n                billing_card_cvv: {\r\n                    required: true,\r\n                    minlength: 2,\r\n                    maxlength: 3\r\n                },\r\n\r\n                // Billing Address\r\n                billing_address_1: {\r\n                    required: true\r\n                },\r\n                billing_address_2: {\r\n\r\n                },\r\n                billing_city: {\r\n                    required: true\r\n                },\r\n                billing_state: {\r\n                    required: true\r\n                },\r\n                billing_zip: {\r\n                    required: true,\r\n                    number: true\r\n                },\r\n\r\n                billing_delivery: {\r\n                    required: true\r\n                }\r\n            },\r\n\r\n            //display error alert on form submit\r\n            invalidHandler: function(event, validator) {\r\n                swal.fire({\r\n                    \"title\": \"\",\r\n                    \"text\": \"There are some errors in your submission. Please correct them.\",\r\n                    \"type\": \"error\",\r\n                    \"confirmButtonClass\": \"btn btn-secondary\",\r\n                    \"onClose\": function(e) {\r\n                        console.log('on close event fired!');\r\n                    }\r\n                });\r\n\r\n                event.preventDefault();\r\n            },\r\n\r\n            submitHandler: function (form) {\r\n                //form[0].submit(); // submit the form\r\n                swal.fire({\r\n                    \"title\": \"\",\r\n                    \"text\": \"Form validation passed. All good!\",\r\n                    \"type\": \"success\",\r\n                    \"confirmButtonClass\": \"btn btn-secondary\"\r\n                });\r\n\r\n                return false;\r\n            }\r\n        });\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            demo1();\r\n            demo2();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTFormControls.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/validation/form-controls.js?");

/***/ })

/******/ });