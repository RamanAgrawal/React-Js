import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const store = useSelector((state) => {
    return state.ui.cartIsvisible;
  });
  return (
    <Layout>
      {store && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
