import React, { useContext } from "react";
import { CartContext } from "../../Store/CartContext";
import MealsItemForm from "./MealsItemForm";
import classes from "./MealsItems.module.css";
const MealsItems = (props) => {
  const value = useContext(CartContext);
  const addToCartHandler = (data) => {
    value.addItems({
      id: props.id,
      name: props.name,
      amount: data,
      price: props.price,
    });
    console.log(data);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealsItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItems;
