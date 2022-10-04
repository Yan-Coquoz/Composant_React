"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromLowerToUpperCase = fromLowerToUpperCase;
exports.todayDate = todayDate;

/**
 * Il prend une chaîne comme argument, la divise en un tableau de mots, met en majuscule la première
 * lettre de chaque mot et renvoie le tableau sous forme de chaîne.
 * @param {String} str - la chaîne à convertir
 * @returns {String} "Bonjour Le Monde"
 */
function fromLowerToUpperCase(str) {
  if (str.length > 0) {
    var maChaine = str.toLowerCase().split(" ");
    return maChaine.map(function (elt) {
      return elt.replace(elt.charAt(0), elt.charAt(0).toUpperCase());
    }).join(" ");
  }

  return "";
}

function todayDate() {
  var dayNbrOnMonth = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();
  return "".concat(dayNbrOnMonth, "/").concat(month, "/").concat(year);
}