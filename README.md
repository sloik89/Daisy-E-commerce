# E commerce store with React, Typescript, DaisyUi, React Router 6++, Axios, React Query, RTK

# Api

link: https://e-commerce-api-otdo.onrender.com/api/products

# Get Filter Products

# [https://e-commerce-api-otdo.onrender.com/api/products](https://e-commerce-api-otdo.onrender.com/api/products)

=======

# Redux Setup

1.  Wrap app with Provider and pass store

```tsx
<Provider store={store}>
  <App />
  <ToastContainer position="top-center" />
</Provider>
```

2. Configure store.ts

```tsx
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
```

3. Create slices

```tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocal(),
  reducers: {}
```
