import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export type CartItem = {
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
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("item added");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartId } = action.payload;
      const product = state.cartItems.find((i) => i.cartId === cartId);
      state.cartItems = state.cartItems.filter(
        (item) => item.cartId !== cartId
      );
      if (!product) return;
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("item removed from cart");
    },
    editItem: (
      state,
      action: PayloadAction<{ amount: number; cartId: string }>
    ) => {
      const { cartId, amount } = action.payload;
      const product = state.cartItems.find((i) => i.cartId === cartId);
      if (!product) return;
      console.log(amount, product.amount);
      console.log(amount - product.amount);
      state.numItemsInCart += amount - product.amount;
      state.cartTotal += product.price * (amount - product.amount);
      product.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("item updated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});
export const { addItem, removeItem, clearCart, editItem } = cartSlice.actions;
export default cartSlice.reducer;
