import { useAtom } from "jotai";
import shoppingListStore from "../stores/shoppingList.store";
import ListItem from "./ListItem";

export default function ShoppingList(): JSX.Element {
  const [shoppingList] = useAtom(shoppingListStore);

  return (
    <div>
      {shoppingList.map((item) => (
        <div key={item.id}>
          <ListItem description={item.description} quantity={item.quantity} />
        </div>
      ))}
    </div>
  );
}
