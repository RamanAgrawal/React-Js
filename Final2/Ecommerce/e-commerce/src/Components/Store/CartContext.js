import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  items: [],
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
  const [state, dispatchsetState] = useReducer(CartReducer, initialState);
  const addItemsToCart = (items) => {
    dispatchsetState({ type: "ADD", item: items });
  };
  const value = {
    items: state.items,
    addItems: addItemsToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
