import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  const NavLinks = (
    <nav className="flex flex-col gap-3 font-bold md:flex-row md:items-center md:gap-6 md:text-base">
      <NavLink className="hover:text-[#ff8604]" to="/">
        Home
      </NavLink>
      <NavLink className="hover:text-[#ff8604]" to="/shop">
        Shop
      </NavLink>
      <NavLink className="hover:text-[#ff8604]" to="/collection">
        Collection
      </NavLink>
      <NavLink className="hover:text-[#ff8604]" to="/contactUs">
        Contact Us
      </NavLink>
    </nav>
  );

  return (
    <div className="sticky top-0 z-10 mx-auto bg-white md:px-12 navbar max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-black bg-blue-300 z-[1] mt-3 w-36 p-2 shadow"
          >
            <span className="w-3/4">{NavLinks}</span>
          </ul>
        </div>
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold md:text-4xl text-nowrap">
              <span className="text-blue-600">Sit</span>{" "}
              <span className="text-orange-600">Well</span>
            </h1>
          </Link>
        </div>
      </div>
      {/* large device */}
      <div className="md:navbar-end">
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-10 px-1 text-black menu menu-horizontal">
            {NavLinks}
          </ul>
        </div>
        <div className="flex items-center gap-3 ml-8">
          <div className="">
            <Link
              to="/login"
              className="border border-[#6256ca] md:px-3 md:py-1.5 px-2 py-1 rounded-lg font-bold text-[#6256ca] hover:bg-[#ff8604] hover:text-white flex items-center"
            >
              LogIn
            </Link>
          </div>
          <div>
            <ToggleTheme></ToggleTheme>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
