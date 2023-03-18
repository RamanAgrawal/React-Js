import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    return <Navigate to={"/Login"}></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
