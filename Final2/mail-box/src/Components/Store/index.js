import { configureStore } from "@reduxjs/toolkit";
import authSlics from "./authSlics";

const store = configureStore({
  reducer: {
    auth: authSlics,
  },
});

export default store;
