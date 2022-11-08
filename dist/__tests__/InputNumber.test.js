"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

var _InputNumber = _interopRequireDefault(require("../components/InputNumber"));

// @ts-nocheck
describe("Test the component InputNumber", function () {
  it("Should render the label", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_InputNumber.default, null));

    var label = _react2.screen.getByTestId("input_label");

    expect(label).toBeInTheDocument();
  });
  it("Should render the input", function () {
    var content = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_InputNumber.default, null));
    var input = content.getByLabelText("input_number");
    expect(input).toBeInTheDocument();
  });
  it("Should send the name and value", function () {
    // ex : InputText.test.js
    var setup = function setup() {
      var content = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_InputNumber.default, null));
      var inputNum = content.getByLabelText("input_number");
      return (0, _objectSpread2.default)({
        inputNum: inputNum
      }, content);
    };

    var _setup = setup(),
        inputNum = _setup.inputNum; // value DOIT être un nombre de type string


    _react2.fireEvent.change(inputNum, {
      target: {
        name: "inputName",
        value: "5"
      }
    });

    expect(inputNum.name).toBe("inputName");
    expect(inputNum.value).toBe("5");
  });
});