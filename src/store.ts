import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
