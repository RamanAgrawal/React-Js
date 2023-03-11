import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAMount = (e) => {
    setAmount(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const Inputs = {
      title,
      amount,
      date: new Date(date),
    };

    props.onsave(Inputs);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form>
      <div className="title_AMount">
        <div>
          <label>Title</label>
          <input value={title} type="text" onChange={handleTitle} />
        </div>
        <div>
          <label>Amount</label>
          <input value={amount} type="text" onChange={handleAMount} />
        </div>
      </div>
      <div className="Date">
        <label>Date</label>
        <input value={date} type="date" onChange={handleDate} />
      </div>
      <div>
        <button className="Add" type="submit" onClick={handleSubmit}>
          ADD EXpense
        </button>
        <button className="cancel" type="button" onClick={props.Stophide}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
