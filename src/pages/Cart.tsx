import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { CartItems, CartTotals, SectionTitle } from "../components";
const Cart = () => {
  // temp
  const user = useAppSelector((state) => state.userState.user);

  const { numItemsInCart } = useAppSelector((state) => state.cartState);
  if (numItemsInCart === 0) {
    return <SectionTitle title="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle title="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12 ">
        <div className="lg:col-span-8">
          <CartItems />
        </div>
        <div className="lg:col-span-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout">proceed to checkout</Link>
          ) : (
            <Link className="btn btn-primary uppercase" to="/login">
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
