import { createSlice } from "@reduxjs/toolkit";

const initialState = { isDark: true };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle(state) {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
