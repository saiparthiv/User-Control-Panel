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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/todo/todo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/todo/todo.js":
/*!**************************************************!*\
  !*** ../src/assets/js/pages/custom/todo/todo.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class definition\r\nvar KTAppTodo = function() {\r\n    var asideEl;\r\n    var listEl;\r\n    var viewEl;\r\n\r\n    var asideOffcanvas;\r\n\r\n    var initEditor = function(editor) {\r\n        // init editor\r\n        var options = {\r\n            modules: {\r\n                toolbar: {}\r\n            },\r\n            placeholder: 'Type message...',\r\n            theme: 'snow'\r\n        };\r\n\r\n        var editor = new Quill('#' + editor, options);\r\n    }\r\n\r\n    var initAttachments = function(elemId) {\r\n        var id = \"#\" + elemId;\r\n        var previewNode = $(id + \" .dropzone-item\");\r\n        previewNode.id = \"\";\r\n        var previewTemplate = previewNode.parent('.dropzone-items').html();\r\n        previewNode.remove();\r\n\r\n        var myDropzone = new Dropzone(id, { // Make the whole body a dropzone\r\n            url: \"https://keenthemes.com/scripts/void.php\", // Set the url for your upload script location\r\n            parallelUploads: 20,\r\n            maxFilesize: 1, // Max filesize in MB\r\n            previewTemplate: previewTemplate,\r\n            previewsContainer: id + \" .dropzone-items\", // Define the container to display the previews\r\n            clickable: id + \"_select\" // Define the element that should be used as click trigger to select files.\r\n        });\r\n\r\n        myDropzone.on(\"addedfile\", function(file) {\r\n            // Hookup the start button\r\n            $(document).find(id + ' .dropzone-item').css('display', '');\r\n        });\r\n\r\n        // Update the total progress bar\r\n        myDropzone.on(\"totaluploadprogress\", function(progress) {\r\n            document.querySelector(id + \" .progress-bar\").style.width = progress + \"%\";\r\n        });\r\n\r\n        myDropzone.on(\"sending\", function(file) {\r\n            // Show the total progress bar when upload starts\r\n            document.querySelector(id + \" .progress-bar\").style.opacity = \"1\";\r\n        });\r\n\r\n        // Hide the total progress bar when nothing's uploading anymore\r\n        myDropzone.on(\"complete\", function(progress) {\r\n            var thisProgressBar = id + \" .dz-complete\";\r\n            setTimeout(function() {\r\n                $(thisProgressBar + \" .progress-bar, \" + thisProgressBar + \" .progress\").css('opacity', '0');\r\n            }, 300)\r\n        });\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            asideEl = KTUtil.getByID('kt_todo_aside');\r\n            listEl = KTUtil.getByID('kt_todo_list');\r\n            viewEl = KTUtil.getByID('kt_todo_view');\r\n\r\n            // init\r\n            KTAppTodo.initAside();\r\n            KTAppTodo.initList();\r\n            KTAppTodo.initCommentForm();\r\n            KTAppTodo.initView();\r\n        },\r\n\r\n        initAside: function() {\r\n            // Mobile offcanvas for mobile mode\r\n            asideOffcanvas = new KTOffcanvas(asideEl, {\r\n                overlay: true,\r\n                baseClass: 'kt-todo__aside',\r\n                closeBy: 'kt_todo_aside_close',\r\n                toggleBy: 'kt_subheader_mobile_toggle'\r\n            });\r\n        },\r\n\r\n        initList: function() {\r\n            // View message\r\n            KTUtil.on(listEl, '.kt-todo__item', 'click', function(e) {\r\n                var actionsEl = KTUtil.find(this, '.kt-todo__actions');\r\n\r\n                // skip actions click\r\n                if (e.target === actionsEl || (actionsEl && actionsEl.contains(e.target) === true)) {\r\n                    return false;\r\n                }\r\n\r\n                if (KTUtil.isInResponsiveRange('tablet-and-mobile') === false) {\r\n                    return; // mobile mode\r\n                }\r\n\r\n                // demo loading\r\n                var loading = new KTDialog({\r\n                    'type': 'loader',\r\n                    'placement': 'top center',\r\n                    'message': 'Loading ...'\r\n                });\r\n                loading.show();\r\n\r\n                setTimeout(function() {\r\n                    loading.hide();\r\n\r\n                    KTUtil.css(listEl, 'display', 'none');\r\n                    KTUtil.css(viewEl, 'display', 'flex');\r\n                }, 700);\r\n            });\r\n\r\n            // Group selection\r\n            KTUtil.on(listEl, '.kt-todo__toolbar .kt-todo__check .kt-checkbox input', 'click', function() {\r\n                var items = KTUtil.findAll(listEl, '.kt-todo__items .kt-todo__item');\r\n\r\n                for (var i = 0, j = items.length; i < j; i++) {\r\n                    var item = items[i];\r\n                    var checkbox = KTUtil.find(item, '.kt-todo__actions .kt-checkbox input');\r\n                    checkbox.checked = this.checked;\r\n\r\n                    if (this.checked) {\r\n                        KTUtil.addClass(item, 'kt-todo__item--selected');\r\n                    } else {\r\n                        KTUtil.removeClass(item, 'kt-todo__item--selected');\r\n                    }\r\n                }\r\n            });\r\n\r\n            // Individual selection\r\n            KTUtil.on(listEl, '.kt-todo__item .kt-checkbox input', 'click', function() {\r\n                var item = this.closest('.kt-todo__item');\r\n\r\n                if (item && this.checked) {\r\n                    KTUtil.addClass(item, 'kt-todo__item--selected');\r\n                } else {\r\n                    KTUtil.removeClass(item, 'kt-todo__item--selected');\r\n                }\r\n            });\r\n        },\r\n\r\n        initView: function() {\r\n            // Back to listing\r\n            KTUtil.on(viewEl, '.kt-todo__toolbar .kt-todo__icon.kt-todo__icon--back', 'click', function() {\r\n                // demo loading\r\n                var loading = new KTDialog({\r\n                    'type': 'loader',\r\n                    'placement': 'top center',\r\n                    'message': 'Loading ...'\r\n                });\r\n                loading.show();\r\n\r\n                setTimeout(function() {\r\n                    loading.hide();\r\n\r\n                    KTUtil.css(listEl, 'display', 'flex');\r\n                    KTUtil.css(viewEl, 'display', 'none');\r\n                }, 700);\r\n            });\r\n        },\r\n\r\n        initCommentForm: function() {\r\n            initEditor('kt_todo_post_editor');\r\n            initAttachments('kt_todo_post_attachments');\r\n        }\r\n    };\r\n}();\r\n\r\nKTUtil.ready(function() {\r\n    KTAppTodo.init();\r\n});\r\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/todo/todo.js?");

/***/ })

/******/ });