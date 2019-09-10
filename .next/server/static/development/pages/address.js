module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Coupon.js":
/*!******************************!*\
  !*** ./components/Coupon.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\test\\components\\Coupon.js";



var Coupon = function Coupon() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2064271812" + " " + "h3 has-text-weight-medium is-size-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Get In Touch"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "field ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "jsx-2064271812" + " " + "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "First Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Text area",
    className: "jsx-2064271812" + " " + "input is-medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "column ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "field ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "jsx-2064271812" + " " + "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Text area",
    className: "jsx-2064271812" + " " + "input is-medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "jsx-2064271812" + " " + "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Text area",
    className: "jsx-2064271812" + " " + "input is-medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "jsx-2064271812" + " " + "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Subject"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Text area",
    className: "jsx-2064271812" + " " + "input is-medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "jsx-2064271812" + " " + "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Message"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2064271812" + " " + "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    placeholder: "text area",
    rows: "10",
    className: "jsx-2064271812" + " " + "textarea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    "class": "has-text-centered ",
    className: "jsx-2064271812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-2064271812" + " " + "button is-large is-fullwidth is-info is-outlined is-size-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Send Me")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2064271812",
    __self: this
  }, ".h3.jsx-2064271812{margin-bottom:2rem;margin-top:-2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWNlclxcRGVza3RvcFxcdGVzdFxcY29tcG9uZW50c1xcQ291cG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDSyxBQUc0QixtQkFDTixpQkFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBY2VyXFxEZXNrdG9wXFx0ZXN0XFxjb21wb25lbnRzXFxDb3Vwb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb3Vwb24gPSAoKT0+KFxyXG48ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICA8aDIgY2xhc3NOYW1lPVwiaDMgaGFzLXRleHQtd2VpZ2h0LW1lZGl1bSBpcy1zaXplLTNcIj5HZXQgSW4gVG91Y2g8L2gyPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBcIj5cclxuICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dCBpcy1tZWRpdW1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGV4dCBhcmVhXCIvPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIFwiPlxyXG4gIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQgaXMtbWVkaXVtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRleHQgYXJlYVwiLz5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPkVtYWlsPC9sYWJlbD5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dCBpcy1tZWRpdW1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGV4dCBhcmVhXCIvPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlN1YmplY3Q8L2xhYmVsPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0IGlzLW1lZGl1bVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUZXh0IGFyZWFcIi8+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TWVzc2FnZTwvbGFiZWw+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJ0ZXh0IGFyZWFcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImhhcy10ZXh0LWNlbnRlcmVkIFwiPlxyXG48YSAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGFyZ2UgaXMtZnVsbHdpZHRoIGlzLWluZm8gaXMtb3V0bGluZWQgaXMtc2l6ZS00XCI+U2VuZCBNZTwvYT5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuPHN0eWxlIGpzeD5cclxuICAgIHtgXHJcbiAgICAuaDN7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IC0ycmVtO1xyXG4gICAgfVxyXG4gICAgYH1cclxuPC9zdHlsZT5cclxuPC9kaXY+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IENvdXBvbjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Acer\\Desktop\\test\\components\\Coupon.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Coupon);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\test\\components\\Footer.js";



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-335925811" + " " + "section picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-335925811" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-335925811" + " " + "columns is-desktop ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-335925811" + " " + "column  amet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-335925811" + " " + "was",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-335925811" + " " + "has-text-weight-bold is-uppercase is-size-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Pharma"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-335925811" + " " + "has-text-weight-bold is-uppercase is-size-3 bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Products"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-335925811",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Lorem, ipsum dolor sit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-335925811",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "amet consectetur adipisicing elit."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-335925811",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, " Molestiae exad minus rem "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-335925811",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "odio voluptatem."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-335925811" + " " + "column sit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-335925811" + " " + "with",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-335925811" + " " + "has-text-weight-bold is-uppercase is-size-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Pharma"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-335925811" + " " + "has-text-weight-bold is-uppercase is-size-3 bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Products"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-335925811",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Lorem, ipsum dolor sit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-335925811",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "amet consectetur adipisicing elit."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-335925811",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, " Molestiae exad minus rem "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-335925811",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "odio voluptatem.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "335925811",
    __self: this
  }, ".amet.jsx-335925811{background-image:url(https://colorlib.com/preview/theme/pharma/images/bg_1.jpg);background-size:cover;background-position:center;margin-right:3rem;margin-left:7rem;padding-bottom:5rem;}.amet.jsx-335925811{background-image:url(https://colorlib.com/preview/theme/pharma/images/bg_1.jpg);background-size:cover;background-position:center;margin-right:3rem;margin-left:7rem;padding-bottom:5rem;}.sit.jsx-335925811{background-image:url(https://colorlib.com/preview/theme/pharma/images/bg_2.jpg);background-size:cover;background-position:center;margin-right:5rem;}.sit.jsx-335925811{background-image:url(https://colorlib.com/preview/theme/pharma/images/bg_2.jpg);background-size:cover;background-position:center;margin-right:5rem;}.picture.jsx-335925811{background-color:#53e1e3;margin-top:8rem;}.columns.jsx-335925811{margin-top:2rem;}.bold.jsx-335925811{margin-top:-1rem;}.with.jsx-335925811{margin-left:16rem;margin-top:2rem;}.was.jsx-335925811{margin-left:1rem;margin-top:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWNlclxcRGVza3RvcFxcdGVzdFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCTyxBQUd5RixBQVFBLEFBTXJELEFBSVQsQUFHQSxBQUdDLEFBSUQsZ0JBVGxCLENBR0EsQUFRRCxDQUxtQixPQVZBLFFBZWxCLENBSkEsT0FWQSx1Q0Fmc0IsQUFRRCxzQkFQTSxBQVFBLDJCQVBULEFBUUEsa0JBUEQsQUFRbkIsaUJBUHNCLG9CQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXEFjZXJcXERlc2t0b3BcXHRlc3RcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZvb3RlciA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcGljdHVyZVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLWRlc2t0b3AgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uICBhbWV0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FzXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZCBpcy11cHBlcmNhc2UgaXMtc2l6ZS0zXCI+UGhhcm1hPC9oMj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLXVwcGVyY2FzZSBpcy1zaXplLTMgYm9sZFwiPlByb2R1Y3RzPC9oMj5cclxuICAgICAgPHA+TG9yZW0sIGlwc3VtIGRvbG9yIHNpdDwvcD5cclxuICAgICAgPHA+YW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LjwvcD5cclxuICAgICAgPHA+IE1vbGVzdGlhZSBleGFkIG1pbnVzIHJlbSA8L3A+IFxyXG4gICAgICA8cD5vZGlvIHZvbHVwdGF0ZW0uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHNpdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2l0aFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZCBpcy11cHBlcmNhc2UgaXMtc2l6ZS0zXCI+UGhhcm1hPC9oMj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLXVwcGVyY2FzZSBpcy1zaXplLTMgYm9sZFwiPlByb2R1Y3RzPC9oMj5cclxuICAgICAgPHA+TG9yZW0sIGlwc3VtIGRvbG9yIHNpdDwvcD5cclxuICAgICAgPHA+YW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LjwvcD5cclxuICAgICAgPHA+IE1vbGVzdGlhZSBleGFkIG1pbnVzIHJlbSA8L3A+XHJcbiAgICAgIDxwPm9kaW8gdm9sdXB0YXRlbS48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgIC5hbWV0e1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2NvbG9ybGliLmNvbS9wcmV2aWV3L3RoZW1lL3BoYXJtYS9pbWFnZXMvYmdfMS5qcGcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogN3JlbTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxuICAgICAgfVxyXG4gICAgICAuc2l0e1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2NvbG9ybGliLmNvbS9wcmV2aWV3L3RoZW1lL3BoYXJtYS9pbWFnZXMvYmdfMi5qcGcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gICAgICB9XHJcbiAgICAgICAgLnBpY3R1cmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzZTFlMztcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW5zIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib2xke1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDotMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndpdGh7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDoxNnJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53YXN7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDoxcmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDoycmVtXHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Acer\\Desktop\\test\\components\\Footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Last.js":
/*!****************************!*\
  !*** ./components/Last.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\test\\components\\Last.js";



var Last = function Last() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-868682276" + " " + "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-868682276" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-868682276" + " " + "columns foot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-868682276" + " " + "column is-two-fifths ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-868682276" + " " + "title is-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "About Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Lorem ipsum dolor sit amet,"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, " consectetur adipisicing elit. Eius"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "quae reiciendis distinctio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "voluptates sed dolorum excepturi"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "iure eaque,aut unde.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-868682276" + " " + "column is-two-fifths ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-868682276" + " " + "title is-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Quick Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-868682276" + " " + "is-size-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Supplement")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Vitamins")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Diet & Nutrition")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Tea & Coffee")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-868682276" + " " + "column ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-868682276" + " " + "title is-5 has-text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Contuct Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-868682276" + " " + "fas fa-address-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-868682276" + " " + "span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "203 Fake St. Mountain View, San Francisco, California, USA"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-868682276" + " " + "fas fa-phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-868682276" + " " + "span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "235469699"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-868682276" + " " + "fas fa-envelope-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-868682276" + " " + "span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "emailaddress.com"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-868682276" + " " + "content has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-868682276" + " " + "has-text-grey-light  ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Copyright \xA9 2019 All rights reserved | This template is made with", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-868682276" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-868682276" + " " + "fas fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), "by", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-868682276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, " Colorlib")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "868682276",
    __self: this
  }, ".foot.jsx-868682276{margin-top:3rem;}.content.jsx-868682276{margin-top:6rem;}.span.jsx-868682276{margin-left:0.75rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWNlclxcRGVza3RvcFxcdGVzdFxcY29tcG9uZW50c1xcTGFzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRVMsQUFHeUIsQUFHSSxBQUdELGdCQUxyQixBQUdBLElBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxBY2VyXFxEZXNrdG9wXFx0ZXN0XFxjb21wb25lbnRzXFxMYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGFzdCA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgZm9vdFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLXR3by1maWZ0aHMgXCI+XHJcbiAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTVcIj5BYm91dCBVczwvaDI+XHJcbiAgICAgICAgICAgIDxoNCA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsPC9oND5cclxuICAgICAgICAgICA8aDQ+IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVpdXM8L2g0PlxyXG4gICAgICAgICAgICA8aDQ+cXVhZSByZWljaWVuZGlzIGRpc3RpbmN0aW88L2g0PiAgXHJcbiAgICAgICAgICAgIDxoND52b2x1cHRhdGVzIHNlZCBkb2xvcnVtIGV4Y2VwdHVyaTwvaDQ+IFxyXG4gICAgICAgICAgICA8aDQ+aXVyZSBlYXF1ZSxhdXQgdW5kZS48L2g0PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLXR3by1maWZ0aHMgXCI+XHJcbiAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTVcIj5RdWljayBVczwvaDI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpcy1zaXplLTVcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlN1cHBsZW1lbnQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlZpdGFtaW5zPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5EaWV0ICYgTnV0cml0aW9uPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5UZWEgJiBDb2ZmZWU8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBcIj5cclxuICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy01IGhhcy10ZXh0LWxlZnRcIj5Db250dWN0IFVzPC9oMj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8IGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFkZHJlc3MtY2FyZFwiPjwvIGk+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhblwiPjIwMyBGYWtlIFN0LiBNb3VudGFpbiBWaWV3LCBTYW4gRnJhbmNpc2NvLCBDYWxpZm9ybmlhLCBVU0E8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGhvbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5cIj4yMzU0Njk2OTk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGUtc3F1YXJlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuXCI+ZW1haWxhZGRyZXNzLmNvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG5cclxuICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJoYXMtdGV4dC1ncmV5LWxpZ2h0ICBcIj5cclxuICAgICAgICAgIENvcHlyaWdodCDCqSAyMDE5IEFsbCByaWdodHMgcmVzZXJ2ZWQgfCBUaGlzIHRlbXBsYXRlIGlzIG1hZGUgd2l0aFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICBieVxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj4gQ29sb3JsaWI8L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgIC5mb290e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOjZyZW07XHJcbiAgICAgIH1cclxuICAgICAgLnNwYW57XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MC43NXJlbTtcclxuICAgICAgfSAgXHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IExhc3Q7XHJcbiAgIl19 */\n/*@ sourceURL=C:\\Users\\Acer\\Desktop\\test\\components\\Last.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Last);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _Last__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Last */ "./components/Last.js");
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\test\\components\\Layout.js";






var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    defer: true,
    src: "https://use.fontawesome.com/releases/v5.3.1/js/all.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Last__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\test\\components\\Navbar.js";


var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar",
    role: "navigation",
    "aria-label": "main navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-item",
    href: "https://bulma.io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://colorlib.com/preview/theme/medcare/img/logo.png",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    role: "button",
    "class": "navbar-burger",
    "aria-label": "menu",
    "aria-expanded": "false",
    "data-target": "navbarBasicExample",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "navbarBasicExample",
    className: "navbar-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "HOME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "about",
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "STORE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-item has-dropdown is-hoverable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "DROPDOWN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "supplements"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Vitamins"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Deit & Nutrition"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Tea & coffee"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/company",
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "ABOUT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/address",
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "CONTACT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-shopping-bag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    JSX: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\n        .navbar-menu{\n            margin-left:13rem;\n        }\n        .navbar-menu a{\n          padding-left:1.5rem;\n          font-size: 15px;\n          font-weight: 500;\n        }\n        .navbar{\n          margin-top: -2rem;\n        }       \n        ")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/address.js":
/*!**************************!*\
  !*** ./pages/address.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Address; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Coupon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Coupon.js */ "./components/Coupon.js");
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\test\\pages\\address.js";



function Address() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Coupon_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/***/ }),

/***/ 7:
/*!********************************!*\
  !*** multi ./pages/address.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Acer\Desktop\test\pages\address.js */"./pages/address.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=address.js.map