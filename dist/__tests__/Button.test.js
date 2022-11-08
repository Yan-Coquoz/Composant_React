"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

var _Button = _interopRequireDefault(require("../components/Button"));

describe("Test Button component", function () {
  it("render a button", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Button.default, null));
    /* https://testing-library.com/docs/queries/byrole/ */

    var button = _react2.screen.getByRole("button", {
      name: "button"
    });

    expect(button).toBeInTheDocument();
  });
});