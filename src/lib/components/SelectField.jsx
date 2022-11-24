// @ts-nocheck
import { useEffect, useState } from "react";
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
 * @prop   {Boolean}  `optValue` Render 'Options' for first value in select area
 * @prop   {Boolean}  `group` If true, optgroup can be add.
 *
 * @return  {React.ReactElement}
 */
const SelectField = ({
  tabs,
  idName,
  labelName,
  isRequired,
  optValue,
  toUpperCase,
  sendValue,
  group,
}) => {
  const [tabType, setTabType] = useState("");
  const [renderOption, setRenderOption] = useState("");

  /**
   * Si la valeur de la sélection n'est pas égale à 'options', alors envoyez la valeur de la sélection
   * à la fonction sendValue.
   */
  const handleSendValue = (evt) => {
    const value = evt.target.value;
    const selectName = evt.target.name;
    if (isRequired && value.toLowerCase() !== "option") {
      sendValue(selectName, value);
    }
  };

  useEffect(() => {
    const tabsType = checkArrayOf(tabs);
    if (group) {
      setRenderOption(renderOptGroup(tabs));
    } else if (
      tabsType === "number" ||
      tabsType === "string" ||
      tabsType === "object"
    ) {
      setTabType(tabsType);
      setRenderOption(renderOptions(tabType, tabs));
    }
  }, [tabType]);

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
        onClick={handleSendValue}
        aria-label={"select"}
      >
        {optValue && (
          <option style={{ textAlign: "center" }}>
            {toUpperCase ? fromLowerToUpperCase("options") : "option"}
          </option>
        )}
        {/* Affichage de la liste */}
        {renderOption}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  tabs: PropTypes.arrayOf(Object).isRequired,
  idName: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  toUpperCase: PropTypes.bool,
  optValue: PropTypes.bool,
  sendValue: PropTypes.func,
  group: PropTypes.bool,
};

SelectField.defaultProps = {
  isRequired: false,
  sendValue: () => {},
  toUpperCase: false,
  optValue: false,
  group: false,
};

export default SelectField;
