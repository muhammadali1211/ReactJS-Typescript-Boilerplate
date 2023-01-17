import { render, screen } from "@testing-library/react";
import Signup from "./Signup";

describe("Register component", () => {
  it("should render Register component correctly", () => {
    render(<Signup />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});