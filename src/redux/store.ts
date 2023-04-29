import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import scroll from "./slices/scrollSlice";
import search from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    filter,
    scroll,
    search,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
