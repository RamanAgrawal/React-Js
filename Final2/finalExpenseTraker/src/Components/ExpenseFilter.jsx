import React from "react";

const ExpenseFilter = (props) => {
  const dropHandle = (e) => {
    props.onchangeFilter(e.target.value);
  };
  return (
    <div className="filter">
      <label>Filter By Year</label>
      <select value={props.selected} onChange={dropHandle}>
        <option value="2022">2022</option>
        <option defaultValue value="2023">
          2023
        </option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
