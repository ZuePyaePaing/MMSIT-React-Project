import React from "react";
import RatingStar from "./RatingStar";
const CategorieProduct = ({ title, image, price, rating: { rate } }) => {
  return (
    <div className=" border border-black p-4 flex rounded-md items-start w-[300px]  flex-col gap-y-3 ">
      <img src={image} alt={title} className="h-[120px] self-center" />
      <h3 className=" line-clamp-2 text-sm font-semibold">{title}</h3>
      <RatingStar rate= {rate} className="self-start mt-auto" />
      <div className=" w-full flex justify-between mt-auto">
        <p className=" text-sm font-semibold text-nowrap">Price ${price}</p>
        <button className=" text-nowrap text-sm shadow-md text-white transition-all duration-150  rounded-md py-2 px-4 capitalize bg-teal-600 hover:bg-teal-400 active:scale-90 ">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default CategorieProduct;
