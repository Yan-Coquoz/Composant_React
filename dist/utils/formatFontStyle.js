"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromLowerToUpperCase = fromLowerToUpperCase;
exports.toCamelCase = void 0;
/**
 * Il prend une chaîne comme argument, la divise en un tableau de mots, met en majuscule la première
 * lettre de chaque mot et renvoie le tableau sous forme de chaîne.
 * @param {String} str - la chaîne à convertir
 * @returns {String} ex: "Bonjour Le Monde"
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
 * Voici une explication plus détaillée:
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
exports.toCamelCase = toCamelCase;