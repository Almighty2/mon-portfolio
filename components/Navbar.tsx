import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 px-6 sm:px-16 transition-all duration-300 ${
        scrolled ? "bg-primary/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
             <span className="font-bold text-white text-lg">M</span>
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Ousseini KABORE &nbsp;
            <span className="sm:block hidden text-pink-500">| Le-Programmeur</span>
          </p>
        </a>

        {/* Desktop Navigation */}
        <div className="flex flex-row gap-10 items-center">
            <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
                <li
                key={link.id}
                className={`${
                    active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
                onClick={() => setActive(link.title)}
                >
                <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
            </ul>

            {/* Language Selector */}
            <div className="hidden sm:flex items-center gap-1 border border-secondary/30 rounded px-2 py-1 cursor-pointer hover:border-white transition-colors">
                <span className="text-white text-sm font-medium">FR</span>
                <ChevronDown size={14} className="text-white" />
            </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-white focus:outline-none"
          >
             {toggle ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-[#100d25] border border-gray-800`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className="text-secondary font-medium cursor-pointer text-[16px]">FR</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;