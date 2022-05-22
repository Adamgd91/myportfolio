import { FaBars, FaTimes } from "react-icons/fa";

import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#205375] text-gray-300 uppercase">
      <div>
        <header className="font-semibold">
          <span className="text-[gold]">Adam</span> Davidson
        </header>
      </div>

      {/* NavBar Menu */}
      {/* Hidden until 768px */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      {/* Anything less than 768px */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#205375] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">Home</li>
        <li className="py-6 text-3xl">About</li>
        <li className="py-6 text-3xl">Skills</li>
        <li className="py-6 text-3xl">Work</li>
        <li className="py-6 text-3xl">Contact</li>
      </ul>
      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default NavBar;
