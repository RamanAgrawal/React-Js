import React, { useState } from "react";
import ExpensesChart from "./Chart/ExpensesChart";
import ExpenseDate from "./ExpenseDate";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseItems = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const filterhandle = (seletedYear) => {
    setFilterYear(seletedYear);
  };
  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className="All-items">
      <ExpenseFilter selected={filterYear} onchangeFilter={filterhandle} />
      <ExpensesChart expenses={filterExpense} />
      {filterExpense.length === 0 ? (
        <p>NO Expenses Found</p>
      ) : (
        filterExpense.map((el) => {
          return (
            <div className="items" key={el.id}>
              <div className="date_title">
                <ExpenseDate date={el.date} />
                <div>{el.title}</div>
              </div>
              <div className="amount">{`${"$" + el.amount}`}</div>
              <button onClick={() => props.delete(el.id)} className="dele">
                Delete
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ExpenseItems;
