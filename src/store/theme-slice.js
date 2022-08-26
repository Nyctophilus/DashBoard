import { createSlice } from "@reduxjs/toolkit";

const initialState = { isDark: true };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle(state) {
      state.isDark = !state.isDark;
      localStorage.setItem("isDark", state.isDark);
    },
    initMode(state) {
      if (localStorage.getItem("isDark")) {
        state.isDark = JSON.parse(
          localStorage.getItem("isDark")
        );
      }
    },
  },
});

export const { toggle, initMode } = themeSlice.actions;

export default themeSlice.reducer;
