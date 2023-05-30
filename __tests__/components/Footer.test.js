import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer - Dumb Component", () => {
  it("should have correct title text", () => {
    render(<Footer/>);
    const title = screen.getByText("My Shopping List");
    expect(title).toBeInTheDocument();
  });

  it("should be span for title text", () => {
    render(<Footer/>);
    const title = screen.getByText("My Shopping List");
    expect(title).toBeInstanceOf(HTMLSpanElement)
  });

  it("should have correct number of navigation links", () => {
    render(<Footer/>);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3);
  });

  it("should have correct navigation links", () => {
    const expectedLinks = [
      {
        title: "Discover Kreative",
        href: "https://kreativeusa.com/",
      },
      {
        title: "Meet Guppy",
        href: "https://guppy57.com/",
      },
      {
        title: "View on GitHub",
        href: "https://github.com/guppy57/shopping-list.git",
      }
    ];

    render(<Footer/>);
    const links = screen.getAllByRole("link");

    const recievedLinks = [];

    links.forEach((link) => {
      const title = link.title;
      const href = link.href;
      recievedLinks.push({ title, href });
    });
  });
});
