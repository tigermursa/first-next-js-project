import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },

  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashbord",
    title: "Dashboard",
  },
];
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto">
      <h1 className=" text-3xl font-semibold">First Next js</h1>
      <ul className="flex items-center justify-center">
        {navLinks.map(({ path, title }) => (
          <li className="mx-2" key={path}>
            <NavLink exact={path ==='/'} activeClassName="text-red-700" href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
