import React from "react";
import PropTypes from "prop-types";

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
  type: PropTypes.string.isRequired,
  myClass: PropTypes.string,
  idName: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  onClick: () => {},
  myClass: "",
  id: "",
  type: "",
};
export default Button;
