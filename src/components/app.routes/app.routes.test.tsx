import { AppRoutes } from "./app.routes";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

const MockComponent = jest.fn().mockReturnValue(<h1>Home</h1>);
jest.mock("../home/home", () => MockComponent);

describe("Given the AppRoutes component", () => {
  describe("When it is instantiated with a route", () => {
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={[""]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("Home");
    });

    test("Then it should returns...", () => {
      expect(MockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
});
