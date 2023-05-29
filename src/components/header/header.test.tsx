import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./header";

describe("Given a Header component", () => {
  describe("When it is intantiated", () => {
    const title = "TEST TITLE";
    const subtitle = "TEST SUBTITLE";
    beforeEach(() => {
      render(<Header title={title} subtitle={subtitle}></Header>);
    });

    test("Then it should be in the document", () => {
      const element = screen.getAllByRole("heading");
      expect(element[0]).toBeInTheDocument();
      expect(element[1]).toBeInTheDocument();
    });
    test("Then it should display props values", () => {
      const elementH1 = screen.getByText(title);
      const elementH2 = screen.getByText(subtitle);

      expect(elementH1).toBeInTheDocument;
      expect(elementH2).toBeInTheDocument;
    });
  });
});
