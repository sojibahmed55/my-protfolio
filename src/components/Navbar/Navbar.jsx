import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <div className="fixed w-full z-50 bg-gradient-to-r from-indigo-900 via-gray-900 to-purple-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="text-2xl font-bold text-white cursor-pointer">
          Sojib <span className="text-2xl font-bold text-fuchsia-300 cursor-pointer">Protfolio</span>
        </div>
          

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-white font-medium text-lg">
          {navItems.map((item, idx) => (
            <li key={idx} className="hover:text-pink-500 transition-all">
              <Link
                to={item.to}
                smooth={true}
                duration={800}
                spy={true}
                offset={-80} // adjust for navbar height
                className="cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="hidden lg:block">
          <a
            href="/public/Sojib_Ahmed_Resume.pdf"
            target="_blank"
            download
            className="px-6 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="lg:hidden bg-gray-900 text-white flex flex-col gap-4 px-6 py-4 shadow-lg">
          {navItems.map((item, idx) => (
            <li key={idx} className="hover:text-pink-500 transition-all">
              <Link
                to={item.to}
                smooth={true}
                duration={800}
                spy={true}
                offset={-80}
                className="cursor-pointer block"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/public/Sojib_Ahmed_Resume.pdf"
              target="_blank"
              download
              className="block text-center px-6 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;



