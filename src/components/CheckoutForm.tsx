import { redirect, Form, ActionFunction } from "react-router-dom";
import { toast } from "react-toastify";

import { customFetch } from "../utilis/customFetch";
import { type ReduxStore } from "../store";
import { FormInput, SubmitBtn } from "../components";
import { clearCart } from "../features/cart/cartSlice";
import { useAppSelector } from "../hooks";
export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }) => {
    const formData = await request.formData();

    const userData = Object.fromEntries(formData);
    console.log(userData);
    if (!userData.name || !userData.address) {
      console.log("formdata");
      toast.error("Address or name are empty");
      return null;
    }
    console.log(formData);
    const cartItems = store.getState().cartState.cartItems.map((item) => {
      return { ...item, product: item.productId };
    });
    const tax = store.getState().cartState.tax;
    const shippingFee = store.getState().cartState.shipping;
    const token = store.getState().userState.user?.token;
    console.log(cartItems, tax, shippingFee);
    try {
      const res = await customFetch.post(
        "orders",
        {
          tax,
          shippingFee,
          cartItems,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      toast.success("Order placed");
      store.dispatch(clearCart());
      return redirect("/orders");
    } catch (err) {
      console.log(err);
      return null;
    }
    return null;
  };
const CheckoutForm = () => {
  const userName = useAppSelector((state) => state.userState.user?.username);
  return (
    <Form method="POST" className="grid gap-y-3">
      <h4 className="font-medium capitalize text-2xl text-center">
        shipping information
      </h4>
      <FormInput
        defaultValue={userName}
        label="first name"
        name="name"
        type="text"
      />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4 text-center">
        <SubmitBtn title="place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
