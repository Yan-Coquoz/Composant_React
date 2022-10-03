import React, { useState } from "react";
import PropTypes from "prop-types";
import ModaleDate from "./Modale";
import { fromLowerToUpperCase } from "../utils";
import "./style.css";

const InputDate = ({ label, idName }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  function handleOpenModale(evt) {
    const addClassToInput = document.querySelector(".input_container__input");

    if (addClassToInput !== null || !isModalActive) {
      addClassToInput.classList.toggle("active");
      if (addClassToInput.classList.contains("active")) {
        setIsModalActive(true);
      } else {
        setIsModalActive(false);
      }
    }
  }

  return (
    <div className="input_container">
      <label htmlFor={idName} className={`input_container__label ${idName}`}>
        {fromLowerToUpperCase(label)}
      </label>
      <input
        className="input_container__input"
        type="text"
        id={idName}
        placeholder={"jj/mm/aaaa"}
        // onChange={}
        onClick={handleOpenModale}
      />
      {isModalActive && <ModaleDate />}
    </div>
  );
};

InputDate.propTypes = {
  label: PropTypes.string,
  idName: PropTypes.string,
};
export default InputDate;
