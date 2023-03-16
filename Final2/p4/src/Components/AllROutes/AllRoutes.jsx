import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../Form/Form";
import Cart from "./Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
};

export default AllRoutes;
