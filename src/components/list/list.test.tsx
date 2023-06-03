import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Digimon } from "../../models/digimon";
import { ContextStructure, AppContext } from "../../context/app.context";
import { List } from "./list";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given a List component", () => {
  describe("When it is instantiated", () => {
    const digimon = [
      { images: [{ href: "adsasdasd" }], name: "Venecomon", id: 69 },
      { images: [{ href: "asdasdasd" }], id: 420, name: "Sifrinomon" },
    ] as Digimon[];

    const value: ContextStructure = {
      digimonContext: {
        digimon,
      },
    } as unknown as ContextStructure;

    render(
      <Router>
        <AppContext.Provider value={value}>
          <List></List>
        </AppContext.Provider>
      </Router>
    );

    test("Then it should be in the document", () => {
      const element = screen.getByRole("list");
      expect(element).toBeInTheDocument();
    });
  });
});
