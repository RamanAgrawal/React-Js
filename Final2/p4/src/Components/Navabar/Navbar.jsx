import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to={"/form"}>Medicines</Link>
      <Link to={"/Cart"}>Cart</Link>
    </div>
  );
};

export default Navbar;
