import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("Users", () => {
  test("render correctly", () => {
    render(<Users />);
    const headingElement = screen.getByRole("heading", { name: "Users List" });
    expect(headingElement).toBeInTheDocument();
  });
});
