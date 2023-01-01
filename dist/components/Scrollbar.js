"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
require("../css/style.css");
/**
 * It's a scroll bar that changes color and opacity depending on the scroll position.
 * C'est une barre de défilement qui change de couleur et d'opacité en fonction de la position de défilement.
 *
 *
 * @param   {Number}  barHeight  Hauteur de la bar de progression, en pixel. / Height of the progress bar, in pixels.
 * @param   {String}  barColor    Couleur de la bar de progression / Progress bar color
 * @param   {Boolean}  barOpacity  Donne un effet de d'opacité progressif le long de la bar. / Gives a gradual opacity effect along the bar.
 *
 * @return  {React.ReactElement}
 */
var Scrollbar = function Scrollbar(_ref) {
  var barHeight = _ref.barHeight,
    barColor = _ref.barColor,
    barOpacity = _ref.barOpacity;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    scrollTop = _useState2[0],
    setScrollTop = _useState2[1];
  function barProgress() {
    var progressBar = document.querySelector("div.scrollbar");
    var totalHeight = window.scrollY;
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scroll = "".concat(totalHeight / windowHeight, " ");
    setScrollTop(scroll * 100);

    // Style
    progressBar.style.transform = "scale(".concat(scroll, ",1)");
    if (barOpacity) {
      progressBar.style.opacity = "".concat(scroll);
    }
    progressBar.style.width = "".concat(scrollTop, "%");
    progressBar.style.backgroundColor = "".concat(barColor);
    progressBar.style.height = "".concat(barHeight, "px");
  }
  (0, _react.useEffect)(function () {
    window.addEventListener("scroll", barProgress, {
      passive: true
    });
    return function () {
      return removeEventListener("scroll", barProgress);
    };
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "scrollbar__conteneur"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "scrollbar"
  }));
};
Scrollbar.defaultProps = {
  barHeight: 5,
  barColor: "yellow",
  barOpacity: false
};
var _default = Scrollbar;
exports.default = _default;