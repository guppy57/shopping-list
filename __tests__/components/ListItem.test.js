import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import ListItem from "../../components/ListItem";

const exampleListItem = {
  id: "9h98y732bpodsfd",
  description: "Bread",
  quantity: 2,
  purchased: false,
};

const handleTestCheckbox = (event, indexId) => {
  exampleListItem.purchased = event.target.checked;
};

describe("List Item - Dumb Component", () => {
  beforeEach(() => {
    render(<ListItem
      indexId={0}
      description={exampleListItem.description}
      quantity={exampleListItem.quantity}
      purchased={exampleListItem.purchased}
      handleCheckbox={handleTestCheckbox}
    />);
  });

  it("should have a checkbox", () => {
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should render props correctly", () => {
    expect(screen.getByText(exampleListItem.description)).toBeInTheDocument();
    expect(screen.getByText(exampleListItem.quantity)).toBeInTheDocument();
  });

  it("should handle checkbox click correctly", () => {
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(exampleListItem.purchased).toBe(true);
  });
});
