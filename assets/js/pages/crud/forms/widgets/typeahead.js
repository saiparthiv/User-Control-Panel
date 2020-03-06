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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/typeahead.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/typeahead.js":
/*!**************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/typeahead.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\r\nvar KTTypeahead = function() {\r\n\r\n    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',\r\n            'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',\r\n            'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',\r\n            'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',\r\n            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',\r\n            'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\r\n            'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',\r\n            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',\r\n            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'\r\n        ];\r\n\r\n    // Private functions\r\n    var demo1 = function() {\r\n        var substringMatcher = function(strs) {\r\n            return function findMatches(q, cb) {\r\n                var matches, substringRegex;\r\n\r\n                // an array that will be populated with substring matches\r\n                matches = [];\r\n\r\n                // regex used to determine if a string contains the substring `q`\r\n                substrRegex = new RegExp(q, 'i');\r\n\r\n                // iterate through the pool of strings and for any string that\r\n                // contains the substring `q`, add it to the `matches` array\r\n                $.each(strs, function(i, str) {\r\n                    if (substrRegex.test(str)) {\r\n                        matches.push(str);\r\n                    }\r\n                });\r\n\r\n                cb(matches);\r\n            };\r\n        };\r\n\r\n        $('#kt_typeahead_1, #kt_typeahead_1_modal, #kt_typeahead_1_validate, #kt_typeahead_2_validate, #kt_typeahead_3_validate').typeahead({\r\n            hint: true,\r\n            highlight: true,\r\n            minLength: 1\r\n        }, {\r\n            name: 'states',\r\n            source: substringMatcher(states)\r\n        });\r\n    }\r\n\r\n    var demo2 = function() {\r\n        // constructs the suggestion engine\r\n        var bloodhound = new Bloodhound({\r\n            datumTokenizer: Bloodhound.tokenizers.whitespace,\r\n            queryTokenizer: Bloodhound.tokenizers.whitespace,\r\n            // `states` is an array of state names defined in \"The Basics\"\r\n            local: states\r\n        });\r\n\r\n        $('#kt_typeahead_2, #kt_typeahead_2_modal').typeahead({\r\n            hint: true,\r\n            highlight: true,\r\n            minLength: 1\r\n        },\r\n        {\r\n            name: 'states',\r\n            source: bloodhound\r\n        }); \r\n    }\r\n\r\n    var demo3 = function() {\r\n        var countries = new Bloodhound({\r\n            datumTokenizer: Bloodhound.tokenizers.whitespace,\r\n            queryTokenizer: Bloodhound.tokenizers.whitespace,\r\n            // url points to a json file that contains an array of country names, see\r\n            // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json\r\n            prefetch: 'https://keenthemes.com/metronic/tools/preview/api/typeahead/countries.json'\r\n        });\r\n\r\n        // passing in `null` for the `options` arguments will result in the default\r\n        // options being used\r\n        $('#kt_typeahead_3, #kt_typeahead_3_modal').typeahead(null, {\r\n            name: 'countries',\r\n            source: countries\r\n        });\r\n    }\r\n\r\n    var demo4 = function() {\r\n        var bestPictures = new Bloodhound({\r\n          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),\r\n          queryTokenizer: Bloodhound.tokenizers.whitespace,\r\n          prefetch: 'https://keenthemes.com/metronic/tools/preview/api/typeahead/movies.json'\r\n        });\r\n\r\n        $('#kt_typeahead_4').typeahead(null, {\r\n            name: 'best-pictures',\r\n            display: 'value',\r\n            source: bestPictures,\r\n            templates: {\r\n                empty: [\r\n                    '<div class=\"empty-message\" style=\"padding: 10px 15px; text-align: center;\">',\r\n                        'unable to find any Best Picture winners that match the current query',\r\n                    '</div>'\r\n                ].join('\\n'),\r\n                suggestion: Handlebars.compile('<div><strong>{{value}}</strong> – {{year}}</div>')\r\n            }\r\n        });\r\n    }\r\n\r\n    var demo5 = function() {\r\n        var nbaTeams = new Bloodhound({\r\n            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),\r\n            queryTokenizer: Bloodhound.tokenizers.whitespace,\r\n            prefetch: 'https://keenthemes.com/metronic/tools/preview/api/typeahead/nba.json'\r\n        });\r\n\r\n        var nhlTeams = new Bloodhound({\r\n            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),\r\n            queryTokenizer: Bloodhound.tokenizers.whitespace,\r\n            prefetch: 'https://keenthemes.com/metronic/tools/preview/api/typeahead/nhl.json'\r\n        });\r\n\r\n        $('#kt_typeahead_5').typeahead({\r\n                highlight: true\r\n            },{\r\n                name: 'nba-teams',\r\n                display: 'team',\r\n                source: nbaTeams,\r\n                templates: {\r\n                    header: '<h3 class=\"league-name\" style=\"padding: 5px 15px; font-size: 1.2rem; margin:0;\">NBA Teams</h3>'\r\n                }\r\n            },{\r\n                name: 'nhl-teams',\r\n                display: 'team',\r\n                source: nhlTeams,\r\n                templates: {\r\n                    header: '<h3 class=\"league-name\" style=\"padding: 5px 15px; font-size: 1.2rem; margin:0;\">NHL Teams</h3>'\r\n                }\r\n            }\r\n        );\r\n    }\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            demo1();\r\n            demo2();\r\n            demo3();\r\n            demo4();\r\n            demo5();\r\n        }\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTTypeahead.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/typeahead.js?");

/***/ })

/******/ });