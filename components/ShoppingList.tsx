import { useAtom } from "jotai";
import shoppingListStore from "../stores/shoppingList.store";
import ListItem from "./ListItem";

export default function ShoppingList(): JSX.Element {
  const [shoppingList, setShoppingList] = useAtom(shoppingListStore);

  const handleCheckbox = (e: any, indexId: number) => {
    const checked = e.target.checked;
    const newList = shoppingList.map((item, index) => {
      if (index === indexId) {
        item.purchased = checked;
      }
      return item;
    });
    setShoppingList(newList);
  };

  return (
    <div data-testid={"items-holder"}>
      {shoppingList.map((item, index) => (
        <ListItem
          key={item.id}
          indexId={index}
          description={item.description}
          quantity={item.quantity}
          purchased={item.purchased}
          handleCheckbox={handleCheckbox}
        />
      ))}
    </div>
  );
}
