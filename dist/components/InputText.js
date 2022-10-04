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
 * Composant contrôlé de type input text
 *
 * @prop   {String}  idName      Valeur liant l'input et le label
 * @prop   {String}  label       Description du label et du placeholder
 * @prop   {Function}  sendValue   Permet de transmettre les valeurs de l'input
 * @prop   {boolean}  isRequired  Si le champs est requis
 * @prop   {String}  myClass     Valeur pour les styles
 *
 * @return  {React.ReactElement}   Un composant React de type input
 */
var InputText = function InputText(_ref) {
  var idName = _ref.idName,
      label = _ref.label,
      sendValue = _ref.sendValue,
      isRequired = _ref.isRequired,
      myClass = _ref.myClass;

  var handleSendValue = function handleSendValue(evt) {
    var maValeur = evt.target.value;
    var monNom = evt.target.name;

    if (maValeur.length !== 0) {
      // j'envoi ma valeur et son name dans une fonction pour le formulaire
      sendValue(monNom, maValeur);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input_container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: idName,
    className: "input_container__label ".concat(idName)
  }, (0, _utils.fromLowerToUpperCase)(label)), /*#__PURE__*/_react.default.createElement("input", {
    className: "input_container__input ".concat(myClass),
    id: idName,
    name: idName,
    onChange: handleSendValue,
    placeholder: (0, _utils.fromLowerToUpperCase)(label),
    required: isRequired,
    type: "text"
  }));
};

InputText.defaultProps = {
  handleSendValue: function handleSendValue() {},
  isRequired: false,
  label: "",
  name: "",
  placeholder: ""
};
var _default = InputText;
exports.default = _default;