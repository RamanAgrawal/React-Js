import { useReducer } from "react";
import { CartContext } from "./CartContext";

const itnitialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    }
    case "REMOVE": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    default: {
      return state;
    }
  }
};

const CartContextProvider = ({ children }) => {
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
    totalAmount: Cartstate.totalAmount,
    addItems: addItemsToCart,
    removeItem: RemoveItemsToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
