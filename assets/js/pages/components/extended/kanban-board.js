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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/extended/kanban-board.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/extended/kanban-board.js":
/*!******************************************************************!*\
  !*** ../src/assets/js/pages/components/extended/kanban-board.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// Class definition\r\n\r\nvar KTKanbanBoardDemo = function () {\r\n    \r\n    // Private functions\r\n\r\n    // Basic demo\r\n    var demos = function () {\r\n\t\tvar kanban1 = new jKanban({\r\n\t\t\telement:'#kanban1',\r\n\t\t\tgutter  : '0',\r\n\t\t\tboards  :[\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_todo',\r\n\t\t\t\t\t'title'  : 'Try Drag me!',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'You can drag me too',\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Buy Milk',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_working',\r\n\t\t\t\t\t'title'  : 'Working',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Do Something!',\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Run?',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_done',\r\n\t\t\t\t\t'title'  : 'Done',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'All right',\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Ok!',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t});\r\n\r\n\t\tvar kanban2 = new jKanban({\r\n\t\t\telement : '#kanban2',\r\n\t\t\tgutter  : '0',\r\n\t\t\tclick : function(el){\r\n\t\t\t\talert(el.innerHTML);\r\n\t\t\t},\r\n\t\t\tboards  :[\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_todo',\r\n\t\t\t\t\t'title'  : 'To Do',\r\n\t\t\t\t\t'class' : 'brand',\r\n\t\t\t\t\t'dragTo' : ['_working'],\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'My Task Test',\r\n\t\t\t\t\t\t\t'class': 'info'\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Buy Milk',\r\n\t\t\t\t\t\t\t'class': 'info'\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_working',\r\n\t\t\t\t\t'title'  : 'Working',\r\n\t\t\t\t\t'class' : 'warning',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Do Something!',\r\n\t\t\t\t\t\t\t'class': 'warning'\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Run?',\r\n\t\t\t\t\t\t\t'class': 'warning'\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_done',\r\n\t\t\t\t\t'title'  : 'Done',\r\n\t\t\t\t\t'class' : 'success',\r\n\t\t\t\t\t'dragTo' : ['_working'],\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'All right',\r\n\t\t\t\t\t\t\t'class': 'success'\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Ok!',\r\n\t\t\t\t\t\t\t'class': 'success'\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_test',\r\n\t\t\t\t\t'title'  : 'Test',\r\n\t\t\t\t\t'class' : 'primary',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Passed',\r\n\t\t\t\t\t\t\t'class': 'primary'\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Well done!',\r\n\t\t\t\t\t\t\t'class': 'primary'\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_notes',\r\n\t\t\t\t\t'title'  : 'Notes',\r\n\t\t\t\t\t'class' : 'danger',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Warning Task',\r\n\t\t\t\t\t\t\t'class': 'danger'\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Do not enter',\r\n\t\t\t\t\t\t\t'class': 'danger'\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t});\r\n\t\r\n\t\tvar kanban3 = new jKanban({\r\n\t\t\telement : '#kanban3',\r\n\t\t\tgutter  : '0',\r\n\t\t\tclick : function(el){\r\n\t\t\t\talert(el.innerHTML);\r\n\t\t\t},\r\n\t\t\tboards  :[\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_backlog',\r\n\t\t\t\t\t'title'  : 'Backlog',\r\n\t\t\t\t\t'class' : 'dark-light',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--dark\"><span>BF</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Bug Fixes</div><span class=\"kt-badge kt-badge--dark kt-badge--inline\">Backlog</span></div></div>',\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media\"><img src=\"assets/media/users/100_5.jpg\" alt=\"image\"></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Documentation</div><span class=\"kt-badge kt-badge--dark kt-badge--inline\">Backlog</span></div></div>',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_todo',\r\n\t\t\t\t\t'title'  : 'To Do',\r\n\t\t\t\t\t'class' : 'danger-light',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media\"><img src=\"assets/media/users/100_3.jpg\" alt=\"image\"></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">SEO Optimization</div><span class=\"kt-badge kt-badge--danger kt-badge--inline\">To Do</span></div></div>',\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--danger\"><span>SV</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Site Verification</div><span class=\"kt-badge kt-badge--danger kt-badge--inline\">To Do</span></div></div>',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_working',\r\n\t\t\t\t\t'title'  : 'Working',\r\n\t\t\t\t\t'class' : 'brand-light',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media\"><img src=\"assets/media/users/100_1.jpg\" alt=\"image\"></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Responsive UI</div><span class=\"kt-badge kt-badge--brand kt-badge--inline\">In Progress</span></div></div>',\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--brand\"><span>SB</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Sidebars</div><span class=\"kt-badge kt-badge--brand kt-badge--inline\">In Progress</span></div></div>',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_done',\r\n\t\t\t\t\t'title'  : 'Done',\r\n\t\t\t\t\t'class' : 'success-light',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--success\"><span>FE</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Frontend</div><span class=\"kt-badge kt-badge--success kt-badge--inline\">Completed</span></div></div>',\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media\"><img src=\"assets/media/users/100_4.jpg\" alt=\"image\"></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Server Setup</div><span class=\"kt-badge kt-badge--success kt-badge--inline\">Completed</span></div></div>',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_deploy',\r\n\t\t\t\t\t'title'  : 'Deploy',\r\n\t\t\t\t\t'class' : 'primary-light',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--primary\"><span>CU</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Content Upload</div><span class=\"kt-badge kt-badge--primary kt-badge--inline\">Deploy</span></div></div>',\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media\"><img src=\"assets/media/users/100_2.jpg\" alt=\"image\"></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Proofreading</div><span class=\"kt-badge kt-badge--primary kt-badge--inline\">Deploy</span></div></div>',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t});\r\n\r\n\t\tvar toDoButton = document.getElementById('addToDo');\r\n\t\ttoDoButton.addEventListener('click',function(){\r\n\t\t\tkanban3.addElement(\r\n\t\t\t\t'_todo',\r\n\t\t\t\t{\r\n\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--danger\"><span>NW</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">New Task</div><span class=\"kt-badge kt-badge--danger kt-badge--inline\">To Do</span></div></div>'\r\n\t\t\t\t}\r\n\t\t\t);\r\n\t\t});\r\n\r\n\t\tvar addBoardDefault = document.getElementById('addDefault');\r\n\t\taddBoardDefault.addEventListener('click', function () {\r\n\t\t\tkanban3.addBoards(\r\n\t\t\t\t[{\r\n\t\t\t\t\t'id' : '_default',\r\n\t\t\t\t\t'title'  : 'New Board',\r\n\t\t\t\t\t'class': 'brand-light',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--brand\"><span>FT</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">New Task 1</div><span class=\"kt-badge kt-badge--brand kt-badge--inline\">New</span></div></div>',\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--brand\"><span>FT</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">New Task 2</div><span class=\"kt-badge kt-badge--brand kt-badge--inline\">New</span></div></div>',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t}]\r\n\t\t\t)\r\n\t\t});\r\n\r\n\t\tvar removeBoard = document.getElementById('removeBoard');\r\n\t\tremoveBoard.addEventListener('click',function(){\r\n\t\t\tkanban3.removeBoard('_done');\r\n\t\t});\r\n\r\n\t\t// kanban 4\r\n\t\tvar kanban4 = new jKanban({\r\n\t\t\telement : '#kanban4',\r\n\t\t\tgutter  : '0',\r\n\t\t\tclick : function(el){\r\n\t\t\t\talert(el.innerHTML);\r\n\t\t\t},\r\n\t\t\tboards  :[\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_board1',\r\n\t\t\t\t\t'title'  : 'Board 1',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'My Task Test',\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Buy Milk',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_board2',\r\n\t\t\t\t\t'title'  : 'Board 2',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Do Something!',\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Run?',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t'id' : '_board3',\r\n\t\t\t\t\t'title'  : 'Board 3',\r\n\t\t\t\t\t'item'  : [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'All right',\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t'title':'Ok!',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t});\r\n\r\n\t\t\r\n\r\n\t\tvar addBoard = document.getElementById('addBoard');\r\n\t\taddBoard.addEventListener('click',function(){\r\n\t\t\tvar boardTitle = $('#kanban-add-board').val();\r\n\t\t\tvar boardId = '_' + $.trim(boardTitle);\r\n\t\t\tvar boardColor = $('#kanban-add-board-color').val();\r\n\t\t\tvar option = '<option value=\"'+boardId+'\">'+boardTitle+'</option>';\r\n\t\t\tkanban4.addBoards(\r\n\t\t\t\t[{\r\n\t\t\t\t\t'id' : boardId,\r\n\t\t\t\t\t'title'  : boardTitle,\r\n\t\t\t\t\t'class': boardColor\r\n\t\t\t\t}]\r\n\t\t\t);\t\t\t\t\r\n\t\t\t$('#kanban-select-task').append(option);\r\n\t\t\t$('#kanban-select-board').append(option);\r\n\t\t});\r\n\r\n\t\tvar addTask = document.getElementById('addTask');\r\n\t\taddTask.addEventListener('click',function(){\r\n\t\t\tvar target = $('#kanban-select-task').val();\r\n\t\t\tvar title = $('#kanban-add-task').val();\r\n\t\t\tvar taskColor = $('#kanban-add-task-color').val();\r\n\t\t\tkanban4.addElement(\r\n\t\t\t\ttarget,\r\n\t\t\t\t{\r\n\t\t\t\t\t'title': title,\r\n\t\t\t\t\t'class': taskColor\r\n\t\t\t\t}\r\n\t\t\t);\r\n\t\t});\r\n\r\n\t\tvar removeBoard2 = document.getElementById('removeBoard2');\r\n\t\tremoveBoard2.addEventListener('click',function(){\r\n\t\t\tvar target = $('#kanban-select-board').val();\r\n\t\t\tkanban4.removeBoard(target);\r\n\t\t\t$('#kanban-select-task option[value=\"'+target+'\"]').remove();\r\n\t\t\t$('#kanban-select-board option[value=\"'+target+'\"]').remove();\r\n\t\t});\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            demos();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {    \r\n    KTKanbanBoardDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/extended/kanban-board.js?");

/***/ })

/******/ });