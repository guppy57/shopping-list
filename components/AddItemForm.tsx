import React from "react";
import { useAtom } from "jotai";
import shoppingListStore from "../stores/shoppingList.store";
import generateId from "../lib/generateId";

export default function AddItemForm(): JSX.Element {
  const [shoppingList, setShoppingList] = useAtom(shoppingListStore);
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);

  const addNewItem = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (description === "") {
      return;
    }

    const newItem = {
      id: generateId(15),
      description,
      quantity: parseInt(quantity.toString()),
      purchased: false,
    };

    setShoppingList([...shoppingList, newItem]);
  };

  return (
    <div className={"mt-4 sticky"}>
      <div className={"flex flex-row"}>
        <div className={"flex-grow mr-2"}>
          <label className={"text-sm text-gray-500"} htmlFor="description">
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="block bg-green-50 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
            placeholder="What item do you need?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className={"text-sm text-gray-500"} htmlFor="quantity">
            Qty
          </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="block w-16 bg-green-50 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
            placeholder="3"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>
        <div className={"h-full self-end"}>
          <button
            className={
              "bg-green-500 hover:bg-green-400 text-white font-medium py-1.5 px-4 rounded ml-2 shadow-md"
            }
            type={"button"}
            onClick={addNewItem}
          >
            Add item
          </button>
        </div>
      </div>
    </div>
  );
}
