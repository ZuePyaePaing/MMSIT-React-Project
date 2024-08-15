import React from "react";
import RatingStar from "./RatingStar";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCart.Store";

const CategorieProduct = ({ id, title, image, price, rating: { rate } }) => {
  const { addCart, carts } = useCartStore();
  const nav = useNavigate();

  const handleNavigate = () => {
    nav(`/detail/${id}`);
  };
  const handleAddCart = (event) => {
    event.stopPropagation();
    const newCart = { id: Date.now(), productId: id, quantity: 1 };
    addCart(newCart);
  };
  const isAddedToCart = carts?.some((el) => el.productId === id);

  return (
    <div
      onClick={handleNavigate}
      className=" border border-black p-4 flex rounded-md items-start w-[300px]  flex-col gap-y-3 "
    >
      <img src={image} alt={title} className="h-[120px] self-center" />
      <h3 className=" line-clamp-2 text-sm font-semibold">{title}</h3>
      <RatingStar rate={rate} className="self-start mt-auto" />
      <div className=" w-full flex justify-between mt-auto">
        <p className=" text-sm font-semibold text-nowrap">Price ${price}</p>
        {isAddedToCart ? (
          <button
            onClick={handleNavigate}
            className=" text-nowrap text-sm shadow-md text-white transition-all duration-150  rounded-md py-2 px-4 capitalize bg-teal-900 active:scale-90 "
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCart}
            className=" text-nowrap text-sm shadow-md text-white transition-all duration-150  rounded-md py-2 px-4 capitalize bg-teal-600 hover:bg-teal-400 active:scale-90 "
          >
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default CategorieProduct;
