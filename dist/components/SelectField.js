"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
require("../css/style.css");
/**
 * It's a select component that takes in an array of objects, and returns a select element with options
 *
 * @prop   {ArrayOfObject}  `tabs`     Array of object with a props = name
 * @prop   {String}  `idName`     for Label: htmlFor and value, input's id
 * @prop   {String}  `labelName`      Label value
 * @prop   {Boolean}  `isRequired`  If the value is required
 * @prop   {Function}  `sendValue`   send name value and value selected
 * @prop   {Boolean}  `toUpperCase`  if label need to be to upper case
 * @prop   {Boolean}  `optValue` Render 'Options' for first value in select area, if required, option must be false
 * @prop   {Boolean}  `group` If true, optgroup can be add.
 *
 * @return  {React.ReactElement}
 */

/**
 * C'est une fonction qui rend un champ de sélection avec des options.
 */
var SelectField = function SelectField(_ref) {
  var options = _ref.options,
    idName = _ref.idName,
    labelName = _ref.labelName,
    isRequired = _ref.isRequired,
    optValue = _ref.optValue,
    toUpperCase = _ref.toUpperCase,
    onClick = _ref.onClick,
    group = _ref.group,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    value = _ref.value;
  var _useState = (0, _react.useState)(""),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    tabType = _useState2[0],
    setTabType = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    renderOption = _useState4[0],
    setRenderOption = _useState4[1];
  function renderFirstOptions() {
    if (isRequired) {
      return /*#__PURE__*/_react.default.createElement("option", {
        className: "select_option"
      });
    } else {
      if (optValue) {
        return /*#__PURE__*/_react.default.createElement("option", {
          className: "select_option"
        }, toUpperCase ? (0, _utils.fromLowerToUpperCase)("options") : "options");
      }
    }
  }
  (0, _react.useEffect)(function () {
    var tabsType = (0, _utils.checkArrayOf)(options);
    if (group) {
      setRenderOption((0, _utils.renderOptGroup)(options));
    } else if (tabsType === "number" || tabsType === "string" || tabsType === "object") {
      setTabType(tabsType);
      setRenderOption((0, _utils.renderOptions)(tabType, options));
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
    onClick: onClick,
    "aria-label": "select",
    onChange: onChange,
    onBlur: onBlur,
    value: value
  }, renderFirstOptions(), renderOption));
};
SelectField.defaultProps = {
  isRequired: false,
  onClick: function onClick() {},
  toUpperCase: false,
  optValue: false,
  group: false
};
var _default = SelectField;
exports.default = _default;