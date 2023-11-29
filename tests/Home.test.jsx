import { render, screen } from "@testing-library/react";
import Home from "../src/pages/home/Home";

describe("Home component", () => {
  it("renders the name 'Igor Silva'", () => {
    render(<Home />);
    const nameElement = screen.getByText("Igor Silva");
    expect(nameElement).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Home />);
    const descElement = screen.getByText("home_description");
    expect(descElement).toBeInTheDocument();
  });
});