import React, { createContext, useReducer } from "react";
export const CartContext = createContext();

const itnitialState = {
  items: [],
};

const cartReducer = (state, action) => {
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
  const [Cartstate, dispatchCartSetState] = useReducer(
    cartReducer,
    itnitialState
  );
  const addItemsToCart = (items) => {
    dispatchCartSetState({ type: "ADD", item: items });
  };
  const RemoveItemsToCart = (id) => {
    dispatchCartSetState({ type: "REMOVE", id: id });
  };

  const value = {
    items: Cartstate.items,
    addItems: addItemsToCart,
    removeItem: RemoveItemsToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
