import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    token: localStorage.getItem("token"),
    email: localStorage.getItem("email"),
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.email = action.payload.email;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("email", action.payload.email);
    },
    logout(state) {
      state.token = "";
      state.email = "";
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    },
  },
});

export default authSlice.reducer;
export const Authactions = authSlice.actions;
