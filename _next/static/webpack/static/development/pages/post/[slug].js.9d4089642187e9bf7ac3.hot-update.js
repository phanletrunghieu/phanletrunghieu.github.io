webpackHotUpdate("static/development/pages/post/[slug].js",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogTemplate; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-facebook */ "./node_modules/react-facebook/lib/index.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_CodeBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/CodeBlock */ "./components/CodeBlock.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");
/* harmony import */ var _styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/Post.module.scss */ "./styles/Post.module.scss");
/* harmony import */ var _styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "/Users/hieudeptrai/MyProjects/myblog/pages/post/[slug].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var BlogTemplate = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(BlogTemplate, _PureComponent);

  var _super = _createSuper(BlogTemplate);

  function BlogTemplate() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BlogTemplate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      screenWidth: 0
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "updateScreenWidth", function () {
      _this.setState({
        screenWidth: window.document.body.clientWidth
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BlogTemplate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateScreenWidth();
      window.addEventListener("resize", this.updateScreenWidth);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateScreenWidth);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          siteTitle = _this$props.siteTitle,
          markdownBody = _this$props.markdownBody,
          frontmatter = _this$props.frontmatter,
          categories = _this$props.categories;
      if (!frontmatter) return null;
      var imageStyle = {
        backgroundImage: "url(".concat(frontmatter.image, ")"),
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: this.state.screenWidth / 1265 * 500
      };
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }
      }, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "".concat(frontmatter.title, " - ").concat(siteTitle),
        description: Object(_utils_common__WEBPACK_IMPORTED_MODULE_14__["truncateSummary"])(markdownBody),
        image: frontmatter.image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        categories: categories,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }), __jsx("div", {
        style: {
          marginTop: 120,
          marginBottom: 50
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: _styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.headerContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }
      }, frontmatter.title), __jsx("div", {
        className: _styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.subHeader,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }
      }, __jsx("p", {
        className: _styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.date,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 29
        }
      }, Object(_utils_common__WEBPACK_IMPORTED_MODULE_14__["reformatDate"])(frontmatter.date)), __jsx("span", {
        className: _styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.readDuration,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 29
        }
      }, frontmatter.readDuration))), __jsx("div", {
        style: imageStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: _styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_13___default.a, {
        source: markdownBody,
        renderers: {
          code: _components_CodeBlock__WEBPACK_IMPORTED_MODULE_12__["default"]
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: _styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.comments,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }
      }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_8__["Comments"], {
        href: this.props.host + "/post/" + this.props.slug,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 25
        }
      }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }
      }));
    }
  }]);

  return BlogTemplate;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

var __N_SSG = true;

BlogTemplate.defaultProps = {
  categories: []
};

/***/ })

})
//# sourceMappingURL=[slug].js.9d4089642187e9bf7ac3.hot-update.js.map