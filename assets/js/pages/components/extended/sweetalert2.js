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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/extended/sweetalert2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/extended/sweetalert2.js":
/*!*****************************************************************!*\
  !*** ../src/assets/js/pages/components/extended/sweetalert2.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class definition\r\nvar KTSweetAlert2Demo = function() {\r\n\r\n    // Demos\r\n    var initDemos = function() {\r\n        // Sweetalert Demo 1\r\n        $('#kt_sweetalert_demo_1').click(function(e) {\r\n            swal.fire('Good job!');\r\n        });\r\n\r\n        // Sweetalert Demo 2\r\n        $('#kt_sweetalert_demo_2').click(function(e) {\r\n            swal.fire(\"Here's the title!\", \"...and here's the text!\");\r\n        });\r\n\r\n        // Sweetalert Demo 3\r\n        $('#kt_sweetalert_demo_3_1').click(function(e) {\r\n            swal.fire(\"Good job!\", \"You clicked the button!\", \"warning\");\r\n        });\r\n\r\n        $('#kt_sweetalert_demo_3_2').click(function(e) {\r\n            swal.fire(\"Good job!\", \"You clicked the button!\", \"error\");\r\n        });\r\n\r\n        $('#kt_sweetalert_demo_3_3').click(function(e) {\r\n            swal.fire(\"Good job!\", \"You clicked the button!\", \"success\");\r\n        });\r\n\r\n        $('#kt_sweetalert_demo_3_4').click(function(e) {\r\n            swal.fire(\"Good job!\", \"You clicked the button!\", \"info\");\r\n        });\r\n\r\n        $('#kt_sweetalert_demo_3_5').click(function(e) {\r\n            swal.fire(\"Good job!\", \"You clicked the button!\", \"question\");\r\n        });\r\n\r\n        // Sweetalert Demo 4\r\n        $('#kt_sweetalert_demo_4').click(function(e) {\r\n            swal.fire({\r\n                title: \"Good job!\",\r\n                text: \"You clicked the button!\",\r\n                type: \"success\",\r\n                buttonsStyling: false,\r\n                confirmButtonText: \"Confirm me!\",\r\n                confirmButtonClass: \"btn btn-brand\"\r\n            });\r\n        });\r\n\r\n        // Sweetalert Demo 5\r\n        $('#kt_sweetalert_demo_5').click(function(e) {\r\n            swal.fire({\r\n                title: \"Good job!\",\r\n                text: \"You clicked the button!\",\r\n                type: \"success\",\r\n\r\n                buttonsStyling: false,\r\n\r\n                confirmButtonText: \"<i class='la la-headphones'></i> I am game!\",\r\n                confirmButtonClass: \"btn btn-danger\",\r\n\r\n                showCancelButton: true,\r\n                cancelButtonText: \"<i class='la la-thumbs-down'></i> No, thanks\",\r\n                cancelButtonClass: \"btn btn-default\"\r\n            });\r\n        });\r\n\r\n        $('#kt_sweetalert_demo_6').click(function(e) {\r\n            swal.fire({\r\n                position: 'top-right',\r\n                type: 'success',\r\n                title: 'Your work has been saved',\r\n                showConfirmButton: false,\r\n                timer: 1500\r\n            });\r\n        });\r\n\r\n        $('#kt_sweetalert_demo_7').click(function(e) {\r\n            swal.fire({\r\n                title: 'jQuery HTML example',\r\n                html: $('<div>')\r\n                    .addClass('some-class')\r\n                    .text('jQuery is everywhere.'),\r\n                animation: false,\r\n                customClass: 'animated tada'\r\n            })\r\n        });\r\n\r\n        $('#kt_sweetalert_demo_8').click(function(e) {\r\n            swal.fire({\r\n                title: 'Are you sure?',\r\n                text: \"You won't be able to revert this!\",\r\n                type: 'warning',\r\n                showCancelButton: true,\r\n                confirmButtonText: 'Yes, delete it!'\r\n            }).then(function(result) {\r\n                if (result.value) {\r\n                    swal.fire(\r\n                        'Deleted!',\r\n                        'Your file has been deleted.',\r\n                        'success'\r\n                    )\r\n                }\r\n            });\r\n        });\r\n\r\n        $('#kt_sweetalert_demo_9').click(function(e) {\r\n            swal.fire({\r\n                title: 'Are you sure?',\r\n                text: \"You won't be able to revert this!\",\r\n                type: 'warning',\r\n                showCancelButton: true,\r\n                confirmButtonText: 'Yes, delete it!',\r\n                cancelButtonText: 'No, cancel!',\r\n                reverseButtons: true\r\n            }).then(function(result){\r\n                if (result.value) {\r\n                    swal.fire(\r\n                        'Deleted!',\r\n                        'Your file has been deleted.',\r\n                        'success'\r\n                    )\r\n                    // result.dismiss can be 'cancel', 'overlay',\r\n                    // 'close', and 'timer'\r\n                } else if (result.dismiss === 'cancel') {\r\n                    swal.fire(\r\n                        'Cancelled',\r\n                        'Your imaginary file is safe :)',\r\n                        'error'\r\n                    )\r\n                }\r\n            });\r\n        });\r\n\r\n        $('#kt_sweetalert_demo_10').click(function(e) {\r\n            swal.fire({\r\n                title: 'Sweet!',\r\n                text: 'Modal with a custom image.',\r\n                imageUrl: 'https://unsplash.it/400/200',\r\n                imageWidth: 400,\r\n                imageHeight: 200,\r\n                imageAlt: 'Custom image',\r\n                animation: false\r\n            });\r\n        });\r\n\r\n        $('#kt_sweetalert_demo_11').click(function(e) {\r\n            swal.fire({\r\n                title: 'Auto close alert!',\r\n                text: 'I will close in 5 seconds.',\r\n                timer: 5000,\r\n                onOpen: function() {\r\n                    swal.showLoading()\r\n                }\r\n            }).then(function(result) {\r\n                if (result.dismiss === 'timer') {\r\n                    console.log('I was closed by the timer')\r\n                }\r\n            })\r\n        });\r\n    };\r\n\r\n    return {\r\n        // Init\r\n        init: function() {\r\n            initDemos();\r\n        },\r\n    };\r\n}();\r\n\r\n// Class Initialization\r\njQuery(document).ready(function() {\r\n    KTSweetAlert2Demo.init();\r\n});\r\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/extended/sweetalert2.js?");

/***/ })

/******/ });