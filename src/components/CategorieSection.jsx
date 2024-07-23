import React from "react";
import { products } from "../context";
import CategorieProduct from "./CategorieProduct";
const CategorieSection = () => {
  return (
    <div className=" grid grid-cols-4 gap-3 mt-5">
      {products.map((product) => (
        <CategorieProduct key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CategorieSection;
