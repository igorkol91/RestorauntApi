/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0 !important;\n  padding: 0 !important;\n  box-sizing: border-box;\n  min-height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.stop-scrolling {\n  height: 100%;\n  overflow: hidden;\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  top: 0;\n}\n\n.header-ul {\n  display: flex;\n  margin: 0;\n  padding: 10px;\n  border-bottom: 1px solid;\n  list-style: none;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #4c3c3c;\n  color: #fff;\n}\n\n.header-img {\n  height: 8vh;\n  width: 8vh;\n  border-radius: 100%;\n}\n\n.header-item {\n  margin-left: 1em;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.menus {\n  display: flex;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.header-item:hover {\n  color: gray;\n  text-decoration: underline;\n}\n\n.row {\n  justify-content: center;\n  margin: 0 10px;\n}\n\n.comment-btn {\n  background-color: #4c3c3c;\n  font-weight: bold;\n  color: #fff;\n  border-radius: 5px;\n  border: 2px solid #333;\n}\n\n.comment-btn:hover {\n  background-color: #fff;\n  color: #4c3c3c;\n}\n\n.likesComments {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.fa-thumbs-up {\n  display: inline-block;\n  margin-right: 5px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.menuDiv {\n  border: solid;\n  border-color: #666;\n  border-radius: 5px;\n  padding: 15px;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.menuDiv:hover {\n  box-shadow: 0 0 20px black;\n}\n\n.footer {\n  margin: 0;\n  padding: 0;\n  height: 50px;\n  line-height: 50px;\n  font-size: 0.8rem;\n  border-top: 1px solid;\n  background-color: #4c3c3c;\n  color: #fff;\n}\n\n.footer-text {\n  text-align: center;\n}\n\n.overlay {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: unset;\n  text-align: center;\n  z-index: 20;\n  min-height: 100vh;\n  overflow-y: scroll;\n  padding: 50px 0;\n  margin-bottom: 50px;\n  backdrop-filter: blur(20px);\n}\n\n.c-loading {\n  font-size: 1rem;\n}\n\n.table-loading {\n  margin-left: 50px;\n  font-size: 2rem;\n}\n\n.pop-up {\n  background-color: #fff;\n  text-align: center;\n  width: 90vw;\n}\n\n.pop-up table {\n  background-color: #fff;\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n}\n\n.th1,\n.td1 {\n  min-width: 100px;\n}\n\nth {\n  font-size: 1.2rem;\n}\n\n.pop-up-description,\n.num-of-comments {\n  background-color: #fff;\n  margin: 0;\n}\n\n.num-of-comments {\n  padding: 30px 0 10px;\n}\n\n.comments-table tr * {\n  padding: 5px;\n}\n\n.pop-up .image {\n  width: 100%;\n}\n\n.pop-up-image {\n  width: 100%;\n  margin: 20px 0;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n  background-color: #fff;\n}\n\n.pop-up-description {\n  text-align: justify;\n  padding: 0 20px;\n}\n\n.new-comment-heading {\n  text-align: center;\n  padding-top: 30px;\n  background-color: #fff;\n  margin: 0;\n  padding-bottom: 10px;\n}\n\ntd,\nth {\n  border: 1px solid #4c3c3c;\n}\n\ntd:first-child,\nth:first-child {\n  border-left: none;\n}\n\ntd:last-child,\nth:last-child {\n  border-right: none;\n}\n\ntr:nth-child(even) {\n  background-color: #f3f3f3;\n}\n\n.close {\n  display: block;\n  position: fixed;\n  right: 6%;\n  top: 5%;\n  background-color: transparent;\n  border: none;\n  font-size: 3rem;\n}\n\n.hide {\n  display: none;\n}\n\n.name,\n.insight,\n.comment-button {\n  margin: 10px 0;\n  width: 95%;\n}\n\n.comment-button {\n  margin-bottom: 40px;\n  border: 2px solid #4c3c3c;\n  background-color: #4c3c3c;\n  color: #fff;\n  border-radius: 5px;\n  height: 40px;\n  font-size: 1.5rem;\n  padding-bottom: 40px;\n}\n\n.comment-button:hover {\n  background-color: #fff;\n  color: #4c3c3c;\n  font-weight: bold;\n  border: 2px solid #4c3c3c;\n}\n\n.comment-button:active {\n  background-color: rgb(8, 58, 8);\n  color: #fff;\n}\n\n@media all and (min-width: 786px) {\n  .pop-up {\n    text-align: center;\n    width: 50vw;\n  }\n\n  .close {\n    right: -22%;\n    font-size: 4rem;\n    display: block;\n    width: 100%;\n    position: fixed;\n    top: 30px;\n  }\n\n  .name,\n  .insight,\n  .comment-button {\n    margin: 10px 0;\n    width: 50%;\n  }\n\n  .comment-button {\n    margin-bottom: 40px;\n  }\n\n  .footer {\n    font-size: 1rem;\n  }\n\n  .header-item {\n    margin-left: 2em;\n  }\n\n  .header-ul {\n    padding: 10px 12vw;\n  }\n\n  .comments-table tr * {\n    padding: 0 20px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  margin: 0 !important;\n  padding: 0 !important;\n  box-sizing: border-box;\n  min-height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.stop-scrolling {\n  height: 100%;\n  overflow: hidden;\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  top: 0;\n}\n\n.header-ul {\n  display: flex;\n  margin: 0;\n  padding: 10px;\n  border-bottom: 1px solid;\n  list-style: none;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #4c3c3c;\n  color: #fff;\n}\n\n.header-img {\n  height: 8vh;\n  width: 8vh;\n  border-radius: 100%;\n}\n\n.header-item {\n  margin-left: 1em;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.menus {\n  display: flex;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.header-item:hover {\n  color: gray;\n  text-decoration: underline;\n}\n\n.row {\n  justify-content: center;\n  margin: 0 10px;\n}\n\n.comment-btn {\n  background-color: #4c3c3c;\n  font-weight: bold;\n  color: #fff;\n  border-radius: 5px;\n  border: 2px solid #333;\n}\n\n.comment-btn:hover {\n  background-color: #fff;\n  color: #4c3c3c;\n}\n\n.likesComments {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.fa-thumbs-up {\n  display: inline-block;\n  margin-right: 5px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.menuDiv {\n  border: solid;\n  border-color: #666;\n  border-radius: 5px;\n  padding: 15px;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.menuDiv:hover {\n  box-shadow: 0 0 20px black;\n}\n\n.footer {\n  margin: 0;\n  padding: 0;\n  height: 50px;\n  line-height: 50px;\n  font-size: 0.8rem;\n  border-top: 1px solid;\n  background-color: #4c3c3c;\n  color: #fff;\n}\n\n.footer-text {\n  text-align: center;\n}\n\n.overlay {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: unset;\n  text-align: center;\n  z-index: 20;\n  min-height: 100vh;\n  overflow-y: scroll;\n  padding: 50px 0;\n  margin-bottom: 50px;\n  backdrop-filter: blur(20px);\n}\n\n.c-loading {\n  font-size: 1rem;\n}\n\n.table-loading {\n  margin-left: 50px;\n  font-size: 2rem;\n}\n\n.pop-up {\n  background-color: #fff;\n  text-align: center;\n  width: 90vw;\n}\n\n.pop-up table {\n  background-color: #fff;\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n}\n\n.th1,\n.td1 {\n  min-width: 100px;\n}\n\nth {\n  font-size: 1.2rem;\n}\n\n.pop-up-description,\n.num-of-comments {\n  background-color: #fff;\n  margin: 0;\n}\n\n.num-of-comments {\n  padding: 30px 0 10px;\n}\n\n.comments-table tr * {\n  padding: 5px;\n}\n\n.pop-up .image {\n  width: 100%;\n}\n\n.pop-up-image {\n  width: 100%;\n  margin: 20px 0;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n  background-color: #fff;\n}\n\n.pop-up-description {\n  text-align: justify;\n  padding: 0 20px;\n}\n\n.new-comment-heading {\n  text-align: center;\n  padding-top: 30px;\n  background-color: #fff;\n  margin: 0;\n  padding-bottom: 10px;\n}\n\ntd,\nth {\n  border: 1px solid #4c3c3c;\n}\n\ntd:first-child,\nth:first-child {\n  border-left: none;\n}\n\ntd:last-child,\nth:last-child {\n  border-right: none;\n}\n\ntr:nth-child(even) {\n  background-color: #f3f3f3;\n}\n\n.close {\n  display: block;\n  position: fixed;\n  right: 6%;\n  top: 5%;\n  background-color: transparent;\n  border: none;\n  font-size: 3rem;\n}\n\n.hide {\n  display: none;\n}\n\n.name,\n.insight,\n.comment-button {\n  margin: 10px 0;\n  width: 95%;\n}\n\n.comment-button {\n  margin-bottom: 40px;\n  border: 2px solid #4c3c3c;\n  background-color: #4c3c3c;\n  color: #fff;\n  border-radius: 5px;\n  height: 40px;\n  font-size: 1.5rem;\n  padding-bottom: 40px;\n}\n\n.comment-button:hover {\n  background-color: #fff;\n  color: #4c3c3c;\n  font-weight: bold;\n  border: 2px solid #4c3c3c;\n}\n\n.comment-button:active {\n  background-color: rgb(8, 58, 8);\n  color: #fff;\n}\n\n@media all and (min-width: 786px) {\n  .pop-up {\n    text-align: center;\n    width: 50vw;\n  }\n\n  .close {\n    right: -22%;\n    font-size: 4rem;\n    display: block;\n    width: 100%;\n    position: fixed;\n    top: 30px;\n  }\n\n  .name,\n  .insight,\n  .comment-button {\n    margin: 10px 0;\n    width: 50%;\n  }\n\n  .comment-button {\n    margin-bottom: 40px;\n  }\n\n  .footer {\n    font-size: 1rem;\n  }\n\n  .header-item {\n    margin-left: 2em;\n  }\n\n  .header-ul {\n    padding: 10px 12vw;\n  }\n\n  .comments-table tr * {\n    padding: 0 20px;\n  }\n}\n"],"sourceRoot":""}]);
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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentsCounter = (comments) => comments.length;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);

/***/ }),

/***/ "./src/modules/createTableRow.js":
/*!***************************************!*\
  !*** ./src/modules/createTableRow.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createTableRow = (type, val1, val2, val3) => {
  const tr = document.createElement('tr');
  let td1;
  let td2;
  let td3;
  if (type === 'headerRow') {
    td1 = document.createElement('th');
    td1.className = 'th1';
    td2 = document.createElement('th');
    td2.className = 'th2';
    td3 = document.createElement('th');
    td3.className = 'th3';
    tr.className = 'table-header';
  } else {
    td1 = document.createElement('td');
    td1.className = 'td1';
    td2 = document.createElement('td');
    td2.className = 'td2';
    td3 = document.createElement('td');
    td3.className = 'td3';
    tr.className = 'table-row';
  }
  td1.textContent = val1;
  td2.textContent = val2;
  td3.textContent = val3;
  tr.append(td1, td2, td3);
  return tr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTableRow);

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newCommentPopUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newCommentPopUp.js */ "./src/modules/newCommentPopUp.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");
/* harmony import */ var _itemCount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemCount.js */ "./src/modules/itemCount.js");




const main = document.querySelector('main');

const displayData = (data) => {
  const menuDiv = document.createElement('div');
  const menuImg = document.createElement('img');
  const menuHeadline = document.createElement('h3');
  const menuText = document.createElement('p');
  const likesAndComments = document.createElement('div');
  const commentsBtn = document.createElement('button');
  const likesCount = document.createElement('p');
  const likesBtn = document.createElement('i');
  likesBtn.classList.add('far', 'fa-thumbs-up');
  menuDiv.classList = 'menuDiv col-sm-12 col-md-6 col-lg-3 my-4';
  menuText.classList = 'menuText';
  likesAndComments.classList = 'likesComments';
  commentsBtn.classList = 'comment-btn';
  commentsBtn.innerText = 'Comment';

  likesCount.classList = 'likesCountP';
  likesCount.innerText = '0 likes';
  likesCount.id = data.idCategory;
  menuHeadline.innerHTML = data.strCategory;
  menuImg.src = data.strCategoryThumb;
  let description = data.strCategoryDescription;
  if (description.length > 70) {
    description = `${description.substr(0, 70)}...`;
  }
  menuText.innerHTML = description;
  likesAndComments.append(commentsBtn, likesCount, likesBtn);
  menuDiv.append(menuImg, menuHeadline, menuText, likesAndComments);
  main.appendChild(menuDiv);
  commentsBtn.addEventListener('click', () => {
    const overlay = (0,_newCommentPopUp_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, main, menuDiv);
    main.appendChild(overlay);
    document.querySelector('.overlay').classList.remove('hide');
    document.querySelector('body').classList.add('stop-scrolling');
    menuDiv.classList.add('hide');
  });
  likesBtn.addEventListener('click', (e) => {
    (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.postLikes)(likesBtn);
    const increasedLike = parseInt(e.target.parentNode.childNodes[1].innerText, 10) + 1;
    e.target.parentNode.childNodes[1].innerText = `${increasedLike.toString()} Likes`;
    setTimeout(() => {
      (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();
    }, 1000);
  });
};

const getData = async (foods) => {
  main.innerHTML = '';
  const countArray = [];
  const tempResult = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );
  const finalResult = await tempResult.json();
  foods = finalResult;
  foods.categories.forEach((element, index) => {
    countArray.push(index);
    if (index === foods.categories.length - 1) {
      document.querySelector('.header-item').innerHTML = (0,_itemCount_js__WEBPACK_IMPORTED_MODULE_2__["default"])(countArray);
    }
    return displayData(element);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);


/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getComments = async (url) => {
  const result = await fetch(url);
  const finalResult = await result.json();
  return finalResult;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);

/***/ }),

/***/ "./src/modules/itemCount.js":
/*!**********************************!*\
  !*** ./src/modules/itemCount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countMeals = (items) => `${items.length} Meals`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countMeals);

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postLikes": () => (/* binding */ postLikes),
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
const header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/likes/';
const showData = (data) => {
  data.forEach((element) => {
    const id = element.item_id;
    if (document.getElementById(id)) {
      document.getElementById(id).innerText = `${element.likes} Likes`;
    }
  });
};

const postLikes = async (button) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${button.parentNode.childNodes[1].id}`,
    }),
    headers: header,
  });
};

const getLikes = async () => {
  const tempResult = await fetch(url);
  const finalResult = await tempResult.json();
  showData(finalResult);
};

document.onload = getLikes();


/***/ }),

/***/ "./src/modules/newCommentPopUp.js":
/*!****************************************!*\
  !*** ./src/modules/newCommentPopUp.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsCounter.js */ "./src/modules/commentsCounter.js");
/* harmony import */ var _createTableRow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTableRow.js */ "./src/modules/createTableRow.js");
/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComments.js */ "./src/modules/getComments.js");
/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postComment.js */ "./src/modules/postComment.js");
/* harmony import */ var _updateComments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateComments.js */ "./src/modules/updateComments.js");






const newCommentPopUp = (foodObject, main, menuDiv) => {
  const {
    idCategory, strCategoryThumb, strCategory, strCategoryDescription,
  } = foodObject;

  const commentsObject = {
    numberOfComment: 0,
  };
  const overlay = document.createElement('section');
  overlay.className = 'overlay';

  const popUp = document.createElement('div');
  popUp.className = 'pop-up';

  const closeButton = document.createElement('button');
  closeButton.className = 'close';
  closeButton.innerHTML = '&times;';

  closeButton.addEventListener('click', () => {
    document.querySelector('.overlay').classList.add('hide');
    main.removeChild(document.querySelector('.overlay'));
    document.querySelector('body').classList.remove('stop-scrolling');
    menuDiv.classList.remove('hide');
  });

  const image = document.createElement('img');
  image.className = 'pop-up-image';
  image.src = strCategoryThumb;
  image.alt = strCategory;

  const titleContainer = document.createElement('h1');
  titleContainer.className = 'pop-up-title';
  titleContainer.textContent = strCategory;

  const descriptionContainer = document.createElement('p');
  descriptionContainer.className = 'pop-up-description';
  descriptionContainer.textContent = strCategoryDescription;

  const numberOfCommentsContainer = document.createElement('h2');
  numberOfCommentsContainer.className = 'num-of-comments';
  numberOfCommentsContainer.innerHTML = 'Comments(<span class="c-loading">Loading...</span>)';

  const commentsContainer = document.createElement('table');
  commentsContainer.className = 'comments-table';

  commentsContainer.innerHTML = '<span class="table-loading">Loading...</span>';

  (0,_updateComments_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
    idCategory,
    _getComments_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    commentsContainer,
    numberOfCommentsContainer,
    _commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    _createTableRow_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    commentsObject,
    { post: false },
  );

  const newCommentHeading = document.createElement('h2');
  newCommentHeading.className = 'new-comment-heading';
  newCommentHeading.textContent = 'Add a comment';

  const form = document.createElement('div');
  form.className = 'form';

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'name';
  input.placeholder = 'Your name';

  const insightBox = document.createElement('textarea');
  insightBox.className = 'insight';
  insightBox.placeholder = 'Your insights';

  const commentButton = document.createElement('button');
  commentButton.addEventListener('click', async () => {
    const nameField = document.querySelector('.name');
    const insightField = document.querySelector('.insight');
    const { value: name } = nameField;
    const { value: insight } = insightField;
    if (name && insight) {
      const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/comments/';
      const body = {
        item_id: idCategory,
        username: name,
        comment: insight,
      };
      const day = new Date();
      let month = (day.getMonth() + 1).toString();
      if (month.length === 1) {
        month = `0${month}`;
      }
      const date = `${day.getFullYear()}-${month}-${day.getDate()}`;
      const row = (0,_createTableRow_js__WEBPACK_IMPORTED_MODULE_1__["default"])('row', date, name, insight);
      commentsContainer.appendChild(row);
      numberOfCommentsContainer.textContent = `Comments(${commentsObject.numberOfComments + 1})`;
      commentsObject.numberOfComments += 1;
      nameField.value = '';
      insightField.value = '';
      const result = await (0,_postComment_js__WEBPACK_IMPORTED_MODULE_3__["default"])(body, url);
      if (!result.ok) {
        nameField.value = name;
        insightField.value = insight;
        commentsContainer.removeChild(row);
        numberOfCommentsContainer.textContent = `Comments(${commentsObject.numberOfComments - 1})`;
        commentsObject.numberOfComments -= 1;
      }
    }
  });
  commentButton.className = 'comment-button';
  commentButton.textContent = 'Comment';

  form.append(input, insightBox, commentButton);

  popUp.append(
    closeButton,
    image,
    titleContainer,
    descriptionContainer,
    numberOfCommentsContainer,
    commentsContainer,
    newCommentHeading,
    form,
  );

  overlay.appendChild(popUp);

  return overlay;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newCommentPopUp);


/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const postComment = async (body, url) => {
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);

/***/ }),

/***/ "./src/modules/updateComments.js":
/*!***************************************!*\
  !*** ./src/modules/updateComments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateComments = async (
  idCategory,
  getComments,
  commentsContainer,
  numberOfCommentsContainer,
  commentsCounter,
  createTableRow,
  commentsObject,
) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/comments/?item_id=${idCategory}`;

  const allComments = await getComments(url);

  if (!allComments.error) {
    commentsContainer.innerHTML = '';
    commentsContainer.appendChild(
      createTableRow('headerRow', 'Date', 'Name', 'Comment'),
    );
    commentsObject.numberOfComments = commentsCounter(allComments);

    allComments.forEach((each) => {
      numberOfCommentsContainer.textContent = `Comments(${commentsObject.numberOfComments})`;
      commentsContainer.appendChild(
        createTableRow('row', each.creation_date, each.username, each.comment),
      );
    });
  } else {
    commentsContainer.innerHTML = '';
    numberOfCommentsContainer.innerHTML = 'Comments(0)';
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateComments);


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
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom.js */ "./src/modules/dom.js");



const foods = [];

(0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(foods);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFB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QUNBLGdJQUFnSSxXQUFXOztBQUUzSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQsZ0NBQWdDO0FBQzFGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7O1VDaEM5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05vQjtBQUNtQjs7QUFFdkM7O0FBRUEsMkRBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vc3JjL21vZHVsZXMvY29tbWVudHNDb3VudGVyLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvbW9kdWxlcy9jcmVhdGVUYWJsZVJvdy5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvbW9kdWxlcy9nZXRDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vc3JjL21vZHVsZXMvaXRlbUNvdW50LmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvbW9kdWxlcy9saWtlcy5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vc3JjL21vZHVsZXMvbmV3Q29tbWVudFBvcFVwLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvbW9kdWxlcy9wb3N0Q29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vc3JjL21vZHVsZXMvdXBkYXRlQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnN0b3Atc2Nyb2xsaW5nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxufVxcblxcbi5oZWFkZXItdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlYWRlci1pbWcge1xcbiAgaGVpZ2h0OiA4dmg7XFxuICB3aWR0aDogOHZoO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxuLmhlYWRlci1pdGVtIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaGVhZGVyLWl0ZW06aG92ZXIge1xcbiAgY29sb3I6IGdyYXk7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnJvdyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjM2MzYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xcbn1cXG5cXG4uY29tbWVudC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjNGMzYzNjO1xcbn1cXG5cXG4ubGlrZXNDb21tZW50cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4uZmEtdGh1bWJzLXVwIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51RGl2IHtcXG4gIGJvcmRlcjogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICM2NjY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tZW51RGl2OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IGJsYWNrO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjM2MzYztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IHVuc2V0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogMjA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDUwcHggMDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxufVxcblxcbi5jLWxvYWRpbmcge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFibGUtbG9hZGluZyB7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnBvcC11cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwdnc7XFxufVxcblxcbi5wb3AtdXAgdGFibGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi50aDEsXFxuLnRkMSB7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbn1cXG5cXG50aCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnBvcC11cC1kZXNjcmlwdGlvbixcXG4ubnVtLW9mLWNvbW1lbnRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5udW0tb2YtY29tbWVudHMge1xcbiAgcGFkZGluZzogMzBweCAwIDEwcHg7XFxufVxcblxcbi5jb21tZW50cy10YWJsZSB0ciAqIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBvcC11cCAuaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wb3AtdXAtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnBvcC11cC1kZXNjcmlwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ubmV3LWNvbW1lbnQtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjM2MzYztcXG59XFxuXFxudGQ6Zmlyc3QtY2hpbGQsXFxudGg6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbnRkOmxhc3QtY2hpbGQsXFxudGg6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcblxcbnRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogNiU7XFxuICB0b3A6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYW1lLFxcbi5pbnNpZ2h0LFxcbi5jb21tZW50LWJ1dHRvbiB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbi5jb21tZW50LWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzRjM2MzYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxufVxcblxcbi5jb21tZW50LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICM0YzNjM2M7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0YzNjM2M7XFxufVxcblxcbi5jb21tZW50LWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDU4LCA4KTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3ODZweCkge1xcbiAgLnBvcC11cCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICB9XFxuXFxuICAuY2xvc2Uge1xcbiAgICByaWdodDogLTIyJTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAzMHB4O1xcbiAgfVxcblxcbiAgLm5hbWUsXFxuICAuaW5zaWdodCxcXG4gIC5jb21tZW50LWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtYnV0dG9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuaGVhZGVyLWl0ZW0ge1xcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xcbiAgfVxcblxcbiAgLmhlYWRlci11bCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTJ2dztcXG4gIH1cXG5cXG4gIC5jb21tZW50cy10YWJsZSB0ciAqIHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLE1BQU07QUFDUjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFh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SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixTQUFTO0VBQ1g7O0VBRUE7OztJQUdFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnN0b3Atc2Nyb2xsaW5nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxufVxcblxcbi5oZWFkZXItdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlYWRlci1pbWcge1xcbiAgaGVpZ2h0OiA4dmg7XFxuICB3aWR0aDogOHZoO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxuLmhlYWRlci1pdGVtIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaGVhZGVyLWl0ZW06aG92ZXIge1xcbiAgY29sb3I6IGdyYXk7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnJvdyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjM2MzYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xcbn1cXG5cXG4uY29tbWVudC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjNGMzYzNjO1xcbn1cXG5cXG4ubGlrZXNDb21tZW50cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4uZmEtdGh1bWJzLXVwIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51RGl2IHtcXG4gIGJvcmRlcjogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICM2NjY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tZW51RGl2OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IGJsYWNrO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjM2MzYztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IHVuc2V0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogMjA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDUwcHggMDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxufVxcblxcbi5jLWxvYWRpbmcge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFibGUtbG9hZGluZyB7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnBvcC11cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwdnc7XFxufVxcblxcbi5wb3AtdXAgdGFibGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi50aDEsXFxuLnRkMSB7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbn1cXG5cXG50aCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnBvcC11cC1kZXNjcmlwdGlvbixcXG4ubnVtLW9mLWNvbW1lbnRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5udW0tb2YtY29tbWVudHMge1xcbiAgcGFkZGluZzogMzBweCAwIDEwcHg7XFxufVxcblxcbi5jb21tZW50cy10YWJsZSB0ciAqIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBvcC11cCAuaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wb3AtdXAtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnBvcC11cC1kZXNjcmlwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ubmV3LWNvbW1lbnQtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjM2MzYztcXG59XFxuXFxudGQ6Zmlyc3QtY2hpbGQsXFxudGg6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbnRkOmxhc3QtY2hpbGQsXFxudGg6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcblxcbnRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogNiU7XFxuICB0b3A6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYW1lLFxcbi5pbnNpZ2h0LFxcbi5jb21tZW50LWJ1dHRvbiB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbi5jb21tZW50LWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzRjM2MzYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxufVxcblxcbi5jb21tZW50LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICM0YzNjM2M7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0YzNjM2M7XFxufVxcblxcbi5jb21tZW50LWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDU4LCA4KTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3ODZweCkge1xcbiAgLnBvcC11cCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICB9XFxuXFxuICAuY2xvc2Uge1xcbiAgICByaWdodDogLTIyJTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAzMHB4O1xcbiAgfVxcblxcbiAgLm5hbWUsXFxuICAuaW5zaWdodCxcXG4gIC5jb21tZW50LWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtYnV0dG9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuaGVhZGVyLWl0ZW0ge1xcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xcbiAgfVxcblxcbiAgLmhlYWRlci11bCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTJ2dztcXG4gIH1cXG5cXG4gIC5jb21tZW50cy10YWJsZSB0ciAqIHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbW1lbnRzQ291bnRlciA9IChjb21tZW50cykgPT4gY29tbWVudHMubGVuZ3RoO1xuZXhwb3J0IGRlZmF1bHQgY29tbWVudHNDb3VudGVyOyIsImNvbnN0IGNyZWF0ZVRhYmxlUm93ID0gKHR5cGUsIHZhbDEsIHZhbDIsIHZhbDMpID0+IHtcbiAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBsZXQgdGQxO1xuICBsZXQgdGQyO1xuICBsZXQgdGQzO1xuICBpZiAodHlwZSA9PT0gJ2hlYWRlclJvdycpIHtcbiAgICB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIHRkMS5jbGFzc05hbWUgPSAndGgxJztcbiAgICB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIHRkMi5jbGFzc05hbWUgPSAndGgyJztcbiAgICB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIHRkMy5jbGFzc05hbWUgPSAndGgzJztcbiAgICB0ci5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyJztcbiAgfSBlbHNlIHtcbiAgICB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRkMS5jbGFzc05hbWUgPSAndGQxJztcbiAgICB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRkMi5jbGFzc05hbWUgPSAndGQyJztcbiAgICB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRkMy5jbGFzc05hbWUgPSAndGQzJztcbiAgICB0ci5jbGFzc05hbWUgPSAndGFibGUtcm93JztcbiAgfVxuICB0ZDEudGV4dENvbnRlbnQgPSB2YWwxO1xuICB0ZDIudGV4dENvbnRlbnQgPSB2YWwyO1xuICB0ZDMudGV4dENvbnRlbnQgPSB2YWwzO1xuICB0ci5hcHBlbmQodGQxLCB0ZDIsIHRkMyk7XG4gIHJldHVybiB0cjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhYmxlUm93OyIsImltcG9ydCBuZXdDb21tZW50UG9wVXAgZnJvbSAnLi9uZXdDb21tZW50UG9wVXAuanMnO1xuaW1wb3J0IHsgcG9zdExpa2VzLCBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZXMuanMnO1xuaW1wb3J0IGNvdW50TWVhbHMgZnJvbSAnLi9pdGVtQ291bnQuanMnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG5jb25zdCBkaXNwbGF5RGF0YSA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBtZW51SGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBtZW51VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbGlrZXNBbmRDb21tZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb21tZW50c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBsaWtlc0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBsaWtlc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbGlrZXNCdG4uY2xhc3NMaXN0LmFkZCgnZmFyJywgJ2ZhLXRodW1icy11cCcpO1xuICBtZW51RGl2LmNsYXNzTGlzdCA9ICdtZW51RGl2IGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctMyBteS00JztcbiAgbWVudVRleHQuY2xhc3NMaXN0ID0gJ21lbnVUZXh0JztcbiAgbGlrZXNBbmRDb21tZW50cy5jbGFzc0xpc3QgPSAnbGlrZXNDb21tZW50cyc7XG4gIGNvbW1lbnRzQnRuLmNsYXNzTGlzdCA9ICdjb21tZW50LWJ0bic7XG4gIGNvbW1lbnRzQnRuLmlubmVyVGV4dCA9ICdDb21tZW50JztcblxuICBsaWtlc0NvdW50LmNsYXNzTGlzdCA9ICdsaWtlc0NvdW50UCc7XG4gIGxpa2VzQ291bnQuaW5uZXJUZXh0ID0gJzAgbGlrZXMnO1xuICBsaWtlc0NvdW50LmlkID0gZGF0YS5pZENhdGVnb3J5O1xuICBtZW51SGVhZGxpbmUuaW5uZXJIVE1MID0gZGF0YS5zdHJDYXRlZ29yeTtcbiAgbWVudUltZy5zcmMgPSBkYXRhLnN0ckNhdGVnb3J5VGh1bWI7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRhdGEuc3RyQ2F0ZWdvcnlEZXNjcmlwdGlvbjtcbiAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCA+IDcwKSB7XG4gICAgZGVzY3JpcHRpb24gPSBgJHtkZXNjcmlwdGlvbi5zdWJzdHIoMCwgNzApfS4uLmA7XG4gIH1cbiAgbWVudVRleHQuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XG4gIGxpa2VzQW5kQ29tbWVudHMuYXBwZW5kKGNvbW1lbnRzQnRuLCBsaWtlc0NvdW50LCBsaWtlc0J0bik7XG4gIG1lbnVEaXYuYXBwZW5kKG1lbnVJbWcsIG1lbnVIZWFkbGluZSwgbWVudVRleHQsIGxpa2VzQW5kQ29tbWVudHMpO1xuICBtYWluLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICBjb21tZW50c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3Q29tbWVudFBvcFVwKGRhdGEsIG1haW4sIG1lbnVEaXYpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ3N0b3Atc2Nyb2xsaW5nJyk7XG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH0pO1xuICBsaWtlc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcG9zdExpa2VzKGxpa2VzQnRuKTtcbiAgICBjb25zdCBpbmNyZWFzZWRMaWtlID0gcGFyc2VJbnQoZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmlubmVyVGV4dCwgMTApICsgMTtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0ID0gYCR7aW5jcmVhc2VkTGlrZS50b1N0cmluZygpfSBMaWtlc2A7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBnZXRMaWtlcygpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAoZm9vZHMpID0+IHtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgY291bnRBcnJheSA9IFtdO1xuICBjb25zdCB0ZW1wUmVzdWx0ID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9jYXRlZ29yaWVzLnBocCcsXG4gICk7XG4gIGNvbnN0IGZpbmFsUmVzdWx0ID0gYXdhaXQgdGVtcFJlc3VsdC5qc29uKCk7XG4gIGZvb2RzID0gZmluYWxSZXN1bHQ7XG4gIGZvb2RzLmNhdGVnb3JpZXMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb3VudEFycmF5LnB1c2goaW5kZXgpO1xuICAgIGlmIChpbmRleCA9PT0gZm9vZHMuY2F0ZWdvcmllcy5sZW5ndGggLSAxKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWl0ZW0nKS5pbm5lckhUTUwgPSBjb3VudE1lYWxzKGNvdW50QXJyYXkpO1xuICAgIH1cbiAgICByZXR1cm4gZGlzcGxheURhdGEoZWxlbWVudCk7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7XG4iLCJjb25zdCBnZXRDb21tZW50cyA9IGFzeW5jICh1cmwpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgZmluYWxSZXN1bHQgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICByZXR1cm4gZmluYWxSZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb21tZW50czsiLCJjb25zdCBjb3VudE1lYWxzID0gKGl0ZW1zKSA9PiBgJHtpdGVtcy5sZW5ndGh9IE1lYWxzYDtcblxuZXhwb3J0IGRlZmF1bHQgY291bnRNZWFsczsiLCJjb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSk7XG5jb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvSXZQNDJ4TmNtWjdzVDVycDg3d0wvbGlrZXMvJztcbmNvbnN0IHNob3dEYXRhID0gKGRhdGEpID0+IHtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaWQgPSBlbGVtZW50Lml0ZW1faWQ7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVyVGV4dCA9IGAke2VsZW1lbnQubGlrZXN9IExpa2VzYDtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKGJ1dHRvbikgPT4ge1xuICBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBgJHtidXR0b24ucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmlkfWAsXG4gICAgfSksXG4gICAgaGVhZGVyczogaGVhZGVyLFxuICB9KTtcbn07XG5cbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB0ZW1wUmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgZmluYWxSZXN1bHQgPSBhd2FpdCB0ZW1wUmVzdWx0Lmpzb24oKTtcbiAgc2hvd0RhdGEoZmluYWxSZXN1bHQpO1xufTtcblxuZG9jdW1lbnQub25sb2FkID0gZ2V0TGlrZXMoKTtcbmV4cG9ydCB7IHBvc3RMaWtlcywgZ2V0TGlrZXMgfTsiLCJpbXBvcnQgY29tbWVudHNDb3VudGVyIGZyb20gJy4vY29tbWVudHNDb3VudGVyLmpzJztcbmltcG9ydCBjcmVhdGVUYWJsZVJvdyBmcm9tICcuL2NyZWF0ZVRhYmxlUm93LmpzJztcbmltcG9ydCBnZXRDb21tZW50cyBmcm9tICcuL2dldENvbW1lbnRzLmpzJztcbmltcG9ydCBwb3N0Q29tbWVudCBmcm9tICcuL3Bvc3RDb21tZW50LmpzJztcbmltcG9ydCB1cGRhdGVDb21tZW50cyBmcm9tICcuL3VwZGF0ZUNvbW1lbnRzLmpzJztcblxuY29uc3QgbmV3Q29tbWVudFBvcFVwID0gKGZvb2RPYmplY3QsIG1haW4sIG1lbnVEaXYpID0+IHtcbiAgY29uc3Qge1xuICAgIGlkQ2F0ZWdvcnksIHN0ckNhdGVnb3J5VGh1bWIsIHN0ckNhdGVnb3J5LCBzdHJDYXRlZ29yeURlc2NyaXB0aW9uLFxuICB9ID0gZm9vZE9iamVjdDtcblxuICBjb25zdCBjb21tZW50c09iamVjdCA9IHtcbiAgICBudW1iZXJPZkNvbW1lbnQ6IDAsXG4gIH07XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gJ292ZXJsYXknO1xuXG4gIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcFVwLmNsYXNzTmFtZSA9ICdwb3AtdXAnO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdjbG9zZSc7XG4gIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9ICcmdGltZXM7JztcblxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBtYWluLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdzdG9wLXNjcm9sbGluZycpO1xuICAgIG1lbnVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9KTtcblxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWFnZS5jbGFzc05hbWUgPSAncG9wLXVwLWltYWdlJztcbiAgaW1hZ2Uuc3JjID0gc3RyQ2F0ZWdvcnlUaHVtYjtcbiAgaW1hZ2UuYWx0ID0gc3RyQ2F0ZWdvcnk7XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc05hbWUgPSAncG9wLXVwLXRpdGxlJztcbiAgdGl0bGVDb250YWluZXIudGV4dENvbnRlbnQgPSBzdHJDYXRlZ29yeTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NOYW1lID0gJ3BvcC11cC1kZXNjcmlwdGlvbic7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLnRleHRDb250ZW50ID0gc3RyQ2F0ZWdvcnlEZXNjcmlwdGlvbjtcblxuICBjb25zdCBudW1iZXJPZkNvbW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbnVtYmVyT2ZDb21tZW50c0NvbnRhaW5lci5jbGFzc05hbWUgPSAnbnVtLW9mLWNvbW1lbnRzJztcbiAgbnVtYmVyT2ZDb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnQ29tbWVudHMoPHNwYW4gY2xhc3M9XCJjLWxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9zcGFuPiknO1xuXG4gIGNvbnN0IGNvbW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgY29tbWVudHNDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbW1lbnRzLXRhYmxlJztcblxuICBjb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ0YWJsZS1sb2FkaW5nXCI+TG9hZGluZy4uLjwvc3Bhbj4nO1xuXG4gIHVwZGF0ZUNvbW1lbnRzKFxuICAgIGlkQ2F0ZWdvcnksXG4gICAgZ2V0Q29tbWVudHMsXG4gICAgY29tbWVudHNDb250YWluZXIsXG4gICAgbnVtYmVyT2ZDb21tZW50c0NvbnRhaW5lcixcbiAgICBjb21tZW50c0NvdW50ZXIsXG4gICAgY3JlYXRlVGFibGVSb3csXG4gICAgY29tbWVudHNPYmplY3QsXG4gICAgeyBwb3N0OiBmYWxzZSB9LFxuICApO1xuXG4gIGNvbnN0IG5ld0NvbW1lbnRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbmV3Q29tbWVudEhlYWRpbmcuY2xhc3NOYW1lID0gJ25ldy1jb21tZW50LWhlYWRpbmcnO1xuICBuZXdDb21tZW50SGVhZGluZy50ZXh0Q29udGVudCA9ICdBZGQgYSBjb21tZW50JztcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm0nO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXQuY2xhc3NOYW1lID0gJ25hbWUnO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9ICdZb3VyIG5hbWUnO1xuXG4gIGNvbnN0IGluc2lnaHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBpbnNpZ2h0Qm94LmNsYXNzTmFtZSA9ICdpbnNpZ2h0JztcbiAgaW5zaWdodEJveC5wbGFjZWhvbGRlciA9ICdZb3VyIGluc2lnaHRzJztcblxuICBjb25zdCBjb21tZW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcbiAgICBjb25zdCBpbnNpZ2h0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodCcpO1xuICAgIGNvbnN0IHsgdmFsdWU6IG5hbWUgfSA9IG5hbWVGaWVsZDtcbiAgICBjb25zdCB7IHZhbHVlOiBpbnNpZ2h0IH0gPSBpbnNpZ2h0RmllbGQ7XG4gICAgaWYgKG5hbWUgJiYgaW5zaWdodCkge1xuICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0l2UDQyeE5jbVo3c1Q1cnA4N3dML2NvbW1lbnRzLyc7XG4gICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICBpdGVtX2lkOiBpZENhdGVnb3J5LFxuICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgY29tbWVudDogaW5zaWdodCxcbiAgICAgIH07XG4gICAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IG1vbnRoID0gKGRheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgIGlmIChtb250aC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgbW9udGggPSBgMCR7bW9udGh9YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGUgPSBgJHtkYXkuZ2V0RnVsbFllYXIoKX0tJHttb250aH0tJHtkYXkuZ2V0RGF0ZSgpfWA7XG4gICAgICBjb25zdCByb3cgPSBjcmVhdGVUYWJsZVJvdygncm93JywgZGF0ZSwgbmFtZSwgaW5zaWdodCk7XG4gICAgICBjb21tZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgbnVtYmVyT2ZDb21tZW50c0NvbnRhaW5lci50ZXh0Q29udGVudCA9IGBDb21tZW50cygke2NvbW1lbnRzT2JqZWN0Lm51bWJlck9mQ29tbWVudHMgKyAxfSlgO1xuICAgICAgY29tbWVudHNPYmplY3QubnVtYmVyT2ZDb21tZW50cyArPSAxO1xuICAgICAgbmFtZUZpZWxkLnZhbHVlID0gJyc7XG4gICAgICBpbnNpZ2h0RmllbGQudmFsdWUgPSAnJztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvc3RDb21tZW50KGJvZHksIHVybCk7XG4gICAgICBpZiAoIXJlc3VsdC5vaykge1xuICAgICAgICBuYW1lRmllbGQudmFsdWUgPSBuYW1lO1xuICAgICAgICBpbnNpZ2h0RmllbGQudmFsdWUgPSBpbnNpZ2h0O1xuICAgICAgICBjb21tZW50c0NvbnRhaW5lci5yZW1vdmVDaGlsZChyb3cpO1xuICAgICAgICBudW1iZXJPZkNvbW1lbnRzQ29udGFpbmVyLnRleHRDb250ZW50ID0gYENvbW1lbnRzKCR7Y29tbWVudHNPYmplY3QubnVtYmVyT2ZDb21tZW50cyAtIDF9KWA7XG4gICAgICAgIGNvbW1lbnRzT2JqZWN0Lm51bWJlck9mQ29tbWVudHMgLT0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBjb21tZW50QnV0dG9uLmNsYXNzTmFtZSA9ICdjb21tZW50LWJ1dHRvbic7XG4gIGNvbW1lbnRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudCc7XG5cbiAgZm9ybS5hcHBlbmQoaW5wdXQsIGluc2lnaHRCb3gsIGNvbW1lbnRCdXR0b24pO1xuXG4gIHBvcFVwLmFwcGVuZChcbiAgICBjbG9zZUJ1dHRvbixcbiAgICBpbWFnZSxcbiAgICB0aXRsZUNvbnRhaW5lcixcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lcixcbiAgICBudW1iZXJPZkNvbW1lbnRzQ29udGFpbmVyLFxuICAgIGNvbW1lbnRzQ29udGFpbmVyLFxuICAgIG5ld0NvbW1lbnRIZWFkaW5nLFxuICAgIGZvcm0sXG4gICk7XG5cbiAgb3ZlcmxheS5hcHBlbmRDaGlsZChwb3BVcCk7XG5cbiAgcmV0dXJuIG92ZXJsYXk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdDb21tZW50UG9wVXA7XG4iLCJjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChib2R5LCB1cmwpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RDb21tZW50OyIsImNvbnN0IHVwZGF0ZUNvbW1lbnRzID0gYXN5bmMgKFxuICBpZENhdGVnb3J5LFxuICBnZXRDb21tZW50cyxcbiAgY29tbWVudHNDb250YWluZXIsXG4gIG51bWJlck9mQ29tbWVudHNDb250YWluZXIsXG4gIGNvbW1lbnRzQ291bnRlcixcbiAgY3JlYXRlVGFibGVSb3csXG4gIGNvbW1lbnRzT2JqZWN0LFxuKSA9PiB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9JdlA0MnhOY21aN3NUNXJwODd3TC9jb21tZW50cy8/aXRlbV9pZD0ke2lkQ2F0ZWdvcnl9YDtcblxuICBjb25zdCBhbGxDb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKHVybCk7XG5cbiAgaWYgKCFhbGxDb21tZW50cy5lcnJvcikge1xuICAgIGNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlVGFibGVSb3coJ2hlYWRlclJvdycsICdEYXRlJywgJ05hbWUnLCAnQ29tbWVudCcpLFxuICAgICk7XG4gICAgY29tbWVudHNPYmplY3QubnVtYmVyT2ZDb21tZW50cyA9IGNvbW1lbnRzQ291bnRlcihhbGxDb21tZW50cyk7XG5cbiAgICBhbGxDb21tZW50cy5mb3JFYWNoKChlYWNoKSA9PiB7XG4gICAgICBudW1iZXJPZkNvbW1lbnRzQ29udGFpbmVyLnRleHRDb250ZW50ID0gYENvbW1lbnRzKCR7Y29tbWVudHNPYmplY3QubnVtYmVyT2ZDb21tZW50c30pYDtcbiAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVUYWJsZVJvdygncm93JywgZWFjaC5jcmVhdGlvbl9kYXRlLCBlYWNoLnVzZXJuYW1lLCBlYWNoLmNvbW1lbnQpLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBudW1iZXJPZkNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICdDb21tZW50cygwKSc7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUNvbW1lbnRzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuL21vZHVsZXMvZG9tLmpzJztcblxuY29uc3QgZm9vZHMgPSBbXTtcblxuZ2V0RGF0YShmb29kcyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=