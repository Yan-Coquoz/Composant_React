import React from "react";
import PropTypes from "prop-types";
import { fromLowerToUpperCase } from "../utils";

/**
 * Composant contrôlé de type input number
 *
 * @prop   {String}  idName      Valeur liant l'input et le label
 * @prop   {String}  label       Description du label et du placeholder
 * @prop   {Function}  sendValue   Permet de transmettre les valeurs de l'input
 * @prop   {boolean}  isRequired  Si le champs est requis
 * @prop   {String}  myClass     Valeur pour les styles
 *
 * @return  {React.ReactElement}   Un composant React de type input
 */

const InputNumber = ({ idName, label, sendValue, isRequired, myClass }) => {
  const handleSendValue = (evt) => {
    const maValeur = evt.target.value;
    const monNom = evt.target.name;

    sendValue(monNom, maValeur);
  };

  return (
    <div className="input_container">
      <label htmlFor={idName} className={`input_container__label ${idName}`}>
        {fromLowerToUpperCase(label)}
      </label>
      <input
        className={`input_container__input ${myClass}`}
        id={idName}
        name={idName}
        onChange={handleSendValue}
        placeholder={fromLowerToUpperCase(label)}
        required={isRequired}
        type="number"
      />
    </div>
  );
};

InputNumber.propTypes = {
  idName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  myClass: PropTypes.string.isRequired,
  sendValue: PropTypes.func.isRequired,
};
InputNumber.defaultProps = {
  handleSendValue: () => {},
  isRequired: false,
  label: "",
  placeholder: "",
  idName: "idName",
};
export default InputNumber;
