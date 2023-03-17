import axios from "axios";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCFrmedDfSLLubh6dopFm8w_kt-t0eGWRA",
        {
          requestType: "PASSWORD_RESET",
          email: email,
        }
      );
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <>
      <h1>Forgot Password</h1>
      <form>
        <input
          onChange={handleEmail}
          type="text"
          placeholder="Enter Your Email"
        />
        <input
          onClick={handleForgetPassword}
          type="submit"
          value="Forgot Password"
        />
      </form>
    </>
  );
};

export default ForgotPassword;
