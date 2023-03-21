import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    inbox: {},
    sent: {},
  },
  reducers: {
    mailSent(state, action) {
      state.sent[action.payload.id] = action.payload.mail;
    },
    mailRead(state, action) {
      state.inbox[action.payload.id] = { ...action.payload.mail };
    },
    inbox(state, action) {
      state.inbox = action.payload;
    },
    delete(state, action) {
      delete state.inbox[action.payload];
    },
  },
});

export default mailSlice.reducer;
export const mailAction = mailSlice.actions;
