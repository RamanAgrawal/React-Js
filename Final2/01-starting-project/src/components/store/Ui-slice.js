import { createSlice } from "@reduxjs/toolkit";

const uislice = createSlice({
  name: "ui",
  initialState: { cartIsvisible: false },
  reducers: {
    toggle(state) {
      state.cartIsvisible = !state.cartIsvisible;
    },
  },
});

export const uiActions = uislice.actions;

export default uislice;
