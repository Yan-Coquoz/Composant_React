"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _close = _interopRequireDefault(require("../assets/icons/close.svg"));

require("./style.css");

/**
 * C'est une modale qui s'ouvre lorsque l'état du composant parent change.
 *
 * @prop   {String}  message   contenu de la modale
 * @prop   {Boolean}  open      si la modale est ouvert ou non
 * @prop   {[type]}  getClose  permet de changer l'état de la modale à false
 *
 * @return  {React.ReactElement}
 */
var Modale = function Modale(_ref) {
  var message = _ref.message,
      open = _ref.open,
      getClose = _ref.getClose;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var activeClass = document.querySelector(".modal_container");

  function handleCloseBtn() {
    activeClass.style.display = "none";
    setIsOpen(false);
    getClose();
  }

  (0, _react.useEffect)(function () {
    setIsOpen(true);

    if (isOpen && open) {
      activeClass.style.display = "block";
    }
  }, [open]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal_box"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleCloseBtn,
    className: "modal__close-button"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _close.default,
    alt: "close button",
    className: "modal__close-button__img"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__box-paragraph"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "modal__box-paragraph__paragraph"
  }, message))));
};

Modale.defaultProps = {
  getClose: function getClose() {},
  open: false,
  message: ""
};
var _default = Modale;
exports.default = _default;