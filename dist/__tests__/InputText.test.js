"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var _InputText = _interopRequireDefault(require("../components/InputText"));
// @ts-nocheck

describe("Test for TextInput", function () {
  it("it should be render a label", function () {
    // https://testing-library.com/docs/queries/bytestid
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_InputText.default, null));
    var label = _react2.screen.getByTestId("input_label");
    expect(label).toBeInTheDocument();
  });
  it("it should be render an input", function () {
    // https://testing-library.com/docs/example-input-event
    var content = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_InputText.default, null));
    var input = content.getByLabelText("input_text");
    expect(input).toBeInTheDocument();
  });
  it("Should send name and value", function () {
    // https://testing-library.com/docs/example-input-event
    var setup = function setup() {
      var content = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_InputText.default, null));
      var inputText = content.getByLabelText("input_text");
      return (0, _objectSpread2.default)({
        inputText: inputText
      }, content);
    };
    var _setup = setup(),
      inputText = _setup.inputText;
    _react2.fireEvent.change(inputText, {
      target: {
        name: "inputName",
        value: "inputValue"
      }
    });
    expect(inputText.name).toBe("inputName");
    expect(inputText.value).toBe("inputValue");
  });
});