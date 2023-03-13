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

export const CartContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const userIsLoggesIn = !!token;
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
    setToken(null);
  };

  const value = {
    items: state.items,
    addItems: addItemsToCart,
    token: token,
    isLoggedIn: userIsLoggesIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
