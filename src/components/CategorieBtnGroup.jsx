import React from "react";
import CategorieBtn from "./CategorieBtn";
import useCategoryStore from "../store/useCategory.Store";

const CategorieBtnGroup = () => {
  const { categories } = useCategoryStore();
  return (
    <div className=" flex overflow-visible gap-x-3">
      {categories.map((category) => (
        <CategorieBtn key={category.id} {...category} />
      ))}
    </div>
  );
};

export default CategorieBtnGroup;
