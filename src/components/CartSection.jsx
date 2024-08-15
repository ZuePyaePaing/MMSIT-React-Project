import React from "react";
import useCartStore from "../store/useCart.Store";
import Container from "./Container";
import CartEmpty from "../assets/CartEmpty.svg";
import Cart from "./Cart";
import useProductStore from "../store/useProducts.Store";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const product = products?.find(({ id }) => id === cv.productId);
    const cost = product ? cv.quantity * product.price : 0;
    return pv + cost;
  }, 0);

  const tex = total * 0.1;
  const netTotal = total + tex;
  return (
    <Container>
      {carts.length < 1 ? (
        <div className=" flex flex-col items-center justify-center mb-4">
          <img src={CartEmpty} alt="" className="w-[380px]" />
          <p>Empty Cart.</p>
        </div>
      ) : (
        <div className=" flex flex-col gap-y-3 ">
          {carts?.map((el, index) => (
            <Cart key={index} {...el} />
          ))}
        </div>
      )}
      <hr className=" border-2 border-black mb-2" />
      <div className=" mt-auto">
        <div className=" flex gap-x-5 items-center justify-end">
          <div>
            <p>Total ($)</p>
            <h4 className=" text-end font-bold text-xl">{total.toFixed(2)}</h4>
          </div>
          <div>
            <p>Tex (10%)</p>
            <h4 className=" text-end font-bold text-xl">{tex.toFixed(2)}</h4>
          </div>
          <div>
            <p>Net Total ($)</p>
            <h2 className=" text-end font-bold text-2xl">
              {netTotal.toFixed(2)}
            </h2>
          </div>
        </div>
        <div className="flex gap-x-5 items-center justify-end">
          <button
            className={` text-nowrap text-sm block text-white shadow-md  bg-teal-600 transition-all duration-150  rounded-md py-2 px-4 capitalize hover:bg-teal-400 active:scale-90 
        `}
          >
            Order Now
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CartSection;
