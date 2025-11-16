// chatSlice contains live chatting data.

import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../constants.js";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1); // Fixes future slow chat UI due to more chat message items in array - it removes a message item at specified index of array.

      state.messages.unshift(action.payload); // Updates state - Adds a 'new message' item to Starting of array.
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
