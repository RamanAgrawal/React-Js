import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Expense-Traker</h1>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/ExpenseForm"}>ADD Expense</Link>
        <Link to={"/Login"}>Login</Link>
        <Link to={"/SignUp"}>SignUp</Link>
        <Link to={"/ForgotPassword"}>ForgotPassword</Link>
        <Link to={"/UpdateProfile"}>UpdateProfile</Link>
      </div>
    </div>
  );
};

export default Navbar;
