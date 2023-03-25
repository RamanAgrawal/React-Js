import React, { useRef } from "react";
import axios from "axios";

const SignUpPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const ConfirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      returnSecureToken: true,
    };
    try {
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFrmedDfSLLubh6dopFm8w_kt-t0eGWRA",
        obj
      );
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <form>
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Enter your Name"
          ref={emailRef}
          required
        ></input>
        <input
          type="password"
          placeholder="Enter your Passward"
          ref={passwordRef}
          required
        ></input>
        <input
          type="confirm password"
          placeholder="Confirm your Password "
          required
          ref={ConfirmPasswordRef}
        ></input>
        <button onClick={handleSubmit} type={"submit"}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
