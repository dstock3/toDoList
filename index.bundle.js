/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background-color: rgb(24, 28, 32);\n    color: rgb(187, 220, 248);\n    font-family: 'Ubuntu', sans-serif;\n    display: flex;\n    justify-content: space-around;\n}\n\n.sidebar {\n    position: fixed;\n    left: 0;\n    width: 15%;\n    height: 100%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n}\n\n.new-project {\n    position: relative;\n    left: 5%;\n    top: 25%;\n    font-size: 1.5em;\n}\n\n.project-container {\n    position: relative;\n    left: 7.5%;\n    display: flex;\n    justify-content: space-around;\n    width: 85%;\n    height: 100%;\n}\n\n.project {\n    display: flex;\n    flex-flow: column wrap;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    width: 20%;\n    height: 100%;\n    padding: .5%;    \n}\n\n.project-head {\n    margin: auto;\n}\n\n.project-desc {\n    padding-left: 2.5%;\n}\n\n.task {\n    border: solid 5px rgb(130, 193, 248);\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    width: 87%;\n    padding: 5%;\n    padding-bottom: 7%;\n    border-radius: 10px;\n}\n\n.min {\n    padding-bottom: 0;\n}\n\n.min p {\n    margin-block-start: 0;\n}\n\n.top-div {\n    display: flex;\n    justify-content: space-between;\n}\n\nbutton {\n    width: 50%;\n    border-radius: 10px;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    padding: .75%;\n    font-weight: bold;\n    font-size: 1.1rem;\n}\n\n.top-button-div {\n    display: flex;\n    justify-content: space-around;\n    position: relative;\n    left: 82%;\n    width: 20%;\n}\n\n.top-buttons {\n    width: 30px;\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    font-size: 1.2em; \n}\n\n.remove-task {\n    order: 1;\n    position: relative;\n    top: 14px;\n    width: 30px;\n    height: 30px;\n    border-radius: 15px;\n}\n\n.task-prompt {\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    position: absolute;\n    top: 25%;\n    padding: 2%;\n    width: 20%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    border-radius: 10px;\n    z-index: 1;\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\n.project-prompt {\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    position: absolute;\n    top: 25%;\n    padding: 2%;\n    width: 20%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    border-radius: 10px;\n    z-index: 1;\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\n.prompt-head {\n    margin: auto;\n}\n\n.new-task {\n    padding-bottom: 2%;\n}\n\n.notes-div {\n    padding-bottom: 5%;\n}\n\n.transparent {\n    opacity: 0.25;\n}\n\n.create-task-buttons {\n    display: flex;\n    justify-content: space-between;\n\n    width: 100%;\n}\n\n.create-task {\n    width: 45%;\n}\n\n.cancel {\n    width: 45%;\n}\n\ninput {\n    border-radius: 5px;\n    padding: 1%;\n    width: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n    body {\n        flex-direction: column;\n    }\n\n    .sidebar {\n        position: relative;\n        top: 0;\n        width: 100%;\n        height: 10%;\n    }\n\n    .project-container {\n        width: 98%;\n        flex-direction: column;\n    }\n\n    .project {\n        width: 100%;\n        border-bottom: rgb(24, 28, 32) solid 10px;\n    }\n\n    .task-prompt {\n        padding-top: 5%;\n        width: 90%;\n    }\n\n    input {\n        width: 95%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iCAAiC;IACjC,yBAAyB;IACzB,iCAAiC;IACjC,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,OAAO;IACP,UAAU;IACV,YAAY;IACZ,oCAAoC;IACpC,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,6BAA6B;IAC7B,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,sBAAsB;IACtB,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,iCAAiC;IACjC,yBAAyB;IACzB,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,oCAAoC;IACpC,sBAAsB;IACtB,aAAa;IACb,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,WAAW;IACX,iCAAiC;IACjC,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,QAAQ;IACR,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,8BAA8B;IAC9B,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,UAAU;IACV,oCAAoC;IACpC,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,8BAA8B;IAC9B,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,UAAU;IACV,oCAAoC;IACpC,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;;IAE9B,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;AACf;;AAEA;IACI;QACI,sBAAsB;IAC1B;;IAEA;QACI,kBAAkB;QAClB,MAAM;QACN,WAAW;QACX,WAAW;IACf;;IAEA;QACI,UAAU;QACV,sBAAsB;IAC1B;;IAEA;QACI,WAAW;QACX,yCAAyC;IAC7C;;IAEA;QACI,eAAe;QACf,UAAU;IACd;;IAEA;QACI,UAAU;IACd;AACJ","sourcesContent":["body {\n    background-color: rgb(24, 28, 32);\n    color: rgb(187, 220, 248);\n    font-family: 'Ubuntu', sans-serif;\n    display: flex;\n    justify-content: space-around;\n}\n\n.sidebar {\n    position: fixed;\n    left: 0;\n    width: 15%;\n    height: 100%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n}\n\n.new-project {\n    position: relative;\n    left: 5%;\n    top: 25%;\n    font-size: 1.5em;\n}\n\n.project-container {\n    position: relative;\n    left: 7.5%;\n    display: flex;\n    justify-content: space-around;\n    width: 85%;\n    height: 100%;\n}\n\n.project {\n    display: flex;\n    flex-flow: column wrap;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    width: 20%;\n    height: 100%;\n    padding: .5%;    \n}\n\n.project-head {\n    margin: auto;\n}\n\n.project-desc {\n    padding-left: 2.5%;\n}\n\n.task {\n    border: solid 5px rgb(130, 193, 248);\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    width: 87%;\n    padding: 5%;\n    padding-bottom: 7%;\n    border-radius: 10px;\n}\n\n.min {\n    padding-bottom: 0;\n}\n\n.min p {\n    margin-block-start: 0;\n}\n\n.top-div {\n    display: flex;\n    justify-content: space-between;\n}\n\nbutton {\n    width: 50%;\n    border-radius: 10px;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    padding: .75%;\n    font-weight: bold;\n    font-size: 1.1rem;\n}\n\n.top-button-div {\n    display: flex;\n    justify-content: space-around;\n    position: relative;\n    left: 82%;\n    width: 20%;\n}\n\n.top-buttons {\n    width: 30px;\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    font-size: 1.2em; \n}\n\n.remove-task {\n    order: 1;\n    position: relative;\n    top: 14px;\n    width: 30px;\n    height: 30px;\n    border-radius: 15px;\n}\n\n.task-prompt {\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    position: absolute;\n    top: 25%;\n    padding: 2%;\n    width: 20%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    border-radius: 10px;\n    z-index: 1;\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\n.project-prompt {\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    position: absolute;\n    top: 25%;\n    padding: 2%;\n    width: 20%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n    border-radius: 10px;\n    z-index: 1;\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\n.prompt-head {\n    margin: auto;\n}\n\n.new-task {\n    padding-bottom: 2%;\n}\n\n.notes-div {\n    padding-bottom: 5%;\n}\n\n.transparent {\n    opacity: 0.25;\n}\n\n.create-task-buttons {\n    display: flex;\n    justify-content: space-between;\n\n    width: 100%;\n}\n\n.create-task {\n    width: 45%;\n}\n\n.cancel {\n    width: 45%;\n}\n\ninput {\n    border-radius: 5px;\n    padding: 1%;\n    width: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n    body {\n        flex-direction: column;\n    }\n\n    .sidebar {\n        position: relative;\n        top: 0;\n        width: 100%;\n        height: 10%;\n    }\n\n    .project-container {\n        width: 98%;\n        flex-direction: column;\n    }\n\n    .project {\n        width: 100%;\n        border-bottom: rgb(24, 28, 32) solid 10px;\n    }\n\n    .task-prompt {\n        padding-top: 5%;\n        width: 90%;\n    }\n\n    input {\n        width: 95%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/projectElements.js":
/*!********************************!*\
  !*** ./src/projectElements.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementBuilder": () => (/* binding */ elementBuilder),
/* harmony export */   "projectHeader": () => (/* binding */ projectHeader),
/* harmony export */   "projectBuilder": () => (/* binding */ projectBuilder),
/* harmony export */   "applyButtons": () => (/* binding */ applyButtons)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */


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

const sidebar = (() => {
  const sidebarElement = elementBuilder("div", "sidebar", body);
  const newProject = elementBuilder("a", "new-project", sidebarElement);
  newProject.textContent = "Create a New Project";
  return { sidebarElement, newProject }
})();

let projectDiv = elementBuilder("div", "project-container", body)

function toDoBuilder(task, parent) {
    let elementArray = [];
    let taskDiv = elementBuilder("div", "task", parent);
    let topDiv = elementBuilder("div", "top-div", taskDiv)
    let removeTask = elementBuilder("button", "remove-task", topDiv);
    removeTask.textContent = "X";
    let head = elementBuilder("h3", "task-head", topDiv);
    head.textContent = task.title;
    let desc = elementBuilder("p", "task-desc", taskDiv);
    desc.textContent = task.description;
    let dueDate = elementBuilder("p", "due-date", taskDiv);
    dueDate.textContent = task.dueDate;
    let priority = elementBuilder("p", "priority", taskDiv);
    priority.textContent = task.priority;
    let notes = elementBuilder("p", "notes", taskDiv);
    notes.textContent = task.notes;
    let status = elementBuilder("p", "status", taskDiv);
    status.textContent = task.status;
    elementArray.push(taskDiv, topDiv, removeTask, head, desc, dueDate, priority, notes, status);
    
    return elementArray
}

const projectHeader = (project, parent) => {
    let projectElement = elementBuilder("div", "project", parent);
  
    let projectHead = elementBuilder("h2", "project-head", projectElement)
    projectHead.textContent = project.title;
  
    let projectDesc = elementBuilder("p", "project-desc", projectElement);
    projectDesc.textContent = project.description;
  
    return projectElement
};

const projectBuilder = (project) => {
  let toDoArray = project.taskArray;

  let projectElement = projectHeader(project, projectDiv)
  
  for (let i = 0; i < toDoArray.length; i++) {
    let task = toDoArray[i];
    toDoBuilder(task, projectElement);
  }

  const deleteList = () => {
    projectElement.remove()
  };

  const removeTask = (task) => {
    for (let i = 0; i < toDoArray.length; i++) {
      if (task === toDoArray[i]) {
        toDoArray.splice(i, 1);
      }
    }

    return toDoArray
  };

  const sortByPriority = () => {
    let sortedArray = toDoArray.sort((firstItem, secondItem) => firstItem.priority - secondItem.priority);
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

  return { projectElement, project, toDoArray, removeTask, sortByPriority, deleteList, minTasks }
};

const taskButtons = (set) => {
  const topButtonDiv = elementBuilder("div", "top-button-div", set.projectElement)
  set.projectElement.prepend(topButtonDiv);

  const addTaskButton = (() => {
    let addButton = elementBuilder("button", "top-buttons", topButtonDiv);
    addButton.classList.add("add-task")
    addButton.textContent = "+"

    function addNewTask() {
      addTask(set);
    }

    addButton.addEventListener("click", addNewTask)
  })()

  const maximize = () => {
    let projectIndex = getPosition(set.projectElement);
    set.deleteList()
    let maxProject = projectBuilder(set.project);
    projectDiv.insertBefore(maxProject.projectElement, projectDiv.children[projectIndex]);
    taskButtons(maxProject);
  }

  const minimize = (() => {
    let minButton = elementBuilder("button", "top-buttons", topButtonDiv);
    minButton.classList.add("min-button")
    minButton.textContent = "-"

    function minProject() {
      minButton.textContent = "□"
      set.minTasks()
      minButton.addEventListener("click", maximize);
    }

    minButton.addEventListener("click", minProject);
  })();

  const buttonDiv = elementBuilder("div", "button-div", set.projectElement)
  
  const sortByPriorityButton = (() => {
    let sort = elementBuilder("button", "sort-button", buttonDiv);
    sort.textContent = "Sort by Priority";
    let projectIndex = getPosition(set.projectElement);
    let sortedArray = set.sortByPriority();
    let project = sortedArray[0].project;
  
    function newProjectSet() {
      set.deleteList()
      let sortedProject = projectBuilder(project)
      projectDiv.insertBefore(sortedProject.projectElement, projectDiv.children[projectIndex]);
      taskButtons(sortedProject)
    }
  
    sort.addEventListener("click", newProjectSet)
  })();
  
  const removeTaskButton = (() => {
    let projectElements = Array.from(set.projectElement.children);
    for (let i = 0; i < projectElements.length; i++) {
      if (projectElements[i].classList.contains("task")) {
        let taskDiv = projectElements[i];
        let topDiv = taskDiv.children[0];
        let removeTaskElement = taskDiv.firstChild;
        for (let y = 0; y < set.toDoArray.length; y++) {
          if (topDiv.children[1].textContent === set.toDoArray[y].title) {
            function taskRemover() {
              let projectIndex = getPosition(set.projectElement);
              set.removeTask(set.toDoArray[y]);
              set.deleteList()
              let sortedProject = projectBuilder(set.project);
              projectDiv.insertBefore(sortedProject.projectElement, projectDiv.children[projectIndex]);
              taskButtons(sortedProject) 
            } 
            removeTaskElement.addEventListener("click", taskRemover);  
          }   
        }  
      } 
    }
  })();
  
  const deleteButton = (() => {
    let del = elementBuilder("button", "delete-button", buttonDiv);
    del.textContent = "Remove Project"
      
    del.addEventListener("click", set.deleteList)
  })();
};

function applyButtons(toDoArray) {
    for (let i = 0; i < toDoArray.length; i++) {
      taskButtons(toDoArray[i])
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

function newInput(parent, promptType, divClass, labelClass, labelContent, inputClass, inputId, nameAt) {
  let newDiv = elementBuilder("div", promptType, parent);
  newDiv.classList.add(divClass);
  let divLabel = elementBuilder("label", labelClass, newDiv);
  divLabel.textContent = labelContent
  let divInput = elementBuilder("input", inputClass, newDiv);
  divInput.id = inputId
  divInput.setAttribute("name", nameAt);
   
}

const addTask = (set) => {

  let project = set.project
  let projectElement = set.projectElement

  const taskPrompt = (() => {
    let prompt = elementBuilder("div", "task-prompt", body);

    let promptHead = elementBuilder("h3", "prompt-head", prompt)
    promptHead.textContent = "Create a Task";

    newInput(prompt, "new-task", "title-div", "name-label", "Task: ", "title-input", "title", "title");
    newInput(prompt, "new-task", "description-div", "desc-label", "Description: ", "desc-input", "description", "desc");
    newInput(prompt, "new-task", "due-div", "due-label", "Due Date: ", "due-input", "due", "due");
    newInput(prompt, "new-task", "priority-div", "priority-label", "Priority: ", "priority-input", "priority", "priority")
    newInput(prompt, "new-task", "notes-div", "notes-label", "Notes: ", "notes-input", "notes", "notes")

    let children = body.children;
    addTransparent(children)

    let buttonDiv = elementBuilder("div", "create-task-buttons", prompt)

    let createButton = elementBuilder("button", "create-task", buttonDiv);
    createButton.textContent = "Create Task";

    let cancelButton = elementBuilder("button", "cancel", buttonDiv)
    cancelButton.textContent = "Cancel";

    function exit() {
      removeTransparent(children);
      prompt.remove()
    }

    cancelButton.addEventListener("click", exit);

    function createTask() {
      let title = document.getElementById("title").value;
      let description = document.getElementById("description").value;
      let dueDate = document.getElementById("due").value;
      let priority = document.getElementById("priority").value;
      let notes = document.getElementById("notes").value;
      let status = "In Progress"

      let task = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.toDo)(title, project, description, dueDate, priority, notes, status);
      toDoBuilder(task, projectElement);

      let projectIndex = getPosition(projectElement);
      projectElement.remove();
      let updatedProject = projectBuilder(project);
      projectDiv.insertBefore(updatedProject.projectElement, projectDiv.children[projectIndex]);
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

  sidebar.newProject.addEventListener("click", addNewProject)
})();

const addProject = () => {

  const projectPrompt = (() => {
    let prompt = elementBuilder("div", "project-prompt", body);

    let promptHead = elementBuilder("h3", "prompt-head", prompt)
    promptHead.textContent = "Create a Project";

    newInput(prompt, "new-task", "title-div", "name-label", "Task: ", "title-input", "project-title", "title");
    newInput(prompt, "new-task", "description-div", "desc-label", "Description: ", "desc-input", "project-description", "desc");

    let children = body.children;
    addTransparent(children)

    let buttonDiv = elementBuilder("div", "create-task-buttons", prompt);

    let createButton = elementBuilder("button", "create-task", buttonDiv);
    createButton.textContent = "Create Project";

    let cancelButton = elementBuilder("button", "cancel", buttonDiv)
    cancelButton.textContent = "Cancel";

    function exit() {
      removeTransparent(children);
      prompt.remove()
    }

    cancelButton.addEventListener("click", exit);

    function createProject() {
      let title = document.getElementById("project-title").value;
      let description = document.getElementById("project-description").value;

      let newProject = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.project)(title, description, [])
      projectBuilder(newProject);
      //taskButtons(newProject);

      exit();
    }

    createButton.addEventListener("click", createProject)
  })();
}



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "toDo": () => (/* binding */ toDo)
/* harmony export */ });
const project = (title, description, taskArray) => {
    return { title, description, taskArray }
};

const toDo = (title, project, description, dueDate, priority, notes, status) => {
    let task = { title, project, description, dueDate, priority, notes, status }
    project.taskArray.unshift(task);
    return { task }
};


  

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _projectElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectElements.js */ "./src/projectElements.js");
/* eslint-disable no-unused-vars */




const homeProjects = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.project)(
  "Home Projects",
  "Projects to do around the house.",
  []
);

const forYourHealth = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.project)(
  "Stay Healthy",
  "Prolong your biological life through various routines!",
  []
);

const carProject = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.project)(
  "Automotive tasks",
  "Basic car maintenance!",
  []
)

const toDoItem = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.toDo)(
  `Make "To Do List" Application!`,
  homeProjects,
  "Create an application to manage daily tasks.",
  "9/15/2021",
  "2", 
  "This the first object created using the toDo factory function.",
  "In Progress",
)

const replaceWipers = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.toDo)(
  "Replace Windshield Wipers",
  carProject,
  "My wipers are deteriorating...Dear god. It's time to replace them.",
  "10/6/21",
  "5",
  "Saw a deal at that place on 75th",
  "In Progress",
)

const changeOil = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.toDo)(
  "Time for an Oil Change!",
  carProject,
  "Change the oil in your beautiful Mazda 2!",
  "9/28/2021",
  "3",
  "test note",
  "In Progress",
)

const goToDoc = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.toDo)(
  "Go to your Doctor's Appointment!",
  forYourHealth,
  "It's time for a check up",
  "9/17/2021",
  "2",
  "Be sure to tell him about your back acne",
  "In Progress",
)

const getGift = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.toDo)(
  `Get a Birthday Gift for the Wife!`,
  homeProjects,
  "No giftcards...",
  "9/18/2021",
  "1", 
  "No idea what to get her...",
  "In Progress",
)

const writeScript = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.toDo)(
  "Write Script",
  homeProjects,
  `Finally write that movie script you've been talking about.`,
  "10/15/2021",
  "5", 
  "Be sure to include that twist ending where the guy was dead the whole time.",
  "In Progress",
)

const getTest = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.toDo)(
  "Get Blood Test",
  forYourHealth,
  "Get that blood test your Doc ordered",
  "10/17/21",
  "1",
  "remember to fast 12 hours before. No eating!",
  "In Progress",
)

let firstProject = (0,_projectElements_js__WEBPACK_IMPORTED_MODULE_2__.projectBuilder)(homeProjects);
let secondProject = (0,_projectElements_js__WEBPACK_IMPORTED_MODULE_2__.projectBuilder)(forYourHealth);
let thirdProject = (0,_projectElements_js__WEBPACK_IMPORTED_MODULE_2__.projectBuilder)(carProject);

let projectArray = [firstProject, secondProject, thirdProject];
(0,_projectElements_js__WEBPACK_IMPORTED_MODULE_2__.applyButtons)(projectArray);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLDhDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1FQUFjO0FBQ2pDLG9CQUFvQixtRUFBYztBQUNsQyxtQkFBbUIsbUVBQWM7O0FBRWpDO0FBQ0EsaUVBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b0RvTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC8uL3NyYy9wcm9qZWN0RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvRG9MaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gICAgY29sb3I6IHJnYigxODcsIDIyMCwgMjQ4KTtcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbn1cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDUlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA3LjUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gICAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAuNSU7ICAgIFxcbn1cXG5cXG4ucHJvamVjdC1oZWFkIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyLjUlO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGJvcmRlcjogc29saWQgNXB4IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgICBjb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICB3aWR0aDogODclO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgcGFkZGluZy1ib3R0b206IDclO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWluIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcblxcbi5taW4gcCB7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG59XFxuXFxuLnRvcC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gICAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gICAgcGFkZGluZzogLjc1JTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4udG9wLWJ1dHRvbi1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA4MiU7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbi50b3AtYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICAgIGNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07IFxcbn1cXG5cXG4ucmVtb3ZlLXRhc2sge1xcbiAgICBvcmRlcjogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDE0cHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi50YXNrLXByb21wdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICAgIGNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3QtcHJvbXB0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gICAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvbXB0LWhlYWQge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5uZXctdGFzayB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcXG59XFxuXFxuLm5vdGVzLWRpdiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcXG59XFxuXFxuLnRyYW5zcGFyZW50IHtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sge1xcbiAgICB3aWR0aDogNDUlO1xcbn1cXG5cXG4uY2FuY2VsIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwJTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDk4JTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiByZ2IoMjQsIDI4LCAzMikgc29saWQgMTBweDtcXG4gICAgfVxcblxcbiAgICAudGFzay1wcm9tcHQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7O0lBRTlCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksV0FBVztRQUNYLHlDQUF5QztJQUM3Qzs7SUFFQTtRQUNJLGVBQWU7UUFDZixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgICBjb2xvcjogcmdiKDE4NywgMjIwLCAyNDgpO1xcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICAgIGNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNSU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDcuNSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IC41JTsgICAgXFxufVxcblxcbi5wcm9qZWN0LWhlYWQge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWRlc2Mge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNSU7XFxufVxcblxcbi50YXNrIHtcXG4gICAgYm9yZGVyOiBzb2xpZCA1cHggcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICAgIGNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICAgIHdpZHRoOiA4NyU7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNyU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5taW4ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuLm1pbiBwIHtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbn1cXG5cXG4udG9wLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgICBwYWRkaW5nOiAuNzUlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi50b3AtYnV0dG9uLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDgyJTtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLnRvcC1idXR0b25zIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gICAgY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gICAgZm9udC1zaXplOiAxLjJlbTsgXFxufVxcblxcbi5yZW1vdmUtdGFzayB7XFxuICAgIG9yZGVyOiAxO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTRweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLnRhc2stcHJvbXB0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gICAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdC1wcm9tcHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9tcHQtaGVhZCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLm5ldy10YXNrIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xcbn1cXG5cXG4ubm90ZXMtZGl2IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xcbn1cXG5cXG4udHJhbnNwYXJlbnQge1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbn1cXG5cXG4uY3JlYXRlLXRhc2stYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jcmVhdGUtdGFzayB7XFxuICAgIHdpZHRoOiA0NSU7XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICB3aWR0aDogNDUlO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAlO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogOTglO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHJnYigyNCwgMjgsIDMyKSBzb2xpZCAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC50YXNrLXByb21wdCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgIGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWlubmVyLWRlY2xhcmF0aW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IHByb2plY3QsIHRvRG8gfSBmcm9tICcuL3Rhc2suanMnXG5cbmZ1bmN0aW9uIGVsZW1lbnRCdWlsZGVyKGVsZW1lbnQsIGNsYXNzTGFiZWwsIHBhcmVudE5hbWUpIHtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTGFiZWwpO1xuICAgIHBhcmVudE5hbWUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgcmV0dXJuIGl0ZW07XG59XG5cbmNvbnN0IGdldFBvc2l0aW9uID0gKHByb2plY3RFbGVtZW50KSA9PiB7XG4gICAgbGV0IHByb2plY3RJbmRleCA9IEFycmF5LmZyb20ocHJvamVjdEVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihwcm9qZWN0RWxlbWVudCk7XG4gICAgcmV0dXJuIHByb2plY3RJbmRleFxufTtcblxubGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG5cbmNvbnN0IHNpZGViYXIgPSAoKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyRWxlbWVudCA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwic2lkZWJhclwiLCBib2R5KTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGVsZW1lbnRCdWlsZGVyKFwiYVwiLCBcIm5ldy1wcm9qZWN0XCIsIHNpZGViYXJFbGVtZW50KTtcbiAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIGEgTmV3IFByb2plY3RcIjtcbiAgcmV0dXJuIHsgc2lkZWJhckVsZW1lbnQsIG5ld1Byb2plY3QgfVxufSkoKTtcblxubGV0IHByb2plY3REaXYgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcInByb2plY3QtY29udGFpbmVyXCIsIGJvZHkpXG5cbmZ1bmN0aW9uIHRvRG9CdWlsZGVyKHRhc2ssIHBhcmVudCkge1xuICAgIGxldCBlbGVtZW50QXJyYXkgPSBbXTtcbiAgICBsZXQgdGFza0RpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwidGFza1wiLCBwYXJlbnQpO1xuICAgIGxldCB0b3BEaXYgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcInRvcC1kaXZcIiwgdGFza0RpdilcbiAgICBsZXQgcmVtb3ZlVGFzayA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwicmVtb3ZlLXRhc2tcIiwgdG9wRGl2KTtcbiAgICByZW1vdmVUYXNrLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgbGV0IGhlYWQgPSBlbGVtZW50QnVpbGRlcihcImgzXCIsIFwidGFzay1oZWFkXCIsIHRvcERpdik7XG4gICAgaGVhZC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgbGV0IGRlc2MgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJ0YXNrLWRlc2NcIiwgdGFza0Rpdik7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgbGV0IGR1ZURhdGUgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJkdWUtZGF0ZVwiLCB0YXNrRGl2KTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgIGxldCBwcmlvcml0eSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcInByaW9yaXR5XCIsIHRhc2tEaXYpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgICBsZXQgbm90ZXMgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJub3Rlc1wiLCB0YXNrRGl2KTtcbiAgICBub3Rlcy50ZXh0Q29udGVudCA9IHRhc2subm90ZXM7XG4gICAgbGV0IHN0YXR1cyA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcInN0YXR1c1wiLCB0YXNrRGl2KTtcbiAgICBzdGF0dXMudGV4dENvbnRlbnQgPSB0YXNrLnN0YXR1cztcbiAgICBlbGVtZW50QXJyYXkucHVzaCh0YXNrRGl2LCB0b3BEaXYsIHJlbW92ZVRhc2ssIGhlYWQsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcywgc3RhdHVzKTtcbiAgICBcbiAgICByZXR1cm4gZWxlbWVudEFycmF5XG59XG5cbmNvbnN0IHByb2plY3RIZWFkZXIgPSAocHJvamVjdCwgcGFyZW50KSA9PiB7XG4gICAgbGV0IHByb2plY3RFbGVtZW50ID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJwcm9qZWN0XCIsIHBhcmVudCk7XG4gIFxuICAgIGxldCBwcm9qZWN0SGVhZCA9IGVsZW1lbnRCdWlsZGVyKFwiaDJcIiwgXCJwcm9qZWN0LWhlYWRcIiwgcHJvamVjdEVsZW1lbnQpXG4gICAgcHJvamVjdEhlYWQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICBcbiAgICBsZXQgcHJvamVjdERlc2MgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJwcm9qZWN0LWRlc2NcIiwgcHJvamVjdEVsZW1lbnQpO1xuICAgIHByb2plY3REZXNjLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgXG4gICAgcmV0dXJuIHByb2plY3RFbGVtZW50XG59O1xuXG5jb25zdCBwcm9qZWN0QnVpbGRlciA9IChwcm9qZWN0KSA9PiB7XG4gIGxldCB0b0RvQXJyYXkgPSBwcm9qZWN0LnRhc2tBcnJheTtcblxuICBsZXQgcHJvamVjdEVsZW1lbnQgPSBwcm9qZWN0SGVhZGVyKHByb2plY3QsIHByb2plY3REaXYpXG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9BcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0YXNrID0gdG9Eb0FycmF5W2ldO1xuICAgIHRvRG9CdWlsZGVyKHRhc2ssIHByb2plY3RFbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZUxpc3QgPSAoKSA9PiB7XG4gICAgcHJvamVjdEVsZW1lbnQucmVtb3ZlKClcbiAgfTtcblxuICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRhc2sgPT09IHRvRG9BcnJheVtpXSkge1xuICAgICAgICB0b0RvQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b0RvQXJyYXlcbiAgfTtcblxuICBjb25zdCBzb3J0QnlQcmlvcml0eSA9ICgpID0+IHtcbiAgICBsZXQgc29ydGVkQXJyYXkgPSB0b0RvQXJyYXkuc29ydCgoZmlyc3RJdGVtLCBzZWNvbmRJdGVtKSA9PiBmaXJzdEl0ZW0ucHJpb3JpdHkgLSBzZWNvbmRJdGVtLnByaW9yaXR5KTtcbiAgICByZXR1cm4gc29ydGVkQXJyYXlcbiAgfTtcblxuICBjb25zdCBtaW5UYXNrcyA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdENoaWxkcmVuID0gQXJyYXkuZnJvbShwcm9qZWN0RWxlbWVudC5jaGlsZHJlbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Q2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0Q2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFza1wiKSkge1xuICAgICAgICBsZXQgdGFza0VsZW1lbnQgPSBwcm9qZWN0Q2hpbGRyZW5baV07XG4gICAgICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtaW5cIik7XG4gICAgICAgIGxldCB0YXNrQ2hpbGRyZW4gPSBBcnJheS5mcm9tKHRhc2tFbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0YXNrQ2hpbGRyZW4ubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICBpZiAoKHkgPT09IDEpIHx8ICh5ID09PSAzKSB8fCAoeSA9PT0gNCkgfHwgKHkgPT09IDUpKSB7XG4gICAgICAgICAgICB0YXNrQ2hpbGRyZW5beV0ucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBcbiAgfVxuXG4gIHJldHVybiB7IHByb2plY3RFbGVtZW50LCBwcm9qZWN0LCB0b0RvQXJyYXksIHJlbW92ZVRhc2ssIHNvcnRCeVByaW9yaXR5LCBkZWxldGVMaXN0LCBtaW5UYXNrcyB9XG59O1xuXG5jb25zdCB0YXNrQnV0dG9ucyA9IChzZXQpID0+IHtcbiAgY29uc3QgdG9wQnV0dG9uRGl2ID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJ0b3AtYnV0dG9uLWRpdlwiLCBzZXQucHJvamVjdEVsZW1lbnQpXG4gIHNldC5wcm9qZWN0RWxlbWVudC5wcmVwZW5kKHRvcEJ1dHRvbkRpdik7XG5cbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9ICgoKSA9PiB7XG4gICAgbGV0IGFkZEJ1dHRvbiA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwidG9wLWJ1dHRvbnNcIiwgdG9wQnV0dG9uRGl2KTtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrXCIpXG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCJcblxuICAgIGZ1bmN0aW9uIGFkZE5ld1Rhc2soKSB7XG4gICAgICBhZGRUYXNrKHNldCk7XG4gICAgfVxuXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdUYXNrKVxuICB9KSgpXG5cbiAgY29uc3QgbWF4aW1pemUgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RJbmRleCA9IGdldFBvc2l0aW9uKHNldC5wcm9qZWN0RWxlbWVudCk7XG4gICAgc2V0LmRlbGV0ZUxpc3QoKVxuICAgIGxldCBtYXhQcm9qZWN0ID0gcHJvamVjdEJ1aWxkZXIoc2V0LnByb2plY3QpO1xuICAgIHByb2plY3REaXYuaW5zZXJ0QmVmb3JlKG1heFByb2plY3QucHJvamVjdEVsZW1lbnQsIHByb2plY3REaXYuY2hpbGRyZW5bcHJvamVjdEluZGV4XSk7XG4gICAgdGFza0J1dHRvbnMobWF4UHJvamVjdCk7XG4gIH1cblxuICBjb25zdCBtaW5pbWl6ZSA9ICgoKSA9PiB7XG4gICAgbGV0IG1pbkJ1dHRvbiA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwidG9wLWJ1dHRvbnNcIiwgdG9wQnV0dG9uRGl2KTtcbiAgICBtaW5CdXR0b24uY2xhc3NMaXN0LmFkZChcIm1pbi1idXR0b25cIilcbiAgICBtaW5CdXR0b24udGV4dENvbnRlbnQgPSBcIi1cIlxuXG4gICAgZnVuY3Rpb24gbWluUHJvamVjdCgpIHtcbiAgICAgIG1pbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4pahXCJcbiAgICAgIHNldC5taW5UYXNrcygpXG4gICAgICBtaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1heGltaXplKTtcbiAgICB9XG5cbiAgICBtaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1pblByb2plY3QpO1xuICB9KSgpO1xuXG4gIGNvbnN0IGJ1dHRvbkRpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwiYnV0dG9uLWRpdlwiLCBzZXQucHJvamVjdEVsZW1lbnQpXG4gIFxuICBjb25zdCBzb3J0QnlQcmlvcml0eUJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgbGV0IHNvcnQgPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCBcInNvcnQtYnV0dG9uXCIsIGJ1dHRvbkRpdik7XG4gICAgc29ydC50ZXh0Q29udGVudCA9IFwiU29ydCBieSBQcmlvcml0eVwiO1xuICAgIGxldCBwcm9qZWN0SW5kZXggPSBnZXRQb3NpdGlvbihzZXQucHJvamVjdEVsZW1lbnQpO1xuICAgIGxldCBzb3J0ZWRBcnJheSA9IHNldC5zb3J0QnlQcmlvcml0eSgpO1xuICAgIGxldCBwcm9qZWN0ID0gc29ydGVkQXJyYXlbMF0ucHJvamVjdDtcbiAgXG4gICAgZnVuY3Rpb24gbmV3UHJvamVjdFNldCgpIHtcbiAgICAgIHNldC5kZWxldGVMaXN0KClcbiAgICAgIGxldCBzb3J0ZWRQcm9qZWN0ID0gcHJvamVjdEJ1aWxkZXIocHJvamVjdClcbiAgICAgIHByb2plY3REaXYuaW5zZXJ0QmVmb3JlKHNvcnRlZFByb2plY3QucHJvamVjdEVsZW1lbnQsIHByb2plY3REaXYuY2hpbGRyZW5bcHJvamVjdEluZGV4XSk7XG4gICAgICB0YXNrQnV0dG9ucyhzb3J0ZWRQcm9qZWN0KVxuICAgIH1cbiAgXG4gICAgc29ydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdFNldClcbiAgfSkoKTtcbiAgXG4gIGNvbnN0IHJlbW92ZVRhc2tCdXR0b24gPSAoKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0RWxlbWVudHMgPSBBcnJheS5mcm9tKHNldC5wcm9qZWN0RWxlbWVudC5jaGlsZHJlbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0RWxlbWVudHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFza1wiKSkge1xuICAgICAgICBsZXQgdGFza0RpdiA9IHByb2plY3RFbGVtZW50c1tpXTtcbiAgICAgICAgbGV0IHRvcERpdiA9IHRhc2tEaXYuY2hpbGRyZW5bMF07XG4gICAgICAgIGxldCByZW1vdmVUYXNrRWxlbWVudCA9IHRhc2tEaXYuZmlyc3RDaGlsZDtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzZXQudG9Eb0FycmF5Lmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgaWYgKHRvcERpdi5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9PT0gc2V0LnRvRG9BcnJheVt5XS50aXRsZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gdGFza1JlbW92ZXIoKSB7XG4gICAgICAgICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBnZXRQb3NpdGlvbihzZXQucHJvamVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgICBzZXQucmVtb3ZlVGFzayhzZXQudG9Eb0FycmF5W3ldKTtcbiAgICAgICAgICAgICAgc2V0LmRlbGV0ZUxpc3QoKVxuICAgICAgICAgICAgICBsZXQgc29ydGVkUHJvamVjdCA9IHByb2plY3RCdWlsZGVyKHNldC5wcm9qZWN0KTtcbiAgICAgICAgICAgICAgcHJvamVjdERpdi5pbnNlcnRCZWZvcmUoc29ydGVkUHJvamVjdC5wcm9qZWN0RWxlbWVudCwgcHJvamVjdERpdi5jaGlsZHJlbltwcm9qZWN0SW5kZXhdKTtcbiAgICAgICAgICAgICAgdGFza0J1dHRvbnMoc29ydGVkUHJvamVjdCkgXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgcmVtb3ZlVGFza0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tSZW1vdmVyKTsgIFxuICAgICAgICAgIH0gICBcbiAgICAgICAgfSAgXG4gICAgICB9IFxuICAgIH1cbiAgfSkoKTtcbiAgXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgbGV0IGRlbCA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwiZGVsZXRlLWJ1dHRvblwiLCBidXR0b25EaXYpO1xuICAgIGRlbC50ZXh0Q29udGVudCA9IFwiUmVtb3ZlIFByb2plY3RcIlxuICAgICAgXG4gICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXQuZGVsZXRlTGlzdClcbiAgfSkoKTtcbn07XG5cbmZ1bmN0aW9uIGFwcGx5QnV0dG9ucyh0b0RvQXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgdGFza0J1dHRvbnModG9Eb0FycmF5W2ldKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkVHJhbnNwYXJlbnQoY2hpbGRFbGVtZW50cykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRWxlbWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY2hpbGRFbGVtZW50c1tpXS5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIilcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUcmFuc3BhcmVudChjaGlsZEVsZW1lbnRzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRFbGVtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjaGlsZEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKVxuICB9XG59XG5cbmZ1bmN0aW9uIG5ld0lucHV0KHBhcmVudCwgcHJvbXB0VHlwZSwgZGl2Q2xhc3MsIGxhYmVsQ2xhc3MsIGxhYmVsQ29udGVudCwgaW5wdXRDbGFzcywgaW5wdXRJZCwgbmFtZUF0KSB7XG4gIGxldCBuZXdEaXYgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBwcm9tcHRUeXBlLCBwYXJlbnQpO1xuICBuZXdEaXYuY2xhc3NMaXN0LmFkZChkaXZDbGFzcyk7XG4gIGxldCBkaXZMYWJlbCA9IGVsZW1lbnRCdWlsZGVyKFwibGFiZWxcIiwgbGFiZWxDbGFzcywgbmV3RGl2KTtcbiAgZGl2TGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbENvbnRlbnRcbiAgbGV0IGRpdklucHV0ID0gZWxlbWVudEJ1aWxkZXIoXCJpbnB1dFwiLCBpbnB1dENsYXNzLCBuZXdEaXYpO1xuICBkaXZJbnB1dC5pZCA9IGlucHV0SWRcbiAgZGl2SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lQXQpO1xuICAgXG59XG5cbmNvbnN0IGFkZFRhc2sgPSAoc2V0KSA9PiB7XG5cbiAgbGV0IHByb2plY3QgPSBzZXQucHJvamVjdFxuICBsZXQgcHJvamVjdEVsZW1lbnQgPSBzZXQucHJvamVjdEVsZW1lbnRcblxuICBjb25zdCB0YXNrUHJvbXB0ID0gKCgpID0+IHtcbiAgICBsZXQgcHJvbXB0ID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJ0YXNrLXByb21wdFwiLCBib2R5KTtcblxuICAgIGxldCBwcm9tcHRIZWFkID0gZWxlbWVudEJ1aWxkZXIoXCJoM1wiLCBcInByb21wdC1oZWFkXCIsIHByb21wdClcbiAgICBwcm9tcHRIZWFkLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBUYXNrXCI7XG5cbiAgICBuZXdJbnB1dChwcm9tcHQsIFwibmV3LXRhc2tcIiwgXCJ0aXRsZS1kaXZcIiwgXCJuYW1lLWxhYmVsXCIsIFwiVGFzazogXCIsIFwidGl0bGUtaW5wdXRcIiwgXCJ0aXRsZVwiLCBcInRpdGxlXCIpO1xuICAgIG5ld0lucHV0KHByb21wdCwgXCJuZXctdGFza1wiLCBcImRlc2NyaXB0aW9uLWRpdlwiLCBcImRlc2MtbGFiZWxcIiwgXCJEZXNjcmlwdGlvbjogXCIsIFwiZGVzYy1pbnB1dFwiLCBcImRlc2NyaXB0aW9uXCIsIFwiZGVzY1wiKTtcbiAgICBuZXdJbnB1dChwcm9tcHQsIFwibmV3LXRhc2tcIiwgXCJkdWUtZGl2XCIsIFwiZHVlLWxhYmVsXCIsIFwiRHVlIERhdGU6IFwiLCBcImR1ZS1pbnB1dFwiLCBcImR1ZVwiLCBcImR1ZVwiKTtcbiAgICBuZXdJbnB1dChwcm9tcHQsIFwibmV3LXRhc2tcIiwgXCJwcmlvcml0eS1kaXZcIiwgXCJwcmlvcml0eS1sYWJlbFwiLCBcIlByaW9yaXR5OiBcIiwgXCJwcmlvcml0eS1pbnB1dFwiLCBcInByaW9yaXR5XCIsIFwicHJpb3JpdHlcIilcbiAgICBuZXdJbnB1dChwcm9tcHQsIFwibmV3LXRhc2tcIiwgXCJub3Rlcy1kaXZcIiwgXCJub3Rlcy1sYWJlbFwiLCBcIk5vdGVzOiBcIiwgXCJub3Rlcy1pbnB1dFwiLCBcIm5vdGVzXCIsIFwibm90ZXNcIilcblxuICAgIGxldCBjaGlsZHJlbiA9IGJvZHkuY2hpbGRyZW47XG4gICAgYWRkVHJhbnNwYXJlbnQoY2hpbGRyZW4pXG5cbiAgICBsZXQgYnV0dG9uRGl2ID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJjcmVhdGUtdGFzay1idXR0b25zXCIsIHByb21wdClcblxuICAgIGxldCBjcmVhdGVCdXR0b24gPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCBcImNyZWF0ZS10YXNrXCIsIGJ1dHRvbkRpdik7XG4gICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiO1xuXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwiY2FuY2VsXCIsIGJ1dHRvbkRpdilcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gICAgZnVuY3Rpb24gZXhpdCgpIHtcbiAgICAgIHJlbW92ZVRyYW5zcGFyZW50KGNoaWxkcmVuKTtcbiAgICAgIHByb21wdC5yZW1vdmUoKVxuICAgIH1cblxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhpdCk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlXCIpLnZhbHVlO1xuICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgIGxldCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXNcIikudmFsdWU7XG4gICAgICBsZXQgc3RhdHVzID0gXCJJbiBQcm9ncmVzc1wiXG5cbiAgICAgIGxldCB0YXNrID0gdG9Ebyh0aXRsZSwgcHJvamVjdCwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcywgc3RhdHVzKTtcbiAgICAgIHRvRG9CdWlsZGVyKHRhc2ssIHByb2plY3RFbGVtZW50KTtcblxuICAgICAgbGV0IHByb2plY3RJbmRleCA9IGdldFBvc2l0aW9uKHByb2plY3RFbGVtZW50KTtcbiAgICAgIHByb2plY3RFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgbGV0IHVwZGF0ZWRQcm9qZWN0ID0gcHJvamVjdEJ1aWxkZXIocHJvamVjdCk7XG4gICAgICBwcm9qZWN0RGl2Lmluc2VydEJlZm9yZSh1cGRhdGVkUHJvamVjdC5wcm9qZWN0RWxlbWVudCwgcHJvamVjdERpdi5jaGlsZHJlbltwcm9qZWN0SW5kZXhdKTtcbiAgICAgIHRhc2tCdXR0b25zKHVwZGF0ZWRQcm9qZWN0KTtcblxuICAgICAgZXhpdCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVGFzaylcbiAgfSkoKTtcbn07XG5cbmNvbnN0IHByb2plY3RCdXR0b24gPSAoKCkgPT4ge1xuXG4gIGZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XG4gICAgYWRkUHJvamVjdCgpO1xuICB9XG5cbiAgc2lkZWJhci5uZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdQcm9qZWN0KVxufSkoKTtcblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcblxuICBjb25zdCBwcm9qZWN0UHJvbXB0ID0gKCgpID0+IHtcbiAgICBsZXQgcHJvbXB0ID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJwcm9qZWN0LXByb21wdFwiLCBib2R5KTtcblxuICAgIGxldCBwcm9tcHRIZWFkID0gZWxlbWVudEJ1aWxkZXIoXCJoM1wiLCBcInByb21wdC1oZWFkXCIsIHByb21wdClcbiAgICBwcm9tcHRIZWFkLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBQcm9qZWN0XCI7XG5cbiAgICBuZXdJbnB1dChwcm9tcHQsIFwibmV3LXRhc2tcIiwgXCJ0aXRsZS1kaXZcIiwgXCJuYW1lLWxhYmVsXCIsIFwiVGFzazogXCIsIFwidGl0bGUtaW5wdXRcIiwgXCJwcm9qZWN0LXRpdGxlXCIsIFwidGl0bGVcIik7XG4gICAgbmV3SW5wdXQocHJvbXB0LCBcIm5ldy10YXNrXCIsIFwiZGVzY3JpcHRpb24tZGl2XCIsIFwiZGVzYy1sYWJlbFwiLCBcIkRlc2NyaXB0aW9uOiBcIiwgXCJkZXNjLWlucHV0XCIsIFwicHJvamVjdC1kZXNjcmlwdGlvblwiLCBcImRlc2NcIik7XG5cbiAgICBsZXQgY2hpbGRyZW4gPSBib2R5LmNoaWxkcmVuO1xuICAgIGFkZFRyYW5zcGFyZW50KGNoaWxkcmVuKVxuXG4gICAgbGV0IGJ1dHRvbkRpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwiY3JlYXRlLXRhc2stYnV0dG9uc1wiLCBwcm9tcHQpO1xuXG4gICAgbGV0IGNyZWF0ZUJ1dHRvbiA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwiY3JlYXRlLXRhc2tcIiwgYnV0dG9uRGl2KTtcbiAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG5cbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gZWxlbWVudEJ1aWxkZXIoXCJidXR0b25cIiwgXCJjYW5jZWxcIiwgYnV0dG9uRGl2KVxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgICBmdW5jdGlvbiBleGl0KCkge1xuICAgICAgcmVtb3ZlVHJhbnNwYXJlbnQoY2hpbGRyZW4pO1xuICAgICAgcHJvbXB0LnJlbW92ZSgpXG4gICAgfVxuXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleGl0KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGVcIikudmFsdWU7XG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZGVzY3JpcHRpb25cIikudmFsdWU7XG5cbiAgICAgIGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIFtdKVxuICAgICAgcHJvamVjdEJ1aWxkZXIobmV3UHJvamVjdCk7XG4gICAgICAvL3Rhc2tCdXR0b25zKG5ld1Byb2plY3QpO1xuXG4gICAgICBleGl0KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQcm9qZWN0KVxuICB9KSgpO1xufVxuXG5leHBvcnQge1xuICAgIGVsZW1lbnRCdWlsZGVyLFxuICAgIHByb2plY3RIZWFkZXIsXG4gICAgcHJvamVjdEJ1aWxkZXIsIFxuICAgIGFwcGx5QnV0dG9ucyxcbn0iLCJjb25zdCBwcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFza0FycmF5KSA9PiB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB0YXNrQXJyYXkgfVxufTtcblxuY29uc3QgdG9EbyA9ICh0aXRsZSwgcHJvamVjdCwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcywgc3RhdHVzKSA9PiB7XG4gICAgbGV0IHRhc2sgPSB7IHRpdGxlLCBwcm9qZWN0LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMgfVxuICAgIHByb2plY3QudGFza0FycmF5LnVuc2hpZnQodGFzayk7XG4gICAgcmV0dXJuIHsgdGFzayB9XG59O1xuXG5leHBvcnQge1xuICAgIHByb2plY3QsXG4gICAgdG9Ebyxcbn1cbiAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHByb2plY3QsIHRvRG8gfSBmcm9tICcuL3Rhc2suanMnXG5pbXBvcnQgeyBwcm9qZWN0QnVpbGRlciwgYXBwbHlCdXR0b25zIH0gZnJvbScuL3Byb2plY3RFbGVtZW50cy5qcydcblxuY29uc3QgaG9tZVByb2plY3RzID0gcHJvamVjdChcbiAgXCJIb21lIFByb2plY3RzXCIsXG4gIFwiUHJvamVjdHMgdG8gZG8gYXJvdW5kIHRoZSBob3VzZS5cIixcbiAgW11cbik7XG5cbmNvbnN0IGZvcllvdXJIZWFsdGggPSBwcm9qZWN0KFxuICBcIlN0YXkgSGVhbHRoeVwiLFxuICBcIlByb2xvbmcgeW91ciBiaW9sb2dpY2FsIGxpZmUgdGhyb3VnaCB2YXJpb3VzIHJvdXRpbmVzIVwiLFxuICBbXVxuKTtcblxuY29uc3QgY2FyUHJvamVjdCA9IHByb2plY3QoXG4gIFwiQXV0b21vdGl2ZSB0YXNrc1wiLFxuICBcIkJhc2ljIGNhciBtYWludGVuYW5jZSFcIixcbiAgW11cbilcblxuY29uc3QgdG9Eb0l0ZW0gPSB0b0RvKFxuICBgTWFrZSBcIlRvIERvIExpc3RcIiBBcHBsaWNhdGlvbiFgLFxuICBob21lUHJvamVjdHMsXG4gIFwiQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRvIG1hbmFnZSBkYWlseSB0YXNrcy5cIixcbiAgXCI5LzE1LzIwMjFcIixcbiAgXCIyXCIsIFxuICBcIlRoaXMgdGhlIGZpcnN0IG9iamVjdCBjcmVhdGVkIHVzaW5nIHRoZSB0b0RvIGZhY3RvcnkgZnVuY3Rpb24uXCIsXG4gIFwiSW4gUHJvZ3Jlc3NcIixcbilcblxuY29uc3QgcmVwbGFjZVdpcGVycyA9IHRvRG8oXG4gIFwiUmVwbGFjZSBXaW5kc2hpZWxkIFdpcGVyc1wiLFxuICBjYXJQcm9qZWN0LFxuICBcIk15IHdpcGVycyBhcmUgZGV0ZXJpb3JhdGluZy4uLkRlYXIgZ29kLiBJdCdzIHRpbWUgdG8gcmVwbGFjZSB0aGVtLlwiLFxuICBcIjEwLzYvMjFcIixcbiAgXCI1XCIsXG4gIFwiU2F3IGEgZGVhbCBhdCB0aGF0IHBsYWNlIG9uIDc1dGhcIixcbiAgXCJJbiBQcm9ncmVzc1wiLFxuKVxuXG5jb25zdCBjaGFuZ2VPaWwgPSB0b0RvKFxuICBcIlRpbWUgZm9yIGFuIE9pbCBDaGFuZ2UhXCIsXG4gIGNhclByb2plY3QsXG4gIFwiQ2hhbmdlIHRoZSBvaWwgaW4geW91ciBiZWF1dGlmdWwgTWF6ZGEgMiFcIixcbiAgXCI5LzI4LzIwMjFcIixcbiAgXCIzXCIsXG4gIFwidGVzdCBub3RlXCIsXG4gIFwiSW4gUHJvZ3Jlc3NcIixcbilcblxuY29uc3QgZ29Ub0RvYyA9IHRvRG8oXG4gIFwiR28gdG8geW91ciBEb2N0b3IncyBBcHBvaW50bWVudCFcIixcbiAgZm9yWW91ckhlYWx0aCxcbiAgXCJJdCdzIHRpbWUgZm9yIGEgY2hlY2sgdXBcIixcbiAgXCI5LzE3LzIwMjFcIixcbiAgXCIyXCIsXG4gIFwiQmUgc3VyZSB0byB0ZWxsIGhpbSBhYm91dCB5b3VyIGJhY2sgYWNuZVwiLFxuICBcIkluIFByb2dyZXNzXCIsXG4pXG5cbmNvbnN0IGdldEdpZnQgPSB0b0RvKFxuICBgR2V0IGEgQmlydGhkYXkgR2lmdCBmb3IgdGhlIFdpZmUhYCxcbiAgaG9tZVByb2plY3RzLFxuICBcIk5vIGdpZnRjYXJkcy4uLlwiLFxuICBcIjkvMTgvMjAyMVwiLFxuICBcIjFcIiwgXG4gIFwiTm8gaWRlYSB3aGF0IHRvIGdldCBoZXIuLi5cIixcbiAgXCJJbiBQcm9ncmVzc1wiLFxuKVxuXG5jb25zdCB3cml0ZVNjcmlwdCA9IHRvRG8oXG4gIFwiV3JpdGUgU2NyaXB0XCIsXG4gIGhvbWVQcm9qZWN0cyxcbiAgYEZpbmFsbHkgd3JpdGUgdGhhdCBtb3ZpZSBzY3JpcHQgeW91J3ZlIGJlZW4gdGFsa2luZyBhYm91dC5gLFxuICBcIjEwLzE1LzIwMjFcIixcbiAgXCI1XCIsIFxuICBcIkJlIHN1cmUgdG8gaW5jbHVkZSB0aGF0IHR3aXN0IGVuZGluZyB3aGVyZSB0aGUgZ3V5IHdhcyBkZWFkIHRoZSB3aG9sZSB0aW1lLlwiLFxuICBcIkluIFByb2dyZXNzXCIsXG4pXG5cbmNvbnN0IGdldFRlc3QgPSB0b0RvKFxuICBcIkdldCBCbG9vZCBUZXN0XCIsXG4gIGZvcllvdXJIZWFsdGgsXG4gIFwiR2V0IHRoYXQgYmxvb2QgdGVzdCB5b3VyIERvYyBvcmRlcmVkXCIsXG4gIFwiMTAvMTcvMjFcIixcbiAgXCIxXCIsXG4gIFwicmVtZW1iZXIgdG8gZmFzdCAxMiBob3VycyBiZWZvcmUuIE5vIGVhdGluZyFcIixcbiAgXCJJbiBQcm9ncmVzc1wiLFxuKVxuXG5sZXQgZmlyc3RQcm9qZWN0ID0gcHJvamVjdEJ1aWxkZXIoaG9tZVByb2plY3RzKTtcbmxldCBzZWNvbmRQcm9qZWN0ID0gcHJvamVjdEJ1aWxkZXIoZm9yWW91ckhlYWx0aCk7XG5sZXQgdGhpcmRQcm9qZWN0ID0gcHJvamVjdEJ1aWxkZXIoY2FyUHJvamVjdCk7XG5cbmxldCBwcm9qZWN0QXJyYXkgPSBbZmlyc3RQcm9qZWN0LCBzZWNvbmRQcm9qZWN0LCB0aGlyZFByb2plY3RdO1xuYXBwbHlCdXR0b25zKHByb2plY3RBcnJheSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=