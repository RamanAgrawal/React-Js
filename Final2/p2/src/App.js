import { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCarthandler = () => {
    setCartShow(true);
  };

  const hideCarthandler = () => {
    setCartShow(false);
  };

  return (
    <Fragment>
      {cartShow && <Cart hideCarthandler={hideCarthandler} />}
      <Header showCarthandler={showCarthandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
