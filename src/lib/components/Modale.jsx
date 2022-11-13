// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import close from "../assets/icons/close.svg";
import "../css/style.css";

/**
 * C'est une modale qui s'ouvre lorsque l'état du composant parent change.
 *
 * @prop   {String}  message   contenu de la modale
 * @prop   {boolean}  open      si la modale est ouvert ou non
 * @prop   {Function}  onClose      Action de fermeture de la modale
 * @prop   {String}  sendStyle      Défini la couleur de la bordure du bouton et du texte
 *
 * @return  {React.ReactElement}
 */
const Modale = ({ message, onClose, open, sendStyle }) => {
  function handleCloseBtn() {
    document.querySelector(".modal_container").style.display = "none";
    onClose(false);
  }
  React.useEffect(() => {
    if (open) {
      document.querySelector(".modal_container").style.display = "block";
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
            data-testid="modal_para"
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
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  sendStyle: PropTypes.string,
};
Modale.defaultProps = {
  message: "Message",
  onClose: () => {},
  open: false,
  sendStyle: "none",
};
export default Modale;
