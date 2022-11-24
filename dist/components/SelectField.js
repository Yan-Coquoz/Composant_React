"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _utils = require("../utils");
require("../css/style.css");
var _index = require("../utils/index");
// @ts-nocheck

/**
 * It's a select component that takes in an array of objects, and returns a select element with options
 *
 * @prop   {ArrayOfObject}  `tabs`     Array of object with a props = name
 * @prop   {String}  `idName`     for Label: htmlFor and value, input's id
 * @prop   {String}  `labelName`      Label value
 * @prop   {Boolean}  `isRequired`  If the value is required
 * @prop   {Function}  `sendValue`   send name value and value selected
 * @prop   {Boolean}  `toUpperCase`  if label need to be to upper case
 * @prop   {Boolean}  `optValue` Render 'Options' for first value in select area
 * @return  {React.ReactElement}
 */
var SelectField = function SelectField(_ref) {
  var tabs = _ref.tabs,
    idName = _ref.idName,
    labelName = _ref.labelName,
    isRequired = _ref.isRequired,
    optValue = _ref.optValue,
    toUpperCase = _ref.toUpperCase,
    sendValue = _ref.sendValue,
    group = _ref.group;
  var _React$useState = _react.default.useState(""),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    tabType = _React$useState2[0],
    setTabType = _React$useState2[1];
  var _React$useState3 = _react.default.useState(""),
    _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
    renderOption = _React$useState4[0],
    setRenderOption = _React$useState4[1];

  /**
   * Si la valeur de la sélection n'est pas égale à 'options', alors envoyez la valeur de la sélection
   * à la fonction sendValue.
   */
  var handleSendValue = function handleSendValue(evt) {
    var value = evt.target.value;
    var selectName = evt.target.name;
    if (isRequired && value.toLowerCase() !== "option") {
      sendValue(selectName, value);
    }
  };
  _react.default.useEffect(function () {
    if (group) {
      setRenderOption((0, _index.formatArrays)(tabs));
    } else {
      var tabsType = (0, _utils.checkArrayOf)(tabs);
      setTabType(tabsType);
      setRenderOption((0, _utils.formatOption)(tabsType, tabs));
    }
  }, [tabType]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "select_container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: idName,
    className: "input_container__label ".concat(idName),
    "data-testid": "select_label"
  }, toUpperCase ? (0, _utils.fromLowerToUpperCase)(labelName) : labelName), /*#__PURE__*/_react.default.createElement("select", {
    className: "select_container__select",
    name: idName,
    id: idName,
    required: isRequired,
    onClick: handleSendValue,
    "aria-label": "select"
  }, optValue && /*#__PURE__*/_react.default.createElement("option", {
    style: {
      textAlign: "center"
    }
  }, (0, _utils.fromLowerToUpperCase)("options")), renderOption));
};
SelectField.defaultProps = {
  isRequired: false,
  sendValue: function sendValue() {},
  toUpperCase: false,
  optValue: false,
  group: false
};
var _default = SelectField;
exports.default = _default;