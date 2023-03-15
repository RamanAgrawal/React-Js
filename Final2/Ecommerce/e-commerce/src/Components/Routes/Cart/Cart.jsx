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
  const getData = async () => {
    let data = [];
    class Data {
      constructor(key, title, image, price, quantity) {
        this.key = key;
        this.title = title;
        this.image = image;
        this.price = price;
        this.quantity = quantity;
      }
    }
    try {
      let res = await axios.get(
        `https://e-commerce-1-55a40-default-rtdb.firebaseio.com/cart/${ChangesEMail}.json`
      );
      for (let key in res.data) {
        let obj = new Data(
          key,
          res.data[key].title,
          res.data[key].image,
          res.data[key].price,
          1
        );
        data.push(obj);
      }
      setCart(data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const total = cart.reduce((accumulator, curItem) => {
    return accumulator + curItem.quantity * curItem.price;
  }, 0);

  const handleRemove = async (id) => {
    console.log(id);
    try {
      let res = await axios.delete(
        `https://e-commerce-1-55a40-default-rtdb.firebaseio.com/cart/${ChangesEMail}/${id}.json`
      );
      console.log(res);
      toast.success("Product Removed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getData();
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleInc = (i) => {
    console.log(i);
    setplus(plus + 1);
    setCart((data) =>
      data.map((items) =>
        i === items.title
          ? {
              ...items,
              quantity: items.quantity + 1,
            }
          : items
      )
    );
  };

  const handleDec = (i) => {
    console.log(i);
    setCart((data) =>
      data.map((items) =>
        i === items.title
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
        {cart.map((items) => {
          return (
            <div key={items.key}>
              <img src={items.title}></img>
              <p>{items.image}</p>
              <p>{items.price * items.quantity}</p>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <button onClick={() => handleInc(items.title)}>+</button>
                <button onClick={() => handleDec(items.title)}>-</button>
              </div>
              <button onClick={() => handleRemove(items.key)}>Remove</button>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </>
  );
};

export default Cart;
