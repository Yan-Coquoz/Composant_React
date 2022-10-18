import React from "react";
import PropTypes from "prop-types";
import { fromLowerToUpperCase } from "../utils";
import "../css/style.css";
/**
 *
 * @prop   {String}  idName      Valeur liant l'input et le label
 * @prop   {String}  label       Description du label et du placeholder
 * @prop   {Boolean}  toUpperCase   change la première lettre des labels en lettre capitale
 * @prop   {boolean}  isRequired  Si le champs est requis
 * @prop   {String}  myClass     Valeur pour les styles
 *
 * @return  {React.ReactElement}   Un composant React de type input text
 */
const InputText = ({ idName, label, toUpperCase, isRequired, myClass }) => {
  return (
    <div className="input_container">
      <label htmlFor={idName} className={`input_container__label ${idName}`}>
        {toUpperCase ? fromLowerToUpperCase(label) : label}
      </label>
      <input
        className={`input_container__input ${myClass}`}
        id={idName}
        name={idName}
        placeholder={fromLowerToUpperCase(label)}
        required={isRequired}
        type="text"
      />
    </div>
  );
};

InputText.propTypes = {
  idName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  myClass: PropTypes.string,
  toUpperCase: PropTypes.bool,
};
InputText.defaultProps = {
  toUpperCase: false,
  isRequired: false,
  label: "",
  placeholder: "",
  idName: "idName",
};
export default InputText;
