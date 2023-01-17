import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  it("should render Login component correctly", () => {
    render(<Login />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});