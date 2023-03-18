import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true, isAuth: false },
  reducers: {
    ADD(state, action) {
      state.counter = state.counter + action.payload;
    },
    SUB(state, action) {
      state.counter = state.counter - action.payload;
    },
    Toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "Auth",
  initialState: { isAuth: false },
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counerActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
