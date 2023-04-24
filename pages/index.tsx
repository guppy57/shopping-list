import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddItemForm from "../components/AddItemForm";
import ShoppingList from "../components/ShoppingList";

export default function Home(): JSX.Element {
  return (
    <div>
      <Layout>
        <Header />
        <AddItemForm />
        <ShoppingList />
      </Layout>
      <Footer />
    </div>
  );
}
