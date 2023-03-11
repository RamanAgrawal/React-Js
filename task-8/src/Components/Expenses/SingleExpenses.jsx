import React from "react";

const SingleExpenses = (props) => {
  const handleCLick = (e) => {
    e.target.parentNode.remove();
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        My Expenses
      </h1>
      <table border={"1"} cellSpacing={"0"}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
          </tr>
        </thead>
      </table>
      {props.user.map((items) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "196px",
            }}
          >
            <h4>{items.date}</h4>
            <h4>{items.title}</h4>
            <h4>{items.amount}</h4>
            <button
              style={{
                padding: "7px 24px",
                fontSize: "16px",
                background: "red",
                border: "none",
                cursor: "pointer",
                marginTop: "20px",
              }}
              onClick={handleCLick}
            >
              Delete
            </button>
            <button
              style={{
                padding: "7px 24px",
                fontSize: "16px",
                background: "red",
                border: "none",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SingleExpenses;
