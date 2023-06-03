import { Card } from "./card";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given the component PublicCard", () => {
  describe("When it is instantiated", () => {
    render(
      <Router>
        <Card
          item={{
            images: [{ href: "" }],
            id: 1,
            name: "",
            attributes: [{ id: 1, attribute: "" }],
            descriptions: [{ origin: "", language: "", description: "" }],
            levels: [{ id: 1, level: "" }],
            releaseDate: "",
            types: [{ type: "" }],
          }}
        ></Card>
      </Router>
    );
    test("Then it should should be in the document", () => {
      const element = screen.getByRole("listitem");
      expect(element).toBeInTheDocument();
    });
  });
});
