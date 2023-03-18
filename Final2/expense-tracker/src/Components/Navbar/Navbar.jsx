import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const handleOut = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };
  return (
    <div className="navbar">
      <h1>Expense-Traker</h1>
      <div className="links">
        <Link to={"/"}>Home</Link>
        {token && <Link to={"/ExpenseForm"}>ADD Expense</Link>}
        <Link to={"/SignUp"}>SignUp</Link>
        {!token ? (
          <Link to={"/Login"}>Login</Link>
        ) : (
          <button onClick={handleOut}>Logout</button>
        )}
        {token && <Link to={"/UpdateProfile"}>UpdateProfile</Link>}
      </div>
    </div>
  );
};

export default Navbar;
