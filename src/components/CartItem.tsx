import React from "react";
import {
  removeItem,
  editItem,
  type CartItem as CartItemType,
} from "../features/cart/cartSlice";
import { useAppDispatch } from "../hooks";
import { formatPrice } from "../utilis/formatPrice";

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
  const { cartId, title, price, image, amount, company, productColor } =
    cartItem;
  const dispatch = useAppDispatch();
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    dispatch(editItem({ amount: Number(e.target.value), cartId }));
  };
  return (
    <article className="mb-12 flex items-center justify-between">
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      <div>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="flex items-center gap-3">
          color:
          <span
            className="badge"
            style={{ backgroundColor: `${productColor}` }}
          ></span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-3">
        <label className="label p-0" htmlFor="amount">
          <span>Amount</span>
        </label>
        <select
          name="amount"
          id="amount"
          className="select select-bordered"
          value={amount}
          onChange={handleSelect}
        >
          {Array.from({ length: 10 }, (_, idx) => {
            const currentIdx = idx + 1;
            return (
              <option className="font-bold" value={currentIdx} key={idx}>
                {currentIdx}
              </option>
            );
          })}
        </select>
        <button
          onClick={() => {
            dispatch(removeItem({ cartId: cartId }));
          }}
          className="btn btn-ghost btn-secondary"
        >
          Remove
        </button>
      </div>
      <div className=" flex flex-col gap-y-3">
        <p>{formatPrice(price)}</p>
      </div>
    </article>
  );
};

export default CartItem;
