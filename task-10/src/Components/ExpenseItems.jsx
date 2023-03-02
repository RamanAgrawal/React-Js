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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          margin: "1% 0px",
        }}
      >
        <button
          onClick={handleClick}
          style={{
            padding: "4px",
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
            padding: "4px",
            fontSize: "16px",
            background: "red",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleEdit}
        >
          Edit Price
        </button>
      </div>
    </div>
  );
};

export default ExpenseItems;
