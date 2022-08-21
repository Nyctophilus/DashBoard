import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  location: null,
  page: null,
};

const SubMenuSlice = createSlice({
  name: "submenu",
  initialState,
  reducers: {
    open(state, action) {
      state.show = true;
      state.location = action.payload.loc;
      state.page = action.payload.page;
    },
    close(state) {
      state.show = false;
      state.location = null;
    },
  },
});

export const { open, close } = SubMenuSlice.actions;

export default SubMenuSlice.reducer;
