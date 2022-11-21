"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../utils/index");
require("../css/style.css");
/**
 *
 * @prop   {String}  idName      Valeur liant l'input et le label
 * @prop   {String}  labelName       Description du label et du placeholder
 * @prop   {Boolean}  toUpperCase   change la première lettre des labels en lettre capitale
 * @prop   {boolean}  isRequired  Si le champs est requis
 * @prop   {String}  myClass     Valeur pour les styles
 * @prop  {Function} sendValue envoi les props de l'input (name et value) à chaque actions sur le clavier
 *
 * @return  {React.ReactElement}   Un composant React de type input text
 */
var InputText = function InputText(_ref) {
  var idName = _ref.idName,
    labelName = _ref.labelName,
    toUpperCase = _ref.toUpperCase,
    isRequired = _ref.isRequired,
    myClass = _ref.myClass,
    sendValue = _ref.sendValue;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input_container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: idName,
    className: "input_container__label ".concat(idName),
    "data-testid": "input_label"
  }, toUpperCase ? (0, _index.fromLowerToUpperCase)(labelName) : labelName), /*#__PURE__*/_react.default.createElement("input", {
    className: "input_container__input ".concat(myClass),
    "aria-label": "input_text",
    id: idName,
    name: idName,
    placeholder: (0, _index.fromLowerToUpperCase)(labelName),
    required: isRequired,
    type: "text",
    onChange: function onChange(evt) {
      return sendValue(evt.target.name, evt.target.value);
    }
  }));
};
InputText.defaultProps = {
  toUpperCase: false,
  isRequired: false,
  labelName: "",
  placeholder: "",
  idName: "",
  sendValue: function sendValue() {}
};
var _default = InputText;
exports.default = _default;