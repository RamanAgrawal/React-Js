import React, { useState } from "react";
import SingleExpenses from "./SingleExpenses";
import ExpensesForm from "./ExpensesForm";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseCart from "./ExpenseCart";

const ExpensesItems = () => {
  const [user, setUser] = useState([]);
  const [filterYear, setFilterYear] = useState("2020");
  const filterchanged = (seleteYear) => {
    setFilterYear(seleteYear);
  };

  return (
    <>
      <ExpenseCart />
      <ExpensesForm user={user} setUser={setUser} />
      <ExpensesFilter selected={filterYear} onchangeFilter={filterchanged} />
      <SingleExpenses user={user} setUser={setUser} />
    </>
  );
};

export default ExpensesItems;
