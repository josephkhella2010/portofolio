import { configureStore } from "@reduxjs/toolkit";
import SendingReducer from "./reducerSlice/SendingReducer";
const store = configureStore({
  reducer: {
    SendingSlice: SendingReducer,
  },
});

// Run Saga
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
