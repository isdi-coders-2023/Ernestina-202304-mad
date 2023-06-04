import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Controls } from "./controls";
import { AppContext, ContextStructure } from "../../context/app.context";
import userEvent from "@testing-library/user-event";

describe("Given a Controls component ", () => {
  const value: ContextStructure = {
    digimonContext: {
      setCurrentPage: jest.fn(),
      currentPage: 1,
    },
  } as unknown as ContextStructure;
  describe("When it is instantiated", () => {
    let element: HTMLElement;
    let elements: HTMLElement[];
    beforeEach(() => {
      render(
        <AppContext.Provider value={value}>
          <Controls></Controls>
        </AppContext.Provider>
      );
      element = screen.getByText("GO BACK UP");
      elements = screen.getAllByRole("button");
    });

    test("Then it should be in the document", () => {
      expect(element).toBeInTheDocument();
      expect(elements[0]).toBeInTheDocument();
      expect(elements[1]).toBeInTheDocument();
    });

    test("Then, if the user click on the buttons, setCurrentPage function have to been called", async () => {
      await userEvent.click(elements[0]);
      expect(value.digimonContext.setCurrentPage).toHaveBeenCalled();
      await userEvent.click(elements[1]);
      expect(value.digimonContext.setCurrentPage).toHaveBeenCalled();
    });
  });
});

describe("Given a Controls component ", () => {
  const value: ContextStructure = {
    digimonContext: {
      setCurrentPage: jest.fn(),
      currentPage: 0,
    },
  } as unknown as ContextStructure;
  describe("When it is instantiated at page 0", () => {
    let elements: HTMLElement[];
    beforeEach(() => {
      render(
        <AppContext.Provider value={value}>
          <Controls></Controls>
        </AppContext.Provider>
      );
      elements = screen.getAllByRole("button");
    });
    test("Then, if the user click on the buttons, setCurrentPage function have to been called", async () => {
      await userEvent.click(elements[0]);
      expect(value.digimonContext.setCurrentPage).not.toHaveBeenCalled();
      await userEvent.click(elements[1]);
      expect(value.digimonContext.setCurrentPage).toHaveBeenCalled();
    });
  });
});

describe("Given a Controls component ", () => {
  const value: ContextStructure = {
    digimonContext: {
      setCurrentPage: jest.fn(),
      currentPage: 70,
    },
  } as unknown as ContextStructure;
  describe("When it is instantiated at page 70", () => {
    let elements: HTMLElement[];
    beforeEach(() => {
      render(
        <AppContext.Provider value={value}>
          <Controls></Controls>
        </AppContext.Provider>
      );
      elements = screen.getAllByRole("button");
    });
    test("Then, if the user click on the buttons, setCurrentPage function have to been called", async () => {
      await userEvent.click(elements[0]);
      expect(value.digimonContext.setCurrentPage).toHaveBeenCalled();
      await userEvent.click(elements[1]);
      expect(value.digimonContext.setCurrentPage).toHaveBeenCalled();
    });
  });
});
