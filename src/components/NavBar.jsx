import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#205375] text-gray-300 uppercase">
      <div>
        <header className="font-semibold">
          <span className="text-[gold]">Adam</span> Davidson
        </header>
      </div>

      {/* NavBar Menu */}
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className="hidden">
        <FaBars />
      </div>
      {/* Mobile Menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/* Social Icons */}
      <div></div>
    </div>
  );
};

export default NavBar;
