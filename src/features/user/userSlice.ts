import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type ThemeType = "dracula" | "winter";
type StateType = {
  user: {
    username: string;
    token: string;
  } | null;
  theme: ThemeType;
};
const getUserFromLocalStorage = () => {
  let user = localStorage.getItem("user");
  if (!user) {
    return null;
  }
  const validUser: { username: string; token: string } = JSON.parse(
    localStorage.getItem("user") as any
  );
  return validUser;
};
const getTheme = () => {
  const theme = (localStorage.getItem("theme") as ThemeType) || "winter";
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};
const initialState: StateType = {
  user: getUserFromLocalStorage(),
  theme: getTheme(),
};
const updateTheme = (theme: string) => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
};
const saveUser = (user: { username: string; token: string }) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logginUser: (
      state,
      action: PayloadAction<{
        msg: string;
        user: { username: string; token: string };
      }>
    ) => {
      console.log("login", action.payload);
      state.user = action.payload.user;
      saveUser(action.payload.user);
      toast.success(action.payload.msg);
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
