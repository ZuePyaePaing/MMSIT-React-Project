import React from "react";
import CategorieBtn from "./CategorieBtn";

const Header = () => {
  return (
    <header className="px-5 mt-5 font-popin flex justify-between items-center">
      <h2 className=" text-3xl font-bold"> Online Shop</h2>
      <div className=" relative">
        <button className=" text-nowrap text-sm shadow-md text-white transition-all duration-150  rounded-md py-2 px-4 capitalize bg-teal-600 hover:bg-teal-400 active:scale-90 "> My Cart</button>
        <span className=" absolute top-[-10px] right-[-8px] inline-block bg-red-500 text-white w-6 h-6 text-sm text-center rounded-full">1</span>
      </div>
    </header>
  );
};

export default Header;
