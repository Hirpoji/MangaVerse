import { createSlice } from "@reduxjs/toolkit";

export interface scrollState {
  isVisible: boolean;
}

const initialState: scrollState = {
  isVisible: false,
};

export const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setIsVisible(state, action) {
      state.isVisible = action.payload;
    },
  },
});

export const { setIsVisible } = scrollSlice.actions;

export default scrollSlice.reducer;
