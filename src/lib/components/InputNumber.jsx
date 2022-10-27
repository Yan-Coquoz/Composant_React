import React from "react";
import PropTypes from "prop-types";
import { fromLowerToUpperCase } from "../utils";
import "../css/style.css";
/**
 *
 * @prop   {String}  idName      Valeur liant l'input et le label
 * @prop   {String}  label       Description du label et du placeholder
 * @prop   {Function}  sendValue   Permet de transmettre les valeurs de l'input
 * @prop   {boolean}  isRequired  Si le champs est requis
 * @prop   {String}  myClass     Valeur pour les styles
 * @prop  {Number}  mini minimum value
 * @prop  {Number}  maxi maximum value
 *
 * @return  {React.ReactElement}   Un composant React de type input number
 */

const InputNumber = ({
  idName,
  label,
  toUpperCase,
  isRequired,
  myClass,
  mini,
  maxi,
}) => {
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
        type="number"
        min={mini}
        max={maxi}
      />
    </div>
  );
};

InputNumber.propTypes = {
  idName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  myClass: PropTypes.string,
  mini: PropTypes.number,
  maxi: PropTypes.number,
  toUpperCase: PropTypes.bool,
};
InputNumber.defaultProps = {
  isRequired: false,
  label: "",
  placeholder: "",
  idName: "idName",
  toUpperCase: false,
};
export default InputNumber;