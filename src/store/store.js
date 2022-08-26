import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme-slice";
import SubMenuReducer from "./submenu-slice";
import SideBarReducer from "./sidebar-slice";
import LoginReducer from "./login-slice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    submenu: SubMenuReducer,
    sidebar: SideBarReducer,
    login: LoginReducer,
  },
});

export default store;
