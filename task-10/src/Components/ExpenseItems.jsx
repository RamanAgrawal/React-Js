import React from "react";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseDate from "./ExpenseDate";
const ExpenseItems = (props) => {
  return (
    <div>
      <table border={"1"} cellSpacing={"0"}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ExpenseDate date={props.exDate} />
            </td>

            <td>
              <ExpenseAmount amount={props.amount} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseItems;
