import React from "react";
import Container from "../components/Container";
import { Link, useNavigate, useParams } from "react-router-dom";
import useProductStore from "../store/useProducts.Store";
import useCartStore from "../store/useCart.Store";
import RatingStar from "../components/RatingStar";

const ProductDetail = () => {
  const { products } = useProductStore();
  const { carts, addCart } = useCartStore();
  const { id } = useParams();
  const nav = useNavigate();
  const handleNavigate = () => {
    nav(`/detail/${id}`);
  };
  const product = products?.find((el) => el.id == id);

  const handleAddCart = (event) => {
    event.stopPropagation();
    const newCart = { id: Date.now(), productId: id, quantity: 1 };
    addCart(newCart);
  };
  const isAddedToCart = carts?.some((el) => el.productId === id);

  return (
    <Container>
      <Link to={"/"} className="p-2">
        Home
      </Link>
      /
      <Link to={"/"} className="text-gray-500 p-2">
        Detail
      </Link>
      <div className=" flex gap-x-5 border md:px-24 px-2 items-center py-4 md:flex-row flex-col gap-y-4 ">
        <div className="md:w-1/2 w-full flex justify-center items-center flex-col gap-y-4">
          <img
            src={product.image}
            alt={product.title}
            className="md:h-[280px] h-[160px]"
          />
          <div className=" flex gap-3 justify-center items-center ">
            <img
              src={product.image}
              className="h-[90px]"
              alt={product.title}
            />
            <img
              src={product.image}
              className="h-[100px]"
              alt={product.title}
            />
            <img
              src={product.image}
              className="h-[100px]"
              alt={product.title}
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-y-2 ">
          <h3 className=" md:line-clamp-2 md:text-4xl font-bold">{product.title}</h3>
          <p className="px-3 py-2 bg-slate-400 text-black w-fit text-md">
            {product.category}
          </p>
          <p className=" text-md leading-6 tracking-wider">
            {product.description}
          </p>
          <div>
            <RatingStar
              rate={product.rating.rate}
              className="self-start mt-auto mb-3"
            />
            <div className=" w-full flex justify-between mt-auto">
              <p className=" text-md  text-nowrap">
                Price ( ${product.price} )
              </p>
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
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
