// @ts-nocheck
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputText from "../components/InputText";

describe("Test for TextInput", () => {
  it("it should be render a label", () => {
    // https://testing-library.com/docs/queries/bytestid
    render(<InputText />);
    const label = screen.getByTestId("input_label");
    expect(label).toBeInTheDocument();
  });

  it("it should be render an input", () => {
    // https://testing-library.com/docs/example-input-event
    const content = render(<InputText />);
    const input = content.getByLabelText("input_text");
    expect(input).toBeInTheDocument();
  });

  it("Should send name and value", () => {
    // https://testing-library.com/docs/example-input-event
    const setup = () => {
      const content = render(<InputText />);
      const inputText = content.getByLabelText("input_text");
      return { inputText, ...content };
    };

    const { inputText } = setup();
    fireEvent.change(inputText, {
      target: { name: "inputName", value: "inputValue" },
    });

    expect(inputText.name).toBe("inputName");
    expect(inputText.value).toBe("inputValue");
  });
});
