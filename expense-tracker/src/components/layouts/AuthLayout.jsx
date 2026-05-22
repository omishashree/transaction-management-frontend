import React from 'react';
import CARD_2 from "../../assets/images/card2.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Left: Form Section */}
      <div className="w-full md:w-3/5 px-8 py-10 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">Expense Tracker</h2>
        {children}
      </div>

      {/* Right: Visual Section (hidden on small screens) */}
      <div className="hidden md:flex w-2/5 relative bg-violet-100 items-center justify-center">
        {/* Decorative Blobs */}
        <div className="w-48 h-48 rounded-3xl bg-purple-400 absolute -top-8 -left-6 z-0" />
        <div className="w-48 h-56 rounded-3xl border-[20px] border-purple-600 absolute top-1/3 -right-8 z-0" />
        <div className="w-48 h-48 rounded-3xl bg-violet-500 absolute -bottom-8 -left-6 z-0" />

        {/* Image */}
        <img
          src={CARD_2}
          alt="Card design"
          className="w-64 lg:w-[90%] relative z-10 shadow-lg"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
