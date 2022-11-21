import React from "react";
import PropTypes from "prop-types";
import { fromLowerToUpperCase } from "../utils";
import "../css/style.css";

/**
 *
 * @prop   {String}  idName      Valeur liant l'input et le label
 * @prop   {String}  labelName       Description du label et du placeholder
 * @prop   {Function}  sendValue   Permet de transmettre les valeurs de l'input (input name et value)
 * @prop   {boolean}  isRequired  Si le champs est requis
 * @prop   {String}  myClass     Valeur pour les styles
 * @prop  {Number}  mini minimum value
 * @prop  {Number}  maxi maximum value
 *
 * @return  {React.ReactElement}   Un composant React de type input number
 */

const InputNumber = ({
  idName,
  labelName,
  toUpperCase,
  isRequired,
  myClass,
  mini,
  maxi,
  sendValue,
}) => {
  return (
    <div className="input_container">
      <label
        htmlFor={idName}
        className={`input_container__label ${idName}`}
        data-testid="input_label"
      >
        {toUpperCase ? fromLowerToUpperCase(labelName) : labelName}
      </label>
      <input
        className={`input_container__input ${myClass}`}
        id={idName}
        aria-label={"input_number"}
        name={idName}
        placeholder={fromLowerToUpperCase(labelName)}
        required={isRequired}
        type="number"
        min={mini}
        max={maxi}
        onChange={(evt) => sendValue(evt.target.name, evt.target.value)}
      />
    </div>
  );
};

InputNumber.propTypes = {
  idName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  labelName: PropTypes.string,
  myClass: PropTypes.string,
  mini: PropTypes.number,
  maxi: PropTypes.number,
  toUpperCase: PropTypes.bool,
  sendValue: PropTypes.func,
};
InputNumber.defaultProps = {
  isRequired: false,
  labelName: "",
  placeholder: "",
  idName: "",
  toUpperCase: false,
  sendValue: () => {},
};
export default InputNumber;
