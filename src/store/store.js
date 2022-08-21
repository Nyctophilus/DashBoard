import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme-slice";
import SubMenuReducer from "./submenu-slice";

const store = configureStore({
  reducer: { theme: themeReducer, submenu: SubMenuReducer },
});

export default store;
