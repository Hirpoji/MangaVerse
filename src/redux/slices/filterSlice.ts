import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  categoryName: string;
  sort: {
    name: string;
    sortProperty: string;
  };
}

const initialState: CounterState = {
  categoryName: "Все",
  sort: {
    name: "По рейтингу 10-1",
    sortProperty: "-rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryName(state, action) {
      state.categoryName = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryName, setSort } = filterSlice.actions;

export default filterSlice.reducer;
