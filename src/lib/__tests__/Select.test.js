import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Select from "../components/Select";

describe("Test for Select", () => {
  it("it should be render a label", () => {
    const tabs = [];
    render(<Select tabs={tabs} idName="name" />);
    const label = screen.getByTestId("select_label");
    expect(label).toBeInTheDocument();
  });
});
