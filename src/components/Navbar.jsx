import { useState } from "react";
import { PiPentagonBold, PiPentagonFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#28293E] text-white w-full font-primary">
      <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold ">
          <div className="w-10 h-10 rounded-full flex items-center justify-center relative">
            <PiPentagonBold className="text-[#EF6D58] text-[48px]" />
            <PiPentagonFill className="absolute text-[#EF6D58] text-[17px]" />
          </div>
          <span>Agency</span>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center justify-between gap-20 text-sm ">
          <a href="#about" className="hover:text-orange-400">
            About
          </a>
          <a href="#services" className="hover:text-orange-400">
            Services
          </a>
          <a href="#pricing" className="hover:text-orange-400">
            Pricing
          </a>
          <a href="#blog" className="hover:text-orange-400">
            Blog
          </a>
        </nav>

        {/* Right button - desktop only */}
        <div className="hidden md:block ">
          <button className="w-full h-full border border-[#FFFFFF4B] px-4 py-2 rounded-md text-base hover:bg-white hover:text-black transition">
            CONTACT
          </button>
        </div>

        {/* Hamburger Icon - Mobile */}
        <button
          className="md:hidden text-xl p-2 border border-[#FFFFFF4B] rounded-md flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#28293E] flex flex-col items-start px-6 py-4 space-y-4 z-50 md:hidden">
            <a
              href="#about"
              className="text-sm hover:text-orange-400"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm hover:text-orange-400"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-sm hover:text-orange-400"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#blog"
              className="text-sm hover:text-orange-400"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </a>
            <button className="mt-4 border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition">
              CONTACT
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
