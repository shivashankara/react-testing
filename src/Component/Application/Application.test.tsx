import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);
    const inputElement = screen.getByPlaceholderText("Fullname");
    expect(inputElement).toBeInTheDocument();
  });
 
});
