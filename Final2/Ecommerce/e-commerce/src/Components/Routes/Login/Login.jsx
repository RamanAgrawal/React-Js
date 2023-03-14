import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../Store/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const ctx = useContext(CartContext);
  const Email = useRef();
  const navigate = useNavigate();
  const Password = useRef();
  const loginEmail = useRef();
  const loginPassword = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enterEmail = Email.current.value;
    const enterPassword = Password.current.value;
    try {
      let res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFw_ve1mrePQiCXf1PSeV6YiKn85aubec",
        {
          method: "POST",
          body: JSON.stringify({
            email: enterEmail,
            password: enterPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await res.json();
      console.log(data);
      if (res.ok) {
        alert("SIGN UP DONE");
        return res.json();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const EnterloginEmail = loginEmail.current.value;
    const EnterLoginPassword = loginPassword.current.value;
    try {
      let res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFw_ve1mrePQiCXf1PSeV6YiKn85aubec",
        {
          method: "POST",
          body: JSON.stringify({
            email: EnterloginEmail,
            password: EnterLoginPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let result = await res.json();
      ctx.login(result.idToken);
      localStorage.setItem("email", result.email);
      toast("LOGIN SUCCESSFULLY");
      navigate("/products");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div>
          <label>Email</label>
          <input ref={Email} type="email" placeholder="Enter Your Email" />
        </div>
        <br />
        <div>
          <label>Password</label>
          <input
            ref={Password}
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <br />
        <button>Sign Up</button>
      </form>

      <br />
      <br />

      <form onSubmit={handleLoginSubmit}>
        <h1>Login</h1>
        <div>
          <input ref={loginEmail} type="text" placeholder="Enter Your Email" />
        </div>
        <br />
        <div>
          <input
            ref={loginPassword}
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <br />
        <button>Login</button>
        <br />
        <br />
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
