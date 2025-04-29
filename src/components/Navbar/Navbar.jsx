import React from "react";
import navLogo from "../../assets/navlogo.svg";
import Links from "../Links/Links";

const Navbar = () => {
  return (
    <div className="navbar plus-jakarta-sans">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
          >
            <Links />
          </ul>
        </div>
        <a className="text-xl font-bold flex items-center">
          <img src={navLogo} alt="Law BD" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <Links />
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-sm sm:btn-md bg-green-600 text-white rounded-full">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
