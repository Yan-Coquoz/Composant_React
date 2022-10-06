"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../css/style.css");

/**
 * C'est une fonction qui renvoie un élément de bouton avec les accessoires label, type, className,
 * onClick et idName passés en tant qu'arguments
 *
 * @prop   {String}  children    Description du bouton
 * @prop   {String}  type     Type du bouton
 * @prop   {String}  myClass  ClassName du bouton
 * @prop   {String}  idName   Id du bouton
 * @prop   {Function}  onClick  optionnel
 *
 * @return  {React.ReactElement}           a Button
 */
var Button = function Button(_ref) {
  var children = _ref.children,
      type = _ref.type,
      myClass = _ref.myClass,
      onClick = _ref.onClick,
      idName = _ref.idName;

  function sendClickEvent(evt) {
    onClick(evt);
  }

  return /*#__PURE__*/_react.default.createElement("button", {
    type: type,
    className: myClass,
    onClick: sendClickEvent,
    id: idName
  }, children);
};

Button.defaultProps = {
  onClick: function onClick() {},
  myClass: "",
  id: "",
  type: ""
};
var _default = Button;
exports.default = _default;