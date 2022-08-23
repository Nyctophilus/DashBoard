import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapsed: true,
  activeBar: "dashboard",
  show: false,
  myRef: null,
};

const SideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    uncollapse(state) {
      state.isCollapsed = true;
    },
    collapse(state) {
      state.isCollapsed = false;
    },
    setActiveBar(state, action) {
      state.activeBar = action.payload;
    },
    open(state) {
      state.show = true;
      state.isCollapsed = true;
    },
    close(state) {
      state.show = false;
    },
    getRef(state, action) {
      state.myRef = action.payload;
    },
  },
});

export const {
  uncollapse,
  collapse,
  setActiveBar,
  open,
  close,
  getRef,
} = SideBarSlice.actions;

export default SideBarSlice.reducer;
