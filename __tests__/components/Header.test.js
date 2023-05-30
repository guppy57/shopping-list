import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("Header - Dumb Component", () => {
  it("renders correct headline", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", {
      name: /Guppy's Shopping List/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("has correct profile picture", () => {
    render(<Header />);
    const profilePicture = screen.getByAltText("Guppy profile picture");
    expect(profilePicture.src).toContain('guppy.jpg');
  });

  it("should have correct link", () => {
    render(<Header />);
    const link = screen.getByRole("link");
    expect(link.href).toBe("https://my.kreativeusa.com/");
  })
});
