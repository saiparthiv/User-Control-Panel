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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/builder.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/builder.js":
/*!*****************************************!*\
  !*** ../src/assets/js/pages/builder.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class definition\r\nvar KTLayoutBuilder = function() {\r\n\r\n\tvar exporter = {\r\n\t\tinit: function() {\r\n\t\t\t$('#kt-btn-howto').click(function(e) {\r\n\t\t\t\te.preventDefault();\r\n\t\t\t\t$('#kt-howto').slideToggle();\r\n\t\t\t});\r\n\t\t},\r\n\t\tstartLoad: function(options) {\r\n\t\t\t$('#builder_export').\r\n\t\t\taddClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').\r\n\t\t\tfind('span').text('Exporting...').\r\n\t\t\tclosest('.kt-form__actions').\r\n\t\t\tfind('.btn').\r\n\t\t\tattr('disabled', true);\r\n\t\t\ttoastr.info(options.title, options.message);\r\n\t\t},\r\n\t\tdoneLoad: function() {\r\n\t\t\t$('#builder_export').\r\n\t\t\tremoveClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').\r\n\t\t\tfind('span').text('Export').\r\n\t\t\tclosest('.kt-form__actions').\r\n\t\t\tfind('.btn').\r\n\t\t\tattr('disabled', false);\r\n\t\t},\r\n\t\texportHtml: function(demo) {\r\n\t\t\texporter.startLoad({\r\n\t\t\t\ttitle: 'Generate HTML Partials',\r\n\t\t\t\tmessage: 'Process started and it may take about 1 to 10 minutes.',\r\n\t\t\t});\r\n\r\n\t\t\t$.ajax('index.php', {\r\n\t\t\t\tmethod: 'POST',\r\n\t\t\t\tdata: {\r\n\t\t\t\t\tbuilder_export: 1,\r\n\t\t\t\t\texport_type: 'partial',\r\n\t\t\t\t\tdemo: demo,\r\n\t\t\t\t\ttheme: 'metronic',\r\n\t\t\t\t},\r\n\t\t\t}).done(function(r) {\r\n\t\t\t\tvar result = JSON.parse(r);\r\n\t\t\t\tif (result.message) {\r\n\t\t\t\t\texporter.stopWithNotify(result.message);\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tvar timer = setInterval(function() {\r\n\t\t\t\t\t$.ajax('index.php', {\r\n\t\t\t\t\t\tmethod: 'POST',\r\n\t\t\t\t\t\tdata: {\r\n\t\t\t\t\t\t\tbuilder_export: 1,\r\n\t\t\t\t\t\t\tbuilder_check: result.id,\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t}).done(function(r) {\r\n\t\t\t\t\t\tvar result = JSON.parse(r);\r\n\t\t\t\t\t\tif (typeof result === 'undefined') return;\r\n\t\t\t\t\t\t// export status 1 is completed\r\n\t\t\t\t\t\tif (result.export_status !== 1) return;\r\n\r\n\t\t\t\t\t\t$('<iframe/>').attr({\r\n\t\t\t\t\t\t\tsrc: 'index.php?builder_export&builder_download&id=' + result.id,\r\n\t\t\t\t\t\t\tstyle: 'visibility:hidden;display:none',\r\n\t\t\t\t\t\t}).ready(function() {\r\n\t\t\t\t\t\t\ttoastr.success('Export HTML Version Layout', 'HTML version exported.');\r\n\t\t\t\t\t\t\texporter.doneLoad();\r\n\t\t\t\t\t\t\t// stop the timer\r\n\t\t\t\t\t\t\tclearInterval(timer);\r\n\t\t\t\t\t\t}).appendTo('body');\r\n\t\t\t\t\t});\r\n\t\t\t\t}, 15000);\r\n\r\n\t\t\t\t// generate download\r\n\t\t\t\t// setTimeout(function() {\r\n\t\t\t\t// \texporter.runGenerate();\r\n\t\t\t\t// }, 5000);\r\n\t\t\t});\r\n\t\t},\r\n\t\texportHtmlStatic: function(demo) {\r\n\t\t\texporter.startLoad({\r\n\t\t\t\ttitle: 'Generate HTML Static Version',\r\n\t\t\t\tmessage: 'Process started and it may take about 1 to 10 minutes.',\r\n\t\t\t});\r\n\r\n\t\t\t$.ajax('index.php', {\r\n\t\t\t\tmethod: 'POST',\r\n\t\t\t\tdata: {\r\n\t\t\t\t\tbuilder_export: 1,\r\n\t\t\t\t\texport_type: 'html',\r\n\t\t\t\t\tdemo: demo,\r\n\t\t\t\t\ttheme: 'metronic',\r\n\t\t\t\t},\r\n\t\t\t}).done(function(r) {\r\n\t\t\t\tvar result = JSON.parse(r);\r\n\t\t\t\tif (result.message) {\r\n\t\t\t\t\texporter.stopWithNotify(result.message);\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tvar timer = setInterval(function() {\r\n\t\t\t\t\t$.ajax('index.php', {\r\n\t\t\t\t\t\tmethod: 'POST',\r\n\t\t\t\t\t\tdata: {\r\n\t\t\t\t\t\t\tbuilder_export: 1,\r\n\t\t\t\t\t\t\tbuilder_check: result.id,\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t}).done(function(r) {\r\n\t\t\t\t\t\tvar result = JSON.parse(r);\r\n\t\t\t\t\t\tif (typeof result === 'undefined') return;\r\n\t\t\t\t\t\t// export status 1 is completed\r\n\t\t\t\t\t\tif (result.export_status !== 1) return;\r\n\r\n\t\t\t\t\t\t$('<iframe/>').attr({\r\n\t\t\t\t\t\t\tsrc: 'index.php?builder_export&builder_download&id=' + result.id,\r\n\t\t\t\t\t\t\tstyle: 'visibility:hidden;display:none',\r\n\t\t\t\t\t\t}).ready(function() {\r\n\t\t\t\t\t\t\ttoastr.success('Export Default Version', 'Default HTML version exported with current configured layout.');\r\n\t\t\t\t\t\t\texporter.doneLoad();\r\n\t\t\t\t\t\t\t// stop the timer\r\n\t\t\t\t\t\t\tclearInterval(timer);\r\n\t\t\t\t\t\t}).appendTo('body');\r\n\t\t\t\t\t});\r\n\t\t\t\t}, 15000);\r\n\t\t\t});\r\n\t\t},\r\n\t\tstopWithNotify: function(message, type) {\r\n\t\t\ttype = type || 'danger';\r\n\t\t\tif (typeof toastr[type] !== 'undefined') {\r\n\t\t\t\ttoastr[type]('Verification failed', message);\r\n\t\t\t}\r\n\t\t\texporter.doneLoad();\r\n\t\t},\r\n\t\trunGenerate: function() {\r\n\t\t\t$.ajax('../tools/builder/cron-generate.php', {\r\n\t\t\t\tmethod: 'POST',\r\n\t\t\t\tdata: {\r\n\t\t\t\t\ttheme: 'metronic',\r\n\t\t\t\t},\r\n\t\t\t}).done(function(r) {});\r\n\t\t}\r\n\t};\r\n\r\n\t// Private functions\r\n\tvar preview = function() {\r\n\t\t$('[name=\"builder_submit\"]').click(function(e) {\r\n\t\t\te.preventDefault();\r\n\t\t\tvar _self = $(this);\r\n\t\t\t$(_self).\r\n\t\t\taddClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').\r\n\t\t\tclosest('.kt-form__actions').\r\n\t\t\tfind('.btn').\r\n\t\t\tattr('disabled', true);\r\n\r\n\t\t\t$.ajax('index.php?demo=' + $(_self).data('demo'), {\r\n\t\t\t\tmethod: 'POST',\r\n\t\t\t\tdata: $('[name]').serialize(),\r\n\t\t\t}).done(function(r) {\r\n\t\t\t\ttoastr.success('Preview updated', 'Preview has been updated with current configured layout.');\r\n\t\t\t}).always(function() {\r\n\t\t\t\tsetTimeout(function() {\r\n\t\t\t\t\tlocation.reload();\r\n\t\t\t\t}, 600);\r\n\t\t\t});\r\n\t\t});\r\n\t};\r\n\r\n\tvar reset = function() {\r\n\t\t$('[name=\"builder_reset\"]').click(function(e) {\r\n\t\t\te.preventDefault();\r\n\t\t\tvar _self = $(this);\r\n\t\t\t$(_self).\r\n\t\t\taddClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').\r\n\t\t\tclosest('.kt-form__actions').\r\n\t\t\tfind('.btn').\r\n\t\t\tattr('disabled', true);\r\n\r\n\t\t\t$.ajax('index.php?demo=' + $(_self).data('demo'), {\r\n\t\t\t\tmethod: 'POST',\r\n\t\t\t\tdata: {\r\n\t\t\t\t\tbuilder_reset: 1,\r\n\t\t\t\t\tdemo: $(_self).data('demo'),\r\n\t\t\t\t},\r\n\t\t\t}).done(function(r) {}).always(function() {\r\n\t\t\t\tlocation.reload();\r\n\t\t\t});\r\n\t\t});\r\n\t};\r\n\r\n\tvar keepActiveTab = function() {\r\n\t\t$('[href^=\"#kt_builder_\"]').click(function(e) {\r\n\t\t\tvar which = $(this).attr('href');\r\n\t\t\tvar btn = $('[name=\"builder_submit\"]');\r\n\t\t\tvar tab = $('[name=\"builder[tab]\"]');\r\n\t\t\tif ($(tab).length === 0) {\r\n\t\t\t\t$('<input/>').\r\n\t\t\t\tattr('type', 'hidden').\r\n\t\t\t\tattr('name', 'builder[tab]').\r\n\t\t\t\tval(which).\r\n\t\t\t\tinsertBefore(btn);\r\n\t\t\t} else {\r\n\t\t\t\t$(tab).val(which);\r\n\t\t\t}\r\n\t\t}).each(function() {\r\n\t\t\tif ($(this).hasClass('active')) {\r\n\t\t\t\tvar which = $(this).attr('href');\r\n\t\t\t\tvar btn = $('[name=\"builder_submit\"]');\r\n\t\t\t\tvar tab = $('[name=\"builder[tab]\"]');\r\n\t\t\t\tif ($(tab).length === 0) {\r\n\t\t\t\t\t$('<input/>').\r\n\t\t\t\t\tattr('type', 'hidden').\r\n\t\t\t\t\tattr('name', 'builder[tab]').\r\n\t\t\t\t\tval(which).\r\n\t\t\t\t\tinsertBefore(btn);\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(tab).val(which);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t};\r\n\r\n\tvar verify = {\r\n\t\treCaptchaVerified: function() {\r\n\t\t\treturn $.ajax('../tools/builder/recaptcha.php?recaptcha', {\r\n\t\t\t\tmethod: 'POST',\r\n\t\t\t\tdata: {\r\n\t\t\t\t\tresponse: $('#g-recaptcha-response').val(),\r\n\t\t\t\t},\r\n\t\t\t}).fail(function() {\r\n\t\t\t\tgrecaptcha.reset();\r\n\t\t\t\t$('#alert-message').\r\n\t\t\t\tremoveClass('alert-success kt-hide').\r\n\t\t\t\taddClass('alert-danger').\r\n\t\t\t\thtml('Invalid reCaptcha validation');\r\n\t\t\t});\r\n\t\t},\r\n\t\tinit: function() {\r\n\t\t\tvar exportReadyTrigger;\r\n\t\t\t// click event\r\n\t\t\t$('#builder_export').click(function(e) {\r\n\t\t\t\te.preventDefault();\r\n\t\t\t\texportReadyTrigger = $(this);\r\n\r\n\t\t\t\t$('#kt-modal-purchase').modal('show');\r\n\t\t\t\t$('#alert-message').addClass('kt-hide');\r\n\t\t\t\tgrecaptcha.reset();\r\n\t\t\t});\r\n\r\n\t\t\t$('#submit-verify').click(function(e) {\r\n\t\t\t\te.preventDefault();\r\n\t\t\t\tif (!$('#g-recaptcha-response').val()) {\r\n\t\t\t\t\t$('#alert-message').\r\n\t\t\t\t\tremoveClass('alert-success kt-hide').\r\n\t\t\t\t\taddClass('alert-danger').\r\n\t\t\t\t\thtml('Invalid reCaptcha validation');\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tverify.reCaptchaVerified().done(function(response) {\r\n\t\t\t\t\tif (response.success) {\r\n\t\t\t\t\t\t$('[data-dismiss=\"modal\"]').trigger('click');\r\n\r\n\t\t\t\t\t\tvar demo = $(exportReadyTrigger).data('demo');\r\n\t\t\t\t\t\tswitch ($(exportReadyTrigger).attr('id')) {\r\n\t\t\t\t\t\t\tcase 'builder_export':\r\n\t\t\t\t\t\t\t\texporter.exportHtml(demo);\r\n\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\tcase 'builder_export_html':\r\n\t\t\t\t\t\t\t\texporter.exportHtml(demo);\r\n\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\tcase 'builder_export_html_static':\r\n\t\t\t\t\t\t\t\texporter.exportHtmlStatic(demo);\r\n\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tgrecaptcha.reset();\r\n\t\t\t\t\t\t$('#alert-message').\r\n\t\t\t\t\t\tremoveClass('alert-success kt-hide').\r\n\t\t\t\t\t\taddClass('alert-danger').\r\n\t\t\t\t\t\thtml('Invalid reCaptcha validation');\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t},\r\n\t};\r\n\r\n\t// basic demo\r\n\tvar init = function() {\r\n\t\texporter.init();\r\n\t\tkeepActiveTab();\r\n\t\tpreview();\r\n\t\treset();\r\n\t};\r\n\r\n\treturn {\r\n\t\t// public functions\r\n\t\tinit: function() {\r\n\t\t\tverify.init();\r\n\t\t\tinit();\r\n\t\t}\r\n\t};\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n\tKTLayoutBuilder.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/builder.js?");

/***/ })

/******/ });