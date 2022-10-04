import React from "react";
import PropTypes from "prop-types";
import { fromLowerToUpperCase } from "../utils";
import "../css/style.css";

/**
 * Composant contrôlé de type input text
 *
 * @prop   {String}  idName      Valeur liant l'input et le label
 * @prop   {String}  label       Description du label et du placeholder
 * @prop   {Function}  sendValue   Permet de transmettre les valeurs de l'input
 * @prop   {boolean}  isRequired  Si le champs est requis
 * @prop   {String}  myClass     Valeur pour les styles
 *
 * @return  {React.ReactElement}   Un composant React de type input
 */

const InputText = ({ idName, label, sendValue, isRequired, myClass }) => {
  const handleSendValue = (evt) => {
    const maValeur = evt.target.value;
    const monNom = evt.target.name;

    if (maValeur.length !== 0) {
      // j'envoi ma valeur et son name dans une fonction pour le formulaire
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
        type="text"
      />
    </div>
  );
};

InputText.propTypes = {
  idName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  myClass: PropTypes.string.isRequired,
  sendValue: PropTypes.func.isRequired,
};
InputText.defaultProps = {
  handleSendValue: () => {},
  isRequired: false,
  label: "",
  name: "",
  placeholder: "",
};
export default InputText;
