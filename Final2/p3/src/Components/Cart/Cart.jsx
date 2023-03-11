import React, { useContext } from "react";
import { CartContext } from "../Store/CartContext";

const Cart = () => {
  const value = useContext(CartContext);
  console.log(value);
  const length = value.items.length;
  return (
    <div>
      <button>Cart {length}</button>
    </div>
  );
};

export default Cart;
