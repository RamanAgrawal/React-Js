import axios from "axios";
import React, { useEffect } from "react";

const Cart = () => {
  const getData = async () => {
    try {
      let res = await axios.get(
        "https://cart-d0ae1-default-rtdb.firebaseio.com/Cart.json"
      );
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>cart</div>;
};

export default Cart;
