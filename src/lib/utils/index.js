/**
 * Il prend une chaîne comme argument, la divise en un tableau de mots, met en majuscule la première
 * lettre de chaque mot et renvoie le tableau sous forme de chaîne.
 * @param {String} str - la chaîne à convertir
 * @returns {String} "Bonjour Le Monde"
 */
export function fromLowerToUpperCase(str) {
  if (str.length > 0) {
    const maChaine = str.toLowerCase().split(" ");
    return maChaine
      .map((elt) => {
        return elt.replace(elt.charAt(0), elt.charAt(0).toUpperCase());
      })
      .join(" ");
  }
  return "";
}

// export function todayDate() {
//   const dayNbrOnMonth = new Date().getDate();
//   const month = new Date().getMonth();
//   const year = new Date().getFullYear();
//   return `${dayNbrOnMonth}/${month}/${year}`;
// }

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
export const toCamelCase = (string) => {
  const camelCaseRegex = /[-_\s]+(.)?/g;
  return string.replace(camelCaseRegex, (str, char) => {
    return char ? char.toUpperCase() : "";
  });
};

/**
 * Il vérifie si le premier élément d'un tableau est un tableau, un nombre, une chaîne, un objet avec
 * une propriété name ou null.
 * @param arr - le tableau à vérifier
 * @returns le type du premier élément du tableau.
 */
export function checkArrayOf(arr) {
  // le type du tableau

  const typeOfArr = Array.isArray(arr[0])
    ? "array"
    : arr[0] === null // envoi null en cas d'objet
    ? null
    : typeof arr[0];

  if (typeOfArr === "number" || typeOfArr === "string") {
    return typeOfArr;
  }

  if (typeOfArr === "object" && Object.keys(arr[0]).includes("name")) {
    return typeOfArr;
  }
}
