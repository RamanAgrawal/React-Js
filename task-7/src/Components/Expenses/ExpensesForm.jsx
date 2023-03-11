import React, { useState } from "react";

const ExpensesForm = (props) => {
  const [form, setForm] = useState({
    date: "",
    title: "",
    amount: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUser([...props.user, form]);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "0px" }}>Adding Expenses</h1>
      <form>
        <div>
          <label htmlFor="">Date : </label>
          <input type="date" name="date" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Add Title : </label>
          <input
            name="title"
            type="text"
            placeholder="Add Title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Add Amount: </label>
          <input
            name="amount"
            type="text"
            placeholder="Add Amount"
            onChange={handleInputChange}
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
    </div>
  );
};

export default ExpensesForm;
