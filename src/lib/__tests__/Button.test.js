import React from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/Button";

describe("Test Button component", () => {
  it("render a button", () => {
    render(<Button />);
    /* https://testing-library.com/docs/queries/byrole/ */
    const button = screen.getByRole("button", { name: "button" });
    expect(button).toBeInTheDocument();
  });
});
