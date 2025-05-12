import React from "react";

const Footer4 = () => {
  return (
    <footer className="relative bg-gray-950 text-white pt-16 pb-10 px-6 md:px-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 320">
          <path
            fill="#111827"
            fillOpacity="1"
            d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,181.3C672,171,768,149,864,138.7C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256V0H0Z"
          />
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg">
        <div>
          <h2 className="text-3xl font-extrabold text-blue-400">dev cabin</h2>
          <p className="mt-3 text-sm text-gray-300">
            Your digital growth partner. We build tech that matters.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Get Updates</h3>
          <p className="text-sm text-gray-300 mb-3">Join our mailing list.</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-500">
        Made with 💙 by{" "}
        <span className="text-blue-400 font-medium">dev cabin</span> · &copy;
        2025 All rights reserved.
      </div>
    </footer>
  );
};
export default Footer4;
