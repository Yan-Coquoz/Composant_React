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
// @ts-nocheck

/**
 * It's a select component that takes in an array of objects, and returns a select element with options
 *
 * @prop   {ArrayOfObject}  `tabs`     Array of object with a props = name
 * @prop  {String}  `idName`     for Label: htmlFor and value, input's id
 * @prop   {String}  `name`      Label value and input name
 * @prop   {Boolean}  `isRequired`  If the value is required
 * @prop   {Function}  `sendValue`   send name value and value selected
 * @prop   {Boolean}  `toUpperCase`  if label need to be to upper case
 *
 * @return  {React.ReactElement}
 */

var Select = function Select(_ref) {
  var idName = _ref.idName,
    isRequired = _ref.isRequired,
    name = _ref.name,
    sendValue = _ref.sendValue,
    tabs = _ref.tabs,
    toUpperCase = _ref.toUpperCase;
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
   * @returns
   */
  var handleSendValue = function handleSendValue(evt) {
    var value = evt.target.value;
    var selectName = evt.target.name;
    if (value.toLowerCase() !== "options") {
      sendValue(selectName, value);
    }
    return "";
  };

  /**
   * Si le tabType n'est pas un objet, mappez sur le tableau tabs et renvoyez un élément d'option avec la
   * valeur de l'élément et la clé de l'index. Si le tabType est un objet, mappez sur le tableau tabs et
   * renvoyez un élément d'option avec la valeur du nom de l'élément et la clé du nom de l'élément.
   */
  function formatOption() {
    if (tabType !== "object") {
      return tabs.map(function (ele, key) {
        return /*#__PURE__*/_react.default.createElement("option", {
          value: ele,
          key: key
        }, (0, _utils.fromLowerToUpperCase)(ele));
      });
    } else {
      return tabs.map(function (ele) {
        return /*#__PURE__*/_react.default.createElement("option", {
          value: ele === null || ele === void 0 ? void 0 : ele.name,
          key: ele === null || ele === void 0 ? void 0 : ele.name
        }, (0, _utils.fromLowerToUpperCase)(ele === null || ele === void 0 ? void 0 : ele.name));
      });
    }
  }
  _react.default.useEffect(function () {
    var tabsType = (0, _utils.checkArrayOf)(tabs);
    setTabType(tabsType);
    setRenderOption(formatOption());
  }, [tabType]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "select_container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: idName,
    className: "input_container__label",
    "data-testid": "select_label"
  }, toUpperCase ? (0, _utils.fromLowerToUpperCase)(name) : name), /*#__PURE__*/_react.default.createElement("select", {
    className: "select_container__select",
    name: name,
    id: idName,
    required: isRequired,
    onChange: handleSendValue,
    "aria-label": "select"
  }, /*#__PURE__*/_react.default.createElement("option", {
    style: {
      textAlign: "center"
    }
  }, (0, _utils.fromLowerToUpperCase)("options")), renderOption));
};
Select.defaultProps = {
  idName: "",
  isRequired: false,
  name: "",
  sendValue: function sendValue() {},
  toUpperCase: false
};
var _default = Select;
exports.default = _default;