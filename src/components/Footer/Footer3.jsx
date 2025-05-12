import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer3 = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-blue-500">DevCabin</h2>
          <p className="mt-3 text-sm text-gray-400">
            Crafting digital solutions with purpose, precision, and passion.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#">
              <FaFacebookF className="hover:text-blue-400" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-blue-400" />
            </a>
            <a href="#">
              <FaLinkedinIn className="hover:text-blue-400" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>SEO & Marketing</li>
            <li>Custom Software</li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Stay in Touch</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get the latest updates and offers.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
        &copy; 2025 dev cabin. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer3;
