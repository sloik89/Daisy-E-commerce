import { NavLink } from "react-router-dom";
import { links } from "../utilis/links";
import { useAppSelector } from "../hooks";
const NavLinks = () => {
  const user = useAppSelector((state) => state.userState.user);
  return (
    <>
      {links.map((item) => {
        if ((item.text === "orders" || item.text === "checkout") && !user) {
          return null;
        }
        return (
          <li key={item.id}>
            <NavLink className="capitalize mt-3" to={item.url}>
              {item.text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
