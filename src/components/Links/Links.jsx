import React from "react";
import { NavLink } from "react-router";

const Links = () => {
  const linkStyle = "border-b-2";
  const links = [
    { link: "/", name: "Home" },
    { link: "/bookings", name: "My-Bookings" },
    { link: "/blogs", name: "Blogs" },
    { link: "/contact", name: "Contact Us" },
  ];

  return links.map(({ link, name }, index) => (
    <li key={index} className="">
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? linkStyle : "")}
      >
        {name}
      </NavLink>
    </li>
  ));
};

export default Links;
