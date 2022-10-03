import React from "react";
import PropTypes from "prop-types";
import "../style.css";

/**
 * Il prend une chaîne comme argument, la divise en un tableau de mots, met en majuscule la première
 * lettre de chaque mot et renvoie le tableau sous forme de chaîne.
 * @param {String} str - la chaîne à convertir
 * @returns {String} "Bonjour Le Monde"
 */
function fromLowerToUpperCase(str) {
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

const Select = ({ tabs, idLabel, name, isRequired, sendValue }) => {
  const handleSendValue = (evt) => {
    const value = evt.target.value;
    const selectName = evt.target.name;
    if (value.toLowerCase() !== "options") {
      sendValue(selectName, value);
    }
    return "";
  };

  return (
    <div className="select_container">
      <label htmlFor={idLabel} className={"input_container__label"}>
        {fromLowerToUpperCase(idLabel)}
      </label>
      <select
        className="select_container__select"
        name={name}
        id={idLabel}
        required={isRequired}
        onChange={handleSendValue}
      >
        <option style={{ textAlign: "center" }}>
          {fromLowerToUpperCase("options")}
        </option>
        {tabs.length > 0 &&
          tabs.map((ele, key) => {
            return (
              <option value={ele.name.toLowerCase()} key={key}>
                {fromLowerToUpperCase(ele.name)}
              </option>
            );
          })}
      </select>
    </div>
  );
};

Select.propTypes = {
  tabs: PropTypes.arrayOf(Object).isRequired,
  isRequired: PropTypes.bool.isRequired,
  idLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
Select.defaultProps = {
  isRequired: false,
};
export default Select;
