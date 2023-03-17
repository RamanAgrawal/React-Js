import React, { useState } from "react";

const ExpenseForm = () => {
  const [amount, setAmount] = useState("");
  const [des, setDes] = useState("");
  const [cat, setCat] = useState("");
  const [data, setData] = useState([]);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleDes = (e) => {
    setDes(e.target.value);
  };

  const handleCat = (e) => {
    setCat(e.target.value);
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    const obj = {
      amount,
      des,
      cat,
    };
    setData(obj);
    console.log(data);
  };

  return (
    <>
      <h1>Adding-Expense</h1>
      <form>
        <input onChange={handleAmount} type="text" placeholder="Enter Amount" />
        <input
          onChange={handleDes}
          type="text"
          placeholder="Enter Description"
        />
        <select onChange={handleCat}>
          <option>Category</option>
          <option value="Food">Food</option>
          <option value="Petrol">Petrol</option>
          <option value="Salary">Salary</option>
        </select>
        <input onClick={handleAddExpense} type="submit" value={"ADD"} />
      </form>
      <div>
        {addExpense.map((items) => {
          return (
            <div key={items.amount}>
              <h1>{items.amount}</h1>
              <p>{items.des}</p>
              <p>{items.cat}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ExpenseForm;
