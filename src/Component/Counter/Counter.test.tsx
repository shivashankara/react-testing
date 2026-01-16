import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  render(<Counter />);
  test("button render correctly", () => {
    const headingText = screen.getByRole("heading");
    expect(headingText).toBeInTheDocument();
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButtonElement).toBeInTheDocument();
  });

  test("render initail conter 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });
  test("render count 1 after clicking the incement button", async () => {
    render(<Counter />);
    const countButton = screen.getByRole("button", { name: "Increment" });
    await userEvent.click(countButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });
  test("render count 2 after clicking the incement button twice", async () => {
    render(<Counter />);
    const countButton = screen.getByRole("button", { name: "Increment" });
    await userEvent.click(countButton);
    await userEvent.click(countButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });
});
