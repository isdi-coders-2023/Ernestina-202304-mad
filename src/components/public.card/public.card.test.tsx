import { PublicCard } from "./public.card";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Given the component PublicCard", () => {
  describe("When it is instantiated", () => {
    render(
      <PublicCard
        item={{
          id: 0,
          name: "",
          url: "",
          image: "",
        }}
      ></PublicCard>
    );
    test("Then it should should be in the document", () => {
      const element = screen.getByRole("listitem");
      expect(element).toBeInTheDocument();
    });
  });
});
