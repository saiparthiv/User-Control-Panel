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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/file-upload/dropzonejs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/file-upload/dropzonejs.js":
/*!*************************************************************!*\
  !*** ../src/assets/js/pages/crud/file-upload/dropzonejs.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// Class definition\r\n\r\nvar KTDropzoneDemo = function () {\r\n    // Private functions\r\n    var demo1 = function () {\r\n        // single file upload\r\n        $('#kt_dropzone_1').dropzone({\r\n            url: \"https://keenthemes.com/scripts/void.php\", // Set the url for your upload script location\r\n            paramName: \"file\", // The name that will be used to transfer the file\r\n            maxFiles: 1,\r\n            maxFilesize: 5, // MB\r\n            addRemoveLinks: true,\r\n            accept: function(file, done) {\r\n                if (file.name == \"justinbieber.jpg\") {\r\n                    done(\"Naha, you don't.\");\r\n                } else {\r\n                    done();\r\n                }\r\n            }\r\n        });\r\n\r\n        // multiple file upload\r\n        $('#kt_dropzone_2').dropzone({\r\n            url: \"https://keenthemes.com/scripts/void.php\", // Set the url for your upload script location\r\n            paramName: \"file\", // The name that will be used to transfer the file\r\n            maxFiles: 10,\r\n            maxFilesize: 10, // MB\r\n            addRemoveLinks: true,\r\n            accept: function(file, done) {\r\n                if (file.name == \"justinbieber.jpg\") {\r\n                    done(\"Naha, you don't.\");\r\n                } else {\r\n                    done();\r\n                }\r\n            }\r\n        });\r\n\r\n        // file type validation\r\n        $('#kt_dropzone_3').dropzone({\r\n            url: \"https://keenthemes.com/scripts/void.php\", // Set the url for your upload script location\r\n            paramName: \"file\", // The name that will be used to transfer the file\r\n            maxFiles: 10,\r\n            maxFilesize: 10, // MB\r\n            addRemoveLinks: true,\r\n            acceptedFiles: \"image/*,application/pdf,.psd\",\r\n            accept: function(file, done) {\r\n                if (file.name == \"justinbieber.jpg\") {\r\n                    done(\"Naha, you don't.\");\r\n                } else {\r\n                    done();\r\n                }\r\n            }\r\n        });\r\n    }\r\n\r\n    var demo2 = function () {\r\n        // set the dropzone container id\r\n        var id = '#kt_dropzone_4';\r\n\r\n        // set the preview element template\r\n        var previewNode = $(id + \" .dropzone-item\");\r\n        previewNode.id = \"\";\r\n        var previewTemplate = previewNode.parent('.dropzone-items').html();\r\n        previewNode.remove();\r\n\r\n        var myDropzone4 = new Dropzone(id, { // Make the whole body a dropzone\r\n            url: \"https://keenthemes.com/scripts/void.php\", // Set the url for your upload script location\r\n            parallelUploads: 20,\r\n            previewTemplate: previewTemplate,\r\n            maxFilesize: 1, // Max filesize in MB\r\n            autoQueue: false, // Make sure the files aren't queued until manually added\r\n            previewsContainer: id + \" .dropzone-items\", // Define the container to display the previews\r\n            clickable: id + \" .dropzone-select\" // Define the element that should be used as click trigger to select files.\r\n        });\r\n\r\n        myDropzone4.on(\"addedfile\", function(file) {\r\n            // Hookup the start button\r\n            file.previewElement.querySelector(id + \" .dropzone-start\").onclick = function() { myDropzone4.enqueueFile(file); };\r\n            $(document).find( id + ' .dropzone-item').css('display', '');\r\n            $( id + \" .dropzone-upload, \" + id + \" .dropzone-remove-all\").css('display', 'inline-block');\r\n        });\r\n\r\n        // Update the total progress bar\r\n        myDropzone4.on(\"totaluploadprogress\", function(progress) {\r\n            $(this).find( id + \" .progress-bar\").css('width', progress + \"%\");\r\n        });\r\n\r\n        myDropzone4.on(\"sending\", function(file) {\r\n            // Show the total progress bar when upload starts\r\n            $( id + \" .progress-bar\").css('opacity', '1');\r\n            // And disable the start button\r\n            file.previewElement.querySelector(id + \" .dropzone-start\").setAttribute(\"disabled\", \"disabled\");\r\n        });\r\n\r\n        // Hide the total progress bar when nothing's uploading anymore\r\n        myDropzone4.on(\"complete\", function(progress) {\r\n            var thisProgressBar = id + \" .dz-complete\";\r\n            setTimeout(function(){\r\n                $( thisProgressBar + \" .progress-bar, \" + thisProgressBar + \" .progress, \" + thisProgressBar + \" .dropzone-start\").css('opacity', '0');\r\n            }, 300)\r\n\r\n        });\r\n\r\n        // Setup the buttons for all transfers\r\n        document.querySelector( id + \" .dropzone-upload\").onclick = function() {\r\n            myDropzone4.enqueueFiles(myDropzone4.getFilesWithStatus(Dropzone.ADDED));\r\n        };\r\n\r\n        // Setup the button for remove all files\r\n        document.querySelector(id + \" .dropzone-remove-all\").onclick = function() {\r\n            $( id + \" .dropzone-upload, \" + id + \" .dropzone-remove-all\").css('display', 'none');\r\n            myDropzone4.removeAllFiles(true);\r\n        };\r\n\r\n        // On all files completed upload\r\n        myDropzone4.on(\"queuecomplete\", function(progress){\r\n            $( id + \" .dropzone-upload\").css('display', 'none');\r\n        });\r\n\r\n        // On all files removed\r\n        myDropzone4.on(\"removedfile\", function(file){\r\n            if(myDropzone4.files.length < 1){\r\n                $( id + \" .dropzone-upload, \" + id + \" .dropzone-remove-all\").css('display', 'none');\r\n            }\r\n        });\r\n    }\r\n\r\n    var demo3 = function () {\r\n         // set the dropzone container id\r\n         var id = '#kt_dropzone_5';\r\n\r\n         // set the preview element template\r\n         var previewNode = $(id + \" .dropzone-item\");\r\n         previewNode.id = \"\";\r\n         var previewTemplate = previewNode.parent('.dropzone-items').html();\r\n         previewNode.remove();\r\n\r\n         var myDropzone5 = new Dropzone(id, { // Make the whole body a dropzone\r\n             url: \"https://keenthemes.com/scripts/void.php\", // Set the url for your upload script location\r\n             parallelUploads: 20,\r\n             maxFilesize: 1, // Max filesize in MB\r\n             previewTemplate: previewTemplate,\r\n             previewsContainer: id + \" .dropzone-items\", // Define the container to display the previews\r\n             clickable: id + \" .dropzone-select\" // Define the element that should be used as click trigger to select files.\r\n         });\r\n\r\n         myDropzone5.on(\"addedfile\", function(file) {\r\n             // Hookup the start button\r\n             $(document).find( id + ' .dropzone-item').css('display', '');\r\n         });\r\n\r\n         // Update the total progress bar\r\n         myDropzone5.on(\"totaluploadprogress\", function(progress) {\r\n             $( id + \" .progress-bar\").css('width', progress + \"%\");\r\n         });\r\n\r\n         myDropzone5.on(\"sending\", function(file) {\r\n             // Show the total progress bar when upload starts\r\n             $( id + \" .progress-bar\").css('opacity', \"1\");\r\n         });\r\n\r\n         // Hide the total progress bar when nothing's uploading anymore\r\n         myDropzone5.on(\"complete\", function(progress) {\r\n             var thisProgressBar = id + \" .dz-complete\";\r\n             setTimeout(function(){\r\n                 $( thisProgressBar + \" .progress-bar, \" + thisProgressBar + \" .progress\").css('opacity', '0');\r\n             }, 300)\r\n         });\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            demo1();\r\n            demo2();\r\n            demo3();\r\n        }\r\n    };\r\n}();\r\n\r\nKTUtil.ready(function() {\r\n    KTDropzoneDemo.init();\r\n});\r\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/file-upload/dropzonejs.js?");

/***/ })

/******/ });