import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet text be present in the doccument", () => {
  render(<Greet />);
  const elementText = screen.getByText("Hello");
});

test("render greet with Props", () => {
  render(<Greet name={"Shiva"} />);
  const element = screen.getByText(/Hello Shiva/);
  expect(element).toBeInTheDocument();
});
