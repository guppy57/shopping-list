import React from "react";
import { render, screen } from "@testing-library/react";
import ListItem from "../../components/ListItem";

const exampleListItem = {
  id: "9h98y732bpodsfd",
  description: "Bread",
  quantity: 2,
  purchased: false,
}

describe("List Item - Dumb Component", () => {
  it("should have a checkbox", () => {
    render(<ListItem
      indexId={exampleListItem.id}
      description={exampleListItem.description}
      quantity={exampleListItem.quantity}
      purchased={exampleListItem.purchased}
    />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should fail from incorrect prop types", () => {});

  it("should render props correctly", () => {
    render(<ListItem
      indexId={exampleListItem.id}
      description={exampleListItem.description}
      quantity={exampleListItem.quantity}
      purchased={exampleListItem.purchased}
    />);
    expect(screen.getByText(exampleListItem.description)).toBeInTheDocument();
    expect(screen.getByText(exampleListItem.quantity)).toBeInTheDocument();
  });

  it("should handle checkbox click correctly", () => {});
});
