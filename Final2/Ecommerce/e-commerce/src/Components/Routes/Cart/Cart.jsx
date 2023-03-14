import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

const Cart = () => {
  const Useremail = localStorage.getItem("email");
  const ChangesEMail = Useremail.replace("@", "").replace(".", "");
  const [cart, setCart] = useState([]);
  const [plus, setplus] = useState(0);
  // const crudId = "5de3de5b8b5e4824bda9454d7fcc1104";
  const getData = async () => {
    let data = [];
    try {
      let res = await axios.get(
        `https://e-commerce-1-55a40-default-rtdb.firebaseio.com/cart/${ChangesEMail}.json`
      );
      // setCart(res);
      for (const values of Object.values(res.data)) {
        data.push(values);
      }
      setCart(data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  console.log(cart);

  const total = cart.reduce((accumulator, curItem) => {
    return accumulator + curItem.quantity * curItem.price;
  }, 0);

  const handleRemove = async (id) => {
    let data = [];
    try {
      let res = await axios.delete(
        `https://e-commerce-1-55a40-default-rtdb.firebaseio.com/cart/${ChangesEMail}/data.json`
      );
      for (const values of Object.values(res.data)) {
        console.log(values);
      }
      getData();
      toast.success("Removed SUCCESSFULLY", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleInc = (i) => {
    setplus(plus + 1);
    setCart((data) =>
      data.map((items) =>
        i === items._id
          ? {
              ...items,
              quantity: items.quantity + 1,
            }
          : items
      )
    );
  };

  const handleDec = (i) => {
    setCart((data) =>
      data.map((items) =>
        i === items._id
          ? {
              ...items,
              quantity:
                items.quantity - 1 || items.quantity === 0
                  ? items.quantity - 1
                  : 1,
            }
          : items
      )
    );
    setplus(plus - 1);
  };

  const handleOrder = () => {
    alert(`Order Done Please pay ${total}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h3>Cart</h3>
      {total > 0 && <h1>Your Total Price : {total} Rs</h1>}
      {total === 0 && <p>Please Add Products</p>}
      {total > 0 && (
        <button onClick={handleOrder}>Order Now With {total}</button>
      )}

      <div className="cart">
        {cart.map((items, i) => {
          return (
            <div key={items.title}>
              <img src={items.title} alt="image" />
              <p>{items.image}</p>
              <p>Price : {items.price * items.quantity} Rs</p>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <button onClick={() => handleInc(items._id)}>+</button>
                <button onClick={() => handleDec(items._id)}>-</button>
              </div>
              <button onClick={() => handleRemove(items._id)}>Remove</button>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </>
  );
};

export default Cart;
