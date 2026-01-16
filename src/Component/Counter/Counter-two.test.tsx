import { render, screen } from "@testing-library/react";
import CounterTwo from "./Counter-two";
import userEvent from "@testing-library/user-event";

describe("Counter two", () => {
  test("counter 2 render properly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter 2 component");
    expect(textElement).toBeInTheDocument();
  });

  test("handler are callled", () => {
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    );
    const elementIncrementRole = screen.getByRole("button", {
      name: "Increment",
    });
    const elementDecrementRole = screen.getByRole("button", {
      name: "Decrement",
    });
    userEvent.click(elementIncrementRole);
    userEvent.click(elementDecrementRole);
    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});
