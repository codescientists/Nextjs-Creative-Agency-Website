import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavbar = () => {
    if (navOpen) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  };

  return (
    <div className="px-2 sm:px-10 md:px-40 py-4 flex items-center justify-between bg-gray-900 text-white">
      <div className="text-2xl font-bold">Code Scientist</div>
      <ul
        className={
          navOpen
            ? `bg-gray-900 text-white absolute left-0 top-0 w-screen h-screen flex flex-col justify-center items-center`
            : `hidden md:flex items-center`
        }
      >
        <button
          className={
            navOpen
              ? `absolute right-4 top-4 p-2`
              : `md:hidden text-xl border border-gray-100 p-2`
          }
          onClick={handleNavbar}
        >
          <ImCross />
        </button>
        <li className="my-2 mx-4 text-md text-gray-300 hover:text-red-500 duration-300">
          <Link href="/" passHref>
            Home
          </Link>
        </li>
        <li className="my-2 mx-4 text-md text-gray-300 hover:text-red-500 duration-300">
          <Link href="/services" passHref>
            Services
          </Link>
        </li>
        <li className="my-2 mx-4 text-md text-gray-300 hover:text-red-500 duration-300">
          <Link href="/" passHref>
            Blog
          </Link>
        </li>
        <li className="my-2 mx-4 text-md text-gray-300 hover:text-red-500 duration-300">
          <Link href="/" passHref>
            About
          </Link>
        </li>
        <li className="my-2 mx-4 text-md text-gray-300 hover:text-red-500 duration-300">
          <Link href="/" passHref>
            Contact
          </Link>
        </li>
      </ul>
      <button
        className="md:hidden text-xl border border-gray-100 p-2"
        onClick={handleNavbar}
      >
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
