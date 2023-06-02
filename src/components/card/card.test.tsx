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
            id: 0,
            name: "",
            url: "",
            image: "",
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
