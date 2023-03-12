import React from "react";
import { Route, Routes } from "react-router";
import About from "../About/About";
import Cart from "../Cart/Cart";
import Contact from "../ContactUs.jsx/Contact";
import Home from "../Home/Home";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllROutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/products"
        element={<Products productsArr={props.productsArr} />}
        exact
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}></Route>
      <Route
        path="/products/:id"
        element={<SingleProduct productsArr={props.productsArr} />}
      ></Route>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllROutes;
