import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className="align-element flex justify-end gap-x-6">
        <Link className="link link-hover" to="login">
          Sign in / Guest
        </Link>
        <Link className="link link-hover" to="register">
          Create an Account
        </Link>
      </div>
    </header>
  );
};

export default Header;
