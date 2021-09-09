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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0 !important;\n  padding: 0 !important;\n  box-sizing: border-box;\n  min-height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.stop-scrolling {\n  height: 100%;\n  overflow: hidden;\n}\n\n.header-ul {\n  display: flex;\n  margin: 0;\n  padding: 10px;\n  border-bottom: 1px solid;\n  list-style: none;\n  align-items: center;\n}\n\n.header-img {\n  height: 8vh;\n  width: 8vh;\n}\n\n.header-item {\n  margin-left: 1em;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.header-item:hover {\n  color: gray;\n  text-decoration: underline;\n}\n\n.row {\n  justify-content: center;\n  margin: 0 10px;\n}\n\n.comment-btn {\n  background-color: #fff;\n  border-radius: 5px;\n  border: 1px solid #333;\n}\n\n.comment-btn:hover {\n  background-color: #333;\n  color: #fff;\n}\n\n.likesComments {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.fa-thumbs-up {\n  display: inline-block;\n  margin-right: 5px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.menuDiv {\n  border: solid;\n  border-color: #666;\n  border-radius: 5px;\n  padding: 15px;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.menuDiv:hover {\n  box-shadow: 0 0 20px black;\n}\n\n.footer {\n  margin: 0;\n  padding: 0;\n  height: 50px;\n  line-height: 50px;\n  font-size: 0.8rem;\n  border-top: 1px solid;\n}\n\n.footer-text {\n  text-align: center;\n}\n\n.overlay {\n  background-color: #fff;\n  width: 100vw;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: unset;\n  text-align: center;\n  z-index: 20;\n  max-height: 100vh;\n  overflow-y: auto;\n  margin-bottom: 30px;\n}\n\n.c-loading {\n  font-size: 1rem;\n}\n\n.pop-up {\n  text-align: center;\n  width: 70%;\n}\n\n.pop-up .image {\n  width: 100%;\n}\n\n.pop-up-image {\n  width: 100%;\n  margin: 20px 0;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n}\n\n.form > * {\n  margin: 10px 0;\n  width: 100%;\n}\n\n.pop-up-description {\n  margin-bottom: 20px;\n  text-align: justify;\n}\n\n.comment {\n  text-align: left;\n}\n\n.new-comment-heading {\n  margin-top: 50px;\n}\n\n.close {\n  position: fixed;\n  right: 1%;\n  top: 0;\n  background-color: transparent;\n  border: none;\n  font-size: 2rem;\n}\n\n.hide {\n  display: none;\n}\n\n.comment-button {\n  margin-bottom: 20px;\n  background-color: #333;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  height: 40px;\n  font-size: 1.5rem;\n}\n\n.comment-button:hover {\n  background-color: rgb(3, 66, 3);\n}\n\n@media all and (min-width: 786px) {\n  .pop-up {\n    text-align: center;\n    width: 60%;\n  }\n\n  .close {\n    right: 16%;\n    font-size: 3rem;\n  }\n\n  .form > * {\n    margin: 10px 0;\n    width: 50%;\n  }\n\n  .footer {\n    font-size: 1rem;\n  }\n\n  .header-item {\n    margin-left: 2em;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,sBAAsB;EACtB,iBAAiB;EACjB,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,yCAAyC;AAC3C;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,aAAa;EACb,wBAAwB;EACxB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,MAAM;EACN,OAAO;EACP,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,MAAM;EACN,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE;IACE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,eAAe;EACjB;;EAEA;IACE,cAAc;IACd,UAAU;EACZ;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,gBAAgB;EAClB;AACF","sourcesContent":["body {\n  margin: 0 !important;\n  padding: 0 !important;\n  box-sizing: border-box;\n  min-height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.stop-scrolling {\n  height: 100%;\n  overflow: hidden;\n}\n\n.header-ul {\n  display: flex;\n  margin: 0;\n  padding: 10px;\n  border-bottom: 1px solid;\n  list-style: none;\n  align-items: center;\n}\n\n.header-img {\n  height: 8vh;\n  width: 8vh;\n}\n\n.header-item {\n  margin-left: 1em;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.header-item:hover {\n  color: gray;\n  text-decoration: underline;\n}\n\n.row {\n  justify-content: center;\n  margin: 0 10px;\n}\n\n.comment-btn {\n  background-color: #fff;\n  border-radius: 5px;\n  border: 1px solid #333;\n}\n\n.comment-btn:hover {\n  background-color: #333;\n  color: #fff;\n}\n\n.likesComments {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.fa-thumbs-up {\n  display: inline-block;\n  margin-right: 5px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.menuDiv {\n  border: solid;\n  border-color: #666;\n  border-radius: 5px;\n  padding: 15px;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.menuDiv:hover {\n  box-shadow: 0 0 20px black;\n}\n\n.footer {\n  margin: 0;\n  padding: 0;\n  height: 50px;\n  line-height: 50px;\n  font-size: 0.8rem;\n  border-top: 1px solid;\n}\n\n.footer-text {\n  text-align: center;\n}\n\n.overlay {\n  background-color: #fff;\n  width: 100vw;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: unset;\n  text-align: center;\n  z-index: 20;\n  max-height: 100vh;\n  overflow-y: auto;\n  margin-bottom: 30px;\n}\n\n.c-loading {\n  font-size: 1rem;\n}\n\n.pop-up {\n  text-align: center;\n  width: 70%;\n}\n\n.pop-up .image {\n  width: 100%;\n}\n\n.pop-up-image {\n  width: 100%;\n  margin: 20px 0;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n}\n\n.form > * {\n  margin: 10px 0;\n  width: 100%;\n}\n\n.pop-up-description {\n  margin-bottom: 20px;\n  text-align: justify;\n}\n\n.comment {\n  text-align: left;\n}\n\n.new-comment-heading {\n  margin-top: 50px;\n}\n\n.close {\n  position: fixed;\n  right: 1%;\n  top: 0;\n  background-color: transparent;\n  border: none;\n  font-size: 2rem;\n}\n\n.hide {\n  display: none;\n}\n\n.comment-button {\n  margin-bottom: 20px;\n  background-color: #333;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  height: 40px;\n  font-size: 1.5rem;\n}\n\n.comment-button:hover {\n  background-color: rgb(3, 66, 3);\n}\n\n@media all and (min-width: 786px) {\n  .pop-up {\n    text-align: center;\n    width: 60%;\n  }\n\n  .close {\n    right: 16%;\n    font-size: 3rem;\n  }\n\n  .form > * {\n    margin: 10px 0;\n    width: 50%;\n  }\n\n  .footer {\n    font-size: 1rem;\n  }\n\n  .header-item {\n    margin-left: 2em;\n  }\n}\n"],"sourceRoot":""}]);
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
  // create elements for a menu item
  const menuDiv = document.createElement('div');
  const menuImg = document.createElement('img');
  const menuHeadline = document.createElement('h3');
  const menuText = document.createElement('p');
  const likesAndComments = document.createElement('div');
  const commentsBtn = document.createElement('button');
  const likesCount = document.createElement('p');
  const likesBtn = document.createElement('i');
  // <i class="far fa-thumbs-up"></i>
  likesBtn.classList.add('far', 'fa-thumbs-up');
  // put classes and values
  menuDiv.classList = 'menuDiv col-sm-12 col-md-6 col-lg-3 my-4';
  menuText.classList = 'menuText';
  likesAndComments.classList = 'likesComments';
  commentsBtn.classList = 'comment-btn';
  commentsBtn.innerText = 'Comment';

  likesCount.classList = 'likesCountP';
  likesCount.innerText = '0 likes';
  likesCount.id = data.idCategory;
  // likesBtn.classList = 'px-5';
  // likesBtn.innerText = 'Like';
  // put values to every element
  menuHeadline.innerHTML = data.strCategory;
  menuImg.src = data.strCategoryThumb;
  menuText.innerHTML = `${data.strCategoryDescription.split('.')[0]}.`;
  likesAndComments.append(commentsBtn, likesCount, likesBtn);
  menuDiv.append(menuImg, menuHeadline, menuText, likesAndComments);
  main.appendChild(menuDiv);
  commentsBtn.addEventListener('click', async () => {
    const overlay = (0,_newCommentPopUp_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, main, menuDiv);
    main.appendChild(overlay);
    document.querySelector('.overlay').classList.remove('hide');
    document.querySelector('body').classList.add('stop-scrolling');
    menuDiv.classList.add('hide');
  });
  likesBtn.addEventListener('click', (e) => {
    (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.postLikes)(likesBtn);
    // set timeout to give postLikes the time to post the like value
    // one second later I get everything and the like is succesfully updated
    const increasedLike = parseInt(e.target.parentNode.childNodes[1].innerText, 10) + 1;
    e.target.parentNode.childNodes[1].innerText = `${increasedLike.toString()} Likes`;
    setTimeout(() => { (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)(); }, 1000);
  });
};

const getData = (foods) => {
  main.innerHTML = '';
  const countArray = [];
  return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((response) => response.json())
    .then((data) => {
      foods = data;
      foods.categories.forEach((element, index) => {
        if (index < 7 && element.strCategory !== 'Miscellaneous') {
          countArray.push(index);
        }
        index + 1 === 7 && (document.querySelector('.header-item').innerHTML = (0,_itemCount_js__WEBPACK_IMPORTED_MODULE_2__["default"])(countArray));
        return (index < 7 && element.strCategory !== 'Miscellaneous') && displayData(element);
      });
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
const countMeals = items => `${items.length} Meals`;

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
  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data));
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
/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComments.js */ "./src/modules/getComments.js");
/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postComment.js */ "./src/modules/postComment.js");




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

  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'comments-container';

  commentsContainer.textContent = 'Loading...';

  const updateComments = async () => {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/comments/?item_id=${idCategory}`;
    const allComments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(url);
    commentsContainer.textContent = '';
    numberOfCommentsContainer.textContent = `Comments(${
      (!allComments.error && (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(allComments)) || 0
    })`;

    if (!allComments.error) {
      allComments.forEach((each) => {
        const comment = document.createElement('p');
        comment.className = 'comment';
        commentsContainer.appendChild(comment);
        comment.innerHTML = `<strong>${each.creation_date} ${each.username}</strong>:   ${each.comment}`;
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
        await (0,_postComment_js__WEBPACK_IMPORTED_MODULE_2__["default"])(body, url);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7VUNYMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOb0I7QUFDbUI7O0FBRXZDOztBQUVBLDJEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzQ291bnRlci5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvbW9kdWxlcy9nZXRDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vc3JjL21vZHVsZXMvaXRlbUNvdW50LmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvbW9kdWxlcy9saWtlcy5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vc3JjL21vZHVsZXMvbmV3Q29tbWVudFBvcFVwLmpzIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvLi9zcmMvbW9kdWxlcy9wb3N0Q29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltcHNvbnF1b3Rlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpbXBzb25xdW90ZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW1wc29ucXVvdGVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc3RvcC1zY3JvbGxpbmcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmhlYWRlci11bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWltZyB7XFxuICBoZWlnaHQ6IDh2aDtcXG4gIHdpZHRoOiA4dmg7XFxufVxcblxcbi5oZWFkZXItaXRlbSB7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItaXRlbTpob3ZlciB7XFxuICBjb2xvcjogZ3JheTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ucm93IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi5jb21tZW50LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG59XFxuXFxuLmNvbW1lbnQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmxpa2VzQ29tbWVudHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLmZhLXRodW1icy11cCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudURpdiB7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjNjY2O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWVudURpdjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCBibGFjaztcXG59XFxuXFxuLmZvb3RlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZDtcXG59XFxuXFxuLmZvb3Rlci10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBvcGFjaXR5OiB1bnNldDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDIwO1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmMtbG9hZGluZyB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5wb3AtdXAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLnBvcC11cCAuaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wb3AtdXAtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZm9ybSA+ICoge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBvcC11cC1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLmNvbW1lbnQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLm5ldy1jb21tZW50LWhlYWRpbmcge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxJTtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29tbWVudC1idXR0b24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY29tbWVudC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDY2LCAzKTtcXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzg2cHgpIHtcXG4gIC5wb3AtdXAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxuXFxuICAuY2xvc2Uge1xcbiAgICByaWdodDogMTYlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAuZm9ybSA+ICoge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuaGVhZGVyLWl0ZW0ge1xcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsTUFBTTtFQUNOLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zdG9wLXNjcm9sbGluZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaGVhZGVyLXVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItaW1nIHtcXG4gIGhlaWdodDogOHZoO1xcbiAgd2lkdGg6IDh2aDtcXG59XFxuXFxuLmhlYWRlci1pdGVtIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlci1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5yb3cge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbn1cXG5cXG4uY29tbWVudC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubGlrZXNDb21tZW50cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4uZmEtdGh1bWJzLXVwIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51RGl2IHtcXG4gIGJvcmRlcjogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICM2NjY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tZW51RGl2OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IGJsYWNrO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IHVuc2V0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogMjA7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uYy1sb2FkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnBvcC11cCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4ucG9wLXVwIC5pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBvcC11cC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5mb3JtID4gKiB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucG9wLXVwLWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4uY29tbWVudCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubmV3LWNvbW1lbnQtaGVhZGluZyB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDElO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb21tZW50LWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb21tZW50LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgNjYsIDMpO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3ODZweCkge1xcbiAgLnBvcC11cCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gIH1cXG5cXG4gIC5jbG9zZSB7XFxuICAgIHJpZ2h0OiAxNiU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG5cXG4gIC5mb3JtID4gKiB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5oZWFkZXItaXRlbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29tbWVudHNDb3VudGVyID0gKGNvbW1lbnRzKSA9PiBjb21tZW50cy5sZW5ndGg7XG5leHBvcnQgZGVmYXVsdCBjb21tZW50c0NvdW50ZXI7IiwiaW1wb3J0IG5ld0NvbW1lbnRQb3BVcCBmcm9tICcuL25ld0NvbW1lbnRQb3BVcC5qcyc7XG5pbXBvcnQgeyBwb3N0TGlrZXMsIGdldExpa2VzIH0gZnJvbSAnLi9saWtlcy5qcyc7XG5pbXBvcnQgY291bnRNZWFscyBmcm9tICcuL2l0ZW1Db3VudC5qcyc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmNvbnN0IGRpc3BsYXlEYXRhID0gKGRhdGEpID0+IHtcbiAgLy8gY3JlYXRlIGVsZW1lbnRzIGZvciBhIG1lbnUgaXRlbVxuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgbWVudUhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGxpa2VzQW5kQ29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29tbWVudHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgbGlrZXNDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbGlrZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIC8vIDxpIGNsYXNzPVwiZmFyIGZhLXRodW1icy11cFwiPjwvaT5cbiAgbGlrZXNCdG4uY2xhc3NMaXN0LmFkZCgnZmFyJywgJ2ZhLXRodW1icy11cCcpO1xuICAvLyBwdXQgY2xhc3NlcyBhbmQgdmFsdWVzXG4gIG1lbnVEaXYuY2xhc3NMaXN0ID0gJ21lbnVEaXYgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy0zIG15LTQnO1xuICBtZW51VGV4dC5jbGFzc0xpc3QgPSAnbWVudVRleHQnO1xuICBsaWtlc0FuZENvbW1lbnRzLmNsYXNzTGlzdCA9ICdsaWtlc0NvbW1lbnRzJztcbiAgY29tbWVudHNCdG4uY2xhc3NMaXN0ID0gJ2NvbW1lbnQtYnRuJztcbiAgY29tbWVudHNCdG4uaW5uZXJUZXh0ID0gJ0NvbW1lbnQnO1xuXG4gIGxpa2VzQ291bnQuY2xhc3NMaXN0ID0gJ2xpa2VzQ291bnRQJztcbiAgbGlrZXNDb3VudC5pbm5lclRleHQgPSAnMCBsaWtlcyc7XG4gIGxpa2VzQ291bnQuaWQgPSBkYXRhLmlkQ2F0ZWdvcnk7XG4gIC8vIGxpa2VzQnRuLmNsYXNzTGlzdCA9ICdweC01JztcbiAgLy8gbGlrZXNCdG4uaW5uZXJUZXh0ID0gJ0xpa2UnO1xuICAvLyBwdXQgdmFsdWVzIHRvIGV2ZXJ5IGVsZW1lbnRcbiAgbWVudUhlYWRsaW5lLmlubmVySFRNTCA9IGRhdGEuc3RyQ2F0ZWdvcnk7XG4gIG1lbnVJbWcuc3JjID0gZGF0YS5zdHJDYXRlZ29yeVRodW1iO1xuICBtZW51VGV4dC5pbm5lckhUTUwgPSBgJHtkYXRhLnN0ckNhdGVnb3J5RGVzY3JpcHRpb24uc3BsaXQoJy4nKVswXX0uYDtcbiAgbGlrZXNBbmRDb21tZW50cy5hcHBlbmQoY29tbWVudHNCdG4sIGxpa2VzQ291bnQsIGxpa2VzQnRuKTtcbiAgbWVudURpdi5hcHBlbmQobWVudUltZywgbWVudUhlYWRsaW5lLCBtZW51VGV4dCwgbGlrZXNBbmRDb21tZW50cyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWVudURpdik7XG4gIGNvbW1lbnRzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXdDb21tZW50UG9wVXAoZGF0YSwgbWFpbiwgbWVudURpdik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc3RvcC1zY3JvbGxpbmcnKTtcbiAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfSk7XG4gIGxpa2VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwb3N0TGlrZXMobGlrZXNCdG4pO1xuICAgIC8vIHNldCB0aW1lb3V0IHRvIGdpdmUgcG9zdExpa2VzIHRoZSB0aW1lIHRvIHBvc3QgdGhlIGxpa2UgdmFsdWVcbiAgICAvLyBvbmUgc2Vjb25kIGxhdGVyIEkgZ2V0IGV2ZXJ5dGhpbmcgYW5kIHRoZSBsaWtlIGlzIHN1Y2Nlc2Z1bGx5IHVwZGF0ZWRcbiAgICBjb25zdCBpbmNyZWFzZWRMaWtlID0gcGFyc2VJbnQoZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmlubmVyVGV4dCwgMTApICsgMTtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0ID0gYCR7aW5jcmVhc2VkTGlrZS50b1N0cmluZygpfSBMaWtlc2A7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IGdldExpa2VzKCk7IH0sIDEwMDApO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldERhdGEgPSAoZm9vZHMpID0+IHtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgY291bnRBcnJheSA9IFtdO1xuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9jYXRlZ29yaWVzLnBocCcpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGZvb2RzID0gZGF0YTtcbiAgICAgIGZvb2RzLmNhdGVnb3JpZXMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4IDwgNyAmJiBlbGVtZW50LnN0ckNhdGVnb3J5ICE9PSAnTWlzY2VsbGFuZW91cycpIHtcbiAgICAgICAgICBjb3VudEFycmF5LnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGluZGV4ICsgMSA9PT0gNyAmJiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1pdGVtJykuaW5uZXJIVE1MID0gY291bnRNZWFscyhjb3VudEFycmF5KSk7XG4gICAgICAgIHJldHVybiAoaW5kZXggPCA3ICYmIGVsZW1lbnQuc3RyQ2F0ZWdvcnkgIT09ICdNaXNjZWxsYW5lb3VzJykgJiYgZGlzcGxheURhdGEoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXREYXRhOyIsImNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKHVybCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCBmaW5hbFJlc3VsdCA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gIHJldHVybiBmaW5hbFJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbW1lbnRzOyIsImNvbnN0IGNvdW50TWVhbHMgPSBpdGVtcyA9PiBgJHtpdGVtcy5sZW5ndGh9IE1lYWxzYDtcblxuZXhwb3J0IGRlZmF1bHQgY291bnRNZWFsczsiLCJjb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSk7XG5jb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvSXZQNDJ4TmNtWjdzVDVycDg3d0wvbGlrZXMvJztcbmNvbnN0IHNob3dEYXRhID0gKGRhdGEpID0+IHtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaWQgPSBlbGVtZW50Lml0ZW1faWQ7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVyVGV4dCA9IGAke2VsZW1lbnQubGlrZXN9IExpa2VzYDtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKGJ1dHRvbikgPT4ge1xuICBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBgJHtidXR0b24ucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmlkfWAsXG4gICAgfSksXG4gICAgaGVhZGVyczogaGVhZGVyLFxuICB9KTtcbn07XG5cbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHNob3dEYXRhKGRhdGEpKTtcbn07XG5cbmRvY3VtZW50Lm9ubG9hZCA9IGdldExpa2VzKCk7XG5leHBvcnQgeyBwb3N0TGlrZXMsIGdldExpa2VzIH07IiwiaW1wb3J0IGNvbW1lbnRzQ291bnRlciBmcm9tICcuL2NvbW1lbnRzQ291bnRlci5qcyc7XG5pbXBvcnQgZ2V0Q29tbWVudHMgZnJvbSAnLi9nZXRDb21tZW50cy5qcyc7XG5pbXBvcnQgcG9zdENvbW1lbnQgZnJvbSAnLi9wb3N0Q29tbWVudC5qcyc7XG5cbmNvbnN0IG5ld0NvbW1lbnRQb3BVcCA9IChmb29kT2JqZWN0LCBtYWluLCBtZW51RGl2KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZENhdGVnb3J5LFxuICAgIHN0ckNhdGVnb3J5VGh1bWIsXG4gICAgc3RyQ2F0ZWdvcnksXG4gICAgc3RyQ2F0ZWdvcnlEZXNjcmlwdGlvbixcbiAgfSA9IGZvb2RPYmplY3Q7XG5cbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgb3ZlcmxheS5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XG5cbiAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wVXAuY2xhc3NOYW1lID0gJ3BvcC11cCc7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2Nsb3NlJztcbiAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIG1haW4ucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ3N0b3Atc2Nyb2xsaW5nJyk7XG4gICAgbWVudURpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0pO1xuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltYWdlLmNsYXNzTmFtZSA9ICdwb3AtdXAtaW1hZ2UnO1xuICBpbWFnZS5zcmMgPSBzdHJDYXRlZ29yeVRodW1iO1xuICBpbWFnZS5hbHQgPSBzdHJDYXRlZ29yeTtcblxuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdwb3AtdXAtdGl0bGUnO1xuICB0aXRsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHN0ckNhdGVnb3J5O1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAncG9wLXVwLWRlc2NyaXB0aW9uJztcbiAgZGVzY3JpcHRpb25Db250YWluZXIudGV4dENvbnRlbnQgPSBzdHJDYXRlZ29yeURlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IG51bWJlck9mQ29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBudW1iZXJPZkNvbW1lbnRzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdudW0tb2YtY29tbWVudHMnO1xuICBudW1iZXJPZkNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICdDb21tZW50cyg8c3BhbiBjbGFzcz1cImMtbG9hZGluZ1wiPkxvYWRpbmcuLi48L3NwYW4+KSc7XG5cbiAgY29uc3QgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudHNDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbW1lbnRzLWNvbnRhaW5lcic7XG5cbiAgY29tbWVudHNDb250YWluZXIudGV4dENvbnRlbnQgPSAnTG9hZGluZy4uLic7XG5cbiAgY29uc3QgdXBkYXRlQ29tbWVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0l2UDQyeE5jbVo3c1Q1cnA4N3dML2NvbW1lbnRzLz9pdGVtX2lkPSR7aWRDYXRlZ29yeX1gO1xuICAgIGNvbnN0IGFsbENvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHModXJsKTtcbiAgICBjb21tZW50c0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIG51bWJlck9mQ29tbWVudHNDb250YWluZXIudGV4dENvbnRlbnQgPSBgQ29tbWVudHMoJHtcbiAgICAgICghYWxsQ29tbWVudHMuZXJyb3IgJiYgY29tbWVudHNDb3VudGVyKGFsbENvbW1lbnRzKSkgfHwgMFxuICAgIH0pYDtcblxuICAgIGlmICghYWxsQ29tbWVudHMuZXJyb3IpIHtcbiAgICAgIGFsbENvbW1lbnRzLmZvckVhY2goKGVhY2gpID0+IHtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29tbWVudC5jbGFzc05hbWUgPSAnY29tbWVudCc7XG4gICAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnQpO1xuICAgICAgICBjb21tZW50LmlubmVySFRNTCA9IGA8c3Ryb25nPiR7ZWFjaC5jcmVhdGlvbl9kYXRlfSAke2VhY2gudXNlcm5hbWV9PC9zdHJvbmc+OiAgICR7ZWFjaC5jb21tZW50fWA7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlQ29tbWVudHMoKTtcblxuICBjb25zdCBuZXdDb21tZW50SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIG5ld0NvbW1lbnRIZWFkaW5nLmNsYXNzTmFtZSA9ICduZXctY29tbWVudC1oZWFkaW5nJztcbiAgbmV3Q29tbWVudEhlYWRpbmcudGV4dENvbnRlbnQgPSAnQWRkIGEgY29tbWVudCc7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtLmNsYXNzTmFtZSA9ICdmb3JtJztcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gIGlucHV0LmNsYXNzTmFtZSA9ICduYW1lJztcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSAnWW91ciBuYW1lJztcblxuICBjb25zdCBpbnNpZ2h0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgaW5zaWdodEJveC5jbGFzc05hbWUgPSAnaW5zaWdodCc7XG4gIGluc2lnaHRCb3gucGxhY2Vob2xkZXIgPSAnWW91ciBpbnNpZ2h0cyc7XG5cbiAgY29uc3QgY29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG4gICAgY29uc3QgaW5zaWdodEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc2lnaHQnKTtcbiAgICBjb25zdCB7IHZhbHVlOiBuYW1lIH0gPSBuYW1lRmllbGQ7XG4gICAgY29uc3QgeyB2YWx1ZTogaW5zaWdodCB9ID0gaW5zaWdodEZpZWxkO1xuICAgIGlmIChuYW1lICYmIGluc2lnaHQpIHtcbiAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9JdlA0MnhOY21aN3NUNXJwODd3TC9jb21tZW50cy8nO1xuICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgaXRlbV9pZDogaWRDYXRlZ29yeSxcbiAgICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgICAgIGNvbW1lbnQ6IGluc2lnaHQsXG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmFtZUZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgIGluc2lnaHRGaWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICBhd2FpdCBwb3N0Q29tbWVudChib2R5LCB1cmwpO1xuICAgICAgICB1cGRhdGVDb21tZW50cygpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBuYW1lRmllbGQudmFsdWUgPSBuYW1lO1xuICAgICAgICBpbnNpZ2h0RmllbGQudmFsdWUgPSBpbnNpZ2h0O1xuICAgICAgICBjb25zdCBlcnJvclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVycm9yUC5jbGFzc05hbWUgPSAnZXJybyc7XG4gICAgICAgIGVycm9yUC5pbm5lckhUTUwgPSBlLm1lc3NhZ2U7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGVycm9yUCwgZG9jdW1lbnQuYm9keS5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBjb21tZW50QnV0dG9uLmNsYXNzTmFtZSA9ICdjb21tZW50LWJ1dHRvbic7XG4gIGNvbW1lbnRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudCc7XG5cbiAgZm9ybS5hcHBlbmQoaW5wdXQsIGluc2lnaHRCb3gsIGNvbW1lbnRCdXR0b24pO1xuXG4gIHBvcFVwLmFwcGVuZChcbiAgICBjbG9zZUJ1dHRvbixcbiAgICBpbWFnZSxcbiAgICB0aXRsZUNvbnRhaW5lcixcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lcixcbiAgICBudW1iZXJPZkNvbW1lbnRzQ29udGFpbmVyLFxuICAgIGNvbW1lbnRzQ29udGFpbmVyLFxuICAgIG5ld0NvbW1lbnRIZWFkaW5nLFxuICAgIGZvcm0sXG4gICk7XG5cbiAgb3ZlcmxheS5hcHBlbmRDaGlsZChwb3BVcCk7XG5cbiAgcmV0dXJuIG92ZXJsYXk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdDb21tZW50UG9wVXA7XG4iLCJjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChib2R5LCB1cmwpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RDb21tZW50OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vbWFpbi5jc3MnO1xuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9tb2R1bGVzL2RvbS5qcyc7XG5cbmNvbnN0IGZvb2RzID0gW107XG5cbmdldERhdGEoZm9vZHMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9