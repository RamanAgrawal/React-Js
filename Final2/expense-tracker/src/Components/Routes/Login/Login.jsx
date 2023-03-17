import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEMail] = useState("");
  const [pass, setPass] = useState("");
  const handleEMail = (e) => {
    setEMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPass(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || pass === "") {
      alert("Please Fill All Fields");
    } else {
      try {
        let res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFrmedDfSLLubh6dopFm8w_kt-t0eGWRA",
          {
            email: email,
            password: pass,
            returnSecureToken: true,
          }
        );
        localStorage.setItem("token", JSON.stringify(res.data.idToken));
      } catch (error) {
        console.log("error:", error);
      }
    }
  };

  const handleConfirmEmail = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCFrmedDfSLLubh6dopFm8w_kt-t0eGWRA",
        {
          requestType: "VERIFY_EMAIL",
          idToken: JSON.parse(localStorage.getItem("token")),
        }
      );
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
  };

  return (
    <>
      <h1>Sign In</h1>
      <form>
        <input onChange={handleEMail} type="text" placeholder="Enter Email" />
        <input
          onChange={handlePassword}
          type="password"
          placeholder="Enter Password"
        />
        <input onClick={handleSubmit} type="submit" value={"Login"} />
        <input
          onClick={handleConfirmEmail}
          type="submit"
          value={"Confirm Email"}
        />
        <input onClick={handleLogout} type="submit" value={"LogOut"} />
      </form>
    </>
  );
};

export default Login;
