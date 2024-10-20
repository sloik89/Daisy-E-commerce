import { Store } from "@reduxjs/toolkit";

import { LoaderFunction, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { useAppSelector } from "../hooks";
import { ReduxStore } from "../store";
export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    console.log(user);
    if (!user) {
      toast.warn("You must be logged");
      return redirect("/login");
    }
    return null;
  };
const Checkout = () => {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle title="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle title="place your order" />

      <div className="grid gap-6 md:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
