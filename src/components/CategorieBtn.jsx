import React from "react";
import useCategoryStore from "../store/useCategory.Store";

const CategorieBtn = ({ id, title, isActive }) => {
  const { activeCategory } = useCategoryStore();
  const handleCategory = () => {
    activeCategory(id);
  };

  return (
    <button
      onClick={handleCategory}
      className={` text-nowrap text-sm  text-white shadow-md ${
        isActive ? "bg-black" : " bg-teal-600"
      } transition-all duration-150  rounded-md py-2 px-4 capitalize hover:bg-teal-400 active:scale-90 
        `}
    >
      {title}
    </button>
  );
};

export default CategorieBtn;
