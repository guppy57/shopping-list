import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";

describe("Home - Dumb Page", () => {
  it("renders correct heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Guppy's Shopping List/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
