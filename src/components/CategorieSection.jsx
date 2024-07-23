import React from "react";
import { products } from "../context";
import CategorieProduct from "./CategorieProduct";
const CategorieSection = () => {
  return (
    <div className=" grid md:grid-cols-4 sm:grid-cols-2 gap-3 mt-5">
      {products.map((product) => (
        <CategorieProduct key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CategorieSection;
