import { createContext, useReducer, useState } from "react";
export const CartContext = createContext();

const initialState = {
  items: [],
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        items: state.items.concat(action.item),
      };
    }
  }
};

let tokken = localStorage.getItem("token");

export const CartContextProvider = ({ children }) => {
  const [token, setToken] = useState(tokken || null);
  const [state, dispatchsetState] = useReducer(CartReducer, initialState);
  const addItemsToCart = (items) => {
    dispatchsetState({ type: "ADD", item: items });
  };

  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(null);
  };

  const value = {
    items: state.items,
    addItems: addItemsToCart,
    token: token,
    login: loginHandler,
    logout: logoutHandler,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
