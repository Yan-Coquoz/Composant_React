import React, { useEffect, useState, useRef } from "react";
import { fromLowerToUpperCase } from "../utils";
import { Calendar } from "react-date-range";
import PropTypes from "prop-types";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../css/style.css";

const DatePicker = ({ idName, label, myClass, isRequired, toUpperCase }) => {
  const [calendar, setCalendar] = useState("");
  const [openCalendar, setOpenCalendar] = useState(false);
  const refCalendar = useRef(null);

  function handleCheckSelect(date) {
    // console.log(date);
    // console.log(format(date, "yyyy-MM-dd"));
    setCalendar(format(date, "yyyy-MM-dd")); // format de la date voulue
  }

  /**
   * Si la touche enfoncée est la touche d'échappement, le calendrier se ferme.
   */
  function checkPressKeyOutSide(evt) {
    if (evt.key === "Escape") {
      setOpenCalendar(false);
    }
  }
  /**
   * Ferme le calendrier si on clique en dehors du composant datePicker
   */
  function checkClickOutside(evt) {
    // Si la ref du calendrier n'est pas contenue dans l'event, alors on ferme le calendrier
    if (refCalendar.current && !refCalendar.current.contains(evt.target)) {
      setOpenCalendar(false);
    }
  }

  useEffect(() => {
    // au chargement de la page le compo aura une date par défaut
    setCalendar(format(new Date(), "yyyy-MM-dd"));
    document.addEventListener("keydown", checkPressKeyOutSide, true);
    document.addEventListener("click", checkClickOutside, true);
  }, []);

  return (
    <div className="datepicker__container">
      <label htmlFor={idName} className={`datepicker__label ${idName}`}>
        {toUpperCase ? fromLowerToUpperCase(label) : label}
      </label>
      <input
        className={`datepicker__input ${myClass}`}
        value={calendar}
        readOnly
        name={label.split(" ").join("_")}
        id={idName}
        required={isRequired}
        // overture/fermeture du calendrier
        onClick={() => setOpenCalendar((openCalendar) => !openCalendar)}
      />

      <div ref={refCalendar}>
        {openCalendar && (
          <div>
            <button
              className="datepicker__btn-today"
              type="reset"
              onClick={() => setCalendar(format(new Date(), "yyyy-MM-dd"))}
            >
              Today
            </button>

            <Calendar
              className="datepicker__calendar"
              date={new Date()}
              onChange={handleCheckSelect}
            />
          </div>
        )}
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  idName: PropTypes.string,
  myClass: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  toUpperCase: PropTypes.bool,
};
DatePicker.defaultProps = {
  myClass: "",
  label: "",
};
export default DatePicker;
