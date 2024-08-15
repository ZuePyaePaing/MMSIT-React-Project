import React from "react";
import CategorieProduct from "./CategorieProduct";
import useProductStore from '../store/useProducts.Store'

const CategorieSection = () => {
  const {products} = useProductStore()
  return (
    <div className=" grid md:grid-cols-4 sm:grid-cols-2 gap-3 mt-5">
      {products.map((product) => (
        <CategorieProduct key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CategorieSection;
