import { fromLowerToUpperCase } from "./index";
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

export function formatOption(typeArr, tabs) {
  if (typeArr !== "object") {
    return tabs.map((ele, key) => {
      return (
        <option value={ele} key={key}>
          {fromLowerToUpperCase(ele)}
        </option>
      );
    });
  } else {
    return tabs.map((ele) => {
      return (
        <option value={ele?.name} key={ele?.name}>
          {fromLowerToUpperCase(ele?.name)}
        </option>
      );
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
export function formatArrays(tabs) {
  return tabs.map((ele, key) => {
    const optGName = Object.keys(ele)[0];
    const optTabs = Object.values(ele)[0];
    return (
      <optgroup key={key} label={optGName} className="option_group">
        {optTabs.map((itm, index) => {
          return <option key={index}>{itm}</option>;
        })}
      </optgroup>
    );
  });
}
