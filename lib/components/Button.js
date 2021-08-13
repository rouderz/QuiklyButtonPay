"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHelmet = require("react-helmet");

var _validator = _interopRequireDefault(require("validator"));

var _sweetalert = _interopRequireDefault(require("sweetalert2"));

require("./css/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Button = function Button(_ref) {
  var parameters = _ref.parameters;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isModalVisible = _useState2[0],
      setModalVisible = _useState2[1];

  if (!_validator["default"].isEmail(parameters.email)) {}

  var customFunction = "\n      parameters = {\n         isProduction: ".concat(parameters.isProduction ? parameters.isProduction : false, ",\n         amount: ").concat(parameters.amount, ",\n         fullName: \"").concat(parameters.fullName, "\",\n         email: \"").concat(parameters.email, "\",\n         receiveEmail: \"").concat(parameters.receiveEmail, "\",\n         receiveName: \"").concat(parameters.receiveName, "\",\n         successRedirect: \"").concat(parameters.successRedirect, "\",\n         errorRedirect: \"").concat(parameters.errorRedirect, "\",\n      },\n      setTimeout(function () {\n         iframe.contentWindow.postMessage(parameters, '*');\n      }, 5000);\n  ");

  var Alerts = function Alerts(title, text) {
    _sweetalert["default"].fire({
      icon: 'error',
      title: title,
      text: text
    });
  };

  var validations = function validations(params) {
    if (Object.keys(params.parameters).length === 0) {
      Alerts('Parametros Vacios', 'No pueden estar vacios los parametros');
      return setModalVisible(false);
    }

    if (!_validator["default"].isURL(params.parameters.successRedirect)) {
      Alerts('Datos Erróneos', 'La Url ingresada no es válida');
      return setModalVisible(false);
    }

    if (!_validator["default"].isURL(params.parameters.errorRedirect)) {
      Alerts('Datos Erróneos', 'La Url ingresada no es válida');
      return setModalVisible(false);
    }

    if (!_validator["default"].isEmail(params.parameters.email)) {
      Alerts('Datos Erróneos', 'El email no es valido');
      return setModalVisible(false);
    }

    if (!_validator["default"].isEmail(params.parameters.receiveEmail)) {
      Alerts('Datos Erróneos', 'El email no es valido');
      return setModalVisible(false);
    }

    return setModalVisible(true);
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    className: "QuiklyButton",
    disabled: parameters.disabled ? parameters.disabled : false,
    onClick: function onClick() {
      return validations({
        parameters: parameters
      });
    }
  }), isModalVisible ? /*#__PURE__*/_react["default"].createElement("div", {
    hidden: !isModalVisible
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-background",
    onClick: function onClick() {
      return setModalVisible(false);
    }
  }, /*#__PURE__*/_react["default"].createElement("iframe", {
    className: "modal-card",
    src: "https://paybox.quikly.app/cdn/reactjs/paybox.html",
    width: "100%",
    height: "100%",
    scrolling: "no",
    id: "iframe"
  }), /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react["default"].createElement("script", {
    src: "https://code.jquery.com/jquery-2.2.4.js"
  }), /*#__PURE__*/_react["default"].createElement("script", {
    type: "text/javascript"
  }, customFunction)))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
};

var _default = Button;
exports["default"] = _default;