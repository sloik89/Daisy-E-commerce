import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
type CartItem = {
  cartId: string;
  productId: string;
  price: number;
  title: string;
  image: string;
  productColor: string;
  company: string;
  amount: number;
};
type CartState = {
  tax: number;
  orderTotal: number;
  shipping: number;
  cartItems: CartItem[];
  cartTotal: number;
  numItemsInCart: number;
};
const defaultState: CartState = {
  tax: 0,
  orderTotal: 0,
  shipping: 500,
  cartItems: [],
  cartTotal: 0,
  numItemsInCart: 0,
};
const getCartFromLocal = (): CartState => {
  const item = localStorage.getItem("cart");
  const result = item ? JSON.parse(item) : defaultState;
  return result;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocal(),
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const cartItem = action.payload;
      const foundItem = state.cartItems.find(
        (item) => item.cartId === cartItem.cartId
      );
      if (foundItem) {
        foundItem.amount += cartItem.amount;
      } else {
        state.cartItems.push(cartItem);
      }
      state.numItemsInCart += cartItem.amount;
      state.cartTotal += cartItem.amount * cartItem.price;
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      console.log(cartItem);
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("item added");
    },
    clearCart: (state) => {},
    removeItem: (state, payload) => {},
    editItem: (state, payload) => {},
  },
});
export const { addItem, removeItem, clearCart, editItem } = cartSlice.actions;
export default cartSlice.reducer;
