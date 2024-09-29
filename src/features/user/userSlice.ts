import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type ThemeType = "dracula" | "winter";
type StateType = {
  user: {
    username: string;
  } | null;
  theme: ThemeType;
};
const getTheme = () => {
  const theme = (localStorage.getItem("theme") as ThemeType) || "winter";
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};
const initialState: StateType = {
  user: {
    username: "seba pirog",
  },
  theme: getTheme(),
};
const updateTheme = (theme: string) => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
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
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("user logged out");
      console.log("logout");
    },
    toogleTheme: (state) => {
      state.theme = state.theme === "dracula" ? "winter" : "dracula";
      updateTheme(state.theme);
      console.log(state.theme);
    },
  },
});
export const { registerUser, logginUser, logoutUser, toogleTheme } =
  userSlice.actions;
export default userSlice.reducer;
