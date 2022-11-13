"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _close = _interopRequireDefault(require("../assets/icons/close.svg"));
require("../css/style.css");
// @ts-nocheck

/**
 * C'est une modale qui s'ouvre lorsque l'état du composant parent change.
 *
 * @prop   {String}  message   contenu de la modale
 * @prop   {boolean}  open      si la modale est ouvert ou non
 * @prop   {Function}  onClose      Action de fermeture de la modale
 * @prop   {String}  sendStyle      Défini la couleur de la bordure du bouton et du texte
 *
 * @return  {React.ReactElement}
 */
var Modale = function Modale(_ref) {
  var message = _ref.message,
    onClose = _ref.onClose,
    open = _ref.open,
    sendStyle = _ref.sendStyle;
  function handleCloseBtn() {
    document.querySelector(".modal_container").style.display = "none";
    onClose(false);
  }
  _react.default.useEffect(function () {
    if (open) {
      document.querySelector(".modal_container").style.display = "block";
    }
  }, [open]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal_box"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleCloseBtn,
    className: "modal__close-button",
    style: {
      border: "2px solid ".concat(sendStyle)
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _close.default,
    alt: "close button",
    className: "modal__close-button__img"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__box-paragraph"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "modal__box-paragraph__paragraph",
    "data-testid": "modal_para",
    style: {
      border: "2px solid ".concat(sendStyle)
    }
  }, message))));
};
Modale.defaultProps = {
  message: "Message",
  onClose: function onClose() {},
  open: false,
  sendStyle: "none"
};
var _default = Modale;
exports.default = _default;