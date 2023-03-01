import React from "react";
const ExpenseItems = () => {
  const ExDate = new Date(2023, 3, 1);
  const LocationOfExpenditure = "Cloths";
  const Examount = "1500 Rs";
  return (
    <div>
      <h1>Expense-Items</h1>
      <table border={"1"} cellSpacing={"0"}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ExDate.toDateString()}</td>
            <td>{LocationOfExpenditure}</td>
            <td>{Examount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseItems;
