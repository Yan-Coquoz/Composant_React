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
/**
 * La fonction rend un composant de sélecteur de date qui permet à l'utilisateur de sélectionner une
 * date.
 */
var DatePicker = function DatePicker(_ref) {
  var idName = _ref.idName,
    labelName = _ref.labelName,
    myClass = _ref.myClass,
    isRequired = _ref.isRequired,
    toUpperCase = _ref.toUpperCase,
    lang = _ref.lang,
    placeholder = _ref.placeholder;
  var _useState = (0, _react.useState)(""),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    calendar = _useState2[0],
    setCalendar = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    openCalendar = _useState4[0],
    setOpenCalendar = _useState4[1];
  var refCalendar = (0, _react.useRef)(null);
  // TODO problème de persistance des données lors du reset
  /**
   * Lorsque l'utilisateur clique sur une date, le calendrier sera défini sur cette date.
   */
  function handleCheckSelect(date) {
    checkLangage(lang.toLowerCase(), date);
  }

  /**
   * Si la langue est l'anglais, réglez le calendrier sur la date au format aaaa-MM-jj. Si la langue
   * est le français, réglez le calendrier sur la date au format jj-MM-aaaa
   */
  function checkLangage(lang) {
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
    if (lang === "en") {
      setCalendar((0, _format.default)(date, "yyyy-MM-dd"));
    }
    if (lang === "fr") {
      setCalendar((0, _format.default)(date, "dd-MM-yyyy"));
    }
  }

  /**
   * "Si la langue est l'anglais, retournez le mot "Today", sinon retournez le mot "Aujourd'hui"."
   *
   * @param   {String}  lang  par défaut "en" sinon "fr"
   *
   * @return  {React.ReactElement}
   */
  function renderTodayBtn(lang) {
    var trad = lang === "en" ? "Today" : "Aujourd'hui";
    return /*#__PURE__*/_react.default.createElement("button", {
      className: "datepicker__btn-today",
      type: "reset",
      onClick: function onClick() {
        return checkLangage(lang.toLowerCase());
      }
    }, trad);
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
  // function handleChange(evt) {
  //   console.log(evt);
  // }
  (0, _react.useEffect)(function () {
    // au chargement de la page le compo aura une date par défaut
    setCalendar("");
    checkLangage();
    document.addEventListener("keydown", checkPressKeyOutSide, true);
    document.addEventListener("click", checkClickOutside, true);
  }, [calendar]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "datepicker__container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: idName,
    className: "datepicker__label ".concat(idName),
    "data-testid": "datepicker_label"
  }, toUpperCase ? (0, _utils.fromLowerToUpperCase)(labelName) : labelName), /*#__PURE__*/_react.default.createElement("input", {
    className: "datepicker__input ".concat(myClass),
    id: idName,
    name: idName,
    "aria-label": "datepicker",
    value: calendar,
    readOnly: true
    // onChange={handleChange}
    ,
    required: isRequired,
    placeholder: placeholder
    // ouverture/fermeture du calendrier
    ,
    onClick: function onClick() {
      return setOpenCalendar(function (openCalendar) {
        return !openCalendar;
      });
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: refCalendar
  }, openCalendar && /*#__PURE__*/_react.default.createElement("div", null, renderTodayBtn(lang), /*#__PURE__*/_react.default.createElement(_reactDateRange.Calendar, {
    className: "datepicker__calendar",
    date: new Date(),
    onChange: handleCheckSelect
  }))));
};
DatePicker.defaultProps = {
  myClass: "",
  labelName: "",
  lang: "en",
  isSend: false
};
var _default = DatePicker;
exports.default = _default;