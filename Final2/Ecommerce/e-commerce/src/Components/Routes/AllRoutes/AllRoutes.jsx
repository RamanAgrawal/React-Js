import React from "react";
import { Route, Routes } from "react-router";
import About from "../About/About";
import Cart from "../Cart/Cart";
import Contact from "../ContactUs/Contact";
import Home from "../Home/Home";
import Products from "../Products/Products";

const AllROutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllROutes;
