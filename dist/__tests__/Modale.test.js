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

  // it("Should close the Modale when the button is clicked", () => {
  //   const closeModal = jest.fn();

  //   const { getByAltText } = render(
  //     <Modale onClick={closeModal} message="">
  //       <button onClick={closeModal}>
  //         <img src="closeBTN" alt="close button" />
  //       </button>
  //     </Modale>,
  //   );

  //   // action sur l'attribut alt de l'img
  //   fireEvent.click(screen.getByAltText("close button"));

  //   expect(closeModal).toHaveBeenCalledTimes(1);
  // });
});