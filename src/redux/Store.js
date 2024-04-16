import { configureStore } from "@reduxjs/toolkit";
import users from "./User-slice";

export const store = configureStore({
  reducer: { users },
  devTools: process.env.NODE_ENV !== "production",
});
