import { CartItem } from "../components";

import { useAppSelector } from "../hooks";
const CartItems = () => {
  const cartItems = useAppSelector((state) => state.cartState.cartItems);
  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartId} cartItem={item} />;
      })}
    </div>
  );
};

export default CartItems;
