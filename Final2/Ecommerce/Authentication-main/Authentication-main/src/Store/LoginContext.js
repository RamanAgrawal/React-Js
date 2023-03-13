import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isLoggesIn: false,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const firstToken = localStorage.getItem("token");
  const [token, setToken] = useState(firstToken);
  const userIsLoggesIn = !!token;

  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggesIn: userIsLoggesIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
