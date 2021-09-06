/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background-color: rgb(24, 28, 32);\n    color: rgb(187, 220, 248);\n    font-family: 'Ubuntu', sans-serif;\n    display: flex;\n    justify-content: space-around;\n    font-size: 1.15;\n    margin: auto;\n}\n\n.sidebar {\n    position: fixed;\n    left: 0;\n    width: 15%;\n    height: 100%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n}\n\n.sidebar-head {\n    margin: auto;\n    position: relative;\n    top: 2.5%;\n    left: 25%;\n    font-style: italic;\n}\n\n.side-button-container {\n    position: relative;\n    top: 5%;\n    margin: auto;\n    display: flex;\n    justify-content: space-around;\n    width: 85%;\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    padding: 5%;\n    border-radius: 5px;\n}\n\n.side-buttons {\n    width: 45%;\n}\n\n.notif-head {\n    position: relative;\n    top: 51%;\n    left: 22%;\n}\n\n.notif-bar {\n    position: relative;\n    width: 85%;\n    height: 28%;\n    top: 50%;\n    margin: auto;\n    padding: 5%;\n    border-radius: 5px;\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n}\n\n.project-container {\n    position: relative;\n    left: 7.5%;\n    display: flex;\n    justify-content: space-around;\n    width: 85%;\n    height: 100%;\n\n}\n\n.project {\n    display: flex;\n    flex-flow: column wrap;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    width: 20%;\n    height: 100%;\n    padding: .5%;\n    border-radius: 5px;  \n}\n\n.one-project-page {\n    width: 66%;\n}\n\n.two-project-page {\n    width: 40%;\n}\n\n.three-project-page {\n    width: 25%;\n}\n\n.project-head {\n    margin: auto;\n}\n\n.project-desc {\n    padding-left: 2.5%;\n}\n\n.task {\n    border: solid 5px rgb(130, 193, 248);\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    width: 87%;\n    padding: 5%;\n    padding-bottom: 7%;\n    border-radius: 10px;\n}\n\n.min {\n    padding-bottom: 0;\n}\n\n.min p {\n    margin-block-start: 0;\n}\n\n.top-div {\n    display: flex;\n    justify-content: space-between;\n}\n\nbutton {\n    width: 50%;\n    border-radius: 10px;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    padding: 5px;\n    font-weight: bold;\n    font-size: 1.1rem;\n}\n\n.top-button-div {\n    display: flex;\n    justify-content: space-around;\n    position: relative;\n    left: 82%;\n    width: 20%;\n}\n\n.top-buttons {\n    width: 30px;\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    font-size: 1.2em; \n}\n\n.remove-task {\n    order: 1;\n    position: relative;\n    top: 14px;\n    width: 35px;\n    height: 30px;\n    border-radius: 15px;\n}\n\n.task-prompt {\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    position: absolute;\n    top: 25%;\n    padding: 2%;\n    width: 20%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    border-radius: 10px;\n    z-index: 1;\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\n.project-prompt {\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    position: absolute;\n    top: 25%;\n    padding: 2%;\n    width: 20%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    border-radius: 10px;\n    z-index: 1;\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\n.prompt-head {\n    margin: auto;\n}\n\n.new-task {\n    padding-bottom: 2%;\n}\n\n.notes-div {\n    padding-bottom: 5%;\n}\n\n.transparent {\n    opacity: 0.25;\n}\n\n.create-task-buttons {\n    display: flex;\n    justify-content: space-between;\n\n    width: 100%;\n}\n\n.create-task {\n    width: 45%;\n}\n\n.cancel {\n    width: 45%;\n}\n\ninput {\n    border-radius: 5px;\n    padding: 1%;\n    width: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n    body {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .sidebar {\n        position: relative;\n        top: 0;\n        width: 100%;\n        height: 10%;\n        border-bottom: rgb(24, 28, 32) solid 10px;\n    }\n\n    .project-container {\n        display: flex;\n        flex-direction: column;\n        position: relative;\n        left: 0;\n        \n        width: 98%;\n    }\n    \n    .project-prompt {\n        padding-top: 5%;\n        width: 90%;\n    }\n\n    .project {\n        width: 100%;\n        border-bottom: rgb(24, 28, 32) solid 10px;\n    }\n\n    .task-prompt {\n        padding-top: 5%;\n        width: 90%;\n    }\n\n    input {\n        width: 95%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    background-color: rgb(24, 28, 32);\n    color: rgb(187, 220, 248);\n    font-family: 'Ubuntu', sans-serif;\n    display: flex;\n    justify-content: space-around;\n    font-size: 1.15;\n    margin: auto;\n}\n\n.sidebar {\n    position: fixed;\n    left: 0;\n    width: 15%;\n    height: 100%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n}\n\n.sidebar-head {\n    margin: auto;\n    position: relative;\n    top: 2.5%;\n    left: 25%;\n    font-style: italic;\n}\n\n.side-button-container {\n    position: relative;\n    top: 5%;\n    margin: auto;\n    display: flex;\n    justify-content: space-around;\n    width: 85%;\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    padding: 5%;\n    border-radius: 5px;\n}\n\n.side-buttons {\n    width: 45%;\n}\n\n.notif-head {\n    position: relative;\n    top: 51%;\n    left: 22%;\n}\n\n.notif-bar {\n    position: relative;\n    width: 85%;\n    height: 28%;\n    top: 50%;\n    margin: auto;\n    padding: 5%;\n    border-radius: 5px;\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n}\n\n.project-container {\n    position: relative;\n    left: 7.5%;\n    display: flex;\n    justify-content: space-around;\n    width: 85%;\n    height: 100%;\n\n}\n\n.project {\n    display: flex;\n    flex-flow: column wrap;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    width: 20%;\n    height: 100%;\n    padding: .5%;\n    border-radius: 5px;  \n}\n\n.one-project-page {\n    width: 66%;\n}\n\n.two-project-page {\n    width: 40%;\n}\n\n.three-project-page {\n    width: 25%;\n}\n\n.project-head {\n    margin: auto;\n}\n\n.project-desc {\n    padding-left: 2.5%;\n}\n\n.task {\n    border: solid 5px rgb(130, 193, 248);\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    width: 87%;\n    padding: 5%;\n    padding-bottom: 7%;\n    border-radius: 10px;\n}\n\n.min {\n    padding-bottom: 0;\n}\n\n.min p {\n    margin-block-start: 0;\n}\n\n.top-div {\n    display: flex;\n    justify-content: space-between;\n}\n\nbutton {\n    width: 50%;\n    border-radius: 10px;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    padding: 5px;\n    font-weight: bold;\n    font-size: 1.1rem;\n}\n\n.top-button-div {\n    display: flex;\n    justify-content: space-around;\n    position: relative;\n    left: 82%;\n    width: 20%;\n}\n\n.top-buttons {\n    width: 30px;\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    font-size: 1.2em; \n}\n\n.remove-task {\n    order: 1;\n    position: relative;\n    top: 14px;\n    width: 35px;\n    height: 30px;\n    border-radius: 15px;\n}\n\n.task-prompt {\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    position: absolute;\n    top: 25%;\n    padding: 2%;\n    width: 20%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    border-radius: 10px;\n    z-index: 1;\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\n.project-prompt {\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    position: absolute;\n    top: 25%;\n    padding: 2%;\n    width: 20%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    border-radius: 10px;\n    z-index: 1;\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\n.prompt-head {\n    margin: auto;\n}\n\n.new-task {\n    padding-bottom: 2%;\n}\n\n.notes-div {\n    padding-bottom: 5%;\n}\n\n.transparent {\n    opacity: 0.25;\n}\n\n.create-task-buttons {\n    display: flex;\n    justify-content: space-between;\n\n    width: 100%;\n}\n\n.create-task {\n    width: 45%;\n}\n\n.cancel {\n    width: 45%;\n}\n\ninput {\n    border-radius: 5px;\n    padding: 1%;\n    width: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n    body {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .sidebar {\n        position: relative;\n        top: 0;\n        width: 100%;\n        height: 10%;\n        border-bottom: rgb(24, 28, 32) solid 10px;\n    }\n\n    .project-container {\n        display: flex;\n        flex-direction: column;\n        position: relative;\n        left: 0;\n        \n        width: 98%;\n    }\n    \n    .project-prompt {\n        padding-top: 5%;\n        width: 90%;\n    }\n\n    .project {\n        width: 100%;\n        border-bottom: rgb(24, 28, 32) solid 10px;\n    }\n\n    .task-prompt {\n        padding-top: 5%;\n        width: 90%;\n    }\n\n    input {\n        width: 95%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (57:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|     return sortedTasks\n| }\n> <<<<<<< HEAD\n| /*\n| function dateChecker(dueDate) {");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementBuilder": () => (/* binding */ elementBuilder),
/* harmony export */   "getPosition": () => (/* binding */ getPosition),
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "projectDiv": () => (/* binding */ projectDiv)
/* harmony export */ });
function elementBuilder(element, classLabel, parentName) {
    let item = document.createElement(element);
    item.classList.add(classLabel);
    parentName.appendChild(item);
    return item;
}

const getPosition = (projectElement) => {
    let projectIndex = Array.from(projectElement.parentNode.children).indexOf(projectElement);
    return projectIndex
};

let body = document.getElementsByTagName("body")[0];

let projectDiv = elementBuilder("div", "project-container", body);





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* eslint-disable no-unused-vars */





const start = (() => {
  let projects = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.projectTracker)()
  const defaultProject = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.project)("New Project", "Add a task below and start tracking your project!", []);
  const defaultProjectSet = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.projectBuilder)(defaultProject);
  projects.masterList.push(defaultProjectSet);
  (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.applyButtons)(projects.masterList);

  return { projects }
})();

let projects = start.projects








/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectHeader": () => (/* binding */ projectHeader),
/* harmony export */   "projectBuilder": () => (/* binding */ projectBuilder),
/* harmony export */   "applyButtons": () => (/* binding */ applyButtons)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ "./src/elements.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./src/date.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */






const projectSize = (parent) => {
  let projectElements = Array.from(parent.children);
  if (projectElements.length === 1) {
    let projectElement = parent.children[0];
    projectElement.classList.add("one-project-page");
  } else if (projectElements.length === 2) {
    for (let i = 0; i < parent.children.length; i++) {
      let projectElement = parent.children[i];
      projectElement.classList.add("two-project-page");
    }
  } else if (projectElements.length === 3) {
    for (let i = 0; i < parent.children.length; i++) {
      let projectElement = parent.children[i];
      projectElement.classList.add("three-project-page");
    }
  }
};

function toDoBuilder(task, parent) {
  let elementArray = [];
  let taskDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", "task", parent);
  let topDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", "top-div", taskDiv)
  let removeTask = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "remove-task", topDiv);
  removeTask.textContent = "X";
  let head = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("h3", "task-head", topDiv);
  head.textContent = task.title;
  let desc = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("p", "task-desc", taskDiv);
  desc.textContent = task.description;
  let deadlineNotif = (0,_date__WEBPACK_IMPORTED_MODULE_3__.deadline)(task.enteredDate);
  let dueDate = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("p", "due-date", taskDiv);
  dueDate.textContent = task.dueDate;
  let dueMessage = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("p", "due-message", taskDiv);
  dueMessage.textContent = deadlineNotif;
  let priority = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("p", "priority", taskDiv);
  priority.textContent = task.priority;
  let notes = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("p", "notes", taskDiv);
  notes.textContent = task.notes;
  let status = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("p", "status", taskDiv);
  status.textContent = task.status;
  elementArray.push(taskDiv, topDiv, removeTask, head, desc, dueDate, dueMessage, priority, notes, status);
    
  return elementArray
}

const projectHeader = (project, parent) => {
    let projectElement = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", "project", parent);
  
    let projectHead = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("h2", "project-head", projectElement)
    projectHead.textContent = project.title;
  
    let projectDesc = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("p", "project-desc", projectElement);
    projectDesc.textContent = project.description;
  
    return projectElement
};

const projectBuilder = (project) => {
  let projectElement = projectHeader(project, _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv)

  for (let i = 0; i < project.taskArray.length; i++) {
    
    let task = project.taskArray[i];
    toDoBuilder(task, projectElement);
  }

  const deleteList = () => {
    projectElement.remove()
  };

  const removeTask = (task) => {
    for (let i = 0; i < project.taskArray.length; i++) {
      if (task === project.taskArray[i]) {
        project.taskArray.splice(i, 1);
      }
    }

    return project.taskArray
  };

  const sortByPriority = () => {
    let sortedArray = project.taskArray.sort((firstItem, secondItem) => firstItem.priority - secondItem.priority);
    return sortedArray
  };

  const minTasks = () => {
    let projectChildren = Array.from(projectElement.children);
    for (let i = 0; i < projectChildren.length; i++) {
      if (projectChildren[i].classList.contains("task")) {
        let taskElement = projectChildren[i];
        taskElement.classList.add("min");
        let taskChildren = Array.from(taskElement.children);
        for (let y = 0; y < taskChildren.length; y++) {
          if ((y === 1) || (y === 3) || (y === 4) || (y === 5)) {
            taskChildren[y].remove();
          }
        }
      }
    } 
  }
  return { projectElement, project, removeTask, sortByPriority, deleteList, minTasks }
};

const taskButtons = (set) => {
  const topButtonDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", "top-button-div", set.projectElement)
  set.projectElement.prepend(topButtonDiv);

  const addTaskButton = (() => {
    let addButton = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "top-buttons", topButtonDiv);
    addButton.classList.add("add-task")
    addButton.textContent = "+"

    function addNewTask() {
      addTask(set);
    }

    addButton.addEventListener("click", addNewTask)
  })()

  const maximize = () => {
    let projectIndex = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.getPosition)(set.projectElement);
    set.deleteList()
    
    //let originalIndex = projects.masterList.indexOf(set)
    //console.log(originalIndex)

    let maxProject = projectBuilder(set.project);
    _index__WEBPACK_IMPORTED_MODULE_1__.projects.masterList.push(maxProject)
    _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.insertBefore(maxProject.projectElement, _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.children[projectIndex]);
    taskButtons(maxProject);
  }

  const minimize = (() => {
    if (set.project.taskArray.length > 0) {
      let minButton = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "top-buttons", topButtonDiv);
      minButton.classList.add("min-button")
      minButton.textContent = "-"

      function minProject() {
        minButton.textContent = "□"
        set.minTasks()
        minButton.addEventListener("click", maximize);
      }

      minButton.addEventListener("click", minProject);
    }
  })();

  const buttonDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", "button-div", set.projectElement)

  const sortByDueDateButton = (() => {
    if (set.project.taskArray.length > 1) {
      let sort = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "sort-button", buttonDiv);
      sort.textContent = "Sort by Due Date";

      let projectIndex = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.getPosition)(set.projectElement);

      function newSortedList() {
        let sortedTasks = (0,_date__WEBPACK_IMPORTED_MODULE_3__.sortByDueDate)(set.project.taskArray)
        set.project.taskArray = sortedTasks
        set.deleteList()
        let sortedProject = projectBuilder(set.project)
        _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.insertBefore(sortedProject.projectElement, _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.children[projectIndex]);
        taskButtons(sortedProject)        
      }

      sort.addEventListener("click", newSortedList)
    }
  })();

  const sortByPriorityButton = (() => {
    if (set.project.taskArray.length > 1) {
      let sort = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "sort-by-priority", buttonDiv);
      sort.textContent = "Sort by Priority";
      let projectIndex = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.getPosition)(set.projectElement);
      set.sortByPriority();
      
      function newProjectSet() {
        set.deleteList()
        let sortedProject = projectBuilder(set.project)
        //projects.masterList.push(sortedProject)
        _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.insertBefore(sortedProject.projectElement, _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.children[projectIndex]);
        taskButtons(sortedProject)
      }
      sort.addEventListener("click", newProjectSet)
  }
})();
  
  const removeTaskButton = (() => {
    let projectElements = Array.from(set.projectElement.children);
    for (let i = 0; i < projectElements.length; i++) {
      if (projectElements[i].classList.contains("task")) {
        let taskDiv = projectElements[i];
        let topDiv = taskDiv.children[0];
        let removeTaskElement = taskDiv.firstChild;
        for (let y = 0; y < set.project.taskArray.length; y++) {
          if (topDiv.children[1].textContent === set.project.taskArray[y].title) {
            function taskRemover() {
              let projectIndex = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.getPosition)(set.projectElement);
              set.removeTask(set.project.taskArray[y]);
              set.deleteList()
              let sortedProject = projectBuilder(set.project);
              //projects.masterList.push(sortedProject)
              _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.insertBefore(sortedProject.projectElement, _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.children[projectIndex]);
              taskButtons(sortedProject) 
            } 
            removeTaskElement.addEventListener("click", taskRemover);  
          }   
        }  
      } 
    }
  })();
  
  const deleteButton = (() => {
    let del = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "delete-button", buttonDiv);
    del.textContent = "Remove Project"
      
    del.addEventListener("click", set.deleteList)
  })();
};

function applyButtons(taskArray) {
    for (let i = 0; i < taskArray.length; i++) {
      taskButtons(taskArray[i])
    }
}

function addTransparent(childElements) {
  for (let i = 0; i < childElements.length - 1; i++) {
    childElements[i].classList.add("transparent")
  }
}

function removeTransparent(childElements) {
  for (let i = 0; i < childElements.length - 1; i++) {
    childElements[i].classList.remove("transparent")
  }
}

function newInput(parent, promptType, divClass, labelClass, labelContent, inputClass, placeholder, inputId, nameAt) {
  let newDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", promptType, parent);
  newDiv.classList.add(divClass);
  let divLabel = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("label", labelClass, newDiv);
  divLabel.textContent = labelContent
  let divInput = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("input", inputClass, newDiv);
  divInput.setAttribute("placeholder", placeholder)
  divInput.id = inputId
  divInput.setAttribute("name", nameAt);
   
}

const addTask = (set) => {

  let project = set.project
  let projectElement = set.projectElement

  const taskPrompt = (() => {
    let prompt = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", "task-prompt", _elements__WEBPACK_IMPORTED_MODULE_2__.body);

    let promptHead = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("h3", "prompt-head", prompt)
    promptHead.textContent = "Create a Task";

    newInput(prompt, "new-task", "title-div", "name-label", "Task: ", "title-input", "Enter a Task!", "title", "title");
    newInput(prompt, "new-task", "description-div", "desc-label", "Description: ",  "desc-input", "Write a brief description.", "description", "desc");
    newInput(prompt, "new-task", "due-div", "due-label", "Due Date: ", "due-input", "MM/DD/YYYY", "due", "due");
    newInput(prompt, "new-task", "priority-div", "priority-label", "Priority: ", "priority-input", "Enter a number 1-5", "priority", "priority")
    newInput(prompt, "new-task", "notes-div", "notes-label", "Notes: ", "notes-input", "Write your notes here.", "notes", "notes")

    let children = _elements__WEBPACK_IMPORTED_MODULE_2__.body.children;
    addTransparent(children)

    let buttonDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", "create-task-buttons", prompt)

    let createButton = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "create-task", buttonDiv);
    createButton.textContent = "Create Task";

    let cancelButton = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "cancel", buttonDiv)
    cancelButton.textContent = "Cancel";

    function exit() {
      removeTransparent(children);
      prompt.remove()
    }

    cancelButton.addEventListener("click", exit);

  function createTask() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let enteredDate = document.getElementById("due").value;
    let dueDate = (0,_date__WEBPACK_IMPORTED_MODULE_3__.formatDate)(enteredDate);
    //checkedDate = dateChecker(dueDate);
    let priority = document.getElementById("priority").value;
    let notes = document.getElementById("notes").value;
    let status = "In Progress"

    let newTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__.toDo)(title, project, description, enteredDate, dueDate, priority, notes, status);
    toDoBuilder(newTask, projectElement);

    let projectIndex = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.getPosition)(projectElement);
    projectElement.remove();
    let updatedProject = projectBuilder(project);

    //projects.masterList.push(updatedProject)
    _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.insertBefore(updatedProject.projectElement, _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.children[projectIndex]);
    taskButtons(updatedProject);

    exit();
  }

  createButton.addEventListener("click", createTask)
  })();
};

const projectButton = (() => {

  function addNewProject() {
    addProject();
  }

  _sidebar__WEBPACK_IMPORTED_MODULE_4__.sidebar.newProject.addEventListener("click", addNewProject)
})();

const addProject = () => {
  const projectPrompt = (() => {
    let prompt = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", "project-prompt", _elements__WEBPACK_IMPORTED_MODULE_2__.body);

    let promptHead = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("h3", "prompt-head", prompt)
    promptHead.textContent = "Start a New Project";

    newInput(prompt, "new-task", "title-div", "name-label", "Task: ", "title-input", "Enter a title for your new project.", "project-title", "title");
    newInput(prompt, "new-task", "description-div", "desc-label", "Description: ", "desc-input", "Include a brief description.", "project-description", "desc");

    let children = _elements__WEBPACK_IMPORTED_MODULE_2__.body.children;
    addTransparent(children)

    let buttonDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", "create-task-buttons", prompt);

    let createButton = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "create-task", buttonDiv);
    createButton.textContent = "Create Project";

    let cancelButton = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "cancel", buttonDiv)
    cancelButton.textContent = "Cancel";

    function exit() {
      removeTransparent(children);
      prompt.remove()
    }

    cancelButton.addEventListener("click", exit);

    function createProject() {
      let title = document.getElementById("project-title").value;
      let description = document.getElementById("project-description").value;

      let newProject = (0,_task__WEBPACK_IMPORTED_MODULE_0__.project)(title, description, [])
      let projectSet = projectBuilder(newProject);
      _index__WEBPACK_IMPORTED_MODULE_1__.projects.masterList.push(projectSet)
      taskButtons(projectSet);

      exit();
    }
    createButton.addEventListener("click", createProject)
  })();
}

const viewButton = (() => {
  function maxView() {
    changeView.maxAll();
    _sidebar__WEBPACK_IMPORTED_MODULE_4__.sidebar.changeView.addEventListener("click", minView)
  }

  function minView() {
    changeView.minAll();
    _sidebar__WEBPACK_IMPORTED_MODULE_4__.sidebar.changeView.addEventListener("click", maxView)
  }

  _sidebar__WEBPACK_IMPORTED_MODULE_4__.sidebar.changeView.addEventListener("click", minView)
})();

const changeView = (() => {
  const minAll = () => {
    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_1__.projects.masterList.length; i++) {
      _index__WEBPACK_IMPORTED_MODULE_1__.projects.masterList[i].minTasks()
    }
  }

  const maxAll = () => {
    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_1__.projects.masterList.length; i++) {
      let set = _index__WEBPACK_IMPORTED_MODULE_1__.projects.masterList[i]
      let projectElement = set.projectElement
      console.log(projectElement.parentNode)
      let projectIndex = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.getPosition)(set.projectElement);
      set.deleteList()
      let maxProject = projectBuilder(set.project);
      _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.insertBefore(maxProject.projectElement, _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.children[projectIndex]);
      taskButtons(maxProject);
    }
  }
  return { minAll, maxAll }
})();



/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebar": () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/elements.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ "./src/date.js");



const sidebar = (() => {
    const element = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "sidebar", _elements__WEBPACK_IMPORTED_MODULE_0__.body);
    const head = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("h1", "sidebar-head", element);
    head.textContent = "OnTask";
    const sideButtons = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "side-button-container", element)
  
    const newProject = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("button", "side-buttons", sideButtons);
    newProject.textContent = "Start New Project";
    newProject.id = "new-project"
  
    const changeView = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("button", "side-buttons", sideButtons)
    changeView.id = "view-button"
    changeView.textContent = "Change View"
  
    const notifHead = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("h2", "notif-head", element);
    notifHead.textContent = "Notifications";
  
    const notifications = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "notif-bar", element);
    
    const currentDate = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("p", "today-notif", notifications);
    currentDate.textContent = (0,_date__WEBPACK_IMPORTED_MODULE_1__.today)();
  
    return { element, newProject, changeView, notifHead, notifications, today: _date__WEBPACK_IMPORTED_MODULE_1__.today }
})();




/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "toDo": () => (/* binding */ toDo),
/* harmony export */   "projectTracker": () => (/* binding */ projectTracker)
/* harmony export */ });
const project = (title, description, taskArray) => {
    return { title, description, taskArray }
};

const toDo = (title, project, description, enteredDate, dueDate, priority, notes, status) => {
    let task = { title, project, description, enteredDate, dueDate,  priority, notes, status }
    project.taskArray.unshift(task);
    return { title, project, description, enteredDate, dueDate,  priority, notes, status }
};

const projectTracker = () => {
    let masterList = []

    const clearList = () => {
        masterList = [];
        return masterList
    }
    return { masterList, clearList }
}


  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssK0JBQStCLHdDQUF3QyxnQ0FBZ0Msd0NBQXdDLG9CQUFvQixvQ0FBb0Msc0JBQXNCLG1CQUFtQixHQUFHLGNBQWMsc0JBQXNCLGNBQWMsaUJBQWlCLG1CQUFtQiwyQ0FBMkMsNkJBQTZCLEdBQUcsbUJBQW1CLG1CQUFtQix5QkFBeUIsZ0JBQWdCLGdCQUFnQix5QkFBeUIsR0FBRyw0QkFBNEIseUJBQXlCLGNBQWMsbUJBQW1CLG9CQUFvQixvQ0FBb0MsaUJBQWlCLHdDQUF3QyxnQ0FBZ0Msa0JBQWtCLHlCQUF5QixHQUFHLG1CQUFtQixpQkFBaUIsR0FBRyxpQkFBaUIseUJBQXlCLGVBQWUsZ0JBQWdCLEdBQUcsZ0JBQWdCLHlCQUF5QixpQkFBaUIsa0JBQWtCLGVBQWUsbUJBQW1CLGtCQUFrQix5QkFBeUIsd0NBQXdDLGdDQUFnQyxHQUFHLHdCQUF3Qix5QkFBeUIsaUJBQWlCLG9CQUFvQixvQ0FBb0MsaUJBQWlCLG1CQUFtQixLQUFLLGNBQWMsb0JBQW9CLDZCQUE2QiwyQ0FBMkMsNkJBQTZCLGlCQUFpQixtQkFBbUIsbUJBQW1CLDJCQUEyQixHQUFHLHVCQUF1QixpQkFBaUIsR0FBRyx1QkFBdUIsaUJBQWlCLEdBQUcseUJBQXlCLGlCQUFpQixHQUFHLG1CQUFtQixtQkFBbUIsR0FBRyxtQkFBbUIseUJBQXlCLEdBQUcsV0FBVywyQ0FBMkMsd0NBQXdDLGdDQUFnQyxpQkFBaUIsa0JBQWtCLHlCQUF5QiwwQkFBMEIsR0FBRyxVQUFVLHdCQUF3QixHQUFHLFlBQVksNEJBQTRCLEdBQUcsY0FBYyxvQkFBb0IscUNBQXFDLEdBQUcsWUFBWSxpQkFBaUIsMEJBQTBCLDJDQUEyQyw2QkFBNkIsbUJBQW1CLHdCQUF3Qix3QkFBd0IsR0FBRyxxQkFBcUIsb0JBQW9CLG9DQUFvQyx5QkFBeUIsZ0JBQWdCLGlCQUFpQixHQUFHLGtCQUFrQixrQkFBa0Isd0NBQXdDLGdDQUFnQyx3QkFBd0IsR0FBRyxrQkFBa0IsZUFBZSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixtQkFBbUIsMEJBQTBCLEdBQUcsa0JBQWtCLG9CQUFvQix3QkFBd0IscUNBQXFDLHlCQUF5QixlQUFlLGtCQUFrQixpQkFBaUIsMkNBQTJDLDZCQUE2QiwwQkFBMEIsaUJBQWlCLHdCQUF3Qix3QkFBd0IsR0FBRyxxQkFBcUIsb0JBQW9CLHdCQUF3QixxQ0FBcUMseUJBQXlCLGVBQWUsa0JBQWtCLGlCQUFpQiwyQ0FBMkMsNkJBQTZCLDBCQUEwQixpQkFBaUIsd0JBQXdCLHdCQUF3QixHQUFHLGtCQUFrQixtQkFBbUIsR0FBRyxlQUFlLHlCQUF5QixHQUFHLGdCQUFnQix5QkFBeUIsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsMEJBQTBCLG9CQUFvQixxQ0FBcUMsb0JBQW9CLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLGFBQWEsaUJBQWlCLEdBQUcsV0FBVyx5QkFBeUIsa0JBQWtCLGtCQUFrQixHQUFHLCtDQUErQyxZQUFZLGlDQUFpQyw4QkFBOEIsT0FBTyxrQkFBa0IsNkJBQTZCLGlCQUFpQixzQkFBc0Isc0JBQXNCLG9EQUFvRCxPQUFPLDRCQUE0Qix3QkFBd0IsaUNBQWlDLDZCQUE2QixrQkFBa0IsK0JBQStCLE9BQU8sNkJBQTZCLDBCQUEwQixxQkFBcUIsT0FBTyxrQkFBa0Isc0JBQXNCLG9EQUFvRCxPQUFPLHNCQUFzQiwwQkFBMEIscUJBQXFCLE9BQU8sZUFBZSxxQkFBcUIsT0FBTyxHQUFHLG1CQUFtQjtBQUNydFc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsa0NBQWtDOztBQUVsQyw4QkFBOEI7O0FBRTlCLGtEQUFrRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNEOztBQUU3Uyx1Q0FBdUMsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sb0JBQW9COztBQUV6Syx5Q0FBeUMsMEdBQTBHLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLHVDQUF1QyxjQUFjLFdBQVcsWUFBWSxVQUFVLE1BQU0sbURBQW1ELFVBQVUsc0JBQXNCOztBQUVuZixnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsbUZBQU8sSUFBSSwwRkFBYyxHQUFHLDBGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQU9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUNxQjtBQUM4QjtBQUNPOzs7QUFHMUQ7QUFDQSxpQkFBaUIsd0RBQWM7QUFDL0IseUJBQXlCLGlEQUFPO0FBQ2hDLDRCQUE0QiwyREFBYztBQUMxQztBQUNBLEVBQUUseURBQVk7O0FBRWQsV0FBVztBQUNYLENBQUM7O0FBRUQ7Ozs7QUFNQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRDtBQUNBO0FBQ3NDO0FBQ0o7QUFDd0M7QUFDRDtBQUN0Qzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQix5REFBYztBQUM5QixlQUFlLHlEQUFjO0FBQzdCLG1CQUFtQix5REFBYztBQUNqQztBQUNBLGFBQWEseURBQWM7QUFDM0I7QUFDQSxhQUFhLHlEQUFjO0FBQzNCO0FBQ0Esc0JBQXNCLCtDQUFRO0FBQzlCLGdCQUFnQix5REFBYztBQUM5QjtBQUNBLG1CQUFtQix5REFBYztBQUNqQztBQUNBLGlCQUFpQix5REFBYztBQUMvQjtBQUNBLGNBQWMseURBQWM7QUFDNUI7QUFDQSxlQUFlLHlEQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIseURBQWM7QUFDdkM7QUFDQSxzQkFBc0IseURBQWM7QUFDcEM7QUFDQTtBQUNBLHNCQUFzQix5REFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxpREFBVTs7QUFFeEQsa0JBQWtCLDhCQUE4QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsdUJBQXVCLHlEQUFjO0FBQ3JDOztBQUVBO0FBQ0Esb0JBQW9CLHlEQUFjO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHVCQUF1QixzREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksNERBQXdCO0FBQzVCLElBQUksOERBQXVCLDRCQUE0QiwwREFBbUI7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFjO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxvQkFBb0IseURBQWM7O0FBRWxDO0FBQ0E7QUFDQSxpQkFBaUIseURBQWM7QUFDL0I7O0FBRUEseUJBQXlCLHNEQUFXOztBQUVwQztBQUNBLDBCQUEwQixvREFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUF1QiwrQkFBK0IsMERBQW1CO0FBQ2pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGlCQUFpQix5REFBYztBQUMvQjtBQUNBLHlCQUF5QixzREFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUF1QiwrQkFBK0IsMERBQW1CO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFEO0FBQ0E7QUFDQSxpQ0FBaUMsc0RBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhEQUF1QiwrQkFBK0IsMERBQW1CO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLHlEQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDhCQUE4QjtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsOEJBQThCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUseURBQWM7QUFDN0I7QUFDQSxpQkFBaUIseURBQWM7QUFDL0I7QUFDQSxpQkFBaUIseURBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHlEQUFjLHVCQUF1QiwyQ0FBSTs7QUFFMUQscUJBQXFCLHlEQUFjO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9EQUFhO0FBQ2hDOztBQUVBLG9CQUFvQix5REFBYzs7QUFFbEMsdUJBQXVCLHlEQUFjO0FBQ3JDOztBQUVBLHVCQUF1Qix5REFBYztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpREFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsMkNBQUk7QUFDdEI7O0FBRUEsdUJBQXVCLHNEQUFXO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDhEQUF1QixnQ0FBZ0MsMERBQW1CO0FBQzlFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUseUVBQW1DO0FBQ3JDLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGlCQUFpQix5REFBYywwQkFBMEIsMkNBQUk7O0FBRTdELHFCQUFxQix5REFBYztBQUNuQzs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixvREFBYTtBQUNoQzs7QUFFQSxvQkFBb0IseURBQWM7O0FBRWxDLHVCQUF1Qix5REFBYztBQUNyQzs7QUFFQSx1QkFBdUIseURBQWM7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qiw4Q0FBTztBQUM5QjtBQUNBLE1BQU0sNERBQXdCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlFQUFtQztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx5RUFBbUM7QUFDdkM7O0FBRUEsRUFBRSx5RUFBbUM7QUFDckMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esb0JBQW9CLElBQUksOERBQTBCLEVBQUU7QUFDcEQsTUFBTSx1REFBbUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixJQUFJLDhEQUEwQixFQUFFO0FBQ3BELGdCQUFnQix1REFBbUI7QUFDbkM7QUFDQTtBQUNBLHlCQUF5QixzREFBVztBQUNwQztBQUNBO0FBQ0EsTUFBTSw4REFBdUIsNEJBQTRCLDBEQUFtQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZaZ0Q7QUFDbkI7O0FBRTlCO0FBQ0Esb0JBQW9CLHlEQUFjLG1CQUFtQiwyQ0FBSTtBQUN6RCxpQkFBaUIseURBQWM7QUFDL0I7QUFDQSx3QkFBd0IseURBQWM7QUFDdEM7QUFDQSx1QkFBdUIseURBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlEQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5REFBYztBQUNwQztBQUNBO0FBQ0EsMEJBQTBCLHlEQUFjO0FBQ3hDO0FBQ0Esd0JBQXdCLHlEQUFjO0FBQ3RDLDhCQUE4Qiw0Q0FBSztBQUNuQztBQUNBLGFBQWEsZ0VBQWdFO0FBQzdFLENBQUM7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRDtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQU1DO0FBQ0Q7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvRG9MaXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b0RvTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b0RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvRG9MaXN0Ly4vc3JjL2VsZW1lbnRzLmpzIiwid2VicGFjazovL3RvRG9MaXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvRG9MaXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvRG9MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b0RvTGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gICAgY29sb3I6IHJnYigxODcsIDIyMCwgMjQ4KTtcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZm9udC1zaXplOiAxLjE1O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gICAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG59XFxuXFxuLnNpZGViYXItaGVhZCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDIuNSU7XFxuICAgIGxlZnQ6IDI1JTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uc2lkZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICAgIGNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlLWJ1dHRvbnMge1xcbiAgICB3aWR0aDogNDUlO1xcbn1cXG5cXG4ubm90aWYtaGVhZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA1MSU7XFxuICAgIGxlZnQ6IDIyJTtcXG59XFxuXFxuLm5vdGlmLWJhciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiAyOCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gICAgY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA3LjUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gICAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAuNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgIFxcbn1cXG5cXG4ub25lLXByb2plY3QtcGFnZSB7XFxuICAgIHdpZHRoOiA2NiU7XFxufVxcblxcbi50d28tcHJvamVjdC1wYWdlIHtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnRocmVlLXByb2plY3QtcGFnZSB7XFxuICAgIHdpZHRoOiAyNSU7XFxufVxcblxcbi5wcm9qZWN0LWhlYWQge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWRlc2Mge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNSU7XFxufVxcblxcbi50YXNrIHtcXG4gICAgYm9yZGVyOiBzb2xpZCA1cHggcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICAgIGNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICAgIHdpZHRoOiA4NyU7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNyU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5taW4ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuLm1pbiBwIHtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbn1cXG5cXG4udG9wLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnRvcC1idXR0b24tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogODIlO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4udG9wLWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgICBjb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBmb250LXNpemU6IDEuMmVtOyBcXG59XFxuXFxuLnJlbW92ZS10YXNrIHtcXG4gICAgb3JkZXI6IDE7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxNHB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4udGFzay1wcm9tcHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0LXByb21wdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICAgIGNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb21wdC1oZWFkIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubmV3LXRhc2sge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XFxufVxcblxcbi5ub3Rlcy1kaXYge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XFxufVxcblxcbi50cmFuc3BhcmVudCB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxufVxcblxcbi5jcmVhdGUtdGFzay1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLmNhbmNlbCB7XFxuICAgIHdpZHRoOiA0NSU7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogcmdiKDI0LCAyOCwgMzIpIHNvbGlkIDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIFxcbiAgICAgICAgd2lkdGg6IDk4JTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnByb2plY3QtcHJvbXB0IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiByZ2IoMjQsIDI4LCAzMikgc29saWQgMTBweDtcXG4gICAgfVxcblxcbiAgICAudGFzay1wcm9tcHQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7O0lBRTlCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixXQUFXO1FBQ1gsV0FBVztRQUNYLHlDQUF5QztJQUM3Qzs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLE9BQU87O1FBRVAsVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFdBQVc7UUFDWCx5Q0FBeUM7SUFDN0M7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gICAgY29sb3I6IHJnYigxODcsIDIyMCwgMjQ4KTtcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZm9udC1zaXplOiAxLjE1O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gICAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG59XFxuXFxuLnNpZGViYXItaGVhZCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDIuNSU7XFxuICAgIGxlZnQ6IDI1JTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uc2lkZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICAgIGNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlLWJ1dHRvbnMge1xcbiAgICB3aWR0aDogNDUlO1xcbn1cXG5cXG4ubm90aWYtaGVhZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA1MSU7XFxuICAgIGxlZnQ6IDIyJTtcXG59XFxuXFxuLm5vdGlmLWJhciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiAyOCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gICAgY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA3LjUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gICAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAuNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgIFxcbn1cXG5cXG4ub25lLXByb2plY3QtcGFnZSB7XFxuICAgIHdpZHRoOiA2NiU7XFxufVxcblxcbi50d28tcHJvamVjdC1wYWdlIHtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnRocmVlLXByb2plY3QtcGFnZSB7XFxuICAgIHdpZHRoOiAyNSU7XFxufVxcblxcbi5wcm9qZWN0LWhlYWQge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWRlc2Mge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNSU7XFxufVxcblxcbi50YXNrIHtcXG4gICAgYm9yZGVyOiBzb2xpZCA1cHggcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICAgIGNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICAgIHdpZHRoOiA4NyU7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNyU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5taW4ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuLm1pbiBwIHtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbn1cXG5cXG4udG9wLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnRvcC1idXR0b24tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogODIlO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4udG9wLWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgICBjb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBmb250LXNpemU6IDEuMmVtOyBcXG59XFxuXFxuLnJlbW92ZS10YXNrIHtcXG4gICAgb3JkZXI6IDE7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxNHB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4udGFzay1wcm9tcHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0LXByb21wdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICAgIGNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb21wdC1oZWFkIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubmV3LXRhc2sge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XFxufVxcblxcbi5ub3Rlcy1kaXYge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XFxufVxcblxcbi50cmFuc3BhcmVudCB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxufVxcblxcbi5jcmVhdGUtdGFzay1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLmNhbmNlbCB7XFxuICAgIHdpZHRoOiA0NSU7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogcmdiKDI0LCAyOCwgMzIpIHNvbGlkIDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIFxcbiAgICAgICAgd2lkdGg6IDk4JTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnByb2plY3QtcHJvbXB0IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiByZ2IoMjQsIDI4LCAzMikgc29saWQgMTBweDtcXG4gICAgfVxcblxcbiAgICAudGFzay1wcm9tcHQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBlbGVtZW50QnVpbGRlcihlbGVtZW50LCBjbGFzc0xhYmVsLCBwYXJlbnROYW1lKSB7XG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc0xhYmVsKTtcbiAgICBwYXJlbnROYW1lLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIHJldHVybiBpdGVtO1xufVxuXG5jb25zdCBnZXRQb3NpdGlvbiA9IChwcm9qZWN0RWxlbWVudCkgPT4ge1xuICAgIGxldCBwcm9qZWN0SW5kZXggPSBBcnJheS5mcm9tKHByb2plY3RFbGVtZW50LnBhcmVudE5vZGUuY2hpbGRyZW4pLmluZGV4T2YocHJvamVjdEVsZW1lbnQpO1xuICAgIHJldHVybiBwcm9qZWN0SW5kZXhcbn07XG5cbmxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG5sZXQgcHJvamVjdERpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwicHJvamVjdC1jb250YWluZXJcIiwgYm9keSk7XG5cbmV4cG9ydCB7XG4gICAgZWxlbWVudEJ1aWxkZXIsXG4gICAgZ2V0UG9zaXRpb24sXG4gICAgYm9keSwgXG4gICAgcHJvamVjdERpdixcbn1cblxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcHJvamVjdCwgcHJvamVjdFRyYWNrZXIgfSBmcm9tICcuL3Rhc2suanMnXG5pbXBvcnQgeyBwcm9qZWN0QnVpbGRlciwgYXBwbHlCdXR0b25zIH0gZnJvbScuL3Byb2plY3QuanMnXG5cblxuY29uc3Qgc3RhcnQgPSAoKCkgPT4ge1xuICBsZXQgcHJvamVjdHMgPSBwcm9qZWN0VHJhY2tlcigpXG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdChcIk5ldyBQcm9qZWN0XCIsIFwiQWRkIGEgdGFzayBiZWxvdyBhbmQgc3RhcnQgdHJhY2tpbmcgeW91ciBwcm9qZWN0IVwiLCBbXSk7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0U2V0ID0gcHJvamVjdEJ1aWxkZXIoZGVmYXVsdFByb2plY3QpO1xuICBwcm9qZWN0cy5tYXN0ZXJMaXN0LnB1c2goZGVmYXVsdFByb2plY3RTZXQpO1xuICBhcHBseUJ1dHRvbnMocHJvamVjdHMubWFzdGVyTGlzdCk7XG5cbiAgcmV0dXJuIHsgcHJvamVjdHMgfVxufSkoKTtcblxubGV0IHByb2plY3RzID0gc3RhcnQucHJvamVjdHNcblxuXG5cbmV4cG9ydCB7XG4gIHByb2plY3RzXG59XG5cblxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8taW5uZXItZGVjbGFyYXRpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgcHJvamVjdCwgdG9EbyB9IGZyb20gJy4vdGFzaydcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7IGVsZW1lbnRCdWlsZGVyLCBnZXRQb3NpdGlvbiwgYm9keSwgcHJvamVjdERpdiB9IGZyb20gJy4vZWxlbWVudHMnXG5pbXBvcnQgeyBmb3JtYXREYXRlLCBkZWFkbGluZSwgc29ydEJ5RHVlRGF0ZSwgZGF0ZUNoZWNrZXIgfSBmcm9tICcuL2RhdGUnXG5pbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSAnLi9zaWRlYmFyJ1xuXG5jb25zdCBwcm9qZWN0U2l6ZSA9IChwYXJlbnQpID0+IHtcbiAgbGV0IHByb2plY3RFbGVtZW50cyA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKTtcbiAgaWYgKHByb2plY3RFbGVtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBsZXQgcHJvamVjdEVsZW1lbnQgPSBwYXJlbnQuY2hpbGRyZW5bMF07XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm9uZS1wcm9qZWN0LXBhZ2VcIik7XG4gIH0gZWxzZSBpZiAocHJvamVjdEVsZW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcHJvamVjdEVsZW1lbnQgPSBwYXJlbnQuY2hpbGRyZW5baV07XG4gICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidHdvLXByb2plY3QtcGFnZVwiKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvamVjdEVsZW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcHJvamVjdEVsZW1lbnQgPSBwYXJlbnQuY2hpbGRyZW5baV07XG4gICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGhyZWUtcHJvamVjdC1wYWdlXCIpO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gdG9Eb0J1aWxkZXIodGFzaywgcGFyZW50KSB7XG4gIGxldCBlbGVtZW50QXJyYXkgPSBbXTtcbiAgbGV0IHRhc2tEaXYgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcInRhc2tcIiwgcGFyZW50KTtcbiAgbGV0IHRvcERpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwidG9wLWRpdlwiLCB0YXNrRGl2KVxuICBsZXQgcmVtb3ZlVGFzayA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwicmVtb3ZlLXRhc2tcIiwgdG9wRGl2KTtcbiAgcmVtb3ZlVGFzay50ZXh0Q29udGVudCA9IFwiWFwiO1xuICBsZXQgaGVhZCA9IGVsZW1lbnRCdWlsZGVyKFwiaDNcIiwgXCJ0YXNrLWhlYWRcIiwgdG9wRGl2KTtcbiAgaGVhZC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIGxldCBkZXNjID0gZWxlbWVudEJ1aWxkZXIoXCJwXCIsIFwidGFzay1kZXNjXCIsIHRhc2tEaXYpO1xuICBkZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgbGV0IGRlYWRsaW5lTm90aWYgPSBkZWFkbGluZSh0YXNrLmVudGVyZWREYXRlKTtcbiAgbGV0IGR1ZURhdGUgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJkdWUtZGF0ZVwiLCB0YXNrRGl2KTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgbGV0IGR1ZU1lc3NhZ2UgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJkdWUtbWVzc2FnZVwiLCB0YXNrRGl2KTtcbiAgZHVlTWVzc2FnZS50ZXh0Q29udGVudCA9IGRlYWRsaW5lTm90aWY7XG4gIGxldCBwcmlvcml0eSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcInByaW9yaXR5XCIsIHRhc2tEaXYpO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gIGxldCBub3RlcyA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcIm5vdGVzXCIsIHRhc2tEaXYpO1xuICBub3Rlcy50ZXh0Q29udGVudCA9IHRhc2subm90ZXM7XG4gIGxldCBzdGF0dXMgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJzdGF0dXNcIiwgdGFza0Rpdik7XG4gIHN0YXR1cy50ZXh0Q29udGVudCA9IHRhc2suc3RhdHVzO1xuICBlbGVtZW50QXJyYXkucHVzaCh0YXNrRGl2LCB0b3BEaXYsIHJlbW92ZVRhc2ssIGhlYWQsIGRlc2MsIGR1ZURhdGUsIGR1ZU1lc3NhZ2UsIHByaW9yaXR5LCBub3Rlcywgc3RhdHVzKTtcbiAgICBcbiAgcmV0dXJuIGVsZW1lbnRBcnJheVxufVxuXG5jb25zdCBwcm9qZWN0SGVhZGVyID0gKHByb2plY3QsIHBhcmVudCkgPT4ge1xuICAgIGxldCBwcm9qZWN0RWxlbWVudCA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwicHJvamVjdFwiLCBwYXJlbnQpO1xuICBcbiAgICBsZXQgcHJvamVjdEhlYWQgPSBlbGVtZW50QnVpbGRlcihcImgyXCIsIFwicHJvamVjdC1oZWFkXCIsIHByb2plY3RFbGVtZW50KVxuICAgIHByb2plY3RIZWFkLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgXG4gICAgbGV0IHByb2plY3REZXNjID0gZWxlbWVudEJ1aWxkZXIoXCJwXCIsIFwicHJvamVjdC1kZXNjXCIsIHByb2plY3RFbGVtZW50KTtcbiAgICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG4gIFxuICAgIHJldHVybiBwcm9qZWN0RWxlbWVudFxufTtcblxuY29uc3QgcHJvamVjdEJ1aWxkZXIgPSAocHJvamVjdCkgPT4ge1xuICBsZXQgcHJvamVjdEVsZW1lbnQgPSBwcm9qZWN0SGVhZGVyKHByb2plY3QsIHByb2plY3REaXYpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIFxuICAgIGxldCB0YXNrID0gcHJvamVjdC50YXNrQXJyYXlbaV07XG4gICAgdG9Eb0J1aWxkZXIodGFzaywgcHJvamVjdEVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3QgZGVsZXRlTGlzdCA9ICgpID0+IHtcbiAgICBwcm9qZWN0RWxlbWVudC5yZW1vdmUoKVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0YXNrID09PSBwcm9qZWN0LnRhc2tBcnJheVtpXSkge1xuICAgICAgICBwcm9qZWN0LnRhc2tBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2plY3QudGFza0FycmF5XG4gIH07XG5cbiAgY29uc3Qgc29ydEJ5UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgbGV0IHNvcnRlZEFycmF5ID0gcHJvamVjdC50YXNrQXJyYXkuc29ydCgoZmlyc3RJdGVtLCBzZWNvbmRJdGVtKSA9PiBmaXJzdEl0ZW0ucHJpb3JpdHkgLSBzZWNvbmRJdGVtLnByaW9yaXR5KTtcbiAgICByZXR1cm4gc29ydGVkQXJyYXlcbiAgfTtcblxuICBjb25zdCBtaW5UYXNrcyA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdENoaWxkcmVuID0gQXJyYXkuZnJvbShwcm9qZWN0RWxlbWVudC5jaGlsZHJlbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Q2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0Q2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFza1wiKSkge1xuICAgICAgICBsZXQgdGFza0VsZW1lbnQgPSBwcm9qZWN0Q2hpbGRyZW5baV07XG4gICAgICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtaW5cIik7XG4gICAgICAgIGxldCB0YXNrQ2hpbGRyZW4gPSBBcnJheS5mcm9tKHRhc2tFbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0YXNrQ2hpbGRyZW4ubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICBpZiAoKHkgPT09IDEpIHx8ICh5ID09PSAzKSB8fCAoeSA9PT0gNCkgfHwgKHkgPT09IDUpKSB7XG4gICAgICAgICAgICB0YXNrQ2hpbGRyZW5beV0ucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBcbiAgfVxuICByZXR1cm4geyBwcm9qZWN0RWxlbWVudCwgcHJvamVjdCwgcmVtb3ZlVGFzaywgc29ydEJ5UHJpb3JpdHksIGRlbGV0ZUxpc3QsIG1pblRhc2tzIH1cbn07XG5cbmNvbnN0IHRhc2tCdXR0b25zID0gKHNldCkgPT4ge1xuICBjb25zdCB0b3BCdXR0b25EaXYgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcInRvcC1idXR0b24tZGl2XCIsIHNldC5wcm9qZWN0RWxlbWVudClcbiAgc2V0LnByb2plY3RFbGVtZW50LnByZXBlbmQodG9wQnV0dG9uRGl2KTtcblxuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gKCgpID0+IHtcbiAgICBsZXQgYWRkQnV0dG9uID0gZWxlbWVudEJ1aWxkZXIoXCJidXR0b25cIiwgXCJ0b3AtYnV0dG9uc1wiLCB0b3BCdXR0b25EaXYpO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIilcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIlxuXG4gICAgZnVuY3Rpb24gYWRkTmV3VGFzaygpIHtcbiAgICAgIGFkZFRhc2soc2V0KTtcbiAgICB9XG5cbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Rhc2spXG4gIH0pKClcblxuICBjb25zdCBtYXhpbWl6ZSA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gZ2V0UG9zaXRpb24oc2V0LnByb2plY3RFbGVtZW50KTtcbiAgICBzZXQuZGVsZXRlTGlzdCgpXG4gICAgXG4gICAgLy9sZXQgb3JpZ2luYWxJbmRleCA9IHByb2plY3RzLm1hc3Rlckxpc3QuaW5kZXhPZihzZXQpXG4gICAgLy9jb25zb2xlLmxvZyhvcmlnaW5hbEluZGV4KVxuXG4gICAgbGV0IG1heFByb2plY3QgPSBwcm9qZWN0QnVpbGRlcihzZXQucHJvamVjdCk7XG4gICAgcHJvamVjdHMubWFzdGVyTGlzdC5wdXNoKG1heFByb2plY3QpXG4gICAgcHJvamVjdERpdi5pbnNlcnRCZWZvcmUobWF4UHJvamVjdC5wcm9qZWN0RWxlbWVudCwgcHJvamVjdERpdi5jaGlsZHJlbltwcm9qZWN0SW5kZXhdKTtcbiAgICB0YXNrQnV0dG9ucyhtYXhQcm9qZWN0KTtcbiAgfVxuXG4gIGNvbnN0IG1pbmltaXplID0gKCgpID0+IHtcbiAgICBpZiAoc2V0LnByb2plY3QudGFza0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBtaW5CdXR0b24gPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCBcInRvcC1idXR0b25zXCIsIHRvcEJ1dHRvbkRpdik7XG4gICAgICBtaW5CdXR0b24uY2xhc3NMaXN0LmFkZChcIm1pbi1idXR0b25cIilcbiAgICAgIG1pbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiLVwiXG5cbiAgICAgIGZ1bmN0aW9uIG1pblByb2plY3QoKSB7XG4gICAgICAgIG1pbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4pahXCJcbiAgICAgICAgc2V0Lm1pblRhc2tzKClcbiAgICAgICAgbWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYXhpbWl6ZSk7XG4gICAgICB9XG5cbiAgICAgIG1pbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWluUHJvamVjdCk7XG4gICAgfVxuICB9KSgpO1xuXG4gIGNvbnN0IGJ1dHRvbkRpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwiYnV0dG9uLWRpdlwiLCBzZXQucHJvamVjdEVsZW1lbnQpXG5cbiAgY29uc3Qgc29ydEJ5RHVlRGF0ZUJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgaWYgKHNldC5wcm9qZWN0LnRhc2tBcnJheS5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgc29ydCA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwic29ydC1idXR0b25cIiwgYnV0dG9uRGl2KTtcbiAgICAgIHNvcnQudGV4dENvbnRlbnQgPSBcIlNvcnQgYnkgRHVlIERhdGVcIjtcblxuICAgICAgbGV0IHByb2plY3RJbmRleCA9IGdldFBvc2l0aW9uKHNldC5wcm9qZWN0RWxlbWVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIG5ld1NvcnRlZExpc3QoKSB7XG4gICAgICAgIGxldCBzb3J0ZWRUYXNrcyA9IHNvcnRCeUR1ZURhdGUoc2V0LnByb2plY3QudGFza0FycmF5KVxuICAgICAgICBzZXQucHJvamVjdC50YXNrQXJyYXkgPSBzb3J0ZWRUYXNrc1xuICAgICAgICBzZXQuZGVsZXRlTGlzdCgpXG4gICAgICAgIGxldCBzb3J0ZWRQcm9qZWN0ID0gcHJvamVjdEJ1aWxkZXIoc2V0LnByb2plY3QpXG4gICAgICAgIHByb2plY3REaXYuaW5zZXJ0QmVmb3JlKHNvcnRlZFByb2plY3QucHJvamVjdEVsZW1lbnQsIHByb2plY3REaXYuY2hpbGRyZW5bcHJvamVjdEluZGV4XSk7XG4gICAgICAgIHRhc2tCdXR0b25zKHNvcnRlZFByb2plY3QpICAgICAgICBcbiAgICAgIH1cblxuICAgICAgc29ydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3U29ydGVkTGlzdClcbiAgICB9XG4gIH0pKCk7XG5cbiAgY29uc3Qgc29ydEJ5UHJpb3JpdHlCdXR0b24gPSAoKCkgPT4ge1xuICAgIGlmIChzZXQucHJvamVjdC50YXNrQXJyYXkubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHNvcnQgPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCBcInNvcnQtYnktcHJpb3JpdHlcIiwgYnV0dG9uRGl2KTtcbiAgICAgIHNvcnQudGV4dENvbnRlbnQgPSBcIlNvcnQgYnkgUHJpb3JpdHlcIjtcbiAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBnZXRQb3NpdGlvbihzZXQucHJvamVjdEVsZW1lbnQpO1xuICAgICAgc2V0LnNvcnRCeVByaW9yaXR5KCk7XG4gICAgICBcbiAgICAgIGZ1bmN0aW9uIG5ld1Byb2plY3RTZXQoKSB7XG4gICAgICAgIHNldC5kZWxldGVMaXN0KClcbiAgICAgICAgbGV0IHNvcnRlZFByb2plY3QgPSBwcm9qZWN0QnVpbGRlcihzZXQucHJvamVjdClcbiAgICAgICAgLy9wcm9qZWN0cy5tYXN0ZXJMaXN0LnB1c2goc29ydGVkUHJvamVjdClcbiAgICAgICAgcHJvamVjdERpdi5pbnNlcnRCZWZvcmUoc29ydGVkUHJvamVjdC5wcm9qZWN0RWxlbWVudCwgcHJvamVjdERpdi5jaGlsZHJlbltwcm9qZWN0SW5kZXhdKTtcbiAgICAgICAgdGFza0J1dHRvbnMoc29ydGVkUHJvamVjdClcbiAgICAgIH1cbiAgICAgIHNvcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3RTZXQpXG4gIH1cbn0pKCk7XG4gIFxuICBjb25zdCByZW1vdmVUYXNrQnV0dG9uID0gKCgpID0+IHtcbiAgICBsZXQgcHJvamVjdEVsZW1lbnRzID0gQXJyYXkuZnJvbShzZXQucHJvamVjdEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvamVjdEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInRhc2tcIikpIHtcbiAgICAgICAgbGV0IHRhc2tEaXYgPSBwcm9qZWN0RWxlbWVudHNbaV07XG4gICAgICAgIGxldCB0b3BEaXYgPSB0YXNrRGl2LmNoaWxkcmVuWzBdO1xuICAgICAgICBsZXQgcmVtb3ZlVGFza0VsZW1lbnQgPSB0YXNrRGl2LmZpcnN0Q2hpbGQ7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2V0LnByb2plY3QudGFza0FycmF5Lmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgaWYgKHRvcERpdi5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9PT0gc2V0LnByb2plY3QudGFza0FycmF5W3ldLnRpdGxlKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiB0YXNrUmVtb3ZlcigpIHtcbiAgICAgICAgICAgICAgbGV0IHByb2plY3RJbmRleCA9IGdldFBvc2l0aW9uKHNldC5wcm9qZWN0RWxlbWVudCk7XG4gICAgICAgICAgICAgIHNldC5yZW1vdmVUYXNrKHNldC5wcm9qZWN0LnRhc2tBcnJheVt5XSk7XG4gICAgICAgICAgICAgIHNldC5kZWxldGVMaXN0KClcbiAgICAgICAgICAgICAgbGV0IHNvcnRlZFByb2plY3QgPSBwcm9qZWN0QnVpbGRlcihzZXQucHJvamVjdCk7XG4gICAgICAgICAgICAgIC8vcHJvamVjdHMubWFzdGVyTGlzdC5wdXNoKHNvcnRlZFByb2plY3QpXG4gICAgICAgICAgICAgIHByb2plY3REaXYuaW5zZXJ0QmVmb3JlKHNvcnRlZFByb2plY3QucHJvamVjdEVsZW1lbnQsIHByb2plY3REaXYuY2hpbGRyZW5bcHJvamVjdEluZGV4XSk7XG4gICAgICAgICAgICAgIHRhc2tCdXR0b25zKHNvcnRlZFByb2plY3QpIFxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJlbW92ZVRhc2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrUmVtb3Zlcik7ICBcbiAgICAgICAgICB9ICAgXG4gICAgICAgIH0gIFxuICAgICAgfSBcbiAgICB9XG4gIH0pKCk7XG4gIFxuICBjb25zdCBkZWxldGVCdXR0b24gPSAoKCkgPT4ge1xuICAgIGxldCBkZWwgPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCBcImRlbGV0ZS1idXR0b25cIiwgYnV0dG9uRGl2KTtcbiAgICBkZWwudGV4dENvbnRlbnQgPSBcIlJlbW92ZSBQcm9qZWN0XCJcbiAgICAgIFxuICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2V0LmRlbGV0ZUxpc3QpXG4gIH0pKCk7XG59O1xuXG5mdW5jdGlvbiBhcHBseUJ1dHRvbnModGFza0FycmF5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhc2tCdXR0b25zKHRhc2tBcnJheVtpXSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRyYW5zcGFyZW50KGNoaWxkRWxlbWVudHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZEVsZW1lbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNoaWxkRWxlbWVudHNbaV0uY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVHJhbnNwYXJlbnQoY2hpbGRFbGVtZW50cykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRWxlbWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY2hpbGRFbGVtZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNwYXJlbnRcIilcbiAgfVxufVxuXG5mdW5jdGlvbiBuZXdJbnB1dChwYXJlbnQsIHByb21wdFR5cGUsIGRpdkNsYXNzLCBsYWJlbENsYXNzLCBsYWJlbENvbnRlbnQsIGlucHV0Q2xhc3MsIHBsYWNlaG9sZGVyLCBpbnB1dElkLCBuYW1lQXQpIHtcbiAgbGV0IG5ld0RpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIHByb21wdFR5cGUsIHBhcmVudCk7XG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGRpdkNsYXNzKTtcbiAgbGV0IGRpdkxhYmVsID0gZWxlbWVudEJ1aWxkZXIoXCJsYWJlbFwiLCBsYWJlbENsYXNzLCBuZXdEaXYpO1xuICBkaXZMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsQ29udGVudFxuICBsZXQgZGl2SW5wdXQgPSBlbGVtZW50QnVpbGRlcihcImlucHV0XCIsIGlucHV0Q2xhc3MsIG5ld0Rpdik7XG4gIGRpdklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlaG9sZGVyKVxuICBkaXZJbnB1dC5pZCA9IGlucHV0SWRcbiAgZGl2SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lQXQpO1xuICAgXG59XG5cbmNvbnN0IGFkZFRhc2sgPSAoc2V0KSA9PiB7XG5cbiAgbGV0IHByb2plY3QgPSBzZXQucHJvamVjdFxuICBsZXQgcHJvamVjdEVsZW1lbnQgPSBzZXQucHJvamVjdEVsZW1lbnRcblxuICBjb25zdCB0YXNrUHJvbXB0ID0gKCgpID0+IHtcbiAgICBsZXQgcHJvbXB0ID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJ0YXNrLXByb21wdFwiLCBib2R5KTtcblxuICAgIGxldCBwcm9tcHRIZWFkID0gZWxlbWVudEJ1aWxkZXIoXCJoM1wiLCBcInByb21wdC1oZWFkXCIsIHByb21wdClcbiAgICBwcm9tcHRIZWFkLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBUYXNrXCI7XG5cbiAgICBuZXdJbnB1dChwcm9tcHQsIFwibmV3LXRhc2tcIiwgXCJ0aXRsZS1kaXZcIiwgXCJuYW1lLWxhYmVsXCIsIFwiVGFzazogXCIsIFwidGl0bGUtaW5wdXRcIiwgXCJFbnRlciBhIFRhc2shXCIsIFwidGl0bGVcIiwgXCJ0aXRsZVwiKTtcbiAgICBuZXdJbnB1dChwcm9tcHQsIFwibmV3LXRhc2tcIiwgXCJkZXNjcmlwdGlvbi1kaXZcIiwgXCJkZXNjLWxhYmVsXCIsIFwiRGVzY3JpcHRpb246IFwiLCAgXCJkZXNjLWlucHV0XCIsIFwiV3JpdGUgYSBicmllZiBkZXNjcmlwdGlvbi5cIiwgXCJkZXNjcmlwdGlvblwiLCBcImRlc2NcIik7XG4gICAgbmV3SW5wdXQocHJvbXB0LCBcIm5ldy10YXNrXCIsIFwiZHVlLWRpdlwiLCBcImR1ZS1sYWJlbFwiLCBcIkR1ZSBEYXRlOiBcIiwgXCJkdWUtaW5wdXRcIiwgXCJNTS9ERC9ZWVlZXCIsIFwiZHVlXCIsIFwiZHVlXCIpO1xuICAgIG5ld0lucHV0KHByb21wdCwgXCJuZXctdGFza1wiLCBcInByaW9yaXR5LWRpdlwiLCBcInByaW9yaXR5LWxhYmVsXCIsIFwiUHJpb3JpdHk6IFwiLCBcInByaW9yaXR5LWlucHV0XCIsIFwiRW50ZXIgYSBudW1iZXIgMS01XCIsIFwicHJpb3JpdHlcIiwgXCJwcmlvcml0eVwiKVxuICAgIG5ld0lucHV0KHByb21wdCwgXCJuZXctdGFza1wiLCBcIm5vdGVzLWRpdlwiLCBcIm5vdGVzLWxhYmVsXCIsIFwiTm90ZXM6IFwiLCBcIm5vdGVzLWlucHV0XCIsIFwiV3JpdGUgeW91ciBub3RlcyBoZXJlLlwiLCBcIm5vdGVzXCIsIFwibm90ZXNcIilcblxuICAgIGxldCBjaGlsZHJlbiA9IGJvZHkuY2hpbGRyZW47XG4gICAgYWRkVHJhbnNwYXJlbnQoY2hpbGRyZW4pXG5cbiAgICBsZXQgYnV0dG9uRGl2ID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJjcmVhdGUtdGFzay1idXR0b25zXCIsIHByb21wdClcblxuICAgIGxldCBjcmVhdGVCdXR0b24gPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCBcImNyZWF0ZS10YXNrXCIsIGJ1dHRvbkRpdik7XG4gICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiO1xuXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwiY2FuY2VsXCIsIGJ1dHRvbkRpdilcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gICAgZnVuY3Rpb24gZXhpdCgpIHtcbiAgICAgIHJlbW92ZVRyYW5zcGFyZW50KGNoaWxkcmVuKTtcbiAgICAgIHByb21wdC5yZW1vdmUoKVxuICAgIH1cblxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhpdCk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgbGV0IGVudGVyZWREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVcIikudmFsdWU7XG4gICAgbGV0IGR1ZURhdGUgPSBmb3JtYXREYXRlKGVudGVyZWREYXRlKTtcbiAgICAvL2NoZWNrZWREYXRlID0gZGF0ZUNoZWNrZXIoZHVlRGF0ZSk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZTtcbiAgICBsZXQgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpLnZhbHVlO1xuICAgIGxldCBzdGF0dXMgPSBcIkluIFByb2dyZXNzXCJcblxuICAgIGxldCBuZXdUYXNrID0gdG9Ebyh0aXRsZSwgcHJvamVjdCwgZGVzY3JpcHRpb24sIGVudGVyZWREYXRlLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHN0YXR1cyk7XG4gICAgdG9Eb0J1aWxkZXIobmV3VGFzaywgcHJvamVjdEVsZW1lbnQpO1xuXG4gICAgbGV0IHByb2plY3RJbmRleCA9IGdldFBvc2l0aW9uKHByb2plY3RFbGVtZW50KTtcbiAgICBwcm9qZWN0RWxlbWVudC5yZW1vdmUoKTtcbiAgICBsZXQgdXBkYXRlZFByb2plY3QgPSBwcm9qZWN0QnVpbGRlcihwcm9qZWN0KTtcblxuICAgIC8vcHJvamVjdHMubWFzdGVyTGlzdC5wdXNoKHVwZGF0ZWRQcm9qZWN0KVxuICAgIHByb2plY3REaXYuaW5zZXJ0QmVmb3JlKHVwZGF0ZWRQcm9qZWN0LnByb2plY3RFbGVtZW50LCBwcm9qZWN0RGl2LmNoaWxkcmVuW3Byb2plY3RJbmRleF0pO1xuICAgIHRhc2tCdXR0b25zKHVwZGF0ZWRQcm9qZWN0KTtcblxuICAgIGV4aXQoKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVGFzaylcbiAgfSkoKTtcbn07XG5cbmNvbnN0IHByb2plY3RCdXR0b24gPSAoKCkgPT4ge1xuXG4gIGZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XG4gICAgYWRkUHJvamVjdCgpO1xuICB9XG5cbiAgc2lkZWJhci5uZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdQcm9qZWN0KVxufSkoKTtcblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdFByb21wdCA9ICgoKSA9PiB7XG4gICAgbGV0IHByb21wdCA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwicHJvamVjdC1wcm9tcHRcIiwgYm9keSk7XG5cbiAgICBsZXQgcHJvbXB0SGVhZCA9IGVsZW1lbnRCdWlsZGVyKFwiaDNcIiwgXCJwcm9tcHQtaGVhZFwiLCBwcm9tcHQpXG4gICAgcHJvbXB0SGVhZC50ZXh0Q29udGVudCA9IFwiU3RhcnQgYSBOZXcgUHJvamVjdFwiO1xuXG4gICAgbmV3SW5wdXQocHJvbXB0LCBcIm5ldy10YXNrXCIsIFwidGl0bGUtZGl2XCIsIFwibmFtZS1sYWJlbFwiLCBcIlRhc2s6IFwiLCBcInRpdGxlLWlucHV0XCIsIFwiRW50ZXIgYSB0aXRsZSBmb3IgeW91ciBuZXcgcHJvamVjdC5cIiwgXCJwcm9qZWN0LXRpdGxlXCIsIFwidGl0bGVcIik7XG4gICAgbmV3SW5wdXQocHJvbXB0LCBcIm5ldy10YXNrXCIsIFwiZGVzY3JpcHRpb24tZGl2XCIsIFwiZGVzYy1sYWJlbFwiLCBcIkRlc2NyaXB0aW9uOiBcIiwgXCJkZXNjLWlucHV0XCIsIFwiSW5jbHVkZSBhIGJyaWVmIGRlc2NyaXB0aW9uLlwiLCBcInByb2plY3QtZGVzY3JpcHRpb25cIiwgXCJkZXNjXCIpO1xuXG4gICAgbGV0IGNoaWxkcmVuID0gYm9keS5jaGlsZHJlbjtcbiAgICBhZGRUcmFuc3BhcmVudChjaGlsZHJlbilcblxuICAgIGxldCBidXR0b25EaXYgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcImNyZWF0ZS10YXNrLWJ1dHRvbnNcIiwgcHJvbXB0KTtcblxuICAgIGxldCBjcmVhdGVCdXR0b24gPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCBcImNyZWF0ZS10YXNrXCIsIGJ1dHRvbkRpdik7XG4gICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwiY2FuY2VsXCIsIGJ1dHRvbkRpdilcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gICAgZnVuY3Rpb24gZXhpdCgpIHtcbiAgICAgIHJlbW92ZVRyYW5zcGFyZW50KGNoaWxkcmVuKTtcbiAgICAgIHByb21wdC5yZW1vdmUoKVxuICAgIH1cblxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhpdCk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xuICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuXG4gICAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBbXSlcbiAgICAgIGxldCBwcm9qZWN0U2V0ID0gcHJvamVjdEJ1aWxkZXIobmV3UHJvamVjdCk7XG4gICAgICBwcm9qZWN0cy5tYXN0ZXJMaXN0LnB1c2gocHJvamVjdFNldClcbiAgICAgIHRhc2tCdXR0b25zKHByb2plY3RTZXQpO1xuXG4gICAgICBleGl0KCk7XG4gICAgfVxuICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdClcbiAgfSkoKTtcbn1cblxuY29uc3Qgdmlld0J1dHRvbiA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIG1heFZpZXcoKSB7XG4gICAgY2hhbmdlVmlldy5tYXhBbGwoKTtcbiAgICBzaWRlYmFyLmNoYW5nZVZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1pblZpZXcpXG4gIH1cblxuICBmdW5jdGlvbiBtaW5WaWV3KCkge1xuICAgIGNoYW5nZVZpZXcubWluQWxsKCk7XG4gICAgc2lkZWJhci5jaGFuZ2VWaWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYXhWaWV3KVxuICB9XG5cbiAgc2lkZWJhci5jaGFuZ2VWaWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtaW5WaWV3KVxufSkoKTtcblxuY29uc3QgY2hhbmdlVmlldyA9ICgoKSA9PiB7XG4gIGNvbnN0IG1pbkFsbCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLm1hc3Rlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb2plY3RzLm1hc3Rlckxpc3RbaV0ubWluVGFza3MoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1heEFsbCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLm1hc3Rlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzZXQgPSBwcm9qZWN0cy5tYXN0ZXJMaXN0W2ldXG4gICAgICBsZXQgcHJvamVjdEVsZW1lbnQgPSBzZXQucHJvamVjdEVsZW1lbnRcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RFbGVtZW50LnBhcmVudE5vZGUpXG4gICAgICBsZXQgcHJvamVjdEluZGV4ID0gZ2V0UG9zaXRpb24oc2V0LnByb2plY3RFbGVtZW50KTtcbiAgICAgIHNldC5kZWxldGVMaXN0KClcbiAgICAgIGxldCBtYXhQcm9qZWN0ID0gcHJvamVjdEJ1aWxkZXIoc2V0LnByb2plY3QpO1xuICAgICAgcHJvamVjdERpdi5pbnNlcnRCZWZvcmUobWF4UHJvamVjdC5wcm9qZWN0RWxlbWVudCwgcHJvamVjdERpdi5jaGlsZHJlbltwcm9qZWN0SW5kZXhdKTtcbiAgICAgIHRhc2tCdXR0b25zKG1heFByb2plY3QpO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBtaW5BbGwsIG1heEFsbCB9XG59KSgpO1xuXG5leHBvcnQge1xuICBwcm9qZWN0SGVhZGVyLFxuICBwcm9qZWN0QnVpbGRlciwgXG4gIGFwcGx5QnV0dG9ucyxcbn0iLCJpbXBvcnQgeyBlbGVtZW50QnVpbGRlciwgYm9keSB9IGZyb20gJy4vZWxlbWVudHMnXG5pbXBvcnQgeyB0b2RheSB9IGZyb20gJy4vZGF0ZSdcblxuY29uc3Qgc2lkZWJhciA9ICgoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwic2lkZWJhclwiLCBib2R5KTtcbiAgICBjb25zdCBoZWFkID0gZWxlbWVudEJ1aWxkZXIoXCJoMVwiLCBcInNpZGViYXItaGVhZFwiLCBlbGVtZW50KTtcbiAgICBoZWFkLnRleHRDb250ZW50ID0gXCJPblRhc2tcIjtcbiAgICBjb25zdCBzaWRlQnV0dG9ucyA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwic2lkZS1idXR0b24tY29udGFpbmVyXCIsIGVsZW1lbnQpXG4gIFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCBcInNpZGUtYnV0dG9uc1wiLCBzaWRlQnV0dG9ucyk7XG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IFwiU3RhcnQgTmV3IFByb2plY3RcIjtcbiAgICBuZXdQcm9qZWN0LmlkID0gXCJuZXctcHJvamVjdFwiXG4gIFxuICAgIGNvbnN0IGNoYW5nZVZpZXcgPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCBcInNpZGUtYnV0dG9uc1wiLCBzaWRlQnV0dG9ucylcbiAgICBjaGFuZ2VWaWV3LmlkID0gXCJ2aWV3LWJ1dHRvblwiXG4gICAgY2hhbmdlVmlldy50ZXh0Q29udGVudCA9IFwiQ2hhbmdlIFZpZXdcIlxuICBcbiAgICBjb25zdCBub3RpZkhlYWQgPSBlbGVtZW50QnVpbGRlcihcImgyXCIsIFwibm90aWYtaGVhZFwiLCBlbGVtZW50KTtcbiAgICBub3RpZkhlYWQudGV4dENvbnRlbnQgPSBcIk5vdGlmaWNhdGlvbnNcIjtcbiAgXG4gICAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwibm90aWYtYmFyXCIsIGVsZW1lbnQpO1xuICAgIFxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZWxlbWVudEJ1aWxkZXIoXCJwXCIsIFwidG9kYXktbm90aWZcIiwgbm90aWZpY2F0aW9ucyk7XG4gICAgY3VycmVudERhdGUudGV4dENvbnRlbnQgPSB0b2RheSgpO1xuICBcbiAgICByZXR1cm4geyBlbGVtZW50LCBuZXdQcm9qZWN0LCBjaGFuZ2VWaWV3LCBub3RpZkhlYWQsIG5vdGlmaWNhdGlvbnMsIHRvZGF5IH1cbn0pKCk7XG5cbmV4cG9ydCB7XG4gICAgc2lkZWJhclxufVxuIiwiY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHRhc2tBcnJheSkgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFza0FycmF5IH1cbn07XG5cbmNvbnN0IHRvRG8gPSAodGl0bGUsIHByb2plY3QsIGRlc2NyaXB0aW9uLCBlbnRlcmVkRGF0ZSwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMpID0+IHtcbiAgICBsZXQgdGFzayA9IHsgdGl0bGUsIHByb2plY3QsIGRlc2NyaXB0aW9uLCBlbnRlcmVkRGF0ZSwgZHVlRGF0ZSwgIHByaW9yaXR5LCBub3Rlcywgc3RhdHVzIH1cbiAgICBwcm9qZWN0LnRhc2tBcnJheS51bnNoaWZ0KHRhc2spO1xuICAgIHJldHVybiB7IHRpdGxlLCBwcm9qZWN0LCBkZXNjcmlwdGlvbiwgZW50ZXJlZERhdGUsIGR1ZURhdGUsICBwcmlvcml0eSwgbm90ZXMsIHN0YXR1cyB9XG59O1xuXG5jb25zdCBwcm9qZWN0VHJhY2tlciA9ICgpID0+IHtcbiAgICBsZXQgbWFzdGVyTGlzdCA9IFtdXG5cbiAgICBjb25zdCBjbGVhckxpc3QgPSAoKSA9PiB7XG4gICAgICAgIG1hc3Rlckxpc3QgPSBbXTtcbiAgICAgICAgcmV0dXJuIG1hc3Rlckxpc3RcbiAgICB9XG4gICAgcmV0dXJuIHsgbWFzdGVyTGlzdCwgY2xlYXJMaXN0IH1cbn1cblxuZXhwb3J0IHtcbiAgICBwcm9qZWN0LFxuICAgIHRvRG8sXG4gICAgcHJvamVjdFRyYWNrZXJcbn1cbiAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9