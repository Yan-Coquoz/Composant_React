"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var _Modale = _interopRequireDefault(require("../components/Modale"));
describe("Test the Modale", function () {
  it("Should render a button in the modal and paragraph", function () {
    // https://testing-library.com/docs/example-react-modal/

    var content = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modale.default, null));
    var button = content.getByRole("button");
    var para = content.getByTestId("modal_para");
    expect(button).toBeInTheDocument();
    expect(para).toBeInTheDocument();
  });
  it("Should render Hello", function () {
    var content = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modale.default, {
      message: "Hello"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Hello")));
    var text = content.getByText("Hello");
    expect(text).toBeInTheDocument();
  });
  it("Should close the Modale when the button is clicked", function () {
    var closeModal = jest.fn();
    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modale.default, {
        onClick: closeModal,
        message: ""
      }, /*#__PURE__*/_react.default.createElement("button", {
        onClick: closeModal
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "closeBTN",
        alt: "close button"
      })))),
      getByAltText = _render.getByAltText;

    // action sur l'attribut alt de l'img
    _react2.fireEvent.click(_react2.screen.getByAltText("close button"));
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});