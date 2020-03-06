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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/file-upload/uppy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/file-upload/uppy.js":
/*!*******************************************************!*\
  !*** ../src/assets/js/pages/crud/file-upload/uppy.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class definition\r\nvar KTUppy = function () {\r\n\tconst Tus = Uppy.Tus;\r\n\tconst ProgressBar = Uppy.ProgressBar;\r\n\tconst StatusBar = Uppy.StatusBar;\r\n\tconst FileInput = Uppy.FileInput;\r\n\tconst Informer = Uppy.Informer;\r\n\r\n\t// to get uppy companions working, please refer to the official documentation here: https://uppy.io/docs/companion/\r\n\tconst Dashboard = Uppy.Dashboard;\r\n\tconst Dropbox = Uppy.Dropbox;\r\n\tconst GoogleDrive = Uppy.GoogleDrive;\r\n\tconst Instagram = Uppy.Instagram;\r\n\tconst Webcam = Uppy.Webcam;\r\n\r\n\t// Private functions\r\n\tvar initUppy1 = function(){\r\n\t\tvar id = '#kt_uppy_1';\r\n\r\n\t\tvar options = {\r\n\t\t\tproudlyDisplayPoweredByUppy: false,\r\n\t\t\ttarget: id,\r\n\t\t\tinline: true,\r\n\t\t\treplaceTargetContent: true,\r\n\t\t\tshowProgressDetails: true,\r\n\t\t\tnote: 'No filetype restrictions.',\r\n\t\t\theight: 470,\r\n\t\t\tmetaFields: [\r\n\t\t\t\t{ id: 'name', name: 'Name', placeholder: 'file name' },\r\n\t\t\t\t{ id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }\r\n\t\t\t],\r\n\t\t\tbrowserBackButtonClose: true\r\n\t\t}\r\n\r\n\t\tvar uppyDashboard = Uppy.Core({ \r\n\t\t\tautoProceed: true,\r\n\t\t\trestrictions: {\r\n\t\t\t\tmaxFileSize: 1000000, // 1mb\r\n\t\t\t\tmaxNumberOfFiles: 5,\r\n\t\t\t\tminNumberOfFiles: 1\r\n\t\t\t} \r\n\t\t});\r\n\r\n\t\tuppyDashboard.use(Dashboard, options);  \r\n\t\tuppyDashboard.use(Tus, { endpoint: 'https://master.tus.io/files/' });\r\n\t\tuppyDashboard.use(GoogleDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });\r\n\t\tuppyDashboard.use(Dropbox, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });\r\n\t\tuppyDashboard.use(Instagram, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });\r\n\t\tuppyDashboard.use(Webcam, { target: Dashboard });\r\n\t}\r\n\r\n\tvar initUppy2 = function(){\r\n\t\tvar id = '#kt_uppy_2';\r\n\r\n\t\tvar options = {\r\n\t\t\tproudlyDisplayPoweredByUppy: false,\r\n\t\t\ttarget: id,\r\n\t\t\tinline: true,\r\n\t\t\treplaceTargetContent: true,\r\n\t\t\tshowProgressDetails: true,\r\n\t\t\tnote: 'Images and video only, 2–3 files, up to 1 MB',\r\n\t\t\theight: 470,\r\n\t\t\tmetaFields: [\r\n\t\t\t\t{ id: 'name', name: 'Name', placeholder: 'file name' },\r\n\t\t\t\t{ id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }\r\n\t\t\t],\r\n\t\t\tbrowserBackButtonClose: true\r\n\t\t}\r\n\r\n\t\tvar uppyDashboard = Uppy.Core({ \r\n\t\t\tautoProceed: true,\r\n\t\t\trestrictions: {\r\n\t\t\t\tmaxFileSize: 1000000, // 1mb\r\n\t\t\t\tmaxNumberOfFiles: 5,\r\n\t\t\t\tminNumberOfFiles: 1,\r\n\t\t\t\tallowedFileTypes: ['image/*', 'video/*']\r\n\t\t\t} \r\n\t\t});\r\n\r\n\t\tuppyDashboard.use(Dashboard, options);  \r\n\t\tuppyDashboard.use(Tus, { endpoint: 'https://master.tus.io/files/' });\r\n\t}\r\n\r\n\tvar initUppy3 = function(){\r\n\t\tvar id = '#kt_uppy_3';\r\n\r\n\t\tvar uppyDrag = Uppy.Core({ \r\n\t\t\tautoProceed: true,\r\n\t\t\trestrictions: {\r\n\t\t\t\tmaxFileSize: 1000000, // 1mb\r\n\t\t\t\tmaxNumberOfFiles: 5,\r\n\t\t\t\tminNumberOfFiles: 1,\r\n\t\t\t\tallowedFileTypes: ['image/*', 'video/*']\r\n\t\t\t} \r\n\t\t});\r\n\r\n\t\tuppyDrag.use(Uppy.DragDrop, { target: id + ' .kt-uppy__drag' });  \r\n\t\tuppyDrag.use(ProgressBar, { \r\n\t\t\ttarget: id + ' .kt-uppy__progress',\r\n\t\t\thideUploadButton: false,\r\n\t\t\thideAfterFinish: false \r\n\t\t});      \r\n\t\tuppyDrag.use(Informer, { target: id + ' .kt-uppy__informer'  });\r\n\t\tuppyDrag.use(Tus, { endpoint: 'https://master.tus.io/files/' });\r\n\r\n\t\tuppyDrag.on('complete', function(file) {\r\n\t\t\tvar imagePreview = \"\";\r\n\t\t\t$.each(file.successful, function(index, value){\r\n\t\t\t\tvar imageType = /image/;\r\n\t\t\t\tvar thumbnail = \"\";\r\n\t\t\t\tif (imageType.test(value.type)){\r\n\t\t\t\t\tthumbnail = '<div class=\"kt-uppy__thumbnail\"><img src=\"'+value.uploadURL+'\"/></div>';\r\n\t\t\t\t}\r\n\t\t\t\tvar sizeLabel = \"bytes\";\r\n\t\t\t\tvar filesize = value.size;\r\n\t\t\t\tif (filesize > 1024){\r\n\t\t\t\t\tfilesize = filesize / 1024;\r\n\t\t\t\t\tsizeLabel = \"kb\";\r\n\t\t\t\t\tif(filesize > 1024){\r\n\t\t\t\t\t\tfilesize = filesize / 1024;\r\n\t\t\t\t\t\tsizeLabel = \"MB\";\r\n\t\t\t\t\t}\r\n\t\t\t\t}\t\t\t\t\t\r\n\t\t\t\timagePreview += '<div class=\"kt-uppy__thumbnail-container\" data-id=\"'+value.id+'\">'+thumbnail+' <span class=\"kt-uppy__thumbnail-label\">'+value.name+' ('+ Math.round(filesize, 2) +' '+sizeLabel+')</span><span data-id=\"'+value.id+'\" class=\"kt-uppy__remove-thumbnail\"><i class=\"flaticon2-cancel-music\"></i></span></div>';\r\n\t\t\t});\r\n\r\n\t\t\t$(id + ' .kt-uppy__thumbnails').append(imagePreview);\r\n\t\t});\r\n\r\n\t\t$(document).on('click', id + ' .kt-uppy__thumbnails .kt-uppy__remove-thumbnail', function(){\r\n\t\t\tvar imageId = $(this).attr('data-id');\r\n\t\t\tuppyDrag.removeFile(imageId);\t\t\t\t\t\r\n\t\t\t$(id + ' .kt-uppy__thumbnail-container[data-id=\"'+imageId+'\"').remove();\r\n\t\t});\t\t\t\r\n\t}\r\n\r\n\tvar initUppy4 = function(){\r\n\t\tvar id = '#kt_uppy_4';\r\n\r\n\t\tvar uppyDrag = Uppy.Core({ \r\n\t\t\tautoProceed: false,\r\n\t\t\trestrictions: {\r\n\t\t\t\tmaxFileSize: 1000000, // 1mb\r\n\t\t\t\tmaxNumberOfFiles: 5,\r\n\t\t\t\tminNumberOfFiles: 1\r\n\t\t\t} \r\n\t\t});\r\n\t\t\r\n\t\tuppyDrag.use(Uppy.DragDrop, { target: id + ' .kt-uppy__drag' });  \r\n\t\tuppyDrag.use(ProgressBar, { target: id + ' .kt-uppy__progress' });      \r\n\t\tuppyDrag.use(Informer, { target: id + ' .kt-uppy__informer'  });\r\n\t\tuppyDrag.use(Tus, { endpoint: 'https://master.tus.io/files/' });\r\n\r\n\t\tuppyDrag.on('complete', function(file) {\r\n\t\t\tvar imagePreview = \"\";\r\n\t\t\t$.each(file.successful, function(index, value){\r\n\t\t\t\tvar imageType = /image/;\r\n\t\t\t\tvar thumbnail = \"\";\r\n\t\t\t\tif (imageType.test(value.type)){\r\n\t\t\t\t\tthumbnail = '<div class=\"kt-uppy__thumbnail\"><img src=\"'+value.uploadURL+'\"/></div>';\r\n\t\t\t\t}\r\n\t\t\t\tvar sizeLabel = \"bytes\";\r\n\t\t\t\tvar filesize = value.size;\r\n\t\t\t\tif (filesize > 1024){\r\n\t\t\t\t\tfilesize = filesize / 1024;\r\n\t\t\t\t\tsizeLabel = \"kb\";\r\n\t\t\t\t\tif(filesize > 1024){\r\n\t\t\t\t\t\tfilesize = filesize / 1024;\r\n\t\t\t\t\t\tsizeLabel = \"MB\";\r\n\t\t\t\t\t}\r\n\t\t\t\t}\t\t\t\t\t\r\n\t\t\t\timagePreview += '<div class=\"kt-uppy__thumbnail-container\" data-id=\"'+value.id+'\">'+thumbnail+' <span class=\"kt-uppy__thumbnail-label\">'+value.name+' ('+ Math.round(filesize, 2) +' '+sizeLabel+')</span><span data-id=\"'+value.id+'\" class=\"kt-uppy__remove-thumbnail\"><i class=\"flaticon2-cancel-music\"></i></span></div>';\r\n\t\t\t});\r\n\r\n\t\t\t$(id + ' .kt-uppy__thumbnails').append(imagePreview);\r\n\t\t});\r\n\r\n\t\tvar uploadBtn = $(id + ' .kt-uppy__btn');\r\n\t\tuploadBtn.click(function () {\r\n\t\t\tuppyDrag.upload();\r\n\t\t});\r\n\r\n\t\t$(document).on('click', id + ' .kt-uppy__thumbnails .kt-uppy__remove-thumbnail', function(){\r\n\t\t\tvar imageId = $(this).attr('data-id');\r\n\t\t\tuppyDrag.removeFile(imageId);\t\t\t\t\t\r\n\t\t\t$(id + ' .kt-uppy__thumbnail-container[data-id=\"'+imageId+'\"').remove();\r\n\t\t});\t\r\n\t}\r\n\r\n\tvar initUppy5 = function(){\r\n\t\t// Uppy variables\r\n        // For more info refer: https://uppy.io/\r\n\t\tvar elemId = 'kt_uppy_5';\r\n\t\tvar id = '#' + elemId;\r\n\t\tvar $statusBar = $(id + ' .kt-uppy__status');\r\n\t\tvar $uploadedList = $(id + ' .kt-uppy__list');\r\n\t\tvar timeout;\r\n\t\t\r\n\t\tvar uppyMin = Uppy.Core({\r\n\t\t\tdebug: true, \r\n\t\t\tautoProceed: true,\r\n\t\t\tshowProgressDetails: true,\r\n\t\t\trestrictions: {\r\n\t\t\t\tmaxFileSize: 1000000, // 1mb\r\n\t\t\t\tmaxNumberOfFiles: 5,\r\n\t\t\t\tminNumberOfFiles: 1\r\n\t\t\t}\r\n\t\t});\r\n\t\t\r\n\t\tuppyMin.use(FileInput, { target: id + ' .kt-uppy__wrapper', pretty: false });\r\n\t\tuppyMin.use(Informer, { target: id + ' .kt-uppy__informer'  });\r\n\r\n\t\t// demo file upload server\r\n\t\tuppyMin.use(Tus, { endpoint: 'https://master.tus.io/files/' });\r\n\t\tuppyMin.use(StatusBar, {\r\n\t\t\ttarget: id + ' .kt-uppy__status',\r\n\t\t\thideUploadButton: true,\r\n\t\t\thideAfterFinish: false\r\n\t\t});\r\n\r\n\t\t$(id + ' .uppy-FileInput-input').addClass('kt-uppy__input-control').attr('id', elemId + '_input_control');\r\n\t\t$(id + ' .uppy-FileInput-container').append('<label class=\"kt-uppy__input-label btn btn-label-brand btn-bold btn-font-sm\" for=\"' + (elemId + '_input_control') + '\">Attach files</label>');\r\n\t\t\r\n\t\tvar $fileLabel = $(id + ' .kt-uppy__input-label');\r\n\r\n\t\tuppyMin.on('upload', function(data) {\r\n\t\t\t$fileLabel.text(\"Uploading...\");\r\n\t\t\t$statusBar.addClass('kt-uppy__status--ongoing');\r\n\t\t\t$statusBar.removeClass('kt-uppy__status--hidden');\r\n\t\t\tclearTimeout( timeout );\r\n\t\t});\r\n\r\n\t\tuppyMin.on('complete', function(file) {\r\n\t\t\t$.each(file.successful, function(index, value){\r\n\t\t\t\tvar sizeLabel = \"bytes\";\r\n\t\t\t\tvar filesize = value.size;\r\n\t\t\t\tif (filesize > 1024){\r\n\t\t\t\t\tfilesize = filesize / 1024;\r\n\t\t\t\t\tsizeLabel = \"kb\";\r\n\r\n\t\t\t\t\tif(filesize > 1024){\r\n\t\t\t\t\t\tfilesize = filesize / 1024;\r\n\t\t\t\t\t\tsizeLabel = \"MB\";\r\n\t\t\t\t\t}\r\n\t\t\t\t}\t\t\t\t\t\r\n\t\t\t\tvar uploadListHtml = '<div class=\"kt-uppy__list-item\" data-id=\"'+value.id+'\"><div class=\"kt-uppy__list-label\">'+value.name+' ('+ Math.round(filesize, 2) +' '+sizeLabel+')</div><span class=\"kt-uppy__list-remove\" data-id=\"'+value.id+'\"><i class=\"flaticon2-cancel-music\"></i></span></div>';\r\n\t\t\t\t$uploadedList.append(uploadListHtml);\r\n\t\t\t});\r\n\r\n\t\t\t$fileLabel.text(\"Add more files\");\t\t\r\n\r\n\t\t\t$statusBar.addClass('kt-uppy__status--hidden');\r\n\t\t\t$statusBar.removeClass('kt-uppy__status--ongoing');\r\n\t\t});\r\n\r\n\t\t$(document).on('click', id + ' .kt-uppy__list .kt-uppy__list-remove', function(){\r\n\t\t\tvar itemId = $(this).attr('data-id');\r\n\t\t\tuppyMin.removeFile(itemId);\r\n\t\t\t$(id + ' .kt-uppy__list-item[data-id=\"'+itemId+'\"').remove();\r\n\t\t});\r\n\t}\r\n\r\n\tvar initUppy6 = function(){\r\n\t\tvar id = '#kt_uppy_6';\r\n\t\tvar options = {\r\n\t\t\tproudlyDisplayPoweredByUppy: false,\r\n\t\t\ttarget: id + ' .kt-uppy__dashboard',\r\n\t\t\tinline: false,\r\n\t\t\treplaceTargetContent: true,\r\n\t\t\tshowProgressDetails: true,\r\n\t\t\tnote: 'No filetype restrictions.',\r\n\t\t\theight: 470,\r\n\t\t\tmetaFields: [\r\n\t\t\t\t{ id: 'name', name: 'Name', placeholder: 'file name' },\r\n\t\t\t\t{ id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }\r\n\t\t\t],\r\n\t\t\tbrowserBackButtonClose: true,\r\n\t\t\ttrigger: id + ' .kt-uppy__btn'\r\n\t\t}\r\n\r\n\t\tvar uppyDashboard = Uppy.Core({ \r\n\t\t\tautoProceed: true,\r\n\t\t\trestrictions: {\r\n\t\t\t\tmaxFileSize: 1000000, // 1mb\r\n\t\t\t\tmaxNumberOfFiles: 5,\r\n\t\t\t\tminNumberOfFiles: 1\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tuppyDashboard.use(Dashboard, options);  \r\n\t\tuppyDashboard.use(Tus, { endpoint: 'https://master.tus.io/files/' });\r\n\t\tuppyDashboard.use(GoogleDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });\r\n\t\tuppyDashboard.use(Dropbox, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });\r\n\t\tuppyDashboard.use(Instagram, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });\r\n\t\tuppyDashboard.use(Webcam, { target: Dashboard });\r\n\t}\r\n\r\n\treturn {\r\n\t\t// public functions\r\n\t\tinit: function() {\r\n\t\t\tinitUppy1();\r\n\t\t\tinitUppy2();\r\n\t\t\tinitUppy3();\r\n\t\t\tinitUppy4();\r\n\t\t\tinitUppy5();\r\n\t\t\tinitUppy6();\r\n\r\n\t\t\tswal.fire({\r\n\t\t\t\t\"title\": \"Notice\", \r\n\t\t\t\t\"html\": \"Uppy demos uses <b>https://master.tus.io/files/</b> URL for resumable upload examples and your uploaded files will be temporarely stored in <b>tus.io</b> servers.\", \r\n\t\t\t\t\"type\": \"info\",\r\n\t\t\t\t\"buttonsStyling\": false,\r\n\t\t\t\t\"confirmButtonClass\": \"btn btn-brand kt-btn kt-btn--wide\",\r\n\t\t\t\t\"confirmButtonText\": \"Ok, I understand\",\r\n\t\t\t\t\"onClose\": function(e) {\r\n\t\t\t\t\tconsole.log('on close event fired!');\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\t};\r\n}();\r\n\r\nKTUtil.ready(function() {\t\r\n\tKTUppy.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/file-upload/uppy.js?");

/***/ })

/******/ });