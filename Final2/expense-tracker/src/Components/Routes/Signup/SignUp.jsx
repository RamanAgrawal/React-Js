import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conPass, setConPass] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEMail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPass(e.target.value);
  };

  const handleConPass = (e) => {
    setConPass(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || pass === "" || conPass === "") {
      alert("Please Fill All Fields");
    } else if (conPass !== pass) {
      alert("Password Not Matched");
    } else {
      try {
        setLoading(true);
        let res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFrmedDfSLLubh6dopFm8w_kt-t0eGWRA",
          {
            email: email,
            password: pass,
            returnSecureToken: true,
          }
        );
        setLoading(false);
        console.log(res);
        toast.success("Sign-In-Completed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        setLoading(false);
        console.log("error:", error);
      }
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <input onChange={handleEMail} type="text" placeholder="Enter Email" />
        <input
          onChange={handlePassword}
          type="password"
          placeholder="Enter Password"
        />
        <input
          onChange={handleConPass}
          type="text"
          placeholder="Confirm Password"
        />
        <input onClick={handleSubmit} type="submit" value={"Sign Up"} />
        <Link to={"/ForgotPassword"}>Forgot Password</Link>
      </form>
    </>
  );
};

export default SignUp;
