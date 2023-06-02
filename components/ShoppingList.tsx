import { useAtom } from "jotai";
import shoppingListStore from "../stores/shoppingList.store";
import ListItem from "./ListItem";

export default function ShoppingList(): JSX.Element {
  const [shoppingList] = useAtom(shoppingListStore);

  return (
    <div data-testid={"items-holder"}>
      {shoppingList.map((item, index) => (
        <ListItem
          key={item.id}
          indexId={index}
          description={item.description}
          quantity={item.quantity}
          purchased={item.purchased}
        />
      ))}
    </div>
  );
}
