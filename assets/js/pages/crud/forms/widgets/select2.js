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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/select2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/select2.js":
/*!************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/select2.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\r\nvar KTSelect2 = function() {\r\n    // Private functions\r\n    var demos = function() {\r\n        // basic\r\n        $('#kt_select2_1, #kt_select2_1_validate').select2({\r\n            placeholder: \"Select a state\"\r\n        });\r\n\r\n        // nested\r\n        $('#kt_select2_2, #kt_select2_2_validate').select2({\r\n            placeholder: \"Select a state\"\r\n        });\r\n\r\n        // multi select\r\n        $('#kt_select2_3, #kt_select2_3_validate').select2({\r\n            placeholder: \"Select a state\",\r\n        });\r\n\r\n        // basic\r\n        $('#kt_select2_4').select2({\r\n            placeholder: \"Select a state\",\r\n            allowClear: true\r\n        });\r\n\r\n        // loading data from array\r\n        var data = [{\r\n            id: 0,\r\n            text: 'Enhancement'\r\n        }, {\r\n            id: 1,\r\n            text: 'Bug'\r\n        }, {\r\n            id: 2,\r\n            text: 'Duplicate'\r\n        }, {\r\n            id: 3,\r\n            text: 'Invalid'\r\n        }, {\r\n            id: 4,\r\n            text: 'Wontfix'\r\n        }];\r\n\r\n        $('#kt_select2_5').select2({\r\n            placeholder: \"Select a value\",\r\n            data: data\r\n        });\r\n\r\n        // loading remote data\r\n\r\n        function formatRepo(repo) {\r\n            if (repo.loading) return repo.text;\r\n            var markup = \"<div class='select2-result-repository clearfix'>\" +\r\n                \"<div class='select2-result-repository__meta'>\" +\r\n                \"<div class='select2-result-repository__title'>\" + repo.full_name + \"</div>\";\r\n            if (repo.description) {\r\n                markup += \"<div class='select2-result-repository__description'>\" + repo.description + \"</div>\";\r\n            }\r\n            markup += \"<div class='select2-result-repository__statistics'>\" +\r\n                \"<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> \" + repo.forks_count + \" Forks</div>\" +\r\n                \"<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> \" + repo.stargazers_count + \" Stars</div>\" +\r\n                \"<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> \" + repo.watchers_count + \" Watchers</div>\" +\r\n                \"</div>\" +\r\n                \"</div></div>\";\r\n            return markup;\r\n        }\r\n\r\n        function formatRepoSelection(repo) {\r\n            return repo.full_name || repo.text;\r\n        }\r\n\r\n        $(\"#kt_select2_6\").select2({\r\n            placeholder: \"Search for git repositories\",\r\n            allowClear: true,\r\n            ajax: {\r\n                url: \"https://api.github.com/search/repositories\",\r\n                dataType: 'json',\r\n                delay: 250,\r\n                data: function(params) {\r\n                    return {\r\n                        q: params.term, // search term\r\n                        page: params.page\r\n                    };\r\n                },\r\n                processResults: function(data, params) {\r\n                    // parse the results into the format expected by Select2\r\n                    // since we are using custom formatting functions we do not need to\r\n                    // alter the remote JSON data, except to indicate that infinite\r\n                    // scrolling can be used\r\n                    params.page = params.page || 1;\r\n\r\n                    return {\r\n                        results: data.items,\r\n                        pagination: {\r\n                            more: (params.page * 30) < data.total_count\r\n                        }\r\n                    };\r\n                },\r\n                cache: true\r\n            },\r\n            escapeMarkup: function(markup) {\r\n                return markup;\r\n            }, // let our custom formatter work\r\n            minimumInputLength: 1,\r\n            templateResult: formatRepo, // omitted for brevity, see the source of this page\r\n            templateSelection: formatRepoSelection // omitted for brevity, see the source of this page\r\n        });\r\n\r\n        // custom styles\r\n\r\n        // tagging support\r\n        $('#kt_select2_12_1, #kt_select2_12_2, #kt_select2_12_3, #kt_select2_12_4').select2({\r\n            placeholder: \"Select an option\",\r\n        });\r\n\r\n        // disabled mode\r\n        $('#kt_select2_7').select2({\r\n            placeholder: \"Select an option\"\r\n        });\r\n\r\n        // disabled results\r\n        $('#kt_select2_8').select2({\r\n            placeholder: \"Select an option\"\r\n        });\r\n\r\n        // limiting the number of selections\r\n        $('#kt_select2_9').select2({\r\n            placeholder: \"Select an option\",\r\n            maximumSelectionLength: 2\r\n        });\r\n\r\n        // hiding the search box\r\n        $('#kt_select2_10').select2({\r\n            placeholder: \"Select an option\",\r\n            minimumResultsForSearch: Infinity\r\n        });\r\n\r\n        // tagging support\r\n        $('#kt_select2_11').select2({\r\n            placeholder: \"Add a tag\",\r\n            tags: true\r\n        });\r\n\r\n        // disabled results\r\n        $('.kt-select2-general').select2({\r\n            placeholder: \"Select an option\"\r\n        });\r\n    }\r\n\r\n    var modalDemos = function() {\r\n        $('#kt_select2_modal').on('shown.bs.modal', function () {\r\n            // basic\r\n            $('#kt_select2_1_modal').select2({\r\n                placeholder: \"Select a state\"\r\n            });\r\n\r\n            // nested\r\n            $('#kt_select2_2_modal').select2({\r\n                placeholder: \"Select a state\"\r\n            });\r\n\r\n            // multi select\r\n            $('#kt_select2_3_modal').select2({\r\n                placeholder: \"Select a state\",\r\n            });\r\n\r\n            // basic\r\n            $('#kt_select2_4_modal').select2({\r\n                placeholder: \"Select a state\",\r\n                allowClear: true\r\n            }); \r\n        });\r\n    }\r\n\r\n    // Public functions\r\n    return {\r\n        init: function() {\r\n            demos();\r\n            modalDemos();\r\n        }\r\n    };\r\n}();\r\n\r\n// Initialization\r\njQuery(document).ready(function() {\r\n    KTSelect2.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/select2.js?");

/***/ })

/******/ });