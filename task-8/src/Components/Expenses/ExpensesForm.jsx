import React, { useRef, useState } from "react";

const ExpensesForm = (props) => {
  const hide = useRef();
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
    hide.current.style.display === "flex"
      ? (hide.current.style.display = "none")
      : (hide.current.style.display = "flex");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "0px" }}>Adding Expenses</h1>
      <form ref={hide}>
        <div>
          <label htmlFor="">Date : </label>
          <input
            type="date"
            value={form.date}
            name="date"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Add Title : </label>
          <input
            name="title"
            type="text"
            value={form.title}
            placeholder="Add Title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Add Amount: </label>
          <input
            value={form.amount}
            name="amount"
            type="text"
            placeholder="Add Amount"
            onChange={handleInputChange}
          />
        </div>
      </form>
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
    </div>
  );
};

export default ExpensesForm;
