import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingList from "../../components/ShoppingList";

describe("ShoppingList - Dumb Component", () => {
  it("should have the correct number of list items", () => {
      render(<ShoppingList />);
      const listItems = screen.getAllByRole("checkbox");
      expect(listItems.length).toEqual(4);
  });

  it("should render correct type of children", () => {
    render(<ShoppingList />);
    const ItemsHolder = screen.getByTestId("items-holder");
    const listItems = ItemsHolder.children;
    expect(listItems[0]).toBeInstanceOf(HTMLDivElement);
  });
});
