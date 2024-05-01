import { render, screen } from "@testing-library/react";
import About from "../src/pages/about/About";

describe("About component", () => {
  it("renders the title", () => {
    render(<About />);
    const titleElement = screen.getByText("about_title");
    expect(titleElement).toBeInTheDocument();
  });
});