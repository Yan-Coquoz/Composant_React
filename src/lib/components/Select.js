import React from "react";
import PropTypes from "prop-types";
import { fromLowerToUpperCase } from "../utils";

/**
 * It's a select component that takes in an array of objects, and returns a select element with options
 *
 * @prop   {ArrayOfObject}  tabs        [tabs description]
 * @prop  {String}  idName     [idName description]
 * @prop   {String}  name        [name description]
 * @prop   {Boolean}  isRequired  [isRequired description]
 * @prop   {Function}  sendValue   [sendValue description]
 *
 * @return  {React.ReactElement}              [return description]
 */
const Select = ({ tabs, idName, name, isRequired, sendValue }) => {
  const handleSendValue = (evt) => {
    const value = evt.target.value;
    const selectName = evt.target.name;
    if (value.toLowerCase() !== "options") {
      sendValue(selectName, value);
    }
    return "";
  };

  return (
    <div className="select_container">
      <label htmlFor={idName} className={"input_container__label"}>
        {fromLowerToUpperCase(idName)}
      </label>
      <select
        className="select_container__select"
        name={name}
        id={idName}
        required={isRequired}
        onChange={handleSendValue}
      >
        <option style={{ textAlign: "center" }}>
          {fromLowerToUpperCase("options")}
        </option>
        {tabs.length > 0 &&
          tabs.map((ele, key) => {
            return (
              <option value={ele.name.toLowerCase()} key={key}>
                {fromLowerToUpperCase(ele.name)}
              </option>
            );
          })}
      </select>
    </div>
  );
};

Select.propTypes = {
  tabs: PropTypes.arrayOf(Object).isRequired,
  isRequired: PropTypes.bool,
  idName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
Select.defaultProps = {
  isRequired: false,
  idName: "idName",
  name: "name",
};
export default Select;
