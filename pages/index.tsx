import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddItemForm from "../components/AddItemForm";
import ShoppingList from "../components/ShoppingList";
import { useAtom } from "jotai";
import shoppingListStore from "../stores/shoppingList.store";
import generateId from "../lib/generateId";

export default function Home(): JSX.Element {
  const [shoppingList, setShoppingList] = useAtom(shoppingListStore);

  const addNewItem = (description: string, quantity: number) => {
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
    <div>
      <Layout>
        <Header />
        <AddItemForm addNewItem={addNewItem} />
        <ShoppingList />
      </Layout>
      <Footer />
    </div>
  );
}
