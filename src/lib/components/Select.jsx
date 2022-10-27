// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import { fromLowerToUpperCase, checkArrayOf } from "../utils";
import "../css/style.css";

/**
 * It's a select component that takes in an array of objects, and returns a select element with options
 *
 * @prop   {ArrayOfObject}  `tabs`     Array of object with a props = name
 * @prop  {String}  `idName`     for Label: htmlFor and value, input's id
 * @prop   {String}  `name`      Label value and input name
 * @prop   {Boolean}  `isRequired`  If the value is required
 * @prop   {Function}  `sendValue`   send name value and value selected
 * @prop   {Boolean}  `toUpperCase`  if label need to be to upper case
 *
 * @return  {React.ReactElement}
 */

const Select = ({ idName, isRequired, name, sendValue, tabs, toUpperCase }) => {
  const [tabType, setTabType] = React.useState("");
  const [renderOption, setRenderOption] = React.useState("");

  const handleSendValue = (evt) => {
    const value = evt.target.value;
    const selectName = evt.target.name;
    if (value.toLowerCase() !== "options") {
      sendValue(selectName, value);
    }
    return "";
  };
  function formatOption() {
    if (tabType !== "object") {
      return tabs.map((ele, key) => {
        return (
          <option value={ele} key={key}>
            {fromLowerToUpperCase(ele)}
          </option>
        );
      });
    } else {
      return tabs.map((ele) => {
        return (
          <option value={ele.name} key={ele.name}>
            {fromLowerToUpperCase(ele.name)}
          </option>
        );
      });
    }
  }
  React.useEffect(() => {
    const tabsType = checkArrayOf(tabs);
    setTabType(tabsType);
    setRenderOption(formatOption());
  }, [tabType]);

  return (
    <div className="select_container">
      <label htmlFor={idName} className={"input_container__label"}>
        {toUpperCase ? fromLowerToUpperCase(name) : name}
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
        {renderOption}
      </select>
    </div>
  );
};

Select.propTypes = {
  idName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  sendValue: PropTypes.func,
  tabs: PropTypes.arrayOf(Object).isRequired,
  toUpperCase: PropTypes.bool,
};
Select.defaultProps = {
  idName: "",
  isRequired: false,
  name: "",
  sendValue: () => {},
  toUpperCase: false,
};
export default Select;
