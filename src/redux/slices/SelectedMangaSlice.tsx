import { createSlice } from "@reduxjs/toolkit";

interface CardType {
  id: number;
  image: string;
  name: string;
  otherName: string;
  rating: number;
}

export interface SelectedMangaState {
  items: Array<CardType>;
}

const initialState: SelectedMangaState = {
  items: [],
};

export const selectedMangaSlice = createSlice({
  name: "selectedManga",
  initialState,
  reducers: {
    addManga(state, action) {
      state.items.push(action.payload);
    },
    removeManga(state, action) {
      state.items = state.items.filter((manga) => action.payload !== manga.id);
    },
  },
});

export const { addManga, removeManga } = selectedMangaSlice.actions;

export default selectedMangaSlice.reducer;
