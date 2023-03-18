import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "19%",
        fontFamily: "cursive",
        fontSize: "52px",
      }}
    >
      Welcome To Expense Tracker
    </div>
  );
};

export default Home;
