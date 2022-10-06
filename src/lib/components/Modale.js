// @ts-nocheck
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import close from "../assets/icons/close.svg";
import "../css/style.css";

/**
 * C'est une modale qui s'ouvre lorsque l'état du composant parent change.
 *
 * @prop   {String}  message   contenu de la modale
 * @prop   {Boolean}  open      si la modale est ouvert ou non
 * @prop   {String}  sendStyle      si la modale est ouvert ou non
 *
 * @return  {React.ReactElement}
 */
const Modale = ({ message, open, sendStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeClass = document.querySelector(".modal_container");

  function handleCloseBtn() {
    activeClass.style.display = "none";
    setIsOpen(isOpen);
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
        <button
          onClick={handleCloseBtn}
          className="modal__close-button"
          style={{ border: `2px solid ${sendStyle}` }}
        >
          <img
            src={close}
            alt="close button"
            className="modal__close-button__img"
          />
        </button>
        <div className="modal__box-paragraph">
          <p
            className="modal__box-paragraph__paragraph"
            style={{ border: `2px solid ${sendStyle}` }}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

Modale.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.func,
  sendStyle: PropTypes.string,
};
Modale.defaultProps = {
  open: false,
  message: "",
  sendStyle: "none",
};
export default Modale;
