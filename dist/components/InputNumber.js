"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("../utils");
require("../css/style.css");
/**
 *
 * @prop   {String}  idName      Valeur liant l'input et le label
 * @prop   {String}  labelName       Description du label et du placeholder
 * @prop   {Function}  sendValue   Permet de transmettre les valeurs de l'input (input name et value)
 * @prop   {boolean}  isRequired  Si le champs est requis
 * @prop   {String}  myClass     Valeur pour les styles
 * @prop  {Number}  mini minimum value
 * @prop  {Number}  maxi maximum value
 *
 * @return  {React.ReactElement}   Un composant React de type input number
 */

var InputNumber = function InputNumber(_ref) {
  var idName = _ref.idName,
    labelName = _ref.labelName,
    toUpperCase = _ref.toUpperCase,
    isRequired = _ref.isRequired,
    myClass = _ref.myClass,
    mini = _ref.mini,
    maxi = _ref.maxi,
    sendValue = _ref.sendValue;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input_container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: idName,
    className: "input_container__label ".concat(idName),
    "data-testid": "input_label"
  }, toUpperCase ? (0, _utils.fromLowerToUpperCase)(labelName) : labelName), /*#__PURE__*/_react.default.createElement("input", {
    className: "input_container__input ".concat(myClass),
    id: idName,
    "aria-label": "input_number",
    name: idName,
    placeholder: (0, _utils.fromLowerToUpperCase)(labelName),
    required: isRequired,
    type: "number",
    min: mini,
    max: maxi,
    onChange: function onChange(evt) {
      return sendValue(evt.target.name, evt.target.value);
    }
  }));
};
InputNumber.defaultProps = {
  isRequired: false,
  labelName: "",
  placeholder: "",
  idName: "",
  toUpperCase: false,
  sendValue: function sendValue() {}
};
var _default = InputNumber;
exports.default = _default;