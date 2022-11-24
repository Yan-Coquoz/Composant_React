"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkArrayOf = checkArrayOf;
exports.formatArrays = formatArrays;
exports.formatOption = formatOption;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/typeof"));
var _index = require("./index");
/**
 * Il vérifie si le premier élément d'un tableau est un tableau, un nombre, une chaîne, un objet avec
 * une propriété name ou null.
 * @param arr - le tableau à vérifier
 * @returns le type du premier élément du tableau.
 */
function checkArrayOf(arr) {
  // le type du tableau
  var typeOfArr = Array.isArray(arr[0]) ? "array" : arr[0] === null // envoi null en cas d'objet
  ? null : (0, _typeof2.default)(arr[0]);
  if (typeOfArr === "number" || typeOfArr === "string") {
    return typeOfArr;
  }
  if (typeOfArr === "object" && Object.keys(arr[0]).includes("name")) {
    return typeOfArr;
  }
  if (typeOfArr === "object" && Object.keys(arr[0])[0] !== "name") {
    throw new Error("this array is not compliant");
  }
}

/**
 *
 * Si le tabType n'est pas un objet, mappez sur le tableau tabs et renvoyez un élément d'option avec la valeur de l'élément et la clé de l'index. Si le tabType est un objet, mappez sur le tableau tabs et renvoyez un élément d'option avec la valeur du nom de l'élément et la clé du nom de l'élément.
 * @param {String}  typeArr - type du tableau
 * @param {Array}  tabs - le tableau
 * @return
 */

function formatOption(typeArr, tabs) {
  if (typeArr !== "object") {
    return tabs.map(function (ele, key) {
      return /*#__PURE__*/React.createElement("option", {
        value: ele,
        key: key
      }, (0, _index.fromLowerToUpperCase)(ele));
    });
  } else {
    return tabs.map(function (ele) {
      return /*#__PURE__*/React.createElement("option", {
        value: ele === null || ele === void 0 ? void 0 : ele.name,
        key: ele === null || ele === void 0 ? void 0 : ele.name
      }, (0, _index.fromLowerToUpperCase)(ele === null || ele === void 0 ? void 0 : ele.name));
    });
  }
}

/**
 * Il prend un tableau d'objets et renvoie un tableau d'éléments React.
 * @param   {ArrayOfObject}  tabs
 *
 * @returns {React.ReactElement} Un tableau d'éléments React.
 *
 */
function formatArrays(tabs) {
  return tabs.map(function (ele, key) {
    var optGName = Object.keys(ele)[0];
    var optTabs = Object.values(ele)[0];
    return /*#__PURE__*/React.createElement("optgroup", {
      key: key,
      label: (0, _index.fromLowerToUpperCase)(optGName),
      className: "option_group"
    }, optTabs.map(function (itm, index) {
      return /*#__PURE__*/React.createElement("option", {
        key: index
      }, (0, _index.fromLowerToUpperCase)(itm));
    }));
  });
}