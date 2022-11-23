// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import { fromLowerToUpperCase, checkArrayOf, formatOption } from "../utils";
import "../css/style.css";
import { formatArrays } from "../utils/formatDatas";

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
  const [tabType, setTabType] = React.useState("");
  const [renderOption, setRenderOption] = React.useState("");

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

  React.useEffect(() => {
    if (group) {
      const optGro = formatArrays(tabs);
      setRenderOption(optGro);
    } else {
      const tabsType = checkArrayOf(tabs);
      setTabType(tabsType);
      setRenderOption(formatOption(tabsType, tabs));
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
            {fromLowerToUpperCase("options")}
          </option>
        )}
        {/* Affichage du tableau */}
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
