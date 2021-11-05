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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: rgb(24, 28, 32);\n  color: rgb(187, 220, 248);\n  font-family: \"Ubuntu\", sans-serif;\n  display: flex;\n  justify-content: space-around;\n  font-size: 1.15;\n  margin: auto;\n}\n\n.sidebar {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    left: 0;\n    width: 15%;\n    height: 100%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n}\n\n.min-sidebar {\n  width: 2%;\n}\n\n.min-sidebar > * {\n  visibility: collapse;\n  height: 0;\n  width: 0;\n}\n\n.min-sidebar-button {\n  text-align: center;\n  font-size: 1.25em;\n  align-self: flex-end;\n  margin: 2% 2%;\n  height: 22px;\n  width: 22px;\n  cursor: pointer;\n  background-color: rgb(24, 28, 32);\n  color: rgb(130, 193, 248);\n  border-radius: 7px;\n  z-index: 2;\n}\n\n.min-sidebar .min-sidebar-button {\n  visibility: visible;\n}\n\n.head-container {\n  position: relative;\n  bottom: 3.5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 1;\n}\n\n.sidebar-head {\n  font-style: italic;\n  margin-block-start: 0.33em;\n  margin-block-end: 0.33em;\n}\n\n.side-button-container {\n  display: flex;\n  justify-content: space-around;\n  width: 85%;\n  background-color: rgb(24, 28, 32);\n  padding: 5%;\n  border-radius: 5px;\n}\n\n.bar-container {\n  position: relative;\n  bottom: 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 95%;\n}\n\n.notif {\n  display: flex;\n  justify-content: space-around;\n  padding-left: 5%;\n}\n\n.notif-title {\n  margin: 0 7.5% 0 0;\n  width: 50%;\n  align-self: center;\n  overflow: hidden;\n}\n\n.notif-date {\n  width: 60%;\n}\n\n.notif-head-container {\n  display: flex;\n  align-self: flex-start;\n  margin: 0 3%;\n}\n\n.notif-button {\n  background-color: rgb(24, 28, 32);\n  color: rgb(130, 193, 248);\n  cursor: pointer;\n  padding: 7px;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  font-size: 1.5em;\n  z-index: 3;\n}\n\n.show-projects {\n  margin: 0 2%;\n}\n\n.proj-container {\n  display: flex;\n  width: 95%;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  padding-bottom: 2%;\n  padding-top: 2%;\n  cursor: pointer;\n}\n\n.proj-title {\n  padding-left: 5%;\n}\n\n.see-all-proj {\n  font-weight: bold;\n  padding-top: 2%;\n  padding-left: 5%;\n  cursor: pointer;\n  align-self: flex-start;\n}\n\n.notif-num {\n  display: inline-block;\n  position: relative;\n  right: 67%;\n  top: 25px;\n  z-index: 4;\n  color:rgb(0, 0, 0);\n  background: rgb(247, 149, 0);\n  background: linear-gradient(\n    180deg,\n    rgb(245, 202, 59) 0%,\n    rgba(247, 149, 0, 1) 100%\n  );\n  border-radius: 50%;\n  height: 15px;\n  width: 15px;\n  font-size: 0.85em;\n  padding: 1px 1px 1px 1px;\n  text-align: center;\n  box-shadow: 1px 1px 1px black;\n}\n\n.hidden {\n  visibility: collapse;\n}\n\n.minimize {\n  display: none;\n  visibility: collapse;\n  height: 0;\n}\n\n.notif-head-container {\n    align-self: flex-start;\n    margin: 0 2.5%;\n}\n\n.notif-button {\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    cursor: pointer;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.hidden {\n    visibility: collapse;\n}\n\n.notif-bar {\n    position: relative;\n    bottom: 1%;\n    display: flex;\n    flex-direction: column;\n    width: 95%;\n    border-bottom-right-radius: 7px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    padding-top: 5%;\n    padding-bottom: 5%;\n}\n\n.notif-container {\n    display: flex;\n    justify-content: space-around;\n    margin: 5px 4px;\n    border-radius: 5px;\n    cursor: default;\n    max-height: 50px;\n    overflow: hidden;\n}\n\n.notif-container:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n.proj-container:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n.remove-notif {\n  margin: 2% 2% 7% 2%;\n  background-color: rgb(24, 28, 32);\n  color: rgb(130, 193, 248);\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 5px;\n  height: 18px;\n}\n\n.notif {\n    margin-block-start: .25em;\n    margin-block-end: .25em;\n    font-size: .90em;\n    width: 90%;\n    margin: auto;\n}\n\n#no-notif {\n  padding-left: 0;\n}\n\n.tips-container {\n  position: fixed;\n  bottom: 0;\n  z-index: 4;\n}\n\n.min-tips {\n  height: 5%;\n}\n\n.min-tips .tip-head  {\n  font-size: 1em;\n  margin-block-start: .5em;\n  margin-block-end: .10em;\n}\n\n.min-tips .tip {\n  visibility: hidden;\n}\n\n.tip-head {\n  margin-block-start: .5em;\n  margin-block-end: .25em;\n  text-align: center;\n}\n\n.min-tips-button {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  font-size: 1.25em;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  bottom: 25px;\n  left: 87%;\n  cursor: pointer;\n  border-radius: 7px;\n}\n\n.min-tips-button:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n.tip {\n  position: relative;\n  bottom: 15px;\n  padding-inline: 3%;\n  padding-bottom: 3%;\n}\n\n.project-container {\n  position: relative;\n  left: 7.5%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  width: 85%;\n  height: 100%;\n}\n\n.project {\n  display: flex;\n  flex-flow: column wrap;\n  background-color: rgb(130, 193, 248);\n  color: rgb(24, 28, 32);\n  border: solid #1E67A7 3px;\n  width: 20%;\n  height: 100%;\n  padding: 0.75%;\n  border-radius: 5px;\n  margin: 20px 0;\n  box-shadow: 5px 2px 2px rgb(0, 48, 87);\n}\n\n.project-head {\n  margin: auto;\n}\n\n.project-desc {\n  padding-left: 2.5%;\n  margin: 2% 0;\n}\n\n.task {\n  border: solid 5px #1E67A7;\n  background-color: rgb(24, 28, 32);\n  color: rgb(130, 193, 248);\n  width: 87%;\n  padding: 5%;\n  padding-bottom: 4%;\n  border-radius: 10px;\n}\n\n.compact {\n  padding-top: 4%;\n  padding-bottom: 4%;\n}\n\n.compact p {\n  margin-block-start: 0;\n  margin-block-end: .25em;\n}\n\n.compact .top-div {\n  padding-bottom: 5%;\n}\n\n.min {\n  padding-bottom: 0;\n}\n\n.min p {\n  margin-block-start: 0;\n}\n\n.top-div {\n  display: flex;\n  justify-content: space-between;\n}\n\nbutton {\n  border-radius: 10px;\n  background-color: rgb(130, 193, 248);\n  color: rgb(24, 28, 32);\n  padding: 5px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.top-button-div {\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n  left: 78%;\n  width: 22%;\n  margin: 3% 0;\n}\n\n.top-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n  border: 1px solid rgb(130, 193, 248);\n  border-radius: 7px;\n  background-color: rgb(24, 28, 32);\n  color: rgb(130, 193, 248);\n  font-size: 1.15em;\n}\n\n.task-head {\n  margin-block-start: .25em;\n  margin-block-end: .25em;\n}\n\n.min-button {\n  min-width: 25px;\n}\n\n.task p {\n  margin-block-start: .25em;\n  margin-block-end: .5em;\n}\n\n.remove-task {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 1;\n  position: relative;\n  top: 5px;\n  width: 25px;\n  height: 25px;\n  border-radius: 7px;\n  border: 1px solid rgb(130, 193, 248);\n  cursor: pointer;\n}\n\n.button-div {\n  margin: 10px 0 0 0;\n  display: flex;\n  justify-content: space-around;\n}\n\n.button-div button {\n  font-size: .85em;\n}\n\n.status-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.status-box {\n  width: 5%;\n}\n\n.task-prompt {\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  position: fixed;\n  top: 25%;\n  padding: 2%;\n  width: 20%;\n  background-color: rgb(130, 193, 248);\n  color: rgb(24, 28, 32);\n  border-radius: 10px;\n  z-index: 1;\n  font-size: 1.25em;\n  font-weight: bold;\n}\n\n.invalid {\n  font-size: 0.85em;\n  font-weight: lighter;\n  margin-block-start: 0.25em;\n  margin-block-end: 0.25em;\n  color: rgb(251, 0, 0);\n  font-style: italic;\n}\n\n.project-prompt {\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  position: fixed;\n  top: 25%;\n  padding: 2%;\n  width: 20%;\n  background-color: rgb(130, 193, 248);\n  color: rgb(24, 28, 32);\n  border-radius: 10px;\n  z-index: 1;\n  font-size: 1.25em;\n  font-weight: bold;\n}\n\n.warning {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  position: fixed;\n  top: 25%;\n  background-color: rgb(130, 193, 248);\n  color: rgb(24, 28, 32);\n  z-index: 1;\n  border-radius: 10px;\n  padding: 2%;\n  width: 20%;\n}\n\n.warning-buttons-container {\n  display: flex;\n  justify-content: space-between;\n  width: 95%;\n}\n\n.warning-buttons {\n  width: 45%;\n}\n\n.prompt-head {\n  margin: auto;\n}\n\n.new-task {\n  padding-bottom: 2%;\n}\n\n.notes-div {\n  padding-bottom: 5%;\n}\n\n.transparent {\n  opacity: 0.25;\n}\n\n.create-task-buttons {\n  display: flex;\n  justify-content: space-between;\n  margin: 5% 0% 0% 0%;\n\n  width: 100%;\n}\n\n.create-task {\n  width: 45%;\n}\n\n.cancel {\n  width: 45%;\n}\n\ninput {\n  border-radius: 5px;\n  padding: 1%;\n  width: 100%;\n}\n\n/* Themes */\nli {\n  list-style-type: none;\n  padding-top: 2%;\n  padding-bottom: 2%;\n}\n\n.themes-list {\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  padding-inline-start: 3%;\n  padding-inline-end: 3%;\n  margin-block-start: 5%;\n  margin-block-end: 5%;\n  align-self: center;\n}\n\n.theme-option {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 5px;\n  padding-inline-start: 2.5%;\n}\n\n.theme-option:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n.proj-container:hover{ \n  background-color: rgb(38, 44, 51);\n}\n\n.color {\n  position: relative;\n  right: 5%;\n  height: 33px;\n  width: 33px;\n  border-radius: 5px;\n}\n\n#classic {\n  background-color: rgb(130, 193, 248);\n  color: rgb(24, 28, 32); \n}\n\n#classicComp {\n  background-color: rgb(24, 28, 32);\n  color: rgb(130, 193, 248); \n}\n\n#classicComp .theme-option:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n#classicComp .min-tips-button:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n#classicComp .notif-container:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n#classicComp .proj-container:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n#emerald {\n  background-color: #50C878;\n  color: rgb(15, 1, 1);\n  box-shadow: 5px 2px 2px #003110d3;\n}\n\n#emeraldComp {\n  background-color: rgb(15, 1, 1);\n  color: #50C878;\n}\n\n#emeraldComp .theme-option:hover {\n  background-color: #163320;\n}\n\n#emeraldComp .notif-container:hover {\n  background-color: #163320;\n}\n\n#emeraldComp .proj-container:hover {\n  background-color: #163320;\n}\n\n#emeraldComp .min-tips-button:hover {\n  background-color: #163320;\n}\n\n#artic {\n  background-color: #C6DAE9;\n  color: rgb(29, 83, 119);\n  box-shadow: 5px 2px 2px #6f7a83a1;\n}\n\n#articComp {\n  background-color: rgb(29, 83, 119);\n  color: #C6DAE9;\n}\n\n#articComp .theme-option:hover {\n  background-color: rgb(84, 118, 139);\n}\n\n#articComp .notif-container:hover {\n  background-color: rgb(84, 118, 139);\n}\n\n#articComp .proj-container:hover {\n  background-color: rgb(84, 118, 139);\n}\n\n#articComp .min-tips-button:hover {\n  background-color: rgb(84, 118, 139);\n}\n\n#ruby {\n  background-color: #e4417f;\n  color: rgb(19, 19, 19);\n  box-shadow: 5px 2px 2px #70012cb0;\n}\n\n#rubyComp {\n  color: #E0115F;\n  background-color: rgb(24, 28, 32);\n}\n\n#rubyComp .theme-option:hover {\n  background-color: #35101e;\n}\n\n#rubyComp .notif-container:hover {\n  background-color: #35101e;\n}\n\n#rubyComp .proj-container:hover {\n  background-color: #35101e;\n}\n\n#rubyComp .min-tips-button:hover {\n  background-color: #35101e;\n}\n\n#purple {\n  background-color: #bb54ce;\n  color: rgb(24, 28, 32);\n  box-shadow: 5px 2px 2px #4b0058d7;\n}\n\n#purpleComp {\n  background-color: rgb(24, 28, 32); \n  color: #bb54ce;\n}\n\n#purpleComp .theme-option:hover {\n  background-color: #310131;\n}\n\n#purpleComp .notif-container:hover {\n  background-color: #310131;\n}\n\n#purpleComp .proj-container:hover {\n  background-color: #310131;\n}\n\n#purpleComp .min-tips-button:hover {\n  background-color: #310131;\n}\n\n@media only screen and (max-width: 1100px) {\n  body {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .sidebar {\n    position: relative;\n    order: 0;\n    top: 0;\n    width: 100%;\n    height: fit-content;\n    border-bottom: rgb(24, 28, 32) solid 10px;\n    box-shadow: none;\n  }\n\n  .bar-container {\n    margin: 5% 0 15% 0;\n    border: none;\n    background-color: null;\n  }\n\n  .notif-head-container {\n    margin: -2% 7.5%;\n}\n\n  .notif-bar {\n    width: 85%;\n  }\n\n  .project-container {\n    left: 0;\n    order: 1;\n    width: 100%;\n  }\n\n  .project-prompt {\n    padding-top: 5%;\n    width: 90%;\n  }\n\n  .project {\n    width: 100%;\n    border-bottom: rgb(24, 28, 32) solid 10px;\n    box-shadow: none;\n    padding: 1.5%;\n  }\n\n  .task-prompt {\n    top: 10%;\n    padding-top: 5%;\n    width: 90%;\n  }\n\n  input {\n    width: 95%;\n  }\n\n  .warning {\n    width: 88%;\n  }\n\n  .themes-list {\n    padding-inline-start: 0;\n    padding-inline-end: 0;\n    margin-block-start: 0;\n    margin-block-end: 0;\n    font-size: 1.15em;\n    width: 65%;\n  }\n\n  .tips-container {\n    position: relative;\n    order: 2;\n    width: 100%;\n    align-self: flex-end;\n  }\n\n  .tip-head {\n    margin-block-start: 0;\n    margin-block-end: 1.25em;\n\n  }   \n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  background-color: rgb(24, 28, 32);\n  color: rgb(187, 220, 248);\n  font-family: \"Ubuntu\", sans-serif;\n  display: flex;\n  justify-content: space-around;\n  font-size: 1.15;\n  margin: auto;\n}\n\n.sidebar {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    left: 0;\n    width: 15%;\n    height: 100%;\n    background-color: rgb(130, 193, 248);\n    color: rgb(24, 28, 32);\n}\n\n.min-sidebar {\n  width: 2%;\n}\n\n.min-sidebar > * {\n  visibility: collapse;\n  height: 0;\n  width: 0;\n}\n\n.min-sidebar-button {\n  text-align: center;\n  font-size: 1.25em;\n  align-self: flex-end;\n  margin: 2% 2%;\n  height: 22px;\n  width: 22px;\n  cursor: pointer;\n  background-color: rgb(24, 28, 32);\n  color: rgb(130, 193, 248);\n  border-radius: 7px;\n  z-index: 2;\n}\n\n.min-sidebar .min-sidebar-button {\n  visibility: visible;\n}\n\n.head-container {\n  position: relative;\n  bottom: 3.5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 1;\n}\n\n.sidebar-head {\n  font-style: italic;\n  margin-block-start: 0.33em;\n  margin-block-end: 0.33em;\n}\n\n.side-button-container {\n  display: flex;\n  justify-content: space-around;\n  width: 85%;\n  background-color: rgb(24, 28, 32);\n  padding: 5%;\n  border-radius: 5px;\n}\n\n.bar-container {\n  position: relative;\n  bottom: 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 95%;\n}\n\n.notif {\n  display: flex;\n  justify-content: space-around;\n  padding-left: 5%;\n}\n\n.notif-title {\n  margin: 0 7.5% 0 0;\n  width: 50%;\n  align-self: center;\n  overflow: hidden;\n}\n\n.notif-date {\n  width: 60%;\n}\n\n.notif-head-container {\n  display: flex;\n  align-self: flex-start;\n  margin: 0 3%;\n}\n\n.notif-button {\n  background-color: rgb(24, 28, 32);\n  color: rgb(130, 193, 248);\n  cursor: pointer;\n  padding: 7px;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  font-size: 1.5em;\n  z-index: 3;\n}\n\n.show-projects {\n  margin: 0 2%;\n}\n\n.proj-container {\n  display: flex;\n  width: 95%;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  padding-bottom: 2%;\n  padding-top: 2%;\n  cursor: pointer;\n}\n\n.proj-title {\n  padding-left: 5%;\n}\n\n.see-all-proj {\n  font-weight: bold;\n  padding-top: 2%;\n  padding-left: 5%;\n  cursor: pointer;\n  align-self: flex-start;\n}\n\n.notif-num {\n  display: inline-block;\n  position: relative;\n  right: 67%;\n  top: 25px;\n  z-index: 4;\n  color:rgb(0, 0, 0);\n  background: rgb(247, 149, 0);\n  background: linear-gradient(\n    180deg,\n    rgb(245, 202, 59) 0%,\n    rgba(247, 149, 0, 1) 100%\n  );\n  border-radius: 50%;\n  height: 15px;\n  width: 15px;\n  font-size: 0.85em;\n  padding: 1px 1px 1px 1px;\n  text-align: center;\n  box-shadow: 1px 1px 1px black;\n}\n\n.hidden {\n  visibility: collapse;\n}\n\n.minimize {\n  display: none;\n  visibility: collapse;\n  height: 0;\n}\n\n.notif-head-container {\n    align-self: flex-start;\n    margin: 0 2.5%;\n}\n\n.notif-button {\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    cursor: pointer;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.hidden {\n    visibility: collapse;\n}\n\n.notif-bar {\n    position: relative;\n    bottom: 1%;\n    display: flex;\n    flex-direction: column;\n    width: 95%;\n    border-bottom-right-radius: 7px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n    background-color: rgb(24, 28, 32);\n    color: rgb(130, 193, 248);\n    padding-top: 5%;\n    padding-bottom: 5%;\n}\n\n.notif-container {\n    display: flex;\n    justify-content: space-around;\n    margin: 5px 4px;\n    border-radius: 5px;\n    cursor: default;\n    max-height: 50px;\n    overflow: hidden;\n}\n\n.notif-container:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n.proj-container:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n.remove-notif {\n  margin: 2% 2% 7% 2%;\n  background-color: rgb(24, 28, 32);\n  color: rgb(130, 193, 248);\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 5px;\n  height: 18px;\n}\n\n.notif {\n    margin-block-start: .25em;\n    margin-block-end: .25em;\n    font-size: .90em;\n    width: 90%;\n    margin: auto;\n}\n\n#no-notif {\n  padding-left: 0;\n}\n\n.tips-container {\n  position: fixed;\n  bottom: 0;\n  z-index: 4;\n}\n\n.min-tips {\n  height: 5%;\n}\n\n.min-tips .tip-head  {\n  font-size: 1em;\n  margin-block-start: .5em;\n  margin-block-end: .10em;\n}\n\n.min-tips .tip {\n  visibility: hidden;\n}\n\n.tip-head {\n  margin-block-start: .5em;\n  margin-block-end: .25em;\n  text-align: center;\n}\n\n.min-tips-button {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  font-size: 1.25em;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  bottom: 25px;\n  left: 87%;\n  cursor: pointer;\n  border-radius: 7px;\n}\n\n.min-tips-button:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n.tip {\n  position: relative;\n  bottom: 15px;\n  padding-inline: 3%;\n  padding-bottom: 3%;\n}\n\n.project-container {\n  position: relative;\n  left: 7.5%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  width: 85%;\n  height: 100%;\n}\n\n.project {\n  display: flex;\n  flex-flow: column wrap;\n  background-color: rgb(130, 193, 248);\n  color: rgb(24, 28, 32);\n  border: solid #1E67A7 3px;\n  width: 20%;\n  height: 100%;\n  padding: 0.75%;\n  border-radius: 5px;\n  margin: 20px 0;\n  box-shadow: 5px 2px 2px rgb(0, 48, 87);\n}\n\n.project-head {\n  margin: auto;\n}\n\n.project-desc {\n  padding-left: 2.5%;\n  margin: 2% 0;\n}\n\n.task {\n  border: solid 5px #1E67A7;\n  background-color: rgb(24, 28, 32);\n  color: rgb(130, 193, 248);\n  width: 87%;\n  padding: 5%;\n  padding-bottom: 4%;\n  border-radius: 10px;\n}\n\n.compact {\n  padding-top: 4%;\n  padding-bottom: 4%;\n}\n\n.compact p {\n  margin-block-start: 0;\n  margin-block-end: .25em;\n}\n\n.compact .top-div {\n  padding-bottom: 5%;\n}\n\n.min {\n  padding-bottom: 0;\n}\n\n.min p {\n  margin-block-start: 0;\n}\n\n.top-div {\n  display: flex;\n  justify-content: space-between;\n}\n\nbutton {\n  border-radius: 10px;\n  background-color: rgb(130, 193, 248);\n  color: rgb(24, 28, 32);\n  padding: 5px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.top-button-div {\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n  left: 78%;\n  width: 22%;\n  margin: 3% 0;\n}\n\n.top-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n  border: 1px solid rgb(130, 193, 248);\n  border-radius: 7px;\n  background-color: rgb(24, 28, 32);\n  color: rgb(130, 193, 248);\n  font-size: 1.15em;\n}\n\n.task-head {\n  margin-block-start: .25em;\n  margin-block-end: .25em;\n}\n\n.min-button {\n  min-width: 25px;\n}\n\n.task p {\n  margin-block-start: .25em;\n  margin-block-end: .5em;\n}\n\n.remove-task {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 1;\n  position: relative;\n  top: 5px;\n  width: 25px;\n  height: 25px;\n  border-radius: 7px;\n  border: 1px solid rgb(130, 193, 248);\n  cursor: pointer;\n}\n\n.button-div {\n  margin: 10px 0 0 0;\n  display: flex;\n  justify-content: space-around;\n}\n\n.button-div button {\n  font-size: .85em;\n}\n\n.status-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.status-box {\n  width: 5%;\n}\n\n.task-prompt {\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  position: fixed;\n  top: 25%;\n  padding: 2%;\n  width: 20%;\n  background-color: rgb(130, 193, 248);\n  color: rgb(24, 28, 32);\n  border-radius: 10px;\n  z-index: 1;\n  font-size: 1.25em;\n  font-weight: bold;\n}\n\n.invalid {\n  font-size: 0.85em;\n  font-weight: lighter;\n  margin-block-start: 0.25em;\n  margin-block-end: 0.25em;\n  color: rgb(251, 0, 0);\n  font-style: italic;\n}\n\n.project-prompt {\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  position: fixed;\n  top: 25%;\n  padding: 2%;\n  width: 20%;\n  background-color: rgb(130, 193, 248);\n  color: rgb(24, 28, 32);\n  border-radius: 10px;\n  z-index: 1;\n  font-size: 1.25em;\n  font-weight: bold;\n}\n\n.warning {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  position: fixed;\n  top: 25%;\n  background-color: rgb(130, 193, 248);\n  color: rgb(24, 28, 32);\n  z-index: 1;\n  border-radius: 10px;\n  padding: 2%;\n  width: 20%;\n}\n\n.warning-buttons-container {\n  display: flex;\n  justify-content: space-between;\n  width: 95%;\n}\n\n.warning-buttons {\n  width: 45%;\n}\n\n.prompt-head {\n  margin: auto;\n}\n\n.new-task {\n  padding-bottom: 2%;\n}\n\n.notes-div {\n  padding-bottom: 5%;\n}\n\n.transparent {\n  opacity: 0.25;\n}\n\n.create-task-buttons {\n  display: flex;\n  justify-content: space-between;\n  margin: 5% 0% 0% 0%;\n\n  width: 100%;\n}\n\n.create-task {\n  width: 45%;\n}\n\n.cancel {\n  width: 45%;\n}\n\ninput {\n  border-radius: 5px;\n  padding: 1%;\n  width: 100%;\n}\n\n/* Themes */\nli {\n  list-style-type: none;\n  padding-top: 2%;\n  padding-bottom: 2%;\n}\n\n.themes-list {\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  padding-inline-start: 3%;\n  padding-inline-end: 3%;\n  margin-block-start: 5%;\n  margin-block-end: 5%;\n  align-self: center;\n}\n\n.theme-option {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 5px;\n  padding-inline-start: 2.5%;\n}\n\n.theme-option:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n.proj-container:hover{ \n  background-color: rgb(38, 44, 51);\n}\n\n.color {\n  position: relative;\n  right: 5%;\n  height: 33px;\n  width: 33px;\n  border-radius: 5px;\n}\n\n#classic {\n  background-color: rgb(130, 193, 248);\n  color: rgb(24, 28, 32); \n}\n\n#classicComp {\n  background-color: rgb(24, 28, 32);\n  color: rgb(130, 193, 248); \n}\n\n#classicComp .theme-option:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n#classicComp .min-tips-button:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n#classicComp .notif-container:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n#classicComp .proj-container:hover {\n  background-color: rgb(38, 44, 51);\n}\n\n#emerald {\n  background-color: #50C878;\n  color: rgb(15, 1, 1);\n  box-shadow: 5px 2px 2px #003110d3;\n}\n\n#emeraldComp {\n  background-color: rgb(15, 1, 1);\n  color: #50C878;\n}\n\n#emeraldComp .theme-option:hover {\n  background-color: #163320;\n}\n\n#emeraldComp .notif-container:hover {\n  background-color: #163320;\n}\n\n#emeraldComp .proj-container:hover {\n  background-color: #163320;\n}\n\n#emeraldComp .min-tips-button:hover {\n  background-color: #163320;\n}\n\n#artic {\n  background-color: #C6DAE9;\n  color: rgb(29, 83, 119);\n  box-shadow: 5px 2px 2px #6f7a83a1;\n}\n\n#articComp {\n  background-color: rgb(29, 83, 119);\n  color: #C6DAE9;\n}\n\n#articComp .theme-option:hover {\n  background-color: rgb(84, 118, 139);\n}\n\n#articComp .notif-container:hover {\n  background-color: rgb(84, 118, 139);\n}\n\n#articComp .proj-container:hover {\n  background-color: rgb(84, 118, 139);\n}\n\n#articComp .min-tips-button:hover {\n  background-color: rgb(84, 118, 139);\n}\n\n#ruby {\n  background-color: #e4417f;\n  color: rgb(19, 19, 19);\n  box-shadow: 5px 2px 2px #70012cb0;\n}\n\n#rubyComp {\n  color: #E0115F;\n  background-color: rgb(24, 28, 32);\n}\n\n#rubyComp .theme-option:hover {\n  background-color: #35101e;\n}\n\n#rubyComp .notif-container:hover {\n  background-color: #35101e;\n}\n\n#rubyComp .proj-container:hover {\n  background-color: #35101e;\n}\n\n#rubyComp .min-tips-button:hover {\n  background-color: #35101e;\n}\n\n#purple {\n  background-color: #bb54ce;\n  color: rgb(24, 28, 32);\n  box-shadow: 5px 2px 2px #4b0058d7;\n}\n\n#purpleComp {\n  background-color: rgb(24, 28, 32); \n  color: #bb54ce;\n}\n\n#purpleComp .theme-option:hover {\n  background-color: #310131;\n}\n\n#purpleComp .notif-container:hover {\n  background-color: #310131;\n}\n\n#purpleComp .proj-container:hover {\n  background-color: #310131;\n}\n\n#purpleComp .min-tips-button:hover {\n  background-color: #310131;\n}\n\n@media only screen and (max-width: 1100px) {\n  body {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .sidebar {\n    position: relative;\n    order: 0;\n    top: 0;\n    width: 100%;\n    height: fit-content;\n    border-bottom: rgb(24, 28, 32) solid 10px;\n    box-shadow: none;\n  }\n\n  .bar-container {\n    margin: 5% 0 15% 0;\n    border: none;\n    background-color: null;\n  }\n\n  .notif-head-container {\n    margin: -2% 7.5%;\n}\n\n  .notif-bar {\n    width: 85%;\n  }\n\n  .project-container {\n    left: 0;\n    order: 1;\n    width: 100%;\n  }\n\n  .project-prompt {\n    padding-top: 5%;\n    width: 90%;\n  }\n\n  .project {\n    width: 100%;\n    border-bottom: rgb(24, 28, 32) solid 10px;\n    box-shadow: none;\n    padding: 1.5%;\n  }\n\n  .task-prompt {\n    top: 10%;\n    padding-top: 5%;\n    width: 90%;\n  }\n\n  input {\n    width: 95%;\n  }\n\n  .warning {\n    width: 88%;\n  }\n\n  .themes-list {\n    padding-inline-start: 0;\n    padding-inline-end: 0;\n    margin-block-start: 0;\n    margin-block-end: 0;\n    font-size: 1.15em;\n    width: 65%;\n  }\n\n  .tips-container {\n    position: relative;\n    order: 2;\n    width: 100%;\n    align-self: flex-end;\n  }\n\n  .tip-head {\n    margin-block-start: 0;\n    margin-block-end: 1.25em;\n\n  }   \n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, dirtyObject);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeft.getTime() - dateRight.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__.default)((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft, dirtyDateRight) / 1000;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__.default[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__.default)(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return !isNaN(date);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challange you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatRelative)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__.default,
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__.default,
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__.default,
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__.default,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_objectBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/objectBuilder */ "./src/modules/objectBuilder.js");
/* harmony import */ var _modules_projectCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/projectCreator */ "./src/modules/projectCreator.js");
/* harmony import */ var _modules_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/buttons */ "./src/modules/buttons.js");
/* harmony import */ var _modules_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sidebar */ "./src/modules/sidebar.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/store */ "./src/modules/store.js");
/* harmony import */ var _modules_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/themes */ "./src/modules/themes.js");
/* eslint-disable no-unused-vars */









window.document.title = "OnTask"

const allProjects = (0,_modules_objectBuilder__WEBPACK_IMPORTED_MODULE_1__.projectTracker)();

function buildProjects(projList) {
  for (let i = 0; i < projList.length; i++) {
    let project = projList[i];
    let newProjSet = (0,_modules_projectCreator__WEBPACK_IMPORTED_MODULE_2__.projectBuilder)(project);
    let tasks = project.taskArray;
    for (let y = 0; y < tasks.length; y++) {
      (0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_4__.notif)(tasks[y]);
    };
    allProjects.masterList.push(newProjSet);
  };
  (0,_modules_buttons__WEBPACK_IMPORTED_MODULE_3__.applyButtons)(allProjects.masterList);
  (0,_modules_store__WEBPACK_IMPORTED_MODULE_5__.getTheme)();
}

const start = (() => {
  let fetchedList = (0,_modules_store__WEBPACK_IMPORTED_MODULE_5__.checkList)();
  if (fetchedList.length === 0) {
    let defaultProj = (0,_modules_objectBuilder__WEBPACK_IMPORTED_MODULE_1__.createDefaultProj)();
    allProjects.projectList.unshift(defaultProj);
    (0,_modules_store__WEBPACK_IMPORTED_MODULE_5__.store)(allProjects.projectList);
    const defaultProjectSet = (0,_modules_projectCreator__WEBPACK_IMPORTED_MODULE_2__.projectBuilder)(defaultProj);
    (0,_modules_buttons__WEBPACK_IMPORTED_MODULE_3__.taskButtons)(defaultProjectSet);
    (0,_modules_themes__WEBPACK_IMPORTED_MODULE_6__.setTheme)("classic", "classicComp");
    (0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_4__.addNoNotifMessage)()
  } else {
    buildProjects(fetchedList);
    (0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_4__.addNoNotifMessage)()
  };
})();

 



/***/ }),

/***/ "./src/modules/buttons.js":
/*!********************************!*\
  !*** ./src/modules/buttons.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskButtons": () => (/* binding */ taskButtons),
/* harmony export */   "applyButtons": () => (/* binding */ applyButtons),
/* harmony export */   "addTransparent": () => (/* binding */ addTransparent),
/* harmony export */   "removeTransparent": () => (/* binding */ removeTransparent)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/modules/elements.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ "./src/modules/date.js");
/* harmony import */ var _taskElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskElements */ "./src/modules/taskElements.js");
/* harmony import */ var _projectCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectCreator */ "./src/modules/projectCreator.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./src/modules/sidebar.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/modules/store.js");
/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */







let fetchedList = (0,_store__WEBPACK_IMPORTED_MODULE_5__.checkList)();

function addTransparent(childElements) {
  for (let i = 0; i < childElements.length - 1; i++) {
    childElements[i].classList.add("transparent");
  }
}

function removeTransparent(childElements) {
  for (let i = 0; i < childElements.length - 1; i++) {
    childElements[i].classList.remove("transparent");
  }
}

const taskButtons = (set) => {
  const topButtonDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)(
    "div",
    "top-button-div",
    set.projectElement
  );
  set.projectElement.prepend(topButtonDiv);

  const addTaskButton = (() => {
    let addButton = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "top-buttons", topButtonDiv);
    addButton.classList.add("add-task");
    addButton.textContent = "+";

    function addNewTask() {
      (0,_projectCreator__WEBPACK_IMPORTED_MODULE_3__.addTask)(set);
      addButton.removeEventListener("click", addNewTask);
    };

    addButton.addEventListener("click", addNewTask);
  })();

  const buttonDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "button-div", set.projectElement);

  const sortByDueDateButton = (() => {
    if (set.project.taskArray.length > 1) {
      let sort = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("button", "sort-button", buttonDiv);
      sort.textContent = "Sort by Due Date";

      function newSortedList() {
        let priorWidth = set.projectElement.style.width
        let projectIndex = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.getPosition)(set.projectElement);
        let sortedTasks = (0,_date__WEBPACK_IMPORTED_MODULE_1__.sortByDueDate)(set.project.taskArray);
        set.project.taskArray = sortedTasks;
        set.deleteList();
        let sortedProject = (0,_taskElements__WEBPACK_IMPORTED_MODULE_2__.projectBuilder)(set.project);
        _elements__WEBPACK_IMPORTED_MODULE_0__.projectDiv.insertBefore(
          sortedProject.projectElement,
          _elements__WEBPACK_IMPORTED_MODULE_0__.projectDiv.children[projectIndex + 1]
        );
        taskButtons(sortedProject);
        (0,_sidebar__WEBPACK_IMPORTED_MODULE_4__.themeCheck)();
        sortedProject.projectElement.style.width = priorWidth;
      }

      sort.addEventListener("click", newSortedList);
    }
  })();

  const sortByPriorityButton = (() => {
    if (set.project.taskArray.length > 1) {
      let sort = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("button", "sort-by-priority", buttonDiv);
      sort.textContent = "Sort by Priority";
      
      function newProjectSet() {
        let priorWidth = set.projectElement.style.width
        console.log(priorWidth)
        let projectIndex = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.getPosition)(set.projectElement);
        let sortedTasks = set.sortByPriority();
        set.taskArray = sortedTasks;
        set.deleteList();
        let sortedProject = (0,_taskElements__WEBPACK_IMPORTED_MODULE_2__.projectBuilder)(set.project);
        

        _elements__WEBPACK_IMPORTED_MODULE_0__.projectDiv.insertBefore(
          sortedProject.projectElement,
          _elements__WEBPACK_IMPORTED_MODULE_0__.projectDiv.children[projectIndex + 1]
        );
        taskButtons(sortedProject);
        (0,_sidebar__WEBPACK_IMPORTED_MODULE_4__.themeCheck)();
        sortedProject.projectElement.style.width = priorWidth;
      };
      sort.addEventListener("click", newProjectSet);
    };
  })();

  const removeTaskButton = (() => {
    let projectElements = Array.from(set.projectElement.children);
    for (let i = 0; i < projectElements.length; i++) {
      if (projectElements[i].classList.contains("task")) {
        let taskDiv = projectElements[i];
        let topDiv = taskDiv.children[0];
        let removeTaskElement = taskDiv.firstChild;
        for (let y = 0; y < set.project.taskArray.length; y++) {
          if (
            topDiv.children[1].textContent === set.project.taskArray[y].title
          ) {
            let taskTitle = set.project.taskArray[y].title
            
            function taskRemover() {
              for (let i = 0; i < fetchedList.length; i++) {
                if (fetchedList[i].title === set.project.title) {
                  for (let z = 0; z < fetchedList[i].taskArray.length; z++) {
                    if (fetchedList[i].taskArray[z].title === taskTitle) {
                      fetchedList[i].taskArray.splice(z, 1);
                      (0,_store__WEBPACK_IMPORTED_MODULE_5__.store)(fetchedList);
                      break
                    };
                  };
                };
              }
              let projectIndex = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.getPosition)(set.projectElement);
              set.removeTask(set.project.taskArray[y]);
              set.deleteList();
              let sortedProject = (0,_taskElements__WEBPACK_IMPORTED_MODULE_2__.projectBuilder)(set.project);
              taskButtons(sortedProject);
              (0,_sidebar__WEBPACK_IMPORTED_MODULE_4__.themeCheck)()
              _elements__WEBPACK_IMPORTED_MODULE_0__.projectDiv.insertBefore(
                sortedProject.projectElement,
                _elements__WEBPACK_IMPORTED_MODULE_0__.projectDiv.children[projectIndex]
              );
            };
            removeTaskElement.addEventListener("click", taskRemover);
          };
        };
      };
    };
  })();

  const warningMessage = () => {
    for (let i = 0; i < _elements__WEBPACK_IMPORTED_MODULE_0__.body.children.length; i++) {
      if (i < _elements__WEBPACK_IMPORTED_MODULE_0__.body.children.length) {
        _elements__WEBPACK_IMPORTED_MODULE_0__.body.children[i].classList.add("transparent")
      }
    }
    let warningElement = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "warning", _elements__WEBPACK_IMPORTED_MODULE_0__.body);
    let warningMessage = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("p", "warning-message", warningElement);
    warningMessage.textContent = "Are you sure you want to remove this entire project?"
    let container = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "warning-buttons-container", warningElement)
    let confirm = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("button", "warning-buttons", container);
    confirm.textContent = "Remove Project";
    let cancel = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("button", "warning-buttons", container);
    cancel.textContent = "Cancel"
    ;(0,_sidebar__WEBPACK_IMPORTED_MODULE_4__.themeCheck)()

    function cancelProj() {
      removeTransparent(_elements__WEBPACK_IMPORTED_MODULE_0__.body.children)
      warningElement.remove();
    }
    cancel.addEventListener("click", cancelProj);
    
    function removeProj() {
      removeTransparent(_elements__WEBPACK_IMPORTED_MODULE_0__.body.children)
      for (let i = 0; i < fetchedList.length; i++) {
        if (fetchedList[i].title === set.project.title) {
          fetchedList.splice(i, 1);
          (0,_store__WEBPACK_IMPORTED_MODULE_5__.store)(fetchedList);
          _sidebar__WEBPACK_IMPORTED_MODULE_4__.sidebar.populateProjects();
          break
        };
      };
      set.deleteList()
      warningElement.remove();
    };
    
    confirm.addEventListener("click", removeProj);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        removeProj();
        warningElement.remove();
      };
    }, false);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        let body = document.querySelector("body");
        removeTransparent(body.children);
        warningElement.remove();
      };
    }, false);
  };

  const deleteButton = (() => {
    let del = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "top-buttons", topButtonDiv);
    del.classList.add("delete-button");
    del.textContent = "x";
    del.addEventListener("click", warningMessage);
  })();
};

function applyButtons(taskArray) {
  for (let i = 0; i < taskArray.length; i++) {
    taskButtons(taskArray[i]);
  }
}

const projectButton = (() => {
  function addNewProject() {
    (0,_projectCreator__WEBPACK_IMPORTED_MODULE_3__.addProject)();
    _sidebar__WEBPACK_IMPORTED_MODULE_4__.sidebar.newProject.removeEventListener("click", addNewProject);
  }
  _sidebar__WEBPACK_IMPORTED_MODULE_4__.sidebar.newProject.addEventListener("click", addNewProject);
})();

const changeView = (() => {
  let viewElement = _sidebar__WEBPACK_IMPORTED_MODULE_4__.sidebar.changeView;

  function minAll() {
    let projContainer = document.getElementsByClassName("project-container")[0];
    let projects = Array.from(projContainer.children);
    for (let i = 0; i < projects.length; i++) {
      let project = projects[i];
      let projComponents = Array.from(project.children);
      for (let y = 0; y < projComponents.length; y++) {
        if ((y > 2) && (y !== projComponents.length - 1)) {
          let task = projComponents[y];
          task.classList.add("compact");
          let taskElements = Array.from(task.children);
          for (let x = 0; x <  taskElements.length; x++) {
            if ((x !== 0) && (x !== 5)) {
              taskElements[x].classList.add("minimize");
            };
          };
          function maxAll() {
            let compactTasks = Array.from(document.getElementsByClassName("compact"));
            let hiddenElements = Array.from(document.getElementsByClassName("minimize"));
            for (let i = 0; i < compactTasks.length; i++) {
              compactTasks[i].classList.remove("compact");
            };
            for (let i = 0; i < hiddenElements.length; i++) {
              hiddenElements[i].classList.remove("minimize");
            };
            viewElement.removeEventListener("click", maxAll);
            viewElement.addEventListener("click", minAll); 
          };

        viewElement.removeEventListener("click", minAll);
        viewElement.addEventListener("click", maxAll); 
        };
      };
    };
  };

  viewElement.addEventListener("click", minAll); 
})();




/***/ }),

/***/ "./src/modules/date.js":
/*!*****************************!*\
  !*** ./src/modules/date.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateChecker": () => (/* binding */ dateChecker),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "deadline": () => (/* binding */ deadline),
/* harmony export */   "sortByDueDate": () => (/* binding */ sortByDueDate)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");


function dateChecker(date) {
  let dueDate = new Date(date);
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(dueDate)) {
    return false;
  } else {
    return true;
  }
}

function formatDate(enteredDate) {
  let dueDate = new Date(enteredDate);
  let isValid = dateChecker(dueDate);
  if (isValid) {
    let formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(dueDate, "EEEE, MMMM do, yyyy");
    return formattedDate;
  } else {
    return false;
  }
}

function deadline(dueDate) {
  const today = new Date();
  let dropDead = new Date(dueDate);
  let daysTill = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(dropDead, today);
  let deadMessage = `${daysTill} until your due date.`;
  return deadMessage;
}

function sortByDueDate(tasks) {
  let objArray = [];
  let deadlineArray = [];

  const newObj = (task, dueDate) => {
    return { task, dueDate };
  };

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    let dueDate = new Date(task.enteredDate);
    let taskAndDate = newObj(task, dueDate);
    objArray.push(taskAndDate);
    deadlineArray.push(dueDate);
  }

  let sortedArray = deadlineArray.sort(date_fns__WEBPACK_IMPORTED_MODULE_3__.default);
  let sortedTasks = [];
  for (let i = 0; i < sortedArray.length; i++) {
    let sortedDate = sortedArray[i];

    for (let y = 0; y < objArray.length; y++) {
      let date = objArray[y].dueDate;
      let task = objArray[y].task;

      if (sortedDate === date) {
        sortedTasks.push(task);
      }
    }
  }
  return sortedTasks;
}




/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementBuilder": () => (/* binding */ elementBuilder),
/* harmony export */   "getPosition": () => (/* binding */ getPosition),
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "projectDiv": () => (/* binding */ projectDiv),
/* harmony export */   "toggleHide": () => (/* binding */ toggleHide)
/* harmony export */ });
function elementBuilder(element, classLabel, parentName) {
  let item = document.createElement(element);
  item.classList.add(classLabel);
  parentName.appendChild(item);
  return item;
}

const getPosition = (projectElement) => {
  let projectDiv = projectElement.parentNode;
  let projectElements = projectDiv.children;
  let projectElementArray = Array.from(projectElements);
  let projectIndex = projectElementArray.indexOf(projectElement);
  return projectIndex;
};

let body = document.getElementsByTagName("body")[0];

let projectDiv = elementBuilder("div", "project-container", body);

function toggleHide(element) {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}




/***/ }),

/***/ "./src/modules/objectBuilder.js":
/*!**************************************!*\
  !*** ./src/modules/objectBuilder.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "toDo": () => (/* binding */ toDo),
/* harmony export */   "projectTracker": () => (/* binding */ projectTracker),
/* harmony export */   "createDefaultProj": () => (/* binding */ createDefaultProj)
/* harmony export */ });
const project = (title, description, taskArray) => {
  return { title, description, taskArray };
};

const toDo = (
  title,
  project,
  description,
  enteredDate,
  dueDate,
  priority,
  notes,
  status
) => {
  return {
    title,
    project,
    description,
    enteredDate,
    dueDate,
    priority,
    notes,
    status,
  };
};

const projectTracker = () => {
  let masterList = [];
  let projectList = []
  return { masterList, projectList };
};

function createDefaultProj() {
  const defaultProject = project(
    "New Project",
    "Add a task below and start tracking your project!",
    []
  );
  return defaultProject
}




/***/ }),

/***/ "./src/modules/projectCreator.js":
/*!***************************************!*\
  !*** ./src/modules/projectCreator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectHeader": () => (/* reexport safe */ _taskElements__WEBPACK_IMPORTED_MODULE_3__.projectHeader),
/* harmony export */   "projectBuilder": () => (/* reexport safe */ _taskElements__WEBPACK_IMPORTED_MODULE_3__.projectBuilder),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addEnterEvent": () => (/* binding */ addEnterEvent)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _objectBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectBuilder */ "./src/modules/objectBuilder.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ "./src/modules/elements.js");
/* harmony import */ var _taskElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskElements */ "./src/modules/taskElements.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons */ "./src/modules/buttons.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar */ "./src/modules/sidebar.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation */ "./src/modules/validation.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./src/modules/store.js");
/* eslint-disable no-unused-vars */









let fetchedList = (0,_store__WEBPACK_IMPORTED_MODULE_7__.checkList)()

function newInput(
  parent,
  promptType,
  divClass,
  labelClass,
  labelContent,
  inputClass,
  placeholder,
  inputId,
  nameAt
) {
  let newDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", promptType, parent);
  newDiv.classList.add(divClass);
  let divLabel = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("label", labelClass, newDiv);
  divLabel.textContent = labelContent;
  let divInput = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("input", inputClass, newDiv);
  divInput.setAttribute("placeholder", placeholder);
  divInput.id = inputId;
  divInput.setAttribute("name", nameAt);
  return newDiv;
}

function addEnterEvent(prompt, create, closePrompt) {
  prompt.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      create();
      closePrompt();
    };
  }, false);

  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      closePrompt();
    };
  }, false);
};

const addTask = (set) => {
  let project = JSON.stringify(set.project);
  let projectElement = set.projectElement;

  const taskPrompt = (() => {
    let prompt = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", "task-prompt", _elements__WEBPACK_IMPORTED_MODULE_2__.body);

    let promptHead = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("h3", "prompt-head", prompt);
    promptHead.textContent = "Create a Task";

    let titleDiv = newInput(
      prompt,
      "new-task",
      "title-div",
      "name-label",
      "Task: ",
      "title-input",
      "Enter a Task!",
      "title",
      "title"
    );

    let descDiv = newInput(
      prompt,
      "new-task",
      "description-div",
      "desc-label",
      "Description: ",
      "desc-input",
      "Write a brief description.",
      "description",
      "desc"
    );

    let dueDiv = newInput(
      prompt,
      "new-task",
      "due-div",
      "due-label",
      "Due Date: ",
      "due-input",
      "MM/DD/YYYY",
      "due",
      "due"
    );

    let priorityDiv = newInput(
      prompt,
      "new-task",
      "priority-div",
      "priority-label",
      "Priority: ",
      "priority-input",
      "Enter a number 1-5",
      "priority",
      "priority"
    );

    let notesDiv = newInput(
      prompt,
      "new-task",
      "notes-div",
      "notes-label",
      "Notes: ",
      "notes-input",
      "Write your notes here.",
      "notes",
      "notes"
    );

    let children = _elements__WEBPACK_IMPORTED_MODULE_2__.body.children;
    (0,_buttons__WEBPACK_IMPORTED_MODULE_4__.addTransparent)(children);

    let buttonDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", "create-task-buttons", prompt);

    let createButton = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "create-task", buttonDiv);
    createButton.textContent = "Create Task";

    let cancelButton = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "cancel", buttonDiv);
    cancelButton.textContent = "Cancel";
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_5__.themeCheck)();

    function exit() {
      (0,_buttons__WEBPACK_IMPORTED_MODULE_4__.removeTransparent)(children);
      prompt.remove();
      let buttonDiv = (Array.from(set.projectElement.children))[0];
      let addButton = buttonDiv.firstChild;
      addButton.addEventListener("click", addTask);
    };

    cancelButton.addEventListener("click", exit);

    function createTask() {
      let title = document.getElementById("title").value;
      let titlePair = [title, titleDiv];
      let description = document.getElementById("description").value;
      let enteredDate = document.getElementById("due").value;
      let datePair = [enteredDate, dueDiv];
      let priority = document.getElementById("priority").value;
      let priorityPair = [priority, priorityDiv];
      let notes = document.getElementById("notes").value;
      let status = "In Progress";
      let obj = { titlePair, datePair, priorityPair };

      let validArray = (0,_validation__WEBPACK_IMPORTED_MODULE_6__.validation)(obj);
      let isValid = validArray[0];

      if (isValid) {
        let dueDate = validArray[1];
        let newTask = (0,_objectBuilder__WEBPACK_IMPORTED_MODULE_1__.toDo)(
          title,
          project,
          description,
          enteredDate,
          dueDate,
          priority,
          notes,
          status
        );

        let fetchedList = (0,_store__WEBPACK_IMPORTED_MODULE_7__.checkList)();
        
        for (let i = 0; i < fetchedList.length; i++) {
          if (fetchedList[i].title === set.project.title) {
            let fetchedproject = fetchedList[i];
            fetchedproject.taskArray.unshift(newTask);
            fetchedList.splice(i, 1);
            fetchedList.unshift(fetchedproject);
            (0,_store__WEBPACK_IMPORTED_MODULE_7__.store)(fetchedList);
            (0,_sidebar__WEBPACK_IMPORTED_MODULE_5__.notif)(newTask);

            let taskElements = (0,_taskElements__WEBPACK_IMPORTED_MODULE_3__.taskBuilder)(newTask, projectElement);
            let projectIndex = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.getPosition)(projectElement);
            projectElement.remove();
            let updatedProject = (0,_taskElements__WEBPACK_IMPORTED_MODULE_3__.projectBuilder)(fetchedproject);

            _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.masterList.push(updatedProject);
            _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.insertBefore(
              updatedProject.projectElement,
              _elements__WEBPACK_IMPORTED_MODULE_2__.projectDiv.children[projectIndex]
            );
            (0,_buttons__WEBPACK_IMPORTED_MODULE_4__.taskButtons)(updatedProject);

            (0,_sidebar__WEBPACK_IMPORTED_MODULE_5__.themeCheck)();
            exit();
          };
        };
      } else {
        createButton.addEventListener("click", createTask);
      }
    }
    createButton.addEventListener("click", createTask);
    addEnterEvent(prompt, createTask, exit);
  })();
};

const addProject = () => {
  const projectPrompt = (() => {
    let prompt = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", "project-prompt", _elements__WEBPACK_IMPORTED_MODULE_2__.body);

    let promptHead = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("h3", "prompt-head", prompt);
    promptHead.textContent = "Start a New Project";

    let titleDiv = newInput(
      prompt,
      "new-task",
      "title-div",
      "name-label",
      "Project: ",
      "title-input",
      "Enter a title for your new project.",
      "project-title",
      "title"
    );
    let descDiv = newInput(
      prompt,
      "new-task",
      "description-div",
      "desc-label",
      "Description: ",
      "desc-input",
      "Include a brief description.",
      "project-description",
      "desc"
    );

    let children = _elements__WEBPACK_IMPORTED_MODULE_2__.body.children;
    (0,_buttons__WEBPACK_IMPORTED_MODULE_4__.addTransparent)(children);

    let buttonDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("div", "create-task-buttons", prompt);

    let createButton = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "create-task", buttonDiv);
    createButton.textContent = "Create Project";

    let cancelButton = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.elementBuilder)("button", "cancel", buttonDiv);
    cancelButton.textContent = "Cancel";
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_5__.themeCheck)();

    function exit() {
      (0,_buttons__WEBPACK_IMPORTED_MODULE_4__.removeTransparent)(children);
      prompt.remove();
      _sidebar__WEBPACK_IMPORTED_MODULE_5__.sidebar.newProject.addEventListener("click", addProject);
    }

    cancelButton.addEventListener("click", exit);

    function createProject() {
      let title = document.getElementById("project-title").value;
      let titlePair = [title, titleDiv];
      let description = document.getElementById("project-description").value;
      let obj = { titlePair };

      let isValid = (0,_validation__WEBPACK_IMPORTED_MODULE_6__.validateProj)(obj);

      if (isValid) {
        let newProject = (0,_objectBuilder__WEBPACK_IMPORTED_MODULE_1__.project)(title, description, []);
        fetchedList.unshift(newProject);
        (0,_store__WEBPACK_IMPORTED_MODULE_7__.store)(fetchedList);
        let projectSet = (0,_taskElements__WEBPACK_IMPORTED_MODULE_3__.projectBuilder)(newProject);
        (0,_buttons__WEBPACK_IMPORTED_MODULE_4__.taskButtons)(projectSet);
        _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.masterList.push(projectSet);
        (0,_sidebar__WEBPACK_IMPORTED_MODULE_5__.themeCheck)();

        exit();
      } else {
        createButton.addEventListener("click", createProject);
      };
    };
    createButton.addEventListener("click", createProject);
    addEnterEvent(prompt, createProject, exit);
  })();
};




/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebar": () => (/* binding */ sidebar),
/* harmony export */   "notif": () => (/* binding */ notif),
/* harmony export */   "themeCheck": () => (/* binding */ themeCheck),
/* harmony export */   "notifButton": () => (/* binding */ notifButton),
/* harmony export */   "addProjects": () => (/* binding */ addProjects),
/* harmony export */   "addNoNotifMessage": () => (/* binding */ addNoNotifMessage)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/modules/elements.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ "./src/modules/date.js");
/* harmony import */ var _tips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tips */ "./src/modules/tips.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themes */ "./src/modules/themes.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/modules/store.js");
/* harmony import */ var _projectCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectCreator */ "./src/modules/projectCreator.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons */ "./src/modules/buttons.js");
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */









const mobileView = window.matchMedia("(max-width: 1100px)");

function removeListElements(notifBar) {
  let barElements = Array.from(notifBar.children)
  for (let i = 0; i < barElements.length; i++) {
    let element = barElements[i];
    element.remove();
  };
};

function removeAllProjects() {
  let projects = document.getElementsByClassName("project-container")[0]
  let projChildren = Array.from(projects.children);
  for (let y = 0; y < projChildren.length; y++) {
    projChildren[y].remove()
  };
};

function addNoNotifMessage() {
  let notifBar = document.getElementsByClassName("notif-bar")[0];
  let notifs = Array.from(notifBar.children);
  if (notifs.length === 0) {
    let noNotif = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "notif", notifBar);
    noNotif.textContent = "No New Notifications"
    noNotif.id = "no-notif"
  };
};

function addProjects(notifBar) {
  let fetchedList = (0,_store__WEBPACK_IMPORTED_MODULE_4__.checkList)();

  for (let i = 0; i < fetchedList.length; i++) {
    let project = fetchedList[i];
    let projContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "proj-container", notifBar);
    let projTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "proj-title", projContainer);
    projTitle.textContent = project.title;

    function showThisProj() {
      removeAllProjects()
      let newProjSet = (0,_projectCreator__WEBPACK_IMPORTED_MODULE_5__.projectBuilder)(project);
      let tasks = project.taskArray;
      (0,_buttons__WEBPACK_IMPORTED_MODULE_6__.applyButtons)([newProjSet]);
      (0,_store__WEBPACK_IMPORTED_MODULE_4__.getTheme)();

      if (mobileView.matches) {
        newProjSet.projectElement.style.width = "100%";
      } else {
        newProjSet.projectElement.style.width = "30%";
      };
    };

    projContainer.addEventListener("click", showThisProj)
  };
};

const sidebar = (() => {
  const element = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "sidebar", _elements__WEBPACK_IMPORTED_MODULE_0__.body);

  const minSideBarButton = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "min-sidebar-button", element);
  minSideBarButton.textContent = "-"

  let projectContainer = document.getElementsByClassName("project-container")[0];
  
  function maximizeSidebar() {
    element.classList.remove("min-sidebar");
    minSideBarButton.textContent = "-";

    if (mobileView.matches) {
      projectContainer.style.left = "0";
      projectContainer.style.width = "98%";
      barContainer.style.margin = "5% 0 15% 0"
    } else {
      projectContainer.style.left = "7.5%";
      projectContainer.style.width = "85%";
    }

    minSideBarButton.style.alignSelf = null;
    minSideBarButton.style.margin = null;
    minSideBarButton.style.paddingBottom = "0";
    minSideBarButton.addEventListener("click", minimizeSideBar)
  };

  function minimizeSideBar() {
    element.classList.add("min-sidebar");
    projectContainer.style.left = "0";
    projectContainer.style.width = "98%";
    minSideBarButton.textContent = "□";

    if (mobileView.matches) {
      minSideBarButton.style.alignSelf = "flex-end";
      minSideBarButton.style.margin = null;
      barContainer.style.margin = "0";
    } else {
      minSideBarButton.style.alignSelf = "center";
      minSideBarButton.style.margin = "15% 0";
    }
    minSideBarButton.style.paddingBottom = "5px";
    minSideBarButton.removeEventListener("click", minimizeSideBar);
    minSideBarButton.addEventListener("click", maximizeSidebar);
  }
  minSideBarButton.addEventListener("click", minimizeSideBar)

  const headContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "head-container", element);
  const head = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("h1", "sidebar-head", headContainer);
  head.textContent = "OnTask";

  const sideButtons = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)(
    "div",
    "side-button-container",
    headContainer
  );

  const newProject = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("button", "side-buttons", sideButtons);
  newProject.textContent = "New Project";
  newProject.id = "new-project";

  const changeView = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("button", "side-buttons", sideButtons);
  changeView.id = "view-button";
  changeView.textContent = "Change View";

  const barContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "bar-container", element);
  const notifHeadContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)(
    "div",
    "notif-head-container",
    barContainer
  );
  const showNotifs = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "notif-button", notifHeadContainer);
  showNotifs.textContent = "N";

  const showProjects = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)(
    "div",
    "notif-button",
    notifHeadContainer
  );

  const showThemes = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "notif-button", notifHeadContainer);
  showThemes.textContent = "T"
  showProjects.textContent = "P";
  showProjects.classList.add("show-projects")

  const notifBar = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "notif-bar", barContainer);
  notifBar.classList.add("new-notifications");

  function generateNotifs() {
    if (notifBar.classList.contains("themes")) {
      notifBar.classList.remove("themes");
    } else if (notifBar.classList.contains("projects")) {
      notifBar.classList.remove("projects");
    };

    notifBar.classList.add("new-notifications");

    removeListElements(notifBar)
    let fetchedList = (0,_store__WEBPACK_IMPORTED_MODULE_4__.checkList)();

    for (let i = 0; i < fetchedList.length; i++) {
      let project = fetchedList[i];
      let tasks = project.taskArray;
      for (let y = 0; y < tasks.length; y++) {
        notif(tasks[y]);
      };
    };
    let notifNum = document.getElementsByClassName("notif-num")[0];
    if (notifNum) {
      notifNum.remove();
    }
    addNoNotifMessage()
    ;(0,_store__WEBPACK_IMPORTED_MODULE_4__.getTheme)();
  };

  showNotifs.addEventListener("click", generateNotifs);

  function populateProjects() {
    if (notifBar.classList.contains("themes")) {
      notifBar.classList.remove("themes");
    } else if (notifBar.classList.contains("new-notifications")) {
      notifBar.classList.remove("new-notifications");
    };
    notifBar.classList.add("projects");
    removeListElements(notifBar);
    addProjects(notifBar);

    if (!(document.getElementsByClassName("see-all-proj")[0])) {
      let seeAllProj = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "see-all-proj", notifBar);
      seeAllProj.textContent = "See All Projects";
  
      function showAllProjects() {
        removeAllProjects();
        let fetchedList = (0,_store__WEBPACK_IMPORTED_MODULE_4__.checkList)();
        for (let i = 0; i < fetchedList.length; i++) {
          let project = fetchedList[i];
          let newProjSet = (0,_projectCreator__WEBPACK_IMPORTED_MODULE_5__.projectBuilder)(project);
          let tasks = project.taskArray;
          (0,_buttons__WEBPACK_IMPORTED_MODULE_6__.applyButtons)([newProjSet]);
        };
        (0,_store__WEBPACK_IMPORTED_MODULE_4__.getTheme)();
      };
      seeAllProj.addEventListener("click", showAllProjects);
    };
    
    function newNotifs() {
      checkNotifs();
    };
    showNotifs.addEventListener("click", newNotifs);
  };

  showProjects.addEventListener("click", populateProjects);

  function themeOptions() {
    if (notifBar.classList.contains("projects")) {
      notifBar.classList.remove("projects");
    } else if (notifBar.classList.contains("new-notifications")) {
      notifBar.classList.remove("new-notifications");
    };
    notifBar.classList.add("themes");
    removeListElements(notifBar)
    ;(0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("ul", "themes-list", notifBar);
    (0,_themes__WEBPACK_IMPORTED_MODULE_3__.themes)();
  }

  showThemes.addEventListener("click", themeOptions);
  notifButton();

  const tipsContainer = document.createElement("div")
  tipsContainer.classList.add("tips-container");

  if (mobileView.matches) {
    _elements__WEBPACK_IMPORTED_MODULE_0__.body.appendChild(tipsContainer);
    const tipHead = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("h3", "tip-head", tipsContainer);
    tipHead.textContent = "Productivity Tips"

    const tipContent = document.createElement("div");
    tipContent.classList.add("tip");
    const tip = (0,_tips__WEBPACK_IMPORTED_MODULE_2__.randomGenerator)(_tips__WEBPACK_IMPORTED_MODULE_2__.tips);
    tipContent.textContent = tip;
    tipsContainer.appendChild(tipContent);
  } else {
    element.appendChild(tipsContainer);

    tipsContainer.classList.add("min-tips");
    const tipHead = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("h3", "tip-head", tipsContainer);
    tipHead.textContent = "Productivity Tips"
  
    const minTipsButton = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "min-tips-button", tipsContainer);
    minTipsButton.textContent = "□"
  
    function maximize() {
      tipsContainer.classList.remove("min-tips");
      minTipsButton.textContent = "-";
      minTipsButton.removeEventListener("click", maximize);
      minTipsButton.addEventListener("click", minimize);
    };
  
    function minimize() {
      tipsContainer.classList.add("min-tips");
      minTipsButton.textContent = "□";
      minTipsButton.addEventListener("click", maximize);
    };
  
    minTipsButton.addEventListener("click", maximize);
  
    const tipContent = document.createElement("div");
    tipContent.classList.add("tip");
    const tip = (0,_tips__WEBPACK_IMPORTED_MODULE_2__.randomGenerator)(_tips__WEBPACK_IMPORTED_MODULE_2__.tips);
    tipContent.textContent = tip;
    tipsContainer.appendChild(tipContent);
  };

  return {
    element,
    newProject,
    changeView,
    notifBar,
    showNotifs,
    notifHeadContainer,
    tipsContainer,
    populateProjects,
  };
})();

function notifNum() {
  let notifs = document.getElementsByClassName("notif");
  for (let i = 0; i < notifs.length; i++) {
    if (notifs[i].id !== "no-notif") {
      let num = notifs.length;
      let previousNotifs = document.getElementsByClassName("notif-num")[0];
      if (previousNotifs !== undefined) {
        previousNotifs.remove();
      }
      if (num > 0) {
        let newNotifs = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)(
          "div",
          "notif-num",
          sidebar.notifHeadContainer
        );
        newNotifs.textContent = num;
      }
    }
  }
}

function noNotifChecker() {
  let notif = document.getElementById("no-notif");
  if (notif) {
    let notifContainer = Array.from(sidebar.notifBar.children)[0];
    notifContainer.remove();
  }
}

function deadlineNotif(task) {
  let deadlineMessage = (0,_date__WEBPACK_IMPORTED_MODULE_1__.deadline)(task.enteredDate);

  if (
    deadlineMessage.indexOf("day") > 0 ||
    deadlineMessage.indexOf("hours") > 0
  ) {
    if (sidebar.notifBar.children.length < 7) {
      let newContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)(
        "div",
        "notif-container",
        sidebar.notifBar
      );
      let newNotif = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "notif", newContainer);
      newNotif.id = "deadline";
      let notifTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "notif-title", newNotif);
      notifTitle.style.fontWeight = "bold";
      notifTitle.textContent = `${task.title}: `
      let notifDate = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "notif-date", newNotif);
      notifDate.textContent =  `${deadlineMessage}`;
      noNotifChecker();
      return deadlineMessage;
    };
  } else {
    "No New Notifications";
  };
}

function notifButton() {
  let notifs = document.getElementsByClassName("notif");
  for (let i = 0; i < notifs.length; i++) {
    let notif = notifs[i];
    let parent = notif.parentNode;
    if (notif.parentNode.children.length === 1 && notif.id !== "no-notif") {
      let button = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "remove-notif", parent);
      button.textContent = "X";
      function removeNotif() {
        parent.remove();
        let previousNotif = document.getElementsByClassName("notif-num")[0];
        if (previousNotif !== undefined) {
          notifNum();
        }
        if (notifs.length === 0) {
          const newNotifContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)(
            "div",
            "notif-container",
            sidebar.notifBar
          );
          newNotifContainer.id = "none";
          const noNotif = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("p", "notif", newNotifContainer);
          noNotif.id = "no-notif";
          noNotif.textContent = "No New Notifications";
          previousNotif.remove();
        }
      }
      button.addEventListener("click", removeNotif);
    }
  }
}

function checkNotifs() {
  if (sidebar.notifBar.children.length > 0) {
    if (sidebar.notifBar.classList.contains("hidden")) {
      (0,_elements__WEBPACK_IMPORTED_MODULE_0__.toggleHide)(sidebar.notifBar);
    }
  }
}

function notif(newTask) {
  if (sidebar.notifBar.classList.contains("new-notifications")) {
    deadlineNotif(newTask);
    notifButton();
    checkNotifs();
    notifNum();
  };
};

function themeCheck() {
  let color = sidebar.element.id;
  let comp = sidebar.tipsContainer.id;
  (0,_themes__WEBPACK_IMPORTED_MODULE_3__.setTheme)(color, comp)
}




/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store),
/* harmony export */   "checkList": () => (/* binding */ checkList),
/* harmony export */   "getTheme": () => (/* binding */ getTheme),
/* harmony export */   "updateTask": () => (/* binding */ updateTask)
/* harmony export */ });
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes */ "./src/modules/themes.js");


const store = (projList) => {
    const newArray = JSON.stringify(projList);
    localStorage.setItem("newArray", newArray);
}

const checkList = () => {
    let fetchedList = JSON.parse(localStorage.getItem("newArray"));
    if (fetchedList === null) {
        return []
    } else { return fetchedList }
}

const getTheme = () => {
    let themePair = JSON.parse(localStorage.getItem("theme"))
    if (themePair !== undefined) {
        (0,_themes__WEBPACK_IMPORTED_MODULE_0__.setTheme)(themePair[0], themePair[1])
    };
};

const updateTask = (thisTask) => {
    let projList = checkList()
    for (let i = 0; i < projList.length; i++) {
        let project = projList[i];
        let tasks = project.taskArray;
        for (let y = 0; y < tasks.length; y++) {
            console.log(tasks[y].title)
            if (tasks[y].title === thisTask.title) {
                tasks[y].status = thisTask.status
                store(projList);
                break
            };
        };
    };
};



/***/ }),

/***/ "./src/modules/taskElements.js":
/*!*************************************!*\
  !*** ./src/modules/taskElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskBuilder": () => (/* binding */ taskBuilder),
/* harmony export */   "projectBuilder": () => (/* binding */ projectBuilder)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/modules/elements.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/modules/store.js");



const taskBuilder = (task, parent) => {
  let taskDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "task", parent);
  let topDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "top-div", taskDiv);
  let removeTask = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "remove-task", topDiv);
  removeTask.textContent = "X";
  let head = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("h3", "task-head", topDiv);
  head.textContent = task.title;
  let desc = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("p", "task-desc", taskDiv);
  desc.textContent = task.description;
  let dueDate = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("p", "due-date", taskDiv);
  dueDate.textContent = `Due Date: ${task.dueDate}`;
  let priorityNum = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("p", "priority", taskDiv);
  priorityNum.textContent = `Priority: ${task.priority}`;
  let notes = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("p", "notes", taskDiv);
  notes.textContent = task.notes;
  let statusContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "status-container", taskDiv);
  let status = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("label", "status", statusContainer);
  status.setAttribute("for", "task status");
  status.textContent = `Status: ${task.status}`;
  let statusBox = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("input", "status-box", statusContainer);
  statusBox.setAttribute("type", "checkbox");
  
  if (task.status === "Complete") {
    statusBox.checked = true;
  }
  
  statusBox.addEventListener('change', function() {
    if (statusBox.checked) {
      task.status = 'Complete';
      (0,_store__WEBPACK_IMPORTED_MODULE_1__.updateTask)(task)
      status.textContent = `Status: ${task.status}`;
    } else {
      task.status = 'In Progress'
      ;(0,_store__WEBPACK_IMPORTED_MODULE_1__.updateTask)(task)
      status.textContent = `Status: ${task.status}`;
    }
  });

  return {
    taskDiv,
    topDiv,
    removeTask,
    head,
    desc,
    dueDate,
    priorityNum,
    notes,
    status,
    statusBox,
  };
};

const projectHeader = (project, parent) => {
  let projectElement = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "project", parent);
  parent.prepend(projectElement);

  let projectHead = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("h2", "project-head", projectElement);
  projectHead.textContent = project.title;

  let projectDesc = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "project-desc", projectElement);
  projectDesc.textContent = project.description;

  return projectElement;
};

const projectBuilder = (project) => {
  let projectElement = projectHeader(project, _elements__WEBPACK_IMPORTED_MODULE_0__.projectDiv);

  for (let i = 0; i < project.taskArray.length; i++) {
    let task = project.taskArray[i];
    taskBuilder(task, projectElement);
  }

  const deleteList = () => {
    projectElement.remove();
  };

  const removeTask = (task) => {
    for (let i = 0; i < project.taskArray.length; i++) {
      if (task === project.taskArray[i]) {
        project.taskArray.splice(i, 1);
      }
    }

    return project.taskArray;
  };

  const sortByPriority = () => {
    let sortedArray = project.taskArray.sort(
      (firstItem, secondItem) => firstItem.priority - secondItem.priority
    );
    return sortedArray;
  };

  const minTasks = () => {
    let projectChildren = Array.from(projectElement.children);
    for (let i = 0; i < projectChildren.length; i++) {
      if (projectChildren[i].classList.contains("task")) {
        let taskElement = projectChildren[i];
        taskElement.classList.add("min");
        let taskChildren = Array.from(taskElement.children);
        for (let y = 0; y < taskChildren.length; y++) {
          if (y === 1 || y === 3 || y === 4 || y === 5) {
            taskChildren[y].remove();
          }
        }
      }
    }
  };

  const maxTasks = () => {
    let projectChildren = Array.from(projectElement.children);
    for (let i = 0; i < projectChildren.length; i++) {
      let taskElement = projectChildren[i];
      taskElement.classList.remove("min");
      taskElement.remove();
      taskBuilder(project.taskArray[i], projectElement);
    }
  };
  return {
    projectElement,
    project,
    removeTask,
    sortByPriority,
    deleteList,
    minTasks,
    maxTasks,
  };
};




/***/ }),

/***/ "./src/modules/themes.js":
/*!*******************************!*\
  !*** ./src/modules/themes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "themes": () => (/* binding */ themes),
/* harmony export */   "setTheme": () => (/* binding */ setTheme)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/modules/elements.js");
/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */


const mobileView = window.matchMedia("(max-width: 1100px)");

const themes = () => {
    let themes = {
        "Emerald": "#50C878", 
        "Artic": "#C6DAE9",
        "Ruby": "#E4417F",
        "Purple": "#BB54CE;",
        "Classic": "#82C1F8",
      };
    
      let themeMap = new Map();
      let themeArray = []
      let colorArray = []

      let themesList = document.getElementsByClassName("themes-list")[0];
    
      for (let key in themes) {
        let theme = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("li", "theme-option", themesList);
        let themeText = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "theme-text", theme);
        themeArray.push(theme)
        let colorString = `${key}`;
        themeText.textContent = colorString
        let colorElement = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)("div", "color", theme);
        colorElement.setAttribute("style", `background-color: ${themes[key]};`)
        let color = colorString.charAt(0).toLowerCase() + colorString.slice(1);
        let comp = color + "Comp"
        let colorPair = { color, comp }
        colorArray.push(colorPair)
      }
    
      for(let i = 0; i < themeArray.length; i++){ 
        themeMap.set(themeArray[i], colorArray[i]); 
      }
    
      for (let [themeElement, colorPair] of themeMap.entries()) {
        let color = colorPair[Object.keys(colorPair)[0]];
        let comp = colorPair[Object.keys(colorPair)[1]];
        function newTheme() {
          setTheme(color, comp);
        }      
        themeElement.addEventListener("click", newTheme);
      };
}

function setTheme(color, comp) {
    let projects = document.getElementsByClassName('project');
    let taskElements = document.getElementsByClassName("task");
    let sidebarElement = document.getElementsByClassName('sidebar')[0];
    let sideButtonContainer = document.getElementsByClassName('side-button-container')[0];
    let notifButtons = document.getElementsByClassName('notif-button');
    let notifBar = document.getElementsByClassName('notif-bar')[0];
    let notifContainer = document.getElementsByClassName('notif-container')[0];
    let removeNotifs = document.getElementsByClassName('remove-notif');
    let tipsContainer = sidebarElement.lastChild;
    let buttonElements = document.getElementsByTagName("button");
    let tasks = document.getElementsByClassName("task");
    let projectPrompt = document.getElementsByClassName("project-prompt")[0];
    let taskPrompt = document.getElementsByClassName("task-prompt")[0];
    let warning = document.getElementsByClassName("warning")[0];
    let themeElementArray = [sidebarElement];
    let sidebarMinButton = document.getElementsByClassName("min-sidebar-button")[0];
    let removeTaskElements = document.getElementsByClassName("remove-task");
    let topButtons = document.getElementsByClassName("top-buttons");
  
    if (taskPrompt !== undefined) {
      taskPrompt.id = color;
    }
  
    if (projectPrompt !== undefined) {
      projectPrompt.id = color;
    };
  
    for (let i = 0; i < taskElements.length; i++) {
      taskElements[i].id = comp;
    };
  
    for (let i = 0; i < notifButtons.length; i++) {
      notifButtons[i].id = comp;
    };
  
    for (let i = 0; i < removeNotifs.length; i++) {
      removeNotifs[i].id = comp;
    };
  
    for (let y = 0; y < buttonElements.length; y++) {
      buttonElements[y].id = comp;
    };
  
    for (let y = 0; y < projects.length; y++) {
      themeElementArray.push(projects[y]);
    };
  
    for (let i = 0; i < themeElementArray.length; i++) {
      if (themeElementArray[i] !== undefined) {
        themeElementArray[i].id = color;
      };
    };
  
    if (tasks !== undefined) {
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].id = comp;
      };
    };
  
    if (warning !== undefined) {
      warning.id = color;
    };
  
    sideButtonContainer.id = comp;
    sidebarMinButton.id = comp;
    tipsContainer.id = comp;
    notifBar.id = comp;
    if (notifContainer) {
      notifContainer.id = comp;
    };
    for (let i = 0; i < topButtons.length; i++) {
      topButtons[i].id = comp;
    };
  
    function themeComponents(hexValue) {
      for (let i = 0; i < topButtons.length; i++) {
        topButtons[i].setAttribute("style", `border: solid ${hexValue} 1px;`);
      };
      
      for (let i = 0; i < removeTaskElements.length; i++) {
        removeTaskElements[i].setAttribute("style", `border: solid ${hexValue} 1px;`);
      };
      for (let i = 0; i < projects.length; i++) {
        projects[i].setAttribute("style", `border: solid ${hexValue} 3px;`);
      };
      if (!(mobileView.matches)) {
        sidebarElement.setAttribute("style", `border-right: solid ${hexValue} 3px;`);
      };
      tipsContainer.setAttribute("style", `border: solid ${hexValue} 3px;`);
      if (taskElements !== undefined) {
        for (let i = 0; i < taskElements.length; i++) { 
          taskElements[i].setAttribute("style", `border: solid ${hexValue} 5px;`);
        };
      };
    }; 
  
    const applyAccents = (() => {
      if (color === "classic") {
        themeComponents('#1E67A7'); 
      } else if (color === "emerald") {
        themeComponents('#196B35');
      } else if (color === "artic") {
        themeComponents('#9aaab6');
      } else if (color === "ruby") {
        themeComponents('#910C3F');
      } else if (color === "purple") {
        themeComponents('#800080'); 
      };
    })();
  
    let themePair = JSON.stringify([color, comp]);
    localStorage.setItem("theme", themePair);
};
  


/***/ }),

/***/ "./src/modules/tips.js":
/*!*****************************!*\
  !*** ./src/modules/tips.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomGenerator": () => (/* binding */ randomGenerator),
/* harmony export */   "tips": () => (/* binding */ tips)
/* harmony export */ });
function randomGenerator(tipArray) {
    let tipNum = tipArray.length - 1;
    let num = Math.round(Math.random() * tipNum);
    return tipArray[num];
};
  
let tips = [
    "Avoid eye strain by taking occasional breaks from the screen. Google the 20-20-20 rule.",
    "In order to prevent eye strain, your screen should be at least an arm's length away from your eyes.",
    "Be sure to clean your screen regularly. Smudges may reduce the contrast of your screen and create an irritating glare.",
    "Emails can be a distraction when you're occupied with a task that requires concentration. Set aside time specifically to check your emails.",
    "Chewing gum has been shown to speed up reaction time and improve cognitive abilities.",
    "The Pareto Principle is the idea that roughly 20 percent of your tasks generate an astounding 80 percent of significant outcomes.",
    "People tend to procrastinate when faced with large, complicated projects. You can alleviate this problem by breaking up large projects into smaller, more manageable tasks.",
    "If you find yourself in a productivity rut, a change of setting might help. Try working in a library or a coffee shop for a few hours.",
    "The practice known as mindfulness meditation has been shown to reduce stress by conditioning you to focus on the present moment.",
    "Cultivate good sleep habits to ensure you are ready to face the day head-on. Make sure you are scheduling enough time to get a full eight hours of restful sleep.",
    "Walking is associated with a plethora of physical and psychological benefits. It's been shown to promote cardiac health, alleviate depression and fatigue, and improve your general mood.",
];




/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validation": () => (/* binding */ validation),
/* harmony export */   "validateProj": () => (/* binding */ validateProj)
/* harmony export */ });
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./src/modules/date.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./src/modules/elements.js");



const priorErrorCheck = (parent) => {
  let messageElement = Array.from(parent.children)[2];

  if (messageElement !== undefined) {
    messageElement.remove();
  }
};

const priorityCheck = (value) => {
  if (value <= 5) {
    return true;
  } else {
    return false;
  }
};

const validation = (obj) => {
  const check = [];
  for (let prop in obj) {
    let value = obj[prop][0];
    let element = obj[prop][1];
    priorErrorCheck(element);
    if (value == "") {
      let errorMessage = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.elementBuilder)("p", "invalid", element);
      errorMessage.classList.add("blank");
      errorMessage.textContent = "Please enter a value for this field.";
      check.push(false);
    };
  };
  let dateElement = obj.datePair[1];
  let dueDate = (0,_date__WEBPACK_IMPORTED_MODULE_0__.formatDate)(obj.datePair[0]);
  if (!dueDate) {
    priorErrorCheck(dateElement);
    let errorMessage = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.elementBuilder)("p", "invalid", dateElement);
    errorMessage.classList.add("date");
    errorMessage.textContent = "Please enter a valid date.";
    check.push(false);
  }

  let priorityElement = obj.priorityPair[1];
  if (!priorityCheck(obj.priorityPair[0])) {
    priorErrorCheck(priorityElement);
    let errorMessage = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.elementBuilder)("p", "invalid", priorityElement);
    errorMessage.classList.add("priority-num");
    errorMessage.textContent = "Please enter a number 1-5.";
    check.push(false);
  }

  if (check.length > 0) {
    return false;
  } else {
    return [true, dueDate];
  }
};

const validateProj = (obj) => {
  const check = [];
  for (let prop in obj) {
    let value = obj[prop][0];
    let element = obj[prop][1];
    priorErrorCheck(element);
    if (value == "") {
      let errorMessage = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.elementBuilder)("p", "invalid", element);
      errorMessage.classList.add("blank");
      errorMessage.textContent = "Please enter a value for this field.";
      check.push(false);
    }
  }

  if (check.length > 0) {
    return false;
  } else {
    return true;
  }
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdGQUFnRixZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdB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b0Isc0VBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLGtFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxrRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxnRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxnRUFBaUI7QUFDNUIsR0FBRztBQUNI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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlEQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRW9DOzs7Ozs7O1VDL0VwQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL09uVGFzay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzTGFzdERheU9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1Bhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL09uVGFzay8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL09uVGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL09uVGFzay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9zcmMvbW9kdWxlcy9idXR0b25zLmpzIiwid2VicGFjazovL09uVGFzay8uL3NyYy9tb2R1bGVzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vc3JjL21vZHVsZXMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vc3JjL21vZHVsZXMvb2JqZWN0QnVpbGRlci5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9zcmMvbW9kdWxlcy9wcm9qZWN0Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9zcmMvbW9kdWxlcy9zaWRlYmFyLmpzIiwid2VicGFjazovL09uVGFzay8uL3NyYy9tb2R1bGVzL3N0b3JlLmpzIiwid2VicGFjazovL09uVGFzay8uL3NyYy9tb2R1bGVzL3Rhc2tFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9zcmMvbW9kdWxlcy90aGVtZXMuanMiLCJ3ZWJwYWNrOi8vT25UYXNrLy4vc3JjL21vZHVsZXMvdGlwcy5qcyIsIndlYnBhY2s6Ly9PblRhc2svLi9zcmMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL09uVGFzay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9PblRhc2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vT25UYXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9PblRhc2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9PblRhc2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9PblRhc2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9PblRhc2svd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL09uVGFzay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gIGNvbG9yOiByZ2IoMTg3LCAyMjAsIDI0OCk7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmb250LXNpemU6IDEuMTU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbn1cXG5cXG4ubWluLXNpZGViYXIge1xcbiAgd2lkdGg6IDIlO1xcbn1cXG5cXG4ubWluLXNpZGViYXIgPiAqIHtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5taW4tc2lkZWJhci1idXR0b24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIG1hcmdpbjogMiUgMiU7XFxuICBoZWlnaHQ6IDIycHg7XFxuICB3aWR0aDogMjJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gIGNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubWluLXNpZGViYXIgLm1pbi1zaWRlYmFyLWJ1dHRvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uaGVhZC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAzLjUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnNpZGViYXItaGVhZCB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuMzNlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuMzNlbTtcXG59XFxuXFxuLnNpZGUtYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogODUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgcGFkZGluZzogNSU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5iYXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogOTUlO1xcbn1cXG5cXG4ubm90aWYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXG59XFxuXFxuLm5vdGlmLXRpdGxlIHtcXG4gIG1hcmdpbjogMCA3LjUlIDAgMDtcXG4gIHdpZHRoOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubm90aWYtZGF0ZSB7XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4ubm90aWYtaGVhZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDAgMyU7XFxufVxcblxcbi5ub3RpZi1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLnNob3ctcHJvamVjdHMge1xcbiAgbWFyZ2luOiAwIDIlO1xcbn1cXG5cXG4ucHJvai1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA5NSU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcbiAgcGFkZGluZy10b3A6IDIlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvai10aXRsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDUlO1xcbn1cXG5cXG4uc2VlLWFsbC1wcm9qIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZy10b3A6IDIlO1xcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5ub3RpZi1udW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcmlnaHQ6IDY3JTtcXG4gIHRvcDogMjVweDtcXG4gIHotaW5kZXg6IDQ7XFxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ3LCAxNDksIDApO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxODBkZWcsXFxuICAgIHJnYigyNDUsIDIwMiwgNTkpIDAlLFxcbiAgICByZ2JhKDI0NywgMTQ5LCAwLCAxKSAxMDAlXFxuICApO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIHBhZGRpbmc6IDFweCAxcHggMXB4IDFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbn1cXG5cXG4ubWluaW1pemUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4ubm90aWYtaGVhZC1jb250YWluZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46IDAgMi41JTtcXG59XFxuXFxuLm5vdGlmLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gICAgY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuXFxuLm5vdGlmLWJhciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAxJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICAgIGNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1hcmdpbjogNXB4IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5ub3RpZi1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0NCwgNTEpO1xcbn1cXG5cXG4ucHJvai1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0NCwgNTEpO1xcbn1cXG5cXG4ucmVtb3ZlLW5vdGlmIHtcXG4gIG1hcmdpbjogMiUgMiUgNyUgMiU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICBjb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4ubm90aWYge1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IC4yNWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAuMjVlbTtcXG4gICAgZm9udC1zaXplOiAuOTBlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jbm8tbm90aWYge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG4udGlwcy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogNDtcXG59XFxuXFxuLm1pbi10aXBzIHtcXG4gIGhlaWdodDogNSU7XFxufVxcblxcbi5taW4tdGlwcyAudGlwLWhlYWQgIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuNWVtO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogLjEwZW07XFxufVxcblxcbi5taW4tdGlwcyAudGlwIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRpcC1oZWFkIHtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogLjVlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IC4yNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWluLXRpcHMtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDI1cHg7XFxuICBsZWZ0OiA4NyU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5taW4tdGlwcy1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0NCwgNTEpO1xcbn1cXG5cXG4udGlwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMTVweDtcXG4gIHBhZGRpbmctaW5saW5lOiAzJTtcXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDcuNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgYm9yZGVyOiBzb2xpZCAjMUU2N0E3IDNweDtcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjc1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgYm94LXNoYWRvdzogNXB4IDJweCAycHggcmdiKDAsIDQ4LCA4Nyk7XFxufVxcblxcbi5wcm9qZWN0LWhlYWQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjIHtcXG4gIHBhZGRpbmctbGVmdDogMi41JTtcXG4gIG1hcmdpbjogMiUgMDtcXG59XFxuXFxuLnRhc2sge1xcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzFFNjdBNztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gIGNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICB3aWR0aDogODclO1xcbiAgcGFkZGluZzogNSU7XFxuICBwYWRkaW5nLWJvdHRvbTogNCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY29tcGFjdCB7XFxuICBwYWRkaW5nLXRvcDogNCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNCU7XFxufVxcblxcbi5jb21wYWN0IHAge1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogLjI1ZW07XFxufVxcblxcbi5jb21wYWN0IC50b3AtZGl2IHtcXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcXG59XFxuXFxuLm1pbiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuLm1pbiBwIHtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG59XFxuXFxuLnRvcC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b3AtYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDc4JTtcXG4gIHdpZHRoOiAyMiU7XFxuICBtYXJnaW46IDMlIDA7XFxufVxcblxcbi50b3AtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICBjb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgZm9udC1zaXplOiAxLjE1ZW07XFxufVxcblxcbi50YXNrLWhlYWQge1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuMjVlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IC4yNWVtO1xcbn1cXG5cXG4ubWluLWJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDI1cHg7XFxufVxcblxcbi50YXNrIHAge1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuMjVlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IC41ZW07XFxufVxcblxcbi5yZW1vdmUtdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3JkZXI6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnV0dG9uLWRpdiB7XFxuICBtYXJnaW46IDEwcHggMCAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5idXR0b24tZGl2IGJ1dHRvbiB7XFxuICBmb250LXNpemU6IC44NWVtO1xcbn1cXG5cXG4uc3RhdHVzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc3RhdHVzLWJveCB7XFxuICB3aWR0aDogNSU7XFxufVxcblxcbi50YXNrLXByb21wdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDI1JTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gIGNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgei1pbmRleDogMTtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pbnZhbGlkIHtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuMjVlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuMjVlbTtcXG4gIGNvbG9yOiByZ2IoMjUxLCAwLCAwKTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnByb2plY3QtcHJvbXB0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMjUlO1xcbiAgcGFkZGluZzogMiU7XFxuICB3aWR0aDogMjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB6LWluZGV4OiAxO1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLndhcm5pbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMjUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMiU7XFxuICB3aWR0aDogMjAlO1xcbn1cXG5cXG4ud2FybmluZy1idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLndhcm5pbmctYnV0dG9ucyB7XFxuICB3aWR0aDogNDUlO1xcbn1cXG5cXG4ucHJvbXB0LWhlYWQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubmV3LXRhc2sge1xcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcbn1cXG5cXG4ubm90ZXMtZGl2IHtcXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcXG59XFxuXFxuLnRyYW5zcGFyZW50IHtcXG4gIG9wYWNpdHk6IDAuMjU7XFxufVxcblxcbi5jcmVhdGUtdGFzay1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDUlIDAlIDAlIDAlO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jcmVhdGUtdGFzayB7XFxuICB3aWR0aDogNDUlO1xcbn1cXG5cXG4uY2FuY2VsIHtcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDElO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFRoZW1lcyAqL1xcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmctdG9wOiAyJTtcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXG59XFxuXFxuLnRoZW1lcy1saXN0IHtcXG4gIHdpZHRoOiA3NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAzJTtcXG4gIHBhZGRpbmctaW5saW5lLWVuZDogMyU7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDUlO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogNSU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50aGVtZS1vcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyLjUlO1xcbn1cXG5cXG4udGhlbWUtb3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDQsIDUxKTtcXG59XFxuXFxuLnByb2otY29udGFpbmVyOmhvdmVyeyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDQsIDUxKTtcXG59XFxuXFxuLmNvbG9yIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHJpZ2h0OiA1JTtcXG4gIGhlaWdodDogMzNweDtcXG4gIHdpZHRoOiAzM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY2xhc3NpYyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpOyBcXG59XFxuXFxuI2NsYXNzaWNDb21wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gIGNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7IFxcbn1cXG5cXG4jY2xhc3NpY0NvbXAgLnRoZW1lLW9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQ0LCA1MSk7XFxufVxcblxcbiNjbGFzc2ljQ29tcCAubWluLXRpcHMtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDQsIDUxKTtcXG59XFxuXFxuI2NsYXNzaWNDb21wIC5ub3RpZi1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0NCwgNTEpO1xcbn1cXG5cXG4jY2xhc3NpY0NvbXAgLnByb2otY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDQsIDUxKTtcXG59XFxuXFxuI2VtZXJhbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwQzg3ODtcXG4gIGNvbG9yOiByZ2IoMTUsIDEsIDEpO1xcbiAgYm94LXNoYWRvdzogNXB4IDJweCAycHggIzAwMzExMGQzO1xcbn1cXG5cXG4jZW1lcmFsZENvbXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxLCAxKTtcXG4gIGNvbG9yOiAjNTBDODc4O1xcbn1cXG5cXG4jZW1lcmFsZENvbXAgLnRoZW1lLW9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYzMzIwO1xcbn1cXG5cXG4jZW1lcmFsZENvbXAgLm5vdGlmLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYzMzIwO1xcbn1cXG5cXG4jZW1lcmFsZENvbXAgLnByb2otY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjMzMjA7XFxufVxcblxcbiNlbWVyYWxkQ29tcCAubWluLXRpcHMtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjMzMjA7XFxufVxcblxcbiNhcnRpYyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzZEQUU5O1xcbiAgY29sb3I6IHJnYigyOSwgODMsIDExOSk7XFxuICBib3gtc2hhZG93OiA1cHggMnB4IDJweCAjNmY3YTgzYTE7XFxufVxcblxcbiNhcnRpY0NvbXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCA4MywgMTE5KTtcXG4gIGNvbG9yOiAjQzZEQUU5O1xcbn1cXG5cXG4jYXJ0aWNDb21wIC50aGVtZS1vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxMTgsIDEzOSk7XFxufVxcblxcbiNhcnRpY0NvbXAgLm5vdGlmLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDExOCwgMTM5KTtcXG59XFxuXFxuI2FydGljQ29tcCAucHJvai1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxMTgsIDEzOSk7XFxufVxcblxcbiNhcnRpY0NvbXAgLm1pbi10aXBzLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDExOCwgMTM5KTtcXG59XFxuXFxuI3J1Ynkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0NDE3ZjtcXG4gIGNvbG9yOiByZ2IoMTksIDE5LCAxOSk7XFxuICBib3gtc2hhZG93OiA1cHggMnB4IDJweCAjNzAwMTJjYjA7XFxufVxcblxcbiNydWJ5Q29tcCB7XFxuICBjb2xvcjogI0UwMTE1RjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG59XFxuXFxuI3J1YnlDb21wIC50aGVtZS1vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTAxZTtcXG59XFxuXFxuI3J1YnlDb21wIC5ub3RpZi1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTAxZTtcXG59XFxuXFxuI3J1YnlDb21wIC5wcm9qLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUxMDFlO1xcbn1cXG5cXG4jcnVieUNvbXAgLm1pbi10aXBzLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUxMDFlO1xcbn1cXG5cXG4jcHVycGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYjU0Y2U7XFxuICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgYm94LXNoYWRvdzogNXB4IDJweCAycHggIzRiMDA1OGQ3O1xcbn1cXG5cXG4jcHVycGxlQ29tcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7IFxcbiAgY29sb3I6ICNiYjU0Y2U7XFxufVxcblxcbiNwdXJwbGVDb21wIC50aGVtZS1vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMDEzMTtcXG59XFxuXFxuI3B1cnBsZUNvbXAgLm5vdGlmLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEwMTMxO1xcbn1cXG5cXG4jcHVycGxlQ29tcCAucHJvai1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMDEzMTtcXG59XFxuXFxuI3B1cnBsZUNvbXAgLm1pbi10aXBzLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEwMTMxO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgYm9keSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3JkZXI6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IHJnYigyNCwgMjgsIDMyKSBzb2xpZCAxMHB4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgfVxcblxcbiAgLmJhci1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDUlIDAgMTUlIDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbnVsbDtcXG4gIH1cXG5cXG4gIC5ub3RpZi1oZWFkLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogLTIlIDcuNSU7XFxufVxcblxcbiAgLm5vdGlmLWJhciB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICB9XFxuXFxuICAucHJvamVjdC1jb250YWluZXIge1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvcmRlcjogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAucHJvamVjdC1wcm9tcHQge1xcbiAgICBwYWRkaW5nLXRvcDogNSU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxuICAucHJvamVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiByZ2IoMjQsIDI4LCAzMikgc29saWQgMTBweDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgcGFkZGluZzogMS41JTtcXG4gIH1cXG5cXG4gIC50YXNrLXByb21wdCB7XFxuICAgIHRvcDogMTAlO1xcbiAgICBwYWRkaW5nLXRvcDogNSU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxuICBpbnB1dCB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxuXFxuICAud2FybmluZyB7XFxuICAgIHdpZHRoOiA4OCU7XFxuICB9XFxuXFxuICAudGhlbWVzLWxpc3Qge1xcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgICB3aWR0aDogNjUlO1xcbiAgfVxcblxcbiAgLnRpcHMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvcmRlcjogMjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLnRpcC1oZWFkIHtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjI1ZW07XFxuXFxuICB9ICAgXFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLE9BQU87SUFDUCxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxTQUFTO0FB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LWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICBjb2xvcjogcmdiKDE4NywgMjIwLCAyNDgpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZm9udC1zaXplOiAxLjE1O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gICAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG59XFxuXFxuLm1pbi1zaWRlYmFyIHtcXG4gIHdpZHRoOiAyJTtcXG59XFxuXFxuLm1pbi1zaWRlYmFyID4gKiB7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4ubWluLXNpZGViYXItYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW46IDIlIDIlO1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgd2lkdGg6IDIycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICBjb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLm1pbi1zaWRlYmFyIC5taW4tc2lkZWJhci1idXR0b24ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmhlYWQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMy41JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5zaWRlYmFyLWhlYWQge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjMzZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiAwLjMzZW07XFxufVxcblxcbi5zaWRlLWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYmFyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLm5vdGlmIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxufVxcblxcbi5ub3RpZi10aXRsZSB7XFxuICBtYXJnaW46IDAgNy41JSAwIDA7XFxuICB3aWR0aDogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm5vdGlmLWRhdGUge1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLm5vdGlmLWhlYWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAwIDMlO1xcbn1cXG5cXG4ubm90aWYtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gIGNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5zaG93LXByb2plY3RzIHtcXG4gIG1hcmdpbjogMCAyJTtcXG59XFxuXFxuLnByb2otY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTUlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXG4gIHBhZGRpbmctdG9wOiAyJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2otdGl0bGUge1xcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXG59XFxuXFxuLnNlZS1hbGwtcHJvaiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctdG9wOiAyJTtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubm90aWYtbnVtIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHJpZ2h0OiA2NyU7XFxuICB0b3A6IDI1cHg7XFxuICB6LWluZGV4OiA0O1xcbiAgY29sb3I6cmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZDogcmdiKDI0NywgMTQ5LCAwKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTgwZGVnLFxcbiAgICByZ2IoMjQ1LCAyMDIsIDU5KSAwJSxcXG4gICAgcmdiYSgyNDcsIDE0OSwgMCwgMSkgMTAwJVxcbiAgKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBwYWRkaW5nOiAxcHggMXB4IDFweCAxcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuXFxuLm1pbmltaXplIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLm5vdGlmLWhlYWQtY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luOiAwIDIuNSU7XFxufVxcblxcbi5ub3RpZi1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICAgIGNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxufVxcblxcbi5ub3RpZi1iYXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgICBjb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgICBwYWRkaW5nLXRvcDogNSU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXJnaW46IDVweCA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDQsIDUxKTtcXG59XFxuXFxuLnByb2otY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDQsIDUxKTtcXG59XFxuXFxuLnJlbW92ZS1ub3RpZiB7XFxuICBtYXJnaW46IDIlIDIlIDclIDIlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMThweDtcXG59XFxuXFxuLm5vdGlmIHtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuMjVlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLjI1ZW07XFxuICAgIGZvbnQtc2l6ZTogLjkwZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI25vLW5vdGlmIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuXFxuLnRpcHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDQ7XFxufVxcblxcbi5taW4tdGlwcyB7XFxuICBoZWlnaHQ6IDUlO1xcbn1cXG5cXG4ubWluLXRpcHMgLnRpcC1oZWFkICB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogLjVlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IC4xMGVtO1xcbn1cXG5cXG4ubWluLXRpcHMgLnRpcCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi50aXAtaGVhZCB7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IC41ZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiAuMjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1pbi10aXBzLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAyNXB4O1xcbiAgbGVmdDogODclO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4ubWluLXRpcHMtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDQsIDUxKTtcXG59XFxuXFxuLnRpcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDE1cHg7XFxuICBwYWRkaW5nLWlubGluZTogMyU7XFxuICBwYWRkaW5nLWJvdHRvbTogMyU7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA3LjUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gIGJvcmRlcjogc29saWQgIzFFNjdBNyAzcHg7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMC43NSU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGJveC1zaGFkb3c6IDVweCAycHggMnB4IHJnYigwLCA0OCwgODcpO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnByb2plY3QtZGVzYyB7XFxuICBwYWRkaW5nLWxlZnQ6IDIuNSU7XFxuICBtYXJnaW46IDIlIDA7XFxufVxcblxcbi50YXNrIHtcXG4gIGJvcmRlcjogc29saWQgNXB4ICMxRTY3QTc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICBjb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgd2lkdGg6IDg3JTtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgcGFkZGluZy1ib3R0b206IDQlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbXBhY3Qge1xcbiAgcGFkZGluZy10b3A6IDQlO1xcbiAgcGFkZGluZy1ib3R0b206IDQlO1xcbn1cXG5cXG4uY29tcGFjdCBwIHtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IC4yNWVtO1xcbn1cXG5cXG4uY29tcGFjdCAudG9wLWRpdiB7XFxuICBwYWRkaW5nLWJvdHRvbTogNSU7XFxufVxcblxcbi5taW4ge1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcblxcbi5taW4gcCB7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxufVxcblxcbi50b3AtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9wLWJ1dHRvbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA3OCU7XFxuICB3aWR0aDogMjIlO1xcbiAgbWFyZ2luOiAzJSAwO1xcbn1cXG5cXG4udG9wLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xcbn1cXG5cXG4udGFzay1oZWFkIHtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogLjI1ZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiAuMjVlbTtcXG59XFxuXFxuLm1pbi1idXR0b24ge1xcbiAgbWluLXdpZHRoOiAyNXB4O1xcbn1cXG5cXG4udGFzayBwIHtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogLjI1ZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiAuNWVtO1xcbn1cXG5cXG4ucmVtb3ZlLXRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG9yZGVyOiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ1dHRvbi1kaXYge1xcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYnV0dG9uLWRpdiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAuODVlbTtcXG59XFxuXFxuLnN0YXR1cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnN0YXR1cy1ib3gge1xcbiAgd2lkdGg6IDUlO1xcbn1cXG5cXG4udGFzay1wcm9tcHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyNSU7XFxuICBwYWRkaW5nOiAyJTtcXG4gIHdpZHRoOiAyMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAxOTMsIDI0OCk7XFxuICBjb2xvcjogcmdiKDI0LCAyOCwgMzIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHotaW5kZXg6IDE7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjI1ZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiAwLjI1ZW07XFxuICBjb2xvcjogcmdiKDI1MSwgMCwgMCk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5wcm9qZWN0LXByb21wdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDI1JTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gIGNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgei1pbmRleDogMTtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi53YXJuaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDI1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDE5MywgMjQ4KTtcXG4gIGNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICB6LWluZGV4OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLndhcm5pbmctYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbi53YXJuaW5nLWJ1dHRvbnMge1xcbiAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLnByb21wdC1oZWFkIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLm5ldy10YXNrIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXG59XFxuXFxuLm5vdGVzLWRpdiB7XFxuICBwYWRkaW5nLWJvdHRvbTogNSU7XFxufVxcblxcbi50cmFuc3BhcmVudCB7XFxuICBvcGFjaXR5OiAwLjI1O1xcbn1cXG5cXG4uY3JlYXRlLXRhc2stYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiA1JSAwJSAwJSAwJTtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sge1xcbiAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLmNhbmNlbCB7XFxuICB3aWR0aDogNDUlO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBUaGVtZXMgKi9cXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nLXRvcDogMiU7XFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxufVxcblxcbi50aGVtZXMtbGlzdCB7XFxuICB3aWR0aDogNzUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMyU7XFxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDMlO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiA1JTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDUlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGhlbWUtb3B0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMi41JTtcXG59XFxuXFxuLnRoZW1lLW9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQ0LCA1MSk7XFxufVxcblxcbi5wcm9qLWNvbnRhaW5lcjpob3ZlcnsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQ0LCA1MSk7XFxufVxcblxcbi5jb2xvciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICByaWdodDogNSU7XFxuICBoZWlnaHQ6IDMzcHg7XFxuICB3aWR0aDogMzNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2NsYXNzaWMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpO1xcbiAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTsgXFxufVxcblxcbiNjbGFzc2ljQ29tcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxuICBjb2xvcjogcmdiKDEzMCwgMTkzLCAyNDgpOyBcXG59XFxuXFxuI2NsYXNzaWNDb21wIC50aGVtZS1vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0NCwgNTEpO1xcbn1cXG5cXG4jY2xhc3NpY0NvbXAgLm1pbi10aXBzLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQ0LCA1MSk7XFxufVxcblxcbiNjbGFzc2ljQ29tcCAubm90aWYtY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDQsIDUxKTtcXG59XFxuXFxuI2NsYXNzaWNDb21wIC5wcm9qLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQ0LCA1MSk7XFxufVxcblxcbiNlbWVyYWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MEM4Nzg7XFxuICBjb2xvcjogcmdiKDE1LCAxLCAxKTtcXG4gIGJveC1zaGFkb3c6IDVweCAycHggMnB4ICMwMDMxMTBkMztcXG59XFxuXFxuI2VtZXJhbGRDb21wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMSwgMSk7XFxuICBjb2xvcjogIzUwQzg3ODtcXG59XFxuXFxuI2VtZXJhbGRDb21wIC50aGVtZS1vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MzMyMDtcXG59XFxuXFxuI2VtZXJhbGRDb21wIC5ub3RpZi1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MzMyMDtcXG59XFxuXFxuI2VtZXJhbGRDb21wIC5wcm9qLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYzMzIwO1xcbn1cXG5cXG4jZW1lcmFsZENvbXAgLm1pbi10aXBzLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYzMzIwO1xcbn1cXG5cXG4jYXJ0aWMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M2REFFOTtcXG4gIGNvbG9yOiByZ2IoMjksIDgzLCAxMTkpO1xcbiAgYm94LXNoYWRvdzogNXB4IDJweCAycHggIzZmN2E4M2ExO1xcbn1cXG5cXG4jYXJ0aWNDb21wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgODMsIDExOSk7XFxuICBjb2xvcjogI0M2REFFOTtcXG59XFxuXFxuI2FydGljQ29tcCAudGhlbWUtb3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMTE4LCAxMzkpO1xcbn1cXG5cXG4jYXJ0aWNDb21wIC5ub3RpZi1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxMTgsIDEzOSk7XFxufVxcblxcbiNhcnRpY0NvbXAgLnByb2otY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMTE4LCAxMzkpO1xcbn1cXG5cXG4jYXJ0aWNDb21wIC5taW4tdGlwcy1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxMTgsIDEzOSk7XFxufVxcblxcbiNydWJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDQxN2Y7XFxuICBjb2xvcjogcmdiKDE5LCAxOSwgMTkpO1xcbiAgYm94LXNoYWRvdzogNXB4IDJweCAycHggIzcwMDEyY2IwO1xcbn1cXG5cXG4jcnVieUNvbXAge1xcbiAgY29sb3I6ICNFMDExNUY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI4LCAzMik7XFxufVxcblxcbiNydWJ5Q29tcCAudGhlbWUtb3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTEwMWU7XFxufVxcblxcbiNydWJ5Q29tcCAubm90aWYtY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTEwMWU7XFxufVxcblxcbiNydWJ5Q29tcCAucHJvai1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTAxZTtcXG59XFxuXFxuI3J1YnlDb21wIC5taW4tdGlwcy1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTAxZTtcXG59XFxuXFxuI3B1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmI1NGNlO1xcbiAgY29sb3I6IHJnYigyNCwgMjgsIDMyKTtcXG4gIGJveC1zaGFkb3c6IDVweCAycHggMnB4ICM0YjAwNThkNztcXG59XFxuXFxuI3B1cnBsZUNvbXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOCwgMzIpOyBcXG4gIGNvbG9yOiAjYmI1NGNlO1xcbn1cXG5cXG4jcHVycGxlQ29tcCAudGhlbWUtb3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTAxMzE7XFxufVxcblxcbiNwdXJwbGVDb21wIC5ub3RpZi1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMDEzMTtcXG59XFxuXFxuI3B1cnBsZUNvbXAgLnByb2otY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTAxMzE7XFxufVxcblxcbiNwdXJwbGVDb21wIC5taW4tdGlwcy1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMDEzMTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnNpZGViYXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG9yZGVyOiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXItYm90dG9tOiByZ2IoMjQsIDI4LCAzMikgc29saWQgMTBweDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIH1cXG5cXG4gIC5iYXItY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiA1JSAwIDE1JSAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG51bGw7XFxuICB9XFxuXFxuICAubm90aWYtaGVhZC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IC0yJSA3LjUlO1xcbn1cXG5cXG4gIC5ub3RpZi1iYXIge1xcbiAgICB3aWR0aDogODUlO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgbGVmdDogMDtcXG4gICAgb3JkZXI6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnByb2plY3QtcHJvbXB0IHtcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLnByb2plY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogcmdiKDI0LCAyOCwgMzIpIHNvbGlkIDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEuNSU7XFxuICB9XFxuXFxuICAudGFzay1wcm9tcHQge1xcbiAgICB0b3A6IDEwJTtcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgaW5wdXQge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgLndhcm5pbmcge1xcbiAgICB3aWR0aDogODglO1xcbiAgfVxcblxcbiAgLnRoZW1lcy1saXN0IHtcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbiAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgd2lkdGg6IDY1JTtcXG4gIH1cXG5cXG4gIC50aXBzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3JkZXI6IDI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC50aXAtaGVhZCB7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMS4yNWVtO1xcblxcbiAgfSAgIFxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIGRpcnR5T2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGRpcnR5T2JqZWN0ID0gZGlydHlPYmplY3QgfHwge307XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGlydHlPYmplY3QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRpcnR5T2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBkaXJ0eU9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KGRpcnR5T2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIGRpcnR5T2JqZWN0KTtcbn0iLCJpbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn1cblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIGRpcnR5T3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2VlaywgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIHZhciByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMxKVxuICogKVxuICogLy89PiA4XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoRGlmZiA9IGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKTtcbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgaXNMYXN0RGF5T2ZNb250aCBmcm9tIFwiLi4vaXNMYXN0RGF5T2ZNb250aC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Nb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBmdWxsIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCAzMSkpXG4gKiAvLz0+IDdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5Nb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBzaWduID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSk7XG4gIHZhciByZXN1bHQ7IC8vIENoZWNrIGZvciB0aGUgZGlmZmVyZW5jZSBvZiBsZXNzIHRoYW4gbW9udGhcblxuICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICByZXN1bHQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGlmIChkYXRlTGVmdC5nZXRNb250aCgpID09PSAxICYmIGRhdGVMZWZ0LmdldERhdGUoKSA+IDI3KSB7XG4gICAgICAvLyBUaGlzIHdpbGwgY2hlY2sgaWYgdGhlIGRhdGUgaXMgZW5kIG9mIEZlYiBhbmQgYXNzaWduIGEgaGlnaGVyIGVuZCBvZiBtb250aCBkYXRlXG4gICAgICAvLyB0byBjb21wYXJlIGl0IHdpdGggSmFuXG4gICAgICBkYXRlTGVmdC5zZXREYXRlKDMwKTtcbiAgICB9XG5cbiAgICBkYXRlTGVmdC5zZXRNb250aChkYXRlTGVmdC5nZXRNb250aCgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpOyAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgbW9udGhzIC0gZGlmZiBpbiBjYWxlbmRhciBtb250aHMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgbW9udGggaXMgbm90IGZ1bGxcbiAgICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcblxuICAgIHZhciBpc0xhc3RNb250aE5vdEZ1bGwgPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAtc2lnbjsgLy8gQ2hlY2sgZm9yIGNhc2VzIG9mIG9uZSBmdWxsIGNhbGVuZGFyIG1vbnRoXG5cbiAgICBpZiAoaXNMYXN0RGF5T2ZNb250aCh0b0RhdGUoZGlydHlEYXRlTGVmdCkpICYmIGRpZmZlcmVuY2UgPT09IDEgJiYgY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAxKSB7XG4gICAgICBpc0xhc3RNb250aE5vdEZ1bGwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBOdW1iZXIoaXNMYXN0TW9udGhOb3RGdWxsKSk7XG4gIH0gLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG5cblxuICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbn0iLCJpbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGRpZmYgPiAwID8gTWF0aC5mbG9vcihkaWZmKSA6IE1hdGguY2VpbChkaWZmKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMzAgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbk1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluU2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgY2xvbmVPYmplY3QgZnJvbSBcIi4uL19saWIvY2xvbmVPYmplY3QvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlOVVRFU19JTl9EQVkgPSAxNDQwO1xudmFyIE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTID0gMjUyMDtcbnZhciBNSU5VVEVTX0lOX01PTlRIID0gNDMyMDA7XG52YXIgTUlOVVRFU19JTl9UV09fTU9OVEhTID0gODY0MDA7XG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgICAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgICAgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzICAgIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzICAgIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzICAgIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgZnVuY3Rpb24gd2FzIHJlbmFtZWQgZnJvbSBgZGlzdGFuY2VJbldvcmRzIGAgdG8gYGZvcm1hdERpc3RhbmNlYFxuICogICB0byBtYWtlIGl0cyBuYW1lIGNvbnNpc3RlbnQgd2l0aCBgZm9ybWF0YCBhbmQgYGZvcm1hdFJlbGF0aXZlYC5cbiAqXG4gKiAtIFRoZSBvcmRlciBvZiBhcmd1bWVudHMgaXMgc3dhcHBlZCB0byBtYWtlIHRoZSBmdW5jdGlvblxuICogICBjb25zaXN0ZW50IHdpdGggYGRpZmZlcmVuY2VJbi4uLmAgZnVuY3Rpb25zLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKlxuICogICBkaXN0YW5jZUluV29yZHMoXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzIsIDApLFxuICogICAgIHsgYWRkU3VmZml4OiB0cnVlIH1cbiAqICAgKSAvLz0+ICdpbiBhYm91dCAxIGhvdXInXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKlxuICogICBmb3JtYXREaXN0YW5jZShcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgeyBhZGRTdWZmaXg6IHRydWUgfVxuICogICApIC8vPT4gJ2luIGFib3V0IDEgaG91cidcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMCksXG4gKiAgIHsgaW5jbHVkZVNlY29uZHM6IHRydWUgfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNSwgMCwgMSksIG5ldyBEYXRlKDIwMTYsIDAsIDEpLCB7XG4gKiAgIGFkZFN1ZmZpeDogdHJ1ZVxuICogfSlcbiAqIC8vPT4gJ2Fib3V0IDEgeWVhciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuXG4gIGlmICghbG9jYWxlLmZvcm1hdERpc3RhbmNlKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0RGlzdGFuY2UgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFzYyhkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpO1xuXG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIHZhciBsb2NhbGl6ZU9wdGlvbnMgPSBjbG9uZU9iamVjdChvcHRpb25zKTtcbiAgbG9jYWxpemVPcHRpb25zLmFkZFN1ZmZpeCA9IEJvb2xlYW4ob3B0aW9ucy5hZGRTdWZmaXgpO1xuICBsb2NhbGl6ZU9wdGlvbnMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gIHZhciBkYXRlTGVmdDtcbiAgdmFyIGRhdGVSaWdodDtcblxuICBpZiAoY29tcGFyaXNvbiA+IDApIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgfVxuXG4gIHZhciBzZWNvbmRzID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTtcbiAgdmFyIG9mZnNldEluU2Vjb25kcyA9IChnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVSaWdodCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KSkgLyAxMDAwO1xuICB2YXIgbWludXRlcyA9IE1hdGgucm91bmQoKHNlY29uZHMgLSBvZmZzZXRJblNlY29uZHMpIC8gNjApO1xuICB2YXIgbW9udGhzOyAvLyAwIHVwIHRvIDIgbWluc1xuXG4gIGlmIChtaW51dGVzIDwgMikge1xuICAgIGlmIChvcHRpb25zLmluY2x1ZGVTZWNvbmRzKSB7XG4gICAgICBpZiAoc2Vjb25kcyA8IDUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDUsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMTAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAyMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMjAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA0MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdoYWxmQU1pbnV0ZScsIG51bGwsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA2MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSAvLyAyIG1pbnMgdXAgdG8gMC43NSBocnNcblxuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA0NSkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTsgLy8gMC43NSBocnMgdXAgdG8gMS41IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA5MCkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS41IGhycyB1cCB0byAyNCBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9EQVkpIHtcbiAgICB2YXIgaG91cnMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyA2MCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCBob3VycywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBkYXkgdXAgdG8gMS43NSBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjc1IGRheXMgdXAgdG8gMzAgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX01PTlRIKSB7XG4gICAgdmFyIGRheXMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX0RBWSk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIG1vbnRoIHVwIHRvIDIgbW9udGhzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fVFdPX01PTlRIUykge1xuICAgIG1vbnRocyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WE1vbnRocycsIG1vbnRocywgbG9jYWxpemVPcHRpb25zKTtcbiAgfVxuXG4gIG1vbnRocyA9IGRpZmZlcmVuY2VJbk1vbnRocyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTsgLy8gMiBtb250aHMgdXAgdG8gMTIgbW9udGhzXG5cbiAgaWYgKG1vbnRocyA8IDEyKSB7XG4gICAgdmFyIG5lYXJlc3RNb250aCA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNb250aHMnLCBuZWFyZXN0TW9udGgsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgeWVhciB1cCB0byBtYXggRGF0ZVxuICB9IGVsc2Uge1xuICAgIHZhciBtb250aHNTaW5jZVN0YXJ0T2ZZZWFyID0gbW9udGhzICUgMTI7XG4gICAgdmFyIHllYXJzID0gTWF0aC5mbG9vcihtb250aHMgLyAxMik7IC8vIE4geWVhcnMgdXAgdG8gMSB5ZWFycyAzIG1vbnRoc1xuXG4gICAgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCAzKSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDMgbW9udGhzIHVwIHRvIE4geWVhcnMgOSBtb250aHNcbiAgICB9IGVsc2UgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCA5KSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdvdmVyWFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgOSBtb250aHMgdXAgdG8gTiB5ZWFyIDEyIG1vbnRoc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhbG1vc3RYWWVhcnMnLCB5ZWFycyArIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZEYXkgZnJvbSBcIi4uL2VuZE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tIFwiLi4vZW5kT2ZNb250aC9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNMYXN0RGF5T2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0aGUgbGFzdCBkYXkgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDI4IEZlYnJ1YXJ5IDIwMTQgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKiB2YXIgcmVzdWx0ID0gaXNMYXN0RGF5T2ZNb250aChuZXcgRGF0ZSgyMDE0LCAxLCAyOCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0xhc3REYXlPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuIGVuZE9mRGF5KGRhdGUpLmdldFRpbWUoKSA9PT0gZW5kT2ZNb250aChkYXRlKS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMiBKdWx5IDIwMTQgaW4gdGhlIHBhc3Q/XG4gKiB2YXIgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQYXN0KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKSA8IERhdGUubm93KCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3cgYGlzVmFsaWRgIGRvZXNuJ3QgdGhyb3cgYW4gZXhjZXB0aW9uXG4gKiAgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqICAgSW5zdGVhZCwgYXJndW1lbnQgaXMgY29udmVydGVkIGJlZm9yZWhhbmQgdXNpbmcgYHRvRGF0ZWAuXG4gKlxuICogICBFeGFtcGxlczpcbiAqXG4gKiAgIHwgYGlzVmFsaWRgIGFyZ3VtZW50ICAgICAgICB8IEJlZm9yZSB2Mi4wLjAgfCB2Mi4wLjAgb253YXJkIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGBuZXcgRGF0ZSgpYCAgICAgICAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcyMDE2LTAxLTAxJylgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJycpYCAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgxNDg4MzcwODM1MDgxKWAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKE5hTilgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJzIwMTYtMDEtMDEnYCAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnJ2AgICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYDE0ODgzNzA4MzUwODFgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgTmFOYCAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICpcbiAqICAgV2UgaW50cm9kdWNlIHRoaXMgY2hhbmdlIHRvIG1ha2UgKmRhdGUtZm5zKiBjb25zaXN0ZW50IHdpdGggRUNNQVNjcmlwdCBiZWhhdmlvclxuICogICB0aGF0IHRyeSB0byBjb2VyY2UgYXJndW1lbnRzIHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gKiAgICh3aGljaCBpcyBhbHNvIHRoZSBjYXNlIHdpdGggb3RoZXIgKmRhdGUtZm5zKiBmdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKGRhdGUpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsYW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcmVzdWx0O1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn0iLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxuZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX2RpcnR5T3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgOlxuICAvL1xuICAvLyAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9XG4gIC8vICAgdmFyIHVuaXQgPSBTdHJpbmcob3B0aW9ucy51bml0KVxuICAvL1xuICAvLyB3aGVyZSBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ1xuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn1cblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHF1YXJ0ZXIpIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG5cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHByb2plY3RUcmFja2VyLCBjcmVhdGVEZWZhdWx0UHJvaiB9IGZyb20gXCIuL21vZHVsZXMvb2JqZWN0QnVpbGRlclwiO1xuaW1wb3J0IHsgcHJvamVjdEJ1aWxkZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RDcmVhdG9yXCI7XG5pbXBvcnQgeyBhcHBseUJ1dHRvbnMsIHRhc2tCdXR0b25zIH0gZnJvbSBcIi4vbW9kdWxlcy9idXR0b25zXCI7XG5pbXBvcnQgeyBub3RpZiwgYWRkTm9Ob3RpZk1lc3NhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL3NpZGViYXJcIjtcbmltcG9ydCB7IHN0b3JlLCBjaGVja0xpc3QsIGdldFRoZW1lIH0gZnJvbSBcIi4vbW9kdWxlcy9zdG9yZVwiO1xuaW1wb3J0IHsgc2V0VGhlbWUgfSBmcm9tIFwiLi9tb2R1bGVzL3RoZW1lc1wiO1xuXG5cbndpbmRvdy5kb2N1bWVudC50aXRsZSA9IFwiT25UYXNrXCJcblxuY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0VHJhY2tlcigpO1xuXG5mdW5jdGlvbiBidWlsZFByb2plY3RzKHByb2pMaXN0KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvakxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvamVjdCA9IHByb2pMaXN0W2ldO1xuICAgIGxldCBuZXdQcm9qU2V0ID0gcHJvamVjdEJ1aWxkZXIocHJvamVjdCk7XG4gICAgbGV0IHRhc2tzID0gcHJvamVjdC50YXNrQXJyYXk7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0YXNrcy5sZW5ndGg7IHkrKykge1xuICAgICAgbm90aWYodGFza3NbeV0pO1xuICAgIH07XG4gICAgYWxsUHJvamVjdHMubWFzdGVyTGlzdC5wdXNoKG5ld1Byb2pTZXQpO1xuICB9O1xuICBhcHBseUJ1dHRvbnMoYWxsUHJvamVjdHMubWFzdGVyTGlzdCk7XG4gIGdldFRoZW1lKCk7XG59XG5cbmNvbnN0IHN0YXJ0ID0gKCgpID0+IHtcbiAgbGV0IGZldGNoZWRMaXN0ID0gY2hlY2tMaXN0KCk7XG4gIGlmIChmZXRjaGVkTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICBsZXQgZGVmYXVsdFByb2ogPSBjcmVhdGVEZWZhdWx0UHJvaigpO1xuICAgIGFsbFByb2plY3RzLnByb2plY3RMaXN0LnVuc2hpZnQoZGVmYXVsdFByb2opO1xuICAgIHN0b3JlKGFsbFByb2plY3RzLnByb2plY3RMaXN0KTtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdFNldCA9IHByb2plY3RCdWlsZGVyKGRlZmF1bHRQcm9qKTtcbiAgICB0YXNrQnV0dG9ucyhkZWZhdWx0UHJvamVjdFNldCk7XG4gICAgc2V0VGhlbWUoXCJjbGFzc2ljXCIsIFwiY2xhc3NpY0NvbXBcIik7XG4gICAgYWRkTm9Ob3RpZk1lc3NhZ2UoKVxuICB9IGVsc2Uge1xuICAgIGJ1aWxkUHJvamVjdHMoZmV0Y2hlZExpc3QpO1xuICAgIGFkZE5vTm90aWZNZXNzYWdlKClcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGFsbFByb2plY3RzIH0gXG5cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWlubmVyLWRlY2xhcmF0aW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGVsZW1lbnRCdWlsZGVyLCBnZXRQb3NpdGlvbiwgcHJvamVjdERpdiwgYm9keSB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzb3J0QnlEdWVEYXRlIH0gZnJvbSBcIi4vZGF0ZVwiO1xuaW1wb3J0IHsgcHJvamVjdEJ1aWxkZXIgfSBmcm9tIFwiLi90YXNrRWxlbWVudHNcIjtcbmltcG9ydCB7IGFkZFRhc2ssIGFkZFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0Q3JlYXRvclwiO1xuaW1wb3J0IHsgc2lkZWJhciwgdGhlbWVDaGVjayB9IGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCB7IHN0b3JlLCBjaGVja0xpc3QgfSBmcm9tIFwiLi9zdG9yZVwiO1xuXG5sZXQgZmV0Y2hlZExpc3QgPSBjaGVja0xpc3QoKTtcblxuZnVuY3Rpb24gYWRkVHJhbnNwYXJlbnQoY2hpbGRFbGVtZW50cykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRWxlbWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY2hpbGRFbGVtZW50c1tpXS5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVHJhbnNwYXJlbnQoY2hpbGRFbGVtZW50cykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRWxlbWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY2hpbGRFbGVtZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNwYXJlbnRcIik7XG4gIH1cbn1cblxuY29uc3QgdGFza0J1dHRvbnMgPSAoc2V0KSA9PiB7XG4gIGNvbnN0IHRvcEJ1dHRvbkRpdiA9IGVsZW1lbnRCdWlsZGVyKFxuICAgIFwiZGl2XCIsXG4gICAgXCJ0b3AtYnV0dG9uLWRpdlwiLFxuICAgIHNldC5wcm9qZWN0RWxlbWVudFxuICApO1xuICBzZXQucHJvamVjdEVsZW1lbnQucHJlcGVuZCh0b3BCdXR0b25EaXYpO1xuXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSAoKCkgPT4ge1xuICAgIGxldCBhZGRCdXR0b24gPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcInRvcC1idXR0b25zXCIsIHRvcEJ1dHRvbkRpdik7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFza1wiKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIjtcblxuICAgIGZ1bmN0aW9uIGFkZE5ld1Rhc2soKSB7XG4gICAgICBhZGRUYXNrKHNldCk7XG4gICAgICBhZGRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Rhc2spO1xuICAgIH07XG5cbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Rhc2spO1xuICB9KSgpO1xuXG4gIGNvbnN0IGJ1dHRvbkRpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwiYnV0dG9uLWRpdlwiLCBzZXQucHJvamVjdEVsZW1lbnQpO1xuXG4gIGNvbnN0IHNvcnRCeUR1ZURhdGVCdXR0b24gPSAoKCkgPT4ge1xuICAgIGlmIChzZXQucHJvamVjdC50YXNrQXJyYXkubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHNvcnQgPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCBcInNvcnQtYnV0dG9uXCIsIGJ1dHRvbkRpdik7XG4gICAgICBzb3J0LnRleHRDb250ZW50ID0gXCJTb3J0IGJ5IER1ZSBEYXRlXCI7XG5cbiAgICAgIGZ1bmN0aW9uIG5ld1NvcnRlZExpc3QoKSB7XG4gICAgICAgIGxldCBwcmlvcldpZHRoID0gc2V0LnByb2plY3RFbGVtZW50LnN0eWxlLndpZHRoXG4gICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBnZXRQb3NpdGlvbihzZXQucHJvamVjdEVsZW1lbnQpO1xuICAgICAgICBsZXQgc29ydGVkVGFza3MgPSBzb3J0QnlEdWVEYXRlKHNldC5wcm9qZWN0LnRhc2tBcnJheSk7XG4gICAgICAgIHNldC5wcm9qZWN0LnRhc2tBcnJheSA9IHNvcnRlZFRhc2tzO1xuICAgICAgICBzZXQuZGVsZXRlTGlzdCgpO1xuICAgICAgICBsZXQgc29ydGVkUHJvamVjdCA9IHByb2plY3RCdWlsZGVyKHNldC5wcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdERpdi5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgc29ydGVkUHJvamVjdC5wcm9qZWN0RWxlbWVudCxcbiAgICAgICAgICBwcm9qZWN0RGl2LmNoaWxkcmVuW3Byb2plY3RJbmRleCArIDFdXG4gICAgICAgICk7XG4gICAgICAgIHRhc2tCdXR0b25zKHNvcnRlZFByb2plY3QpO1xuICAgICAgICB0aGVtZUNoZWNrKCk7XG4gICAgICAgIHNvcnRlZFByb2plY3QucHJvamVjdEVsZW1lbnQuc3R5bGUud2lkdGggPSBwcmlvcldpZHRoO1xuICAgICAgfVxuXG4gICAgICBzb3J0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdTb3J0ZWRMaXN0KTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgY29uc3Qgc29ydEJ5UHJpb3JpdHlCdXR0b24gPSAoKCkgPT4ge1xuICAgIGlmIChzZXQucHJvamVjdC50YXNrQXJyYXkubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHNvcnQgPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCBcInNvcnQtYnktcHJpb3JpdHlcIiwgYnV0dG9uRGl2KTtcbiAgICAgIHNvcnQudGV4dENvbnRlbnQgPSBcIlNvcnQgYnkgUHJpb3JpdHlcIjtcbiAgICAgIFxuICAgICAgZnVuY3Rpb24gbmV3UHJvamVjdFNldCgpIHtcbiAgICAgICAgbGV0IHByaW9yV2lkdGggPSBzZXQucHJvamVjdEVsZW1lbnQuc3R5bGUud2lkdGhcbiAgICAgICAgY29uc29sZS5sb2cocHJpb3JXaWR0aClcbiAgICAgICAgbGV0IHByb2plY3RJbmRleCA9IGdldFBvc2l0aW9uKHNldC5wcm9qZWN0RWxlbWVudCk7XG4gICAgICAgIGxldCBzb3J0ZWRUYXNrcyA9IHNldC5zb3J0QnlQcmlvcml0eSgpO1xuICAgICAgICBzZXQudGFza0FycmF5ID0gc29ydGVkVGFza3M7XG4gICAgICAgIHNldC5kZWxldGVMaXN0KCk7XG4gICAgICAgIGxldCBzb3J0ZWRQcm9qZWN0ID0gcHJvamVjdEJ1aWxkZXIoc2V0LnByb2plY3QpO1xuICAgICAgICBcblxuICAgICAgICBwcm9qZWN0RGl2Lmluc2VydEJlZm9yZShcbiAgICAgICAgICBzb3J0ZWRQcm9qZWN0LnByb2plY3RFbGVtZW50LFxuICAgICAgICAgIHByb2plY3REaXYuY2hpbGRyZW5bcHJvamVjdEluZGV4ICsgMV1cbiAgICAgICAgKTtcbiAgICAgICAgdGFza0J1dHRvbnMoc29ydGVkUHJvamVjdCk7XG4gICAgICAgIHRoZW1lQ2hlY2soKTtcbiAgICAgICAgc29ydGVkUHJvamVjdC5wcm9qZWN0RWxlbWVudC5zdHlsZS53aWR0aCA9IHByaW9yV2lkdGg7XG4gICAgICB9O1xuICAgICAgc29ydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdFNldCk7XG4gICAgfTtcbiAgfSkoKTtcblxuICBjb25zdCByZW1vdmVUYXNrQnV0dG9uID0gKCgpID0+IHtcbiAgICBsZXQgcHJvamVjdEVsZW1lbnRzID0gQXJyYXkuZnJvbShzZXQucHJvamVjdEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvamVjdEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInRhc2tcIikpIHtcbiAgICAgICAgbGV0IHRhc2tEaXYgPSBwcm9qZWN0RWxlbWVudHNbaV07XG4gICAgICAgIGxldCB0b3BEaXYgPSB0YXNrRGl2LmNoaWxkcmVuWzBdO1xuICAgICAgICBsZXQgcmVtb3ZlVGFza0VsZW1lbnQgPSB0YXNrRGl2LmZpcnN0Q2hpbGQ7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2V0LnByb2plY3QudGFza0FycmF5Lmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdG9wRGl2LmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID09PSBzZXQucHJvamVjdC50YXNrQXJyYXlbeV0udGl0bGVcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCB0YXNrVGl0bGUgPSBzZXQucHJvamVjdC50YXNrQXJyYXlbeV0udGl0bGVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gdGFza1JlbW92ZXIoKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmV0Y2hlZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZmV0Y2hlZExpc3RbaV0udGl0bGUgPT09IHNldC5wcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IGZldGNoZWRMaXN0W2ldLnRhc2tBcnJheS5sZW5ndGg7IHorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmV0Y2hlZExpc3RbaV0udGFza0FycmF5W3pdLnRpdGxlID09PSB0YXNrVGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVkTGlzdFtpXS50YXNrQXJyYXkuc3BsaWNlKHosIDEpO1xuICAgICAgICAgICAgICAgICAgICAgIHN0b3JlKGZldGNoZWRMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBnZXRQb3NpdGlvbihzZXQucHJvamVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgICBzZXQucmVtb3ZlVGFzayhzZXQucHJvamVjdC50YXNrQXJyYXlbeV0pO1xuICAgICAgICAgICAgICBzZXQuZGVsZXRlTGlzdCgpO1xuICAgICAgICAgICAgICBsZXQgc29ydGVkUHJvamVjdCA9IHByb2plY3RCdWlsZGVyKHNldC5wcm9qZWN0KTtcbiAgICAgICAgICAgICAgdGFza0J1dHRvbnMoc29ydGVkUHJvamVjdCk7XG4gICAgICAgICAgICAgIHRoZW1lQ2hlY2soKVxuICAgICAgICAgICAgICBwcm9qZWN0RGl2Lmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICBzb3J0ZWRQcm9qZWN0LnByb2plY3RFbGVtZW50LFxuICAgICAgICAgICAgICAgIHByb2plY3REaXYuY2hpbGRyZW5bcHJvamVjdEluZGV4XVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlbW92ZVRhc2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrUmVtb3Zlcik7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfTtcbiAgfSkoKTtcblxuICBjb25zdCB3YXJuaW5nTWVzc2FnZSA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZHkuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpIDwgYm9keS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgYm9keS5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIilcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHdhcm5pbmdFbGVtZW50ID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJ3YXJuaW5nXCIsIGJvZHkpO1xuICAgIGxldCB3YXJuaW5nTWVzc2FnZSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcIndhcm5pbmctbWVzc2FnZVwiLCB3YXJuaW5nRWxlbWVudCk7XG4gICAgd2FybmluZ01lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBlbnRpcmUgcHJvamVjdD9cIlxuICAgIGxldCBjb250YWluZXIgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcIndhcm5pbmctYnV0dG9ucy1jb250YWluZXJcIiwgd2FybmluZ0VsZW1lbnQpXG4gICAgbGV0IGNvbmZpcm0gPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCBcIndhcm5pbmctYnV0dG9uc1wiLCBjb250YWluZXIpO1xuICAgIGNvbmZpcm0udGV4dENvbnRlbnQgPSBcIlJlbW92ZSBQcm9qZWN0XCI7XG4gICAgbGV0IGNhbmNlbCA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwid2FybmluZy1idXR0b25zXCIsIGNvbnRhaW5lcik7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxuICAgIHRoZW1lQ2hlY2soKVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsUHJvaigpIHtcbiAgICAgIHJlbW92ZVRyYW5zcGFyZW50KGJvZHkuY2hpbGRyZW4pXG4gICAgICB3YXJuaW5nRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxQcm9qKTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qKCkge1xuICAgICAgcmVtb3ZlVHJhbnNwYXJlbnQoYm9keS5jaGlsZHJlbilcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmV0Y2hlZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGZldGNoZWRMaXN0W2ldLnRpdGxlID09PSBzZXQucHJvamVjdC50aXRsZSkge1xuICAgICAgICAgIGZldGNoZWRMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICBzdG9yZShmZXRjaGVkTGlzdCk7XG4gICAgICAgICAgc2lkZWJhci5wb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICBzZXQuZGVsZXRlTGlzdCgpXG4gICAgICB3YXJuaW5nRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVByb2opO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgcmVtb3ZlUHJvaigpO1xuICAgICAgICB3YXJuaW5nRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH07XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgcmVtb3ZlVHJhbnNwYXJlbnQoYm9keS5jaGlsZHJlbik7XG4gICAgICAgIHdhcm5pbmdFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfTtcbiAgICB9LCBmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gKCgpID0+IHtcbiAgICBsZXQgZGVsID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJ0b3AtYnV0dG9uc1wiLCB0b3BCdXR0b25EaXYpO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ1dHRvblwiKTtcbiAgICBkZWwudGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdhcm5pbmdNZXNzYWdlKTtcbiAgfSkoKTtcbn07XG5cbmZ1bmN0aW9uIGFwcGx5QnV0dG9ucyh0YXNrQXJyYXkpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB0YXNrQnV0dG9ucyh0YXNrQXJyYXlbaV0pO1xuICB9XG59XG5cbmNvbnN0IHByb2plY3RCdXR0b24gPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xuICAgIGFkZFByb2plY3QoKTtcbiAgICBzaWRlYmFyLm5ld1Byb2plY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Byb2plY3QpO1xuICB9XG4gIHNpZGViYXIubmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTmV3UHJvamVjdCk7XG59KSgpO1xuXG5jb25zdCBjaGFuZ2VWaWV3ID0gKCgpID0+IHtcbiAgbGV0IHZpZXdFbGVtZW50ID0gc2lkZWJhci5jaGFuZ2VWaWV3O1xuXG4gIGZ1bmN0aW9uIG1pbkFsbCgpIHtcbiAgICBsZXQgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LWNvbnRhaW5lclwiKVswXTtcbiAgICBsZXQgcHJvamVjdHMgPSBBcnJheS5mcm9tKHByb2pDb250YWluZXIuY2hpbGRyZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdHNbaV07XG4gICAgICBsZXQgcHJvakNvbXBvbmVudHMgPSBBcnJheS5mcm9tKHByb2plY3QuY2hpbGRyZW4pO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBwcm9qQ29tcG9uZW50cy5sZW5ndGg7IHkrKykge1xuICAgICAgICBpZiAoKHkgPiAyKSAmJiAoeSAhPT0gcHJvakNvbXBvbmVudHMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICBsZXQgdGFzayA9IHByb2pDb21wb25lbnRzW3ldO1xuICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcImNvbXBhY3RcIik7XG4gICAgICAgICAgbGV0IHRhc2tFbGVtZW50cyA9IEFycmF5LmZyb20odGFzay5jaGlsZHJlbik7XG4gICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAgdGFza0VsZW1lbnRzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBpZiAoKHggIT09IDApICYmICh4ICE9PSA1KSkge1xuICAgICAgICAgICAgICB0YXNrRWxlbWVudHNbeF0uY2xhc3NMaXN0LmFkZChcIm1pbmltaXplXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZ1bmN0aW9uIG1heEFsbCgpIHtcbiAgICAgICAgICAgIGxldCBjb21wYWN0VGFza3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wYWN0XCIpKTtcbiAgICAgICAgICAgIGxldCBoaWRkZW5FbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1pbmltaXplXCIpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcGFjdFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbXBhY3RUYXNrc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGFjdFwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpZGRlbkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGhpZGRlbkVsZW1lbnRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJtaW5pbWl6ZVwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2aWV3RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWF4QWxsKTtcbiAgICAgICAgICAgIHZpZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtaW5BbGwpOyBcbiAgICAgICAgICB9O1xuXG4gICAgICAgIHZpZXdFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtaW5BbGwpO1xuICAgICAgICB2aWV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWF4QWxsKTsgXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gIH07XG5cbiAgdmlld0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1pbkFsbCk7IFxufSkoKTtcblxuZXhwb3J0IHsgdGFza0J1dHRvbnMsIGFwcGx5QnV0dG9ucywgYWRkVHJhbnNwYXJlbnQsIHJlbW92ZVRyYW5zcGFyZW50IH07XG4iLCJpbXBvcnQgeyBmb3JtYXQsIGZvcm1hdERpc3RhbmNlLCBjb21wYXJlQXNjLCBpc1Bhc3QgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZnVuY3Rpb24gZGF0ZUNoZWNrZXIoZGF0ZSkge1xuICBsZXQgZHVlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBpZiAoaXNQYXN0KGR1ZURhdGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZW50ZXJlZERhdGUpIHtcbiAgbGV0IGR1ZURhdGUgPSBuZXcgRGF0ZShlbnRlcmVkRGF0ZSk7XG4gIGxldCBpc1ZhbGlkID0gZGF0ZUNoZWNrZXIoZHVlRGF0ZSk7XG4gIGlmIChpc1ZhbGlkKSB7XG4gICAgbGV0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXQoZHVlRGF0ZSwgXCJFRUVFLCBNTU1NIGRvLCB5eXl5XCIpO1xuICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWFkbGluZShkdWVEYXRlKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgbGV0IGRyb3BEZWFkID0gbmV3IERhdGUoZHVlRGF0ZSk7XG4gIGxldCBkYXlzVGlsbCA9IGZvcm1hdERpc3RhbmNlKGRyb3BEZWFkLCB0b2RheSk7XG4gIGxldCBkZWFkTWVzc2FnZSA9IGAke2RheXNUaWxsfSB1bnRpbCB5b3VyIGR1ZSBkYXRlLmA7XG4gIHJldHVybiBkZWFkTWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gc29ydEJ5RHVlRGF0ZSh0YXNrcykge1xuICBsZXQgb2JqQXJyYXkgPSBbXTtcbiAgbGV0IGRlYWRsaW5lQXJyYXkgPSBbXTtcblxuICBjb25zdCBuZXdPYmogPSAodGFzaywgZHVlRGF0ZSkgPT4ge1xuICAgIHJldHVybiB7IHRhc2ssIGR1ZURhdGUgfTtcbiAgfTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRhc2sgPSB0YXNrc1tpXTtcbiAgICBsZXQgZHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suZW50ZXJlZERhdGUpO1xuICAgIGxldCB0YXNrQW5kRGF0ZSA9IG5ld09iaih0YXNrLCBkdWVEYXRlKTtcbiAgICBvYmpBcnJheS5wdXNoKHRhc2tBbmREYXRlKTtcbiAgICBkZWFkbGluZUFycmF5LnB1c2goZHVlRGF0ZSk7XG4gIH1cblxuICBsZXQgc29ydGVkQXJyYXkgPSBkZWFkbGluZUFycmF5LnNvcnQoY29tcGFyZUFzYyk7XG4gIGxldCBzb3J0ZWRUYXNrcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNvcnRlZERhdGUgPSBzb3J0ZWRBcnJheVtpXTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgb2JqQXJyYXkubGVuZ3RoOyB5KyspIHtcbiAgICAgIGxldCBkYXRlID0gb2JqQXJyYXlbeV0uZHVlRGF0ZTtcbiAgICAgIGxldCB0YXNrID0gb2JqQXJyYXlbeV0udGFzaztcblxuICAgICAgaWYgKHNvcnRlZERhdGUgPT09IGRhdGUpIHtcbiAgICAgICAgc29ydGVkVGFza3MucHVzaCh0YXNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNvcnRlZFRhc2tzO1xufVxuXG5leHBvcnQgeyBkYXRlQ2hlY2tlciwgZm9ybWF0RGF0ZSwgZGVhZGxpbmUsIHNvcnRCeUR1ZURhdGUgfTtcbiIsImZ1bmN0aW9uIGVsZW1lbnRCdWlsZGVyKGVsZW1lbnQsIGNsYXNzTGFiZWwsIHBhcmVudE5hbWUpIHtcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBpdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NMYWJlbCk7XG4gIHBhcmVudE5hbWUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIHJldHVybiBpdGVtO1xufVxuXG5jb25zdCBnZXRQb3NpdGlvbiA9IChwcm9qZWN0RWxlbWVudCkgPT4ge1xuICBsZXQgcHJvamVjdERpdiA9IHByb2plY3RFbGVtZW50LnBhcmVudE5vZGU7XG4gIGxldCBwcm9qZWN0RWxlbWVudHMgPSBwcm9qZWN0RGl2LmNoaWxkcmVuO1xuICBsZXQgcHJvamVjdEVsZW1lbnRBcnJheSA9IEFycmF5LmZyb20ocHJvamVjdEVsZW1lbnRzKTtcbiAgbGV0IHByb2plY3RJbmRleCA9IHByb2plY3RFbGVtZW50QXJyYXkuaW5kZXhPZihwcm9qZWN0RWxlbWVudCk7XG4gIHJldHVybiBwcm9qZWN0SW5kZXg7XG59O1xuXG5sZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcblxubGV0IHByb2plY3REaXYgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcInByb2plY3QtY29udGFpbmVyXCIsIGJvZHkpO1xuXG5mdW5jdGlvbiB0b2dnbGVIaWRlKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxufVxuXG5leHBvcnQgeyBlbGVtZW50QnVpbGRlciwgZ2V0UG9zaXRpb24sIGJvZHksIHByb2plY3REaXYsIHRvZ2dsZUhpZGUgfTtcbiIsImNvbnN0IHByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCB0YXNrQXJyYXkpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB0YXNrQXJyYXkgfTtcbn07XG5cbmNvbnN0IHRvRG8gPSAoXG4gIHRpdGxlLFxuICBwcm9qZWN0LFxuICBkZXNjcmlwdGlvbixcbiAgZW50ZXJlZERhdGUsXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBub3RlcyxcbiAgc3RhdHVzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBwcm9qZWN0LFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGVudGVyZWREYXRlLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgc3RhdHVzLFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdFRyYWNrZXIgPSAoKSA9PiB7XG4gIGxldCBtYXN0ZXJMaXN0ID0gW107XG4gIGxldCBwcm9qZWN0TGlzdCA9IFtdXG4gIHJldHVybiB7IG1hc3Rlckxpc3QsIHByb2plY3RMaXN0IH07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvaigpIHtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KFxuICAgIFwiTmV3IFByb2plY3RcIixcbiAgICBcIkFkZCBhIHRhc2sgYmVsb3cgYW5kIHN0YXJ0IHRyYWNraW5nIHlvdXIgcHJvamVjdCFcIixcbiAgICBbXVxuICApO1xuICByZXR1cm4gZGVmYXVsdFByb2plY3Rcbn1cblxuZXhwb3J0IHsgcHJvamVjdCwgdG9EbywgcHJvamVjdFRyYWNrZXIsIGNyZWF0ZURlZmF1bHRQcm9qIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi4vaW5kZXhcIlxuaW1wb3J0IHsgcHJvamVjdCwgdG9EbyB9IGZyb20gXCIuL29iamVjdEJ1aWxkZXJcIjtcbmltcG9ydCB7IGVsZW1lbnRCdWlsZGVyLCBnZXRQb3NpdGlvbiwgYm9keSwgcHJvamVjdERpdiB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB0YXNrQnVpbGRlciwgcHJvamVjdEhlYWRlciwgcHJvamVjdEJ1aWxkZXIgfSBmcm9tIFwiLi90YXNrRWxlbWVudHNcIjtcbmltcG9ydCB7IGFkZFRyYW5zcGFyZW50LCB0YXNrQnV0dG9ucywgcmVtb3ZlVHJhbnNwYXJlbnQgfSBmcm9tIFwiLi9idXR0b25zXCI7XG5pbXBvcnQgeyBzaWRlYmFyLCBub3RpZiwgdGhlbWVDaGVjayB9IGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCB7IHZhbGlkYXRpb24sIHZhbGlkYXRlUHJvaiB9IGZyb20gXCIuL3ZhbGlkYXRpb25cIjtcbmltcG9ydCB7IHN0b3JlLCBjaGVja0xpc3QgfSBmcm9tIFwiLi9zdG9yZVwiO1xuXG5sZXQgZmV0Y2hlZExpc3QgPSBjaGVja0xpc3QoKVxuXG5mdW5jdGlvbiBuZXdJbnB1dChcbiAgcGFyZW50LFxuICBwcm9tcHRUeXBlLFxuICBkaXZDbGFzcyxcbiAgbGFiZWxDbGFzcyxcbiAgbGFiZWxDb250ZW50LFxuICBpbnB1dENsYXNzLFxuICBwbGFjZWhvbGRlcixcbiAgaW5wdXRJZCxcbiAgbmFtZUF0XG4pIHtcbiAgbGV0IG5ld0RpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIHByb21wdFR5cGUsIHBhcmVudCk7XG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGRpdkNsYXNzKTtcbiAgbGV0IGRpdkxhYmVsID0gZWxlbWVudEJ1aWxkZXIoXCJsYWJlbFwiLCBsYWJlbENsYXNzLCBuZXdEaXYpO1xuICBkaXZMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsQ29udGVudDtcbiAgbGV0IGRpdklucHV0ID0gZWxlbWVudEJ1aWxkZXIoXCJpbnB1dFwiLCBpbnB1dENsYXNzLCBuZXdEaXYpO1xuICBkaXZJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlcik7XG4gIGRpdklucHV0LmlkID0gaW5wdXRJZDtcbiAgZGl2SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lQXQpO1xuICByZXR1cm4gbmV3RGl2O1xufVxuXG5mdW5jdGlvbiBhZGRFbnRlckV2ZW50KHByb21wdCwgY3JlYXRlLCBjbG9zZVByb21wdCkge1xuICBwcm9tcHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGNyZWF0ZSgpO1xuICAgICAgY2xvc2VQcm9tcHQoKTtcbiAgICB9O1xuICB9LCBmYWxzZSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIGNsb3NlUHJvbXB0KCk7XG4gICAgfTtcbiAgfSwgZmFsc2UpO1xufTtcblxuY29uc3QgYWRkVGFzayA9IChzZXQpID0+IHtcbiAgbGV0IHByb2plY3QgPSBKU09OLnN0cmluZ2lmeShzZXQucHJvamVjdCk7XG4gIGxldCBwcm9qZWN0RWxlbWVudCA9IHNldC5wcm9qZWN0RWxlbWVudDtcblxuICBjb25zdCB0YXNrUHJvbXB0ID0gKCgpID0+IHtcbiAgICBsZXQgcHJvbXB0ID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJ0YXNrLXByb21wdFwiLCBib2R5KTtcblxuICAgIGxldCBwcm9tcHRIZWFkID0gZWxlbWVudEJ1aWxkZXIoXCJoM1wiLCBcInByb21wdC1oZWFkXCIsIHByb21wdCk7XG4gICAgcHJvbXB0SGVhZC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIGEgVGFza1wiO1xuXG4gICAgbGV0IHRpdGxlRGl2ID0gbmV3SW5wdXQoXG4gICAgICBwcm9tcHQsXG4gICAgICBcIm5ldy10YXNrXCIsXG4gICAgICBcInRpdGxlLWRpdlwiLFxuICAgICAgXCJuYW1lLWxhYmVsXCIsXG4gICAgICBcIlRhc2s6IFwiLFxuICAgICAgXCJ0aXRsZS1pbnB1dFwiLFxuICAgICAgXCJFbnRlciBhIFRhc2shXCIsXG4gICAgICBcInRpdGxlXCIsXG4gICAgICBcInRpdGxlXCJcbiAgICApO1xuXG4gICAgbGV0IGRlc2NEaXYgPSBuZXdJbnB1dChcbiAgICAgIHByb21wdCxcbiAgICAgIFwibmV3LXRhc2tcIixcbiAgICAgIFwiZGVzY3JpcHRpb24tZGl2XCIsXG4gICAgICBcImRlc2MtbGFiZWxcIixcbiAgICAgIFwiRGVzY3JpcHRpb246IFwiLFxuICAgICAgXCJkZXNjLWlucHV0XCIsXG4gICAgICBcIldyaXRlIGEgYnJpZWYgZGVzY3JpcHRpb24uXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCIsXG4gICAgICBcImRlc2NcIlxuICAgICk7XG5cbiAgICBsZXQgZHVlRGl2ID0gbmV3SW5wdXQoXG4gICAgICBwcm9tcHQsXG4gICAgICBcIm5ldy10YXNrXCIsXG4gICAgICBcImR1ZS1kaXZcIixcbiAgICAgIFwiZHVlLWxhYmVsXCIsXG4gICAgICBcIkR1ZSBEYXRlOiBcIixcbiAgICAgIFwiZHVlLWlucHV0XCIsXG4gICAgICBcIk1NL0REL1lZWVlcIixcbiAgICAgIFwiZHVlXCIsXG4gICAgICBcImR1ZVwiXG4gICAgKTtcblxuICAgIGxldCBwcmlvcml0eURpdiA9IG5ld0lucHV0KFxuICAgICAgcHJvbXB0LFxuICAgICAgXCJuZXctdGFza1wiLFxuICAgICAgXCJwcmlvcml0eS1kaXZcIixcbiAgICAgIFwicHJpb3JpdHktbGFiZWxcIixcbiAgICAgIFwiUHJpb3JpdHk6IFwiLFxuICAgICAgXCJwcmlvcml0eS1pbnB1dFwiLFxuICAgICAgXCJFbnRlciBhIG51bWJlciAxLTVcIixcbiAgICAgIFwicHJpb3JpdHlcIixcbiAgICAgIFwicHJpb3JpdHlcIlxuICAgICk7XG5cbiAgICBsZXQgbm90ZXNEaXYgPSBuZXdJbnB1dChcbiAgICAgIHByb21wdCxcbiAgICAgIFwibmV3LXRhc2tcIixcbiAgICAgIFwibm90ZXMtZGl2XCIsXG4gICAgICBcIm5vdGVzLWxhYmVsXCIsXG4gICAgICBcIk5vdGVzOiBcIixcbiAgICAgIFwibm90ZXMtaW5wdXRcIixcbiAgICAgIFwiV3JpdGUgeW91ciBub3RlcyBoZXJlLlwiLFxuICAgICAgXCJub3Rlc1wiLFxuICAgICAgXCJub3Rlc1wiXG4gICAgKTtcblxuICAgIGxldCBjaGlsZHJlbiA9IGJvZHkuY2hpbGRyZW47XG4gICAgYWRkVHJhbnNwYXJlbnQoY2hpbGRyZW4pO1xuXG4gICAgbGV0IGJ1dHRvbkRpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwiY3JlYXRlLXRhc2stYnV0dG9uc1wiLCBwcm9tcHQpO1xuXG4gICAgbGV0IGNyZWF0ZUJ1dHRvbiA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwiY3JlYXRlLXRhc2tcIiwgYnV0dG9uRGl2KTtcbiAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCI7XG5cbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gZWxlbWVudEJ1aWxkZXIoXCJidXR0b25cIiwgXCJjYW5jZWxcIiwgYnV0dG9uRGl2KTtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIHRoZW1lQ2hlY2soKTtcblxuICAgIGZ1bmN0aW9uIGV4aXQoKSB7XG4gICAgICByZW1vdmVUcmFuc3BhcmVudChjaGlsZHJlbik7XG4gICAgICBwcm9tcHQucmVtb3ZlKCk7XG4gICAgICBsZXQgYnV0dG9uRGl2ID0gKEFycmF5LmZyb20oc2V0LnByb2plY3RFbGVtZW50LmNoaWxkcmVuKSlbMF07XG4gICAgICBsZXQgYWRkQnV0dG9uID0gYnV0dG9uRGl2LmZpcnN0Q2hpbGQ7XG4gICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2spO1xuICAgIH07XG5cbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV4aXQpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgICBsZXQgdGl0bGVQYWlyID0gW3RpdGxlLCB0aXRsZURpdl07XG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgbGV0IGVudGVyZWREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVcIikudmFsdWU7XG4gICAgICBsZXQgZGF0ZVBhaXIgPSBbZW50ZXJlZERhdGUsIGR1ZURpdl07XG4gICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgbGV0IHByaW9yaXR5UGFpciA9IFtwcmlvcml0eSwgcHJpb3JpdHlEaXZdO1xuICAgICAgbGV0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3Rlc1wiKS52YWx1ZTtcbiAgICAgIGxldCBzdGF0dXMgPSBcIkluIFByb2dyZXNzXCI7XG4gICAgICBsZXQgb2JqID0geyB0aXRsZVBhaXIsIGRhdGVQYWlyLCBwcmlvcml0eVBhaXIgfTtcblxuICAgICAgbGV0IHZhbGlkQXJyYXkgPSB2YWxpZGF0aW9uKG9iaik7XG4gICAgICBsZXQgaXNWYWxpZCA9IHZhbGlkQXJyYXlbMF07XG5cbiAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgIGxldCBkdWVEYXRlID0gdmFsaWRBcnJheVsxXTtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSB0b0RvKFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIHByb2plY3QsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgZW50ZXJlZERhdGUsXG4gICAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICBub3RlcyxcbiAgICAgICAgICBzdGF0dXNcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgZmV0Y2hlZExpc3QgPSBjaGVja0xpc3QoKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmV0Y2hlZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZmV0Y2hlZExpc3RbaV0udGl0bGUgPT09IHNldC5wcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgICAgICBsZXQgZmV0Y2hlZHByb2plY3QgPSBmZXRjaGVkTGlzdFtpXTtcbiAgICAgICAgICAgIGZldGNoZWRwcm9qZWN0LnRhc2tBcnJheS51bnNoaWZ0KG5ld1Rhc2spO1xuICAgICAgICAgICAgZmV0Y2hlZExpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgZmV0Y2hlZExpc3QudW5zaGlmdChmZXRjaGVkcHJvamVjdCk7XG4gICAgICAgICAgICBzdG9yZShmZXRjaGVkTGlzdCk7XG4gICAgICAgICAgICBub3RpZihuZXdUYXNrKTtcblxuICAgICAgICAgICAgbGV0IHRhc2tFbGVtZW50cyA9IHRhc2tCdWlsZGVyKG5ld1Rhc2ssIHByb2plY3RFbGVtZW50KTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBnZXRQb3NpdGlvbihwcm9qZWN0RWxlbWVudCk7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGxldCB1cGRhdGVkUHJvamVjdCA9IHByb2plY3RCdWlsZGVyKGZldGNoZWRwcm9qZWN0KTtcblxuICAgICAgICAgICAgYWxsUHJvamVjdHMubWFzdGVyTGlzdC5wdXNoKHVwZGF0ZWRQcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2plY3REaXYuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICB1cGRhdGVkUHJvamVjdC5wcm9qZWN0RWxlbWVudCxcbiAgICAgICAgICAgICAgcHJvamVjdERpdi5jaGlsZHJlbltwcm9qZWN0SW5kZXhdXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGFza0J1dHRvbnModXBkYXRlZFByb2plY3QpO1xuXG4gICAgICAgICAgICB0aGVtZUNoZWNrKCk7XG4gICAgICAgICAgICBleGl0KCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVGFzayk7XG4gICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVGFzayk7XG4gICAgYWRkRW50ZXJFdmVudChwcm9tcHQsIGNyZWF0ZVRhc2ssIGV4aXQpO1xuICB9KSgpO1xufTtcblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdFByb21wdCA9ICgoKSA9PiB7XG4gICAgbGV0IHByb21wdCA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwicHJvamVjdC1wcm9tcHRcIiwgYm9keSk7XG5cbiAgICBsZXQgcHJvbXB0SGVhZCA9IGVsZW1lbnRCdWlsZGVyKFwiaDNcIiwgXCJwcm9tcHQtaGVhZFwiLCBwcm9tcHQpO1xuICAgIHByb21wdEhlYWQudGV4dENvbnRlbnQgPSBcIlN0YXJ0IGEgTmV3IFByb2plY3RcIjtcblxuICAgIGxldCB0aXRsZURpdiA9IG5ld0lucHV0KFxuICAgICAgcHJvbXB0LFxuICAgICAgXCJuZXctdGFza1wiLFxuICAgICAgXCJ0aXRsZS1kaXZcIixcbiAgICAgIFwibmFtZS1sYWJlbFwiLFxuICAgICAgXCJQcm9qZWN0OiBcIixcbiAgICAgIFwidGl0bGUtaW5wdXRcIixcbiAgICAgIFwiRW50ZXIgYSB0aXRsZSBmb3IgeW91ciBuZXcgcHJvamVjdC5cIixcbiAgICAgIFwicHJvamVjdC10aXRsZVwiLFxuICAgICAgXCJ0aXRsZVwiXG4gICAgKTtcbiAgICBsZXQgZGVzY0RpdiA9IG5ld0lucHV0KFxuICAgICAgcHJvbXB0LFxuICAgICAgXCJuZXctdGFza1wiLFxuICAgICAgXCJkZXNjcmlwdGlvbi1kaXZcIixcbiAgICAgIFwiZGVzYy1sYWJlbFwiLFxuICAgICAgXCJEZXNjcmlwdGlvbjogXCIsXG4gICAgICBcImRlc2MtaW5wdXRcIixcbiAgICAgIFwiSW5jbHVkZSBhIGJyaWVmIGRlc2NyaXB0aW9uLlwiLFxuICAgICAgXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIsXG4gICAgICBcImRlc2NcIlxuICAgICk7XG5cbiAgICBsZXQgY2hpbGRyZW4gPSBib2R5LmNoaWxkcmVuO1xuICAgIGFkZFRyYW5zcGFyZW50KGNoaWxkcmVuKTtcblxuICAgIGxldCBidXR0b25EaXYgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcImNyZWF0ZS10YXNrLWJ1dHRvbnNcIiwgcHJvbXB0KTtcblxuICAgIGxldCBjcmVhdGVCdXR0b24gPSBlbGVtZW50QnVpbGRlcihcImJ1dHRvblwiLCBcImNyZWF0ZS10YXNrXCIsIGJ1dHRvbkRpdik7XG4gICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwiY2FuY2VsXCIsIGJ1dHRvbkRpdik7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICB0aGVtZUNoZWNrKCk7XG5cbiAgICBmdW5jdGlvbiBleGl0KCkge1xuICAgICAgcmVtb3ZlVHJhbnNwYXJlbnQoY2hpbGRyZW4pO1xuICAgICAgcHJvbXB0LnJlbW92ZSgpO1xuICAgICAgc2lkZWJhci5uZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV4aXQpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKS52YWx1ZTtcbiAgICAgIGxldCB0aXRsZVBhaXIgPSBbdGl0bGUsIHRpdGxlRGl2XTtcbiAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgIGxldCBvYmogPSB7IHRpdGxlUGFpciB9O1xuXG4gICAgICBsZXQgaXNWYWxpZCA9IHZhbGlkYXRlUHJvaihvYmopO1xuXG4gICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBbXSk7XG4gICAgICAgIGZldGNoZWRMaXN0LnVuc2hpZnQobmV3UHJvamVjdCk7XG4gICAgICAgIHN0b3JlKGZldGNoZWRMaXN0KTtcbiAgICAgICAgbGV0IHByb2plY3RTZXQgPSBwcm9qZWN0QnVpbGRlcihuZXdQcm9qZWN0KTtcbiAgICAgICAgdGFza0J1dHRvbnMocHJvamVjdFNldCk7XG4gICAgICAgIGFsbFByb2plY3RzLm1hc3Rlckxpc3QucHVzaChwcm9qZWN0U2V0KTtcbiAgICAgICAgdGhlbWVDaGVjaygpO1xuXG4gICAgICAgIGV4aXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdCk7XG4gICAgICB9O1xuICAgIH07XG4gICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQcm9qZWN0KTtcbiAgICBhZGRFbnRlckV2ZW50KHByb21wdCwgY3JlYXRlUHJvamVjdCwgZXhpdCk7XG4gIH0pKCk7XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0SGVhZGVyLCBwcm9qZWN0QnVpbGRlciwgYWRkVGFzaywgYWRkUHJvamVjdCwgYWRkRW50ZXJFdmVudCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1pbm5lci1kZWNsYXJhdGlvbnMgKi9cbmltcG9ydCB7IGVsZW1lbnRCdWlsZGVyLCBib2R5LCB0b2dnbGVIaWRlIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGRlYWRsaW5lIH0gZnJvbSBcIi4vZGF0ZVwiO1xuaW1wb3J0IHsgdGlwcywgcmFuZG9tR2VuZXJhdG9yIH0gZnJvbSBcIi4vdGlwc1wiXG5pbXBvcnQgeyB0aGVtZXMsIHNldFRoZW1lIH0gZnJvbSBcIi4vdGhlbWVzXCJcbmltcG9ydCB7IGNoZWNrTGlzdCwgZ2V0VGhlbWUgfSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IHsgcHJvamVjdEJ1aWxkZXIgfSBmcm9tICcuL3Byb2plY3RDcmVhdG9yJ1xuaW1wb3J0IHsgYXBwbHlCdXR0b25zIH0gZnJvbSBcIi4vYnV0dG9uc1wiO1xuaW1wb3J0IHsgZWwgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5cbmNvbnN0IG1vYmlsZVZpZXcgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExMDBweClcIik7XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RFbGVtZW50cyhub3RpZkJhcikge1xuICBsZXQgYmFyRWxlbWVudHMgPSBBcnJheS5mcm9tKG5vdGlmQmFyLmNoaWxkcmVuKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJhckVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBiYXJFbGVtZW50c1tpXTtcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICB9O1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlQWxsUHJvamVjdHMoKSB7XG4gIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LWNvbnRhaW5lclwiKVswXVxuICBsZXQgcHJvakNoaWxkcmVuID0gQXJyYXkuZnJvbShwcm9qZWN0cy5jaGlsZHJlbik7XG4gIGZvciAobGV0IHkgPSAwOyB5IDwgcHJvakNoaWxkcmVuLmxlbmd0aDsgeSsrKSB7XG4gICAgcHJvakNoaWxkcmVuW3ldLnJlbW92ZSgpXG4gIH07XG59O1xuXG5mdW5jdGlvbiBhZGROb05vdGlmTWVzc2FnZSgpIHtcbiAgbGV0IG5vdGlmQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5vdGlmLWJhclwiKVswXTtcbiAgbGV0IG5vdGlmcyA9IEFycmF5LmZyb20obm90aWZCYXIuY2hpbGRyZW4pO1xuICBpZiAobm90aWZzLmxlbmd0aCA9PT0gMCkge1xuICAgIGxldCBub05vdGlmID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJub3RpZlwiLCBub3RpZkJhcik7XG4gICAgbm9Ob3RpZi50ZXh0Q29udGVudCA9IFwiTm8gTmV3IE5vdGlmaWNhdGlvbnNcIlxuICAgIG5vTm90aWYuaWQgPSBcIm5vLW5vdGlmXCJcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RzKG5vdGlmQmFyKSB7XG4gIGxldCBmZXRjaGVkTGlzdCA9IGNoZWNrTGlzdCgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmV0Y2hlZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvamVjdCA9IGZldGNoZWRMaXN0W2ldO1xuICAgIGxldCBwcm9qQ29udGFpbmVyID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJwcm9qLWNvbnRhaW5lclwiLCBub3RpZkJhcik7XG4gICAgbGV0IHByb2pUaXRsZSA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwicHJvai10aXRsZVwiLCBwcm9qQ29udGFpbmVyKTtcbiAgICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgZnVuY3Rpb24gc2hvd1RoaXNQcm9qKCkge1xuICAgICAgcmVtb3ZlQWxsUHJvamVjdHMoKVxuICAgICAgbGV0IG5ld1Byb2pTZXQgPSBwcm9qZWN0QnVpbGRlcihwcm9qZWN0KTtcbiAgICAgIGxldCB0YXNrcyA9IHByb2plY3QudGFza0FycmF5O1xuICAgICAgYXBwbHlCdXR0b25zKFtuZXdQcm9qU2V0XSk7XG4gICAgICBnZXRUaGVtZSgpO1xuXG4gICAgICBpZiAobW9iaWxlVmlldy5tYXRjaGVzKSB7XG4gICAgICAgIG5ld1Byb2pTZXQucHJvamVjdEVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1Byb2pTZXQucHJvamVjdEVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjMwJVwiO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcHJvakNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1RoaXNQcm9qKVxuICB9O1xufTtcblxuY29uc3Qgc2lkZWJhciA9ICgoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcInNpZGViYXJcIiwgYm9keSk7XG5cbiAgY29uc3QgbWluU2lkZUJhckJ1dHRvbiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwibWluLXNpZGViYXItYnV0dG9uXCIsIGVsZW1lbnQpO1xuICBtaW5TaWRlQmFyQnV0dG9uLnRleHRDb250ZW50ID0gXCItXCJcblxuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LWNvbnRhaW5lclwiKVswXTtcbiAgXG4gIGZ1bmN0aW9uIG1heGltaXplU2lkZWJhcigpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtaW4tc2lkZWJhclwiKTtcbiAgICBtaW5TaWRlQmFyQnV0dG9uLnRleHRDb250ZW50ID0gXCItXCI7XG5cbiAgICBpZiAobW9iaWxlVmlldy5tYXRjaGVzKSB7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgIHByb2plY3RDb250YWluZXIuc3R5bGUud2lkdGggPSBcIjk4JVwiO1xuICAgICAgYmFyQ29udGFpbmVyLnN0eWxlLm1hcmdpbiA9IFwiNSUgMCAxNSUgMFwiXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RDb250YWluZXIuc3R5bGUubGVmdCA9IFwiNy41JVwiO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiODUlXCI7XG4gICAgfVxuXG4gICAgbWluU2lkZUJhckJ1dHRvbi5zdHlsZS5hbGlnblNlbGYgPSBudWxsO1xuICAgIG1pblNpZGVCYXJCdXR0b24uc3R5bGUubWFyZ2luID0gbnVsbDtcbiAgICBtaW5TaWRlQmFyQnV0dG9uLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjBcIjtcbiAgICBtaW5TaWRlQmFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtaW5pbWl6ZVNpZGVCYXIpXG4gIH07XG5cbiAgZnVuY3Rpb24gbWluaW1pemVTaWRlQmFyKCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1pbi1zaWRlYmFyXCIpO1xuICAgIHByb2plY3RDb250YWluZXIuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgIHByb2plY3RDb250YWluZXIuc3R5bGUud2lkdGggPSBcIjk4JVwiO1xuICAgIG1pblNpZGVCYXJCdXR0b24udGV4dENvbnRlbnQgPSBcIuKWoVwiO1xuXG4gICAgaWYgKG1vYmlsZVZpZXcubWF0Y2hlcykge1xuICAgICAgbWluU2lkZUJhckJ1dHRvbi5zdHlsZS5hbGlnblNlbGYgPSBcImZsZXgtZW5kXCI7XG4gICAgICBtaW5TaWRlQmFyQnV0dG9uLnN0eWxlLm1hcmdpbiA9IG51bGw7XG4gICAgICBiYXJDb250YWluZXIuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pblNpZGVCYXJCdXR0b24uc3R5bGUuYWxpZ25TZWxmID0gXCJjZW50ZXJcIjtcbiAgICAgIG1pblNpZGVCYXJCdXR0b24uc3R5bGUubWFyZ2luID0gXCIxNSUgMFwiO1xuICAgIH1cbiAgICBtaW5TaWRlQmFyQnV0dG9uLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjVweFwiO1xuICAgIG1pblNpZGVCYXJCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1pbmltaXplU2lkZUJhcik7XG4gICAgbWluU2lkZUJhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWF4aW1pemVTaWRlYmFyKTtcbiAgfVxuICBtaW5TaWRlQmFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtaW5pbWl6ZVNpZGVCYXIpXG5cbiAgY29uc3QgaGVhZENvbnRhaW5lciA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwiaGVhZC1jb250YWluZXJcIiwgZWxlbWVudCk7XG4gIGNvbnN0IGhlYWQgPSBlbGVtZW50QnVpbGRlcihcImgxXCIsIFwic2lkZWJhci1oZWFkXCIsIGhlYWRDb250YWluZXIpO1xuICBoZWFkLnRleHRDb250ZW50ID0gXCJPblRhc2tcIjtcblxuICBjb25zdCBzaWRlQnV0dG9ucyA9IGVsZW1lbnRCdWlsZGVyKFxuICAgIFwiZGl2XCIsXG4gICAgXCJzaWRlLWJ1dHRvbi1jb250YWluZXJcIixcbiAgICBoZWFkQ29udGFpbmVyXG4gICk7XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwic2lkZS1idXR0b25zXCIsIHNpZGVCdXR0b25zKTtcbiAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbiAgbmV3UHJvamVjdC5pZCA9IFwibmV3LXByb2plY3RcIjtcblxuICBjb25zdCBjaGFuZ2VWaWV3ID0gZWxlbWVudEJ1aWxkZXIoXCJidXR0b25cIiwgXCJzaWRlLWJ1dHRvbnNcIiwgc2lkZUJ1dHRvbnMpO1xuICBjaGFuZ2VWaWV3LmlkID0gXCJ2aWV3LWJ1dHRvblwiO1xuICBjaGFuZ2VWaWV3LnRleHRDb250ZW50ID0gXCJDaGFuZ2UgVmlld1wiO1xuXG4gIGNvbnN0IGJhckNvbnRhaW5lciA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwiYmFyLWNvbnRhaW5lclwiLCBlbGVtZW50KTtcbiAgY29uc3Qgbm90aWZIZWFkQ29udGFpbmVyID0gZWxlbWVudEJ1aWxkZXIoXG4gICAgXCJkaXZcIixcbiAgICBcIm5vdGlmLWhlYWQtY29udGFpbmVyXCIsXG4gICAgYmFyQ29udGFpbmVyXG4gICk7XG4gIGNvbnN0IHNob3dOb3RpZnMgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcIm5vdGlmLWJ1dHRvblwiLCBub3RpZkhlYWRDb250YWluZXIpO1xuICBzaG93Tm90aWZzLnRleHRDb250ZW50ID0gXCJOXCI7XG5cbiAgY29uc3Qgc2hvd1Byb2plY3RzID0gZWxlbWVudEJ1aWxkZXIoXG4gICAgXCJkaXZcIixcbiAgICBcIm5vdGlmLWJ1dHRvblwiLFxuICAgIG5vdGlmSGVhZENvbnRhaW5lclxuICApO1xuXG4gIGNvbnN0IHNob3dUaGVtZXMgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcIm5vdGlmLWJ1dHRvblwiLCBub3RpZkhlYWRDb250YWluZXIpO1xuICBzaG93VGhlbWVzLnRleHRDb250ZW50ID0gXCJUXCJcbiAgc2hvd1Byb2plY3RzLnRleHRDb250ZW50ID0gXCJQXCI7XG4gIHNob3dQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwic2hvdy1wcm9qZWN0c1wiKVxuXG4gIGNvbnN0IG5vdGlmQmFyID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJub3RpZi1iYXJcIiwgYmFyQ29udGFpbmVyKTtcbiAgbm90aWZCYXIuY2xhc3NMaXN0LmFkZChcIm5ldy1ub3RpZmljYXRpb25zXCIpO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlTm90aWZzKCkge1xuICAgIGlmIChub3RpZkJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aGVtZXNcIikpIHtcbiAgICAgIG5vdGlmQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aGVtZXNcIik7XG4gICAgfSBlbHNlIGlmIChub3RpZkJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0c1wiKSkge1xuICAgICAgbm90aWZCYXIuY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3RzXCIpO1xuICAgIH07XG5cbiAgICBub3RpZkJhci5jbGFzc0xpc3QuYWRkKFwibmV3LW5vdGlmaWNhdGlvbnNcIik7XG5cbiAgICByZW1vdmVMaXN0RWxlbWVudHMobm90aWZCYXIpXG4gICAgbGV0IGZldGNoZWRMaXN0ID0gY2hlY2tMaXN0KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZldGNoZWRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcHJvamVjdCA9IGZldGNoZWRMaXN0W2ldO1xuICAgICAgbGV0IHRhc2tzID0gcHJvamVjdC50YXNrQXJyYXk7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRhc2tzLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIG5vdGlmKHRhc2tzW3ldKTtcbiAgICAgIH07XG4gICAgfTtcbiAgICBsZXQgbm90aWZOdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibm90aWYtbnVtXCIpWzBdO1xuICAgIGlmIChub3RpZk51bSkge1xuICAgICAgbm90aWZOdW0ucmVtb3ZlKCk7XG4gICAgfVxuICAgIGFkZE5vTm90aWZNZXNzYWdlKClcbiAgICBnZXRUaGVtZSgpO1xuICB9O1xuXG4gIHNob3dOb3RpZnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdlbmVyYXRlTm90aWZzKTtcblxuICBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzKCkge1xuICAgIGlmIChub3RpZkJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aGVtZXNcIikpIHtcbiAgICAgIG5vdGlmQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aGVtZXNcIik7XG4gICAgfSBlbHNlIGlmIChub3RpZkJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJuZXctbm90aWZpY2F0aW9uc1wiKSkge1xuICAgICAgbm90aWZCYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5ldy1ub3RpZmljYXRpb25zXCIpO1xuICAgIH07XG4gICAgbm90aWZCYXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuICAgIHJlbW92ZUxpc3RFbGVtZW50cyhub3RpZkJhcik7XG4gICAgYWRkUHJvamVjdHMobm90aWZCYXIpO1xuXG4gICAgaWYgKCEoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlZS1hbGwtcHJvalwiKVswXSkpIHtcbiAgICAgIGxldCBzZWVBbGxQcm9qID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJzZWUtYWxsLXByb2pcIiwgbm90aWZCYXIpO1xuICAgICAgc2VlQWxsUHJvai50ZXh0Q29udGVudCA9IFwiU2VlIEFsbCBQcm9qZWN0c1wiO1xuICBcbiAgICAgIGZ1bmN0aW9uIHNob3dBbGxQcm9qZWN0cygpIHtcbiAgICAgICAgcmVtb3ZlQWxsUHJvamVjdHMoKTtcbiAgICAgICAgbGV0IGZldGNoZWRMaXN0ID0gY2hlY2tMaXN0KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmV0Y2hlZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgcHJvamVjdCA9IGZldGNoZWRMaXN0W2ldO1xuICAgICAgICAgIGxldCBuZXdQcm9qU2V0ID0gcHJvamVjdEJ1aWxkZXIocHJvamVjdCk7XG4gICAgICAgICAgbGV0IHRhc2tzID0gcHJvamVjdC50YXNrQXJyYXk7XG4gICAgICAgICAgYXBwbHlCdXR0b25zKFtuZXdQcm9qU2V0XSk7XG4gICAgICAgIH07XG4gICAgICAgIGdldFRoZW1lKCk7XG4gICAgICB9O1xuICAgICAgc2VlQWxsUHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FsbFByb2plY3RzKTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIG5ld05vdGlmcygpIHtcbiAgICAgIGNoZWNrTm90aWZzKCk7XG4gICAgfTtcbiAgICBzaG93Tm90aWZzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdOb3RpZnMpO1xuICB9O1xuXG4gIHNob3dQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wdWxhdGVQcm9qZWN0cyk7XG5cbiAgZnVuY3Rpb24gdGhlbWVPcHRpb25zKCkge1xuICAgIGlmIChub3RpZkJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0c1wiKSkge1xuICAgICAgbm90aWZCYXIuY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3RzXCIpO1xuICAgIH0gZWxzZSBpZiAobm90aWZCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmV3LW5vdGlmaWNhdGlvbnNcIikpIHtcbiAgICAgIG5vdGlmQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuZXctbm90aWZpY2F0aW9uc1wiKTtcbiAgICB9O1xuICAgIG5vdGlmQmFyLmNsYXNzTGlzdC5hZGQoXCJ0aGVtZXNcIik7XG4gICAgcmVtb3ZlTGlzdEVsZW1lbnRzKG5vdGlmQmFyKVxuICAgIGVsZW1lbnRCdWlsZGVyKFwidWxcIiwgXCJ0aGVtZXMtbGlzdFwiLCBub3RpZkJhcik7XG4gICAgdGhlbWVzKCk7XG4gIH1cblxuICBzaG93VGhlbWVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGVtZU9wdGlvbnMpO1xuICBub3RpZkJ1dHRvbigpO1xuXG4gIGNvbnN0IHRpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIHRpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpcHMtY29udGFpbmVyXCIpO1xuXG4gIGlmIChtb2JpbGVWaWV3Lm1hdGNoZXMpIHtcbiAgICBib2R5LmFwcGVuZENoaWxkKHRpcHNDb250YWluZXIpO1xuICAgIGNvbnN0IHRpcEhlYWQgPSBlbGVtZW50QnVpbGRlcihcImgzXCIsIFwidGlwLWhlYWRcIiwgdGlwc0NvbnRhaW5lcik7XG4gICAgdGlwSGVhZC50ZXh0Q29udGVudCA9IFwiUHJvZHVjdGl2aXR5IFRpcHNcIlxuXG4gICAgY29uc3QgdGlwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGlwQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGlwXCIpO1xuICAgIGNvbnN0IHRpcCA9IHJhbmRvbUdlbmVyYXRvcih0aXBzKTtcbiAgICB0aXBDb250ZW50LnRleHRDb250ZW50ID0gdGlwO1xuICAgIHRpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGlwQ29udGVudCk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXBzQ29udGFpbmVyKTtcblxuICAgIHRpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1pbi10aXBzXCIpO1xuICAgIGNvbnN0IHRpcEhlYWQgPSBlbGVtZW50QnVpbGRlcihcImgzXCIsIFwidGlwLWhlYWRcIiwgdGlwc0NvbnRhaW5lcik7XG4gICAgdGlwSGVhZC50ZXh0Q29udGVudCA9IFwiUHJvZHVjdGl2aXR5IFRpcHNcIlxuICBcbiAgICBjb25zdCBtaW5UaXBzQnV0dG9uID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJtaW4tdGlwcy1idXR0b25cIiwgdGlwc0NvbnRhaW5lcik7XG4gICAgbWluVGlwc0J1dHRvbi50ZXh0Q29udGVudCA9IFwi4pahXCJcbiAgXG4gICAgZnVuY3Rpb24gbWF4aW1pemUoKSB7XG4gICAgICB0aXBzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtaW4tdGlwc1wiKTtcbiAgICAgIG1pblRpcHNCdXR0b24udGV4dENvbnRlbnQgPSBcIi1cIjtcbiAgICAgIG1pblRpcHNCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1heGltaXplKTtcbiAgICAgIG1pblRpcHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1pbmltaXplKTtcbiAgICB9O1xuICBcbiAgICBmdW5jdGlvbiBtaW5pbWl6ZSgpIHtcbiAgICAgIHRpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1pbi10aXBzXCIpO1xuICAgICAgbWluVGlwc0J1dHRvbi50ZXh0Q29udGVudCA9IFwi4pahXCI7XG4gICAgICBtaW5UaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYXhpbWl6ZSk7XG4gICAgfTtcbiAgXG4gICAgbWluVGlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWF4aW1pemUpO1xuICBcbiAgICBjb25zdCB0aXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXBDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0aXBcIik7XG4gICAgY29uc3QgdGlwID0gcmFuZG9tR2VuZXJhdG9yKHRpcHMpO1xuICAgIHRpcENvbnRlbnQudGV4dENvbnRlbnQgPSB0aXA7XG4gICAgdGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXBDb250ZW50KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGVsZW1lbnQsXG4gICAgbmV3UHJvamVjdCxcbiAgICBjaGFuZ2VWaWV3LFxuICAgIG5vdGlmQmFyLFxuICAgIHNob3dOb3RpZnMsXG4gICAgbm90aWZIZWFkQ29udGFpbmVyLFxuICAgIHRpcHNDb250YWluZXIsXG4gICAgcG9wdWxhdGVQcm9qZWN0cyxcbiAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIG5vdGlmTnVtKCkge1xuICBsZXQgbm90aWZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5vdGlmXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGlmcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub3RpZnNbaV0uaWQgIT09IFwibm8tbm90aWZcIikge1xuICAgICAgbGV0IG51bSA9IG5vdGlmcy5sZW5ndGg7XG4gICAgICBsZXQgcHJldmlvdXNOb3RpZnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibm90aWYtbnVtXCIpWzBdO1xuICAgICAgaWYgKHByZXZpb3VzTm90aWZzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJldmlvdXNOb3RpZnMucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBpZiAobnVtID4gMCkge1xuICAgICAgICBsZXQgbmV3Tm90aWZzID0gZWxlbWVudEJ1aWxkZXIoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBcIm5vdGlmLW51bVwiLFxuICAgICAgICAgIHNpZGViYXIubm90aWZIZWFkQ29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIG5ld05vdGlmcy50ZXh0Q29udGVudCA9IG51bTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9Ob3RpZkNoZWNrZXIoKSB7XG4gIGxldCBub3RpZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm8tbm90aWZcIik7XG4gIGlmIChub3RpZikge1xuICAgIGxldCBub3RpZkNvbnRhaW5lciA9IEFycmF5LmZyb20oc2lkZWJhci5ub3RpZkJhci5jaGlsZHJlbilbMF07XG4gICAgbm90aWZDb250YWluZXIucmVtb3ZlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVhZGxpbmVOb3RpZih0YXNrKSB7XG4gIGxldCBkZWFkbGluZU1lc3NhZ2UgPSBkZWFkbGluZSh0YXNrLmVudGVyZWREYXRlKTtcblxuICBpZiAoXG4gICAgZGVhZGxpbmVNZXNzYWdlLmluZGV4T2YoXCJkYXlcIikgPiAwIHx8XG4gICAgZGVhZGxpbmVNZXNzYWdlLmluZGV4T2YoXCJob3Vyc1wiKSA+IDBcbiAgKSB7XG4gICAgaWYgKHNpZGViYXIubm90aWZCYXIuY2hpbGRyZW4ubGVuZ3RoIDwgNykge1xuICAgICAgbGV0IG5ld0NvbnRhaW5lciA9IGVsZW1lbnRCdWlsZGVyKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcIm5vdGlmLWNvbnRhaW5lclwiLFxuICAgICAgICBzaWRlYmFyLm5vdGlmQmFyXG4gICAgICApO1xuICAgICAgbGV0IG5ld05vdGlmID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJub3RpZlwiLCBuZXdDb250YWluZXIpO1xuICAgICAgbmV3Tm90aWYuaWQgPSBcImRlYWRsaW5lXCI7XG4gICAgICBsZXQgbm90aWZUaXRsZSA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwibm90aWYtdGl0bGVcIiwgbmV3Tm90aWYpO1xuICAgICAgbm90aWZUaXRsZS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICBub3RpZlRpdGxlLnRleHRDb250ZW50ID0gYCR7dGFzay50aXRsZX06IGBcbiAgICAgIGxldCBub3RpZkRhdGUgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcIm5vdGlmLWRhdGVcIiwgbmV3Tm90aWYpO1xuICAgICAgbm90aWZEYXRlLnRleHRDb250ZW50ID0gIGAke2RlYWRsaW5lTWVzc2FnZX1gO1xuICAgICAgbm9Ob3RpZkNoZWNrZXIoKTtcbiAgICAgIHJldHVybiBkZWFkbGluZU1lc3NhZ2U7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBcIk5vIE5ldyBOb3RpZmljYXRpb25zXCI7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vdGlmQnV0dG9uKCkge1xuICBsZXQgbm90aWZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5vdGlmXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGlmcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBub3RpZiA9IG5vdGlmc1tpXTtcbiAgICBsZXQgcGFyZW50ID0gbm90aWYucGFyZW50Tm9kZTtcbiAgICBpZiAobm90aWYucGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgbm90aWYuaWQgIT09IFwibm8tbm90aWZcIikge1xuICAgICAgbGV0IGJ1dHRvbiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwicmVtb3ZlLW5vdGlmXCIsIHBhcmVudCk7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgIGZ1bmN0aW9uIHJlbW92ZU5vdGlmKCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIGxldCBwcmV2aW91c05vdGlmID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5vdGlmLW51bVwiKVswXTtcbiAgICAgICAgaWYgKHByZXZpb3VzTm90aWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG5vdGlmTnVtKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vdGlmcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBuZXdOb3RpZkNvbnRhaW5lciA9IGVsZW1lbnRCdWlsZGVyKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwibm90aWYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICBzaWRlYmFyLm5vdGlmQmFyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBuZXdOb3RpZkNvbnRhaW5lci5pZCA9IFwibm9uZVwiO1xuICAgICAgICAgIGNvbnN0IG5vTm90aWYgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJub3RpZlwiLCBuZXdOb3RpZkNvbnRhaW5lcik7XG4gICAgICAgICAgbm9Ob3RpZi5pZCA9IFwibm8tbm90aWZcIjtcbiAgICAgICAgICBub05vdGlmLnRleHRDb250ZW50ID0gXCJObyBOZXcgTm90aWZpY2F0aW9uc1wiO1xuICAgICAgICAgIHByZXZpb3VzTm90aWYucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlTm90aWYpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja05vdGlmcygpIHtcbiAgaWYgKHNpZGViYXIubm90aWZCYXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGlmIChzaWRlYmFyLm5vdGlmQmFyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgICAgdG9nZ2xlSGlkZShzaWRlYmFyLm5vdGlmQmFyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbm90aWYobmV3VGFzaykge1xuICBpZiAoc2lkZWJhci5ub3RpZkJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJuZXctbm90aWZpY2F0aW9uc1wiKSkge1xuICAgIGRlYWRsaW5lTm90aWYobmV3VGFzayk7XG4gICAgbm90aWZCdXR0b24oKTtcbiAgICBjaGVja05vdGlmcygpO1xuICAgIG5vdGlmTnVtKCk7XG4gIH07XG59O1xuXG5mdW5jdGlvbiB0aGVtZUNoZWNrKCkge1xuICBsZXQgY29sb3IgPSBzaWRlYmFyLmVsZW1lbnQuaWQ7XG4gIGxldCBjb21wID0gc2lkZWJhci50aXBzQ29udGFpbmVyLmlkO1xuICBzZXRUaGVtZShjb2xvciwgY29tcClcbn1cblxuZXhwb3J0IHsgc2lkZWJhciwgbm90aWYsIHRoZW1lQ2hlY2ssIG5vdGlmQnV0dG9uLCBhZGRQcm9qZWN0cywgYWRkTm9Ob3RpZk1lc3NhZ2UgfTtcbiIsImltcG9ydCB7IHNldFRoZW1lIH0gZnJvbSAnLi90aGVtZXMnXG5cbmNvbnN0IHN0b3JlID0gKHByb2pMaXN0KSA9PiB7XG4gICAgY29uc3QgbmV3QXJyYXkgPSBKU09OLnN0cmluZ2lmeShwcm9qTGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuZXdBcnJheVwiLCBuZXdBcnJheSk7XG59XG5cbmNvbnN0IGNoZWNrTGlzdCA9ICgpID0+IHtcbiAgICBsZXQgZmV0Y2hlZExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmV3QXJyYXlcIikpO1xuICAgIGlmIChmZXRjaGVkTGlzdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gW11cbiAgICB9IGVsc2UgeyByZXR1cm4gZmV0Y2hlZExpc3QgfVxufVxuXG5jb25zdCBnZXRUaGVtZSA9ICgpID0+IHtcbiAgICBsZXQgdGhlbWVQYWlyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpKVxuICAgIGlmICh0aGVtZVBhaXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZXRUaGVtZSh0aGVtZVBhaXJbMF0sIHRoZW1lUGFpclsxXSlcbiAgICB9O1xufTtcblxuY29uc3QgdXBkYXRlVGFzayA9ICh0aGlzVGFzaykgPT4ge1xuICAgIGxldCBwcm9qTGlzdCA9IGNoZWNrTGlzdCgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2pMaXN0W2ldO1xuICAgICAgICBsZXQgdGFza3MgPSBwcm9qZWN0LnRhc2tBcnJheTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0YXNrcy5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFza3NbeV0udGl0bGUpXG4gICAgICAgICAgICBpZiAodGFza3NbeV0udGl0bGUgPT09IHRoaXNUYXNrLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdGFza3NbeV0uc3RhdHVzID0gdGhpc1Rhc2suc3RhdHVzXG4gICAgICAgICAgICAgICAgc3RvcmUocHJvakxpc3QpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG5leHBvcnQgeyBzdG9yZSwgY2hlY2tMaXN0LCBnZXRUaGVtZSwgdXBkYXRlVGFzayB9IiwiaW1wb3J0IHsgZWxlbWVudEJ1aWxkZXIsIHByb2plY3REaXYgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdXBkYXRlVGFzayB9IGZyb20gXCIuL3N0b3JlXCJcblxuY29uc3QgdGFza0J1aWxkZXIgPSAodGFzaywgcGFyZW50KSA9PiB7XG4gIGxldCB0YXNrRGl2ID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJ0YXNrXCIsIHBhcmVudCk7XG4gIGxldCB0b3BEaXYgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcInRvcC1kaXZcIiwgdGFza0Rpdik7XG4gIGxldCByZW1vdmVUYXNrID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJyZW1vdmUtdGFza1wiLCB0b3BEaXYpO1xuICByZW1vdmVUYXNrLnRleHRDb250ZW50ID0gXCJYXCI7XG4gIGxldCBoZWFkID0gZWxlbWVudEJ1aWxkZXIoXCJoM1wiLCBcInRhc2staGVhZFwiLCB0b3BEaXYpO1xuICBoZWFkLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgbGV0IGRlc2MgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJ0YXNrLWRlc2NcIiwgdGFza0Rpdik7XG4gIGRlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBsZXQgZHVlRGF0ZSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcImR1ZS1kYXRlXCIsIHRhc2tEaXYpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke3Rhc2suZHVlRGF0ZX1gO1xuICBsZXQgcHJpb3JpdHlOdW0gPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJwcmlvcml0eVwiLCB0YXNrRGl2KTtcbiAgcHJpb3JpdHlOdW0udGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gO1xuICBsZXQgbm90ZXMgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJub3Rlc1wiLCB0YXNrRGl2KTtcbiAgbm90ZXMudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xuICBsZXQgc3RhdHVzQ29udGFpbmVyID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJzdGF0dXMtY29udGFpbmVyXCIsIHRhc2tEaXYpO1xuICBsZXQgc3RhdHVzID0gZWxlbWVudEJ1aWxkZXIoXCJsYWJlbFwiLCBcInN0YXR1c1wiLCBzdGF0dXNDb250YWluZXIpO1xuICBzdGF0dXMuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzayBzdGF0dXNcIik7XG4gIHN0YXR1cy50ZXh0Q29udGVudCA9IGBTdGF0dXM6ICR7dGFzay5zdGF0dXN9YDtcbiAgbGV0IHN0YXR1c0JveCA9IGVsZW1lbnRCdWlsZGVyKFwiaW5wdXRcIiwgXCJzdGF0dXMtYm94XCIsIHN0YXR1c0NvbnRhaW5lcik7XG4gIHN0YXR1c0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIFxuICBpZiAodGFzay5zdGF0dXMgPT09IFwiQ29tcGxldGVcIikge1xuICAgIHN0YXR1c0JveC5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuICBcbiAgc3RhdHVzQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmIChzdGF0dXNCb3guY2hlY2tlZCkge1xuICAgICAgdGFzay5zdGF0dXMgPSAnQ29tcGxldGUnO1xuICAgICAgdXBkYXRlVGFzayh0YXNrKVxuICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gYFN0YXR1czogJHt0YXNrLnN0YXR1c31gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrLnN0YXR1cyA9ICdJbiBQcm9ncmVzcydcbiAgICAgIHVwZGF0ZVRhc2sodGFzaylcbiAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGBTdGF0dXM6ICR7dGFzay5zdGF0dXN9YDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgdGFza0RpdixcbiAgICB0b3BEaXYsXG4gICAgcmVtb3ZlVGFzayxcbiAgICBoZWFkLFxuICAgIGRlc2MsXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eU51bSxcbiAgICBub3RlcyxcbiAgICBzdGF0dXMsXG4gICAgc3RhdHVzQm94LFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdEhlYWRlciA9IChwcm9qZWN0LCBwYXJlbnQpID0+IHtcbiAgbGV0IHByb2plY3RFbGVtZW50ID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJwcm9qZWN0XCIsIHBhcmVudCk7XG4gIHBhcmVudC5wcmVwZW5kKHByb2plY3RFbGVtZW50KTtcblxuICBsZXQgcHJvamVjdEhlYWQgPSBlbGVtZW50QnVpbGRlcihcImgyXCIsIFwicHJvamVjdC1oZWFkXCIsIHByb2plY3RFbGVtZW50KTtcbiAgcHJvamVjdEhlYWQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gIGxldCBwcm9qZWN0RGVzYyA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwicHJvamVjdC1kZXNjXCIsIHByb2plY3RFbGVtZW50KTtcbiAgcHJvamVjdERlc2MudGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuXG4gIHJldHVybiBwcm9qZWN0RWxlbWVudDtcbn07XG5cbmNvbnN0IHByb2plY3RCdWlsZGVyID0gKHByb2plY3QpID0+IHtcbiAgbGV0IHByb2plY3RFbGVtZW50ID0gcHJvamVjdEhlYWRlcihwcm9qZWN0LCBwcm9qZWN0RGl2KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRhc2sgPSBwcm9qZWN0LnRhc2tBcnJheVtpXTtcbiAgICB0YXNrQnVpbGRlcih0YXNrLCBwcm9qZWN0RWxlbWVudCk7XG4gIH1cblxuICBjb25zdCBkZWxldGVMaXN0ID0gKCkgPT4ge1xuICAgIHByb2plY3RFbGVtZW50LnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0YXNrID09PSBwcm9qZWN0LnRhc2tBcnJheVtpXSkge1xuICAgICAgICBwcm9qZWN0LnRhc2tBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2plY3QudGFza0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gKCkgPT4ge1xuICAgIGxldCBzb3J0ZWRBcnJheSA9IHByb2plY3QudGFza0FycmF5LnNvcnQoXG4gICAgICAoZmlyc3RJdGVtLCBzZWNvbmRJdGVtKSA9PiBmaXJzdEl0ZW0ucHJpb3JpdHkgLSBzZWNvbmRJdGVtLnByaW9yaXR5XG4gICAgKTtcbiAgICByZXR1cm4gc29ydGVkQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgbWluVGFza3MgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RDaGlsZHJlbiA9IEFycmF5LmZyb20ocHJvamVjdEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdENoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvamVjdENoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInRhc2tcIikpIHtcbiAgICAgICAgbGV0IHRhc2tFbGVtZW50ID0gcHJvamVjdENoaWxkcmVuW2ldO1xuICAgICAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWluXCIpO1xuICAgICAgICBsZXQgdGFza0NoaWxkcmVuID0gQXJyYXkuZnJvbSh0YXNrRWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGFza0NoaWxkcmVuLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgaWYgKHkgPT09IDEgfHwgeSA9PT0gMyB8fCB5ID09PSA0IHx8IHkgPT09IDUpIHtcbiAgICAgICAgICAgIHRhc2tDaGlsZHJlblt5XS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbWF4VGFza3MgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RDaGlsZHJlbiA9IEFycmF5LmZyb20ocHJvamVjdEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdENoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFza0VsZW1lbnQgPSBwcm9qZWN0Q2hpbGRyZW5baV07XG4gICAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibWluXCIpO1xuICAgICAgdGFza0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB0YXNrQnVpbGRlcihwcm9qZWN0LnRhc2tBcnJheVtpXSwgcHJvamVjdEVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0RWxlbWVudCxcbiAgICBwcm9qZWN0LFxuICAgIHJlbW92ZVRhc2ssXG4gICAgc29ydEJ5UHJpb3JpdHksXG4gICAgZGVsZXRlTGlzdCxcbiAgICBtaW5UYXNrcyxcbiAgICBtYXhUYXNrcyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHRhc2tCdWlsZGVyLCBwcm9qZWN0QnVpbGRlciB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWlubmVyLWRlY2xhcmF0aW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGVsZW1lbnRCdWlsZGVyIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5cbmNvbnN0IG1vYmlsZVZpZXcgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExMDBweClcIik7XG5cbmNvbnN0IHRoZW1lcyA9ICgpID0+IHtcbiAgICBsZXQgdGhlbWVzID0ge1xuICAgICAgICBcIkVtZXJhbGRcIjogXCIjNTBDODc4XCIsIFxuICAgICAgICBcIkFydGljXCI6IFwiI0M2REFFOVwiLFxuICAgICAgICBcIlJ1YnlcIjogXCIjRTQ0MTdGXCIsXG4gICAgICAgIFwiUHVycGxlXCI6IFwiI0JCNTRDRTtcIixcbiAgICAgICAgXCJDbGFzc2ljXCI6IFwiIzgyQzFGOFwiLFxuICAgICAgfTtcbiAgICBcbiAgICAgIGxldCB0aGVtZU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgIGxldCB0aGVtZUFycmF5ID0gW11cbiAgICAgIGxldCBjb2xvckFycmF5ID0gW11cblxuICAgICAgbGV0IHRoZW1lc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGhlbWVzLWxpc3RcIilbMF07XG4gICAgXG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhlbWVzKSB7XG4gICAgICAgIGxldCB0aGVtZSA9IGVsZW1lbnRCdWlsZGVyKFwibGlcIiwgXCJ0aGVtZS1vcHRpb25cIiwgdGhlbWVzTGlzdCk7XG4gICAgICAgIGxldCB0aGVtZVRleHQgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcInRoZW1lLXRleHRcIiwgdGhlbWUpO1xuICAgICAgICB0aGVtZUFycmF5LnB1c2godGhlbWUpXG4gICAgICAgIGxldCBjb2xvclN0cmluZyA9IGAke2tleX1gO1xuICAgICAgICB0aGVtZVRleHQudGV4dENvbnRlbnQgPSBjb2xvclN0cmluZ1xuICAgICAgICBsZXQgY29sb3JFbGVtZW50ID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJjb2xvclwiLCB0aGVtZSk7XG4gICAgICAgIGNvbG9yRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZXNba2V5XX07YClcbiAgICAgICAgbGV0IGNvbG9yID0gY29sb3JTdHJpbmcuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBjb2xvclN0cmluZy5zbGljZSgxKTtcbiAgICAgICAgbGV0IGNvbXAgPSBjb2xvciArIFwiQ29tcFwiXG4gICAgICAgIGxldCBjb2xvclBhaXIgPSB7IGNvbG9yLCBjb21wIH1cbiAgICAgICAgY29sb3JBcnJheS5wdXNoKGNvbG9yUGFpcilcbiAgICAgIH1cbiAgICBcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGVtZUFycmF5Lmxlbmd0aDsgaSsrKXsgXG4gICAgICAgIHRoZW1lTWFwLnNldCh0aGVtZUFycmF5W2ldLCBjb2xvckFycmF5W2ldKTsgXG4gICAgICB9XG4gICAgXG4gICAgICBmb3IgKGxldCBbdGhlbWVFbGVtZW50LCBjb2xvclBhaXJdIG9mIHRoZW1lTWFwLmVudHJpZXMoKSkge1xuICAgICAgICBsZXQgY29sb3IgPSBjb2xvclBhaXJbT2JqZWN0LmtleXMoY29sb3JQYWlyKVswXV07XG4gICAgICAgIGxldCBjb21wID0gY29sb3JQYWlyW09iamVjdC5rZXlzKGNvbG9yUGFpcilbMV1dO1xuICAgICAgICBmdW5jdGlvbiBuZXdUaGVtZSgpIHtcbiAgICAgICAgICBzZXRUaGVtZShjb2xvciwgY29tcCk7XG4gICAgICAgIH0gICAgICBcbiAgICAgICAgdGhlbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUaGVtZSk7XG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBzZXRUaGVtZShjb2xvciwgY29tcCkge1xuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QnKTtcbiAgICBsZXQgdGFza0VsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2tcIik7XG4gICAgbGV0IHNpZGViYXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2lkZWJhcicpWzBdO1xuICAgIGxldCBzaWRlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2lkZS1idXR0b24tY29udGFpbmVyJylbMF07XG4gICAgbGV0IG5vdGlmQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25vdGlmLWJ1dHRvbicpO1xuICAgIGxldCBub3RpZkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25vdGlmLWJhcicpWzBdO1xuICAgIGxldCBub3RpZkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25vdGlmLWNvbnRhaW5lcicpWzBdO1xuICAgIGxldCByZW1vdmVOb3RpZnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZW1vdmUtbm90aWYnKTtcbiAgICBsZXQgdGlwc0NvbnRhaW5lciA9IHNpZGViYXJFbGVtZW50Lmxhc3RDaGlsZDtcbiAgICBsZXQgYnV0dG9uRWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJ1dHRvblwiKTtcbiAgICBsZXQgdGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFza1wiKTtcbiAgICBsZXQgcHJvamVjdFByb21wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LXByb21wdFwiKVswXTtcbiAgICBsZXQgdGFza1Byb21wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLXByb21wdFwiKVswXTtcbiAgICBsZXQgd2FybmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3YXJuaW5nXCIpWzBdO1xuICAgIGxldCB0aGVtZUVsZW1lbnRBcnJheSA9IFtzaWRlYmFyRWxlbWVudF07XG4gICAgbGV0IHNpZGViYXJNaW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWluLXNpZGViYXItYnV0dG9uXCIpWzBdO1xuICAgIGxldCByZW1vdmVUYXNrRWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVtb3ZlLXRhc2tcIik7XG4gICAgbGV0IHRvcEJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9wLWJ1dHRvbnNcIik7XG4gIFxuICAgIGlmICh0YXNrUHJvbXB0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhc2tQcm9tcHQuaWQgPSBjb2xvcjtcbiAgICB9XG4gIFxuICAgIGlmIChwcm9qZWN0UHJvbXB0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb2plY3RQcm9tcHQuaWQgPSBjb2xvcjtcbiAgICB9O1xuICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGFza0VsZW1lbnRzW2ldLmlkID0gY29tcDtcbiAgICB9O1xuICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGlmQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgbm90aWZCdXR0b25zW2ldLmlkID0gY29tcDtcbiAgICB9O1xuICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbW92ZU5vdGlmcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVtb3ZlTm90aWZzW2ldLmlkID0gY29tcDtcbiAgICB9O1xuICBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGJ1dHRvbkVsZW1lbnRzLmxlbmd0aDsgeSsrKSB7XG4gICAgICBidXR0b25FbGVtZW50c1t5XS5pZCA9IGNvbXA7XG4gICAgfTtcbiAgXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBwcm9qZWN0cy5sZW5ndGg7IHkrKykge1xuICAgICAgdGhlbWVFbGVtZW50QXJyYXkucHVzaChwcm9qZWN0c1t5XSk7XG4gICAgfTtcbiAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVtZUVsZW1lbnRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoZW1lRWxlbWVudEFycmF5W2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhlbWVFbGVtZW50QXJyYXlbaV0uaWQgPSBjb2xvcjtcbiAgICAgIH07XG4gICAgfTtcbiAgXG4gICAgaWYgKHRhc2tzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFza3NbaV0uaWQgPSBjb21wO1xuICAgICAgfTtcbiAgICB9O1xuICBcbiAgICBpZiAod2FybmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB3YXJuaW5nLmlkID0gY29sb3I7XG4gICAgfTtcbiAgXG4gICAgc2lkZUJ1dHRvbkNvbnRhaW5lci5pZCA9IGNvbXA7XG4gICAgc2lkZWJhck1pbkJ1dHRvbi5pZCA9IGNvbXA7XG4gICAgdGlwc0NvbnRhaW5lci5pZCA9IGNvbXA7XG4gICAgbm90aWZCYXIuaWQgPSBjb21wO1xuICAgIGlmIChub3RpZkNvbnRhaW5lcikge1xuICAgICAgbm90aWZDb250YWluZXIuaWQgPSBjb21wO1xuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3BCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3BCdXR0b25zW2ldLmlkID0gY29tcDtcbiAgICB9O1xuICBcbiAgICBmdW5jdGlvbiB0aGVtZUNvbXBvbmVudHMoaGV4VmFsdWUpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9wQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0b3BCdXR0b25zW2ldLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBib3JkZXI6IHNvbGlkICR7aGV4VmFsdWV9IDFweDtgKTtcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3ZlVGFza0VsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlbW92ZVRhc2tFbGVtZW50c1tpXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYm9yZGVyOiBzb2xpZCAke2hleFZhbHVlfSAxcHg7YCk7XG4gICAgICB9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcm9qZWN0c1tpXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYm9yZGVyOiBzb2xpZCAke2hleFZhbHVlfSAzcHg7YCk7XG4gICAgICB9O1xuICAgICAgaWYgKCEobW9iaWxlVmlldy5tYXRjaGVzKSkge1xuICAgICAgICBzaWRlYmFyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYm9yZGVyLXJpZ2h0OiBzb2xpZCAke2hleFZhbHVlfSAzcHg7YCk7XG4gICAgICB9O1xuICAgICAgdGlwc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYm9yZGVyOiBzb2xpZCAke2hleFZhbHVlfSAzcHg7YCk7XG4gICAgICBpZiAodGFza0VsZW1lbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrRWxlbWVudHMubGVuZ3RoOyBpKyspIHsgXG4gICAgICAgICAgdGFza0VsZW1lbnRzW2ldLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBib3JkZXI6IHNvbGlkICR7aGV4VmFsdWV9IDVweDtgKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfTsgXG4gIFxuICAgIGNvbnN0IGFwcGx5QWNjZW50cyA9ICgoKSA9PiB7XG4gICAgICBpZiAoY29sb3IgPT09IFwiY2xhc3NpY1wiKSB7XG4gICAgICAgIHRoZW1lQ29tcG9uZW50cygnIzFFNjdBNycpOyBcbiAgICAgIH0gZWxzZSBpZiAoY29sb3IgPT09IFwiZW1lcmFsZFwiKSB7XG4gICAgICAgIHRoZW1lQ29tcG9uZW50cygnIzE5NkIzNScpO1xuICAgICAgfSBlbHNlIGlmIChjb2xvciA9PT0gXCJhcnRpY1wiKSB7XG4gICAgICAgIHRoZW1lQ29tcG9uZW50cygnIzlhYWFiNicpO1xuICAgICAgfSBlbHNlIGlmIChjb2xvciA9PT0gXCJydWJ5XCIpIHtcbiAgICAgICAgdGhlbWVDb21wb25lbnRzKCcjOTEwQzNGJyk7XG4gICAgICB9IGVsc2UgaWYgKGNvbG9yID09PSBcInB1cnBsZVwiKSB7XG4gICAgICAgIHRoZW1lQ29tcG9uZW50cygnIzgwMDA4MCcpOyBcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgXG4gICAgbGV0IHRoZW1lUGFpciA9IEpTT04uc3RyaW5naWZ5KFtjb2xvciwgY29tcF0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWVQYWlyKTtcbn07XG4gIFxuZXhwb3J0IHsgdGhlbWVzLCBzZXRUaGVtZSB9IiwiZnVuY3Rpb24gcmFuZG9tR2VuZXJhdG9yKHRpcEFycmF5KSB7XG4gICAgbGV0IHRpcE51bSA9IHRpcEFycmF5Lmxlbmd0aCAtIDE7XG4gICAgbGV0IG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRpcE51bSk7XG4gICAgcmV0dXJuIHRpcEFycmF5W251bV07XG59O1xuICBcbmxldCB0aXBzID0gW1xuICAgIFwiQXZvaWQgZXllIHN0cmFpbiBieSB0YWtpbmcgb2NjYXNpb25hbCBicmVha3MgZnJvbSB0aGUgc2NyZWVuLiBHb29nbGUgdGhlIDIwLTIwLTIwIHJ1bGUuXCIsXG4gICAgXCJJbiBvcmRlciB0byBwcmV2ZW50IGV5ZSBzdHJhaW4sIHlvdXIgc2NyZWVuIHNob3VsZCBiZSBhdCBsZWFzdCBhbiBhcm0ncyBsZW5ndGggYXdheSBmcm9tIHlvdXIgZXllcy5cIixcbiAgICBcIkJlIHN1cmUgdG8gY2xlYW4geW91ciBzY3JlZW4gcmVndWxhcmx5LiBTbXVkZ2VzIG1heSByZWR1Y2UgdGhlIGNvbnRyYXN0IG9mIHlvdXIgc2NyZWVuIGFuZCBjcmVhdGUgYW4gaXJyaXRhdGluZyBnbGFyZS5cIixcbiAgICBcIkVtYWlscyBjYW4gYmUgYSBkaXN0cmFjdGlvbiB3aGVuIHlvdSdyZSBvY2N1cGllZCB3aXRoIGEgdGFzayB0aGF0IHJlcXVpcmVzIGNvbmNlbnRyYXRpb24uIFNldCBhc2lkZSB0aW1lIHNwZWNpZmljYWxseSB0byBjaGVjayB5b3VyIGVtYWlscy5cIixcbiAgICBcIkNoZXdpbmcgZ3VtIGhhcyBiZWVuIHNob3duIHRvIHNwZWVkIHVwIHJlYWN0aW9uIHRpbWUgYW5kIGltcHJvdmUgY29nbml0aXZlIGFiaWxpdGllcy5cIixcbiAgICBcIlRoZSBQYXJldG8gUHJpbmNpcGxlIGlzIHRoZSBpZGVhIHRoYXQgcm91Z2hseSAyMCBwZXJjZW50IG9mIHlvdXIgdGFza3MgZ2VuZXJhdGUgYW4gYXN0b3VuZGluZyA4MCBwZXJjZW50IG9mIHNpZ25pZmljYW50IG91dGNvbWVzLlwiLFxuICAgIFwiUGVvcGxlIHRlbmQgdG8gcHJvY3Jhc3RpbmF0ZSB3aGVuIGZhY2VkIHdpdGggbGFyZ2UsIGNvbXBsaWNhdGVkIHByb2plY3RzLiBZb3UgY2FuIGFsbGV2aWF0ZSB0aGlzIHByb2JsZW0gYnkgYnJlYWtpbmcgdXAgbGFyZ2UgcHJvamVjdHMgaW50byBzbWFsbGVyLCBtb3JlIG1hbmFnZWFibGUgdGFza3MuXCIsXG4gICAgXCJJZiB5b3UgZmluZCB5b3Vyc2VsZiBpbiBhIHByb2R1Y3Rpdml0eSBydXQsIGEgY2hhbmdlIG9mIHNldHRpbmcgbWlnaHQgaGVscC4gVHJ5IHdvcmtpbmcgaW4gYSBsaWJyYXJ5IG9yIGEgY29mZmVlIHNob3AgZm9yIGEgZmV3IGhvdXJzLlwiLFxuICAgIFwiVGhlIHByYWN0aWNlIGtub3duIGFzIG1pbmRmdWxuZXNzIG1lZGl0YXRpb24gaGFzIGJlZW4gc2hvd24gdG8gcmVkdWNlIHN0cmVzcyBieSBjb25kaXRpb25pbmcgeW91IHRvIGZvY3VzIG9uIHRoZSBwcmVzZW50IG1vbWVudC5cIixcbiAgICBcIkN1bHRpdmF0ZSBnb29kIHNsZWVwIGhhYml0cyB0byBlbnN1cmUgeW91IGFyZSByZWFkeSB0byBmYWNlIHRoZSBkYXkgaGVhZC1vbi4gTWFrZSBzdXJlIHlvdSBhcmUgc2NoZWR1bGluZyBlbm91Z2ggdGltZSB0byBnZXQgYSBmdWxsIGVpZ2h0IGhvdXJzIG9mIHJlc3RmdWwgc2xlZXAuXCIsXG4gICAgXCJXYWxraW5nIGlzIGFzc29jaWF0ZWQgd2l0aCBhIHBsZXRob3JhIG9mIHBoeXNpY2FsIGFuZCBwc3ljaG9sb2dpY2FsIGJlbmVmaXRzLiBJdCdzIGJlZW4gc2hvd24gdG8gcHJvbW90ZSBjYXJkaWFjIGhlYWx0aCwgYWxsZXZpYXRlIGRlcHJlc3Npb24gYW5kIGZhdGlndWUsIGFuZCBpbXByb3ZlIHlvdXIgZ2VuZXJhbCBtb29kLlwiLFxuXTtcblxuZXhwb3J0IHtcbiAgICByYW5kb21HZW5lcmF0b3IsXG4gICAgdGlwcyxcbn1cbiIsImltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9kYXRlXCI7XG5pbXBvcnQgeyBlbGVtZW50QnVpbGRlciB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5cbmNvbnN0IHByaW9yRXJyb3JDaGVjayA9IChwYXJlbnQpID0+IHtcbiAgbGV0IG1lc3NhZ2VFbGVtZW50ID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pWzJdO1xuXG4gIGlmIChtZXNzYWdlRWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWVzc2FnZUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbn07XG5cbmNvbnN0IHByaW9yaXR5Q2hlY2sgPSAodmFsdWUpID0+IHtcbiAgaWYgKHZhbHVlIDw9IDUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IHZhbGlkYXRpb24gPSAob2JqKSA9PiB7XG4gIGNvbnN0IGNoZWNrID0gW107XG4gIGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG4gICAgbGV0IHZhbHVlID0gb2JqW3Byb3BdWzBdO1xuICAgIGxldCBlbGVtZW50ID0gb2JqW3Byb3BdWzFdO1xuICAgIHByaW9yRXJyb3JDaGVjayhlbGVtZW50KTtcbiAgICBpZiAodmFsdWUgPT0gXCJcIikge1xuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcImludmFsaWRcIiwgZWxlbWVudCk7XG4gICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImJsYW5rXCIpO1xuICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBmb3IgdGhpcyBmaWVsZC5cIjtcbiAgICAgIGNoZWNrLnB1c2goZmFsc2UpO1xuICAgIH07XG4gIH07XG4gIGxldCBkYXRlRWxlbWVudCA9IG9iai5kYXRlUGFpclsxXTtcbiAgbGV0IGR1ZURhdGUgPSBmb3JtYXREYXRlKG9iai5kYXRlUGFpclswXSk7XG4gIGlmICghZHVlRGF0ZSkge1xuICAgIHByaW9yRXJyb3JDaGVjayhkYXRlRWxlbWVudCk7XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcImludmFsaWRcIiwgZGF0ZUVsZW1lbnQpO1xuICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGUuXCI7XG4gICAgY2hlY2sucHVzaChmYWxzZSk7XG4gIH1cblxuICBsZXQgcHJpb3JpdHlFbGVtZW50ID0gb2JqLnByaW9yaXR5UGFpclsxXTtcbiAgaWYgKCFwcmlvcml0eUNoZWNrKG9iai5wcmlvcml0eVBhaXJbMF0pKSB7XG4gICAgcHJpb3JFcnJvckNoZWNrKHByaW9yaXR5RWxlbWVudCk7XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcImludmFsaWRcIiwgcHJpb3JpdHlFbGVtZW50KTtcbiAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW51bVwiKTtcbiAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBlbnRlciBhIG51bWJlciAxLTUuXCI7XG4gICAgY2hlY2sucHVzaChmYWxzZSk7XG4gIH1cblxuICBpZiAoY2hlY2subGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW3RydWUsIGR1ZURhdGVdO1xuICB9XG59O1xuXG5jb25zdCB2YWxpZGF0ZVByb2ogPSAob2JqKSA9PiB7XG4gIGNvbnN0IGNoZWNrID0gW107XG4gIGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG4gICAgbGV0IHZhbHVlID0gb2JqW3Byb3BdWzBdO1xuICAgIGxldCBlbGVtZW50ID0gb2JqW3Byb3BdWzFdO1xuICAgIHByaW9yRXJyb3JDaGVjayhlbGVtZW50KTtcbiAgICBpZiAodmFsdWUgPT0gXCJcIikge1xuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcImludmFsaWRcIiwgZWxlbWVudCk7XG4gICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImJsYW5rXCIpO1xuICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBmb3IgdGhpcyBmaWVsZC5cIjtcbiAgICAgIGNoZWNrLnB1c2goZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjaGVjay5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5leHBvcnQgeyB2YWxpZGF0aW9uLCB2YWxpZGF0ZVByb2ogfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==