import { createSlice } from "@reduxjs/toolkit";

let logoutTimer;

const calcRemainingTime = (expTime) => {
  const currentTime = new Date().getTime();
  const adjExpTime = new Date(expTime).getTime();

  const remainingDuration = adjExpTime - currentTime;

  return remainingDuration;
};

const retriveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpDate = localStorage.getItem("expTime");

  const remainingTime = calcRemainingTime(storedExpDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");
    return;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

const logoutHandler = (state) => {
  state.isLoggedIn = false;
  state.token = null;
};

const initialState = {
  token: "",
  isLoggedIn: false,
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      const { token, expTime } = action.payload;

      state.token = token;
      localStorage.setItem("token", token);
      localStorage.setItem("expTime", expTime);

      const remainingTime = calcRemainingTime(expTime);

      logoutTimer = setTimeout(
        logoutHandler,
        remainingTime
      );

      state.isLoggedIn = true;
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("expTime");

      if (logoutTimer) clearTimeout(logoutTimer);

      state.isLoggedIn = false;
    },
    initializeToken(state) {
      const tokenData = retriveStoredToken();

      if (tokenData) state.token = tokenData.token;

      if (state.token) state.isLoggedIn = true;

      console.log(
        "automatic logined and duration is:",
        tokenData?.duration
      );

      logoutTimer = setTimeout(
        logoutHandler,
        tokenData?.duration
      );
    },
  },
});

export const { login, logout, initializeToken } =
  LoginSlice.actions;

export default LoginSlice.reducer;
