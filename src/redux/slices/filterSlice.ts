import { createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  categoryName: string;
  sort: {
    name: string;
    sortProperty: string;
  };
}

const initialState: FilterState = {
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
    setFilter(state, action) {
      if (Object.keys(action.payload).length) {
      state.categoryName = action.payload.categoryName;
      state.sort = action.payload.sort;
      }
      else{
        state.categoryName= "Все",
        state.sort = {
          name: "По рейтингу 10-1",
          sortProperty: "-rating",
        }
      }
    },
  },
});

export const { setCategoryName, setSort, setFilter } = filterSlice.actions;

export default filterSlice.reducer;
