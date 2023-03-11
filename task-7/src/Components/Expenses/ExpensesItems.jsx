import React, { useState } from "react";
import SingleExpenses from "./SingleExpenses";
import ExpensesForm from "./ExpensesForm";

const ExpensesItems = () => {
  const [user, setUser] = useState([]);
  return (
    <>
      <ExpensesForm user={user} setUser={setUser} />
      <SingleExpenses user={user} setUser={setUser} />
    </>
  );
};

export default ExpensesItems;
