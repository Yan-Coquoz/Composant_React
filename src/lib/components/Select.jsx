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
 * @prop   {Boolean}  `optValue` Render 'Options' for first value in select area
 * @return  {React.ReactElement}
 */

const Select = ({
  idName,
  isRequired,
  name,
  sendValue,
  tabs,
  optValue,
  toUpperCase,
}) => {
  const [tabType, setTabType] = React.useState("");
  const [renderOption, setRenderOption] = React.useState("");

  /**
   * Si la valeur de la sélection n'est pas égale à 'options', alors envoyez la valeur de la sélection
   * à la fonction sendValue.
   * @returns
   */
  const handleSendValue = (evt) => {
    const value = evt.target.value;
    const selectName = evt.target.name;
    if (value.toLowerCase() !== "options") {
      sendValue(selectName, value);
    }
    return "";
  };

  /**
   * Si le tabType n'est pas un objet, mappez sur le tableau tabs et renvoyez un élément d'option avec la
   * valeur de l'élément et la clé de l'index. Si le tabType est un objet, mappez sur le tableau tabs et
   * renvoyez un élément d'option avec la valeur du nom de l'élément et la clé du nom de l'élément.
   */
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
          <option value={ele?.name} key={ele?.name}>
            {fromLowerToUpperCase(ele?.name)}
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
      <label
        htmlFor={idName}
        className={`input_container__label ${idName}`}
        data-testid="select_label"
      >
        {toUpperCase ? fromLowerToUpperCase(name) : name}
      </label>
      <select
        className="select_container__select"
        name={idName}
        id={idName}
        required={isRequired}
        onChange={handleSendValue}
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

Select.propTypes = {
  idName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  sendValue: PropTypes.func,
  tabs: PropTypes.arrayOf(Object).isRequired,
  toUpperCase: PropTypes.bool,
  optValue: PropTypes.bool,
};
Select.defaultProps = {
  idName: "",
  isRequired: false,
  name: "",
  sendValue: () => {},
  toUpperCase: false,
  optValue: false,
};
export default Select;
