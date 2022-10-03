import React, { useState } from "react";
// import PropTypes from "prop-types";
import moment from "moment";

import { fromLowerToUpperCase } from "../../utils";
import chevron from "./../../assets/icons/chevron.svg";
import "./style.css";

const ModaleDate = () => {
  const [currentDate, setCurrentDate] = useState({
    dateObject: moment(),
    allMonths: moment.months(),
  });
  const dayRows = [];
  // const monthInYear = [];
  let dayCells = [];

  /**
   * Il renvoie le nombre de jours du mois en cours.
   * @returns Le nombre de jours du mois en cours.
   */
  const daysInMonths = () => {
    return currentDate.dateObject.daysInMonth();
  };

  /**
   * Il renvoie le jour du mois en cours.
   * @returns Le jour actuel du mois.
   */
  const currentDay = () => {
    return currentDate.dateObject.format("D");
  };

  /**
   * Il renvoie le mois en cours au format "MMMM" (par exemple "Janvier")
   * @returns Le mois en cours.
   */
  const currentMonth = () => {
    return currentDate.dateObject.format("MMMM");
  };
  /**
   * Il renvoie l'année en cours.
   * @returns L'année en cours.
   */
  const currentYear = () => {
    return currentDate.dateObject.format("YYYY");
  };

  /**
   * Elle renvoie un nombre qui représente le jour de la semaine du premier jour du mois.
   * @returns Un numéro.
   */
  const firstDayOfMonth = () => {
    const date = currentDate.dateObject;
    // retourne un nombre sous forme de string
    return Number(moment(date).startOf("month").format("d"));
  };

  // Gestion des départs de mois ou le 1 jour est != de lundi
  const dayBlancArray = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    dayBlancArray.push(
      <td className="table__day_of_month-list empty" key={"empty" + i}>
        {""}
      </td>,
    );
  }

  // Gestion de la date du mois
  const daysInMonth = [];
  for (let day = 1; day <= daysInMonths(); day++) {
    // Ajout de la classe today sur le jour actuelle
    let today = day === Number(currentDay()) ? "today" : "";
    daysInMonth.push(
      <td className={`table__day_of_month-list ${today}`} key={day}>
        {day}
      </td>,
    );
  }

  const allDays = [...dayBlancArray, ...daysInMonth];
  // Faire un affichage d'une semaine
  allDays.forEach((row, i) => {
    if (i % 7 !== 0) {
      // si le 1er jour du mois correspond au 1er jour de la semaine
      dayCells.push(row);
    } else {
      dayRows.push(dayCells);
      // ajoute un nouveau tableau pour la nouvelle semaine
      dayCells = [];
      dayCells.push(row);
    }
    // gestion des jours restant, si la semaine n'est pas fini
    if (i === allDays.length - 1) {
      dayRows.push(dayCells);
    }
  });

  const allDaysInMonth = dayRows.map((day, key) => {
    return (
      <tr className="table__day_of_month" key={key}>
        {day}
      </tr>
    );
  });

  /**
   * Récupère le mois sélectionné, cherche sont id, et réaffecte le state avec le mois recherché
   *
   * @param   {Event}  evt  événement au clique
   *
   * @return  {Object}       un nouvel état des mois
   */
  function handleCheckMonth(evt) {
    evt.preventDefault();
    const selectMonth = evt.target.value;
    const monthIndex = currentDate.allMonths.findIndex((month) => {
      return month.toLowerCase() === selectMonth.toLowerCase();
    });
    /* Création d'un nouvel objet avec les mêmes propriétés que l'objet currentDate.dateObject. */
    let newDateObject = Object.assign({}, currentDate.dateObject);
    newDateObject = moment(newDateObject).set("month", monthIndex);
    setCurrentDate({ dateObject: newDateObject, allMonths: moment.months() });
  }

  /* Définir l'année sur l'année en cours, puis y ajouter 12 années, puis la formater en une année à 2
  chiffres. */
  let nextTenYear = moment()
    .set("year", Number(currentYear()))
    .add("year", 12)
    .format("y");
  console.log(nextTenYear);

  /**
   * Il prend une date de début et une date de fin et renvoie un tableau d'années entre les deux dates.
   * @param {String} startDate - "2018"
   * @param {String} stopDate - "2019"
   * @returns Un tableau d'années entre la date de début et la date de fin.
   */
  const getDates = (startDate, stopDate) => {
    let dateArray = [];
    let currentStartYear = moment(startDate);
    const currentStopYear = moment(stopDate);
    while (currentStartYear <= currentStopYear) {
      dateArray.push(moment(currentStartYear).format("YYYY"));
      currentStartYear = moment(currentStartYear).add(1, "year");
    }
    return dateArray;
  };
  console.log(getDates("2022", "2030"));

  const handleTodayDateFromBtnHome = () => {
    console.log(moment.locale());
    console.log(`liste des jours ${moment.weekdaysShort()}`);
    console.log(firstDayOfMonth());
  };
  return (
    <div className="modal_main_container">
      <header className="modal_header_container">
        <div className="modal_btn_chevron">
          <img
            src={chevron}
            alt="chevron gauche"
            className="modal_chevron gauche"
          />
        </div>
        <div className="modal_btn-home" onClick={handleTodayDateFromBtnHome}>
          Home
        </div>
        <div className="modal_selector">
          <label htmlFor="month"></label>
          <select
            name="month"
            id="month"
            className="modal_select"
            onClick={handleCheckMonth}
          >
            <option value={currentMonth().toLowerCase()}>
              {fromLowerToUpperCase(currentMonth())}
            </option>
            {currentDate.allMonths.map((month, key) => {
              return (
                <option
                  key={key}
                  value={month.toLowerCase()}
                  label={month.toLowerCase()}
                  className={
                    month.toLowerCase() === currentMonth().toLowerCase()
                      ? "current_month"
                      : ""
                  }
                >
                  {fromLowerToUpperCase(month)}
                </option>
              );
            })}
          </select>
        </div>
        <div className="modal_selector">
          <label htmlFor="year"></label>
          <select name="year" id="year" className="modal_select">
            <option>{currentYear()}</option>
          </select>
        </div>
        <div className="modal_btn_chevron">
          <img
            src={chevron}
            className="modal_chevron droit"
            alt="chevron droit"
          />
        </div>
      </header>
      <table>
        <thead>
          <tr>
            {moment.weekdaysShort().map((day, key) => {
              return (
                <th key={`${key}_${day}`} className="table__days">
                  {fromLowerToUpperCase(day)}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>{allDaysInMonth}</tbody>
      </table>
    </div>
  );
};

// ModaleDate.propTypes = {};
// ModaleDate.defaultProps = {};
export default ModaleDate;
