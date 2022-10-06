"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

/**
 * It's a select component that takes in an array of objects, and returns a select element with options
 *
 * @prop   {ArrayOfObject}  tabs        [tabs description]
 * @prop  {String}  idName     [idName description]
 * @prop   {String}  name        [name description]
 * @prop   {Boolean}  isRequired  [isRequired description]
 * @prop   {Function}  sendValue   [sendValue description]
 *
 * @return  {React.ReactElement}              [return description]
 */
var Select = function Select(_ref) {
  var tabs = _ref.tabs,
      idName = _ref.idName,
      name = _ref.name,
      isRequired = _ref.isRequired,
      sendValue = _ref.sendValue;

  var handleSendValue = function handleSendValue(evt) {
    var value = evt.target.value;
    var selectName = evt.target.name;

    if (value.toLowerCase() !== "options") {
      sendValue(selectName, value);
    }

    return "";
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "select_container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: idName,
    className: "input_container__label"
  }, (0, _utils.fromLowerToUpperCase)(idName)), /*#__PURE__*/_react.default.createElement("select", {
    className: "select_container__select",
    name: name,
    id: idName,
    required: isRequired,
    onChange: handleSendValue
  }, /*#__PURE__*/_react.default.createElement("option", {
    style: {
      textAlign: "center"
    }
  }, (0, _utils.fromLowerToUpperCase)("options")), tabs.length > 0 && tabs.map(function (ele, key) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: ele.name.toLowerCase(),
      key: key
    }, (0, _utils.fromLowerToUpperCase)(ele.name));
  })));
};

Select.defaultProps = {
  isRequired: false,
  idName: "idName",
  name: "name"
};
var _default = Select;
exports.default = _default;