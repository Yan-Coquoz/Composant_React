import React from "react";
import PropTypes from "prop-types";
import { fromLowerToUpperCase } from "../../utils";
import "../css/style.css";
/**
 *
 * @prop   {String}  idName      Valeur liant l'input et le label
 * @prop   {String}  label       Description du label et du placeholder
 * @prop   {Boolean}  toUpperCase   change la première lettre des labels en lettre capitale
 * @prop   {boolean}  isRequired  Si le champs est requis
 * @prop   {String}  myClass     Valeur pour les styles
 * @prop  {Function} sendValue envoi les props de l'input (name et value) à chaque actions sur le clavier
 *
 * @return  {React.ReactElement}   Un composant React de type input text
 */
const InputText = ({
  idName,
  label,
  toUpperCase,
  isRequired,
  myClass,
  sendValue,
}) => {
  return (
    <div className="input_container">
      <label
        htmlFor={idName}
        className={`input_container__label ${idName}`}
        data-testid="input_label"
      >
        {toUpperCase ? fromLowerToUpperCase(label) : label}
      </label>
      <input
        className={`input_container__input ${myClass}`}
        aria-label={"input_text"}
        id={idName}
        name={idName}
        placeholder={fromLowerToUpperCase(label)}
        required={isRequired}
        type="text"
        onChange={(evt) => sendValue(evt.target.name, evt.target.value)}
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
  sendValue: PropTypes.func,
};
InputText.defaultProps = {
  toUpperCase: false,
  isRequired: false,
  label: "",
  placeholder: "",
  idName: "",
  sendValue: () => {},
};
export default InputText;
