import React, { useRef } from "react";

const Contact = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    try {
      let res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFw_ve1mrePQiCXf1PSeV6YiKn85aubec",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input ref={emailInputRef} type="text" placeholder="Email" />
      </div>
      <div>
        <input ref={passwordInputRef} type="text" placeholder="Password" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Contact;
