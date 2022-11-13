"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var _Select = _interopRequireDefault(require("../components/Select"));
describe("Test for Select", function () {
  it("it should be render a label", function () {
    var tabs = [];
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Select.default, {
      tabs: tabs
    }));
    var label = _react2.screen.getByTestId("select_label");
    expect(label).toBeInTheDocument();
  });
});