import axios from "axios";
import React, { useEffect, useState } from "react";

const ExpenseForm = () => {
  const [amount, setAmount] = useState("");
  const [des, setDes] = useState("");
  const [cat, setCat] = useState("");
  const [data, setData] = useState([]);
  // console.log("data:", data);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleDes = (e) => {
    setDes(e.target.value);
  };

  const handleCat = (e) => {
    setCat(e.target.value);
  };

  const handleAddExpense = async (e) => {
    e.preventDefault();
    const obj = {
      amount,
      des,
      cat,
    };
    try {
      let res = await axios.post(
        "https://expensetraker-93642-default-rtdb.firebaseio.com/expenses.json",
        obj
      );
    } catch (error) {
      console.log("error:", error);
    }
  };

  const getData = async () => {
    try {
      let res = await axios.get(
        "https://expensetraker-93642-default-rtdb.firebaseio.com/expenses.json"
      );
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
          <option value="other">Other</option>
        </select>
        <input onClick={handleAddExpense} type="submit" value={"ADD"} />
      </form>
      <div>
        {/* {data.map((items) => {
          return (
            <div key={items.amount}>
              <h1>{items.amount}</h1>
              <p>{items.des}</p>
              <p>{items.cat}</p>
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default ExpenseForm;
