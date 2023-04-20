import { useAtom } from "jotai";
import shoppingListAtom from "../stores/shoppingList.store";

export default function ListItem({
  indexId,
  description,
  quantity,
  purchased,
}) {
  const [shoppingList, setShoppingList] = useAtom(shoppingListAtom);
  const handleCheckbox = (e) => {
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
    <div
      className={
        "flex flex-row bg-green-50 border border-gray-300 my-3 p-4 rounded-lg hover:shadow-lg"
      }
    >
      <div className={"flex-grow"}>
        <div className={"flex flex-row items-center"}>
          <span className={"text-lg font-bold mr-2"}>
            <span
              className={
                purchased ? "line-through text-gray-500 decoration-2" : ""
              }
            >
              {description}
            </span>
          </span>
          <p
            className={
              "text-xs text-green-700 py-1 px-2 rounded-full bg-green-200 h-full"
            }
          >
            {quantity}
          </p>
        </div>
      </div>
      <div className={"h-full items-center"}>
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-green-600 hover:cursor-pointer"
          checked={purchased}
          onChange={handleCheckbox}
        />
      </div>
    </div>
  );
}
