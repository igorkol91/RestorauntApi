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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0 !important;\n  padding: 0 !important;\n  box-sizing: border-box;\n  min-height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.stop-scrolling {\n  height: 100%;\n  overflow: hidden;\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  top: 0;\n}\n\n.header-ul {\n  display: flex;\n  margin: 0;\n  padding: 10px;\n  border-bottom: 1px solid;\n  list-style: none;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #4c3c3c;\n  color: #fff;\n}\n\n.header-img {\n  height: 8vh;\n  width: 8vh;\n  border-radius: 100%;\n}\n\n.header-item {\n  margin-left: 1em;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.menus {\n  display: flex;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.header-item:hover {\n  color: gray;\n  text-decoration: underline;\n}\n\n.row {\n  justify-content: center;\n  margin: 0 10px;\n}\n\n.comment-btn {\n  background-color: #4c3c3c;\n  font-weight: bold;\n  color: #fff;\n  border-radius: 5px;\n  border: 2px solid #333;\n}\n\n.comment-btn:hover {\n  background-color: #fff;\n  color: #4c3c3c;\n}\n\n.likesComments {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.fa-thumbs-up {\n  display: inline-block;\n  margin-right: 5px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.menuDiv {\n  border: solid;\n  border-color: #666;\n  border-radius: 5px;\n  padding: 15px;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.menuDiv:hover {\n  box-shadow: 0 0 20px black;\n}\n\n.footer {\n  margin: 0;\n  padding: 0;\n  height: 50px;\n  line-height: 50px;\n  font-size: 0.8rem;\n  border-top: 1px solid;\n  background-color: #4c3c3c;\n  color: #fff;\n}\n\n.footer-text {\n  text-align: center;\n}\n\n.overlay {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: unset;\n  text-align: center;\n  z-index: 20;\n  min-height: 100vh;\n  overflow-y: scroll;\n  padding: 50px 0;\n  margin-bottom: 50px;\n  backdrop-filter: blur(20px);\n}\n\n.c-loading {\n  font-size: 1rem;\n}\n\n.pop-up {\n  background-color: #fff;\n  text-align: center;\n  width: 90vw;\n}\n\n.pop-up table {\n  background-color: #fff;\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n}\n\n.th1,\n.td1 {\n  min-width: 100px;\n}\n\nth {\n  font-size: 1.2rem;\n}\n\n.pop-up-description,\n.num-of-comments {\n  background-color: #fff;\n  margin: 0;\n}\n\n.num-of-comments {\n  padding: 30px 0 10px;\n}\n\n.comments-table tr * {\n  padding: 5px;\n}\n\n.pop-up .image {\n  width: 100%;\n}\n\n.pop-up-image {\n  width: 100%;\n  margin: 20px 0;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n  background-color: #fff;\n}\n\n.pop-up-description {\n  text-align: justify;\n  padding: 0 20px;\n}\n\n.new-comment-heading {\n  text-align: center;\n  padding-top: 30px;\n  background-color: #fff;\n  margin: 0;\n  padding-bottom: 10px;\n}\n\ntd,\nth {\n  border: 1px solid #4c3c3c;\n}\n\ntd:first-child,\nth:first-child {\n  border-left: none;\n}\n\ntd:last-child,\nth:last-child {\n  border-right: none;\n}\n\ntr:nth-child(even) {\n  background-color: #f3f3f3;\n}\n\n.close {\n  display: block;\n  position: fixed;\n  right: 6%;\n  top: 5%;\n  background-color: transparent;\n  border: none;\n  font-size: 3rem;\n}\n\n.hide {\n  display: none;\n}\n\n.name,\n.insight,\n.comment-button {\n  margin: 10px 0;\n  width: 95%;\n}\n\n.comment-button {\n  margin-bottom: 40px;\n  background-color: #4c3c3c;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  height: 40px;\n  font-size: 1.5rem;\n  padding-bottom: 40px;\n}\n\n.comment-button:hover {\n  background-color: #fff;\n  color: #4c3c3c;\n  font-weight: bold;\n  border: 2px solid #4c3c3c;\n}\n\n@media all and (min-width: 786px) {\n  .pop-up {\n    text-align: center;\n    width: 50vw;\n  }\n\n  .close {\n    right: -22%;\n    font-size: 4rem;\n    display: block;\n    width: 100%;\n    position: fixed;\n    top: 30px;\n  }\n\n  .name,\n  .insight,\n  .comment-button {\n    margin: 10px 0;\n    width: 50%;\n  }\n\n  .comment-button {\n    margin-bottom: 40px;\n  }\n\n  .footer {\n    font-size: 1rem;\n  }\n\n  .header-item {\n    margin-left: 2em;\n  }\n\n  .header-ul {\n    padding: 10px 12vw;\n  }\n\n  .comments-table tr * {\n    padding: 0 20px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  margin: 0 !important;\n  padding: 0 !important;\n  box-sizing: border-box;\n  min-height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.stop-scrolling {\n  height: 100%;\n  overflow: hidden;\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  top: 0;\n}\n\n.header-ul {\n  display: flex;\n  margin: 0;\n  padding: 10px;\n  border-bottom: 1px solid;\n  list-style: none;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #4c3c3c;\n  color: #fff;\n}\n\n.header-img {\n  height: 8vh;\n  width: 8vh;\n  border-radius: 100%;\n}\n\n.header-item {\n  margin-left: 1em;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.menus {\n  display: flex;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.header-item:hover {\n  color: gray;\n  text-decoration: underline;\n}\n\n.row {\n  justify-content: center;\n  margin: 0 10px;\n}\n\n.comment-btn {\n  background-color: #4c3c3c;\n  font-weight: bold;\n  color: #fff;\n  border-radius: 5px;\n  border: 2px solid #333;\n}\n\n.comment-btn:hover {\n  background-color: #fff;\n  color: #4c3c3c;\n}\n\n.likesComments {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.fa-thumbs-up {\n  display: inline-block;\n  margin-right: 5px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.menuDiv {\n  border: solid;\n  border-color: #666;\n  border-radius: 5px;\n  padding: 15px;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.menuDiv:hover {\n  box-shadow: 0 0 20px black;\n}\n\n.footer {\n  margin: 0;\n  padding: 0;\n  height: 50px;\n  line-height: 50px;\n  font-size: 0.8rem;\n  border-top: 1px solid;\n  background-color: #4c3c3c;\n  color: #fff;\n}\n\n.footer-text {\n  text-align: center;\n}\n\n.overlay {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: unset;\n  text-align: center;\n  z-index: 20;\n  min-height: 100vh;\n  overflow-y: scroll;\n  padding: 50px 0;\n  margin-bottom: 50px;\n  backdrop-filter: blur(20px);\n}\n\n.c-loading {\n  font-size: 1rem;\n}\n\n.pop-up {\n  background-color: #fff;\n  text-align: center;\n  width: 90vw;\n}\n\n.pop-up table {\n  background-color: #fff;\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n}\n\n.th1,\n.td1 {\n  min-width: 100px;\n}\n\nth {\n  font-size: 1.2rem;\n}\n\n.pop-up-description,\n.num-of-comments {\n  background-color: #fff;\n  margin: 0;\n}\n\n.num-of-comments {\n  padding: 30px 0 10px;\n}\n\n.comments-table tr * {\n  padding: 5px;\n}\n\n.pop-up .image {\n  width: 100%;\n}\n\n.pop-up-image {\n  width: 100%;\n  margin: 20px 0;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n  background-color: #fff;\n}\n\n.pop-up-description {\n  text-align: justify;\n  padding: 0 20px;\n}\n\n.new-comment-heading {\n  text-align: center;\n  padding-top: 30px;\n  background-color: #fff;\n  margin: 0;\n  padding-bottom: 10px;\n}\n\ntd,\nth {\n  border: 1px solid #4c3c3c;\n}\n\ntd:first-child,\nth:first-child {\n  border-left: none;\n}\n\ntd:last-child,\nth:last-child {\n  border-right: none;\n}\n\ntr:nth-child(even) {\n  background-color: #f3f3f3;\n}\n\n.close {\n  display: block;\n  position: fixed;\n  right: 6%;\n  top: 5%;\n  background-color: transparent;\n  border: none;\n  font-size: 3rem;\n}\n\n.hide {\n  display: none;\n}\n\n.name,\n.insight,\n.comment-button {\n  margin: 10px 0;\n  width: 95%;\n}\n\n.comment-button {\n  margin-bottom: 40px;\n  background-color: #4c3c3c;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  height: 40px;\n  font-size: 1.5rem;\n  padding-bottom: 40px;\n}\n\n.comment-button:hover {\n  background-color: #fff;\n  color: #4c3c3c;\n  font-weight: bold;\n  border: 2px solid #4c3c3c;\n}\n\n@media all and (min-width: 786px) {\n  .pop-up {\n    text-align: center;\n    width: 50vw;\n  }\n\n  .close {\n    right: -22%;\n    font-size: 4rem;\n    display: block;\n    width: 100%;\n    position: fixed;\n    top: 30px;\n  }\n\n  .name,\n  .insight,\n  .comment-button {\n    margin: 10px 0;\n    width: 50%;\n  }\n\n  .comment-button {\n    margin-bottom: 40px;\n  }\n\n  .footer {\n    font-size: 1rem;\n  }\n\n  .header-item {\n    margin-left: 2em;\n  }\n\n  .header-ul {\n    padding: 10px 12vw;\n  }\n\n  .comments-table tr * {\n    padding: 0 20px;\n  }\n}\n"],"sourceRoot":""}]);
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





const newCommentPopUp = (foodObject, main, menuDiv) => {
  const {
    idCategory,
    strCategoryThumb,
    strCategory,
    strCategoryDescription,
  } = foodObject;

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

  commentsContainer.innerHTML = 'Loading...';

  const updateComments = async () => {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/comments/?item_id=${idCategory}`;
    const allComments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(url);
    commentsContainer.innerHTML = '';
    numberOfCommentsContainer.textContent = `Comments(${
      (!allComments.error && (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(allComments)) || 0
    })`;
    if (allComments.length) {
      commentsContainer.appendChild((0,_createTableRow_js__WEBPACK_IMPORTED_MODULE_1__["default"])('headerRow', 'Date', 'Name', 'Comment'));
    }
    if (!allComments.error) {
      allComments.forEach((each) => {
        commentsContainer.appendChild((0,_createTableRow_js__WEBPACK_IMPORTED_MODULE_1__["default"])('row', each.creation_date, each.username, each.comment));
      });
    }
  };

  updateComments();

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
      try {
        nameField.value = '';
        insightField.value = '';
        await (0,_postComment_js__WEBPACK_IMPORTED_MODULE_3__["default"])(body, url);
        updateComments();
      } catch (e) {
        nameField.value = name;
        insightField.value = insight;
        const errorP = document.createElement('p');
        errorP.className = 'erro';
        errorP.innerHTML = e.message;
        document.body.insertBefore(errorP, document.body.lastElementChild);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUs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RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm9CO0FBQ21COztBQUV2Qzs7QUFFQSwyREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvbW9kdWxlcy9jb21tZW50c0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRhYmxlUm93LmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL3NyYy9tb2R1bGVzL2dldENvbW1lbnRzLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvbW9kdWxlcy9pdGVtQ291bnQuanMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL3NyYy9tb2R1bGVzL2xpa2VzLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvbW9kdWxlcy9uZXdDb21tZW50UG9wVXAuanMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL3NyYy9tb2R1bGVzL3Bvc3RDb21tZW50LmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zdG9wLXNjcm9sbGluZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uaGVhZGVyLXVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGMzYzNjO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5oZWFkZXItaW1nIHtcXG4gIGhlaWdodDogOHZoO1xcbiAgd2lkdGg6IDh2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5oZWFkZXItaXRlbSB7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmhlYWRlci1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5yb3cge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzMzMztcXG59XFxuXFxuLmNvbW1lbnQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzRjM2MzYztcXG59XFxuXFxuLmxpa2VzQ29tbWVudHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLmZhLXRodW1icy11cCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudURpdiB7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjNjY2O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWVudURpdjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCBibGFjaztcXG59XFxuXFxuLmZvb3RlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvb3Rlci10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBvcGFjaXR5OiB1bnNldDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDIwO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBwYWRkaW5nOiA1MHB4IDA7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbn1cXG5cXG4uYy1sb2FkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnBvcC11cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwdnc7XFxufVxcblxcbi5wb3AtdXAgdGFibGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi50aDEsXFxuLnRkMSB7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbn1cXG5cXG50aCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnBvcC11cC1kZXNjcmlwdGlvbixcXG4ubnVtLW9mLWNvbW1lbnRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5udW0tb2YtY29tbWVudHMge1xcbiAgcGFkZGluZzogMzBweCAwIDEwcHg7XFxufVxcblxcbi5jb21tZW50cy10YWJsZSB0ciAqIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBvcC11cCAuaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wb3AtdXAtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnBvcC11cC1kZXNjcmlwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ubmV3LWNvbW1lbnQtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjM2MzYztcXG59XFxuXFxudGQ6Zmlyc3QtY2hpbGQsXFxudGg6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbnRkOmxhc3QtY2hpbGQsXFxudGg6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcblxcbnRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogNiU7XFxuICB0b3A6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYW1lLFxcbi5pbnNpZ2h0LFxcbi5jb21tZW50LWJ1dHRvbiB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbi5jb21tZW50LWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjM2MzYztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLmNvbW1lbnQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzRjM2MzYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzRjM2MzYztcXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzg2cHgpIHtcXG4gIC5wb3AtdXAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgfVxcblxcbiAgLmNsb3NlIHtcXG4gICAgcmlnaHQ6IC0yMiU7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMzBweDtcXG4gIH1cXG5cXG4gIC5uYW1lLFxcbiAgLmluc2lnaHQsXFxuICAuY29tbWVudC1idXR0b24ge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb21tZW50LWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLmhlYWRlci1pdGVtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcXG4gIH1cXG5cXG4gIC5oZWFkZXItdWwge1xcbiAgICBwYWRkaW5nOiAxMHB4IDEydnc7XFxuICB9XFxuXFxuICAuY29tbWVudHMtdGFibGUgdHIgKiB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNo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QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2YsU0FBUztFQUNYOztFQUVBOzs7SUFHRSxjQUFjO0lBQ2QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zdG9wLXNjcm9sbGluZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uaGVhZGVyLXVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGMzYzNjO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5oZWFkZXItaW1nIHtcXG4gIGhlaWdodDogOHZoO1xcbiAgd2lkdGg6IDh2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5oZWFkZXItaXRlbSB7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmhlYWRlci1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5yb3cge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzMzMztcXG59XFxuXFxuLmNvbW1lbnQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzRjM2MzYztcXG59XFxuXFxuLmxpa2VzQ29tbWVudHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLmZhLXRodW1icy11cCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudURpdiB7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjNjY2O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWVudURpdjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCBibGFjaztcXG59XFxuXFxuLmZvb3RlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvb3Rlci10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBvcGFjaXR5OiB1bnNldDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDIwO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBwYWRkaW5nOiA1MHB4IDA7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbn1cXG5cXG4uYy1sb2FkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnBvcC11cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwdnc7XFxufVxcblxcbi5wb3AtdXAgdGFibGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi50aDEsXFxuLnRkMSB7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbn1cXG5cXG50aCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnBvcC11cC1kZXNjcmlwdGlvbixcXG4ubnVtLW9mLWNvbW1lbnRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5udW0tb2YtY29tbWVudHMge1xcbiAgcGFkZGluZzogMzBweCAwIDEwcHg7XFxufVxcblxcbi5jb21tZW50cy10YWJsZSB0ciAqIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBvcC11cCAuaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wb3AtdXAtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnBvcC11cC1kZXNjcmlwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ubmV3LWNvbW1lbnQtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjM2MzYztcXG59XFxuXFxudGQ6Zmlyc3QtY2hpbGQsXFxudGg6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbnRkOmxhc3QtY2hpbGQsXFxudGg6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcblxcbnRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogNiU7XFxuICB0b3A6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYW1lLFxcbi5pbnNpZ2h0LFxcbi5jb21tZW50LWJ1dHRvbiB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbi5jb21tZW50LWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjM2MzYztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLmNvbW1lbnQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzRjM2MzYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzRjM2MzYztcXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzg2cHgpIHtcXG4gIC5wb3AtdXAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgfVxcblxcbiAgLmNsb3NlIHtcXG4gICAgcmlnaHQ6IC0yMiU7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMzBweDtcXG4gIH1cXG5cXG4gIC5uYW1lLFxcbiAgLmluc2lnaHQsXFxuICAuY29tbWVudC1idXR0b24ge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb21tZW50LWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLmhlYWRlci1pdGVtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcXG4gIH1cXG5cXG4gIC5oZWFkZXItdWwge1xcbiAgICBwYWRkaW5nOiAxMHB4IDEydnc7XFxuICB9XFxuXFxuICAuY29tbWVudHMtdGFibGUgdHIgKiB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb21tZW50c0NvdW50ZXIgPSAoY29tbWVudHMpID0+IGNvbW1lbnRzLmxlbmd0aDtcbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRzQ291bnRlcjsiLCJjb25zdCBjcmVhdGVUYWJsZVJvdyA9ICh0eXBlLCB2YWwxLCB2YWwyLCB2YWwzKSA9PiB7XG4gIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgbGV0IHRkMTtcbiAgbGV0IHRkMjtcbiAgbGV0IHRkMztcbiAgaWYgKHR5cGUgPT09ICdoZWFkZXJSb3cnKSB7XG4gICAgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICB0ZDEuY2xhc3NOYW1lID0gJ3RoMSc7XG4gICAgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICB0ZDIuY2xhc3NOYW1lID0gJ3RoMic7XG4gICAgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICB0ZDMuY2xhc3NOYW1lID0gJ3RoMyc7XG4gICAgdHIuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlcic7XG4gIH0gZWxzZSB7XG4gICAgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICB0ZDEuY2xhc3NOYW1lID0gJ3RkMSc7XG4gICAgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICB0ZDIuY2xhc3NOYW1lID0gJ3RkMic7XG4gICAgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICB0ZDMuY2xhc3NOYW1lID0gJ3RkMyc7XG4gICAgdHIuY2xhc3NOYW1lID0gJ3RhYmxlLXJvdyc7XG4gIH1cbiAgdGQxLnRleHRDb250ZW50ID0gdmFsMTtcbiAgdGQyLnRleHRDb250ZW50ID0gdmFsMjtcbiAgdGQzLnRleHRDb250ZW50ID0gdmFsMztcbiAgdHIuYXBwZW5kKHRkMSwgdGQyLCB0ZDMpO1xuICByZXR1cm4gdHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYWJsZVJvdzsiLCJpbXBvcnQgbmV3Q29tbWVudFBvcFVwIGZyb20gJy4vbmV3Q29tbWVudFBvcFVwLmpzJztcbmltcG9ydCB7IHBvc3RMaWtlcywgZ2V0TGlrZXMgfSBmcm9tICcuL2xpa2VzLmpzJztcbmltcG9ydCBjb3VudE1lYWxzIGZyb20gJy4vaXRlbUNvdW50LmpzJztcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuY29uc3QgZGlzcGxheURhdGEgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgbWVudUhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGxpa2VzQW5kQ29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29tbWVudHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgbGlrZXNDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbGlrZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGxpa2VzQnRuLmNsYXNzTGlzdC5hZGQoJ2ZhcicsICdmYS10aHVtYnMtdXAnKTtcbiAgbWVudURpdi5jbGFzc0xpc3QgPSAnbWVudURpdiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTMgbXktNCc7XG4gIG1lbnVUZXh0LmNsYXNzTGlzdCA9ICdtZW51VGV4dCc7XG4gIGxpa2VzQW5kQ29tbWVudHMuY2xhc3NMaXN0ID0gJ2xpa2VzQ29tbWVudHMnO1xuICBjb21tZW50c0J0bi5jbGFzc0xpc3QgPSAnY29tbWVudC1idG4nO1xuICBjb21tZW50c0J0bi5pbm5lclRleHQgPSAnQ29tbWVudCc7XG5cbiAgbGlrZXNDb3VudC5jbGFzc0xpc3QgPSAnbGlrZXNDb3VudFAnO1xuICBsaWtlc0NvdW50LmlubmVyVGV4dCA9ICcwIGxpa2VzJztcbiAgbGlrZXNDb3VudC5pZCA9IGRhdGEuaWRDYXRlZ29yeTtcbiAgbWVudUhlYWRsaW5lLmlubmVySFRNTCA9IGRhdGEuc3RyQ2F0ZWdvcnk7XG4gIG1lbnVJbWcuc3JjID0gZGF0YS5zdHJDYXRlZ29yeVRodW1iO1xuICBsZXQgZGVzY3JpcHRpb24gPSBkYXRhLnN0ckNhdGVnb3J5RGVzY3JpcHRpb247XG4gIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPiA3MCkge1xuICAgIGRlc2NyaXB0aW9uID0gYCR7ZGVzY3JpcHRpb24uc3Vic3RyKDAsIDcwKX0uLi5gO1xuICB9XG4gIG1lbnVUZXh0LmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xuICBsaWtlc0FuZENvbW1lbnRzLmFwcGVuZChjb21tZW50c0J0biwgbGlrZXNDb3VudCwgbGlrZXNCdG4pO1xuICBtZW51RGl2LmFwcGVuZChtZW51SW1nLCBtZW51SGVhZGxpbmUsIG1lbnVUZXh0LCBsaWtlc0FuZENvbW1lbnRzKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgY29tbWVudHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ld0NvbW1lbnRQb3BVcChkYXRhLCBtYWluLCBtZW51RGl2KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdzdG9wLXNjcm9sbGluZycpO1xuICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9KTtcbiAgbGlrZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHBvc3RMaWtlcyhsaWtlc0J0bik7XG4gICAgY29uc3QgaW5jcmVhc2VkTGlrZSA9IHBhcnNlSW50KGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5pbm5lclRleHQsIDEwKSArIDE7XG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmlubmVyVGV4dCA9IGAke2luY3JlYXNlZExpa2UudG9TdHJpbmcoKX0gTGlrZXNgO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZ2V0TGlrZXMoKTtcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGZvb2RzKSA9PiB7XG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGNvdW50QXJyYXkgPSBbXTtcbiAgY29uc3QgdGVtcFJlc3VsdCA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvY2F0ZWdvcmllcy5waHAnLFxuICApO1xuICBjb25zdCBmaW5hbFJlc3VsdCA9IGF3YWl0IHRlbXBSZXN1bHQuanNvbigpO1xuICBmb29kcyA9IGZpbmFsUmVzdWx0O1xuICBmb29kcy5jYXRlZ29yaWVzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY291bnRBcnJheS5wdXNoKGluZGV4KTtcbiAgICBpZiAoaW5kZXggPT09IGZvb2RzLmNhdGVnb3JpZXMubGVuZ3RoIC0gMSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1pdGVtJykuaW5uZXJIVE1MID0gY291bnRNZWFscyhjb3VudEFycmF5KTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXlEYXRhKGVsZW1lbnQpO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXREYXRhO1xuIiwiY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGZpbmFsUmVzdWx0ID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgcmV0dXJuIGZpbmFsUmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29tbWVudHM7IiwiY29uc3QgY291bnRNZWFscyA9IChpdGVtcykgPT4gYCR7aXRlbXMubGVuZ3RofSBNZWFsc2A7XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50TWVhbHM7IiwiY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnIH0pO1xuY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0l2UDQyeE5jbVo3c1Q1cnA4N3dML2xpa2VzLyc7XG5jb25zdCBzaG93RGF0YSA9IChkYXRhKSA9PiB7XG4gIGRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGlkID0gZWxlbWVudC5pdGVtX2lkO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lclRleHQgPSBgJHtlbGVtZW50Lmxpa2VzfSBMaWtlc2A7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHBvc3RMaWtlcyA9IGFzeW5jIChidXR0b24pID0+IHtcbiAgYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogYCR7YnV0dG9uLnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5pZH1gLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IGhlYWRlcixcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdGVtcFJlc3VsdCA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGZpbmFsUmVzdWx0ID0gYXdhaXQgdGVtcFJlc3VsdC5qc29uKCk7XG4gIHNob3dEYXRhKGZpbmFsUmVzdWx0KTtcbn07XG5cbmRvY3VtZW50Lm9ubG9hZCA9IGdldExpa2VzKCk7XG5leHBvcnQgeyBwb3N0TGlrZXMsIGdldExpa2VzIH07IiwiaW1wb3J0IGNvbW1lbnRzQ291bnRlciBmcm9tICcuL2NvbW1lbnRzQ291bnRlci5qcyc7XG5pbXBvcnQgY3JlYXRlVGFibGVSb3cgZnJvbSAnLi9jcmVhdGVUYWJsZVJvdy5qcyc7XG5pbXBvcnQgZ2V0Q29tbWVudHMgZnJvbSAnLi9nZXRDb21tZW50cy5qcyc7XG5pbXBvcnQgcG9zdENvbW1lbnQgZnJvbSAnLi9wb3N0Q29tbWVudC5qcyc7XG5cbmNvbnN0IG5ld0NvbW1lbnRQb3BVcCA9IChmb29kT2JqZWN0LCBtYWluLCBtZW51RGl2KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZENhdGVnb3J5LFxuICAgIHN0ckNhdGVnb3J5VGh1bWIsXG4gICAgc3RyQ2F0ZWdvcnksXG4gICAgc3RyQ2F0ZWdvcnlEZXNjcmlwdGlvbixcbiAgfSA9IGZvb2RPYmplY3Q7XG5cbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgb3ZlcmxheS5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XG5cbiAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wVXAuY2xhc3NOYW1lID0gJ3BvcC11cCc7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2Nsb3NlJztcbiAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIG1haW4ucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ3N0b3Atc2Nyb2xsaW5nJyk7XG4gICAgbWVudURpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0pO1xuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltYWdlLmNsYXNzTmFtZSA9ICdwb3AtdXAtaW1hZ2UnO1xuICBpbWFnZS5zcmMgPSBzdHJDYXRlZ29yeVRodW1iO1xuICBpbWFnZS5hbHQgPSBzdHJDYXRlZ29yeTtcblxuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdwb3AtdXAtdGl0bGUnO1xuICB0aXRsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHN0ckNhdGVnb3J5O1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAncG9wLXVwLWRlc2NyaXB0aW9uJztcbiAgZGVzY3JpcHRpb25Db250YWluZXIudGV4dENvbnRlbnQgPSBzdHJDYXRlZ29yeURlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IG51bWJlck9mQ29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBudW1iZXJPZkNvbW1lbnRzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdudW0tb2YtY29tbWVudHMnO1xuICBudW1iZXJPZkNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICdDb21tZW50cyg8c3BhbiBjbGFzcz1cImMtbG9hZGluZ1wiPkxvYWRpbmcuLi48L3NwYW4+KSc7XG5cbiAgY29uc3QgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICBjb21tZW50c0NvbnRhaW5lci5jbGFzc05hbWUgPSAnY29tbWVudHMtdGFibGUnO1xuXG4gIGNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICdMb2FkaW5nLi4uJztcblxuICBjb25zdCB1cGRhdGVDb21tZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvSXZQNDJ4TmNtWjdzVDVycDg3d0wvY29tbWVudHMvP2l0ZW1faWQ9JHtpZENhdGVnb3J5fWA7XG4gICAgY29uc3QgYWxsQ29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50cyh1cmwpO1xuICAgIGNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIG51bWJlck9mQ29tbWVudHNDb250YWluZXIudGV4dENvbnRlbnQgPSBgQ29tbWVudHMoJHtcbiAgICAgICghYWxsQ29tbWVudHMuZXJyb3IgJiYgY29tbWVudHNDb3VudGVyKGFsbENvbW1lbnRzKSkgfHwgMFxuICAgIH0pYDtcbiAgICBpZiAoYWxsQ29tbWVudHMubGVuZ3RoKSB7XG4gICAgICBjb21tZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYWJsZVJvdygnaGVhZGVyUm93JywgJ0RhdGUnLCAnTmFtZScsICdDb21tZW50JykpO1xuICAgIH1cbiAgICBpZiAoIWFsbENvbW1lbnRzLmVycm9yKSB7XG4gICAgICBhbGxDb21tZW50cy5mb3JFYWNoKChlYWNoKSA9PiB7XG4gICAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhYmxlUm93KCdyb3cnLCBlYWNoLmNyZWF0aW9uX2RhdGUsIGVhY2gudXNlcm5hbWUsIGVhY2guY29tbWVudCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZUNvbW1lbnRzKCk7XG5cbiAgY29uc3QgbmV3Q29tbWVudEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBuZXdDb21tZW50SGVhZGluZy5jbGFzc05hbWUgPSAnbmV3LWNvbW1lbnQtaGVhZGluZyc7XG4gIG5ld0NvbW1lbnRIZWFkaW5nLnRleHRDb250ZW50ID0gJ0FkZCBhIGNvbW1lbnQnO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybS5jbGFzc05hbWUgPSAnZm9ybSc7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICBpbnB1dC5jbGFzc05hbWUgPSAnbmFtZSc7XG4gIGlucHV0LnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XG5cbiAgY29uc3QgaW5zaWdodEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGluc2lnaHRCb3guY2xhc3NOYW1lID0gJ2luc2lnaHQnO1xuICBpbnNpZ2h0Qm94LnBsYWNlaG9sZGVyID0gJ1lvdXIgaW5zaWdodHMnO1xuXG4gIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29tbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuYW1lRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuICAgIGNvbnN0IGluc2lnaHRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0Jyk7XG4gICAgY29uc3QgeyB2YWx1ZTogbmFtZSB9ID0gbmFtZUZpZWxkO1xuICAgIGNvbnN0IHsgdmFsdWU6IGluc2lnaHQgfSA9IGluc2lnaHRGaWVsZDtcbiAgICBpZiAobmFtZSAmJiBpbnNpZ2h0KSB7XG4gICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvSXZQNDJ4TmNtWjdzVDVycDg3d0wvY29tbWVudHMvJztcbiAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgIGl0ZW1faWQ6IGlkQ2F0ZWdvcnksXG4gICAgICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgICAgICBjb21tZW50OiBpbnNpZ2h0LFxuICAgICAgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5hbWVGaWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICBpbnNpZ2h0RmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgYXdhaXQgcG9zdENvbW1lbnQoYm9keSwgdXJsKTtcbiAgICAgICAgdXBkYXRlQ29tbWVudHMoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbmFtZUZpZWxkLnZhbHVlID0gbmFtZTtcbiAgICAgICAgaW5zaWdodEZpZWxkLnZhbHVlID0gaW5zaWdodDtcbiAgICAgICAgY29uc3QgZXJyb3JQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlcnJvclAuY2xhc3NOYW1lID0gJ2Vycm8nO1xuICAgICAgICBlcnJvclAuaW5uZXJIVE1MID0gZS5tZXNzYWdlO1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlcnJvclAsIGRvY3VtZW50LmJvZHkubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgY29tbWVudEJ1dHRvbi5jbGFzc05hbWUgPSAnY29tbWVudC1idXR0b24nO1xuICBjb21tZW50QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbW1lbnQnO1xuXG4gIGZvcm0uYXBwZW5kKGlucHV0LCBpbnNpZ2h0Qm94LCBjb21tZW50QnV0dG9uKTtcblxuICBwb3BVcC5hcHBlbmQoXG4gICAgY2xvc2VCdXR0b24sXG4gICAgaW1hZ2UsXG4gICAgdGl0bGVDb250YWluZXIsXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIsXG4gICAgbnVtYmVyT2ZDb21tZW50c0NvbnRhaW5lcixcbiAgICBjb21tZW50c0NvbnRhaW5lcixcbiAgICBuZXdDb21tZW50SGVhZGluZyxcbiAgICBmb3JtLFxuICApO1xuXG4gIG92ZXJsYXkuYXBwZW5kQ2hpbGQocG9wVXApO1xuXG4gIHJldHVybiBvdmVybGF5O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3Q29tbWVudFBvcFVwO1xuIiwiY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAoYm9keSwgdXJsKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0Q29tbWVudDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL21haW4uY3NzJztcbmltcG9ydCBnZXREYXRhIGZyb20gJy4vbW9kdWxlcy9kb20uanMnO1xuXG5jb25zdCBmb29kcyA9IFtdO1xuXG5nZXREYXRhKGZvb2RzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==