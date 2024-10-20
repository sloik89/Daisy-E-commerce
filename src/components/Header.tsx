import { useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const Header = () => {
  const user = useAppSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
const queryClient = useQueryClient()
  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries()
  };
  return (
    <header className="bg-neutral text-neutral-content py-2">
      {user ? (
        <div className="align-element flex justify-end gap-x-6">
          <p>Hello {user.username}</p>
          <button
            onClick={handleLogout}
            className="btn btn-primary btn-outline btn-xs"
          >
            logout
          </button>
        </div>
      ) : (
        <div className="align-element flex justify-end gap-x-6">
          <Link className="link link-hover" to="login">
            Sign in / Guest
          </Link>
          <Link className="link link-hover" to="register">
            Create an Account
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
