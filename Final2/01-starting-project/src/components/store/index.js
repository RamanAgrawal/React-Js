import { configureStore } from "@reduxjs/toolkit";
import uislice from "./Ui-slice";
const store = configureStore({
  reducer: { ui: uislice.reducer },
});

export default store;
