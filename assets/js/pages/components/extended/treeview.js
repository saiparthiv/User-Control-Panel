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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/extended/treeview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/extended/treeview.js":
/*!**************************************************************!*\
  !*** ../src/assets/js/pages/components/extended/treeview.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar KTTreeview = function () {\r\n\r\n    var demo1 = function () {\r\n        $('#kt_tree_1').jstree({\r\n            \"core\" : {\r\n                \"themes\" : {\r\n                    \"responsive\": false\r\n                }            \r\n            },\r\n            \"types\" : {\r\n                \"default\" : {\r\n                    \"icon\" : \"fa fa-folder\"\r\n                },\r\n                \"file\" : {\r\n                    \"icon\" : \"fa fa-file\"\r\n                }\r\n            },\r\n            \"plugins\": [\"types\"]\r\n        });\r\n    }\r\n\r\n    var demo2 = function () {\r\n        $('#kt_tree_2').jstree({\r\n            \"core\" : {\r\n                \"themes\" : {\r\n                    \"responsive\": false\r\n                }            \r\n            },\r\n            \"types\" : {\r\n                \"default\" : {\r\n                    \"icon\" : \"fa fa-folder kt-font-warning\"\r\n                },\r\n                \"file\" : {\r\n                    \"icon\" : \"fa fa-file  kt-font-warning\"\r\n                }\r\n            },\r\n            \"plugins\": [\"types\"]\r\n        });\r\n\r\n        // handle link clicks in tree nodes(support target=\"_blank\" as well)\r\n        $('#kt_tree_2').on('select_node.jstree', function(e,data) { \r\n            var link = $('#' + data.selected).find('a');\r\n            if (link.attr(\"href\") != \"#\" && link.attr(\"href\") != \"javascript:;\" && link.attr(\"href\") != \"\") {\r\n                if (link.attr(\"target\") == \"_blank\") {\r\n                    link.attr(\"href\").target = \"_blank\";\r\n                }\r\n                document.location.href = link.attr(\"href\");\r\n                return false;\r\n            }\r\n        });\r\n    }\r\n\r\n    var demo3 = function () {\r\n        $('#kt_tree_3').jstree({\r\n            'plugins': [\"wholerow\", \"checkbox\", \"types\"],\r\n            'core': {\r\n                \"themes\" : {\r\n                    \"responsive\": false\r\n                },    \r\n                'data': [{\r\n                        \"text\": \"Same but with checkboxes\",\r\n                        \"children\": [{\r\n                            \"text\": \"initially selected\",\r\n                            \"state\": {\r\n                                \"selected\": true\r\n                            }\r\n                        }, {\r\n                            \"text\": \"custom icon\",\r\n                            \"icon\": \"fa fa-warning kt-font-danger\"\r\n                        }, {\r\n                            \"text\": \"initially open\",\r\n                            \"icon\" : \"fa fa-folder kt-font-default\",\r\n                            \"state\": {\r\n                                \"opened\": true\r\n                            },\r\n                            \"children\": [\"Another node\"]\r\n                        }, {\r\n                            \"text\": \"custom icon\",\r\n                            \"icon\": \"fa fa-warning kt-font-waring\"\r\n                        }, {\r\n                            \"text\": \"disabled node\",\r\n                            \"icon\": \"fa fa-check kt-font-success\",\r\n                            \"state\": {\r\n                                \"disabled\": true\r\n                            }\r\n                        }]\r\n                    },\r\n                    \"And wholerow selection\"\r\n                ]\r\n            },\r\n            \"types\" : {\r\n                \"default\" : {\r\n                    \"icon\" : \"fa fa-folder kt-font-warning\"\r\n                },\r\n                \"file\" : {\r\n                    \"icon\" : \"fa fa-file  kt-font-warning\"\r\n                }\r\n            },\r\n        });\r\n    }\r\n\r\n    var demo4 = function() {\r\n        $(\"#kt_tree_4\").jstree({\r\n            \"core\" : {\r\n                \"themes\" : {\r\n                    \"responsive\": false\r\n                }, \r\n                // so that create works\r\n                \"check_callback\" : true,\r\n                'data': [{\r\n                        \"text\": \"Parent Node\",\r\n                        \"children\": [{\r\n                            \"text\": \"Initially selected\",\r\n                            \"state\": {\r\n                                \"selected\": true\r\n                            }\r\n                        }, {\r\n                            \"text\": \"Custom Icon\",\r\n                            \"icon\": \"fa fa-warning kt-font-danger\"\r\n                        }, {\r\n                            \"text\": \"Initially open\",\r\n                            \"icon\" : \"fa fa-folder kt-font-success\",\r\n                            \"state\": {\r\n                                \"opened\": true\r\n                            },\r\n                            \"children\": [\r\n                                {\"text\": \"Another node\", \"icon\" : \"fa fa-file kt-font-waring\"}\r\n                            ]\r\n                        }, {\r\n                            \"text\": \"Another Custom Icon\",\r\n                            \"icon\": \"fa fa-warning kt-font-waring\"\r\n                        }, {\r\n                            \"text\": \"Disabled Node\",\r\n                            \"icon\": \"fa fa-check kt-font-success\",\r\n                            \"state\": {\r\n                                \"disabled\": true\r\n                            }\r\n                        }, {\r\n                            \"text\": \"Sub Nodes\",\r\n                            \"icon\": \"fa fa-folder kt-font-danger\",\r\n                            \"children\": [\r\n                                {\"text\": \"Item 1\", \"icon\" : \"fa fa-file kt-font-waring\"},\r\n                                {\"text\": \"Item 2\", \"icon\" : \"fa fa-file kt-font-success\"},\r\n                                {\"text\": \"Item 3\", \"icon\" : \"fa fa-file kt-font-default\"},\r\n                                {\"text\": \"Item 4\", \"icon\" : \"fa fa-file kt-font-danger\"},\r\n                                {\"text\": \"Item 5\", \"icon\" : \"fa fa-file kt-font-info\"}\r\n                            ]\r\n                        }]\r\n                    },\r\n                    \"Another Node\"\r\n                ]\r\n            },\r\n            \"types\" : {\r\n                \"default\" : {\r\n                    \"icon\" : \"fa fa-folder kt-font-brand\"\r\n                },\r\n                \"file\" : {\r\n                    \"icon\" : \"fa fa-file  kt-font-brand\"\r\n                }\r\n            },\r\n            \"state\" : { \"key\" : \"demo2\" },\r\n            \"plugins\" : [ \"contextmenu\", \"state\", \"types\" ]\r\n        });    \r\n    }\r\n\r\n    var demo5 = function() {\r\n        $(\"#kt_tree_5\").jstree({\r\n            \"core\" : {\r\n                \"themes\" : {\r\n                    \"responsive\": false\r\n                }, \r\n                // so that create works\r\n                \"check_callback\" : true,\r\n                'data': [{\r\n                        \"text\": \"Parent Node\",\r\n                        \"children\": [{\r\n                            \"text\": \"Initially selected\",\r\n                            \"state\": {\r\n                                \"selected\": true\r\n                            }\r\n                        }, {\r\n                            \"text\": \"Custom Icon\",\r\n                            \"icon\": \"fa fa-warning kt-font-danger\"\r\n                        }, {\r\n                            \"text\": \"Initially open\",\r\n                            \"icon\" : \"fa fa-folder kt-font-success\",\r\n                            \"state\": {\r\n                                \"opened\": true\r\n                            },\r\n                            \"children\": [\r\n                                {\"text\": \"Another node\", \"icon\" : \"fa fa-file kt-font-waring\"}\r\n                            ]\r\n                        }, {\r\n                            \"text\": \"Another Custom Icon\",\r\n                            \"icon\": \"fa fa-warning kt-font-waring\"\r\n                        }, {\r\n                            \"text\": \"Disabled Node\",\r\n                            \"icon\": \"fa fa-check kt-font-success\",\r\n                            \"state\": {\r\n                                \"disabled\": true\r\n                            }\r\n                        }, {\r\n                            \"text\": \"Sub Nodes\",\r\n                            \"icon\": \"fa fa-folder kt-font-danger\",\r\n                            \"children\": [\r\n                                {\"text\": \"Item 1\", \"icon\" : \"fa fa-file kt-font-waring\"},\r\n                                {\"text\": \"Item 2\", \"icon\" : \"fa fa-file kt-font-success\"},\r\n                                {\"text\": \"Item 3\", \"icon\" : \"fa fa-file kt-font-default\"},\r\n                                {\"text\": \"Item 4\", \"icon\" : \"fa fa-file kt-font-danger\"},\r\n                                {\"text\": \"Item 5\", \"icon\" : \"fa fa-file kt-font-info\"}\r\n                            ]\r\n                        }]\r\n                    },\r\n                    \"Another Node\"\r\n                ]\r\n            },\r\n            \"types\" : {\r\n                \"default\" : {\r\n                    \"icon\" : \"fa fa-folder kt-font-success\"\r\n                },\r\n                \"file\" : {\r\n                    \"icon\" : \"fa fa-file  kt-font-success\"\r\n                }\r\n            },\r\n            \"state\" : { \"key\" : \"demo2\" },\r\n            \"plugins\" : [ \"dnd\", \"state\", \"types\" ]\r\n        });    \r\n    }\r\n\r\n    var demo6 = function() {\r\n        $(\"#kt_tree_6\").jstree({\r\n            \"core\" : {\r\n                \"themes\" : {\r\n                    \"responsive\": false\r\n                }, \r\n                // so that create works\r\n                \"check_callback\" : true,\r\n                'data' : {\r\n                    'url' : function (node) {\r\n                      return 'https://keenthemes.com/metronic/tools/preview/api/jstree/ajax_data.php';\r\n                    },\r\n                    'data' : function (node) {\r\n                      return { 'parent' : node.id };\r\n                    }\r\n                }\r\n            },\r\n            \"types\" : {\r\n                \"default\" : {\r\n                    \"icon\" : \"fa fa-folder kt-font-brand\"\r\n                },\r\n                \"file\" : {\r\n                    \"icon\" : \"fa fa-file  kt-font-brand\"\r\n                }\r\n            },\r\n            \"state\" : { \"key\" : \"demo3\" },\r\n            \"plugins\" : [ \"dnd\", \"state\", \"types\" ]\r\n        });\r\n    }\r\n\r\n    return {\r\n        //main function to initiate the module\r\n        init: function () {\r\n            demo1();\r\n            demo2();\r\n            demo3();\r\n            demo4();\r\n            demo5();\r\n            demo6();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {    \r\n    KTTreeview.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/extended/treeview.js?");

/***/ })

/******/ });