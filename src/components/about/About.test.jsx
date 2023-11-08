import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  it("renders the title 'About Me'", () => {
    render(<About />);
    const titleElement = screen.getByText("About Me");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the soft skills section", () => {
    render(<About />);
    const softSkillsElement = screen.getByText("Soft Skills");
    expect(softSkillsElement).toBeInTheDocument();
    const softSkillsList = screen.getAllByRole("list")[0];
    expect(softSkillsList).toBeInTheDocument();
    const softSkillsItems = screen.getAllByRole("listitem", {
      container: softSkillsList,
    }).filter(item => item.closest('.a-soft'));
    expect(softSkillsItems.length).toBe(10);
  });

  it("renders the hard skills section", () => {
    render(<About />);
    const hardSkillsElement = screen.getByText("Hard Skills");
    expect(hardSkillsElement).toBeInTheDocument();
    const hardSkillsList = screen.getAllByRole("list")[1];
    console.log(hardSkillsList);
    expect(hardSkillsList).toBeInTheDocument();
    const hardSkillsItems = screen.getAllByRole("listitem", {
      container: hardSkillsList,
    }).filter(item => item.closest('.a-hard'));
    expect(hardSkillsItems.length).toBe(8);
  });

  it("renders the computer image", () => {
    render(<About />);
    const computerImage = screen.getByAltText("computer");
    expect(computerImage).toBeInTheDocument();
  });
});