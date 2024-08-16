import React from "react";
import CategorieProduct from "./CategorieProduct";
import useProductStore from "../store/useProducts.Store";
import useCategoryStore from "../store/useCategory.Store";

const CategorieSection = () => {
  const { products } = useProductStore();
  const { activeCategoryTitle } = useCategoryStore();
  console.log(activeCategoryTitle);

  const filterProducts =
    activeCategoryTitle === "all"
      ? products
      : products?.filter((el) => el.category === activeCategoryTitle);
  return (
    <div className=" grid md:grid-cols-4 sm:grid-cols-2 gap-3 mt-5">
      {filterProducts.map((product) => (
        <CategorieProduct key={filterProducts.id} {...product} />
      ))}
    </div>
  );
};

export default CategorieSection;
