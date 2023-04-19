import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import Header from "../components/Header";
import AddItemForm from "../components/AddItemForm";
import ShoppingList from "../components/ShoppingList";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Header />
      <AddItemForm />
      <ShoppingList />
    </Layout>
  );
}
