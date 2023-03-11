import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isHide, setHide] = useState(false);
  const SaveDataUser = (data) => {
    const ExpenseDate = {
      ...data,
      id: Math.random().toString(),
    };
    props.addExpense(ExpenseDate);
    setHide(false);
  };

  const hiding = () => {
    setHide(true);
  };
  const Stophide = () => {
    setHide(false);
  };
  return (
    <div className="Form-Parent">
      {!isHide && <button className="AddExpense" onClick={hiding}>Add New Expense</button>}
      {isHide && <ExpenseForm onsave={SaveDataUser} Stophide={Stophide} />}
    </div>
  );
};

export default NewExpense;
