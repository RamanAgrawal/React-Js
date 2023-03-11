import { useContext, useState } from "react";
import "./App.css";
import DisplayItems from "./Components/Candy/DisplayItems";
import Header from "./Components/Header/Header";
import { CartContext } from "./Components/Store/CartContext";

function App() {
  const [items, setItems] = useState([]);
  const handleSetItems = (data) => {
    console.log("data");
    setItems((prev) => {
      return [data, ...prev];
    });
  };

  const value = useContext(CartContext);
  const handleCart = (id, name, description, price, amount) => {
    value.addItems({
      id,
      name,
      description,
      price,
      amount,
    });
  };

  return (
    <div className="App">
      <Header />
      <DisplayItems
        handleCart={handleCart}
        handleSetItems={handleSetItems}
        items={items}
      />
    </div>
  );
}

export default App;
