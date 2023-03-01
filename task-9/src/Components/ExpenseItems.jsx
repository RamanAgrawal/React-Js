import React from "react";
const ExpenseItems = (props) => {
  return (
    <div>
      <h1>Expense</h1>
      <p>
        Date : {props.exDate}-------------------Title : {props.title}
        -------------- Amount : {props.amount}
      </p>
    </div>
  );
};

export default ExpenseItems;
