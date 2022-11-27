import React, { useEffect, useState, useRef } from "react";
import { fromLowerToUpperCase } from "../utils";
import { Calendar } from "react-date-range";
import PropTypes from "prop-types";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../css/style.css";

/**
 * La fonction rend un composant de sélecteur de date qui permet à l'utilisateur de sélectionner une
 * date.
 */
const DatePicker = ({
  idName,
  labelName,
  myClass,
  isRequired,
  toUpperCase,
  lang,
  placeholder,
}) => {
  const [calendar, setCalendar] = useState("");
  const [openCalendar, setOpenCalendar] = useState(false);
  const refCalendar = useRef(null);
  // TODO problème de persistance des données lors du reset
  /**
   * Lorsque l'utilisateur clique sur une date, le calendrier sera défini sur cette date.
   */
  function handleCheckSelect(date) {
    checkLangage(lang.toLowerCase(), date);
  }

  /**
   * Si la langue est l'anglais, réglez le calendrier sur la date au format aaaa-MM-jj. Si la langue
   * est le français, réglez le calendrier sur la date au format jj-MM-aaaa
   */
  function checkLangage(lang, date = new Date()) {
    if (lang === "en") {
      setCalendar(format(date, "yyyy-MM-dd"));
    }
    if (lang === "fr") {
      setCalendar(format(date, "dd-MM-yyyy"));
    }
  }

  /**
   * "Si la langue est l'anglais, retournez le mot "Today", sinon retournez le mot "Aujourd'hui"."
   *
   * @param   {String}  lang  par défaut "en" sinon "fr"
   *
   * @return  {React.ReactElement}
   */
  function renderTodayBtn(lang) {
    const trad = lang === "en" ? "Today" : "Aujourd'hui";
    return (
      <button
        className="datepicker__btn-today"
        type="reset"
        onClick={() => checkLangage(lang.toLowerCase())}
      >
        {trad}
      </button>
    );
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
  // function handleChange(evt) {
  //   console.log(evt);
  // }
  useEffect(() => {
    // au chargement de la page le compo aura une date par défaut
    setCalendar("");
    checkLangage();
    document.addEventListener("keydown", checkPressKeyOutSide, true);
    document.addEventListener("click", checkClickOutside, true);
  }, [calendar]);

  return (
    <div className="datepicker__container">
      <label
        htmlFor={idName}
        className={`datepicker__label ${idName}`}
        data-testid="datepicker_label"
      >
        {toUpperCase ? fromLowerToUpperCase(labelName) : labelName}
      </label>

      <input
        className={`datepicker__input ${myClass}`}
        id={idName}
        name={idName}
        aria-label="datepicker"
        value={calendar}
        readOnly
        // onChange={handleChange}
        required={isRequired}
        placeholder={placeholder}
        // ouverture/fermeture du calendrier
        onClick={() => setOpenCalendar((openCalendar) => !openCalendar)}
      />

      <div ref={refCalendar}>
        {openCalendar && (
          <div>
            {/* rendu du bouton */}
            {renderTodayBtn(lang)}
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
  labelName: PropTypes.string,
  isRequired: PropTypes.bool,
  toUpperCase: PropTypes.bool,
  lang: PropTypes.string,
  placeholder: PropTypes.string,
  isSend: PropTypes.bool,
};

DatePicker.defaultProps = {
  myClass: "",
  labelName: "",
  lang: "en",
  isSend: false,
};
export default DatePicker;
