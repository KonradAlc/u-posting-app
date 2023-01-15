import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from "@/utils/storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: !!getLocalStorageItem("access"),
  access: getLocalStorageItem("access") || null,
  ...(JSON.parse(getLocalStorageItem("user")) || {
    id: null,
    username: "",
    isAdmin: false,
  }),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuth = true;
      state.access = action.payload.access;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.isAdmin = action.payload.isAdmin;
      setLocalStorageItem("access", action.payload.access);
      setLocalStorageItem(
        "user",
        JSON.stringify({
          id: action.payload.id,
          username: action.payload.username,
          isAdmin: action.payload.isAdmin,
        })
      );
    },
    logout(state) {
      state.isAuth = false;
      removeLocalStorageItem("access");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
