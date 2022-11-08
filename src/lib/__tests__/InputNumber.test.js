// @ts-nocheck
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputNumber from "../components/InputNumber";

describe("Test the component InputNumber", () => {
  it("Should render the label", () => {
    render(<InputNumber />);
    const label = screen.getByTestId("input_label");
    expect(label).toBeInTheDocument();
  });
  it("Should render the input", () => {
    const content = render(<InputNumber />);
    const input = content.getByLabelText("input_number");
    expect(input).toBeInTheDocument();
  });
  it("Should send the name and value", () => {
    // ex : InputText.test.js
    const setup = () => {
      const content = render(<InputNumber />);
      const inputNum = content.getByLabelText("input_number");
      return { inputNum, ...content };
    };
    const { inputNum } = setup();
    // value DOIT être un nombre de type string
    fireEvent.change(inputNum, {
      target: { name: "inputName", value: "5" },
    });

    expect(inputNum.name).toBe("inputName");
    expect(inputNum.value).toBe("5");
  });
});
