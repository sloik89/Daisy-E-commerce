import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { NavLinks } from "../components";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toogleTheme } from "../features/user/userSlice";

const Navbar = () => {
  // const [theme, setTheme] = useState<ThemeType>(getLocalStorage());
  const theme = useAppSelector((state) => state.userState.theme);

  const dispatch = useAppDispatch();
  const handleTheme = () => {
    dispatch(toogleTheme());
  };

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* Logo */}
          <NavLink className="hidden lg:flex btn btn-primary text-3xl" to="/">
            C
          </NavLink>
          {/* Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered />
            </label>
            <ul className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow ">
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-x-4">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end flex gap-x-3">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {theme === "winter" ? (
              <BsSunFill className=" h-4 w-4" />
            ) : (
              <BsMoonFill className=" h-4 w-4" />
            )}
          </label>
          <NavLink to="/cart">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
