import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const getData = async () => {
    let data = [];
    try {
      let res = await axios.get(
        "https://cart-d0ae1-default-rtdb.firebaseio.com/Cart.json"
      );
      for (let key in res.data) {
        data.push(res.data[key]);
      }
      setCart(data);
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {cart.map((el) => {
        return (
          <div
            key={el.name}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <h4>{el.name}</h4>
            <p>{el.des}</p>
            <p>{el.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
