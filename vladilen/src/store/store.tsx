import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./slices/Users/UsersSlice";

export const store = configureStore({
  reducer: {
    UsersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
