import axios from "axios";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./Auth.ActionTypes";

export const UserLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    let res = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFrmedDfSLLubh6dopFm8w_kt-t0eGWRA",
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
    console.log(res);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.idToken });
    localStorage.setItem("token", JSON.stringify(res.data.idToken));
    localStorage.setItem("emailId", JSON.stringify(res.data.email));
  } catch (error) {
    alert("Login Failed");
    dispatch({ type: USER_LOGIN_ERROR });
    console.log("error:", error);
  }
};
