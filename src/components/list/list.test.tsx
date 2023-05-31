import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Digimon } from "../../models/digimon";
import { ContextStructure, AppContext } from "../../context/app.context";
import { List } from "./list";

describe("Given List component", () => {
  describe("When it is instantiated", () => {
    const digimon = [
      { id: 69, name: "Venecomon" },
      { id: 420, name: "Sifrinomon" },
    ] as Digimon[];

    const value: ContextStructure = {
      digimonContext: {
        digimon,
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <AppContext.Provider value={value}>
          <List></List>
        </AppContext.Provider>
      );
    });

    test("Then it should contain an <li> element", () => {
      const element = screen.getByRole("list");
      expect(element).toBeInTheDocument();
    });
  });
});
