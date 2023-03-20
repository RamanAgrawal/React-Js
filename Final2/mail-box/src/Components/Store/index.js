import { configureStore } from "@reduxjs/toolkit";
import authSlics from "./authSlics";
import MailSlice from "./MailSlice";

const store = configureStore({
  reducer: {
    auth: authSlics,
    mail: MailSlice,
  },
});

export default store;
