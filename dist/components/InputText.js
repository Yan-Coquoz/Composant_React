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
 * @prop   {String}  label       Description du label et du placeholder
 * @prop   {Boolean}  toUpperCase   change la première lettre des labels en lettre capitale
 * @prop   {boolean}  isRequired  Si le champs est requis
 * @prop   {String}  myClass     Valeur pour les styles
 *
 * @return  {React.ReactElement}   Un composant React de type input text
 */
var InputText = function InputText(_ref) {
  var idName = _ref.idName,
      label = _ref.label,
      toUpperCase = _ref.toUpperCase,
      isRequired = _ref.isRequired,
      myClass = _ref.myClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input_container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: idName,
    className: "input_container__label ".concat(idName)
  }, toUpperCase ? (0, _utils.fromLowerToUpperCase)(label) : label), /*#__PURE__*/_react.default.createElement("input", {
    className: "input_container__input ".concat(myClass),
    id: idName,
    name: idName,
    placeholder: (0, _utils.fromLowerToUpperCase)(label),
    required: isRequired,
    type: "text"
  }));
};

InputText.defaultProps = {
  toUpperCase: false,
  isRequired: false,
  label: "",
  placeholder: "",
  idName: "idName"
};
var _default = InputText;
exports.default = _default;