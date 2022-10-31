import React from "react";
import PropTypes from "prop-types";
import "../css/style.css";
/**
 * C'est une fonction qui renvoie un élément de bouton avec les accessoires label, type, className,
 * onClick et idName passés en tant qu'arguments
 *
 * @prop   {String}  children    Description du bouton
 * @prop   {String}  type     Type du bouton
 * @prop   {String}  myClass  ClassName du bouton
 * @prop   {String}  idName   Id du bouton
 * @prop   {Function}  onClick  optionnel
 *
 * @return  {React.ReactElement}           a Button
 */
const Button = ({ children, type, myClass, onClick, idName }) => {
  function sendClickEvent(evt) {
    onClick(evt);
  }
  return (
    <button
      type={type}
      className={myClass}
      onClick={sendClickEvent}
      id={idName}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  idName: PropTypes.string,
  myClass: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};
Button.defaultProps = {
  idName: "",
  myClass: "",
  onClick: () => {},
  type: "",
};
export default Button;
