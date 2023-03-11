import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Cart.css";
const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = () => {
  return (
    <>
      <h3>Cart</h3>
      <div className="cart">
        {cartElements.map((el) => {
          return (
            <div key={el.title}>
              <Image src={el.imageUrl} alt="image-alt" />
              <h3>{el.title}</h3>
              <p>Price : {el.price} Rs</p>
              <p>Quantity : {el.quantity}</p>
              <Button variant="primary">REMOVE</Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
