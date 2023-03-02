import React from "react";
import ExpenseFormInputs from "./ExpenseFormInputs";

const ExpenseForm = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "0px" }}>Adding Expenses</h1>
      <ExpenseFormInputs />
    </div>
  );
};

export default ExpenseForm;
