import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import close from "../assets/icons/close.svg";
import "./style.css";

/**
 * C'est une modale qui s'ouvre lorsque l'état du composant parent change.
 *
 * @prop   {String}  message   contenu de la modale
 * @prop   {Boolean}  open      si la modale est ouvert ou non
 * @prop   {[type]}  getClose  permet de changer l'état de la modale à false
 *
 * @return  {React.ReactElement}
 */
const Modale = ({ message, open, getClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeClass = document.querySelector(".modal_container");

  function handleCloseBtn() {
    activeClass.style.display = "none";
    setIsOpen(false);
    getClose();
  }
  useEffect(() => {
    setIsOpen(true);
    if (isOpen && open) {
      activeClass.style.display = "block";
    }
  }, [open]);
  return (
    <div className="modal_container">
      <div className="modal_box">
        <button onClick={handleCloseBtn} className="modal__close-button">
          <img
            src={close}
            alt="close button"
            className="modal__close-button__img"
          />
        </button>
        <div className="modal__box-paragraph">
          <p className="modal__box-paragraph__paragraph">{message}</p>
        </div>
      </div>
    </div>
  );
};

Modale.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  getClose: PropTypes.func.isRequired,
};
Modale.defaultProps = {
  getClose: () => {},
  open: false,
  message: "",
};
export default Modale;
