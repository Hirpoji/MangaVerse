import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import scroll from "./slices/scrollSlice";
import search from "./slices/searchSlice";
import selectedManga from "./slices/SelectedMangaSlice";

export const store = configureStore({
  reducer: {
    filter,
    scroll,
    search,
    selectedManga,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
