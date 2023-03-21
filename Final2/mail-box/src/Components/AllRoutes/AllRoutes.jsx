import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Routes/Home/Home";
import Inbox from "../Routes/Inbox/Inbox";
import Login from "../Routes/Login/Login";
import MailBox from "../Routes/MailBox/MailBox";
import PrivateRoutes from "../Routes/PrivateRoute/PrivateRoutes";
import Sent from "../Routes/Sent/Sent";
import SingleSent from "../Routes/Sent/SingleSent";
import Signup from "../Routes/Signup/Signup";
import Singlemail from "../Routes/SingleMail/Singlemail";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/mailbox"
        element={
          <PrivateRoutes>
            <MailBox />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/inbox"
        element={
          <PrivateRoutes>
            <Inbox />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/sent"
        element={
          <PrivateRoutes>
            <Sent />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/inbox/:id"
        element={
          <PrivateRoutes>
            <Singlemail />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/sent/:id"
        element={
          <PrivateRoutes>
            <SingleSent />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="/signUp" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AllRoutes;
