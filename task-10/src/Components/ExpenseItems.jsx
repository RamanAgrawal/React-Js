import React from "react";
import { useState } from "react";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseDate from "./ExpenseDate";
// import { useRef } from "react";
const ExpenseItems = (props) => {
  // const Delete = useRef();
  // const handleClick = (e) => {
  //   Delete.current(e.target.parentNode.remove());
  // };

  const [price, setPrice] = useState(props.amount);

  const handleClick = (e) => {
    e.target.parentNode.remove();
  };

  const handleEdit = () => {
    setPrice("100$");
    // console.log(price);
  };

  return (
    <div>
      {/* <table ref={Delete} border={"1"} cellSpacing={"0"}> */}
      <table border={"1"} cellSpacing={"0"}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ExpenseDate date={props.exDate} />
            </td>
            <td>{props.title}</td>
            <td>
              <ExpenseAmount amount={price} />
            </td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={handleClick}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "8px 11px",
          color: "white",
          fontSize: "16px",
          background: "red",
          border: "none",
          cursor: "pointer",
        }}
      >
        Delete Expense
      </button>
      <button
        style={{
          display: "block",
          margin: "auto",
          padding: "8px 34px",
          fontSize: "16px",
          color: "white",
          background: "red",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleEdit}
      >
        Edit Price
      </button>
    </div>
  );
};

export default ExpenseItems;
