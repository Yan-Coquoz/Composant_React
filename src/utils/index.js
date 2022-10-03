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

export function todayDate() {
  const dayNbrOnMonth = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  return `${dayNbrOnMonth}/${month}/${year}`;
}
