"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkArrayOf = checkArrayOf;
exports.renderOptGroup = renderOptGroup;
exports.renderOptions = renderOptions;
var _react = _interopRequireDefault(require("react"));
var _index = require("./index");
/**
 * Il vérifie si le premier élément d'un tableau est un tableau, un nombre, une chaîne, un objet avec
 * une propriété name ou null.
 * @param arr - le tableau à vérifier
 * @returns le type du premier élément du tableau.
 */
function checkArrayOf(arr) {
  // le type du tableau
  console.log(arr);
  var typeOfArr = Array.isArray(arr[0]) ? "array" : arr[0] === null // envoi null en cas d'objet
  ? null : typeof arr[0];
  if (typeOfArr === "number" || typeOfArr === "string") {
    return typeOfArr;
  }
  if (typeOfArr === "object" && Object.keys(arr[0]).includes("name")) {
    return typeOfArr;
  }
  if (typeOfArr === "object" && Object.keys(arr[0])[0] !== "name") {
    return "optgroup";
  }
}

/**
 * Il prend un tableau d'objets et renvoie un tableau d'éléments React.
 * @param   {ArrayOfObject}  tabs
 *
 * @returns {React.ReactElement} Un tableau d'éléments React.
 *
 */
function renderOptGroup(tabs) {
  return tabs.map(function (ele, key) {
    var optGName = Object.keys(ele)[0];
    var optTabs = Object.values(ele)[0];
    return /*#__PURE__*/_react.default.createElement("optgroup", {
      key: key,
      label: (0, _index.fromLowerToUpperCase)(optGName),
      className: "option_group"
    }, optTabs.map(function (itm, index) {
      return /*#__PURE__*/_react.default.createElement("option", {
        key: index
      }, (0, _index.fromLowerToUpperCase)(itm));
    }));
  });
}

/**
 *
 * Si le tabType n'est pas un objet, mappez sur le tableau tabs et renvoyez un élément d'option avec la valeur de l'élément et la clé de l'index. Si le tabType est un objet, mappez sur le tableau tabs et renvoyez un élément d'option avec la valeur du nom de l'élément et la clé du nom de l'élément.
 * @param {String}  typeArr - type du tableau
 *
 * @param {Array}  tabs - le tableau
 *
 * @return {React.ReactElement} - une liste
 */
function renderOptions(typeArr, tabs) {
  var option;
  if (typeArr === "number" || typeArr === "string") {
    option = tabs.map(function (ele, key) {
      return /*#__PURE__*/_react.default.createElement("option", {
        value: ele,
        key: key
      }, (0, _index.fromLowerToUpperCase)(ele));
    });
  } else if (typeArr === "object" && Object.values(tabs)[0].name !== "undefined") {
    option = tabs.map(function (ele, key) {
      return /*#__PURE__*/_react.default.createElement("option", {
        value: ele === null || ele === void 0 ? void 0 : ele.name,
        key: key
      }, (0, _index.fromLowerToUpperCase)(ele === null || ele === void 0 ? void 0 : ele.name));
    });
  }
  if (typeof option !== "undefined") return option;
}