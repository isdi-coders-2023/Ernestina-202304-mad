import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import '@testing-library/jest-dom'

describe("Given a Footer component", () => {
  describe("When it is intantiated", () => {

    render(<Footer></Footer>);

    test("Then it should be in the document", () => {
      const element = screen.getByRole("contentinfo");
      expect(element).toBeInTheDocument();
    });
  })
})
