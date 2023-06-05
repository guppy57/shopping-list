import React from "react";
import { render, screen } from "@testing-library/react";
import AddItemForm from "../../components/AddItemForm";

const exampleShoppingList = [{
  id: "9h98y732bpodsfd",
  description: "Bread",
  quantity: 2,
  purchased: false,
}];

const addNewItem = (description, quanity) => {
  exampleShoppingList.push({
    id: "9h98y732bpodsfd",
    description: description,
    quantity: quanity,
    purchased: false,
  });
};

describe("AddItemForm - Smart Component", () => {
  beforeEach(() => {
    render(<AddItemForm addNewItem={addNewItem} />);
  });

  it("should have a description input", () => {
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
  });

  it("should have a quantity input", () => {
    expect(screen.getByLabelText("Qty")).toBeInTheDocument();
  });

  it("should have a submit button", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should handle form submit correctly", () => {
    const descriptionInput = screen.getByLabelText("Description");
    const quantityInput = screen.getByLabelText("Qty");
    const submitButton = screen.getByRole("button");
    expect(exampleShoppingList.length).toBe(1);
    descriptionInput.value = "Milk";
    quantityInput.value = 1;
    submitButton.click();
    expect(exampleShoppingList.length).toBe(2);
  });
});
