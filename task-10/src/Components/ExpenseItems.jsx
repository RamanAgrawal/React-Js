import React from "react";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseDate from "./ExpenseDate";
// import { useRef } from "react";
const ExpenseItems = (props) => {
  // const Delete = useRef();
  // const handleClick = (e) => {
  //   Delete.current(e.target.parentNode.remove());
  // };

  const handleClick = (e) => {
    e.target.parentNode.remove();
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
              <ExpenseAmount amount={props.amount} />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={handleClick}
        style={{
          display: "block",
          margin: "auto",
          padding: "4px",
          fontSize: "16px",
          background: "red",
          border: "none",
          cursor: "pointer",
        }}
      >
        Delete Expense
      </button>
    </div>
  );
};

export default ExpenseItems;
