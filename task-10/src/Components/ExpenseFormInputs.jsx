import React, { useState } from "react";

const ExpenseFormInputs = () => {
  const [title, setTitle] = useState("");
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAmountChange = (e) => {
    setamount(e.target.value);
  };
  const handleDateChange = (e) => {
    setdate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, amount, date);
  };

  return (
    <form>
      <div>
        <label htmlFor="">Date : </label>
        <input type="date" name="date" onChange={handleDateChange} />
      </div>
      <div>
        <label htmlFor="">Add Title : </label>
        <input
          name="title"
          type="text"
          placeholder="Add Title"
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="">Add Amount: </label>
        <input
          name="amount"
          type="text"
          placeholder="Add Amount"
          onChange={handleAmountChange}
        />
      </div>
      <input
        style={{
          padding: "4px",
          fontSize: "16px",
          background: "red",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
        }}
        type="submit"
        value={"Submit"}
        onClick={handleSubmit}
      />
    </form>
  );
};

export default ExpenseFormInputs;
