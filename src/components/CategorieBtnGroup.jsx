import React from "react";
import { categoriesTitles } from "../context";
import CategorieBtn from "./CategorieBtn";

const CategorieBtnGroup = () => {
  return (
    <div className=" flex overflow-visible gap-x-3">
      <CategorieBtn title={"all"} className={'bg-black text-white'}/>
      {categoriesTitles.map((title) => (
        <CategorieBtn key={title.id} {...title} />
      ))}
    </div>
  );
};

export default CategorieBtnGroup;
