import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Routes/Home/Home";
import Login from "../Routes/Login/Login";
import MailBox from "../Routes/MailBox/MailBox";
import Signup from "../Routes/Signup/Signup";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/mailbox" element={<MailBox />}></Route>
      <Route path="/signUp" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AllRoutes;
