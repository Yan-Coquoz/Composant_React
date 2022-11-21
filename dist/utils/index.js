"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkArrayOf = checkArrayOf;
exports.fromLowerToUpperCase = fromLowerToUpperCase;
exports.toCamelCase = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/typeof"));
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

/**
 * Il prend une chaîne, remplace tous les traits d'union, traits de soulignement et espaces par une
 * chaîne vide, puis met en majuscule la première lettre du mot suivant.
 *
 * Voici une explication plus détaillée :
 *
 * La première ligne de la fonction définit une expression régulière qui correspond aux traits d'union,
 * aux traits de soulignement et aux espaces.
 *
 * La deuxième ligne de la fonction utilise la méthode replace() pour remplacer toutes les
 * correspondances par une chaîne vide.
 *
 * La méthode replace() prend deux arguments : une expression régulière et une chaîne.
 *
 * L'expression régulière est le premier argument. C'est la même expression régulière que nous avons
 * définie dans la première ligne de la fonction.
 *
 * Le deuxième argument est une chaîne qui remplace toutes les correspondances.
 *
 * Le deuxième argument est en fait une fonction qui renvoie une chaîne.
 *
 * La fonction prend deux arguments : str et char.
 *
 * L'argument str est la chaîne correspondante.
 * @param string - Chaîne à convertir en casse camel.
 * @returns un string.
 * @exemple foo Bar / foo-bar-- / foo_bar__
 *
 */
var toCamelCase = function toCamelCase(string) {
  var camelCaseRegex = /[-_\s]+(.)?/g;
  return string.replace(camelCaseRegex, function (str, char) {
    return char ? char.toUpperCase() : "";
  });
};

/**
 * Il vérifie si le premier élément d'un tableau est un tableau, un nombre, une chaîne, un objet avec
 * une propriété name ou null.
 * @param arr - le tableau à vérifier
 * @returns le type du premier élément du tableau.
 */
exports.toCamelCase = toCamelCase;
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
}