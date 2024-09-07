import { NavLink } from "react-router-dom";
import { links } from "../utilis/links";

const NavLinks = () => {
  return (
    <>
      {links.map((item) => {
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
