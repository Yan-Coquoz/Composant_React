import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Modale from "../components/Modale";

describe("Test the Modale", () => {
  it("Should render a button in the modal and paragraph", () => {
    // https://testing-library.com/docs/example-react-modal/

    const content = render(<Modale />);

    const button = content.getByRole("button");
    const para = content.getByTestId("modal_para");

    expect(button).toBeInTheDocument();
    expect(para).toBeInTheDocument();
  });

  it("Should render Hello", () => {
    const content = render(
      <Modale message="Hello">
        <p>Hello</p>
      </Modale>,
    );
    const text = content.getByText("Hello");
    expect(text).toBeInTheDocument();
  });

  it("Should close the Modale when the button is clicked", () => {
    const closeModal = jest.fn();

    const { getByAltText } = render(
      <Modale onClick={closeModal} message="">
        <button onClick={closeModal}>
          <img src="closeBTN" alt="close button" />
        </button>
      </Modale>,
    );

    // action sur l'attribut alt de l'img
    fireEvent.click(screen.getByAltText("close button"));

    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});
