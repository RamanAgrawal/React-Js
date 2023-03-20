import axios from "axios";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { Authactions } from "../../Store/authSlics";
const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailLength = email.current.value.trim();
    const passLength = password.current.value.trim();
    const obj = {
      email: emailLength,
      password: passLength,
      returnSecureToken: true,
    };
    if (emailLength.length === 0 || passLength.length === 0) {
      toast.success("Fill All Fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      try {
        setLoading(true);
        let res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB02lkuFzq3FvfakkGwF66p3OBEJaqUC4g",
          obj
        );
        dispatch(
          Authactions.login({ token: res.data.idToken, email: res.data.email })
        );
        toast.success("Logged-IN", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("error:", error);
      }
    }
  };

  if (loading) {
    return (
      <img
        style={{ display: "block", margin: "17% auto" }}
        width={"10%"}
        src="https://cdn.dribbble.com/users/919882/screenshots/2362441/loader-2.gif"
        alt="loading"
      />
    );
  }

  return (
    <>
      <form>
        <h1>Login</h1>
        <input ref={email} type="text" placeholder="Enter Your Email" />
        <input
          ref={password}
          type="password"
          placeholder="Enter Your Password"
        />
        <input onClick={handleSubmit} type="submit" value="Login" />
      </form>
      <div style={{ fontSize: "22px" }}>
        Don't have an account? <Link to={"/signup"}>Sign Up</Link>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
