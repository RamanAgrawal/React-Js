import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const token = useSelector((store) => {
    return store.auth.token;
  });
  if (!token) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoutes;
