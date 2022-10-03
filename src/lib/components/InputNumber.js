import React from "react";
import PropTypes from "prop-types";
import { fromLowerToUpperCase } from "../utils";
import "./style.css";

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

    // j'envoi ma valeur et son name dans une fonction pour le formulaire
    if (maValeur.length === 5) {
      sendValue(monNom, maValeur);
    }
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
        minLength={5}
        maxLength={5}
      />
    </div>
  );
};

InputNumber.propTypes = {
  idName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  myClass: PropTypes.string.isRequired,
  sendValue: PropTypes.func.isRequired,
};
InputNumber.defaultProps = {
  handleSendValue: () => {},
  isRequired: false,
  label: "",
  name: "",
  placeholder: "",
};
export default InputNumber;
