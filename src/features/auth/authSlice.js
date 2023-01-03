import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state) {
      state.isLoading = true;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
      state.isAuth = true;
      localStorage.setItem("token", action.payload.token);
    },
    loginFailure(state) {
      state.isLoading = false;
    },
    logout(state) {
      state.isAuth = false;
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
