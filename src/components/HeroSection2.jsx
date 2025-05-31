import React from "react";

const HeroSection2 = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Elevate Your Code with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              DevCabin
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Build high-quality websites and apps that stand out. At DevCabin, we
            help turn your digital vision into reality.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition">
              Get a Quote
            </button>
            <button className="border bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition">
              View Portfolio
            </button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src="/src/assets/logo2.jpg"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
