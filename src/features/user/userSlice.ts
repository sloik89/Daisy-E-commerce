import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    username: "seba pirog",
  },
  theme: "dracula",
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logginUser: (state, action) => {
      console.log("login");
    },
    registerUser: (state, action) => {
      console.log("register");
    },
    logoutUser: (state, action) => {
      console.log("logout");
    },
    toogleTheme: (state) => {
      console.log("theme");
    },
  },
});
export const { registerUser, logginUser, logoutUser, toogleTheme } =
  userSlice.actions;
export default userSlice.reducer;
