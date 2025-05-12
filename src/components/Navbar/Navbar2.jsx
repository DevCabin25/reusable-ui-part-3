import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          dev <span className="text-gray-900">cabin</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          {["Home", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group hover:text-blue-600 transition"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Call-to-action Button */}
        <div className="hidden md:flex">
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 text-2xl"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} bg-white px-6 py-4`}>
        <nav className="space-y-3 text-gray-800 text-sm">
          {["Home", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block hover:text-blue-600"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar2;
