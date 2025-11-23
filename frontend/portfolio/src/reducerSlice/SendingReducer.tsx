import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isSending: false,
};
const SendingReducer = createSlice({
  name: "SendingReducer",
  initialState,
  reducers: {
    setIsSending: (state, action: PayloadAction<boolean>) => {
      state.isSending = action.payload;
    },
  },
});

export const { setIsSending } = SendingReducer.actions;
export default SendingReducer.reducer;
