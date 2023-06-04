import { render, screen } from "@testing-library/react";
import Error from "./error";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given a Footer component", () => {
  describe("When it is intantiated", () => {
    render(
      <Router>
        <Error></Error>
      </Router>
    );

    test("Then it should be in the document", () => {
      const element = screen.getAllByRole("heading");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
