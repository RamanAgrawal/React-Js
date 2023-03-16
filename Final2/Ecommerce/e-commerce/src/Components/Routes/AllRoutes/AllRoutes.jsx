import React, { useState } from "react";
import { Route, Routes } from "react-router";
import About from "../About/About";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllROutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products productsArr={props.productsArr} />
          </PrivateRoute>
        }
        exact
      />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/products/:id"
        element={<SingleProduct productsArr={props.productsArr} />}
      ></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart setlength={props.setlength} />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllROutes;
