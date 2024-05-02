import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", to: "/" },
    { id: 2, text: "About", to: "/about" },
    { id: 3, text: "Contact", to: "/contact" },
    { id: 4, text: "Register", to: "/register" },
    { id: 5, text: "Login", to: "/auth/login" },
  ];

  return (
    <div className="w-full bg-black flex justify-between items-center h-20 mx-auto px-2 text-white fixed top-0 z-50">
      <h1 className="w-1/2 md:w-full text-3xl font-bold text-[#E3C1B4]">
        InsightLog
      </h1>
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-2 rounded-xl mx-2 cursor-pointer duration-300 hover:text-white ease-in-out hover:scale-110"
          >
            {/* Use Link for navigation */}
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 right-0 bottom-0 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-full duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          InsightLog
        </h1>
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {/* Use Link for navigation */}
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
