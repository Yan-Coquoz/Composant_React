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

var _reactDateRange = require("react-date-range");

var _format = _interopRequireDefault(require("date-fns/format"));

require("react-date-range/dist/styles.css");

require("react-date-range/dist/theme/default.css");

require("../css/style.css");

var DatePicker = function DatePicker(_ref) {
  var idName = _ref.idName,
      label = _ref.label,
      myClass = _ref.myClass,
      isRequired = _ref.isRequired,
      toUpperCase = _ref.toUpperCase;

  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      calendar = _useState2[0],
      setCalendar = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      openCalendar = _useState4[0],
      setOpenCalendar = _useState4[1];

  var refCalendar = (0, _react.useRef)(null);

  function handleCheckSelect(date) {
    // console.log(date);
    // console.log(format(date, "yyyy-MM-dd"));
    setCalendar((0, _format.default)(date, "yyyy-MM-dd")); // format de la date voulue
  }
  /**
   * Si la touche enfoncée est la touche d'échappement, le calendrier se ferme.
   */


  function checkPressKeyOutSide(evt) {
    if (evt.key === "Escape") {
      setOpenCalendar(false);
    }
  }
  /**
   * Ferme le calendrier si on clique en dehors du composant datePicker
   */


  function checkClickOutside(evt) {
    // Si la ref du calendrier n'est pas contenue dans l'event, alors on ferme le calendrier
    if (refCalendar.current && !refCalendar.current.contains(evt.target)) {
      setOpenCalendar(false);
    }
  }

  (0, _react.useEffect)(function () {
    // au chargement de la page le compo aura une date par défaut
    setCalendar((0, _format.default)(new Date(), "yyyy-MM-dd"));
    document.addEventListener("keydown", checkPressKeyOutSide, true);
    document.addEventListener("click", checkClickOutside, true);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "datepicker__container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: idName,
    className: "datepicker__label ".concat(idName)
  }, toUpperCase ? (0, _utils.fromLowerToUpperCase)(label) : label), /*#__PURE__*/_react.default.createElement("input", {
    className: "datepicker__input ".concat(myClass),
    value: calendar,
    readOnly: true,
    name: label.split(" ").join("_"),
    id: idName,
    required: isRequired // overture/fermeture du calendrier
    ,
    onClick: function onClick() {
      return setOpenCalendar(function (openCalendar) {
        return !openCalendar;
      });
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: refCalendar
  }, openCalendar && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "datepicker__btn-today",
    type: "reset",
    onClick: function onClick() {
      return setCalendar((0, _format.default)(new Date(), "yyyy-MM-dd"));
    }
  }, "Today"), /*#__PURE__*/_react.default.createElement(_reactDateRange.Calendar, {
    className: "datepicker__calendar",
    date: new Date(),
    onChange: handleCheckSelect
  }))));
};

DatePicker.defaultProps = {
  myClass: "",
  label: ""
};
var _default = DatePicker;
exports.default = _default;