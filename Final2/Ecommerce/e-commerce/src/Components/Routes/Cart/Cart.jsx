import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Cart.css";

const Cart = () => {
  const Useremail = localStorage.getItem("email");
  const ChangesEMail = Useremail.replace("@", "").replace(".", "");
  const [cart, setCart] = useState([]);
  const crudId = "961178f64a1f41c9b001935e70605175";

  const getData = async () => {
    try {
      let res = await axios.get(
        `https://crudcrud.com/api/${crudId}/${ChangesEMail}`
      );
      setCart(res.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h3>Cart</h3>
      <h1>
        Your Total Price :{" "}
        {cart.reduce((accumulator, curItem) => {
          return accumulator + curItem.quantity * curItem.price;
        }, 0)}{" "}
        Rs
      </h1>
      <div className="cart">
        {cart.map((items) => {
          return (
            <div key={items._id}>
              <img src={items.title} alt="image" />
              <p>{items.image}</p>
              <p>Price : {items.price} Rs</p>
              <button>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
