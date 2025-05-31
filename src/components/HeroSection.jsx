import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-indigo-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Build Your Digital Future with{" "}
            <span className="text-gray-900">DevCabin</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            We create stunning, high-performance websites and apps that empower
            your brand and engage your audience.
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/src/assets/logo.jpg"
            alt=""
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
