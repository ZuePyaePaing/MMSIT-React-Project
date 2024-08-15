import React from "react";
import useProductStore from "../store/useProducts.Store";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import useCartStore from "../store/useCart.Store";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Cart = ({ id, productId, quantity }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();
  const product = products?.find((el) => el.id === productId);

  const cost = product?.price * quantity;

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are You sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success("Cart is Remove success.");
        }
      });
    }
  };
  return (
    <div className=" flex items-center justify-between px-4 py-2 border">
      <div className="w-3/4 flex items-center gap-x-3">
        <img src={product?.image} alt="" className="w-[60px]" />
        <div>
          <h4>{product?.title}</h4>
          <p>$ ( {product?.price} )</p>
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-between ">
        <div className="flex flex-col items-center">
          <p>Quantity</p>
          <div className="flex items-center gap-x-2">
            <button onClick={handleDecreaseQuantity}>
              <MinusIcon className=" size-8 p-1 bg-teal-600 text-white cursor-pointer" />
            </button>
            <p>{quantity}</p>
            <button onClick={handleIncreaseQuantity}>
              <PlusIcon className=" size-8 p-1 bg-teal-600 text-white cursor-pointer" />
            </button>
          </div>
        </div>
        <p>${cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
