import React from "react";

const Footer2 = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">DavCabin</h2>
            <p className="mt-2 text-sm text-gray-400">
              Crafting digital excellence, one pixel at a time. We build fast,
              scalable, and beautiful web apps.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Connect with us
            </h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white">
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} codeBari. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
