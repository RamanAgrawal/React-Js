import React from "react";
const ExpenseItems = () => {
  return (
    <div>
      <h1>Expense-Items</h1>
      <table border={"1"} cellSpacing={"0"}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Food</td>
            <td>10 Rs</td>
          </tr>
          <tr>
            <td>Petrol</td>
            <td>100 Rs</td>
          </tr>
          <tr>
            <td>Movies</td>
            <td>200 Rs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseItems;
