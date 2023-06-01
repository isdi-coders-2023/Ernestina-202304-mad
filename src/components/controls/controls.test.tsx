import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Controls } from "./controls";
import { AppContext, ContextStructure } from "../../context/app.context";
import userEvent from "@testing-library/user-event";
import { useDigimon } from "../../hooks/use.digimon";

describe("Given a Controls component ", () => {
  describe("When it is instantiated", () => {
    const value: ContextStructure = {
      digimonContext: useDigimon,
    } as unknown as ContextStructure;

    render(
      <AppContext.Provider value={value}>
        <Controls></Controls>
      </AppContext.Provider>
    );

    const element = screen.getByText("GO BACK UP");
    const elements = screen.getAllByRole("button");

    test("Then it should be in the document", () => {
      const elements = screen.getAllByRole("button");
      expect(element).toBeInTheDocument();
      expect(elements[0]).toBeInTheDocument();
      expect(elements[1]).toBeInTheDocument();
    });

    test("Then, if the user click on the buttons, setCurrentPage function have to been called", () => {
      const mockedCurrentPage = jest.fn();
      userEvent.click(elements[0]);
      expect(mockedCurrentPage).toHaveBeenCalled();
    });
  });
});
