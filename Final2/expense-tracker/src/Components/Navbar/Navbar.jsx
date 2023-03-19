import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const email = JSON.parse(localStorage.getItem("emailId"));
  const photo = JSON.parse(localStorage.getItem("photo"));
  const handleOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("emailId");
    localStorage.removeItem("photo");
    navigate("/");
    toast.success("Logged-Out", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="navbar">
      <h1>Expense-Tracker</h1>
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
        <div style={{ display: "flex" }}>
          {photo ? <img src={photo} width="30px"></img> : ""}
          {email ? <p>{email}</p> : ""}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
