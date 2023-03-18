import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItems = action.payload;
      const existingItems = state.items.find(
        (items) => items.id === newItems.id
      );
      if (!existingItems) {
        state.items.push({
          itemsId: newItems,
          price: newItems.price,
          quantity: 1,
          totalPrice: newItems.price,
          name: newItems.title,
        });
      } else {
        existingItems.quantity++;
        totalAmount.totalPrice = existingItems.totalAmount + newItems.price;
      }
    },
    removeItemsFormCart(state,action) {
        
    },
  },
});
