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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/projects/add-project.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/projects/add-project.js":
/*!*************************************************************!*\
  !*** ../src/assets/js/pages/custom/projects/add-project.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class definition\r\nvar KTProjectsAdd = function () {\r\n\t// Base elements\r\n\tvar wizardEl;\r\n\tvar formEl;\r\n\tvar validator;\r\n\tvar wizard;\r\n\tvar avatar;\r\n\r\n\t// Private functions\r\n\tvar initWizard = function () {\r\n\t\t// Initialize form wizard\r\n\t\twizard = new KTWizard('kt_projects_add', {\r\n\t\t\tstartStep: 1, // initial active step number\r\n\t\t\tclickableSteps: true  // allow step clicking\r\n\t\t});\r\n\r\n\t\t// Validation before going to next page\r\n\t\twizard.on('beforeNext', function(wizardObj) {\r\n\t\t\tif (validator.form() !== true) {\r\n\t\t\t\twizardObj.stop();  // don't go to the next step\r\n\t\t\t}\r\n\t\t})\r\n\r\n\t\t// Change event\r\n\t\twizard.on('change', function(wizard) {\r\n\t\t\tKTUtil.scrollTop();\r\n\t\t});\r\n\t}\r\n\r\n\tvar initValidation = function() {\r\n\t\tvalidator = formEl.validate({\r\n\t\t\t// Validate only visible fields\r\n\t\t\tignore: \":hidden\",\r\n\r\n\t\t\t// Validation rules\r\n\t\t\trules: {\r\n\t\t\t\t// Step 1\r\n\t\t\t\tprofile_avatar: {\r\n\t\t\t\t\t//required: true\r\n\t\t\t\t},\r\n\t\t\t\tprofile_first_name: {\r\n\t\t\t\t\trequired: true\r\n\t\t\t\t},\r\n\t\t\t\tprofile_last_name: {\r\n\t\t\t\t\trequired: true\r\n\t\t\t\t},\r\n\t\t\t\tprofile_phone: {\r\n\t\t\t\t\trequired: true\r\n\t\t\t\t},\r\n\t\t\t\tprofile_email: {\r\n\t\t\t\t\trequired: true,\r\n\t\t\t\t\temail: true\r\n\t\t\t\t}\r\n\t\t\t},\r\n\r\n\t\t\t// Display error\r\n\t\t\tinvalidHandler: function(event, validator) {\r\n\t\t\t\tKTUtil.scrollTop();\r\n\r\n\t\t\t\tswal.fire({\r\n\t\t\t\t\t\"title\": \"\",\r\n\t\t\t\t\t\"text\": \"There are some errors in your submission. Please correct them.\",\r\n\t\t\t\t\t\"type\": \"error\",\r\n\t\t\t\t\t\"buttonStyling\": false,\r\n\t\t\t\t\t\"confirmButtonClass\": \"btn btn-brand btn-sm btn-bold\"\r\n\t\t\t\t});\r\n\t\t\t},\r\n\r\n\t\t\t// Submit valid form\r\n\t\t\tsubmitHandler: function (form) {\r\n\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar initSubmit = function() {\r\n\t\tvar btn = formEl.find('[data-ktwizard-type=\"action-submit\"]');\r\n\r\n\t\tbtn.on('click', function(e) {\r\n\t\t\te.preventDefault();\r\n\r\n\t\t\tif (validator.form()) {\r\n\t\t\t\t// See: src\\js\\framework\\base\\app.js\r\n\t\t\t\tKTApp.progress(btn);\r\n\t\t\t\t//KTApp.block(formEl);\r\n\r\n\t\t\t\t// See: http://malsup.com/jquery/form/#ajaxSubmit\r\n\t\t\t\tformEl.ajaxSubmit({\r\n\t\t\t\t\tsuccess: function() {\r\n\t\t\t\t\t\tKTApp.unprogress(btn);\r\n\t\t\t\t\t\t//KTApp.unblock(formEl);\r\n\r\n\t\t\t\t\t\tswal.fire({\r\n\t\t\t\t\t\t\t\"title\": \"\",\r\n\t\t\t\t\t\t\t\"text\": \"The application has been successfully submitted!\",\r\n\t\t\t\t\t\t\t\"type\": \"success\",\r\n\t\t\t\t\t\t\t\"confirmButtonClass\": \"btn btn-secondary\"\r\n\t\t\t\t\t\t});\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tvar initAvatar = function() {\r\n\t\tavatar = new KTAvatar('kt_projects_add_avatar');\r\n\t}\r\n\r\n\treturn {\r\n\t\t// public functions\r\n\t\tinit: function() {\r\n\t\t\tformEl = $('#kt_projects_add_form');\r\n\r\n\t\t\tinitWizard();\r\n\t\t\tinitValidation();\r\n\t\t\tinitSubmit();\r\n\t\t\tinitAvatar();\r\n\t\t}\r\n\t};\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n\tKTProjectsAdd.init();\r\n});\r\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/projects/add-project.js?");

/***/ })

/******/ });