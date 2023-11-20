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
    const descElement = screen.getByText(
      "Based in São Paulo, Brazil and loves to create things for the web."
    );
    expect(descElement).toBeInTheDocument();
  });
});