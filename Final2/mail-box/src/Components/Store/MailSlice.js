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
      console.log("done sent");
    },
    mailRead(state, action) {
      state.inbox[action.payload.id] = { ...action.payload.mail };
    },
    mailInbox(state, action) {
      state.inbox = action.payload;
      console.log("done sent");
    },
    sent(state, action) {
      state.sent = action.payload;
    },
    delete(state, action) {
      delete state.inbox[action.payload];
    },
  },
});

export default mailSlice.reducer;
export const mailAction = mailSlice.actions;
