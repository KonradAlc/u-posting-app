import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  access: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.access = action.payload.access;
      state.isAuth = true;
      localStorage.setItem("access", action.payload.access);
    },
    logout(state) {
      state.isAuth = false;
      localStorage.removeItem("access");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
