import React from "react";

const Card1 = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="max-w-xs  bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Product"
          className="w-full h-44 object-cover rounded-lg mb-3 hover:scale-105 transition-transform duration-300"
        />
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Minimal T-Shirt
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          Comfortable cotton with a great fit and design.
        </p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">$5.99</span>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
      {/* card 2 */}
      <div className="max-w-xs  bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Product"
          className="w-full h-44 object-cover rounded-lg mb-3 hover:scale-105 transition-transform duration-300"
        />
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Minimal T-Shirt
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          Comfortable cotton with a great fit and design.
        </p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">$5.99</span>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card1;
