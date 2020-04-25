webpackHotUpdate("static/development/pages/category/[...slug].js",{

/***/ "./pages/category/[...slug].js":
/*!*************************************!*\
  !*** ./pages/category/[...slug].js ***!
  \*************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoryTemplate; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_PostBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PostBox */ "./components/PostBox.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Paginator */ "./components/Paginator.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");





var _jsxFileName = "/home/hieudeptrai/Desktop/MyProject/myblog/pages/category/[...slug].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var CategoryTemplate = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CategoryTemplate, _PureComponent);

  var _super = _createSuper(CategoryTemplate);

  function CategoryTemplate() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CategoryTemplate);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CategoryTemplate, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          allBlogs = _this$props.allBlogs,
          title = _this$props.title,
          description = _this$props.description,
          categories = _this$props.categories,
          slug = _this$props.slug,
          currentPage = _this$props.currentPage,
          totalPage = _this$props.totalPage;
      var currentCategory = categories.find(function (c) {
        return Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["getSlug"])(c) == slug;
      });
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }
      }, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "".concat(currentCategory, " - ").concat(title),
        description: description,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }
      }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        categories: categories,
        currentSlug: slug,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }
      }), __jsx("div", {
        style: {
          marginTop: 80
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }
      }, allBlogs.map(function (post) {
        return __jsx(_components_PostBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: post.slug,
          image: post.frontmatter.image,
          title: post.frontmatter.title,
          date: post.frontmatter.date,
          readDuration: post.frontmatter.readDuration,
          markdownBody: post.markdownBody,
          slug: post.slug,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 29
          }
        });
      })), __jsx(_components_Paginator__WEBPACK_IMPORTED_MODULE_10__["default"], {
        count: totalPage,
        current: currentPage,
        href: "/category/[...slug]",
        baseUrl: "/category/" + Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["getSlug"])(currentCategory),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }
      }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }
      }));
    }
  }]);

  return CategoryTemplate;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

var __N_SSG = true;

CategoryTemplate.defaultProps = {
  allBlogs: [],
  categories: []
};

/***/ })

})
//# sourceMappingURL=[...slug].js.c6d64887d45a638d0875.hot-update.js.map