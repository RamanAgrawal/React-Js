import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emaillength = email.current.value.trim();
    const passlength = password.current.value.trim();
    const confirmlength = confirmPassword.current.value.trim();
    if (passlength !== confirmlength) {
      alert("Password Not Matched");
      return;
    }
    if (
      emaillength.length === 0 ||
      passlength.length === 0 ||
      confirmlength.length === 0
    ) {
      alert("Please Fill All Fields");
    } else {
      const obj = {
        email: email.current.value,
        password: password.current.value,
        returnSecureToken: true,
      };
      try {
        setLoading(true);
        let res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB02lkuFzq3FvfakkGwF66p3OBEJaqUC4g",
          obj
        );
        toast.success("SignUp-Completed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/login");
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
      <h1>Sign Up</h1>
      <form>
        <input ref={email} type="email" placeholder="Enter Your Email" />
        <input
          ref={password}
          type="password"
          placeholder="Enter Your Password"
        />
        <input
          ref={confirmPassword}
          type="password"
          placeholder="Confirm Your Password"
        />
        <input onClick={handleSubmit} type="submit" value="SignUp" />
        <div style={{ fontSize: "22px" }}>
          Have an Account? <Link to={"/login"}>Login</Link>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Signup;
