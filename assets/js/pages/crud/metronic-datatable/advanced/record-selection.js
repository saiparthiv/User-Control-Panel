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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/metronic-datatable/advanced/record-selection.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/metronic-datatable/advanced/record-selection.js":
/*!***********************************************************************************!*\
  !*** ../src/assets/js/pages/crud/metronic-datatable/advanced/record-selection.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// Class definition\r\n\r\nvar KTDatatableRecordSelectionDemo = function() {\r\n    // Private functions\r\n\r\n    var options = {\r\n        // datasource definition\r\n        data: {\r\n            type: 'remote',\r\n            source: {\r\n                read: {\r\n                    url: 'https://keenthemes.com/metronic/tools/preview/api/datatables/demos/default.php',\r\n                },\r\n            },\r\n            pageSize: 10,\r\n            serverPaging: true,\r\n            serverFiltering: true,\r\n            serverSorting: true,\r\n        },\r\n\r\n        // layout definition\r\n        layout: {\r\n            scroll: true, // enable/disable datatable scroll both horizontal and\r\n            // vertical when needed.\r\n            height: 350, // datatable's body's fixed height\r\n            footer: false // display/hide footer\r\n        },\r\n\r\n        // column sorting\r\n        sortable: true,\r\n\r\n        pagination: true,\r\n\r\n        // columns definition\r\n\r\n        columns: [{\r\n            field: 'RecordID',\r\n            title: '#',\r\n            sortable: false,\r\n            width: 20,\r\n            selector: {\r\n                class: 'kt-checkbox--solid'\r\n            },\r\n            textAlign: 'center',\r\n        }, {\r\n            field: 'OrderID',\r\n            title: 'Order ID',\r\n            template: '{{OrderID}}',\r\n        }, {\r\n            field: 'Country',\r\n            title: 'Country',\r\n            template: function(row) {\r\n                return row.Country + ' ' + row.ShipCountry;\r\n            },\r\n        }, {\r\n            field: 'ShipAddress',\r\n            title: 'Ship Address',\r\n        }, {\r\n            field: 'ShipDate',\r\n            title: 'Ship Date',\r\n            type: 'date',\r\n            format: 'MM/DD/YYYY',\r\n        }, {\r\n            field: 'Status',\r\n            title: 'Status',\r\n            // callback function support for column rendering\r\n            template: function(row) {\r\n                var status = {\r\n                    1: {'title': 'Pending', 'class': 'kt-badge--brand'},\r\n                    2: {'title': 'Delivered', 'class': ' kt-badge--danger'},\r\n                    3: {'title': 'Canceled', 'class': ' kt-badge--primary'},\r\n                    4: {'title': 'Success', 'class': ' kt-badge--success'},\r\n                    5: {'title': 'Info', 'class': ' kt-badge--info'},\r\n                    6: {'title': 'Danger', 'class': ' kt-badge--danger'},\r\n                    7: {'title': 'Warning', 'class': ' kt-badge--warning'},\r\n                };\r\n                return '<span class=\"kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill\">' + status[row.Status].title + '</span>';\r\n            },\r\n        }, {\r\n            field: 'Type',\r\n            title: 'Type',\r\n\t        autoHide: false,\r\n            // callback function support for column rendering\r\n            template: function(row) {\r\n                var status = {\r\n                    1: {'title': 'Online', 'state': 'danger'},\r\n                    2: {'title': 'Retail', 'state': 'primary'},\r\n                    3: {'title': 'Direct', 'state': 'success'},\r\n                };\r\n                return '<span class=\"kt-badge kt-badge--' + status[row.Type].state + ' kt-badge--dot\"></span>&nbsp;<span class=\"kt-font-bold kt-font-' + status[row.Type].state + '\">' + status[row.Type].title + '</span>';\r\n            },\r\n        }, {\r\n            field: 'Actions',\r\n            title: 'Actions',\r\n            sortable: false,\r\n            width: 110,\r\n            overflow: 'visible',\r\n            textAlign: 'left',\r\n\t        autoHide: false,\r\n            template: function() {\r\n\t            return '\\\r\n                    <div class=\"dropdown\">\\\r\n                        <a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-sm\" data-toggle=\"dropdown\">\\\r\n                            <i class=\"flaticon2-settings\"></i>\\\r\n                        </a>\\\r\n                        <div class=\"dropdown-menu dropdown-menu-right\">\\\r\n                            <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a>\\\r\n                            <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a>\\\r\n                            <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-print\"></i> Generate Report</a>\\\r\n                        </div>\\\r\n                    </div>\\\r\n                    <a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-sm\" title=\"Edit details\">\\\r\n                        <i class=\"flaticon2-file\"></i>\\\r\n                    </a>\\\r\n                    <a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-sm\" title=\"Delete\">\\\r\n                        <i class=\"flaticon2-delete\"></i>\\\r\n                    </a>\\\r\n                ';\r\n            },\r\n        }],\r\n    };\r\n\r\n    // basic demo\r\n    var localSelectorDemo = function() {\r\n\r\n        options.search = {\r\n            input: $('#generalSearch'),\r\n        };\r\n\r\n        var datatable = $('#local_record_selection').KTDatatable(options);\r\n\r\n        $('#kt_form_status').on('change', function() {\r\n            datatable.search($(this).val().toLowerCase(), 'Status');\r\n        });\r\n\r\n        $('#kt_form_type').on('change', function() {\r\n            datatable.search($(this).val().toLowerCase(), 'Type');\r\n        });\r\n\r\n        $('#kt_form_status,#kt_form_type').selectpicker();\r\n\r\n        datatable.on(\r\n            'kt-datatable--on-check kt-datatable--on-uncheck kt-datatable--on-layout-updated',\r\n            function(e) {\r\n                var checkedNodes = datatable.rows('.kt-datatable__row--active').nodes();\r\n                var count = checkedNodes.length;\r\n                $('#kt_datatable_selected_number').html(count);\r\n                if (count > 0) {\r\n                    $('#kt_datatable_group_action_form').collapse('show');\r\n                } else {\r\n                    $('#kt_datatable_group_action_form').collapse('hide');\r\n                }\r\n            });\r\n\r\n        $('#kt_modal_fetch_id').on('show.bs.modal', function(e) {\r\n            var ids = datatable.rows('.kt-datatable__row--active').\r\n            nodes().\r\n            find('.kt-checkbox--single > [type=\"checkbox\"]').\r\n            map(function(i, chk) {\r\n                return $(chk).val();\r\n            });\r\n            var c = document.createDocumentFragment();\r\n            for (var i = 0; i < ids.length; i++) {\r\n                var li = document.createElement('li');\r\n                li.setAttribute('data-id', ids[i]);\r\n                li.innerHTML = 'Selected record ID: ' + ids[i];\r\n                c.appendChild(li);\r\n            }\r\n            $(e.target).find('.kt-datatable_selected_ids').append(c);\r\n        }).on('hide.bs.modal', function(e) {\r\n            $(e.target).find('.kt-datatable_selected_ids').empty();\r\n        });\r\n\r\n    };\r\n\r\n    var serverSelectorDemo = function() {\r\n\r\n        // enable extension\r\n        options.extensions = {\r\n            checkbox: {},\r\n        };\r\n        options.search = {\r\n            input: $('#generalSearch1'),\r\n        };\r\n\r\n        var datatable = $('#server_record_selection').KTDatatable(options);\r\n\r\n        $('#kt_form_status1').on('change', function() {\r\n            datatable.search($(this).val().toLowerCase(), 'Status');\r\n        });\r\n\r\n        $('#kt_form_type1').on('change', function() {\r\n            datatable.search($(this).val().toLowerCase(), 'Type');\r\n        });\r\n\r\n        $('#kt_form_status1,#kt_form_type1').selectpicker();\r\n\r\n        datatable.on(\r\n            'kt-datatable--on-click-checkbox kt-datatable--on-layout-updated',\r\n            function(e) {\r\n                // datatable.checkbox() access to extension methods\r\n                var ids = datatable.checkbox().getSelectedId();\r\n                var count = ids.length;\r\n                $('#kt_datatable_selected_number1').html(count);\r\n                if (count > 0) {\r\n                    $('#kt_datatable_group_action_form1').collapse('show');\r\n                } else {\r\n                    $('#kt_datatable_group_action_form1').collapse('hide');\r\n                }\r\n            });\r\n\r\n        $('#kt_modal_fetch_id_server').on('show.bs.modal', function(e) {\r\n            var ids = datatable.checkbox().getSelectedId();\r\n            var c = document.createDocumentFragment();\r\n            for (var i = 0; i < ids.length; i++) {\r\n                var li = document.createElement('li');\r\n                li.setAttribute('data-id', ids[i]);\r\n                li.innerHTML = 'Selected record ID: ' + ids[i];\r\n                c.appendChild(li);\r\n            }\r\n            $(e.target).find('.kt-datatable_selected_ids').append(c);\r\n        }).on('hide.bs.modal', function(e) {\r\n            $(e.target).find('.kt-datatable_selected_ids').empty();\r\n        });\r\n\r\n    };\r\n\r\n    return {\r\n        // public functions\r\n        init: function() {\r\n            localSelectorDemo();\r\n            serverSelectorDemo();\r\n        },\r\n    };\r\n}();\r\n\r\njQuery(document).ready(function() {\r\n    KTDatatableRecordSelectionDemo.init();\r\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/metronic-datatable/advanced/record-selection.js?");

/***/ })

/******/ });