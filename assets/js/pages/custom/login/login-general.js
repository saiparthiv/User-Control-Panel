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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/login/login-general.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/login/login-general.js":
/*!************************************************************!*\
  !*** ../src/assets/js/pages/custom/login/login-general.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class Definition\r\nvar KTLoginGeneral = function() {\r\n\r\n    var login = $('#kt_login');\r\n\r\n    var showErrorMsg = function(form, type, msg) {\r\n        var alert = $('<div class=\"alert alert-' + type + ' alert-dismissible\" role=\"alert\">\\\r\n\t\t\t<div class=\"alert-text\">'+msg+'</div>\\\r\n\t\t\t<div class=\"alert-close\">\\\r\n                <i class=\"flaticon2-cross kt-icon-sm\" data-dismiss=\"alert\"></i>\\\r\n            </div>\\\r\n\t\t</div>');\r\n\r\n        form.find('.alert').remove();\r\n        alert.prependTo(form);\r\n        //alert.animateClass('fadeIn animated');\r\n        KTUtil.animateClass(alert[0], 'fadeIn animated');\r\n        alert.find('span').html(msg);\r\n    }\r\n\r\n    // Private Functions\r\n    var displaySignUpForm = function() {\r\n        login.removeClass('kt-login--forgot');\r\n        login.removeClass('kt-login--signin');\r\n\r\n        login.addClass('kt-login--signup');\r\n        KTUtil.animateClass(login.find('.kt-login__signup')[0], 'flipInX animated');\r\n    }\r\n\r\n    var displaySignInForm = function() {\r\n        login.removeClass('kt-login--forgot');\r\n        login.removeClass('kt-login--signup');\r\n\r\n        login.addClass('kt-login--signin');\r\n        KTUtil.animateClass(login.find('.kt-login__signin')[0], 'flipInX animated');\r\n        //login.find('.kt-login__signin').animateClass('flipInX animated');\r\n    }\r\n\r\n    var displayForgotForm = function() {\r\n        login.removeClass('kt-login--signin');\r\n        login.removeClass('kt-login--signup');\r\n\r\n        login.addClass('kt-login--forgot');\r\n        //login.find('.kt-login--forgot').animateClass('flipInX animated');\r\n        KTUtil.animateClass(login.find('.kt-login__forgot')[0], 'flipInX animated');\r\n\r\n    }\r\n\r\n    var handleFormSwitch = function() {\r\n        $('#kt_login_forgot').click(function(e) {\r\n            e.preventDefault();\r\n            displayForgotForm();\r\n        });\r\n\r\n        $('#kt_login_forgot_cancel').click(function(e) {\r\n            e.preventDefault();\r\n            displaySignInForm();\r\n        });\r\n\r\n        $('#kt_login_signup').click(function(e) {\r\n            e.preventDefault();\r\n            displaySignUpForm();\r\n        });\r\n\r\n        $('#kt_login_signup_cancel').click(function(e) {\r\n            e.preventDefault();\r\n            displaySignInForm();\r\n        });\r\n    }\r\n\r\n    var handleSignInFormSubmit = function() {\r\n        $('#kt_login_signin_submit').click(function(e) {\r\n            e.preventDefault();\r\n            var btn = $(this);\r\n            var form = $(this).closest('form');\r\n\r\n            form.validate({\r\n                rules: {\r\n                    email: {\r\n                        required: true,\r\n                        email: true\r\n                    },\r\n                    password: {\r\n                        required: true\r\n                    }\r\n                }\r\n            });\r\n\r\n            if (!form.valid()) {\r\n                return;\r\n            }\r\n\r\n            btn.addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', true);\r\n\r\n            form.ajaxSubmit({\r\n                url: '',\r\n                success: function(response, status, xhr, $form) {\r\n                \t// similate 2s delay\r\n                \tsetTimeout(function() {\r\n\t                    btn.removeClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', false);\r\n\t                    showErrorMsg(form, 'danger', 'Incorrect username or password. Please try again.');\r\n                    }, 2000);\r\n                }\r\n            });\r\n        });\r\n    }\r\n\r\n    var handleSignUpFormSubmit = function() {\r\n        $('#kt_login_signup_submit').click(function(e) {\r\n            e.preventDefault();\r\n\r\n            var btn = $(this);\r\n            var form = $(this).closest('form');\r\n\r\n            form.validate({\r\n                rules: {\r\n                    fullname: {\r\n                        required: true\r\n                    },\r\n                    email: {\r\n                        required: true,\r\n                        email: true\r\n                    },\r\n                    password: {\r\n                        required: true\r\n                    },\r\n                    rpassword: {\r\n                        required: true\r\n                    },\r\n                    agree: {\r\n                        required: true\r\n                    }\r\n                }\r\n            });\r\n\r\n            if (!form.valid()) {\r\n                return;\r\n            }\r\n\r\n            btn.addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', true);\r\n\r\n            form.ajaxSubmit({\r\n                url: '',\r\n                success: function(response, status, xhr, $form) {\r\n                \t// similate 2s delay\r\n                \tsetTimeout(function() {\r\n\t                    btn.removeClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', false);\r\n\t                    form.clearForm();\r\n\t                    form.validate().resetForm();\r\n\r\n\t                    // display signup form\r\n\t                    displaySignInForm();\r\n\t                    var signInForm = login.find('.kt-login__signin form');\r\n\t                    signInForm.clearForm();\r\n\t                    signInForm.validate().resetForm();\r\n\r\n\t                    showErrorMsg(signInForm, 'success', 'Thank you. To complete your registration please check your email.');\r\n\t                }, 2000);\r\n                }\r\n            });\r\n        });\r\n    }\r\n\r\n    var handleForgotFormSubmit = function() {\r\n        $('#kt_login_forgot_submit').click(function(e) {\r\n            e.preventDefault();\r\n\r\n            var btn = $(this);\r\n            var form = $(this).closest('form');\r\n\r\n            form.validate({\r\n                rules: {\r\n                    email: {\r\n                        required: true,\r\n                        email: true\r\n                    }\r\n                }\r\n            });\r\n\r\n            if (!form.valid()) {\r\n                return;\r\n            }\r\n\r\n            btn.addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', true);\r\n\r\n            form.ajaxSubmit({\r\n                url: '',\r\n                success: function(response, status, xhr, $form) {\r\n                \t// similate 2s delay\r\n                \tsetTimeout(function() {\r\n                \t\tbtn.removeClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', false); // remove\r\n\t                    form.clearForm(); // clear form\r\n\t                    form.validate().resetForm(); // reset validation states\r\n\r\n\t                    // display signup form\r\n\t                    displaySignInForm();\r\n\t                    var signInForm = login.find('.kt-login__signin form');\r\n\t                    signInForm.clearForm();\r\n\t                    signInForm.validate().resetForm();\r\n\r\n\t                    showErrorMsg(signInForm, 'success', 'Cool! Password recovery instruction has been sent to your email.');\r\n                \t}, 2000);\r\n                }\r\n            });\r\n        });\r\n    }\r\n\r\n    // Public Functions\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            handleFormSwitch();\r\n            handleSignInFormSubmit();\r\n            handleSignUpFormSubmit();\r\n            handleForgotFormSubmit();\r\n        }\r\n    };\r\n}();\r\n\r\n// Class Initialization\r\njQuery(document).ready(function() {\r\n    KTLoginGeneral.init();\r\n});\r\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/login/login-general.js?");

/***/ })

/******/ });