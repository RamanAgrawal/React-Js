import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { UserLogin } from "../../Redux/Auth.actions";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEMail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEMail = (e) => {
    setEMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPass(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      let res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFrmedDfSLLubh6dopFm8w_kt-t0eGWRA",
        {
          email: email,
          password: pass,
          returnSecureToken: true,
        }
      );
      setLoading(false);
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res.data.idToken));
      localStorage.setItem("emailId", JSON.stringify(res.data.email));
      navigate("/");
      toast.success("Logged-In", {
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
      alert("Login Failed");
      console.log("error:", error);
    }

    if (email === "" || pass === "") {
      alert("Please Fill All Fields");
    } else {
      dispatch(UserLogin(email, pass));
    }
  };

  if (loading) {
    return (
      <img
        src="https://media.tenor.com/1s1_eaP6BvgAAAAC/rainbow-spinner-loading.gif"
        alt="image"
      ></img>
    );
  }

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
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
