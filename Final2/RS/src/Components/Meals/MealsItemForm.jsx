import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealsItemForm.module.css";
const MealsItemForm = (props) => {
  const enterAmount = useRef();
  const [amount, setAmount] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const EnterAmount = enterAmount.current.value;
    const EnterAmountNumber = +enterAmount.current.value;
    if (EnterAmount.trim().length === 0 || EnterAmount < 1 || EnterAmount > 5) {
      setAmount(false);
      return;
    }
    props.onAddToCart(EnterAmountNumber);
  };
  return (
    <form className={classes.form}>
      <Input
        refF={enterAmount}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      {!amount && (
        <p style={{ color: "red", textDecoration: "underline" }}>
          Please Enter 1 to 5 Only
        </p>
      )}
    </form>
  );
};

export default MealsItemForm;
