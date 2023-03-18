import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart-slice";
import uislice from "./Ui-slice";
const store = configureStore({
  reducer: { ui: uislice.reducer, cart: cartSlice.reducer },
});

export default store;
