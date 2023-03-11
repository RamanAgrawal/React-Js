import React from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../Store/CartContext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const value = useContext(CartContext);
  const totalAmount = `$${value.totalAmount.toFixed(2)}`;
  const showBtn = value.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    value.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    value.addItems({ ...item, amount: 1 });
  };

  const length = value.items.length;
  console.log(length);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {value.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Model>
      {length > 0 ? (
        cartItems
      ) : (
        <p style={{ textAlign: "center", fontSize: "30px", color: "red" }}>
          No-Items
        </p>
      )}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={props.hideCarthandler}
          className={classes["button--alt"]}
        >
          Close
        </button>
        {showBtn && (
          <button
            className={classes.button}
            onClick={() => alert("Order Done")}
          >
            Order
          </button>
        )}
      </div>
    </Model>
  );
};

export default Cart;
