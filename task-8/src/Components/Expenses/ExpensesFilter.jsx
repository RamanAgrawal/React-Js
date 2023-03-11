import React from "react";

const ExpensesFilter = (props) => {
  const selectHandler = (e) => {
    props.onchangeFilter(e.target.value);
  };
  return (
    <div>
      <label>Filter By Year</label>
      <select value={props.selected} onChange={selectHandler}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
