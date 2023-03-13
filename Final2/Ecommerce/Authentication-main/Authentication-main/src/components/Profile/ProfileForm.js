import { useContext, useRef } from "react";
import { AuthContext } from "../../Store/LoginContext";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPassword = useRef();
  const ctx = useContext(AuthContext);
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredNewPassword = newPassword.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAFw_ve1mrePQiCXf1PSeV6YiKn85aubec",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: ctx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res);
    });
  };

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={newPassword}
          minLength="7"
        />
      </div>
      <div className={classes.action}>
        <button onClick={submitHandler}>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
