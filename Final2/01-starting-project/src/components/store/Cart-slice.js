import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItems = action.payload;
      const existingItems = state.items.find(
        (items) => items.id === newItems.id
      );
      state.totalQuantity++;
      if (!existingItems) {
        state.items.push({
          itemsId: newItems.id,
          price: newItems.price,
          quantity: 1,
          totalPrice: newItems.price,
          name: newItems.title,
        });
      } else {
        existingItems.quantity++;
        existingItems.totalPrice = existingItems.totalPrice + newItems.price;
      }
    },
    removeItemsFormCart(state, action) {
      const id = action.payload;
      const existingItems = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItems.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItems.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
