import Link from "next/link";
import React from "react";
const navLinks = [
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
      <ul  className="flex items-center justify-center">
        {navLinks.map(({ path, title }) => (
          <li className="mx-2" key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}; 

export default Navbar;
