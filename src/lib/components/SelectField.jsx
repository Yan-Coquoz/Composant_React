import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  fromLowerToUpperCase,
  checkArrayOf,
  renderOptions,
  renderOptGroup,
} from "../utils";
import "../css/style.css";

/**
 * It's a select component that takes in an array of objects, and returns a select element with options
 *
 * @prop   {ArrayOfObject}  `tabs`     Array of object with a props = name
 * @prop   {String}  `idName`     for Label: htmlFor and value, input's id
 * @prop   {String}  `labelName`      Label value
 * @prop   {Boolean}  `isRequired`  If the value is required
 * @prop   {Function}  `sendValue`   send name value and value selected
 * @prop   {Boolean}  `toUpperCase`  if label need to be to upper case
 * @prop   {Boolean}  `optValue` Render 'Options' for first value in select area, if required, option must be false
 * @prop   {Boolean}  `group` If true, optgroup can be add.
 *
 * @return  {React.ReactElement}
 */
const SelectField = ({
  options,
  idName,
  labelName,
  isRequired,
  optValue,
  toUpperCase,
  onClick,
  group,
  onChange,
  onBlur,
  value,
}) => {
  const [tabType, setTabType] = useState("");
  const [renderOption, setRenderOption] = useState("");

  /**
   * Si la valeur de la sélection n'est pas égale à 'options', alors envoyez la valeur de la sélection
   * à la fonction sendValue.
   */
  // const handleSendValue = (evt) => {
  //   const value = evt.target.value;
  //   const selectName = evt.target.name;

  //   sendValue(selectName, value);
  // };

  useEffect(() => {
    const tabsType = checkArrayOf(options);
    if (group) {
      setRenderOption(renderOptGroup(options));
    } else if (
      tabsType === "number" ||
      tabsType === "string" ||
      tabsType === "object"
    ) {
      setTabType(tabsType);
      setRenderOption(renderOptions(tabType, options));
    }
  }, [tabType]);

  function renderFirstOptions() {
    if (isRequired) {
      if (optValue || !optValue) {
        // options est false
        return <option className="select_option"></option>;
      }
    } else {
      if (optValue) {
        return (
          <option className="select_option">
            {toUpperCase ? fromLowerToUpperCase("options") : "options"}
          </option>
        );
      }
    }
  }

  return (
    <div className="select_container">
      <label
        htmlFor={idName}
        className={`input_container__label ${idName}`}
        data-testid="select_label"
      >
        {toUpperCase ? fromLowerToUpperCase(labelName) : labelName}
      </label>

      <select
        className="select_container__select"
        name={idName}
        id={idName}
        required={isRequired}
        onClick={onClick}
        aria-label={"select"}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >
        {renderFirstOptions()}
        {/* Affichage de la liste */}
        {renderOption}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  options: PropTypes.arrayOf(Object).isRequired,
  idName: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  toUpperCase: PropTypes.bool,
  optValue: PropTypes.bool,
  onClick: PropTypes.func,
  group: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

SelectField.defaultProps = {
  isRequired: false,
  onClick: () => {},
  toUpperCase: false,
  optValue: false,
  group: false,
};

export default SelectField;
