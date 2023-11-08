import { render, screen } from "@testing-library/react";
import Intro from "./Intro";

describe("Intro component", () => {
  it("renders the name 'Igor Silva'", () => {
    render(<Intro />);
    const nameElement = screen.getByText("Igor Silva");
    expect(nameElement).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Intro />);
    const descElement = screen.getByText(
      "As a Software Engineer, my goal is to provide quality software with easy usability. I have been working in the field for 4 years and have a degree in Systems Analysis and Development."
    );
    expect(descElement).toBeInTheDocument();
  });

  it("renders all the logos", () => {
    render(<Intro />);
    const htmlLogo = screen.getByAltText("HTML Logo");
    const cssLogo = screen.getByAltText("CSS Logo");
    const jsLogo = screen.getByAltText("JavaScript Logo");
    const nodeLogo = screen.getByAltText("Node.js Logo");
    const reactLogo = screen.getByAltText("React Logo");

    expect(htmlLogo).toBeInTheDocument();
    expect(cssLogo).toBeInTheDocument();
    expect(jsLogo).toBeInTheDocument();
    expect(nodeLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });
});